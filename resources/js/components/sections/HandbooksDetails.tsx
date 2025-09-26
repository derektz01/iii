import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, FileText, User, File, Presentation, Video, Archive, Download, BookOpen } from "lucide-react";
import { badgeColors } from "../../data/mockData";

interface HandbooksDetailsProps {
  handbook: any;
  language: string;
  onBack: () => void;
  onAttachmentClick: (attachments: any[]) => void;
}

export function HandbooksDetails({ handbook, language, onBack, onAttachmentClick }: HandbooksDetailsProps) {
  const translations = {
    en: {
      title: "Handbook Details",
      referenceCode: "Reference Code",
      serialNumber: "Document ID",
      issuer: "Issuer",
      publishDate: "Date",
      category: "Category",
      documentType: "Document Type",
      description: "Description",
      content: "Content",
      attachments: "Attachments",
      download: "Download",
      pages: "Pages",
      duration: "Duration",
      size: "Size"
    },
    zh: {
      title: "手冊詳情",
      referenceCode: "參考代碼",
      serialNumber: "文件編號",
      issuer: "發布者",
      publishDate: "日期",
      category: "類別",
      documentType: "文件類型",
      description: "描述",
      content: "內容",
      attachments: "附件",
      download: "下載",
      pages: "頁數",
      duration: "時長",
      size: "大小"
    }
  };

  const t = translations[language as keyof typeof translations];

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

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'word':
        return <File className="h-5 w-5 text-blue-500" />;
      case 'excel':
        return <File className="h-5 w-5 text-green-500" />;
      case 'powerpoint':
        return <Presentation className="h-5 w-5 text-orange-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-purple-500" />;
      case 'archive':
        return <Archive className="h-5 w-5 text-yellow-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleSingleAttachmentDownload = (attachment: any) => {
    console.log(`Downloading ${attachment.name}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl text-gray-900">{t.title}</h2>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl leading-tight mb-3">
                {handbook.title}
              </CardTitle>
              
              <div className="space-y-2">
                {handbook.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">
                    {t.referenceCode}: {handbook.referenceCode}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  {handbook.serialNumber && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {t.serialNumber}: {handbook.serialNumber}
                    </div>
                  )}
                  
                  {(handbook.date || handbook.posted) && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t.publishDate}: {handbook.date || handbook.posted}
                    </div>
                  )}
                  
                  {handbook.pages && (
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {t.pages}: {handbook.pages}
                    </div>
                  )}
                  
                  {handbook.duration && (
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4" />
                      {t.duration}: {handbook.duration}
                    </div>
                  )}
                  
                  {handbook.size && (
                    <div className="flex items-center gap-1">
                      <File className="h-4 w-4" />
                      {t.size}: {handbook.size}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 ml-4">
              {handbook.issuer && (
                <Badge className={getIssuerColor(handbook.issuer)}>
                  {handbook.issuer}
                </Badge>
              )}
              {handbook.type && (
                <Badge className={`${getHandbookTypeColor(handbook.type)} border`}>
                  {getHandbookTypeIcon(handbook.type)}
                  <span className="ml-1">{handbook.type}</span>
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {handbook.category && (
            <div className="flex flex-wrap gap-2">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">{t.category}</h3>
                <Badge className={getCategoryColor(handbook.category)}>{handbook.category}</Badge>
              </div>
            </div>
          )}
          
          {handbook.description && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{t.description}</h3>
              <p className="text-gray-600">{handbook.description}</p>
            </div>
          )}
          
          {handbook.content && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{t.content}</h3>
              <p className="text-gray-600 leading-relaxed">{handbook.content}</p>
            </div>
          )}
          
          {handbook.hasAttachment && handbook.attachments && handbook.attachments.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">{t.attachments}</h3>
              <div className="space-y-3">
                {handbook.attachments.map((attachment: any) => (
                  <div 
                    key={attachment.id} 
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                    onClick={() => handleSingleAttachmentDownload(attachment)}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {getFileIcon(attachment.type)}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                          {attachment.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {attachment.type}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {attachment.size}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSingleAttachmentDownload(attachment);
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}