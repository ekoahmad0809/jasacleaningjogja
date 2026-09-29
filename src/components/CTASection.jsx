import { buildWAUrl, WA_MESSAGES } from '../utils/whatsapp';

export default function CTASection() {
  return (
    <section
      id="kontak"
      className="py-16 lg:py-24 bg-gradient-to-br from-brand-blue to-brand-dark"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
          <span className="text-brand-yellow">🧹</span>
          <span className="text-white text-sm font-medium">Jasa Cleaning Jogja</span>
        </div>

        {/* Heading */}
        <h2 id="cta-heading" className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
          Sudah tahu area yang ingin<br />
          <span className="text-brand-yellow">dibersihkan?</span>
        </h2>

        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
          Kirim foto area, ceritakan kondisinya — kami akan bantu estimasi harga dan jadwal.
        </p>

        {/* Main CTA */}
        <a
          href={buildWAUrl(WA_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-black text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-xl hover:-translate-y-0.5 hover:shadow-2xl mb-4"
          aria-label="Chat WhatsApp Jasa Cleaning Jogja untuk konsultasi"
        >
          <span className="text-2xl">💬</span>
          <span>Chat WhatsApp Sekarang</span>
        </a>

        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
          <span>📱</span>
          <span>0812-2729-3940</span>
        </div>

        {/* Secondary options */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Cleaning Rumah', msg: WA_MESSAGES.rumahMain },
            { label: 'Cleaning Kost', msg: WA_MESSAGES.kostMain },
            { label: 'Cleaning Kamar Mandi', msg: WA_MESSAGES.toiletMain },
            { label: 'Polish Keramik', msg: WA_MESSAGES.polishKeramik },
            { label: 'Cuci Sofa', msg: WA_MESSAGES.cuciSofa },
          ].map((item) => (
            <a
              key={item.label}
              href={buildWAUrl(item.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
            >
              <span>→</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
