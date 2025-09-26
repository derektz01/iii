import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, FileText, User, File, Presentation, Video, Archive, Download, Shield } from "lucide-react";

interface SafetyTipsDetailsProps {
  safetyTip: any;
  language: string;
  onBack: () => void;
  onAttachmentClick: (attachments: any[]) => void;
}

export function SafetyTipsDetails({ safetyTip, language, onBack, onAttachmentClick }: SafetyTipsDetailsProps) {
  const translations = {
    en: {
      title: "Safety Tip Details",
      referenceCode: "Reference Code",
      serialNumber: "Tip ID",
      issuer: "Issuer",
      publishDate: "Date",
      category: "Category",
      priority: "Priority",
      description: "Description",
      content: "Safety Information",
      attachments: "Attachments",
      download: "Download"
    },
    zh: {
      title: "安全提示詳情",
      referenceCode: "參考代碼",
      serialNumber: "提示編號",
      issuer: "發布者",
      publishDate: "日期",
      category: "類別",
      priority: "優先級",
      description: "描述",
      content: "安全信息",
      attachments: "附件",
      download: "下載"
    }
  };

  const t = translations[language as keyof typeof translations];

  const getIssuerColor = (issuer: string) => {
    switch (issuer) {
      case 'Safety': return 'bg-red-500 text-white';
      case 'HR': return 'bg-blue-500 text-white';
      case 'Operations': return 'bg-purple-500 text-white';
      case 'Security': return 'bg-orange-500 text-white';
      case 'Health': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
                {safetyTip.title}
              </CardTitle>
              
              <div className="space-y-2">
                {safetyTip.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">
                    {t.referenceCode}: {safetyTip.referenceCode}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  {safetyTip.serialNumber && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {t.serialNumber}: {safetyTip.serialNumber}
                    </div>
                  )}
                  
                  {(safetyTip.date || safetyTip.posted) && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t.publishDate}: {safetyTip.date || safetyTip.posted}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 ml-4">
              {safetyTip.issuer && (
                <Badge className={`${getIssuerColor(safetyTip.issuer)}`}>
                  {safetyTip.issuer}
                </Badge>
              )}
              {safetyTip.priority && (
                <Badge className={`${getPriorityColor(safetyTip.priority)} border`}>
                  <Shield className="h-3 w-3 mr-1" />
                  {safetyTip.priority}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {safetyTip.category && (
            <div className="flex flex-wrap gap-2">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">{t.category}</h3>
                <Badge variant="outline">{safetyTip.category}</Badge>
              </div>
            </div>
          )}
          
          {safetyTip.description && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{t.description}</h3>
              <p className="text-gray-600">{safetyTip.description}</p>
            </div>
          )}
          
          {safetyTip.content && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{t.content}</h3>
              <p className="text-gray-600 leading-relaxed">{safetyTip.content}</p>
            </div>
          )}
          
          {safetyTip.hasAttachment && safetyTip.attachments && safetyTip.attachments.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">{t.attachments}</h3>
              <div className="space-y-3">
                {safetyTip.attachments.map((attachment: any) => (
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