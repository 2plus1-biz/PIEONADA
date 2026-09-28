import React, { useState } from 'react';
import { MapPin, Clock, MessageSquare, ExternalLink, Check } from 'lucide-react';
import { atelierStorefrontImage } from '../data/floristData';
import { FadeIn } from './FadeIn';

interface VisitAtelierSectionProps {
  onOpenInquiry: () => void;
}

export const VisitAtelierSection: React.FC<VisitAtelierSectionProps> = ({ onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(
      '서울특별시 성동구 연무장길 피어나다 아틀리에'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="atelier-visit" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Storefront Image */}
          <div className="lg:col-span-6">
            <FadeIn direction="right" duration={0.85}>
              <div className="overflow-hidden rounded-xs bg-[#FFFDFC] p-3 shadow-md border border-[#DED9D2]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EDE5]">
                  <img
                    src={atelierStorefrontImage}
                    alt="PIEONADA Seongsu Atelier Storefront"
                    className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Information Details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <FadeIn direction="left" duration={0.85} delay={0.1}>
              <div className="space-y-6 sm:space-y-7">
                <div className="space-y-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                    STORE & CONTACT
                  </span>
                  <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
                    PIEONADA ATELIER
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#524344] font-light leading-relaxed break-keep">
                  꽃을 고르고, 이야기를 나누고, PIEONADA의 꽃을 직접 만날 수 있는 공간입니다.
                </p>

                {/* Atelier Info List */}
                <div className="space-y-4 sm:space-y-5 pt-6 sm:pt-7 border-t border-[#DED9D2]/70">
                  {/* OPEN */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        OPEN
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5 leading-relaxed">
                        Mon – Sat 11:00 – 19:00 · Sunday Closed
                      </p>
                    </div>
                  </div>

                  {/* PICK UP */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        PICK UP
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        매장 픽업 가능
                      </p>
                    </div>
                  </div>

                  {/* ORDER */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        ORDER
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        온라인 주문 · 카카오톡 문의
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={onOpenInquiry}
                    className="bg-[#8A4751] hover:bg-[#71333D] text-[#FFFDFC] text-xs sm:text-sm font-semibold tracking-wider px-6 py-3.5 rounded-xs transition-colors shadow-xs cursor-pointer"
                  >
                    주문 문의하기
                  </button>

                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 bg-[#FFFDFC] hover:bg-[#FFF8F0] text-[#1D1B17] border border-[#DED9D2] hover:border-[#8A4751] text-xs sm:text-sm font-semibold tracking-wider px-5 py-3.5 rounded-xs transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>오시는 길</span>
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
