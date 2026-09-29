import Logo from './Logo';
import { buildWAUrl, WA_MESSAGES } from '../utils/whatsapp';

const LAYANAN_UTAMA = [
  'Kamar Kost',
  'Rumah / Kontrakan',
  'Kamar Mandi',
  'Apartement',
  'Ruko / Kantor / Toko',
  'Ruangan Custom',
];

const LAYANAN_TAMBAHAN = [
  'Polish Keramik',
  'Polish Porcelain',
  'Polish Marmer',
  'Cuci Karpet',
  'Cuci Sofa',
];

const AREA = [
  'Jogja',
  'Sleman',
  'Bantul',
  'Kulon Progo',
  'Gunungkidul',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Jasa cleaning profesional untuk rumah, kost, apartement, kantor dan bisnis di area Yogyakarta dan sekitarnya.
            </p>
            <a
              href={buildWAUrl(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-dark text-white font-bold px-5 py-3 rounded-xl transition-colors duration-200 text-sm"
              aria-label="Chat WhatsApp Jasa Cleaning Jogja"
            >
              <span>💬</span>
              <span>Chat WhatsApp</span>
            </a>
            <p className="text-gray-500 text-xs mt-3">0812-2729-3940</p>
          </div>

          {/* Layanan Utama */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Layanan Utama</h3>
            <ul className="space-y-2.5">
              {LAYANAN_UTAMA.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Tambahan */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Layanan Tambahan</h3>
            <ul className="space-y-2.5">
              {LAYANAN_TAMBAHAN.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-default">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-sm mt-6 mb-4 uppercase tracking-wider">Area Layanan</h3>
            <ul className="space-y-2">
              {AREA.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-brand-yellow">📱</span>
                <span className="text-gray-400 text-sm">0812-2729-3940</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-yellow">📍</span>
                <span className="text-gray-400 text-sm">Yogyakarta & Sekitarnya</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-yellow">💬</span>
                <a
                  href={buildWAUrl(WA_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-blue-400 text-sm transition-colors"
                >
                  Chat via WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-yellow">🗺️</span>
                <a
                  href="https://maps.app.goo.gl/UBpndkCfhqVy2JsH7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-blue-400 text-sm transition-colors"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Jasa Cleaning Jogja. Semua Hak Dilindungi.</p>
          <p>Jasa Cleaning No 1 di Jogja 📍</p>
        </div>
      </div>
    </footer>
  );
}
