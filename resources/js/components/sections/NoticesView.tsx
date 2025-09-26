import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar, FileText, Search, Paperclip } from "lucide-react";
import { mockData } from "../../data/mockData";

interface NoticesViewProps {
  language: string;
  onBack: () => void;
  onNoticeDetailsClick?: (notice: any) => void;
  onAttachmentClick?: (attachments: any[]) => void;
}

export function NoticesView({ language, onBack, onNoticeDetailsClick, onAttachmentClick }: NoticesViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const translations = {
    en: {
      title: "Notices",
      labels: {
        search: "Search notices...",
        filterByIssuer: "Filter by issuer",
        filterByCategory: "Filter by category",
        allIssuers: "All Issuers",
        allCategories: "All Categories",
        serialNumber: "Serial Number",
        posted: "Posted",
        priority: "Priority",
        attachment: "Attachment",
        attachments: "Attachments"
      },
      actions: {
        view: "View Details"
      }
    },
    zh: {
      title: "通知公告",
      labels: {
        search: "搜尋通知...",
        filterByIssuer: "按發布者篩選",
        filterByCategory: "按類別篩選",
        allIssuers: "所有發布者",
        allCategories: "所有類別",
        serialNumber: "序列號",
        posted: "發布",
        priority: "優先級",
        attachment: "附件",
        attachments: "附件"
      },
      actions: {
        view: "查看詳情"
      }
    }
  };

  const t = translations[language as keyof typeof translations];
  const data = mockData[language as keyof typeof mockData].notices;

  const filteredData = Array.isArray(data) ? data.filter((item: any) => {
    const searchFields = [
      item.title,
      item.description,
      item.content,
      item.referenceCode,
      item.serialNumber
    ].filter(Boolean).join(' ').toLowerCase();
    
    const matchesSearch = searchFields.includes(searchTerm.toLowerCase());
    const matchesIssuer = selectedIssuer === 'all' || item.issuer === selectedIssuer;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesIssuer && matchesCategory;
  }) : data;

  const issuers = Array.isArray(data) ? 
    [...new Set(data.map((item: any) => item.issuer).filter(Boolean))] : [];
  const categories = Array.isArray(data) ? 
    [...new Set(data.map((item: any) => item.category).filter(Boolean))] : [];

  const getIssuerColor = (issuer: string) => {
    switch (issuer) {
      case 'HR': return 'bg-blue-500 text-white';
      case 'IT': return 'bg-green-500 text-white';
      case 'Operations': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (notice: any) => {
    if (onNoticeDetailsClick) {
      onNoticeDetailsClick(notice);
    }
  };

  const handleAttachmentAction = (notice: any) => {
    if (onAttachmentClick && notice.attachments) {
      onAttachmentClick(notice.attachments);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl text-gray-900 mb-4">{t.title}</h2>
        
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t.labels.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {(issuers.length > 0 || categories.length > 0) && (
            <div className="flex gap-4">
              {issuers.length > 0 && (
                <div className="flex-1">
                  <Select value={selectedIssuer} onValueChange={setSelectedIssuer}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.labels.filterByIssuer} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t.labels.allIssuers}</SelectItem>
                      {issuers.map((issuer) => (
                        <SelectItem key={issuer} value={issuer}>{issuer}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {categories.length > 0 && (
                <div className="flex-1">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.labels.filterByCategory} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t.labels.allCategories}</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(filteredData) && filteredData.map((notice: any) => (
          <Card key={notice.id} className="hover:shadow-md transition-shadow relative">
            {notice.issuer && (
              <div className="absolute top-3 left-3 z-10">
                <Badge className={`${getIssuerColor(notice.issuer)} text-xs px-2 py-1`}>
                  {notice.issuer}
                </Badge>
              </div>
            )}
            
            <CardHeader className="pt-12">
              <div className="space-y-2">
                <CardTitle className="text-lg leading-tight pr-16">{notice.title}</CardTitle>
                
                {notice.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">{notice.referenceCode}</p>
                )}
                
                <div className="space-y-1">
                  {notice.serialNumber && (
                    <p className="text-xs text-gray-500">{t.labels.serialNumber}: {notice.serialNumber}</p>
                  )}
                  {notice.posted && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {t.labels.posted}: {notice.posted}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {notice.description && (
                  <p className="text-gray-600 text-sm">{notice.description}</p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {notice.category && (
                    <Badge variant="outline" className="text-xs">{notice.category}</Badge>
                  )}
                  {notice.priority && (
                    <Badge className={getPriorityColor(notice.priority)} variant="outline">
                      {notice.priority}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(notice)}>
                    <FileText className="h-4 w-4 mr-1" />
                    {t.actions.view}
                  </Button>
                  
                  {notice.hasAttachment && (
                    <Button size="sm" variant="outline" onClick={() => handleAttachmentAction(notice)}>
                      <Paperclip className="h-4 w-4 mr-1" />
                      {notice.attachmentCount > 1 
                        ? `${notice.attachmentCount} ${t.labels.attachments}`
                        : `1 ${t.labels.attachment}`
                      }
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}