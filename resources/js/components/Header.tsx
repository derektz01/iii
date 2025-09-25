import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Globe, ArrowLeft } from "lucide-react";

interface HeaderProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onBackClick: () => void;
  showBackButton: boolean;
}

export function Header({ language, onLanguageChange, onBackClick, showBackButton }: HeaderProps) {
  const translations = {
    en: {
      title: "Corporate Portal",
      language: "Language"
    },
    zh: {
      title: "企業入口網站",
      language: "語言"
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackClick}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-xl text-gray-900">{t.title}</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-gray-600" />
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-24 border-0 shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}