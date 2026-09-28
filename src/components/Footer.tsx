import React from 'react';
import { FadeIn } from './FadeIn';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCareGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCareGuide }) => {
  return (
    <footer className="bg-[#FFF8F0] border-t border-[#DED9D2] pt-16 pb-12 text-[#524344] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#DED9D2]/70">
            {/* Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif-cormorant text-2xl font-medium tracking-[0.2em] text-[#1D1B17] uppercase">
                  Pieonada
                </span>
                <svg
                  className="w-3.5 h-3.5 text-[#8A4751]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C13.5 6.5 17.5 10.5 22 12C17.5 13.5 13.5 17.5 12 22C10.5 17.5 6.5 13.5 2 12C6.5 10.5 10.5 6.5 12 2Z" />
                </svg>
                <span className="font-serif-kr text-base text-[#1D1B17] font-normal">
                  피어나다
                </span>
              </div>

              <p className="font-serif-kr text-base text-[#8A4751] italic">
                “마음을 전하는 순간, 피어나다.”
              </p>

              <p className="text-xs text-[#777168] leading-relaxed max-w-sm font-light">
                마음을 섬세하게 만지는 계절의 꽃과 온기 어린 핸드타이드 플라워 경험.
                피어나는 플라워 아틀리에 브랜드입니다.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1D1B17]">
                NAVIGATION
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li>
                  <button
                    onClick={() => onNavigate('best-flowers')}
                    className="hover:text-[#8A4751] transition-colors cursor-pointer"
                  >
                    SHOP (대표 카탈로그)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('our-story')}
                    className="hover:text-[#8A4751] transition-colors cursor-pointer"
                  >
                    ABOUT (브랜드 철학)
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenCareGuide}
                    className="hover:text-[#8A4751] transition-colors cursor-pointer"
                  >
                    GUIDE (꽃 관리 및 가이드)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('atelier-visit')}
                    className="hover:text-[#8A4751] transition-colors cursor-pointer"
                  >
                    CONTACT (오시는 길 & 문의)
                  </button>
                </li>
              </ul>
            </div>

            {/* Atelier & Connect Column */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1D1B17]">
                ATELIER & CONNECT
              </h4>
              <div className="space-y-2 text-xs font-light text-[#777168]">
                <p>Hours: Mon - Sat 11:00 - 19:00 (Sun Closed)</p>
                <p>Address: 서울특별시 성동구 연무장길 피어나다 아틀리에</p>
                <div className="pt-2 flex items-center gap-4 text-[#1D1B17] font-medium text-[11px]">
                  <a
                    href="#instagram"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('instagram-grid');
                    }}
                    className="hover:text-[#8A4751] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Instagram @pieonada
                  </a>
                  <span>·</span>
                  <span className="hover:text-[#8A4751] cursor-pointer transition-colors">
                    KakaoTalk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#777168] gap-4">
          <p>© 2026 PIEONADA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-[#1D1B17] transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-[#1D1B17] transition-colors">
              Privacy Policy
            </a>
            <button
              onClick={onOpenCareGuide}
              className="hover:text-[#1D1B17] transition-colors cursor-pointer"
            >
              Flower Care Guide
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
