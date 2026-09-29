import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from './FadeIn';
import { HeroSlider } from './HeroSlider';

interface HeroProps {
  onGiftClick: () => void;
  onExploreSeasonClick: () => void;
  onQuickViewSignature: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGiftClick,
  onExploreSeasonClick,
  onQuickViewSignature,
}) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FFF8F0] pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-[#DED9D2]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 pr-0 lg:pr-2">
            {/* Tagline */}
            <FadeIn direction="down" delay={0.1} duration={0.6}>
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] tracking-[0.16em] uppercase font-semibold text-[#8A4751]">
                <Heart className="w-3.5 h-3.5 fill-[#8A4751] text-[#8A4751]" />
                <span>FLOWERS FOR YOUR MOMENTS</span>
              </div>
            </FadeIn>

            {/* Display Heading */}
            <FadeIn direction="up" delay={0.2} duration={0.85}>
              <h1 className="font-serif-kr text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-[#1D1B17] tracking-tight leading-[1.2] sm:leading-[1.18] break-keep">
                마음을 전하는 순간,<br />
                <span className="font-serif-cormorant italic font-normal text-[#8A4751] relative inline-block mt-1 sm:mt-2">
                  피어나다.
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E8D5D5]/80 -z-10" />
                </span>
              </h1>
            </FadeIn>

            {/* Lead Narrative */}
            <FadeIn direction="up" delay={0.35} duration={0.8}>
              <p className="text-[#524344] text-base sm:text-lg leading-relaxed max-w-xl font-light break-keep">
                전하고 싶은 마음이 오래 기억되도록, 가장 아름다운 계절의 꽃으로 준비합니다.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={0.45} duration={0.8}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onGiftClick}
                  className="inline-flex items-center justify-center gap-2 bg-[#8A4751] hover:bg-[#71333D] text-[#FFFDFC] text-sm font-medium tracking-wider px-7 py-3.5 rounded-sm transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
                >
                  <span>꽃 선물하기</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={onExploreSeasonClick}
                  className="inline-flex items-center justify-center bg-transparent hover:bg-[#FFFDFC] text-[#1D1B17] border border-[#DED9D2] hover:border-[#8A4751]/60 text-sm font-medium tracking-wider px-6 py-3.5 rounded-sm transition-colors duration-300 cursor-pointer"
                >
                  이번 주 꽃 보기
                </button>
              </div>
            </FadeIn>

            {/* 3 Pillars / Value Props */}
            <StaggerContainer
              staggerDelay={0.12}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-[#DED9D2]/70 max-w-xl"
            >
              <StaggerItem direction="up">
                <div>
                  <span className="block font-serif-kr text-sm sm:text-base md:text-lg font-medium text-[#1D1B17] tracking-tight break-keep">
                    정성스러운 제작
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem direction="up">
                <div className="border-l border-[#DED9D2]/60 pl-3 sm:pl-6">
                  <span className="block font-serif-kr text-sm sm:text-base md:text-lg font-medium text-[#1D1B17] tracking-tight break-keep">
                    신선한 계절꽃
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem direction="up">
                <div className="border-l border-[#DED9D2]/60 pl-3 sm:pl-6">
                  <span className="block font-serif-kr text-sm sm:text-base md:text-lg font-medium text-[#1D1B17] tracking-tight break-keep">
                    당일 픽업
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Showcase Photo Column - Enhanced Visual Focal Point */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[510px] xl:max-w-[550px]">
              <ScaleIn delay={0.25} duration={0.9}>
                <HeroSlider onSelectSlide={() => onQuickViewSignature()} />
              </ScaleIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
