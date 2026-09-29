import React from 'react';
import { FadeIn } from './FadeIn';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCareGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCareGuide }) => {
  return (
    <footer className="bg-[#46232a] border-t border-[#5c3038] pt-16 pb-12 text-[#e3dad5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
            {/* Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif-cormorant text-2xl font-medium tracking-[0.2em] text-[#faf6f0] uppercase">
                  PIEONADA
                </span>
                <svg
                  className="w-3.5 h-3.5 text-[#e8a598]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C13.5 6.5 17.5 10.5 22 12C17.5 13.5 13.5 17.5 12 22C10.5 17.5 6.5 13.5 2 12C6.5 10.5 10.5 6.5 12 2Z" />
                </svg>
                <span className="font-serif-kr text-base text-[#faf6f0] font-normal">
                  피어나다
                </span>
              </div>

              <p className="font-serif-kr text-base text-[#f0bfc6] italic">
                “마음을 전하는 순간, 피어나다.”
              </p>

              <p className="text-xs text-[#c4b5b2] leading-relaxed max-w-sm font-light break-keep">
                마음을 섬세하게 만지는 계절의 꽃과 온기 어린 핸드타이드 플라워 경험.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#faf6f0]">
                NAVIGATION
              </h4>
              <ul className="space-y-2 text-xs font-light text-[#c4b5b2]">
                <li>
                  <button
                    onClick={() => onNavigate('best-flowers')}
                    className="hover:text-[#f0bfc6] transition-colors cursor-pointer"
                  >
                    SHOP
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('moments')}
                    className="hover:text-[#f0bfc6] transition-colors cursor-pointer"
                  >
                    OCCASION
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('our-story')}
                    className="hover:text-[#f0bfc6] transition-colors cursor-pointer"
                  >
                    ABOUT
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenCareGuide}
                    className="hover:text-[#f0bfc6] transition-colors cursor-pointer"
                  >
                    GUIDE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('atelier-visit')}
                    className="hover:text-[#f0bfc6] transition-colors cursor-pointer"
                  >
                    CONTACT
                  </button>
                </li>
              </ul>
            </div>

            {/* Atelier & Connect Column */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#faf6f0]">
                SOCIAL
              </h4>
              <div className="space-y-2 text-xs font-light text-[#c4b5b2]">
                <div className="flex items-center gap-4 text-[#faf6f0] font-medium text-[12px]">
                  <a
                    href="#instagram"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('instagram-grid');
                    }}
                    className="hover:text-[#f0bfc6] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Instagram
                  </a>
                  <span className="text-[#8e7677]">·</span>
                  <span className="hover:text-[#f0bfc6] cursor-pointer transition-colors">
                    KakaoTalk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#a89596] gap-4">
          <p>© 2026 PIEONADA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#business" className="hover:text-[#faf6f0] transition-colors">
              Business Information
            </a>
            <a href="#privacy" className="hover:text-[#faf6f0] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#faf6f0] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
