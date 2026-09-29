import React, { useState } from 'react';
import { X, ShoppingBag, ChevronDown, ChevronUp, Check, Sparkles } from 'lucide-react';
import { Product } from '../data/floristData';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, message: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [giftMessage, setGiftMessage] = useState('');
  const [isCareOpen, setIsCareOpen] = useState(true);
  const [isOriginOpen, setIsOriginOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, giftMessage);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1B17]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FFF8F0] rounded-xs shadow-2xl overflow-hidden z-10 border border-[#DED9D2] animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FFFDFC]/80 hover:bg-[#FFFDFC] text-[#524344] hover:text-[#1D1B17] rounded-full transition-colors"
          aria-label="닫기"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Product Image */}
        <div className="md:w-1/2 bg-[#F3EDE5] relative min-h-[280px] md:min-h-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-[#FFFDFC]/90 px-2.5 py-1 text-[10px] tracking-wider uppercase font-semibold text-[#8A4751] rounded-xs border border-[#DED9D2]">
            {product.tag}
          </div>
        </div>

        {/* Right Column: Details & Ordering */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#777168] font-medium block mb-1">
                {product.category}
              </span>
              <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-medium text-[#1D1B17]">
                {product.title}
              </h2>
              <span className="font-serif-kr text-xs text-[#524344] block mt-0.5">
                {product.koreanName}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-serif-cormorant text-2xl font-semibold text-[#8A4751] tabular-nums">
                {product.formattedPrice}
              </span>
              <span className="text-[11px] text-[#777168] bg-[#F3EDE5] px-2 py-0.5 rounded-xs">
                {product.badge || '무료 메시지 카드 동봉'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#524344] font-light leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            {/* Floral Ingredients Tag List */}
            <div className="pt-2">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#777168] block mb-2">
                구성 꽃 & 소재
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.flowers.map((fl, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-[#FFFDFC] border border-[#DED9D2] text-[#524344] px-2.5 py-1 rounded-xs"
                  >
                    {fl}
                  </span>
                ))}
              </div>
            </div>

            {/* "The Flower Care & Origin Drawer" Accordion */}
            <div className="border-t border-[#DED9D2]/70 pt-3 space-y-2">
              {/* Care Section */}
              <div className="border border-[#DED9D2] rounded-xs bg-[#FFFDFC]">
                <button
                  type="button"
                  onClick={() => setIsCareOpen(!isCareOpen)}
                  className="w-full px-3.5 py-2.5 flex items-center justify-between text-left text-xs font-semibold text-[#1D1B17]"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#5C604E]" />
                    <span>플로리스트의 꽃 관리 팁 (Flower Care)</span>
                  </span>
                  {isCareOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-[#777168]" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-[#777168]" />
                  )}
                </button>
                {isCareOpen && (
                  <div className="px-3.5 pb-3 text-[11px] text-[#524344] font-light leading-relaxed border-t border-[#DED9D2]/50 pt-2">
                    {product.careNotes}
                  </div>
                )}
              </div>

              {/* Origin Section */}
              <div className="border border-[#DED9D2] rounded-xs bg-[#FFFDFC]">
                <button
                  type="button"
                  onClick={() => setIsOriginOpen(!isOriginOpen)}
                  className="w-full px-3.5 py-2.5 flex items-center justify-between text-left text-xs font-semibold text-[#1D1B17]"
                >
                  <span>수확 원산지 & 포장 안내</span>
                  {isOriginOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-[#777168]" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-[#777168]" />
                  )}
                </button>
                {isOriginOpen && (
                  <div className="px-3.5 pb-3 text-[11px] text-[#524344] font-light leading-relaxed border-t border-[#DED9D2]/50 pt-2 space-y-1">
                    <p>• 산지: 서울 양재동 화훼공판장 당일 사입 최상급 특품 생화</p>
                    <p>• 패키징: 친환경 생분해 포장지, 아틀리에 시그니처 코튼 리본</p>
                    <p>• 신선도: 48시간 수분 보존 물주머니 기본 마감 처리</p>
                  </div>
                )}
              </div>
            </div>

            {/* Gift Message Input */}
            <div className="space-y-1.5 pt-1">
              <label className="text-[10px] tracking-wider uppercase font-semibold text-[#777168] block">
                함께 전할 카드 메시지 (선택)
              </label>
              <input
                type="text"
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
                placeholder="예: 언제나 피어나는 봄처럼 환하게 빛나길 바라요."
                className="w-full px-3 py-2 text-xs bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-[#1D1B17] placeholder:text-[#777168]/70"
              />
            </div>
          </div>

          {/* Quantity and Add to Bag */}
          <div className="pt-4 border-t border-[#DED9D2] flex items-center gap-3">
            <div className="flex items-center border border-[#DED9D2] rounded-xs bg-[#FFFDFC] shrink-0">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2.5 py-2 text-xs font-semibold text-[#524344] hover:text-[#1D1B17]"
              >
                -
              </button>
              <span className="px-3 text-xs font-medium tabular-nums">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-2.5 py-2 text-xs font-semibold text-[#524344] hover:text-[#1D1B17]"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={addedToast}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xs text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                addedToast
                  ? 'bg-[#5C604E] text-white'
                  : 'bg-[#8A4751] hover:bg-[#71333D] text-white'
              }`}
            >
              {addedToast ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>장바구니에 담겼습니다</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>장바구니 담기 (₩{(product.price * quantity).toLocaleString()})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
