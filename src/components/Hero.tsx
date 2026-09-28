import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { heroImage } from '../data/floristData';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from './FadeIn';

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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 pr-0 lg:pr-4">
            {/* Tagline */}
            <FadeIn direction="down" delay={0.1} duration={0.6}>
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] tracking-[0.16em] uppercase font-semibold text-[#8A4751]">
                <Heart className="w-3.5 h-3.5 fill-[#8A4751] text-[#8A4751]" />
                <span>FLOWERS FOR YOUR MOMENTS</span>
              </div>
            </FadeIn>

            {/* Display Heading */}
            <FadeIn direction="up" delay={0.2} duration={0.85}>
              <h1 className="font-serif-kr text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-[#1D1B17] tracking-tight leading-[1.18] sm:leading-[1.16]">
                마음을 전하는 순<br />
                간, <br />
                <span className="font-serif-cormorant italic font-normal text-[#8A4751] relative">
                  피어나다.
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E8D5D5]/80 -z-10" />
                </span>
              </h1>
            </FadeIn>

            {/* Lead Narrative */}
            <FadeIn direction="up" delay={0.35} duration={0.8}>
              <p className="text-[#524344] text-base sm:text-lg leading-relaxed max-w-xl font-light">
                말로 다 전하지 못한 마음을 가장 아름다운 계절의 꽃으로 정성스레
                빚어 전해 드립니다. 당신의 모든 특별하고 평온한 순간 속에 피어나는
                플로럴 아틀리에.
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
                  <span className="block font-serif-cormorant text-xl sm:text-2xl font-medium text-[#1D1B17] tracking-tight">
                    100%
                  </span>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#777168] mt-0.5">
                    FRESH MORNING MARKET
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem direction="up">
                <div className="border-l border-[#DED9D2]/60 pl-3 sm:pl-6">
                  <span className="block font-serif-cormorant text-xl sm:text-2xl font-medium text-[#1D1B17] tracking-tight">
                    Hand-Tied
                  </span>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#777168] mt-0.5">
                    ARTISANAL BOUQUET
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem direction="up">
                <div className="border-l border-[#DED9D2]/60 pl-3 sm:pl-6">
                  <span className="block font-serif-cormorant text-xl sm:text-2xl font-medium text-[#1D1B17] tracking-tight">
                    Same Day
                  </span>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#777168] mt-0.5">
                    SEOUL & GYEONGGI
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Showcase Photo Column */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-4 lg:mt-0">
            <ScaleIn delay={0.25} duration={0.9}>
              <div
                onClick={onQuickViewSignature}
                className="group relative cursor-pointer overflow-hidden rounded-xs bg-[#FFFDFC] p-3 shadow-md hover:shadow-xl transition-all duration-500 border border-[#DED9D2]/80"
              >
                {/* ATELIER PICK Badge */}
                <div className="absolute top-6 right-6 z-20 w-16 h-16 rounded-full bg-[#FFFDFC]/95 backdrop-blur-xs border border-[#DED9D2] flex flex-col items-center justify-center text-center p-1 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <span className="text-[8px] tracking-[0.18em] uppercase font-bold text-[#8A4751]">
                    ATELIER
                  </span>
                  <span className="text-[8px] tracking-[0.14em] uppercase text-[#1D1B17] font-semibold -mt-0.5">
                    PICK
                  </span>
                  <svg
                    className="w-2.5 h-2.5 text-[#8A4751] mt-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C13.5 6.5 17.5 10.5 22 12C17.5 13.5 13.5 17.5 12 22C10.5 17.5 6.5 13.5 2 12C6.5 10.5 10.5 6.5 12 2Z" />
                  </svg>
                </div>

                {/* Main Bouquet Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3EDE5]">
                  <img
                    src={heroImage}
                    alt="PIEONADA Signature Soft Blossom Hand-Tied"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Gradient Scrim at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B17]/60 via-transparent to-transparent pointer-events-none opacity-80" />

                  {/* Signature Floating Tag in Bottom Right as in Image 1 */}
                  <div className="absolute bottom-5 right-5 left-5 sm:left-auto bg-[#FFFDFC]/95 backdrop-blur-md p-4 rounded-xs border border-[#DED9D2] shadow-sm max-w-xs group-hover:border-[#8A4751]/50 transition-colors">
                    <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8A4751] block mb-1">
                      SIGNATURE SERIES
                    </span>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif-cormorant text-lg font-medium text-[#1D1B17]">
                        Soft Blossom Hand-Tied
                      </h3>
                      <span className="font-serif-cormorant text-lg font-semibold text-[#1D1B17] tabular-nums">
                        ₩65,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};
