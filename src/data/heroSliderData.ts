import { heroImage, peachMoodBouquetImage, springRanunculusBouquetImage, seasonalFlowerBasketImage } from './floristData';

export interface HeroSlideItem {
  id: string;
  collection: string;
  name: string;
  image: string;
  alt: string;
  productId?: string;
}

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: 'slide-1',
    collection: 'SIGNATURE COLLECTION',
    name: 'Soft Blossom',
    image: heroImage,
    alt: 'Soft Blossom - SIGNATURE COLLECTION',
    productId: 'soft-pink-bouquet',
  },
  {
    id: 'slide-2',
    collection: 'GARDEN COLLECTION',
    name: 'White Garden',
    image: springRanunculusBouquetImage,
    alt: 'White Garden - GARDEN COLLECTION',
    productId: 'white-garden-bouquet',
  },
  {
    id: 'slide-3',
    collection: 'SEASONAL COLLECTION',
    name: 'Peach Mood Bouquet',
    image: peachMoodBouquetImage,
    alt: 'Peach Mood Bouquet - SEASONAL COLLECTION',
    productId: 'peach-mood-bouquet',
  },
  {
    id: 'slide-4',
    collection: 'SEASONAL COLLECTION',
    name: 'Garden Basket',
    image: seasonalFlowerBasketImage,
    alt: 'Garden Basket - SEASONAL COLLECTION',
    productId: 'seasonal-garden-basket',
  },
];
