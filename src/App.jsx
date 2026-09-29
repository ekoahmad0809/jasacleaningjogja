import { useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BeforeAfter from './components/BeforeAfter';
import ServiceDetail from './components/ServiceDetail';
import AdditionalServices from './components/AdditionalServices';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyBottomCTA from './components/StickyBottomCTA';

export default function App() {
  // Simple scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed/Floating elements */}
      <Header />
      <MobileMenu />
      <FloatingWhatsApp />
      <StickyBottomCTA />

      {/* Page sections */}
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <ServiceDetail />
        <AdditionalServices />
        <HowItWorks />
        <WhyUs />
        <Gallery />
        <ServiceArea />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
