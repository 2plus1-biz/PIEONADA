import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../data/floristData';

export interface CartItem {
  product: Product;
  quantity: number;
  messageCard?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 70000 || items.length === 0 ? 0 : 5000;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1B17]/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FFF8F0] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 overflow-hidden animate-in slide-in-from-right duration-300 border-l border-[#DED9D2]">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#DED9D2]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8A4751]" />
            <h3 className="font-serif-cormorant text-2xl font-medium text-[#1D1B17]">
              Shopping Bag
            </h3>
            <span className="text-xs text-[#777168] ml-1">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#524344] hover:text-[#1D1B17] transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E8D5D5]/50 flex items-center justify-center text-[#8A4751]">
                <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              </div>
              <p className="font-serif-kr text-base text-[#1D1B17]">
                장바구니가 비어 있습니다.
              </p>
              <p className="text-xs text-[#777168] max-w-xs font-light">
                가장 마음에 드는 꽃다발을 골라 담아보세요.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-3 bg-[#FFFDFC] rounded-xs border border-[#DED9D2] shadow-xs"
              >
                <div className="w-20 h-24 rounded-xs overflow-hidden bg-[#F3EDE5] shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#777168] font-medium block">
                        {item.product.tag}
                      </span>
                      <h4 className="font-serif-cormorant text-base font-medium text-[#1D1B17] leading-tight">
                        {item.product.title}
                      </h4>
                      <span className="text-[11px] text-[#8A4751] font-semibold tabular-nums block mt-0.5">
                        ₩{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#777168] hover:text-[#BA1A1A] p-1 transition-colors"
                      title="삭제"
                      aria-label="삭제"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quantity Steppers */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center border border-[#DED9D2] rounded-xs bg-[#FFF8F0]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 text-[#524344] hover:text-[#1D1B17] transition-colors"
                        aria-label="수량 감소"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-medium text-[#1D1B17] tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 text-[#524344] hover:text-[#1D1B17] transition-colors"
                        aria-label="수량 증가"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[10px] text-[#777168]">
                      개당 ₩{item.product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Summary Box */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-[#DED9D2] space-y-3">
            <div className="space-y-1.5 text-xs text-[#524344]">
              <div className="flex justify-between">
                <span>상품 금액</span>
                <span className="tabular-nums font-medium text-[#1D1B17]">
                  ₩{subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>배송비 (70,000원 이상 무료)</span>
                <span className="tabular-nums font-medium text-[#1D1B17]">
                  {deliveryFee === 0 ? '무료' : `₩${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#DED9D2]/60 text-sm font-semibold text-[#1D1B17]">
                <span>총 결제 예정 금액</span>
                <span className="font-serif-cormorant text-lg text-[#8A4751] tabular-nums">
                  ₩{total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2 bg-[#8A4751] hover:bg-[#71333D] text-white py-3.5 rounded-xs text-xs font-semibold tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              <span>주문하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
