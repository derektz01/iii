import { 
  FileText, 
  Bell, 
  Newspaper, 
  BookOpen, 
  Heart, 
  ClipboardList, 
  Briefcase,
  FolderOpen,
  Shield,
  AlertTriangle,
  Camera
} from "lucide-react";

interface LandingPageProps {
  language: string;
  onSectionClick: (section: string) => void;
}

export function LandingPage({ language, onSectionClick }: LandingPageProps) {
  const translations = {
    en: {
      welcome: "Welcome to Corporate Portal",
      subtitle: "Access all your corporate resources in one place",
      sections: {
        policies: "Policies & Regulations",
        notices: "Notices",
        presses: "Press Releases",
        publications: "Publications", 
        benefits: "Employee Benefits",
        forms: "Forms & Reports",
        jobs: "Job Vacancies",
        media: "Media Files",
        risk: "Route Risk Assessments",
        safety: "Safety Tips",
        gallery: "Photo Gallery"
      }
    },
    zh: {
      welcome: "歡迎使用企業入口網站",
      subtitle: "在一個地方訪問所有企業資源",
      sections: {
        policies: "政策與法規",
        notices: "通知公告",
        presses: "新聞發布",
        publications: "出版物",
        benefits: "員工福利",
        forms: "表格與報告",
        jobs: "職位空缺",
        media: "媒體檔案",
        risk: "路線風險評估",
        safety: "安全提示",
        gallery: "照片庫"
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const sections = [
    { key: 'policies', icon: FileText, color: 'text-blue-600' },
    { key: 'notices', icon: Bell, color: 'text-yellow-600' },
    { key: 'presses', icon: Newspaper, color: 'text-green-600' },
    { key: 'publications', icon: BookOpen, color: 'text-purple-600' },
    { key: 'benefits', icon: Heart, color: 'text-red-600' },
    { key: 'forms', icon: ClipboardList, color: 'text-indigo-600' },
    { key: 'jobs', icon: Briefcase, color: 'text-orange-600' },
    { key: 'media', icon: FolderOpen, color: 'text-teal-600' },
    { key: 'risk', icon: Shield, color: 'text-cyan-600' },
    { key: 'safety', icon: AlertTriangle, color: 'text-amber-600' },
    { key: 'gallery', icon: Camera, color: 'text-pink-600' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-gray-900 mb-4">{t.welcome}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {sections.map(({ key, icon: Icon, color }) => (
          <div
            key={key}
            className="flex flex-col items-center text-center cursor-pointer group"
            onClick={() => onSectionClick(key)}
          >
            <div className="relative mb-2 sm:mb-3">
              {/* Android-style icon background */}
              <div className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 bg-gray-100 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:bg-gray-200 group-active:scale-95">
                <Icon className={`h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ${color}`} />
              </div>
              {/* Touch feedback overlay */}
              <div className="absolute inset-0 rounded-2xl bg-black opacity-0 group-active:opacity-10 transition-opacity duration-150" />
            </div>
            <h3 className="text-sm sm:text-base text-gray-900 leading-tight max-w-full px-1">
              {t.sections[key as keyof typeof t.sections]}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}