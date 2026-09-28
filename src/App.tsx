import React, { useState } from 'react';
import { Header } from './components/Header';
import { SideNavDrawer } from './components/SideNavDrawer';
import { Hero } from './components/Hero';
import { MomentsSection } from './components/MomentsSection';
import { BestFlowersSection } from './components/BestFlowersSection';
import { OurStorySection } from './components/OurStorySection';
import { ThisSeasonSection } from './components/ThisSeasonSection';
import { PriceGuideSection } from './components/PriceGuideSection';
import { CustomOrderSection, CustomOrderFormState } from './components/CustomOrderSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramGridSection } from './components/InstagramGridSection';
import { VisitAtelierSection } from './components/VisitAtelierSection';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CustomOrderModal } from './components/CustomOrderModal';
import { SearchModal } from './components/SearchModal';
import { FlowerCareModal } from './components/FlowerCareModal';
import { CheckoutModal } from './components/CheckoutModal';
import { BEST_FLOWERS, Product, MomentItem } from './data/floristData';

export default function App() {
  // Navigation & Drawer states
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false);
  const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Selected product for quick view
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: BEST_FLOWERS[0],
      quantity: 1,
      messageCard: '생일 진심으로 축하해!',
    },
  ]);

  // Custom Order state
  const [customOrderState, setOrderState] = useState<CustomOrderFormState>({
    purpose: '생일',
    budget: '50,000 - 70,000원',
    mood: '사랑스럽게',
    color: 'Pink',
    deliveryMethod: 'pickup',
    message: '',
  });

  // Navigation scroll helper
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1, message = '') => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, messageCard: message }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleStartCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Moment selection interaction
  const handleSelectMoment = (moment: MomentItem) => {
    const purposeMap: Record<string, string> = {
      birthday: '생일',
      love: '사랑',
      gratitude: '감사',
      new_beginning: '축하',
      just_because: '기타',
    };
    const moodMap: Record<string, string> = {
      birthday: '사랑스럽게',
      love: '고급스럽게',
      gratitude: '차분하게',
      new_beginning: '화사하게',
      just_because: '차분하게',
    };

    setOrderState((prev) => ({
      ...prev,
      purpose: purposeMap[moment.id] || '생일',
      mood: moodMap[moment.id] || '사랑스럽게',
    }));

    handleNavigateSection('custom-order');
  };

  // Size selection from Price Guide
  const handleSelectPriceSize = (sizeName: string, budgetRange: string) => {
    setOrderState((prev) => ({
      ...prev,
      budget: budgetRange,
    }));
    handleNavigateSection('custom-order');
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1D1B17] flex flex-col font-sans selection:bg-[#E8D5D5] selection:text-[#8A4751]">
      {/* Top Header */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSideNav={() => setIsSideNavOpen(true)}
        onOpenInquiry={() => setIsCustomOrderModalOpen(true)}
        onOpenAccount={() => alert('피어나다 회원 서비스 및 주문 조회가 준비 중입니다.')}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onGiftClick={() => handleNavigateSection('best-flowers')}
          onExploreSeasonClick={() => handleNavigateSection('this-season')}
          onQuickViewSignature={() => setSelectedProduct(BEST_FLOWERS[0])}
        />

        {/* Section 1: For Your Moment */}
        <MomentsSection onSelectMoment={handleSelectMoment} />

        {/* Section 2: Best Flowers */}
        <BestFlowersSection
          onQuickView={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => {
            handleAddToCart(p, 1);
            setIsCartOpen(true);
          }}
        />

        {/* Section 3: Our Story */}
        <OurStorySection onLearnMore={() => setIsCareGuideOpen(true)} />

        {/* Section 4: This Season */}
        <ThisSeasonSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onViewAllSeasonal={() => handleNavigateSection('best-flowers')}
        />

        {/* Section 5: Price Guide */}
        <PriceGuideSection onSelectSize={handleSelectPriceSize} />

        {/* Section 6: Atelier Custom Order */}
        <CustomOrderSection
          orderState={customOrderState}
          setOrderState={setOrderState}
          onSubmitInquiry={() => setIsCustomOrderModalOpen(true)}
        />

        {/* Section 7: Flowers & Moments Reviews */}
        <ReviewsSection />

        {/* Section 8: Instagram Moments Grid */}
        <InstagramGridSection />

        {/* Section 9: Visit Our Atelier */}
        <VisitAtelierSection onOpenInquiry={() => setIsCustomOrderModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigateSection}
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
      />

      {/* Slide Navigation Drawer (from screenshot) */}
      <SideNavDrawer
        isOpen={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
        onNavigate={handleNavigateSection}
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleStartCheckout}
      />

      {/* Product Quick View / Detail Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, qty, msg) => {
          handleAddToCart(product, qty, msg);
          setIsCartOpen(true);
        }}
      />

      {/* Custom Order Inquiry Modal */}
      <CustomOrderModal
        isOpen={isCustomOrderModalOpen}
        onClose={() => setIsCustomOrderModalOpen(false)}
        orderState={customOrderState}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Flower Care Guide Modal */}
      <FlowerCareModal
        isOpen={isCareGuideOpen}
        onClose={() => setIsCareGuideOpen(false)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}
