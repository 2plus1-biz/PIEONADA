import React, { useState } from 'react';
import { MapPin, Clock, MessageSquare, ExternalLink, Check, Map as MapIcon, Image as ImageIcon, Navigation } from 'lucide-react';
import { Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { atelierStorefrontImage } from '../data/floristData';
import { FadeIn } from './FadeIn';

interface VisitAtelierSectionProps {
  onOpenInquiry: () => void;
}

const ATELIER_LOCATION = {
  lat: 37.5438,
  lng: 127.0548,
};

const ATELIER_ADDRESS = '서울특별시 성동구 연무장길 45 피어나다 아틀리에';

export const VisitAtelierSection: React.FC<VisitAtelierSectionProps> = ({ onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'photo'>('map');
  const [isInfoOpen, setIsInfoOpen] = useState(true);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(ATELIER_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${ATELIER_LOCATION.lat},${ATELIER_LOCATION.lng}`;

  return (
    <section id="atelier-visit" className="py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#DED9D2]/60 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Interactive Google Map / Storefront View */}
          <div className="lg:col-span-6">
            <FadeIn direction="right" duration={0.85}>
              <div className="overflow-hidden rounded-xs bg-[#FFFDFC] p-3 shadow-md border border-[#DED9D2]">
                {/* View Switcher Tabs */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-[#DED9D2]/60 mb-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setViewMode('map')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                        viewMode === 'map'
                          ? 'bg-[#8A4751] text-[#FFFDFC] shadow-xs'
                          : 'bg-[#F5EFE6] text-[#524344] hover:bg-[#EBE2D5]'
                      }`}
                    >
                      <MapIcon className="w-3.5 h-3.5" />
                      <span>Google 지도</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('photo')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                        viewMode === 'photo'
                          ? 'bg-[#8A4751] text-[#FFFDFC] shadow-xs'
                          : 'bg-[#F5EFE6] text-[#524344] hover:bg-[#EBE2D5]'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>쇼룸 외관 사진</span>
                    </button>
                  </div>

                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-[#8A4751] hover:underline"
                  >
                    <span>Google 지도로 길찾기</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Map or Photo Display */}
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-xs overflow-hidden bg-[#F3EDE5]">
                  {viewMode === 'map' ? (
                    <div className="w-full h-full relative">
                      <Map
                        defaultCenter={ATELIER_LOCATION}
                        defaultZoom={16}
                        mapId="DEMO_MAP_ID"
                        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                        gestureHandling="cooperative"
                        style={{ width: '100%', height: '100%' }}
                      >
                        <AdvancedMarker
                          position={ATELIER_LOCATION}
                          onClick={() => setIsInfoOpen((prev) => !prev)}
                          title="피어나다 아틀리에 성수점"
                        >
                          <Pin
                            background="#8A4751"
                            glyphColor="#FFFDFC"
                            borderColor="#71333D"
                            scale={1.15}
                          />
                        </AdvancedMarker>

                        {isInfoOpen && (
                          <InfoWindow
                            position={ATELIER_LOCATION}
                            onCloseClick={() => setIsInfoOpen(false)}
                            pixelOffset={[0, -42]}
                          >
                            <div className="p-1 max-w-[220px] text-left">
                              <span className="text-[10px] tracking-wider text-[#8A4751] font-semibold uppercase block">
                                PIEONADA ATELIER
                              </span>
                              <h4 className="font-serif-kr text-sm font-semibold text-[#1D1B17] mt-0.5">
                                피어나다 성수 아틀리에
                              </h4>
                              <p className="text-xs text-[#524344] mt-1 font-light leading-relaxed">
                                서울 성동구 연무장길 45
                              </p>
                              <p className="text-[11px] text-[#716565] mt-0.5">
                                성수역 3번 출구 도보 5분 (380m)
                              </p>
                              <a
                                href={googleMapsDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold text-[#8A4751] hover:underline"
                              >
                                <Navigation className="w-3 h-3" />
                                <span>길찾기 안내 열기</span>
                              </a>
                            </div>
                          </InfoWindow>
                        )}
                      </Map>

                      {/* Floating bottom badge */}
                      <div className="absolute bottom-3 left-3 right-3 bg-[#FFFDFC]/95 backdrop-blur-xs p-2.5 rounded-xs border border-[#DED9D2] shadow-sm flex items-center justify-between text-xs pointer-events-auto">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                          <span className="font-medium text-[#1D1B17]">피어나다 성수 아틀리에</span>
                          <span className="text-[#716565] hidden sm:inline">· 성수역 3번 출구 도보 5분</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="inline-flex items-center gap-1 text-[11px] text-[#8A4751] font-semibold hover:underline cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700">복사 완료</span>
                            </>
                          ) : (
                            <span>주소 복사</span>
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={atelierStorefrontImage}
                        alt="PIEONADA Seongsu Atelier Storefront"
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-3 left-3 bg-[#FFFDFC]/90 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-[#DED9D2] text-xs text-[#524344]">
                        피어나다 성수 쇼룸 외관
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Information Details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <FadeIn direction="left" duration={0.85} delay={0.1}>
              <div className="space-y-6 sm:space-y-7">
                <div className="space-y-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A4751] block">
                    STORE & CONTACT
                  </span>
                  <h2 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1D1B17] tracking-tight break-keep">
                    PIEONADA ATELIER
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#524344] font-light leading-relaxed break-keep">
                  꽃을 고르고, 이야기를 나누고, PIEONADA의 계절 꽃을 직접 만날 수 있는 공간입니다. 성수역 3번 출구에서 성수 카페거리를 따라 도보 5분 거리에 위치하고 있습니다.
                </p>

                {/* Atelier Info List */}
                <div className="space-y-4 sm:space-y-5 pt-6 sm:pt-7 border-t border-[#DED9D2]/70">
                  {/* OPEN */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        OPEN
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5 leading-relaxed">
                        Mon – Sat 11:00 – 19:00 · Sunday Closed (예약 픽업 가능)
                      </p>
                    </div>
                  </div>

                  {/* PICK UP & LOCATION */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        LOCATION & PICK UP
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        서울시 성동구 연무장길 45 (성수역 3번 출구 도보 5분)
                      </p>
                    </div>
                  </div>

                  {/* ORDER */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-full bg-[#E8D5D5]/50 text-[#8A4751] shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1D1B17] uppercase tracking-wider">
                        ORDER & INQUIRY
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524344] font-light mt-0.5">
                        온라인 사전 예약 · 당일 픽업 문의 · 카카오톡 플러스친구
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={onOpenInquiry}
                    className="bg-[#8A4751] hover:bg-[#71333D] text-[#FFFDFC] text-xs sm:text-sm font-semibold tracking-wider px-6 py-3.5 rounded-xs transition-colors shadow-xs cursor-pointer"
                  >
                    주문 문의하기
                  </button>

                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8A4751]/10 hover:bg-[#8A4751]/20 text-[#8A4751] border border-[#8A4751]/30 text-xs sm:text-sm font-semibold tracking-wider px-5 py-3.5 rounded-xs transition-colors cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Google 지도로 길찾기</span>
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 bg-[#FFFDFC] hover:bg-[#FFF8F0] text-[#1D1B17] border border-[#DED9D2] hover:border-[#8A4751] text-xs sm:text-sm font-semibold tracking-wider px-5 py-3.5 rounded-xs transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <ExternalLink className="w-4 h-4" />}
                    <span>{copied ? '주소 복사 완료!' : '주소 복사'}</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

