import React, { useState } from 'react';
import { X, Check, Mail, Phone, Calendar, User, Sparkles } from 'lucide-react';
import { CustomOrderFormState } from './CustomOrderSection';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderState: CustomOrderFormState;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({
  isOpen,
  onClose,
  orderState,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-09-28');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'PIO-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setIsSubmitted(true);
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#524344] hover:text-[#1D1B17] transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                CUSTOM INQUIRY
              </span>
              <h3 className="font-serif-kr text-2xl sm:text-3xl font-normal text-[#1D1B17]">
                맞춤 꽃 주문 문의
              </h3>
              <p className="text-xs text-[#524344] font-light">
                선택하신 무드와 메시지를 바탕으로 플로리스트가 1:1 상담을 준비해 드립니다.
              </p>
            </div>

            {/* Letterpress Paper Card Preview */}
            <div className="bg-[#FFFDFC] border-2 border-dashed border-[#DED9D2] p-5 rounded-xs relative overflow-hidden shadow-xs">
              <div className="absolute top-2 right-3 text-[9px] tracking-widest uppercase text-[#8A4751]/60 font-serif-cormorant">
                PIEONADA LETTERPRESS
              </div>
              <span className="text-[10px] text-[#777168] block mb-2 font-medium">
                💌 동봉될 손글씨 카드 미리보기
              </span>
              <p className="font-serif-kr text-xs sm:text-sm text-[#1D1B17] italic leading-relaxed min-h-[48px] whitespace-pre-wrap">
                {orderState.message || '“당신의 특별하고 소중한 날, 가장 찬란하게 피어나길 바랍니다.”'}
              </p>
            </div>

            {/* Order Specification Summary */}
            <div className="bg-[#F3EDE5]/60 p-4 rounded-xs border border-[#DED9D2]/70 space-y-1.5 text-xs text-[#524344]">
              <div className="flex justify-between">
                <span className="text-[#777168]">선물 목적:</span>
                <span className="font-medium text-[#1D1B17]">{orderState.purpose}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777168]">희망 예산:</span>
                <span className="font-medium text-[#1D1B17]">{orderState.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777168]">선호 무드 / 색감:</span>
                <span className="font-medium text-[#1D1B17]">
                  {orderState.mood} / {orderState.color}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777168]">수령 방식:</span>
                <span className="font-medium text-[#1D1B17]">
                  {orderState.deliveryMethod === 'pickup' ? '성수 아틀리에 픽업' : '생화 전용 퀵 배송'}
                </span>
              </div>
            </div>

            {/* Contact Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#1D1B17] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8A4751]" />
                    <span>성함 <span className="text-[#8A4751]">*</span></span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#1D1B17] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8A4751]" />
                    <span>연락처 <span className="text-[#8A4751]">*</span></span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-1234-5678"
                    className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#1D1B17] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8A4751]" />
                  <span>희망 수령 일자 <span className="text-[#8A4751]">*</span></span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FFFDFC] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#8A4751] hover:bg-[#71333D] text-white py-3.5 rounded-xs text-xs font-semibold tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                문의 접수하기
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-[#E8D5D5] text-[#8A4751] rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                ORDER INQUIRY SUBMITTED
              </span>
              <h3 className="font-serif-kr text-2xl font-normal text-[#1D1B17]">
                문의가 정성껏 접수되었습니다
              </h3>
              <p className="text-xs text-[#524344] font-light max-w-sm mx-auto leading-relaxed">
                접수번호 <strong className="text-[#8A4751]">{orderId}</strong>
                <br />
                남겨주신 번호({phone})로 플로리스트가 30분 이내에 사진 시안 및 확정 견적을
                안내해 드립니다.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#8A4751] hover:bg-[#71333D] text-white text-xs font-medium rounded-xs transition-colors"
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
