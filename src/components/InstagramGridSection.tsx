import React from 'react';
import { ArrowRight, Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/floristData';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export const InstagramGridSection: React.FC = () => {
  return (
    <section id="instagram-grid" className="py-20 lg:py-24 bg-[#FFF8F0] border-b border-[#DED9D2]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header with Instagram Link */}
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="space-y-2">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                PIEONADA MOMENTS
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl font-normal text-[#1D1B17] tracking-tight">
                오늘 피어난 꽃
              </h2>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#524344] hover:text-[#8A4751] transition-colors group cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>@pieonada FOLLOW INSTAGRAM</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>

        {/* 5 Photos Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {INSTAGRAM_POSTS.map((item) => (
            <StaggerItem key={item.id} direction="up">
              <div
                className="group relative aspect-square rounded-xs overflow-hidden bg-[#F3EDE5] border border-[#DED9D2] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1D1B17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white mb-1">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>{item.likes}</span>
                  </div>
                  <p className="text-[11px] font-light text-white/90 line-clamp-2 leading-snug">
                    {item.caption}
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
