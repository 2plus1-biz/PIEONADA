import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MOMENTS, MomentItem } from '../data/floristData';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

interface MomentsSectionProps {
  onSelectMoment: (moment: MomentItem) => void;
}

export const MomentsSection: React.FC<MomentsSectionProps> = ({ onSelectMoment }) => {
  return (
    <section id="moments" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                FOR YOUR MOMENT
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
                어떤 마음을 전하고 싶으세요?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#524344] max-w-md font-light leading-relaxed break-keep">
              전하고 싶은 마음에 어울리는 꽃을 제안해드릴게요.
            </p>
          </div>
        </FadeIn>

        {/* 5 Moment Cards Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5"
        >
          {MOMENTS.map((item) => (
            <StaggerItem key={item.id} direction="up" className="h-full">
              <div
                onClick={() => onSelectMoment(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xs bg-[#1D1B17] h-[340px] sm:h-[380px] flex flex-col justify-between p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-[#DED9D2]/40"
              >
                {/* Background Image with Dark Scrim */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.koTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B17]/90 via-[#1D1B17]/40 to-transparent" />
                </div>

                {/* Card Top: Number and Arrow */}
                <div className="relative z-10 flex items-center justify-between text-white/80">
                  <span className="text-[10px] tracking-[0.2em] font-medium uppercase font-serif-cormorant">
                    {item.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center group-hover:bg-[#8A4751] text-white transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Card Bottom: Titles and Description */}
                <div className="relative z-10 space-y-2 text-white">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#E8D5D5] block font-light">
                    {item.enTitle}
                  </span>
                  <h3 className="font-serif-kr text-xl sm:text-2xl font-normal leading-snug group-hover:text-[#E8D5D5] transition-colors">
                    {item.koTitle}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
