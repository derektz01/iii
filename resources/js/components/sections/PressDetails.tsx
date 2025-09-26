import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, FileText, User, File, Presentation, Video, Archive, Download } from "lucide-react";

interface PressDetailsProps {
  press: any;
  language: string;
  onBack: () => void;
  onAttachmentClick: (attachments: any[]) => void;
}

export function PressDetails({ press, language, onBack, onAttachmentClick }: PressDetailsProps) {
  const translations = {
    en: {
      title: "Press Release Details",
      referenceCode: "Reference Code",
      serialNumber: "Serial Number",
      issuer: "Issuer",
      publishDate: "Date",
      category: "Category",
      description: "Description",
      content: "Content",
      attachments: "Attachments",
      download: "Download"
    },
    zh: {
      title: "新聞發布詳情",
      referenceCode: "參考代碼",
      serialNumber: "序列號",
      issuer: "發布者",
      publishDate: "日期",
      category: "類別",
      description: "描述",
      content: "內容",
      attachments: "附件",
      download: "下載"
    }
  };

  const t = translations[language as keyof typeof translations];

  const getIssuerColor = (issuer: string) => {
    switch (issuer) {
      case 'HR': return 'bg-blue-500 text-white';
      case 'IT': return 'bg-green-500 text-white';
      case 'Operations': return 'bg-purple-500 text-white';
      case 'Marketing': return 'bg-orange-500 text-white';
      case 'Executive': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
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
                {press.title}
              </CardTitle>
              
              <div className="space-y-2">
                {press.referenceCode && (
                  <p className="text-sm text-gray-600 font-mono">
                    {t.referenceCode}: {press.referenceCode}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  {press.serialNumber && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {t.serialNumber}: {press.serialNumber}
                    </div>
                  )}
                  
                  {(press.date || press.posted) && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t.publishDate}: {press.date || press.posted}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {press.issuer && (
              <Badge className={`${getIssuerColor(press.issuer)} ml-4`}>
                {press.issuer}
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {press.category && (
            <div className="flex flex-wrap gap-2">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">{t.category}</h3>
                <Badge variant="outline">{press.category}</Badge>
              </div>
            </div>
          )}
          
          {press.description && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{t.description}</h3>
              <p className="text-gray-600">{press.description}</p>
            </div>
          )}
          
          {press.content && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{t.content}</h3>
              <p className="text-gray-600 leading-relaxed">{press.content}</p>
            </div>
          )}
          
          {press.hasAttachment && press.attachments && press.attachments.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">{t.attachments}</h3>
              <div className="space-y-3">
                {press.attachments.map((attachment: any) => (
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