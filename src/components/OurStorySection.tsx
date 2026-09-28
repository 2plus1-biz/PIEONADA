import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { atelierStoryImage } from '../data/floristData';
import { FadeIn, ScaleIn } from './FadeIn';

interface OurStorySectionProps {
  onLearnMore: () => void;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ onLearnMore }) => {
  return (
    <section id="our-story" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="right" duration={0.85}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Workshop Photography */}
                <div className="overflow-hidden rounded-xs bg-[#FFFDFC] p-3 shadow-md border border-[#DED9D2]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EDE5]">
                    <img
                      src={atelierStoryImage}
                      alt="Florist Minji Kim in PIEONADA Atelier"
                      className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Floating Quote Tag Box */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 bg-[#FFFDFC] p-5 sm:p-6 rounded-xs border border-[#DED9D2] shadow-lg max-w-md">
                  <blockquote className="font-serif-kr text-sm sm:text-base text-[#1D1B17] italic font-normal leading-relaxed">
                    “자연이 주는 유일한 색과 굽이지는 줄기선의 미학”
                  </blockquote>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block mt-2">
                    FLORIST MINJI KIM
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Narrative Text */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <FadeIn direction="left" duration={0.85} delay={0.1}>
              <div className="space-y-6 sm:space-y-7">
                <div className="space-y-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                    OUR STORY
                  </span>
                  <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight leading-tight">
                    꽃보다 먼저 <br />
                    마음을 생각합니다.
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#524344] font-light leading-relaxed">
                  <p className="break-keep">
                    PIEONADA는 꽃보다 먼저 전하고 싶은 마음을 생각합니다. 계절마다 가장 아름다운 꽃을 골라 그 마음에 어울리는 하나의 꽃을 만듭니다.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#1D1B17] font-medium break-keep">
                      매일 새벽 서울 화훼공판장 최상급 생화 공수
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#1D1B17] font-medium break-keep">
                      환경을 고려한 생분해 포장재와 48시간 수분 보존 패킹
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#1D1B17] font-medium break-keep">
                      받는 분의 성향에 맞춘 1:1 커스텀 컬러링 & 손글씨 카드
                    </span>
                  </div>
                </div>

                {/* Read Story Link */}
                <div className="pt-4">
                  <button
                    onClick={onLearnMore}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#1D1B17] hover:text-[#8A4751] transition-colors group cursor-pointer"
                  >
                    <span>PIEONADA 이야기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
