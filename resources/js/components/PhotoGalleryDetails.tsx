import { useState, useEffect, Suspense, lazy, useMemo } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar, Camera, User, X, ChevronLeft, ChevronRight, Maximize2, Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PhotoGridSkeleton } from "./PhotoGridSkeleton";

// Lazy load the photo grid item component for better performance
const LazyPhotoGridItem = lazy(() => import("./LazyPhotoGridItem"));

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

interface PhotoGalleryDetailsProps {
  event: {
    name: string;
    photos: Photo[];
    mainPhoto: Photo;
    date: string;
    photographer: string;
    description: string;
  };
  language: string;
  onBack: () => void;
}

export function PhotoGalleryDetails({ event, language, onBack }: PhotoGalleryDetailsProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showFullscreenViewer, setShowFullscreenViewer] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const translations = {
    en: {
      photographer: "Photographer",
      date: "Date",
      photos: "photos",
      searchPhotos: "Search photos in this event...",
      clearSearch: "Clear search",
      closeViewer: "Close Viewer",
      previous: "Previous",
      next: "Next",
      fullscreen: "View Fullscreen",
      photoViewerTitle: "Photo Viewer",
      photoViewerDescription: "Navigate through event photos using arrow keys or navigation buttons"
    },
    es: {
      photographer: "Fotógrafo",
      date: "Fecha",
      photos: "fotos",
      searchPhotos: "Buscar fotos en este evento...",
      clearSearch: "Limpiar búsqueda",
      closeViewer: "Cerrar Visor",
      previous: "Anterior",
      next: "Siguiente",
      fullscreen: "Ver Pantalla Completa",
      photoViewerTitle: "Visor de Fotos",
      photoViewerDescription: "Navega por las fotos del evento usando las teclas de flecha o los botones de navegación"
    },
    zh: {
      photographer: "攝影師",
      date: "日期",
      photos: "張照片",
      searchPhotos: "在此活動中搜索照片...",
      clearSearch: "清除搜索",
      closeViewer: "關閉檢視器",
      previous: "上一張",
      next: "下一張",
      fullscreen: "全螢幕檢視",
      photoViewerTitle: "照片檢視器",
      photoViewerDescription: "使用方向鍵或導航按鈕瀏覽活動照片"
    }
  };

  const t = translations[language as keyof typeof translations];

  // Filter photos based on search query
  const filteredPhotos = useMemo(() => {
    if (!searchQuery.trim()) return event.photos;
    
    const searchLower = searchQuery.toLowerCase();
    return event.photos.filter(photo => {
      const searchableText = [
        photo.title,
        photo.description,
        ...photo.tags
      ].join(' ').toLowerCase();
      
      return searchableText.includes(searchLower);
    });
  }, [event.photos, searchQuery]);

  const openFullscreenViewer = (index: number) => {
    setSelectedImageIndex(index);
    setShowFullscreenViewer(true);
  };

  const closeFullscreenViewer = () => {
    setShowFullscreenViewer(false);
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImageIndex - 1 + event.photos.length) % event.photos.length
      : (selectedImageIndex + 1) % event.photos.length;
    
    setSelectedImageIndex(newIndex);
  };

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showFullscreenViewer || selectedImageIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeFullscreenViewer();
          break;
        case 'ArrowLeft':
          const prevIndex = (selectedImageIndex - 1 + event.photos.length) % event.photos.length;
          setSelectedImageIndex(prevIndex);
          break;
        case 'ArrowRight':
          const nextIndex = (selectedImageIndex + 1) % event.photos.length;
          setSelectedImageIndex(nextIndex);
          break;
      }
    };
    
    if (showFullscreenViewer) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showFullscreenViewer, selectedImageIndex, event.photos.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Event Header */}
      <div className="mb-8">
        <div className="mb-4">
          <h1 className="text-3xl text-gray-900 mb-2">{event.name}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{event.photographer}</span>
            </div>
            <div className="flex items-center gap-1">
              <Camera className="h-4 w-4" />
              <span>{event.photos.length} {t.photos}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {event.description}
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder={t.searchPhotos}
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
        {searchQuery && (
          <p className="text-center text-sm text-gray-600 mt-2">
            {filteredPhotos.length} of {event.photos.length} {t.photos}
          </p>
        )}
      </div>

      {/* Instagram Style Photo Grid - Mobile: min 3 cols, Desktop: max 5 cols */}
      {filteredPhotos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-lg text-gray-600 mb-2">No photos found</h3>
          <p className="text-sm text-gray-500 mb-4">Try adjusting your search terms</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="flex items-center gap-2 mx-auto"
          >
            <X className="h-4 w-4" />
            {t.clearSearch}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1">
          <Suspense fallback={<PhotoGridSkeleton count={Math.min(filteredPhotos.length, 15)} />}>
            {filteredPhotos.map((photo, index) => {
              // Find the original index in the full photos array for the fullscreen viewer
              const originalIndex = event.photos.findIndex(p => p.id === photo.id);
              return (
                <LazyPhotoGridItem
                  key={photo.id}
                  photo={photo}
                  index={originalIndex}
                  onPhotoClick={openFullscreenViewer}
                />
              );
            })}
          </Suspense>
        </div>
      )}

      {/* Fullscreen Image Viewer - Instagram Style */}
      <Dialog open={showFullscreenViewer} onOpenChange={closeFullscreenViewer}>
        <DialogContent className="max-w-none max-h-none w-screen h-screen p-0 bg-black/95 border-none">
          {/* Hidden accessibility elements */}
          <DialogTitle className="sr-only">{t.photoViewerTitle}</DialogTitle>
          <DialogDescription className="sr-only">{t.photoViewerDescription}</DialogDescription>
          
          {selectedImageIndex !== null && event.photos[selectedImageIndex] && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeFullscreenViewer}
                className="absolute top-4 right-4 z-50 h-10 w-10 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
                aria-label={t.closeViewer}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {event.photos.length}
              </div>

              {/* Navigation Buttons */}
              {event.photos.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-50 h-10 w-10 sm:h-12 sm:w-12 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={() => navigateImage('prev')}
                    aria-label={t.previous}
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-50 h-10 w-10 sm:h-12 sm:w-12 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={() => navigateImage('next')}
                    aria-label={t.next}
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </>
              )}

              {/* Main Image */}
              <div className="relative max-w-full max-h-full flex items-center justify-center p-2 sm:p-4 pb-20 sm:pb-24">
                <ImageWithFallback
                  src={event.photos[selectedImageIndex].imageUrl}
                  alt={event.photos[selectedImageIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-2 right-2 sm:left-4 sm:right-4 bg-black/50 text-white p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-base sm:text-lg mb-1 line-clamp-2">{event.photos[selectedImageIndex].title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 line-clamp-2">{event.photos[selectedImageIndex].description}</p>
                <div className="flex items-center gap-2 sm:gap-4 text-xs text-gray-400">
                  <span>{event.photos[selectedImageIndex].date}</span>
                  <span className="line-clamp-1">{event.photos[selectedImageIndex].photographer}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}