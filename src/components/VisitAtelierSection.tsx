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
                    VISIT OUR ATELIER
                  </span>
                  <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight">
                    피어나다 아틀리에
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#524344] font-light leading-relaxed">
                  향긋한 계절 꽃으로 둘러싸인 조용한 아틀리에 공간에서 직접 꽃을 고르고
                  마음에 드는 꽃다발을 픽업하실 수 있습니다.
                </p>

                {/* Atelier Info List */}
                <div className="space-y-4 pt-2 border-t border-[#DED9D2]/70">
                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        위치
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        서울특별시 성동구 연무장길 피어나다 아틀리에 (성수역 3번 출구 도보 5분)
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        운영 시간
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        월요일 - 토요일 11:00 - 19:00 (일요일 및 공휴일 사전 예약 픽업만 운영)
                      </p>
                    </div>
                  </div>

                  {/* Contact Channels */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        주문 및 문의 채널
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        온라인 맞춤 주문서 / 카카오톡 채널 ‘피어나다’ / 인스타그램 @pieonada
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
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#8A4751]" />
                        <span>주소 복사 완료</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span>네이버지도 & 카카오 지도 길찾기</span>
                      </>
                    )}
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
