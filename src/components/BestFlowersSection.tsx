import React from 'react';
import { BEST_FLOWERS, Product } from '../data/floristData';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

interface BestFlowersSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const getTagBadgeStyle = (tag: string) => {
  switch (tag) {
    case 'BEST 01':
    case 'BEST 02':
      return 'bg-[#A75F69] text-[#FFFDFC]';
    case 'SEASON PICK':
      return 'bg-[#A9AD98] text-[#FFFDFC]';
    case 'FLORIST PICK':
      return 'bg-[#B89C82] text-[#FFFDFC]';
    default:
      return 'bg-[#A75F69] text-[#FFFDFC]';
  }
};

export const BestFlowersSection: React.FC<BestFlowersSectionProps> = ({
  onQuickView,
}) => {
  return (
    <section id="best-flowers" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                BEST FLOWERS
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
                가장 사랑받는 꽃
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#524344] max-w-md font-light leading-relaxed break-keep">
              어떤 꽃을 고를지 고민된다면, 가장 많이 사랑받은 꽃부터 만나보세요.
            </p>
          </div>
        </FadeIn>

        {/* 4 Cards Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {BEST_FLOWERS.map((product) => (
            <StaggerItem key={product.id} direction="up" className="h-full flex flex-col">
              <div
                onClick={() => onQuickView(product)}
                className="group flex flex-col h-full bg-[#FFFDFC] rounded-xs border border-[#DED9D2] hover:border-[#8A4751]/50 overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 cursor-pointer"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/5] w-full bg-[#F3EDE5] overflow-hidden">
                  {/* Corner Label: 16px top/left, 30px height, centered text, micro radius */}
                  <div
                    className={`absolute top-4 left-4 z-10 inline-flex items-center justify-center h-[30px] px-3.5 rounded-[1px] select-none pointer-events-none transition-colors duration-300 ${getTagBadgeStyle(
                      product.tag
                    )}`}
                  >
                    <span className="text-[9.5px] tracking-[0.16em] uppercase font-semibold leading-none text-[#FFFDFC]">
                      {product.tag}
                    </span>
                  </div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Editorial Hover Overlay: Subtle dark scrim + VIEW → */}
                  <div className="absolute inset-0 bg-[#1D1B17]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#FFFDFC]/95 backdrop-blur-xs text-[#1D1B17] text-[11px] font-medium tracking-[0.2em] uppercase shadow-xs group-hover:translate-y-0 translate-y-1 transition-all duration-500 border border-[#DED9D2]/80">
                      VIEW <span className="text-[12px] font-light leading-none">→</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta Content: Structured Flex Column with Exact Spacing Hierarchy */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="flex flex-col">
                    {/* 1. Category */}
                    <span className="text-[10.5px] tracking-[0.18em] uppercase text-[#777168] font-medium block">
                      {product.category}
                    </span>

                    {/* 2. Product Name: 7~8px gap from Category */}
                    <h3 className="mt-2 font-serif-cormorant text-[18px] sm:text-[19px] font-medium text-[#1D1B17] group-hover:text-[#8A4751] transition-colors leading-snug">
                      {product.title}
                    </h3>

                    {/* 3. Description: 13~14px gap from Product Name */}
                    <p className="mt-3.5 text-[13.5px] text-[#524344] font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* 4. Mood Keywords: 7~8px gap from Description */}
                    {product.mood && (
                      <p className="mt-2 text-[9.5px] tracking-[0.18em] uppercase font-medium text-[#999087]">
                        {product.mood}
                      </p>
                    )}
                  </div>

                  {/* Price and Badge: 22~24px from Mood (mt-6), 17~18px from Divider (pt-[17px]) */}
                  <div className="mt-6 pt-[17px] border-t border-[#DED9D2]/70 flex items-baseline justify-between">
                    <span className="font-serif-cormorant text-xl font-semibold text-[#1D1B17] tabular-nums">
                      {product.formattedPrice}
                    </span>
                    {product.badge && (
                      <span className="text-[11px] text-[#777168] font-light">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
