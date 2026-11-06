import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { FeatureDetailModal } from '../components/FeatureDetailModal';
import { Institutions } from '../components/Institutions';
import { SimplePricing } from '../components/SimplePricing';
import { Testimonials } from '../components/Testimonials';
import { AppDownload } from '../components/AppDownload';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const [modal, setModal] = useState<string | null>(null);
  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to book a free demo for my institute.');
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Navbar onOpenDemo={openDemo} />
      <main>
        <Hero />
        <Features onMore={setModal} />
        <Institutions />
        <SimplePricing onOpenDemo={openDemo} />
        <Testimonials />
        <FAQ />
        <AppDownload />
      </main>
      <Footer />
      <FeatureDetailModal featureId={modal} onClose={() => setModal(null)} />
    </div>
  );
};
