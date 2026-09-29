import React, { useState, useEffect, useRef } from 'react';
import { flowerClassPosterImage } from '../data/floristData';
import { FadeIn } from './FadeIn';

interface FlowerClassSectionProps {
  onOpenClassDetail: () => void;
}

export const FlowerClassSection: React.FC<FlowerClassSectionProps> = ({ onOpenClassDetail }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const listener = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches);
      };
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Ensure video attempts autoplay silently
  useEffect(() => {
    if (!prefersReducedMotion && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by some browser battery saving settings; poster remains visible
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id="flower-class"
      aria-label="PIEONADA Flower Class"
      className="relative w-full h-[540px] sm:h-[600px] lg:h-[700px] xl:h-[720px] overflow-hidden bg-[#1E1914]"
    >
      {/* Background Visual Layer (Full-Bleed) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        {prefersReducedMotion || videoError ? (
          <img
            src={flowerClassPosterImage}
            alt="PIEONADA Flower Arranging Class"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        ) : (
          <video
            ref={videoRef}
            key="flower-arranging-class-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={flowerClassPosterImage}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-[center_35%] sm:object-center"
          >
            {/* Authentic flower arrangement & florist craft video (hands trimming stems & placing flowers in vase) */}
            <source
              src="https://videos.pexels.com/video-files/5771947/5771947-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/5771947/5771947-hd_1280_720_30fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/4269134/4269134-hd_2048_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback image if HTML5 video tag is unsupported */}
            <img
              src={flowerClassPosterImage}
              alt="PIEONADA Flower Arranging Class"
              className="w-full h-full object-cover object-center"
            />
          </video>
        )}

        {/* Video Overlays for Contrast & Editorial Ambiance */}
        {/* 1. Base restrained dark wash: ~rgba(30, 25, 20, 0.28) */}
        <div className="absolute inset-0 bg-[#1E1914]/28" />

        {/* 2. Asymmetric left gradient for text readability without darkening entire frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1914]/75 via-[#1E1914]/35 to-transparent sm:via-[#1E1914]/25" />

        {/* 3. Subtle bottom grounding gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1914]/60 via-[#1E1914]/15 to-transparent" />
      </div>

      {/* Content Container (Asymmetric Bottom-Left Alignment) */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[560px]">
          <FadeIn direction="up" duration={0.8}>
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium text-[#E8D5D5] block mb-3 sm:mb-4">
              PIEONADA FLOWER CLASS
            </span>

            {/* Heading (Preserving Intentional 2-Line Structure) */}
            <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FAF6F0] tracking-tight leading-[1.3] mb-4 sm:mb-5 break-keep drop-shadow-xs">
              꽃을 고르고, 다듬고, <br />
              나만의 꽃을 피워보세요.
            </h2>

            {/* Description (Natural Wrapping, No Forced Break) */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#FAF6F0]/90 font-light leading-relaxed mb-6 sm:mb-8 break-keep">
              계절의 꽃을 직접 만지고 나만의 감각으로 완성하는 PIEONADA 플라워 클래스입니다.
            </p>

            {/* Editorial CTA */}
            <div>
              <button
                type="button"
                onClick={onOpenClassDetail}
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-[#FAF6F0] hover:text-white transition-colors duration-300 cursor-pointer pt-1"
                aria-label="플라워 클래스 알아보기"
              >
                <span className="border-b border-[#FAF6F0]/40 group-hover:border-white pb-0.5 transition-colors duration-300">
                  클래스 알아보기
                </span>
                <span className="text-[#E8D5D5] group-hover:text-white group-hover:translate-x-1 transition-transform duration-300 font-serif inline-block">
                  →
                </span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
