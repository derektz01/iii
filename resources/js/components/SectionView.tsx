import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Calendar, MapPin, Users, AlertCircle, FileText, Download, Search, Paperclip } from "lucide-react";
import { mockData } from "../data/mockData";

interface SectionViewProps {
  section: string;
  language: string;
  onBack: () => void;
  onPolicyDetailsClick?: (policy: any) => void;
  onAttachmentClick?: (attachments: any[]) => void;
}

export function SectionView({ section, language, onBack, onPolicyDetailsClick, onAttachmentClick }: SectionViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const translations = {
    en: {
      back: "Back to Home",
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
        safety: "Safety Tips"
      },
      labels: {
        date: "Date",
        category: "Category",
        priority: "Priority",
        department: "Department",
        location: "Location",
        type: "Type",
        posted: "Posted",
        route: "Route",
        riskLevel: "Risk Level",
        status: "Status",
        lastUpdate: "Last Update",
        eligibility: "Eligibility",
        format: "Format",
        size: "Size",
        duration: "Duration",
        pages: "Pages",
        slides: "Slides",
        count: "Count",
        referenceCode: "Reference Code",
        serialNumber: "Serial Number",
        issuer: "Issuer",
        search: "Search items...",
        filterByIssuer: "Filter by issuer",
        filterByCategory: "Filter by category",
        allIssuers: "All Issuers",
        allCategories: "All Categories",
        attachment: "Attachment",
        attachments: "Attachments"
      },
      actions: {
        view: "View Details",
        download: "Download",
        apply: "Apply Now"
      }
    },
    es: {
      back: "Volver al Inicio",
      sections: {
        policies: "Políticas y Regulaciones",
        notices: "Avisos",
        presses: "Comunicados de Prensa",
        publications: "Publicaciones", 
        benefits: "Beneficios para Empleados",
        forms: "Formularios e Informes",
        jobs: "Vacantes de Trabajo",
        media: "Archivos Multimedia",
        risk: "Evaluaciones de Riesgo de Rutas",
        safety: "Consejos de Seguridad"
      },
      labels: {
        date: "Fecha",
        category: "Categoría",
        priority: "Prioridad",
        department: "Departamento",
        location: "Ubicación",
        type: "Tipo",
        posted: "Publicado",
        route: "Ruta",
        riskLevel: "Nivel de Riesgo",
        status: "Estado",
        lastUpdate: "Última Actualización",
        eligibility: "Elegibilidad",
        format: "Formato",
        size: "Tamaño",
        duration: "Duración",
        pages: "Páginas",
        slides: "Diapositivas",
        count: "Cantidad",
        referenceCode: "Código de Referencia",
        serialNumber: "Número de Serie",
        issuer: "Emisor",
        search: "Buscar elementos...",
        filterByIssuer: "Filtrar por emisor",
        filterByCategory: "Filtrar por categoría",
        allIssuers: "Todos los Emisores",
        allCategories: "Todas las Categorías",
        attachment: "Adjunto",
        attachments: "Adjuntos"
      },
      actions: {
        view: "Ver Detalles",
        download: "Descargar",
        apply: "Aplicar Ahora"
      }
    },
    zh: {
      back: "返回主頁",
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
        safety: "安全提示"
      },
      labels: {
        date: "日期",
        category: "類別",
        priority: "優先級",
        department: "部門",
        location: "地點",
        type: "類型",
        posted: "發布",
        route: "路線",
        riskLevel: "風險等級",
        status: "狀態",
        lastUpdate: "最後更新",
        eligibility: "資格要求",
        format: "格式",
        size: "大小",
        duration: "時長",
        pages: "頁數",
        slides: "投影片",
        count: "數量",
        referenceCode: "參考代碼",
        serialNumber: "序列號",
        issuer: "發布者",
        search: "搜尋項目...",
        filterByIssuer: "按發布者篩選",
        filterByCategory: "按類別篩選",
        allIssuers: "所有發布者",
        allCategories: "所有類別",
        attachment: "附件",
        attachments: "附件"
      },
      actions: {
        view: "查看詳情",
        download: "下載",
        apply: "立即申請"
      }
    }
  };

  const t = translations[language as keyof typeof translations];
  const data = mockData[language as keyof typeof mockData][section as keyof typeof mockData.en];

  // Filter and search logic for sections with attachments
  const sectionsWithAttachments = ['policies', 'notices', 'presses', 'publications', 'benefits', 'forms', 'jobs', 'risk', 'safety'];
  const canHaveAttachments = sectionsWithAttachments.includes(section);
  
  const filteredData = canHaveAttachments && Array.isArray(data) ? data.filter((item: any) => {
    const searchFields = [
      item.title,
      item.description,
      item.content,
      item.summary,
      item.referenceCode,
      item.serialNumber
    ].filter(Boolean).join(' ').toLowerCase();
    
    const matchesSearch = searchFields.includes(searchTerm.toLowerCase());
    const matchesIssuer = selectedIssuer === 'all' || item.issuer === selectedIssuer;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory || item.type === selectedCategory;
    return matchesSearch && matchesIssuer && matchesCategory;
  }) : data;

  // Get unique issuers and categories for filters
  const issuers = canHaveAttachments && Array.isArray(data) ? 
    [...new Set(data.map((item: any) => item.issuer).filter(Boolean))] : [];
  const categories = canHaveAttachments && Array.isArray(data) ? 
    [...new Set(data.map((item: any) => item.category || item.type).filter(Boolean))] : [];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskLevelColor = (level: string) => {
    const lowerLevel = level.toLowerCase();
    if (lowerLevel.includes('high') || lowerLevel.includes('alto')) return 'bg-red-100 text-red-800';
    if (lowerLevel.includes('medium') || lowerLevel.includes('medio')) return 'bg-yellow-100 text-yellow-800';
    if (lowerLevel.includes('low') || lowerLevel.includes('bajo')) return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getIssuerColor = (issuer: string) => {
    switch (issuer) {
      case 'HR': return 'bg-blue-500 text-white';
      case 'IT': return 'bg-green-500 text-white';
      case 'Operations': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const renderAttachmentCard = (item: any) => {
    const handleViewDetails = () => {
      if (onPolicyDetailsClick) {
        onPolicyDetailsClick(item);
      }
    };

    const handleAttachmentAction = () => {
      if (onAttachmentClick && item.attachments) {
        onAttachmentClick(item.attachments);
      }
    };

    return (
      <Card key={item.id} className="hover:shadow-md transition-shadow relative">
        {/* Issuer tag at top-left corner */}
        {item.issuer && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className={`${getIssuerColor(item.issuer)} text-xs px-2 py-1`}>
              {item.issuer}
            </Badge>
          </div>
        )}
        
        <CardHeader className="pt-12">
          <div className="space-y-2">
            {/* Multi-line title */}
            <CardTitle className="text-lg leading-tight pr-16">{item.title}</CardTitle>
            
            {/* Reference code below title (only for policies, notices, benefits, forms, jobs, safety) */}
            {item.referenceCode && ['policies', 'notices', 'benefits', 'forms', 'jobs', 'safety'].includes(section) && (
              <p className="text-sm text-gray-600 font-mono">{item.referenceCode}</p>
            )}
            
            {/* Serial number and publish date */}
            <div className="space-y-1">
              {item.serialNumber && (
                <p className="text-xs text-gray-500">{t.labels.serialNumber}: {item.serialNumber}</p>
              )}
              {item.date && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>
              )}
              {item.posted && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {t.labels.posted}: {item.posted}
                </div>
              )}
              {item.lastUpdate && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {t.labels.lastUpdate}: {item.lastUpdate}
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            {(item.description || item.content || item.summary) && (
              <p className="text-gray-600 text-sm">{item.description || item.content || item.summary}</p>
            )}
            
            <div className="flex flex-wrap gap-2">
              {item.category && (
                <Badge variant="outline" className="text-xs">{item.category}</Badge>
              )}
              {item.type && (
                <Badge variant="outline" className="text-xs">{item.type}</Badge>
              )}
              {item.priority && (
                <Badge className={getPriorityColor(item.priority)} variant="outline">
                  {item.priority}
                </Badge>
              )}
              {item.riskLevel && (
                <Badge className={getRiskLevelColor(item.riskLevel)} variant="outline">
                  {item.riskLevel}
                </Badge>
              )}
              {item.status && (
                <Badge variant="outline" className="text-xs">{item.status}</Badge>
              )}
            </div>

            {/* Additional info for specific sections */}
            <div className="text-xs text-gray-500 space-y-1">
              {item.eligibility && (
                <div>{t.labels.eligibility}: {item.eligibility}</div>
              )}
              {item.format && (
                <div>{t.labels.format}: {item.format}</div>
              )}
              {item.pages && (
                <div>{item.pages} {t.labels.pages}</div>
              )}
              {item.route && (
                <div>{t.labels.route}: {item.route}</div>
              )}
              {item.department && (
                <div>{t.labels.department}: {item.department}</div>
              )}
              {item.location && (
                <div>{t.labels.location}: {item.location}</div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" onClick={handleViewDetails}>
                <FileText className="h-4 w-4 mr-1" />
                {t.actions.view}
              </Button>
              
              {item.hasAttachment && (
                <Button size="sm" variant="outline" onClick={handleAttachmentAction}>
                  <Paperclip className="h-4 w-4 mr-1" />
                  {item.attachmentCount > 1 
                    ? `${item.attachmentCount} ${t.labels.attachments}`
                    : `1 ${t.labels.attachment}`
                  }
                </Button>
              )}
              
              {section === 'jobs' && (
                <Button size="sm">
                  {t.actions.apply}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderCard = (item: any) => {
    return (
      <Card key={item.id} className="hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{item.title}</CardTitle>
            {item.priority && (
              <Badge className={getPriorityColor(item.priority)}>
                {item.priority}
              </Badge>
            )}
            {item.riskLevel && (
              <Badge className={getRiskLevelColor(item.riskLevel)}>
                {item.riskLevel}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {item.description && <p className="text-gray-600">{item.description}</p>}
            {item.content && <p className="text-gray-600">{item.content}</p>}
            {item.summary && <p className="text-gray-600">{item.summary}</p>}
            
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              {item.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
              )}
              {item.posted && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {t.labels.posted}: {item.posted}
                </div>
              )}
              {item.lastUpdate && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {t.labels.lastUpdate}: {item.lastUpdate}
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </div>
              )}
              {item.department && (
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {item.department}
                </div>
              )}
            </div>

            {item.category && (
              <Badge variant="outline">{item.category}</Badge>
            )}
            {item.type && (
              <Badge variant="outline">{item.type}</Badge>
            )}
            {item.route && (
              <Badge variant="outline">{item.route}</Badge>
            )}
            {item.status && (
              <Badge variant="outline">{item.status}</Badge>
            )}
            {item.eligibility && (
              <div className="mt-2">
                <span className="text-sm text-gray-600">{t.labels.eligibility}: {item.eligibility}</span>
              </div>
            )}
            {item.format && (
              <div className="mt-2">
                <span className="text-sm text-gray-600">{t.labels.format}: {item.format}</span>
              </div>
            )}
            {(item.size || item.duration || item.pages || item.slides || item.count) && (
              <div className="mt-2 text-sm text-gray-600">
                {item.size && `${t.labels.size}: ${item.size}`}
                {item.duration && `${t.labels.duration}: ${item.duration}`}
                {item.pages && `${item.pages} ${t.labels.pages}`}
                {item.slides && `${item.slides} ${t.labels.slides}`}
                {item.count && `${item.count}`}
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline">
                <FileText className="h-4 w-4 mr-1" />
                {t.actions.view}
              </Button>
              {(section === 'forms' || section === 'media' || section === 'publications') && (
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  {t.actions.download}
                </Button>
              )}
              {section === 'jobs' && (
                <Button size="sm">
                  {t.actions.apply}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl text-gray-900 mb-4">
          {t.sections[section as keyof typeof t.sections]}
        </h2>
        
        {/* Search and filter controls for sections with attachments */}
        {canHaveAttachments && (
          <div className="space-y-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={`${t.labels.search.replace('policies', section === 'policies' ? 'policies' : 'items')}...`}
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
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(filteredData) && filteredData.map(canHaveAttachments ? renderAttachmentCard : renderCard)}
      </div>
    </div>
  );
}