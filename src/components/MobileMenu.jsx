import { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import { buildWAUrl, DRAWER_MESSAGES } from '../utils/whatsapp';

const MAIN_NAV = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Before After', href: '#before-after' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

const LAYANAN_UTAMA = [
  { label: '🧹 Kamar Kost', key: 'kost' },
  { label: '🏠 Rumah / Kontrakan', key: 'rumah' },
  { label: '🚿 Toilet / Kamar Mandi', key: 'toilet' },
  { label: '🏢 Apartement', key: 'apartement' },
  { label: '🏪 Ruko / Kantor / Toko', key: 'ruko' },
  { label: '🧽 Ruangan Custom', key: 'custom' },
];

const LAYANAN_TAMBAHAN = [
  { label: '✨ Polish Keramik', key: 'polishKeramik' },
  { label: '✨ Polish Porcelain', key: 'polishPorcelain' },
  { label: '✨ Polish Marmer', key: 'polishMarmer' },
  { label: '🧼 Jasa Cuci Karpet', key: 'cuciKarpet' },
  { label: '🛋️ Jasa Cuci Sofa', key: 'cuciSofa' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setOpen(true);
    document.body.classList.add('drawer-open');
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
    document.body.classList.remove('drawer-open');
  }, []);

  // ESC key close
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeDrawer(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeDrawer]);

  const handleNav = (href) => {
    closeDrawer();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  };

  const handleServiceWA = (key) => {
    closeDrawer();
    const url = buildWAUrl(DRAWER_MESSAGES[key]);
    setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 350);
  };

  return (
    <>
      {/* Floating LEFT-MIDDLE Menu Tab — mobile only */}
      <div className="lg:hidden">
        <button
          onClick={open ? closeDrawer : openDrawer}
          aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          style={{
            position: 'fixed',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1000,          /* selalu di atas overlay (998) dan drawer (999) */
            background: open ? '#003B7A' : '#0057B8',
            color: 'white',
            border: 'none',
            borderRadius: '0 8px 8px 0',
            padding: '16px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '2px 4px 16px rgba(0,87,184,0.35)',
            width: '32px',
            transition: 'background 0.25s ease',
          }}
        >
          {/* Panah: kanan saat tutup, kiri saat drawer terbuka */}
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="white" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.3s ease', transform: open ? 'scaleX(-1)' : 'scaleX(1)' }}
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          {/* Teks vertikal: bawah → atas */}
          <span style={{
            fontSize: '11px',
            fontWeight: 900,
            letterSpacing: '0.15em',
            lineHeight: 1,
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textTransform: 'uppercase',
          }}>
            MENU
          </span>
          {/* Hamburger icon — paling bawah */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`drawer-overlay lg:hidden ${open ? 'open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <nav
        id="mobile-drawer"
        className={`drawer-panel lg:hidden ${open ? 'open' : ''}`}
        aria-label="Menu navigasi mobile"
        role="navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <Logo size="sm" />
          <button
            onClick={closeDrawer}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Tutup menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-4 space-y-1">
          {/* Main Nav */}
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Menu Utama</p>
          {MAIN_NAV.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="w-full text-left px-3 py-3 rounded-xl font-medium text-gray-700 hover:bg-brand-light hover:text-brand-blue transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="px-4 py-2">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Layanan Utama</p>
            <div className="space-y-1">
              {LAYANAN_UTAMA.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleServiceWA(item.key)}
                  className="w-full text-left px-3 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors text-sm flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-brand-blue transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Layanan Tambahan</p>
            <div className="space-y-1">
              {LAYANAN_TAMBAHAN.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleServiceWA(item.key)}
                  className="w-full text-left px-3 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors text-sm flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-brand-blue transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer CTA */}
        <div className="px-4 py-6 mt-2">
          <a
            href={buildWAUrl('Halo Jasa Cleaning Jogja, saya ingin konsultasi mengenai jasa cleaning. Mohon informasinya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-brand-blue hover:bg-brand-dark text-white font-bold py-4 rounded-2xl transition-colors text-base shadow-md"
            onClick={closeDrawer}
          >
            <span>💬</span>
            <span>CHAT WHATSAPP</span>
          </a>
          <p className="text-center text-xs text-gray-400 mt-3">0812-2729-3940</p>
        </div>
      </nav>
    </>
  );
}
