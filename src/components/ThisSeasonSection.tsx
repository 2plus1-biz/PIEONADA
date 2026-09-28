import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEASONAL_ITEMS, Product } from '../data/floristData';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

interface ThisSeasonSectionProps {
  onSelectProduct: (product: Product) => void;
  onViewAllSeasonal: () => void;
}

export const ThisSeasonSection: React.FC<ThisSeasonSectionProps> = ({
  onSelectProduct,
  onViewAllSeasonal,
}) => {
  const mainProduct = SEASONAL_ITEMS[0];
  const sideProducts = SEASONAL_ITEMS.slice(1);

  return (
    <section id="this-season" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                THIS SEASON
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight">
                이번 계절, 가장 아름다운 꽃
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#524344] max-w-md font-light leading-relaxed">
              계절이 바뀌면 꽃의 얼굴도 달라집니다. 지금 이 계절에만 마주할 수 있는
              독보적인 결의 시즌 한정 컬렉션을 만나보세요.
            </p>
          </div>
        </FadeIn>

        {/* 1 Big Feature + 2 Side Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Big Feature Card */}
          <div className="lg:col-span-7">
            <FadeIn direction="right" duration={0.85} className="h-full">
              <div
                onClick={() => onSelectProduct(mainProduct)}
                className="group relative h-full min-h-[460px] sm:min-h-[520px] rounded-xs overflow-hidden bg-[#1D1B17] flex flex-col justify-end p-8 sm:p-10 cursor-pointer border border-[#DED9D2] hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={mainProduct.image}
                  alt={mainProduct.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B17]/95 via-[#1D1B17]/35 to-transparent" />

                <div className="relative z-10 space-y-4 max-w-xl text-white">
                  <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 bg-white/20 backdrop-blur-xs rounded-xs text-white">
                    {mainProduct.tag}
                  </span>

                  <h3 className="font-serif-kr text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-white group-hover:text-[#E8D5D5] transition-colors">
                    {mainProduct.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-3">
                    {mainProduct.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif-cormorant text-2xl sm:text-3xl font-medium text-white tabular-nums">
                      {mainProduct.formattedPrice}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(mainProduct);
                      }}
                      className="inline-flex items-center gap-2 bg-[#FFFDFC] text-[#1D1B17] hover:bg-[#8A4751] hover:text-white px-5 py-2.5 text-xs font-semibold tracking-wider rounded-xs transition-colors duration-300 shadow-sm"
                    >
                      시즌 예약하기
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right 2 Stacked Cards */}
          <StaggerContainer
            staggerDelay={0.15}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {sideProducts.map((item) => (
              <StaggerItem key={item.id} direction="left" className="flex-1">
                <div
                  onClick={() => onSelectProduct(item)}
                  className="group flex flex-col sm:flex-row bg-[#FFFDFC] rounded-xs border border-[#DED9D2] hover:border-[#8A4751]/50 p-5 gap-5 items-center cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="relative w-full sm:w-44 h-48 sm:h-full min-h-[160px] rounded-xs overflow-hidden bg-[#F3EDE5] shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-full space-y-3 py-1">
                    <div>
                      <span className="text-[10px] tracking-[0.16em] uppercase text-[#777168] font-medium block mb-1">
                        {item.tag}
                      </span>
                      <h4 className="font-serif-cormorant text-xl font-medium text-[#1D1B17] group-hover:text-[#8A4751] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#524344] font-light leading-relaxed line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#DED9D2]/50">
                      <span className="font-serif-cormorant text-lg font-semibold text-[#1D1B17] tabular-nums">
                        {item.formattedPrice}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#8A4751] font-medium group-hover:translate-x-1 transition-transform">
                        선택하기 <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Catalog Link */}
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <div>
            <button
              onClick={onViewAllSeasonal}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#524344] hover:text-[#8A4751] transition-colors group cursor-pointer"
            >
              <span>SEASON COLLECTION 전체 카탈로그 보기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
