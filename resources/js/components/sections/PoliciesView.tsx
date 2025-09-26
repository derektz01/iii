import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar, FileText, Search, Paperclip } from "lucide-react";
import { mockData, badgeColors } from "../../data/mockData";

interface PoliciesViewProps {
  language: string;
  onBack: () => void;
  onPolicyDetailsClick?: (policy: any) => void;
  onAttachmentClick?: (attachments: any[]) => void;
}

export function PoliciesView({ language, onBack, onPolicyDetailsClick, onAttachmentClick }: PoliciesViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const translations = {
    en: {
      title: "Policies & Regulations",
      labels: {
        search: "Search policies...",
        filterByIssuer: "Filter by issuer",
        filterByCategory: "Filter by category",
        allIssuers: "All Issuers",
        allCategories: "All Categories",
        serialNumber: "Serial Number",
        posted: "Posted",
        attachment: "Attachment",
        attachments: "Attachments"
      },
      actions: {
        view: "View Details"
      }
    },
    zh: {
      title: "政策與法規",
      labels: {
        search: "搜尋政策...",
        filterByIssuer: "按發布者篩選",
        filterByCategory: "按類別篩選",
        allIssuers: "所有發布者",
        allCategories: "所有類別",
        serialNumber: "序列號",
        posted: "發布",
        attachment: "附件",
        attachments: "附件"
      },
      actions: {
        view: "查看詳情"
      }
    }
  };

  const t = translations[language as keyof typeof translations];
  const data = mockData[language as keyof typeof mockData].policies;

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

  const handleViewDetails = (policy: any) => {
    if (onPolicyDetailsClick) {
      onPolicyDetailsClick(policy);
    }
  };

  const handleAttachmentAction = (policy: any) => {
    if (onAttachmentClick && policy.attachments) {
      onAttachmentClick(policy.attachments);
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
        {Array.isArray(filteredData) && filteredData.map((policy: any) => (
          <Card key={policy.id} className="hover:shadow-md transition-shadow relative">
            {policy.issuer && (
              <div className="absolute top-3 left-3 z-10">
                <Badge className={`${getIssuerColor(policy.issuer)} text-xs px-2 py-1`}>
                  {policy.issuer}
                </Badge>
              </div>
            )}
            
            <CardHeader className="pt-12">
              <div className="space-y-2">
                <CardTitle className="text-lg leading-tight pr-16">{policy.title}</CardTitle>
                
                {policy.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">{policy.referenceCode}</p>
                )}
                
                <div className="space-y-1">
                  {policy.serialNumber && (
                    <p className="text-xs text-gray-500">{t.labels.serialNumber}: {policy.serialNumber}</p>
                  )}
                  {policy.date && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {policy.date}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {policy.description && (
                  <p className="text-gray-600 text-sm">{policy.description}</p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {policy.category && (
                    <Badge className={`${getCategoryColor(policy.category)} text-xs`}>{policy.category}</Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(policy)}>
                    <FileText className="h-4 w-4 mr-1" />
                    {t.actions.view}
                  </Button>
                  
                  {policy.hasAttachment && (
                    <Button size="sm" variant="outline" onClick={() => handleAttachmentAction(policy)}>
                      <Paperclip className="h-4 w-4 mr-1" />
                      {policy.attachmentCount > 1 
                        ? `${policy.attachmentCount} ${t.labels.attachments}`
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