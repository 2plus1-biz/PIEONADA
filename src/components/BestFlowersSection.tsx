import React from 'react';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { BEST_FLOWERS, Product } from '../data/floristData';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

interface BestFlowersSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const BestFlowersSection: React.FC<BestFlowersSectionProps> = ({
  onQuickView,
  onAddToCart,
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
                className="group flex flex-col h-full bg-[#FFFDFC] rounded-xs border border-[#DED9D2] hover:border-[#8A4751]/50 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/5] w-full bg-[#F3EDE5] overflow-hidden">
                  {/* Corner Tag */}
                  <div className="absolute top-3 left-3 z-10 bg-[#FFFDFC]/90 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#DED9D2]/80">
                    <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#1D1B17]">
                      {product.tag}
                    </span>
                  </div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 bg-[#1D1B17]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => onQuickView(product)}
                      className="p-3 bg-[#FFFDFC] text-[#1D1B17] hover:text-[#8A4751] rounded-full shadow-md hover:scale-105 transition-all"
                      title="상세 보기"
                      aria-label="상세 보기"
                    >
                      <Eye className="w-4 h-4 stroke-[1.75]" />
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="p-3 bg-[#8A4751] hover:bg-[#71333D] text-white rounded-full shadow-md hover:scale-105 transition-all"
                      title="장바구니 담기"
                      aria-label="장바구니 담기"
                    >
                      <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
                    </button>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#777168] font-medium block">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-serif-cormorant text-xl font-medium text-[#1D1B17] group-hover:text-[#8A4751] transition-colors cursor-pointer"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#524344] font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Badge */}
                  <div className="pt-3 border-t border-[#DED9D2]/60 flex items-baseline justify-between">
                    <span className="font-serif-cormorant text-xl font-semibold text-[#1D1B17] tabular-nums">
                      {product.formattedPrice}
                    </span>
                    <span className="text-[11px] text-[#777168] font-light">
                      {product.badge}
                    </span>
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
