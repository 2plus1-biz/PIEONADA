import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

interface PriceGuideSectionProps {
  onSelectSize: (sizeName: string, budgetRange: string) => void;
}

export const PriceGuideSection: React.FC<PriceGuideSectionProps> = ({ onSelectSize }) => {
  return (
    <section id="price-guide" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                PRICE GUIDE
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
                얼마 정도가 좋을까요?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#524344] max-w-md font-light leading-relaxed break-keep">
              선물하는 순간과 예산에 맞춰 부담 없이 골라보세요.
            </p>
          </div>
        </FadeIn>

        {/* 3 Tier Cards */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Tier 1: Small */}
          <StaggerItem direction="up" className="h-full flex flex-col">
            <div className="flex flex-col justify-between h-full bg-[#FFFDFC] rounded-xs border border-[#DED9D2] p-8 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#777168]">
                    SIZE 01
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-[#777168] bg-[#F3EDE5] px-2.5 py-0.5 rounded-xs">
                    CASUAL
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-cormorant text-3xl font-medium text-[#1D1B17]">
                    SMALL
                  </h3>
                  <p className="text-xs text-[#524344] font-light mt-1 break-keep">
                    가볍게 마음을 전하고 싶을 때
                  </p>
                </div>

                <div className="pt-2 pb-4 border-b border-[#DED9D2]/60">
                  <span className="font-serif-cormorant text-3xl font-semibold text-[#1D1B17] tabular-nums">
                    45,000원
                  </span>
                  <span className="text-xs text-[#777168] ml-1">부터</span>
                </div>

                <ul className="space-y-3 text-xs text-[#524344] font-light">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C604E] shrink-0" />
                    <span>메인 꽃 3~5송이 + 컬러 필러 소재</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C604E] shrink-0" />
                    <span>일상 응원, 소소한 서프라이즈, 카페 선물</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C604E] shrink-0" />
                    <span>핸드크라프트 페이퍼 랩핑</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onSelectSize('Small', '50,000원 이하')}
                  className="w-full py-3 text-xs font-semibold tracking-wider text-[#1D1B17] hover:text-[#8A4751] border border-[#DED9D2] hover:border-[#8A4751] rounded-xs transition-colors cursor-pointer"
                >
                  예산에 맞는 꽃 보기
                </button>
              </div>
            </div>
          </StaggerItem>

          {/* Tier 2: Medium (Most Popular / Highlighted) */}
          <StaggerItem direction="up" className="h-full flex flex-col">
            <div className="relative flex flex-col justify-between h-full bg-[#FFFDFC] rounded-xs border-2 border-[#8A4751] p-8 shadow-md transition-all duration-300">
              {/* Top Most Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8A4751] text-white px-3.5 py-0.5 text-[10px] tracking-[0.16em] uppercase font-bold rounded-xs shadow-xs">
                MOST POPULAR
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#8A4751]">
                    SIZE 02
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-[#8A4751] bg-[#E8D5D5]/60 px-2.5 py-0.5 rounded-xs font-medium">
                    SIGNATURE
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-cormorant text-3xl font-medium text-[#1D1B17]">
                    MEDIUM
                  </h3>
                  <p className="text-xs text-[#524344] font-light mt-1 break-keep">
                    생일과 기념일에 가장 많이 선택하는 크기
                  </p>
                </div>

                <div className="pt-2 pb-4 border-b border-[#DED9D2]/60">
                  <span className="font-serif-cormorant text-3xl font-semibold text-[#8A4751] tabular-nums">
                    65,000원
                  </span>
                  <span className="text-xs text-[#777168] ml-1">부터</span>
                </div>

                <ul className="space-y-3 text-xs text-[#524344] font-light">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8A4751] shrink-0" />
                    <span>메인 꽃 7~10송이 + 다양한 계절 질감 소재</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8A4751] shrink-0" />
                    <span>연인 생일, 결혼기념일, 승진 및 졸업 축하</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8A4751] shrink-0" />
                    <span>시그니처 코튼 리본 패키지 & 쇼핑백 포함</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onSelectSize('Medium', '50,000 - 70,000원')}
                  className="w-full py-3 text-xs font-semibold tracking-wider text-white bg-[#8A4751] hover:bg-[#71333D] rounded-xs transition-colors shadow-xs cursor-pointer"
                >
                  예산에 맞는 꽃 보기
                </button>
              </div>
            </div>
          </StaggerItem>

          {/* Tier 3: Large */}
          <StaggerItem direction="up" className="h-full flex flex-col">
            <div className="flex flex-col justify-between h-full bg-[#FFFDFC] rounded-xs border border-[#DED9D2] p-8 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#777168]">
                    SIZE 03
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-[#777168] bg-[#F3EDE5] px-2.5 py-0.5 rounded-xs">
                    SPECIAL
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-cormorant text-3xl font-medium text-[#1D1B17]">
                    LARGE
                  </h3>
                  <p className="text-xs text-[#524344] font-light mt-1 break-keep">
                    특별한 날을 조금 더 풍성하게
                  </p>
                </div>

                <div className="pt-2 pb-4 border-b border-[#DED9D2]/60">
                  <span className="font-serif-cormorant text-3xl font-semibold text-[#1D1B17] tabular-nums">
                    90,000원
                  </span>
                  <span className="text-xs text-[#777168] ml-1">부터</span>
                </div>

                <ul className="space-y-3 text-xs text-[#524344] font-light">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C604E] shrink-0" />
                    <span>메인 수입 고급 꽃 15송이 이상 대형 연출</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C604E] shrink-0" />
                    <span>프로포즈, 부모님 칠순/환갑, 중요한 행사</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C604E] shrink-0" />
                    <span>프리미엄 화병 또는 대형 바스켓 변경 가능</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onSelectSize('Large', '70,000 - 100,000원')}
                  className="w-full py-3 text-xs font-semibold tracking-wider text-[#1D1B17] hover:text-[#8A4751] border border-[#DED9D2] hover:border-[#8A4751] rounded-xs transition-colors cursor-pointer"
                >
                  예산에 맞는 꽃 보기
                </button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
