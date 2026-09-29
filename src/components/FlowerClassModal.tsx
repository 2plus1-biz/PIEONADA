import React, { useEffect, useState } from 'react';
import { X, Clock, Users, Sparkles, MapPin, Calendar, Check, ArrowRight, Phone } from 'lucide-react';
import { flowerClassPosterImage } from '../data/floristData';

interface FlowerClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: (initialMessage?: string) => void;
}

export const FlowerClassModal: React.FC<FlowerClassModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<'oneday' | 'hobby' | 'master'>('oneday');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const courses = [
    {
      id: 'oneday' as const,
      tag: 'POPULAR',
      title: 'One-Day Seasonal Class',
      koreanTitle: '원데이 시즈널 클래스',
      duration: '90분 소요',
      capacity: '최대 4인 프라이빗',
      price: '85,000원',
      priceDetail: '생화 및 프리미엄 화기 일체 포함',
      description: '부담 없이 꽃과 교감하는 시간. 당일 새벽 꽃시장에서 사입한 가장 신선한 제철 꽃으로 나만의 부케 또는 테이블 센터피스를 완성합니다.',
      features: [
        '꽃의 줄기를 다듬는 기초 컨디셔닝',
        '자연스러운 프렌치 스타일 스파이럴 기법',
        '피어나다 시그니처 텍스처 패키징 및 리본 매듭법',
        '완성작 포장 및 꽃 수명 연장제(Flower Food) 증정',
      ],
    },
    {
      id: 'hobby' as const,
      tag: '4 WEEKS',
      title: 'Hobby Course',
      koreanTitle: '4주 플라워 취미 코스',
      duration: '주 1회 (회당 100분) / 총 4회',
      capacity: '최대 4인 소수정예',
      price: '320,000원',
      priceDetail: '4회 수업 생화·화기·부자재 일체 포함',
      description: '계절의 변화를 손끝으로 느끼는 4주간의 힐링 여정. 일상에서 꽃을 즐기는 네 가지 대표 어레인지먼트를 차근차근 익힙니다.',
      features: [
        '1주차: 제철 내추럴 핸드타이드 부케',
        '2주차: 세라믹 화병 꽂이 (Vase Arrangement)',
        '3주차: 프렌치 라탄 플라워 바스켓',
        '4주차: 생화 & 드라이 계절 플라워 리스 (Wreath)',
      ],
    },
    {
      id: 'master' as const,
      tag: 'INTENSIVE',
      title: 'Florist Master Course',
      koreanTitle: '플로리스트 정규 마스터 코스',
      duration: '주 1회 (회당 180분) / 총 12회',
      capacity: '1:1 또는 2인 집중 지도',
      price: '상담 후 안내',
      priceDetail: '사입 실습 및 포트폴리오 촬영 지원',
      description: '꽃에 대한 깊이 있는 이해와 조형 감각을 기르는 전문가 과정. 실전 화훼 사입부터 대형 공간 디스플레이, 웨딩 플라워까지 포괄합니다.',
      features: [
        '고급 조형 이론 및 색채학 기반 배색 기법',
        '새벽 양재·고속터미널 화훼시장 현장 사입 실습',
        '호텔 웨딩 및 브랜드 팝업 공간 연출 기법',
        '1:1 포트폴리오 디렉팅 및 창업 멘토링',
      ],
    },
  ];

  const currentCourse = courses.find((c) => c.id === selectedCourse)!;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1D1B17]/70 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#FFFDFC] rounded-xs shadow-2xl border border-[#DED9D2] overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#DED9D2]/70 bg-[#FFF8F0]">
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#8A4751] block mb-1">
              PIEONADA CLASSROOM
            </span>
            <h3 className="font-serif-kr text-xl sm:text-2xl font-normal text-[#1D1B17]">
              피어나다 플라워 클래스 안내
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#777168] hover:text-[#1D1B17] hover:bg-[#F1E8E3] rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Top Banner with Atelier Atmosphere */}
          <div className="relative h-44 sm:h-52 rounded-xs overflow-hidden border border-[#DED9D2]/80">
            <img
              src={flowerClassPosterImage}
              alt="피어나다 플라워 아틀리에 클래스"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B17]/85 via-[#1D1B17]/40 to-transparent" />
            <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7 text-[#FAF6F0] max-w-lg">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8D5D5] block mb-1">
                SEONGSU ATELIER 2F
              </span>
              <p className="font-serif-kr text-base sm:text-lg font-normal leading-snug">
                “꽃을 마주하는 시간만큼은 온전히 나에게 집중해보세요.”
              </p>
              <p className="text-xs text-white/75 font-light mt-1">
                성수동 연무장길 아틀리에 2층 프라이빗 스튜디오에서 소수정예로 진행됩니다.
              </p>
            </div>
          </div>

          {/* Course Tabs */}
          <div>
            <div className="flex border-b border-[#DED9D2] gap-2 sm:gap-6 overflow-x-auto pb-1">
              {courses.map((course) => {
                const active = course.id === selectedCourse;
                return (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-all relative whitespace-nowrap cursor-pointer ${
                      active
                        ? 'text-[#8A4751] font-semibold'
                        : 'text-[#777168] hover:text-[#1D1B17]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{course.koreanTitle}</span>
                      {course.tag && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono uppercase ${
                          active ? 'bg-[#8A4751]/10 text-[#8A4751]' : 'bg-[#EFEAE2] text-[#777168]'
                        }`}>
                          {course.tag}
                        </span>
                      )}
                    </div>
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8A4751]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Course Content */}
            <div className="mt-6 bg-[#FAF6F0] p-6 sm:p-7 rounded-xs border border-[#DED9D2]/70 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DED9D2]/60 pb-5">
                <div>
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#8A4751] font-medium block">
                    {currentCourse.title}
                  </span>
                  <h4 className="font-serif-kr text-2xl font-normal text-[#1D1B17] mt-0.5">
                    {currentCourse.koreanTitle}
                  </h4>
                </div>
                <div className="sm:text-right">
                  <div className="font-serif-cormorant text-2xl sm:text-3xl font-normal text-[#1D1B17]">
                    {currentCourse.price}
                  </div>
                  <span className="text-xs text-[#777168] font-light">
                    {currentCourse.priceDetail}
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#524344]">
                <div className="flex items-center gap-2.5 bg-[#FFFDFC] p-3 rounded-xs border border-[#DED9D2]/50">
                  <Clock className="w-4 h-4 text-[#8A4751] shrink-0" />
                  <span><strong>소요 시간:</strong> {currentCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#FFFDFC] p-3 rounded-xs border border-[#DED9D2]/50">
                  <Users className="w-4 h-4 text-[#8A4751] shrink-0" />
                  <span><strong>정원:</strong> {currentCourse.capacity}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#524344] font-light leading-relaxed break-keep">
                {currentCourse.description}
              </p>

              {/* Curriculum List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold tracking-wider text-[#1D1B17] uppercase block">
                  수업 상세 내용
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCourse.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#524344]">
                      <div className="w-4 h-4 rounded-full bg-[#E8D5D5] flex items-center justify-center text-[#8A4751] shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Studio & Classroom Info */}
          <div className="border border-[#DED9D2]/70 bg-[#FFFDFC] p-5 sm:p-6 rounded-xs grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-[#524344]">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#1D1B17]">
                <MapPin className="w-4 h-4 text-[#8A4751]" />
                <span>아틀리에 위치</span>
              </div>
              <p className="font-light text-[#777168] pl-5">
                서울시 성수동 연무장길 42, 피어나다 아틀리에 2F
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#1D1B17]">
                <Calendar className="w-4 h-4 text-[#8A4751]" />
                <span>수업 일정</span>
              </div>
              <p className="font-light text-[#777168] pl-5">
                화·목·토 (오전 11시 / 오후 3시 / 저녁 7시)
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#1D1B17]">
                <Sparkles className="w-4 h-4 text-[#8A4751]" />
                <span>제공 사항</span>
              </div>
              <p className="font-light text-[#777168] pl-5">
                웰컴 티, 앞치마 & 가위 대여, 패키징 일체
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#FFF8F0] border-t border-[#DED9D2]/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#777168] font-light">
            원하시는 날짜와 시간대에 맞춘 프라이빗 1:1 맞춤 클래스도 가능합니다.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(`[${currentCourse.koreanTitle}] 클래스 수강 일정 및 예약 문의드립니다.`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8A4751] hover:bg-[#723842] text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer rounded-xs"
            >
              <span>클래스 예약 문의하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:02-543-9821"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-[#DED9D2] hover:border-[#8A4751] text-[#1D1B17] hover:text-[#8A4751] text-xs sm:text-sm font-medium transition-colors rounded-xs bg-[#FFFDFC]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">02-543-9821</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
