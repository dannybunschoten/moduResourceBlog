import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  captions?: string[]; // Make captions optional
}

export function Carousel({ images, captions = [] }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Fixed aspect ratio container */}
      <div className="aspect-[4/3] w-full">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-contain bg-gray-100 rounded-lg"
        />

        {/* Caption display - overlay at the bottom with transparent background */}
        {captions && captions[currentIndex] && (
          <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white">
            <p className="text-sm m-4">{captions[currentIndex]}</p>
          </div>
        )}
      </div>

      {/* Only show previous button if not on the first image */}
      {!isFirstImage && (
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Only show next button if not on the last image */}
      {!isLastImage && (
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Always show the counter if there are multiple images */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
