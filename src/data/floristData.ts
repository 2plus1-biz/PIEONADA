export interface Product {
  id: string;
  tag: string;
  category: string;
  title: string;
  koreanName: string;
  price: number;
  formattedPrice: string;
  description: string;
  badge?: string;
  image: string;
  flowers: string[];
  careNotes: string;
  size: 'Small' | 'Medium' | 'Large' | 'Basket';
  inStock: boolean;
}

export interface MomentItem {
  id: string;
  number: string;
  enTitle: string;
  koTitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  category: string;
  stars: number;
  content: string;
  author: string;
  productName: string;
}

// Generated assets
import heroImage from '@/src/assets/images/hero_floral_bouquet_1790560333965.jpg';
import atelierStoryImage from '@/src/assets/images/florist_atelier_story_1790560349527.jpg';
import seasonalRanunculusImage from '@/src/assets/images/seasonal_ranunculus_1790560361140.jpg';
import atelierStorefrontImage from '@/src/assets/images/atelier_storefront_1790560373923.jpg';

export { heroImage, atelierStoryImage, seasonalRanunculusImage, atelierStorefrontImage };

export const MOMENTS: MomentItem[] = [
  {
    id: 'birthday',
    number: '01 / MOMENT',
    enTitle: 'BIRTHDAY',
    koTitle: '생일을 축하하는 꽃',
    description: '한 해의 새로운 시작을 축하하는 부드러운 설렘',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
    tag: '생일 축하'
  },
  {
    id: 'love',
    number: '02 / MOMENT',
    enTitle: 'LOVE & ROMANCE',
    koTitle: '사랑을 전하는 꽃',
    description: '은은하고 짙은 무드의 사랑 고백과 기념일',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
    tag: '사랑 & 고백'
  },
  {
    id: 'gratitude',
    number: '03 / MOMENT',
    enTitle: 'GRATITUDE',
    koTitle: '고마움을 전하는 꽃',
    description: '소중한 분에게 전하는 감사의 인사와 경의',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
    tag: '감사의 마음'
  },
  {
    id: 'new_beginning',
    number: '04 / MOMENT',
    enTitle: 'NEW BEGINNING',
    koTitle: '새로운 시작의 축하',
    description: '도약하는 순간을 향한 싱그러운 찬사와 응원',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
    tag: '개업 & 졸업'
  },
  {
    id: 'just_because',
    number: '05 / MOMENT',
    enTitle: 'JUST BECAUSE',
    koTitle: '이유 없는 날의 선물',
    description: '일상에 생기와 위로를 전하는 소소한 낭만',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=700&q=80',
    tag: '일상의 위로'
  },
];

export const BEST_FLOWERS: Product[] = [
  {
    id: 'soft-pink-bouquet',
    tag: 'BEST 01',
    category: 'HAND-TIED BOUQUET',
    title: 'Soft Pink Bouquet',
    koreanName: '소프트 핑크 핸드타이드 부케',
    price: 65000,
    formattedPrice: '₩65,000',
    description: '부드러운 핑크톤의 미니델피늄과 버터플라이라넌이 어우러진 로맨틱 꽃다발',
    badge: '무료 카드 메시지',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    flowers: ['버터플라이 라넌큘러스', '미니 델피늄', '스위트피', '블러셔 로즈', '유칼립투스'],
    careNotes: '줄기 끝을 사선으로 1cm 잘라 차가운 물에 꽂아주시고, 직사광선을 피해 서늘한 곳에 보관해 주세요.',
    size: 'Medium',
    inStock: true
  },
  {
    id: 'white-garden-bouquet',
    tag: 'BEST 02',
    category: 'NATURAL GARDEN',
    title: 'White Garden Bouquet',
    koreanName: '화이트 가든 부케',
    price: 75000,
    formattedPrice: '₩75,000',
    description: '화이트와 그리너리를 중심으로 차분하고 순수한 숲의 정원을 담아낸 부케',
    badge: '무료 카드 메시지',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    flowers: ['화이트 리시안셔스', '마가렛', '니겔라', '유칼립투스 니콜', '아스틸베'],
    careNotes: '2일에 한 번 물을 갈아주시고 화병 안쪽을 깨끗이 세척하면 최대 10일까지 유지됩니다.',
    size: 'Medium',
    inStock: true
  },
  {
    id: 'peach-mood-bouquet',
    tag: 'SEASON PICK',
    category: 'WARM PALETTE',
    title: 'Peach Mood Bouquet',
    koreanName: '피치 무드 부케',
    price: 58000,
    formattedPrice: '₩58,000',
    description: '따뜻한 살구빛과 라테 장미가 어우러져 편안한 온기를 전하는 시즌 꽃다발',
    badge: '무료 카드 메시지',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    flowers: ['카푸치노 장미', '피치 카네이션', '헬레보루스', '스피리아', '페니쿰'],
    careNotes: '시든 잎과 겉 꽃잎은 조심스럽게 떼어내시면 안쪽의 신선한 꽃잎이 계속 피어납니다.',
    size: 'Medium',
    inStock: true
  },
  {
    id: 'seasonal-garden-basket',
    tag: 'BASKET',
    category: 'LUXURY GIFT',
    title: 'Seasonal Garden Basket',
    koreanName: '시즈널 가든 바스켓',
    price: 85000,
    formattedPrice: '₩85,000',
    description: '계절의 꽃을 내추럴 바스켓에 풍성하게 담아 테이블을 화사하게 물들여 줄 구성',
    badge: '무료 카드 메시지',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    flowers: ['튤립', '작약(시즌)', '마트리카리아', '수입 옥시', '설유화 줄기'],
    careNotes: '오아시스(플로럴폼)가 마르지 않도록 바스켓 안쪽 꽃 사이로 매일 종이컵 1/2 분량의 물을 보충해 주세요.',
    size: 'Basket',
    inStock: true
  }
];

export const SEASONAL_ITEMS: Product[] = [
  {
    id: 'spring-ranunculus-symphony',
    tag: 'LIMITED EDITION',
    category: 'SPRING SPECIAL',
    title: 'Spring Ranunculus Symphony',
    koreanName: '스프링 라넌큘러스 심포니',
    price: 88000,
    formattedPrice: '₩88,000',
    description: '마음을 열어주는 싱그러운 계절의 찬가. 투명한 빛을 머금은 얇은 꽃잎들이 겹겹이 피어나는 우아한 라넌큘러스 심포니.',
    badge: '시즌 한정',
    image: seasonalRanunculusImage,
    flowers: ['하노이 라넌큘러스', '버터플라이 라넌큘러스', '수입 델피늄', '스위트피', '냉이초'],
    careNotes: '라넌큘러스는 줄기 속이 비어있으므로 물을 3~5cm 정도 얕게 받아 자주 갈아주는 것이 좋습니다.',
    size: 'Large',
    inStock: true
  },
  {
    id: 'cloud-petal-centerpiece',
    tag: 'DELICATE TINT',
    category: 'TABLE VASE',
    title: 'Cloud Petal Centerpiece',
    koreanName: '클라우드 페탈 센터피스',
    price: 52000,
    formattedPrice: '₩52,000',
    description: '달콤한 파스텔톤의 몽환적인 꽃잎을 작은 도자기 화병에 안정감 있게 꽂아 테이블에 온기를 선사합니다.',
    badge: '화병 포함',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
    flowers: ['파스텔 튤립', '스위트피', '화이트 수국', '디디스커스'],
    careNotes: '화병 일체형 제품으로 배송 즉시 원하시는 테이블 위에 올려두시면 됩니다.',
    size: 'Small',
    inStock: true
  },
  {
    id: 'serene-mist-garden',
    tag: 'EUCALYPTUS & TULIPS',
    category: 'NATURAL VASE',
    title: 'Serene Mist Garden',
    koreanName: '세린 미스트 가든',
    price: 62000,
    formattedPrice: '₩62,000',
    description: '새벽 안개 낀 정원의 싱그러운 은빛 유칼립투스와 은은한 튤립의 조화로운 라인감.',
    badge: '화병 포함',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
    flowers: ['화이트 튤립', '블루베리 유칼립투스', '아미초', '그린 석죽'],
    careNotes: '튤립은 빛과 온도에 반응하여 움직입니다. 시원한 실내에 둘수록 오래 감상하실 수 있습니다.',
    size: 'Medium',
    inStock: true
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    category: 'BIRTHDAY BOUQUET',
    stars: 5,
    content: '“엄마 환갑 생신 선물로 주문했는데 제가 원했던 차분하면서도 따뜻한 느낌을 정말 우아하게 표현해주셨어요. 사진보다 실물이 훨씬 화사하고 꽃의 싱싱함이 오래가서 감동이었습니다.”',
    author: '이*진 님',
    productName: 'Soft Pink Bouquet'
  },
  {
    id: 'rev-2',
    category: 'CONGRATULATIONS',
    stars: 5,
    content: '“친구의 개인전 개막을 축하하고 싶어 맞춤 주문했어요. 작가의 작품 톤과 어울리게 세심하게 줄기곡선을 살려주셔서 전시 공간 전체가 살아나는 느낌이었습니다. 친구도 극찬했네요.”',
    author: '박*영 님',
    productName: 'Large Custom Basket'
  },
  {
    id: 'rev-3',
    category: 'ANNIVERSARY BOUQUET',
    stars: 5,
    content: '“기념일마다 꽃을 주문하는데 매번 계절에 맞는 새로운 조화와 향기를 만들어 주셔서 늘 설렙니다. 포장 지질이나 리본 촉감 하나까지 아틀리에 감성이 묻어나서 언제나 믿고 찾는 곳입니다.”',
    author: '황*우 님',
    productName: 'Peach Mood Bouquet'
  },
  {
    id: 'rev-4',
    category: 'PROPOSE & ROMANCE',
    stars: 5,
    content: '“프로포즈 날을 위해 사전 예약했는데, 차분하면서도 낭만적인 은은한 향과 컬러감이 완벽했어요. 아틀리에 플로리스트님께서 정성껏 써주신 손글씨 편지 카드까지 큰 감동이었습니다.”',
    author: '김*현 님',
    productName: 'Spring Ranunculus Symphony'
  },
  {
    id: 'rev-5',
    category: 'HOUSEWARMING GIFT',
    stars: 5,
    content: '“집들이 선물로 테이블 화병 센터피스를 골랐는데, 식탁 위에 올려두니 집안 공기 자체가 포근해졌어요. 화병 일체형이라 물 관리도 수월하고 꽃이 열흘 넘게 싱싱했습니다.”',
    author: '정*은 님',
    productName: 'Cloud Petal Centerpiece'
  },
  {
    id: 'rev-6',
    category: 'GRATITUDE & TEACHER',
    stars: 5,
    content: '“은사님께 감사한 마음을 담아 전해드렸는데 단아하고 고급스러운 화이트 & 그린 톤이 품격 있었습니다. 포장 하나하나 신경 써주신 게 느껴져서 선물을 건네는 순간까지 마음이 뿌듯했습니다.”',
    author: '최*민 님',
    productName: 'White Garden Bouquet'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    likes: 428,
    caption: '오늘 아침 사입해온 싱그러운 봄 라넌큘러스 #피어나다'
  },
  {
    id: 'insta-2',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80',
    likes: 312,
    caption: '프로포즈를 위해 준비된 소프트 핑크 오버사이즈 부케'
  },
  {
    id: 'insta-3',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80',
    likes: 519,
    caption: '연무장길 아틀리에의 오후 햇살과 화이트 가든 컬렉션'
  },
  {
    id: 'insta-4',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80',
    likes: 388,
    caption: '축하의 마음을 듬뿍 담은 시즈널 내추럴 바스켓'
  },
  {
    id: 'insta-5',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&q=80',
    likes: 462,
    caption: '정성스레 포장된 핸드타이드와 시그니처 코튼 리본'
  }
];
