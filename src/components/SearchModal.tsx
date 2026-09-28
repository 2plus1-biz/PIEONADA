import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { BEST_FLOWERS, SEASONAL_ITEMS, Product } from '../data/floristData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const allProducts = [...BEST_FLOWERS, ...SEASONAL_ITEMS];
  const filteredProducts = searchTerm.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.koreanName.includes(searchTerm) ||
          p.description.includes(searchTerm) ||
          p.flowers.some((fl) => fl.includes(searchTerm))
      )
    : [];

  const handlePick = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1B17]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#FFF8F0] rounded-xs shadow-2xl border border-[#DED9D2] z-10 p-6 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200">
        {/* Search Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#DED9D2]">
          <Search className="w-5 h-5 text-[#8A4751] shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="꽃 이름, 기념일, 분위기(핑크, 라넌큘러스, 튤립) 검색..."
            className="w-full bg-transparent text-sm text-[#1D1B17] placeholder:text-[#777168] focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#777168] hover:text-[#1D1B17] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!searchTerm && (
          <div className="py-6 space-y-3">
            <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[#777168]">
              추천 검색어
            </span>
            <div className="flex flex-wrap gap-2">
              {['라넌큘러스', '핑크 부케', '생일 선물', '바스켓', '화이트 가든', '튤립'].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1 bg-[#FFFDFC] text-xs text-[#524344] hover:text-[#8A4751] border border-[#DED9D2] rounded-xs transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchTerm && (
          <div className="py-4 max-h-[360px] overflow-y-auto space-y-2">
            {filteredProducts.length === 0 ? (
              <p className="text-center py-8 text-xs text-[#777168]">
                ‘{searchTerm}’에 대한 검색 결과가 없습니다.
              </p>
            ) : (
              filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handlePick(p)}
                  className="flex items-center justify-between p-3 bg-[#FFFDFC] hover:bg-[#F3EDE5] rounded-xs border border-[#DED9D2] cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-12 h-14 object-cover rounded-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#777168] font-medium block">
                        {p.tag}
                      </span>
                      <h4 className="font-serif-cormorant text-base font-medium text-[#1D1B17]">
                        {p.title}
                      </h4>
                      <span className="text-xs text-[#8A4751] font-semibold tabular-nums">
                        {p.formattedPrice}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#777168]" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
