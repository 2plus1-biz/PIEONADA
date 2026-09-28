import React, { useState } from 'react';
import { Star, CheckCircle, Pause, Play, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/floristData';
import { FadeIn } from './FadeIn';

export const ReviewsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to create an uninterrupted, infinite seamless flow
  const reviewStream = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                FLOWERS & MOMENTS
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
                꽃과 함께한 순간들
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-[#777168] font-light hidden sm:inline-block">
                마우스를 올리면 흐름이 멈춥니다
              </span>

              {/* Play/Pause toggle */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#524344] hover:text-[#8A4751] bg-[#FFFDFC] border border-[#DED9D2] hover:border-[#8A4751]/50 rounded-xs shadow-2xs transition-colors cursor-pointer"
                title={isPaused ? '자동 재생 시작' : '일시정지'}
                aria-label={isPaused ? '후기 자동 재생 시작' : '후기 자동 흐름 일시정지'}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-[#8A4751] text-[#8A4751]" />
                    <span>재생</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-[#524344] text-[#524344]" />
                    <span>일시정지</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Infinite Smooth Flowing Marquee Track Container */}
      <FadeIn direction="up" delay={0.15}>
        <div className="relative w-full overflow-hidden py-3">
          {/* Left & Right Edge Gradient Fading Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 lg:w-48 z-10 bg-gradient-to-r from-[#FFF8F0] via-[#FFF8F0]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 lg:w-48 z-10 bg-gradient-to-l from-[#FFF8F0] via-[#FFF8F0]/80 to-transparent" />

          {/* Continuous Flow Track */}
          <div
            className={`animate-marquee-flow flex items-stretch gap-6 pl-4 ${
              isPaused ? 'paused' : ''
            }`}
          >
            {reviewStream.map((rev, index) => (
              <div
                key={`${rev.id}-${index}`}
                className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 bg-[#FFFDFC] rounded-xs border border-[#DED9D2] hover:border-[#8A4751]/60 p-7 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group select-none"
              >
                <div className="space-y-4">
                  {/* Header Tag and Stars */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DED9D2]/60">
                    <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[#8A4751]">
                      {rev.category}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#8A4751]">
                      {Array.from({ length: rev.stars }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#8A4751]" />
                      ))}
                    </div>
                  </div>

                  {/* Review Narrative */}
                  <p className="font-serif-kr text-xs sm:text-sm text-[#1D1B17] font-light leading-relaxed italic group-hover:text-[#1D1B17] transition-colors">
                    {rev.content}
                  </p>
                </div>

                {/* Author & Product Info */}
                <div className="pt-4 border-t border-[#DED9D2]/60 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-[#1D1B17]">
                        {rev.author}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#5C604E]" />
                      <span className="text-[10px] text-[#5C604E] font-medium bg-[#E1E5CE]/50 px-1.5 py-0.2 rounded-xs">
                        구매인증
                      </span>
                    </div>
                    <span className="text-[11px] text-[#777168] font-light mt-0.5 block">
                      주문 상품: {rev.productName}
                    </span>
                  </div>

                  <div className="text-[9px] uppercase tracking-wider text-[#8A4751] font-serif-cormorant font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                    PIEONADA
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

