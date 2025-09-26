import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar, FileText, Search, Paperclip, MapPin, AlertTriangle } from "lucide-react";
import { mockData } from "../../data/mockData";

interface RiskAssessmentsViewProps {
  language: string;
  onBack: () => void;
  onRiskAssessmentDetailsClick?: (assessment: any) => void;
  onAttachmentClick?: (attachments: any[]) => void;
}

export function RiskAssessmentsView({ language, onBack, onRiskAssessmentDetailsClick, onAttachmentClick }: RiskAssessmentsViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const translations = {
    en: {
      title: "Route Risk Assessments",
      labels: {
        search: "Search risk assessments...",
        filterByIssuer: "Filter by issuer",
        filterByCategory: "Filter by category",
        allIssuers: "All Issuers",
        allCategories: "All Categories",
        serialNumber: "Assessment ID",
        posted: "Posted",
        route: "Route",
        riskLevel: "Risk Level",
        attachment: "Attachment",
        attachments: "Attachments"
      },
      actions: {
        view: "View Details"
      }
    },
    zh: {
      title: "路線風險評估",
      labels: {
        search: "搜尋風險評估...",
        filterByIssuer: "按發布者篩選",
        filterByCategory: "按類別篩選",
        allIssuers: "所有發布者",
        allCategories: "所有類別",
        serialNumber: "評估編號",
        posted: "發布",
        route: "路線",
        riskLevel: "風險等級",
        attachment: "附件",
        attachments: "附件"
      },
      actions: {
        view: "查看詳情"
      }
    }
  };

  const t = translations[language as keyof typeof translations];
  const data = mockData[language as keyof typeof mockData].risk;

  const filteredData = Array.isArray(data) ? data.filter((item: any) => {
    const searchFields = [
      item.title,
      item.description,
      item.content,
      item.referenceCode,
      item.serialNumber,
      item.route
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
      case 'Safety': return 'bg-red-500 text-white';
      case 'Operations': return 'bg-purple-500 text-white';
      case 'Security': return 'bg-orange-500 text-white';
      case 'Transport': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleViewDetails = (assessment: any) => {
    if (onRiskAssessmentDetailsClick) {
      onRiskAssessmentDetailsClick(assessment);
    }
  };

  const handleAttachmentAction = (assessment: any) => {
    if (onAttachmentClick && assessment.attachments) {
      onAttachmentClick(assessment.attachments);
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
        {Array.isArray(filteredData) && filteredData.map((assessment: any) => (
          <Card key={assessment.id} className="hover:shadow-md transition-shadow relative">
            {assessment.issuer && (
              <div className="absolute top-3 left-3 z-10">
                <Badge className={`${getIssuerColor(assessment.issuer)} text-xs px-2 py-1`}>
                  {assessment.issuer}
                </Badge>
              </div>
            )}
            
            {assessment.riskLevel && (
              <div className="absolute top-3 right-3 z-10">
                <Badge className={`${getRiskLevelColor(assessment.riskLevel)} text-xs px-2 py-1 border`}>
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {assessment.riskLevel}
                </Badge>
              </div>
            )}
            
            <CardHeader className="pt-16">
              <div className="space-y-2">
                <CardTitle className="text-lg leading-tight">{assessment.title}</CardTitle>
                
                {assessment.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">{assessment.referenceCode}</p>
                )}
                
                <div className="space-y-1">
                  {assessment.serialNumber && (
                    <p className="text-xs text-gray-500">{t.labels.serialNumber}: {assessment.serialNumber}</p>
                  )}
                  {assessment.route && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {t.labels.route}: {assessment.route}
                    </div>
                  )}
                  {(assessment.date || assessment.posted) && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {t.labels.posted}: {assessment.date || assessment.posted}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {assessment.description && (
                  <p className="text-gray-600 text-sm">{assessment.description}</p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {assessment.category && (
                    <Badge variant="outline" className="text-xs">{assessment.category}</Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(assessment)}>
                    <FileText className="h-4 w-4 mr-1" />
                    {t.actions.view}
                  </Button>
                  
                  {assessment.hasAttachment && (
                    <Button size="sm" variant="outline" onClick={() => handleAttachmentAction(assessment)}>
                      <Paperclip className="h-4 w-4 mr-1" />
                      {assessment.attachmentCount > 1 
                        ? `${assessment.attachmentCount} ${t.labels.attachments}`
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