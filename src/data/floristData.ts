export interface Product {
  id: string;
  tag: string;
  category: string;
  title: string;
  koreanName: string;
  price: number;
  formattedPrice: string;
  description: string;
  mood?: string;
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
import springRanunculusBouquetImage from '@/src/assets/images/spring_ranunculus_bouquet_1790576391701.jpg';
import seasonalFlowerBasketImage from '@/src/assets/images/seasonal_flower_basket_1790576484515.jpg';
import momentBirthdayImage from '@/src/assets/images/moment_birthday_floral_1790576687875.jpg';
import momentRomanceImage from '@/src/assets/images/moment_romance_floral_1790576701902.jpg';
import momentGratitudeImage from '@/src/assets/images/moment_gratitude_floral_1790576737397.jpg';
import momentBeginningImage from '@/src/assets/images/moment_beginning_floral_1790576753564.jpg';
import momentEverydayImage from '@/src/assets/images/moment_everyday_floral_1790576767280.jpg';
import cloudPetalCenterpieceImage from '@/src/assets/images/cloud_petal_centerpiece_1790576875341.jpg';
import sereneMistGardenImage from '@/src/assets/images/serene_mist_garden_1790576888214.jpg';
import instaMorningStemsImage from '@/src/assets/images/insta_morning_stems_1790576988153.jpg';
import instaFloristHoldingImage from '@/src/assets/images/insta_florist_holding_1790577002056.jpg';
import instaSunlitAtelierImage from '@/src/assets/images/insta_sunlit_atelier_1790577013974.jpg';
import instaFlowerBasketImage from '@/src/assets/images/insta_flower_basket_1790577026375.jpg';
import instaWrappingDetailImage from '@/src/assets/images/insta_wrapping_detail_1790577041158.jpg';
import flowerClassPosterImage from '@/src/assets/images/flower_class_poster_1790577624183.jpg';

export {
  heroImage,
  atelierStoryImage,
  seasonalRanunculusImage,
  atelierStorefrontImage,
  peachMoodBouquetImage,
  springRanunculusBouquetImage,
  seasonalFlowerBasketImage,
  momentBirthdayImage,
  momentRomanceImage,
  momentGratitudeImage,
  momentBeginningImage,
  momentEverydayImage,
  cloudPetalCenterpieceImage,
  sereneMistGardenImage,
  instaMorningStemsImage,
  instaFloristHoldingImage,
  instaSunlitAtelierImage,
  instaFlowerBasketImage,
  instaWrappingDetailImage,
  flowerClassPosterImage,
};

export const MOMENTS: MomentItem[] = [
  {
    id: 'birthday',
    number: '01 / MOMENT',
    enTitle: 'BIRTHDAY',
    koTitle: '생일을 축하하는 꽃',
    description: '소중한 하루를 위한 꽃 선물',
    image: momentBirthdayImage,
    tag: 'Birthday'
  },
  {
    id: 'love',
    number: '02 / MOMENT',
    enTitle: 'LOVE & ROMANCE',
    koTitle: '사랑을 전하는 꽃',
    description: '사랑하는 마음을 담아 전하는 로맨틱한 꽃',
    image: momentRomanceImage,
    tag: 'Love & Romance'
  },
  {
    id: 'gratitude',
    number: '03 / MOMENT',
    enTitle: 'GRATITUDE',
    koTitle: '고마움을 전하는 꽃',
    description: '소중한 분께 감사의 마음을 전하는 꽃',
    image: momentGratitudeImage,
    tag: 'Gratitude'
  },
  {
    id: 'new_beginning',
    number: '04 / MOMENT',
    enTitle: 'NEW BEGINNING',
    koTitle: '새로운 시작을 위한 꽃',
    description: '새로운 출발을 응원하고 축하하는 꽃',
    image: momentBeginningImage,
    tag: 'New Beginning'
  },
  {
    id: 'just_because',
    number: '05 / MOMENT',
    enTitle: 'JUST BECAUSE',
    koTitle: '일상에 건네는 꽃',
    description: '특별한 이유 없이도 마음을 전하고 싶은 날',
    image: momentEverydayImage,
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
    mood: 'ROMANTIC · SOFT · PINK',
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
    mood: 'NATURAL · FRESH · WHITE',
    badge: '무료 카드 메시지',
    image: springRanunculusBouquetImage,
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
    description: '피치빛 계절꽃을 담은 따뜻한 꽃다발',
    mood: 'WARM · PEACH · SEASONAL',
    badge: '무료 카드 메시지',
    image: peachMoodBouquetImage,
    flowers: ['카푸치노 장미', '피치 카네이션', '헬레보루스', '스피리아', '페니쿰'],
    careNotes: '시든 잎과 겉 꽃잎은 조심스럽게 떼어내시면 안쪽의 신선한 꽃잎이 계속 피어납니다.',
    size: 'Medium',
    inStock: true
  },
  {
    id: 'seasonal-garden-basket',
    tag: 'FLORIST PICK',
    category: 'GARDEN BASKET',
    title: 'Seasonal Garden Basket',
    koreanName: '계절의 꽃을 풍성하게 담은 꽃바구니',
    price: 85000,
    formattedPrice: '85,000원',
    description: '계절의 꽃을 풍성하게 담은 꽃바구니',
    mood: 'SEASONAL · ABUNDANT · GIFT',
    badge: '무료 카드 메시지',
    image: seasonalFlowerBasketImage,
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
    description: '마음을 열어주는 싱그러운 계절의 찬가.\n투명한 빛을 머금은 얇은 꽃잎들이 겹겹이 피어나는 우아한 라넌큘러스 심포니.',
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
    image: cloudPetalCenterpieceImage,
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
    image: sereneMistGardenImage,
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
    image: instaMorningStemsImage,
    likes: 428,
    caption: '오늘 아침 꽃시장에서 사입해온 싱그러운 봄 라넌큘러스 & 튤립 줄기들 #피어나다'
  },
  {
    id: 'insta-2',
    image: instaFloristHoldingImage,
    likes: 542,
    caption: '프로포즈를 위해 정성껏 안겨드린 소프트 핑크 가든로즈 오버사이즈 부케'
  },
  {
    id: 'insta-3',
    image: instaSunlitAtelierImage,
    likes: 519,
    caption: '성수동 연무장길 아틀리에의 나른한 오후 햇살과 스위트피 화병 꽂이'
  },
  {
    id: 'insta-4',
    image: instaFlowerBasketImage,
    likes: 388,
    caption: '축하와 감사의 마음을 듬뿍 담은 시즈널 프렌치 내추럴 플라워 바스켓'
  },
  {
    id: 'insta-5',
    image: instaWrappingDetailImage,
    likes: 462,
    caption: '정성스레 포장하는 핸드타이드 부케와 피어나다 시그니처 코튼 리본'
  }
];
