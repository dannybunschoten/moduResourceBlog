"use client";

import type React from "react";

import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface CarouselProps {
  images: string[];
  captions?: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showThumbnails?: boolean;
}

export function Carousel({
  images,
  captions = [],
  autoplay = false,
  autoplayInterval = 5000,
  showThumbnails = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // Handle autoplay
  useEffect(() => {
    if (autoplay && images.length > 1) {
      autoplayTimerRef.current = setInterval(() => {
        if (currentIndex < images.length - 1) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(0);
        }
      }, autoplayInterval);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, autoplayInterval, currentIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    },
    [currentIndex, isTransitioning]
  );

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, images.length, goToSlide]);

  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  if (!images || images.length === 0) {
    return null;
  }

  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Main carousel container */}
      <div
        className="aspect-[4/3] w-full relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images with transition effect */}
        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={image || "/placeholder.svg"}
                alt={captions[index] || `Image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Caption display with improved styling */}
        {captions && captions[currentIndex] && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 pt-8">
            <p className="text-sm md:text-base font-medium">
              {captions[currentIndex]}
            </p>
          </div>
        )}
      </div>

      {/* Navigation buttons with brand colors */}
      <button
        onClick={goToPrevious}
        disabled={isFirstImage}
        className={cn(
          "absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-all duration-200",
          "bg-white text-[#1f3560] shadow-md hover:bg-[#1f3560] hover:text-white",
          "focus:outline-none focus:ring-2 focus:ring-[#1f3560] focus:ring-offset-2",
          "cursor-pointer",
          isFirstImage ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        disabled={isLastImage}
        className={cn(
          "absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-all duration-200",
          "bg-white text-[#1f3560] shadow-md hover:bg-[#1f3560] hover:text-white",
          "focus:outline-none focus:ring-2 focus:ring-[#1f3560] focus:ring-offset-2",
          "cursor-pointer",
          isLastImage ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Counter with improved styling */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-[#1f3560] text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Pagination indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all focus:outline-none",
                currentIndex === index
                  ? "w-8 bg-[#e30613]"
                  : "w-2 bg-white/70 hover:bg-white"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
