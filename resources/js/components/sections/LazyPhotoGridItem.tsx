import { useState, useEffect, useRef } from "react";
import { Maximize2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

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

interface LazyPhotoGridItemProps {
  photo: Photo;
  index: number;
  onPhotoClick: (index: number) => void;
}

function LazyPhotoGridItem({ photo, index, onPhotoClick }: LazyPhotoGridItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className="relative aspect-square overflow-hidden cursor-pointer group bg-gray-100"
      onClick={() => onPhotoClick(index)}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {isInView && (
        <ImageWithFallback
          src={photo.imageUrl}
          alt={photo.title}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
          <Maximize2 className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
      </div>
    </div>
  );
}

export default LazyPhotoGridItem;