import React, { useState } from 'react';
import { ArrowRight, Store, Truck } from 'lucide-react';
import { FadeIn } from './FadeIn';

export interface CustomOrderFormState {
  purpose: string;
  budget: string;
  mood: string;
  color: string;
  deliveryMethod: 'pickup' | 'delivery';
  message: string;
}

interface CustomOrderSectionProps {
  orderState: CustomOrderFormState;
  setOrderState: React.Dispatch<React.SetStateAction<CustomOrderFormState>>;
  onSubmitInquiry: () => void;
}

const PURPOSES = ['생일', '기념일', '감사', '축하', '사랑', '기타'];
const BUDGETS = ['5만원 이하', '5~7만원', '7~10만원', '10만원 이상'];
const MOODS = ['화사하게', '사랑스럽게', '차분하게', '고급스럽게'];
const COLORS = [
  { id: 'Pink', label: 'Pink', dot: '#F4B5BC' },
  { id: 'White', label: 'White', dot: '#EAEAEA' },
  { id: 'Yellow', label: 'Yellow', dot: '#FFE082' },
  { id: 'Purple', label: 'Purple', dot: '#D1B3E0' },
  { id: '플로리스트 추천', label: '플로리스트 추천', dot: '#A9AD98' },
];

export const CustomOrderSection: React.FC<CustomOrderSectionProps> = ({
  orderState,
  setOrderState,
  onSubmitInquiry,
}) => {
  const maxMessageLength = 100;

  return (
    <section id="custom-order" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
              ATELIER CUSTOM ORDER
            </span>
            <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
              원하는 느낌이 있으신가요?
            </h2>
            <p className="text-xs sm:text-sm text-[#524344] font-light max-w-xl mx-auto leading-relaxed pt-1 break-keep">
              전하고 싶은 마음과 원하는 분위기를 알려주세요. PIEONADA가 어울리는 꽃을 제안해드릴게요.
            </p>
          </div>
        </FadeIn>

        {/* Custom Order Interactive Form Container */}
        <FadeIn direction="up" delay={0.15}>
          <div className="bg-[#FFFDFC] rounded-xs border border-[#DED9D2] p-6 sm:p-10 shadow-xs space-y-8">
            {/* Step 1: Purpose */}
            <div className="space-y-3.5">
              <label className="block text-sm font-semibold tracking-wider text-[#1D1B17]">
                1. 선물 목적 <span className="text-[#8A4751]">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {PURPOSES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOrderState((prev) => ({ ...prev, purpose: item }))}
                    className={`px-4.5 py-2.5 text-[13px] sm:text-sm font-medium rounded-xs border transition-all cursor-pointer ${
                      orderState.purpose === item
                        ? 'bg-[#8A4751] text-white border-[#8A4751] shadow-xs'
                        : 'bg-[#FFF8F0] text-[#524344] border-[#DED9D2] hover:border-[#8A4751]/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Budget */}
            <div className="space-y-3.5">
              <label className="block text-sm font-semibold tracking-wider text-[#1D1B17]">
                2. 희망 예산대 <span className="text-[#8A4751]">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {BUDGETS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOrderState((prev) => ({ ...prev, budget: item }))}
                    className={`px-4.5 py-2.5 text-[13px] sm:text-sm font-medium rounded-xs border transition-all cursor-pointer ${
                      orderState.budget === item
                        ? 'bg-[#8A4751] text-white border-[#8A4751] shadow-xs'
                        : 'bg-[#FFF8F0] text-[#524344] border-[#DED9D2] hover:border-[#8A4751]/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Mood */}
            <div className="space-y-3.5">
              <label className="block text-sm font-semibold tracking-wider text-[#1D1B17]">
                3. 원하는 분위기 <span className="text-[#8A4751]">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {MOODS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOrderState((prev) => ({ ...prev, mood: item }))}
                    className={`px-4.5 py-2.5 text-[13px] sm:text-sm font-medium rounded-xs border transition-all cursor-pointer ${
                      orderState.mood === item
                        ? 'bg-[#8A4751] text-white border-[#8A4751] shadow-xs'
                        : 'bg-[#FFF8F0] text-[#524344] border-[#DED9D2] hover:border-[#8A4751]/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Color */}
            <div className="space-y-3.5">
              <label className="block text-sm font-semibold tracking-wider text-[#1D1B17]">
                4. 원하는 색감 <span className="text-[#8A4751]">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {COLORS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setOrderState((prev) => ({ ...prev, color: item.id }))}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-[13px] sm:text-sm font-medium rounded-xs border transition-all cursor-pointer ${
                      orderState.color === item.id
                        ? 'bg-[#E8D5D5] text-[#1D1B17] border-[#8A4751] shadow-xs'
                        : 'bg-[#FFF8F0] text-[#524344] border-[#DED9D2] hover:border-[#8A4751]/40'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/15 shrink-0"
                      style={{ backgroundColor: item.dot }}
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Delivery Method */}
            <div className="space-y-3.5">
              <label className="block text-sm font-semibold tracking-wider text-[#1D1B17]">
                5. 수령방식 <span className="text-[#8A4751]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Pickup Option */}
                <button
                  type="button"
                  onClick={() => setOrderState((prev) => ({ ...prev, deliveryMethod: 'pickup' }))}
                  className={`p-4.5 rounded-xs border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                    orderState.deliveryMethod === 'pickup'
                      ? 'bg-[#FFF8F0] border-[#8A4751] ring-1 ring-[#8A4751]'
                      : 'bg-[#FFFDFC] border-[#DED9D2] hover:border-[#8A4751]/40'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      orderState.deliveryMethod === 'pickup'
                        ? 'bg-[#8A4751] text-white'
                        : 'bg-[#F3EDE5] text-[#777168]'
                    }`}
                  >
                    <Store className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1D1B17]">매장 픽업</h4>
                    <p className="text-xs text-[#777168] mt-1">
                      성수동 피어나다 아틀리에 매장 방문 픽업
                    </p>
                  </div>
                </button>

                {/* Delivery Option */}
                <button
                  type="button"
                  onClick={() => setOrderState((prev) => ({ ...prev, deliveryMethod: 'delivery' }))}
                  className={`p-4.5 rounded-xs border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                    orderState.deliveryMethod === 'delivery'
                      ? 'bg-[#FFF8F0] border-[#8A4751] ring-1 ring-[#8A4751]'
                      : 'bg-[#FFFDFC] border-[#DED9D2] hover:border-[#8A4751]/40'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      orderState.deliveryMethod === 'delivery'
                        ? 'bg-[#8A4751] text-white'
                        : 'bg-[#F3EDE5] text-[#777168]'
                    }`}
                  >
                    <Truck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1D1B17]">
                      배송
                    </h4>
                    <p className="text-xs text-[#777168] mt-1">
                      서울/경기 생화 전용 안전 배송
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 6: Message Card */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold tracking-wider text-[#1D1B17]">
                  6. 전하고 싶은 마음 (메시지 카드 작성)
                </label>
                <span className="text-xs text-[#777168] font-mono tabular-nums">
                  {orderState.message.length}/{maxMessageLength}자
                </span>
              </div>
              <textarea
                rows={3}
                maxLength={maxMessageLength}
                value={orderState.message}
                onChange={(e) =>
                  setOrderState((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="함께 전하실 편지 문구를 적어주시면, 감성적인 레터프레스 페이퍼 카드에 수기로 정성스럽게 적어 동봉해 드립니다."
                className="w-full p-4 bg-[#FFF8F0] border border-[#DED9D2] focus:border-[#8A4751] focus:outline-hidden rounded-xs text-sm text-[#1D1B17] placeholder:text-[#777168]/70 leading-relaxed font-serif-kr"
              />
            </div>

            {/* Selected Order Preview Bar & Inquiry CTA */}
            <div className="pt-5 border-t border-[#DED9D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#8A4751] block">
                  SELECTED ORDER PREVIEW
                </span>
                <p className="text-xs sm:text-[13px] text-[#1D1B17] font-medium">
                  <span className="text-[#8A4751]">[{orderState.purpose}]</span>을 위한{' '}
                  <span className="text-[#8A4751]">{orderState.mood}</span> 분위기의{' '}
                  <span className="text-[#8A4751]">{orderState.color}</span> 꽃 (
                  {orderState.budget} / {orderState.deliveryMethod === 'pickup' ? '매장 픽업' : '배송'})
                </p>
              </div>

              <button
                type="button"
                onClick={onSubmitInquiry}
                className="inline-flex items-center justify-center gap-2 bg-[#8A4751] hover:bg-[#71333D] text-white px-7 py-3.5 rounded-xs text-[13px] sm:text-sm font-semibold tracking-wider transition-colors shadow-xs shrink-0 cursor-pointer"
              >
                <span>맞춤 꽃 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
