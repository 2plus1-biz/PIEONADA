import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface SideNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenCareGuide: () => void;
}

export const SideNavDrawer: React.FC<SideNavDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenCareGuide,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1B17]/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#FFF8F0] h-full shadow-2xl flex flex-col justify-between p-8 sm:p-12 z-10 overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-[#DED9D2]">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#DED9D2]/70">
          <div className="flex items-center gap-2">
            <span className="font-serif-cormorant text-2xl tracking-[0.2em] font-medium text-[#1D1B17] uppercase">
              Pieonada
            </span>
            <svg
              className="w-3.5 h-3.5 text-[#8A4751]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C13.5 6.5 17.5 10.5 22 12C17.5 13.5 13.5 17.5 12 22C10.5 17.5 6.5 13.5 2 12C6.5 10.5 10.5 6.5 12 2Z" />
            </svg>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#524344] hover:text-[#1D1B17] transition-colors hover:rotate-90 duration-300"
            aria-label="닫기"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="py-12 space-y-6">
          <nav className="flex flex-col space-y-5 text-left">
            <button
              onClick={() => handleLinkClick('best-flowers')}
              className="group flex items-center justify-between font-serif-cormorant text-2xl sm:text-3xl tracking-[0.1em] text-[#1D1B17] hover:text-[#8A4751] transition-colors py-1"
            >
              <span>SHOP</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8A4751]" />
            </button>

            <button
              onClick={() => handleLinkClick('moments')}
              className="group flex items-center justify-between font-serif-cormorant text-2xl sm:text-3xl tracking-[0.1em] text-[#1D1B17] hover:text-[#8A4751] transition-colors py-1"
            >
              <span>OCCASION</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8A4751]" />
            </button>

            <button
              onClick={() => handleLinkClick('our-story')}
              className="group flex items-center justify-between font-serif-cormorant text-2xl sm:text-3xl tracking-[0.1em] text-[#1D1B17] hover:text-[#8A4751] transition-colors py-1"
            >
              <span>ABOUT</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8A4751]" />
            </button>

            <button
              onClick={() => {
                onOpenCareGuide();
                onClose();
              }}
              className="group flex items-center justify-between font-serif-cormorant text-2xl sm:text-3xl tracking-[0.1em] text-[#1D1B17] hover:text-[#8A4751] transition-colors py-1"
            >
              <span>FLOWER GUIDE</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8A4751]" />
            </button>

            <button
              onClick={() => handleLinkClick('custom-order')}
              className="group flex items-center justify-between font-serif-cormorant text-2xl sm:text-3xl tracking-[0.1em] text-[#1D1B17] hover:text-[#8A4751] transition-colors py-1"
            >
              <span>CUSTOM ORDER</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8A4751]" />
            </button>

            <button
              onClick={() => handleLinkClick('atelier-visit')}
              className="group flex items-center justify-between font-serif-cormorant text-2xl sm:text-3xl tracking-[0.1em] text-[#1D1B17] hover:text-[#8A4751] transition-colors py-1"
            >
              <span>CONTACT</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8A4751]" />
            </button>
          </nav>
        </div>

        {/* Footer Details */}
        <div className="pt-8 border-t border-[#DED9D2]/70 space-y-5 text-xs text-[#777168]">
          <div>
            <div className="text-[10px] tracking-[0.15em] uppercase font-semibold text-[#1D1B17] mb-1">
              Atelier Hours
            </div>
            <p className="font-light">Mon - Sat 11:00 - 19:00 / Sun Closed</p>
          </div>

          <div className="pt-2 text-[11px] tracking-wider text-[#524344]">
            <a
              href="#instagram"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('instagram-grid');
              }}
              className="hover:text-[#8A4751] transition-colors"
            >
              INSTAGRAM @PIEONADA
            </a>
            <span className="mx-2 text-[#DED9D2]">·</span>
            <span className="hover:text-[#8A4751] cursor-pointer transition-colors">
              KAKAOTALK CHANNEL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
