import { useState, useMemo, useCallback, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Camera, Search, X, Filter, Calendar, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PhotoGalleryProps {
  language: string;
  onEventClick: (event: any) => void;
}

interface Photo {
  id: number;
  title: string;
  description: string;
  date: string;
  event: string;
  photographer: string;
  tags: string[];
  imageUrl: string;
}

export function PhotoGallery({ language, onEventClick }: PhotoGalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("date-desc");
  const [selectedPhotographer, setSelectedPhotographer] = useState<string>("all");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Debounce search query for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const translations = {
    en: {
      title: "Corporate Photo Gallery",
      subtitle: "Capturing memorable moments from our corporate events",
      searchPlaceholder: "Search events, descriptions, photographers, or tags...",
      allEvents: "All Events",
      allPhotographers: "All Photographers",
      sortBy: "Sort by",
      showFilters: "Show Filters",
      hideFilters: "Hide Filters",
      clearSearch: "Clear search",
      clearAllFilters: "Clear all filters",
      resultsCount: "result(s)",
      noResults: "No events found matching your criteria",
      filters: {
        all: "All Events",
        meeting: "Meetings",
        celebration: "Celebrations",
        training: "Training",
        networking: "Networking",
        awards: "Awards"
      },
      sorting: {
        "date-desc": "Newest First",
        "date-asc": "Oldest First",
        "name-asc": "Name A-Z",
        "name-desc": "Name Z-A",
        "photographer-asc": "Photographer A-Z"
      }
    },
    zh: {
      title: "企業照片庫",
      subtitle: "記錄我們企業活動的難忘時刻",
      searchPlaceholder: "搜索活動、描述、攝影師或標籤...",
      allEvents: "所有活動",
      allPhotographers: "所有攝影師",
      sortBy: "排序方式",
      showFilters: "顯示篩選器",
      hideFilters: "隱藏篩選器",
      clearSearch: "清除搜索",
      clearAllFilters: "清除所有篩選器",
      resultsCount: "個結果",
      noResults: "未找到符合您條件的活動",
      filters: {
        all: "所有活動",
        meeting: "會議",
        celebration: "慶祝",
        training: "培訓",
        networking: "網絡",
        awards: "獎項"
      },
      sorting: {
        "date-desc": "最新優先",
        "date-asc": "最舊優先",
        "name-asc": "名稱 A-Z",
        "name-desc": "名稱 Z-A",
        "photographer-asc": "攝影師 A-Z"
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  // Comprehensive mock data with 20+ photos per event
  const photos: Photo[] = [
    // Annual Company Meeting 2024 - 25 photos
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      title: language === 'es' ? `Reunión Anual de la Empresa 2024 - Foto ${i + 1}` : language === 'zh' ? `2024年度公司會議 - 照片 ${i + 1}` : `Annual Company Meeting 2024 - Photo ${i + 1}`,
      description: language === 'es' ? `Sesión de planificación estratégica con el equipo directivo - momento ${i + 1}` : language === 'zh' ? `與領導團隊的戰略規劃會議 - 時刻 ${i + 1}` : `Strategic planning session with leadership team - moment ${i + 1}`,
      date: "2024-11-15",
      event: language === 'es' ? "Reunión Anual de la Empresa 2024" : language === 'zh' ? "2024年度公司會議" : "Annual Company Meeting 2024",
      photographer: language === 'es' ? "Comunicaciones Corporativas" : language === 'zh' ? "企業傳播部" : "Corporate Communications",
      tags: language === 'es' ? ["reunión", "liderazgo", "estrategia"] : language === 'zh' ? ["會議", "領導", "策略"] : ["meeting", "leadership", "strategy"],
      imageUrl: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTg2ODkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    })),

    // Innovation Summit 2024 - 30 photos
    ...Array.from({ length: 30 }, (_, i) => ({
      id: i + 26,
      title: language === 'es' ? `Cumbre de Innovación 2024 - Foto ${i + 1}` : language === 'zh' ? `2024創新峰會 - 照片 ${i + 1}` : `Innovation Summit 2024 - Photo ${i + 1}`,
      description: language === 'es' ? `Exhibición de tecnología y presentaciones de innovación - momento ${i + 1}` : language === 'zh' ? `技術展示和創新簡報 - 時刻 ${i + 1}` : `Technology showcase and innovation presentations - moment ${i + 1}`,
      date: "2024-09-22",
      event: language === 'es' ? "Cumbre de Innovación 2024" : language === 'zh' ? "2024創新峰會" : "Innovation Summit 2024",
      photographer: language === 'es' ? "Equipo de Marketing" : language === 'zh' ? "市場團隊" : "Marketing Team",
      tags: language === 'es' ? ["innovación", "tecnología", "presentación"] : language === 'zh' ? ["創新", "技術", "簡報"] : ["innovation", "technology", "presentation"],
      imageUrl: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NzA4OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    })),

    // Holiday Party 2024 - 28 photos
    ...Array.from({ length: 28 }, (_, i) => ({
      id: i + 56,
      title: language === 'es' ? `Fiesta Navideña 2024 - Foto ${i + 1}` : language === 'zh' ? `2024節日派對 - 照片 ${i + 1}` : `Holiday Party 2024 - Photo ${i + 1}`,
      description: language === 'es' ? `Celebración navideña anual con todo el equipo - momento ${i + 1}` : language === 'zh' ? `整個團隊的年度節日慶祝活動 - 時刻 ${i + 1}` : `Annual holiday celebration with the entire team - moment ${i + 1}`,
      date: "2024-12-15",
      event: language === 'es' ? "Fiesta Navideña 2024" : language === 'zh' ? "2024節日派對" : "Holiday Party 2024",
      photographer: language === 'es' ? "Comité de Eventos" : language === 'zh' ? "活動委員會" : "Events Committee",
      tags: language === 'es' ? ["navidad", "celebración", "fiesta"] : language === 'zh' ? ["節日", "慶祝", "派對"] : ["holiday", "celebration", "party"],
      imageUrl: "https://images.unsplash.com/photo-1758520144658-c87be518b87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc1ODc2MjYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    })),

    // Leadership Development Workshop - 22 photos
    ...Array.from({ length: 22 }, (_, i) => ({
      id: i + 84,
      title: language === 'es' ? `Taller de Desarrollo de Liderazgo - Foto ${i + 1}` : language === 'zh' ? `領導力發展工作坊 - 照片 ${i + 1}` : `Leadership Development Workshop - Photo ${i + 1}`,
      description: language === 'es' ? `Sesión de desarrollo profesional para el equipo directivo - momento ${i + 1}` : language === 'zh' ? `管理團隊的專業發展會議 - 時刻 ${i + 1}` : `Professional development session for management team - moment ${i + 1}`,
      date: "2024-08-30",
      event: language === 'es' ? "Taller de Desarrollo de Liderazgo" : language === 'zh' ? "領導力發展工作坊" : "Leadership Development Workshop",
      photographer: language === 'es' ? "Departamento de Desarrollo" : language === 'zh' ? "學習發展部" : "L&D Department",
      tags: language === 'es' ? ["capacitación", "liderazgo", "desarrollo"] : language === 'zh' ? ["培訓", "領導力", "發展"] : ["training", "leadership", "development"],
      imageUrl: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc1ODcwODQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    })),

    // Industry Networking Event - 26 photos
    ...Array.from({ length: 26 }, (_, i) => ({
      id: i + 106,
      title: language === 'es' ? `Evento de Networking Industrial - Foto ${i + 1}` : language === 'zh' ? `行業網絡活動 - 照片 ${i + 1}` : `Industry Networking Event - Photo ${i + 1}`,
      description: language === 'es' ? `Mixer de networking con socios industriales y clientes - momento ${i + 1}` : language === 'zh' ? `與行業合作夥伴和客戶的網絡交流 - 時刻 ${i + 1}` : `Networking mixer with industry partners and clients - moment ${i + 1}`,
      date: "2024-07-18",
      event: language === 'es' ? "Evento de Networking Industrial" : language === 'zh' ? "行業網絡活動" : "Industry Networking Event",
      photographer: language === 'es' ? "Desarrollo de Negocios" : language === 'zh' ? "業務發展部" : "Business Development",
      tags: language === 'es' ? ["networking", "socios", "clientes"] : language === 'zh' ? ["網絡", "合作夥伴", "客戶"] : ["networking", "partners", "clients"],
      imageUrl: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NTg2NDExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    })),

    // Employee Excellence Awards - 24 photos
    ...Array.from({ length: 24 }, (_, i) => ({
      id: i + 132,
      title: language === 'es' ? `Premios de Excelencia Empleados - Foto ${i + 1}` : language === 'zh' ? `員工卓越獎 - 照片 ${i + 1}` : `Employee Excellence Awards - Photo ${i + 1}`,
      description: language === 'es' ? `Ceremonia de reconocimiento por logros destacados - momento ${i + 1}` : language === 'zh' ? `表彰傑出成就的頒獎典禮 - 時刻 ${i + 1}` : `Recognition ceremony for outstanding achievements - moment ${i + 1}`,
      date: "2024-06-12",
      event: language === 'es' ? "Premios de Excelencia Empleados" : language === 'zh' ? "員工卓越獎" : "Employee Excellence Awards",
      photographer: language === 'es' ? "Departamento de RRHH" : language === 'zh' ? "人力資源部" : "HR Department",
      tags: language === 'es' ? ["premios", "reconocimiento", "excelencia"] : language === 'zh' ? ["獎項", "表彰", "卓越"] : ["awards", "recognition", "excellence"],
      imageUrl: "https://images.unsplash.com/photo-1716703742352-0bbdb45f505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc1ODY4OTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    })),

    // Q3 All Hands Meeting - 21 photos
    ...Array.from({ length: 21 }, (_, i) => ({
      id: i + 156,
      title: language === 'es' ? `Reunión General del Q3 - Foto ${i + 1}` : language === 'zh' ? `第三季度全體會議 - 照片 ${i + 1}` : `Q3 All Hands Meeting - Photo ${i + 1}`,
      description: language === 'es' ? `Presentación de resultados trimestrales y celebraciones del equipo - momento ${i + 1}` : language === 'zh' ? `季度結果簡報和團隊慶祝活動 - 時刻 ${i + 1}` : `Quarterly results presentation and team celebrations - moment ${i + 1}`,
      date: "2024-10-08",
      event: language === 'es' ? "Reunión General del Q3" : language === 'zh' ? "第三季度全體會議" : "Q3 All Hands Meeting",
      photographer: language === 'es' ? "Departamento de RRHH" : language === 'zh' ? "人力資源部" : "HR Department",
      tags: language === 'es' ? ["trimestral", "resultados", "celebración"] : language === 'zh' ? ["季度", "結果", "慶祝"] : ["quarterly", "results", "celebration"],
      imageUrl: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTg2ODkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }))
  ];

  const filterCategories = [
    { key: "all", label: t.filters.all },
    { key: "meeting", label: t.filters.meeting },
    { key: "celebration", label: t.filters.celebration },
    { key: "training", label: t.filters.training },
    { key: "networking", label: t.filters.networking },
    { key: "awards", label: t.filters.awards }
  ];

  // Extract unique photographers for filter dropdown
  const photographers = useMemo(() => {
    const uniquePhotographers = [...new Set(photos.map(photo => photo.photographer))];
    return uniquePhotographers.sort();
  }, [photos]);

  // Clear all filters function
  const clearAllFilters = useCallback(() => {
    setSelectedFilter("all");
    setSearchQuery("");
    setSortBy("date-desc");
    setSelectedPhotographer("all");
  }, []);

  // Keyboard shortcut for search focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Advanced filtering and searching logic
  const filteredAndSortedPhotos = useMemo(() => {
    let filtered = photos.filter(photo => {
      // Category filter
      if (selectedFilter !== "all") {
        const eventType = photo.event.toLowerCase();
        let categoryMatch = false;
        
        switch (selectedFilter) {
          case "meeting":
            categoryMatch = eventType.includes("meeting") || eventType.includes("reunión") || eventType.includes("會議");
            break;
          case "celebration":
            categoryMatch = eventType.includes("party") || eventType.includes("holiday") || eventType.includes("fiesta") || eventType.includes("派對") || eventType.includes("節日") || eventType.includes("celebration") || eventType.includes("慶祝");
            break;
          case "training":
            categoryMatch = eventType.includes("workshop") || eventType.includes("training") || eventType.includes("taller") || eventType.includes("工作坊") || eventType.includes("培訓") || eventType.includes("development") || eventType.includes("desarrollo") || eventType.includes("發展");
            break;
          case "networking":
            categoryMatch = eventType.includes("networking") || eventType.includes("網絡") || eventType.includes("活動");
            break;
          case "awards":
            categoryMatch = eventType.includes("awards") || eventType.includes("premios") || eventType.includes("獎") || eventType.includes("excellence") || eventType.includes("excelencia") || eventType.includes("卓越");
            break;
        }
        
        if (!categoryMatch) return false;
      }

      // Photographer filter
      if (selectedPhotographer !== "all" && photo.photographer !== selectedPhotographer) {
        return false;
      }

      // Search filter (using debounced query for better performance)
      if (debouncedSearchQuery.trim()) {
        const searchLower = debouncedSearchQuery.toLowerCase();
        const searchableText = [
          photo.title,
          photo.description,
          photo.event,
          photo.photographer,
          ...photo.tags
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(searchLower)) {
          return false;
        }
      }

      return true;
    });

    // Sort the filtered photos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "name-asc":
          return a.event.localeCompare(b.event);
        case "name-desc":
          return b.event.localeCompare(a.event);
        case "photographer-asc":
          return a.photographer.localeCompare(b.photographer);
        default:
          return 0;
      }
    });

    return filtered;
  }, [photos, selectedFilter, selectedPhotographer, debouncedSearchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-gray-900 mb-4">{t.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filterCategories.map((category) => (
          <Button
            key={category.key}
            variant={selectedFilter === category.key ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter(category.key)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder={`${t.searchPlaceholder} (Ctrl/⌘ + K)`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? t.hideFilters : t.showFilters}
          </Button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            {/* Category Filters */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Category</label>
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((category) => (
                  <Button
                    key={category.key}
                    variant={selectedFilter === category.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(category.key)}
                    className="transition-all duration-200"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Photographer and Sort Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photographer Filter */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Photographer
                </label>
                <Select value={selectedPhotographer} onValueChange={setSelectedPhotographer}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.allPhotographers} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allPhotographers}</SelectItem>
                    {photographers.map((photographer) => (
                      <SelectItem key={photographer} value={photographer}>
                        {photographer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Options */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {t.sortBy}
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(t.sorting).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Clear Filters */}
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                {t.clearAllFilters}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Results Counter */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600">
          {Object.entries(
            filteredAndSortedPhotos.reduce((groups: Record<string, Photo[]>, photo) => {
              const eventKey = photo.event;
              if (!groups[eventKey]) {
                groups[eventKey] = [];
              }
              groups[eventKey].push(photo);
              return groups;
            }, {})
          ).length} {t.resultsCount}
        </p>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(
          filteredAndSortedPhotos.reduce((groups: Record<string, Photo[]>, photo) => {
            const eventKey = photo.event;
            if (!groups[eventKey]) {
              groups[eventKey] = [];
            }
            groups[eventKey].push(photo);
            return groups;
          }, {})
        ).map(([eventName, eventPhotos]) => {
          const mainPhoto = eventPhotos[0];
          const additionalPhotos = eventPhotos.slice(1, 4);
          
          return (
            <Card
              key={eventName}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => onEventClick({
                name: eventName,
                photos: eventPhotos,
                mainPhoto: mainPhoto,
                date: mainPhoto.date,
                photographer: mainPhoto.photographer,
                description: mainPhoto.description
              })}
            >
              <CardContent className="p-0">
                {/* Main Photo */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={mainPhoto.imageUrl}
                    alt={mainPhoto.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Photo Count Overlay */}
                  {eventPhotos.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Camera className="h-3 w-3" />
                      {eventPhotos.length}
                    </div>
                  )}
                </div>

                {/* Event Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {eventName}
                    </Badge>
                    <span className="text-sm text-gray-500">{mainPhoto.date}</span>
                  </div>
                  
                  <h3 className="text-base text-gray-900 mb-1 line-clamp-2">
                    {mainPhoto.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {mainPhoto.description}
                  </p>

                  {/* Additional Photos Preview */}
                  {additionalPhotos.length > 0 && (
                    <div className="flex gap-1">
                      {additionalPhotos.map((photo) => (
                        <div key={photo.id} className="relative">
                          <ImageWithFallback
                            src={photo.imageUrl}
                            alt={photo.title}
                            className="w-12 h-12 object-cover rounded border-2 border-white shadow-sm"
                          />
                        </div>
                      ))}
                      {eventPhotos.length > 4 && (
                        <div className="w-12 h-12 bg-gray-100 rounded border-2 border-white shadow-sm flex items-center justify-center">
                          <span className="text-xs text-gray-600">+{eventPhotos.length - 4}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        }).length === 0 ? (
          // No Results Message
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 mb-4">
              <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-lg text-gray-600 mb-2">{t.noResults}</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              className="flex items-center gap-2 mx-auto"
            >
              <X className="h-4 w-4" />
              {t.clearAllFilters}
            </Button>
          </div>
        ) : (
          Object.entries(
            filteredAndSortedPhotos.reduce((groups: Record<string, Photo[]>, photo) => {
              const eventKey = photo.event;
              if (!groups[eventKey]) {
                groups[eventKey] = [];
              }
              groups[eventKey].push(photo);
              return groups;
            }, {})
          ).map(([eventName, eventPhotos]) => {
            const mainPhoto = eventPhotos[0];
            const additionalPhotos = eventPhotos.slice(1, 4);
            
            return (
              <Card
                key={eventName}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => onEventClick({
                  name: eventName,
                  photos: eventPhotos,
                  mainPhoto: mainPhoto,
                  date: mainPhoto.date,
                  photographer: mainPhoto.photographer,
                  description: mainPhoto.description
                })}
              >
                <CardContent className="p-0">
                  {/* Main Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={mainPhoto.imageUrl}
                      alt={mainPhoto.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Photo Count Overlay */}
                    {eventPhotos.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <Camera className="h-3 w-3" />
                        {eventPhotos.length}
                      </div>
                    )}
                  </div>
  
                  {/* Event Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {eventName}
                      </Badge>
                      <span className="text-sm text-gray-500">{mainPhoto.date}</span>
                    </div>
                    
                    <h3 className="text-base text-gray-900 mb-1 line-clamp-2">
                      {mainPhoto.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {mainPhoto.description}
                    </p>
  
                    {/* Additional Photos Preview */}
                    {additionalPhotos.length > 0 && (
                      <div className="flex gap-1">
                        {additionalPhotos.map((photo) => (
                          <div key={photo.id} className="relative">
                            <ImageWithFallback
                              src={photo.imageUrl}
                              alt={photo.title}
                              className="w-12 h-12 object-cover rounded border-2 border-white shadow-sm"
                            />
                          </div>
                        ))}
                        {eventPhotos.length > 4 && (
                          <div className="w-12 h-12 bg-gray-100 rounded border-2 border-white shadow-sm flex items-center justify-center">
                            <span className="text-xs text-gray-600">+{eventPhotos.length - 4}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}