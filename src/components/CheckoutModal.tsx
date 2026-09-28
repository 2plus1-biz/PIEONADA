import React, { useState } from 'react';
import { X, Check, CreditCard, MapPin, Calendar, User, Phone } from 'lucide-react';
import { CartItem } from './CartDrawer';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('2026-09-29');
  const [deliveryTime, setDeliveryTime] = useState('오후 1시 ~ 3시 (정기 배송)');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'kakaopay' | 'naverpay'>('kakaopay');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 70000 || items.length === 0 ? 0 : 5000;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'PIO-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
    setIsSuccess(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1B17]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#FFF8F0] rounded-xs shadow-2xl overflow-hidden z-10 border border-[#DED9D2] animate-in zoom-in-95 duration-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#524344] hover:text-[#1D1B17] transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                CHECKOUT
              </span>
              <h3 className="font-serif-kr text-2xl font-normal text-[#1D1B17]">
                주문서 작성 및 결제
              </h3>
            </div>

            {/* Order Items Preview */}
            <div className="bg-[#FFFDFC] p-3.5 rounded-xs border border-[#DED9D2] space-y-2 max-h-36 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between text-xs text-[#524344]"
                >
                  <span className="font-medium text-[#1D1B17]">
                    {item.product.title} × {item.quantity}
                  </span>
                  <span className="tabular-nums">
                    ₩{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Recipient Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[#1D1B17]">받는 분 정보</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="받는 분 성함"
                  className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="받는 분 연락처"
                  className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                />
              </div>

              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="배송지 상세 주소 (서울/경기권 당일/예약 퀵 배송)"
                className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="date"
                  required
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                />
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                >
                  <option>오전 10시 ~ 12시 (오전 배송)</option>
                  <option>오후 1시 ~ 3시 (정기 배송)</option>
                  <option>오후 4시 ~ 6시 (저녁 배송)</option>
                  <option>아틀리에 직접 픽업 (성수동)</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-[#1D1B17]">결제 수단</h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'kakaopay', label: '카카오페이' },
                  { id: 'naverpay', label: '네이버페이' },
                  { id: 'card', label: '신용/체크카드' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2 text-xs font-medium rounded-xs border text-center transition-colors cursor-pointer ${
                      paymentMethod === m.id
                        ? 'bg-[#8A4751] text-white border-[#8A4751]'
                        : 'bg-[#FFFDFC] text-[#524344] border-[#DED9D2]'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Final Total and Pay Button */}
            <div className="pt-4 border-t border-[#DED9D2] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#777168] block">최종 결제 금액</span>
                <span className="font-serif-cormorant text-2xl font-bold text-[#8A4751] tabular-nums">
                  ₩{total.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="bg-[#8A4751] hover:bg-[#71333D] text-white px-7 py-3 rounded-xs text-xs font-semibold tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                결제 완료하기
              </button>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-5">
            <div className="w-14 h-14 bg-[#E8D5D5] text-[#8A4751] rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                ORDER COMPLETED
              </span>
              <h3 className="font-serif-kr text-2xl font-normal text-[#1D1B17]">
                주문이 성공적으로 완료되었습니다
              </h3>
              <p className="text-xs text-[#524344] font-light max-w-sm mx-auto leading-relaxed">
                주문번호: <strong className="text-[#8A4751]">{orderId}</strong>
                <br />
                {name} 님께 {deliveryDate}에 가장 싱싱한 꽃으로 정성껏 전달해 드리겠습니다.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-2.5 bg-[#8A4751] hover:bg-[#71333D] text-white text-xs font-medium rounded-xs transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
