import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroSlideItem, HERO_SLIDES } from '../data/heroSliderData';

interface HeroSliderProps {
  slides?: HeroSlideItem[];
  onSelectSlide?: (slide: HeroSlideItem) => void;
}

/**
 * Slide component with fade & subtle cinematic zoom (1.02 -> 1.0)
 */
interface HeroSlideProps {
  slide: HeroSlideItem;
  isActive: boolean;
  prefersReducedMotion: boolean;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  slide,
  isActive,
  prefersReducedMotion,
}) => {
  return (
    <div
      aria-hidden={!isActive}
      className={`absolute inset-0 transition-opacity duration-900 ease-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className={`w-full h-full object-cover object-center transition-transform duration-900 ease-out ${
          prefersReducedMotion
            ? 'scale-100'
            : isActive
            ? 'scale-100'
            : 'scale-[1.02]'
        }`}
        referrerPolicy="no-referrer"
      />
      {/* Subtle Gradient Scrim at Bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B17]/60 via-transparent to-transparent pointer-events-none opacity-80" />
    </div>
  );
};

/**
 * Floating product info card in bottom-right with soft fade transition
 */
interface ProductInfoProps {
  slide: HeroSlideItem;
  onClick?: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ slide, onClick }) => {
  const [displayedSlide, setDisplayedSlide] = useState(slide);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (slide.id !== displayedSlide.id) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setDisplayedSlide(slide);
        setIsFading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [slide, displayedSlide.id]);

  return (
    <div
      onClick={onClick}
      className="absolute bottom-5 right-5 left-5 sm:left-auto z-20 bg-[#FFFDFC]/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5 rounded-xs border border-[#DED9D2]/90 shadow-sm max-w-[260px] group-hover:border-[#8A4751]/50 transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`${displayedSlide.name} (${displayedSlide.collection}) 상세 보기`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div
        className={`transition-opacity duration-500 ease-out ${
          isFading ? 'opacity-20' : 'opacity-100'
        }`}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block mb-1">
          {displayedSlide.collection}
        </span>
        <h3 className="font-serif-cormorant text-lg sm:text-xl font-medium text-[#1D1B17] tracking-tight leading-snug">
          {displayedSlide.name}
        </h3>
      </div>
    </div>
  );
};

/**
 * Minimal controls: 01 / 04 slide indicator + subtle hover navigation arrows
 */
interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
}) => {
  return (
    <>
      {/* Editorial Minimal Slide Indicator: e.g. 01 / 04 */}
      <div
        className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#1D1B17]/45 backdrop-blur-sm border border-white/15 text-white/90 text-[11px] font-mono tracking-widest pointer-events-none select-none"
        aria-live="polite"
      >
        <span className="font-semibold text-white">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-white/40">/</span>
        <span className="text-white/70">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      {/* Prev Navigation Arrow - Subtle on hover */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="이전 꽃 보기"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFDFC]/85 backdrop-blur-md text-[#1D1B17] hover:bg-[#8A4751] hover:text-[#FFFDFC] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 shadow-sm cursor-pointer border border-[#DED9D2]/70 focus:outline-none focus:ring-2 focus:ring-[#8A4751]"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Next Navigation Arrow - Subtle on hover */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="다음 꽃 보기"
        className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFDFC]/85 backdrop-blur-md text-[#1D1B17] hover:bg-[#8A4751] hover:text-[#FFFDFC] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 shadow-sm cursor-pointer border border-[#DED9D2]/70 focus:outline-none focus:ring-2 focus:ring-[#8A4751]"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </>
  );
};

/**
 * Main HeroSlider Component
 */
export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides = HERO_SLIDES,
  onSelectSlide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check user preference for reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', handler);
      return () => mediaQuery.removeEventListener?.('change', handler);
    }
  }, []);

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Restart 5-second autoplay timer
  const restartTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused && totalSlides > 1) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
  }, [isPaused, totalSlides, goToNext]);

  // Autoplay effect
  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [restartTimer]);

  const handleManualNext = () => {
    goToNext();
    restartTimer();
  };

  const handleManualPrev = () => {
    goToPrev();
    restartTimer();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleManualPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleManualNext();
    }
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Minimum swipe threshold of 45px and predominantly horizontal
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Swiped left -> next
        handleManualNext();
      } else {
        // Swiped right -> prev
        handleManualPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="피어나다 대표 꽃 상품 갤러리"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="group relative overflow-hidden rounded-xs bg-[#FFFDFC] p-3 shadow-md hover:shadow-xl transition-all duration-500 border border-[#DED9D2]/80 focus:outline-none focus:ring-1 focus:ring-[#8A4751]/50"
    >
      {/* 3:4 Aspect Ratio Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3EDE5]">
        {/* Render all slides stacked for smooth fade & zero latency */}
        {slides.map((slide, idx) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            isActive={idx === currentIndex}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}

        {/* Floating Product Info */}
        <ProductInfo
          slide={currentSlide}
          onClick={() => onSelectSlide?.(currentSlide)}
        />

        {/* Minimal Slider Controls & Indicators */}
        <SliderControls
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onPrev={handleManualPrev}
          onNext={handleManualNext}
        />
      </div>
    </div>
  );
};
