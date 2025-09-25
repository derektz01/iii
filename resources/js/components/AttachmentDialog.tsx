import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Download, FileText, File, Presentation } from "lucide-react";

interface AttachmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  attachments: any[];
  language: string;
}

export function AttachmentDialog({ isOpen, onClose, attachments, language }: AttachmentDialogProps) {
  const translations = {
    en: {
      selectAttachment: "Select Attachment",
      selectAttachmentDescription: "Choose from the available attachments to download",
      download: "Download",
      close: "Close"
    },
    zh: {
      selectAttachment: "選擇附件",
      selectAttachmentDescription: "從可用的附件中選擇要下載的文件",
      download: "下載",
      close: "關閉"
    }
  };

  const t = translations[language as keyof typeof translations];

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
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleDownload = (attachment: any) => {
    // Mock download action - in real app this would trigger actual download
    console.log(`Downloading ${attachment.name}`);
    // You can add actual download logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{t.selectAttachment}</DialogTitle>
          <DialogDescription>{t.selectAttachmentDescription}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {attachments.map((attachment) => (
            <div 
              key={attachment.id} 
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {getFileIcon(attachment.type)}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
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
                variant="outline"
                onClick={() => handleDownload(attachment)}
                className="ml-2"
              >
                <Download className="h-4 w-4 mr-1" />
                {t.download}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end pt-4">
          <Button variant="outline" onClick={onClose}>
            {t.close}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}