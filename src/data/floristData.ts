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
import atelierStoryImage from '@/src/assets/images/korean_florist_bouquet_1790564301800.jpg';
import seasonalRanunculusImage from '@/src/assets/images/seasonal_ranunculus_1790560361140.jpg';
import atelierStorefrontImage from '@/src/assets/images/atelier_storefront_1790560373923.jpg';
import peachMoodBouquetImage from '@/src/assets/images/peach_mood_bouquet_1790565783427.jpg';

export { heroImage, atelierStoryImage, seasonalRanunculusImage, atelierStorefrontImage, peachMoodBouquetImage };

export const MOMENTS: MomentItem[] = [
  {
    id: 'birthday',
    number: '01 / MOMENT',
    enTitle: 'Birthday',
    koTitle: '생일을 축하하는 꽃',
    description: '생일을 축하하는 꽃',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
    tag: 'Birthday'
  },
  {
    id: 'love',
    number: '02 / MOMENT',
    enTitle: 'Love',
    koTitle: '사랑을 전하는 꽃',
    description: '사랑을 전하는 꽃',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
    tag: 'Love'
  },
  {
    id: 'thanks',
    number: '03 / MOMENT',
    enTitle: 'Thanks',
    koTitle: '고마움을 전하는 꽃',
    description: '고마움을 전하는 꽃',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
    tag: 'Thanks'
  },
  {
    id: 'celebrate',
    number: '04 / MOMENT',
    enTitle: 'Celebrate',
    koTitle: '축하를 전하는 꽃',
    description: '축하를 전하는 꽃',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
    tag: 'Celebrate'
  },
  {
    id: 'just_because',
    number: '05 / MOMENT',
    enTitle: 'Just Because',
    koTitle: '그냥, 꽃을 선물하고 싶은 날',
    description: '그냥, 꽃을 선물하고 싶은 날',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=700&q=80',
    tag: 'Just Because'
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
    formattedPrice: '65,000원',
    description: '부드러운 핑크빛 로맨틱 꽃다발',
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
    formattedPrice: '75,000원',
    description: '화이트와 그린의 싱그러운 꽃다발',
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
    formattedPrice: '58,000원',
    description: '따뜻한 피치 컬러의 시즌 꽃다발',
    badge: '무료 카드 메시지',
    image: peachMoodBouquetImage,
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
    koreanName: '계절의 꽃을 풍성하게 담은 꽃바구니',
    price: 85000,
    formattedPrice: '85,000원',
    description: '계절의 꽃을 풍성하게 담은 꽃바구니',
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
    category: 'Birthday Bouquet',
    stars: 5,
    content: '엄마 생신 선물로 주문했는데 원했던 따뜻한 느낌을 정말 잘 표현해주셨어요.',
    author: '이*진 님',
    productName: 'Soft Pink Bouquet'
  },
  {
    id: 'rev-2',
    category: 'Congratulations Flower',
    stars: 5,
    content: '친구의 새로운 시작을 축하하려고 주문했어요. 꽃을 받자마자 너무 좋아했다는 연락이 왔어요.',
    author: '박*영 님',
    productName: 'White Garden Bouquet'
  },
  {
    id: 'rev-3',
    category: 'Anniversary Bouquet',
    stars: 5,
    content: '기념일마다 주문하는데 계절에 따라 조금씩 다른 꽃을 만날 수 있어서 좋아요.',
    author: '황*우 님',
    productName: 'Peach Mood Bouquet'
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
