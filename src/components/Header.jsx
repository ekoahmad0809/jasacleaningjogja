import { useState, useEffect } from 'react';
import Logo from './Logo';
import { buildWAUrl, WA_MESSAGES } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Before After', href: '#before-after' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" onClick={(e) => handleNav(e, '#beranda')} aria-label="Jasa Cleaning Jogja - Beranda">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors duration-200 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={buildWAUrl(WA_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-brand-blue hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
          aria-label="Chat WhatsApp Jasa Cleaning Jogja"
        >
          <span>💬</span>
          <span>Chat WhatsApp</span>
        </a>

        {/* Mobile: Phone number compact */}
        <a
          href={buildWAUrl(WA_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden flex items-center gap-1.5 bg-brand-blue text-white text-xs font-semibold px-3 py-2 rounded-full"
          aria-label="Chat WhatsApp"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
