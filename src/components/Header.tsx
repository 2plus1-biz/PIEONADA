import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenSideNav: () => void;
  onOpenInquiry: () => void;
  onOpenAccount: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenSideNav,
  onOpenInquiry,
  onOpenAccount,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FFF8F0]/95 backdrop-blur-md border-[#DED9D2] shadow-xs'
          : 'bg-[#FFF8F0] border-[#DED9D2]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigateSection('hero')}
            className="group flex flex-col items-start text-left focus-visible:outline-hidden"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif-cormorant text-2xl sm:text-3xl font-medium tracking-[0.18em] text-[#1D1B17] uppercase">
                Pieonada
              </span>
              <svg
                className="w-3.5 h-3.5 text-[#8A4751] opacity-80 group-hover:rotate-45 transition-transform duration-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C13.5 6.5 17.5 10.5 22 12C17.5 13.5 13.5 17.5 12 22C10.5 17.5 6.5 13.5 2 12C6.5 10.5 10.5 6.5 12 2Z" />
              </svg>
            </div>
            <span className="text-[9px] tracking-[0.25em] text-[#777168] uppercase -mt-0.5">
              Flowers & Moments
            </span>
          </button>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[13px] tracking-[0.12em] font-medium uppercase text-[#524344]">
          <button
            onClick={() => onNavigateSection('best-flowers')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => onNavigateSection('moments')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            Occasion
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => onNavigateSection('our-story')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => onNavigateSection('flower-class')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            Class
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => onNavigateSection('price-guide')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            Guide
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => onNavigateSection('custom-order')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            Custom Order
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => onNavigateSection('atelier-visit')}
            className="hover:text-[#8A4751] transition-colors relative py-1 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A4751] transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Right Tools & Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 text-[#524344] hover:text-[#8A4751] transition-colors"
            title="검색"
            aria-label="꽃 검색"
          >
            <Search className="w-[18px] h-[18px] stroke-[1.5]" />
          </button>

          {/* Cart Bag Icon with Counter */}
          <button
            onClick={onOpenCart}
            className="relative p-1.5 text-[#524344] hover:text-[#8A4751] transition-colors flex items-center"
            title="장바구니"
            aria-label="장바구니 보기"
          >
            <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 bg-[#8A4751] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium shadow-xs">
              {cartCount}
            </span>
          </button>

          {/* INQUIRY Text Link / Button */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1D1B17] hover:text-[#8A4751] px-2 py-1 transition-colors"
          >
            Inquiry
          </button>

          {/* User Account Button */}
          <button
            onClick={onOpenAccount}
            className="p-1.5 text-[#524344] hover:text-[#8A4751] transition-colors"
            title="마이페이지"
            aria-label="내 계정"
          >
            <User className="w-[18px] h-[18px] stroke-[1.5]" />
          </button>

          {/* Slide Navigation Drawer Toggle (Hamburger / Menu) */}
          <button
            onClick={onOpenSideNav}
            className="p-1.5 text-[#1D1B17] hover:text-[#8A4751] transition-colors"
            title="메뉴 열기"
            aria-label="사이트 메뉴"
          >
            <Menu className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
