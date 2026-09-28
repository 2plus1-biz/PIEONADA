import React from 'react';
import { X, Droplets, Scissors, Sun, Sparkles, Wind } from 'lucide-react';

interface FlowerCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlowerCareModal: React.FC<FlowerCareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1B17]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FFF8F0] rounded-xs shadow-2xl border border-[#DED9D2] z-10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#524344] hover:text-[#1D1B17] transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
              FLOWER CARE GUIDE
            </span>
            <h3 className="font-serif-kr text-2xl sm:text-3xl font-normal text-[#1D1B17]">
              꽃을 오래도록 아름답게 감상하는 방법
            </h3>
            <p className="text-xs text-[#524344] font-light leading-relaxed">
              피어나다의 모든 생화는 최적의 상태로 수확되어 배송됩니다. 작은 관심과 올바른 물 관리가 더해지면 최대 10~14일 동안 피어나는 아름다움을 감상하실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Step 1 */}
            <div className="p-4 bg-[#FFFDFC] rounded-xs border border-[#DED9D2] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751]">
                <Scissors className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-semibold text-[#1D1B17]">1. 줄기 끝 사선 45도 커팅</h4>
              <p className="text-[11px] text-[#524344] font-light leading-relaxed">
                흐르는 차가운 물속에서 날카로운 가위로 줄기 끝을 사선으로 1~2cm 잘라주세요. 물관의 표면적이 넓어져 수분 흡수력이 극대화됩니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-[#FFFDFC] rounded-xs border border-[#DED9D2] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751]">
                <Droplets className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-semibold text-[#1D1B17]">2. 깨끗하고 시원한 물 교체</h4>
              <p className="text-[11px] text-[#524344] font-light leading-relaxed">
                화병 안쪽을 주방세제로 깨끗이 씻고, 1~2일에 한 번씩 차가운 수돗물로 전량 교체해 주세요. 물에 잠기는 잎사귀는 미리 떼어내야 부패를 막습니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-[#FFFDFC] rounded-xs border border-[#DED9D2] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751]">
                <Sun className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-semibold text-[#1D1B17]">3. 직사광선 & 히터 바람 피하기</h4>
              <p className="text-[11px] text-[#524344] font-light leading-relaxed">
                절화는 햇빛을 직접 받으면 꽃잎이 타거나 탈수가 촉진됩니다. 에어컨/히터 바람이 직접 닿지 않는 서늘한 반음지에 놓아주세요.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-[#FFFDFC] rounded-xs border border-[#DED9D2] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-semibold text-[#1D1B17]">4. 동봉된 플라워 푸드 활용</h4>
              <p className="text-[11px] text-[#524344] font-light leading-relaxed">
                주문 시 동봉해 드리는 절화수명연장제(Flower Food)는 박테리아 번식을 억제하고 꽃봉오리가 끝까지 건강하게 개화하도록 돕습니다.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#DED9D2] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#8A4751] hover:bg-[#71333D] text-white text-xs font-medium rounded-xs transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
