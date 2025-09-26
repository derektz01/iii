import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar, FileText, Search, Paperclip, Video, BookOpen, FileVideo } from "lucide-react";
import { mockData, badgeColors } from "../../data/mockData";

interface HandbooksViewProps {
  language: string;
  onBack: () => void;
  onHandbookDetailsClick?: (handbook: any) => void;
  onAttachmentClick?: (attachments: any[]) => void;
}

export function HandbooksView({ language, onBack, onHandbookDetailsClick, onAttachmentClick }: HandbooksViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const translations = {
    en: {
      title: "Handbooks and Videos",
      labels: {
        search: "Search handbooks and videos...",
        filterByIssuer: "Filter by issuer",
        filterByCategory: "Filter by category",
        allIssuers: "All Issuers",
        allCategories: "All Categories",
        serialNumber: "Document ID",
        posted: "Posted",
        fileType: "Type",
        attachment: "Attachment",
        attachments: "Attachments",
        pages: "Pages",
        duration: "Duration"
      },
      actions: {
        view: "View Details"
      }
    },
    zh: {
      title: "手冊和影片",
      labels: {
        search: "搜尋手冊和影片...",
        filterByIssuer: "按發布者篩選",
        filterByCategory: "按類別篩選",
        allIssuers: "所有發布者",
        allCategories: "所有類別",
        serialNumber: "文件編號",
        posted: "發布",
        fileType: "類型",
        attachment: "附件",
        attachments: "附件",
        pages: "頁數",
        duration: "時長"
      },
      actions: {
        view: "查看詳情"
      }
    }
  };

  const t = translations[language as keyof typeof translations];
  const data = mockData[language as keyof typeof mockData].handbooks;

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
    return badgeColors.issuer[issuer] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    return badgeColors.category[category] || 'bg-gray-100 text-gray-800';
  };

  const getHandbookTypeIcon = (handbookType: string) => {
    switch (handbookType?.toLowerCase()) {
      case 'training videos':
      case '培訓影片':
        return <Video className="h-4 w-4" />;
      case 'handbook':
      case '手冊':
      case 'system manual':
      case '系統手冊':
      case 'procedures manual':
      case '程序手冊':
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getHandbookTypeColor = (handbookType: string) => {
    switch (handbookType?.toLowerCase()) {
      case 'training videos':
      case '培訓影片':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'handbook':
      case '手冊':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'system manual':
      case '系統手冊':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'procedures manual':
      case '程序手冊':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleViewDetails = (handbook: any) => {
    if (onHandbookDetailsClick) {
      onHandbookDetailsClick(handbook);
    }
  };

  const handleAttachmentAction = (handbook: any) => {
    if (onAttachmentClick && handbook.attachments) {
      onAttachmentClick(handbook.attachments);
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
        {Array.isArray(filteredData) && filteredData.map((handbook: any) => (
          <Card key={handbook.id} className="hover:shadow-md transition-shadow relative">
            {handbook.issuer && (
              <div className="absolute top-3 left-3 z-10">
                <Badge className={`${getIssuerColor(handbook.issuer)} text-xs px-2 py-1`}>
                  {handbook.issuer}
                </Badge>
              </div>
            )}
            
            {handbook.type && (
              <div className="absolute top-3 right-3 z-10">
                <Badge className={`${getHandbookTypeColor(handbook.type)} text-xs px-2 py-1 border`}>
                  {getHandbookTypeIcon(handbook.type)}
                  <span className="ml-1">{handbook.type}</span>
                </Badge>
              </div>
            )}
            
            <CardHeader className="pt-16">
              <div className="space-y-2">
                <CardTitle className="text-lg leading-tight">{handbook.title}</CardTitle>
                
                {handbook.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">{handbook.referenceCode}</p>
                )}
                
                <div className="space-y-1">
                  {handbook.serialNumber && (
                    <p className="text-xs text-gray-500">{t.labels.serialNumber}: {handbook.serialNumber}</p>
                  )}
                  {(handbook.date || handbook.posted) && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {t.labels.posted}: {handbook.date || handbook.posted}
                    </div>
                  )}
                  {handbook.pages && (
                    <p className="text-xs text-gray-500">{t.labels.pages}: {handbook.pages}</p>
                  )}
                  {handbook.duration && (
                    <p className="text-xs text-gray-500">{t.labels.duration}: {handbook.duration}</p>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {handbook.description && (
                  <p className="text-gray-600 text-sm">{handbook.description}</p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {handbook.category && (
                    <Badge className={`${getCategoryColor(handbook.category)} text-xs`}>
                      {handbook.category}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(handbook)}>
                    <FileText className="h-4 w-4 mr-1" />
                    {t.actions.view}
                  </Button>
                  
                  {handbook.hasAttachment && (
                    <Button size="sm" variant="outline" onClick={() => handleAttachmentAction(handbook)}>
                      <Paperclip className="h-4 w-4 mr-1" />
                      {handbook.attachmentCount > 1 
                        ? `${handbook.attachmentCount} ${t.labels.attachments}`
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