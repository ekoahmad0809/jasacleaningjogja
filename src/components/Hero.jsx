import { buildWAUrl, WA_MESSAGES } from '../utils/whatsapp';

export default function Hero() {
  const waHero = buildWAUrl(WA_MESSAGES.hero);

  const scrollToBA = (e) => {
    e.preventDefault();
    document.querySelector('#before-after')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="beranda"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #003B7A 0%, #0057B8 60%, #1a75d2 100%)' }}
      aria-label="Hero section Jasa Cleaning Jogja"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white opacity-5" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white opacity-5" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-brand-yellow opacity-10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text */}
        <div className="text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <span className="text-brand-yellow text-sm">📍</span>
            <span className="text-sm font-medium">Melayani Jogja &amp; Sekitarnya</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4 tracking-tight">
            Jasa Cleaning{' '}
            <span className="text-brand-yellow">No 1</span>{' '}
            di Jogja
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-8 max-w-lg">
            Rumah, Kost, Apartement, Kantor hingga Kamar Mandi —{' '}
            <strong className="text-white">Dibersihkan Lebih Maksimal</strong>, Lebih Nyaman, Lebih Bersih.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              '✓ Bisa Konsultasi',
              '✓ Tim Berpengalaman',
              '✓ Area Jogja & Sekitarnya',
            ].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1.5 text-sm font-medium"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Chat WhatsApp Jasa Cleaning Jogja"
            >
              <span>💬</span>
              <span>Chat WhatsApp</span>
            </a>
            <a
              href="#before-after"
              onClick={scrollToBA}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:bg-white/10"
            >
              <span>📸</span>
              <span>Lihat Before After</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Visual card */}
        <div className="relative hidden lg:block">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">

            {/* Mini Before/After Split — AFTER kiri, BEFORE kanan */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">

              {/* Bagian KIRI = SESUDAH (after) */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative overflow-hidden">
                  <img
                    src="/images/after-kamar-mandi-01.jpg"
                    alt="After cleaning kamar mandi Jogja — bersih mengkilap"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#E8F4FD,#DCEEFB)';
                    }}
                  />
                  {/* Fallback warna jika belum ada foto */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center -z-10"
                    style={{ background: 'linear-gradient(135deg,#EBF5FF,#C8E6FF)' }}
                  >
                    <span className="text-5xl mb-2" aria-hidden="true">✨</span>
                    <span className="text-brand-dark text-xs font-semibold">Bersih</span>
                  </div>
                  {/* Label SESUDAH */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <span className="bg-brand-blue text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      SESUDAH
                    </span>
                  </div>
                </div>

                {/* Garis pembatas */}
                <div className="w-0.5 bg-white z-10 flex-shrink-0" aria-hidden="true" />

                {/* Bagian KANAN = SEBELUM (before) */}
                <div className="w-1/2 relative overflow-hidden">
                  <img
                    src="/images/before-kamar-mandi-01.jpg"
                    alt="Before cleaning kamar mandi Jogja — kondisi kotor berkerak"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#8B6A4F,#6B4A2F)';
                    }}
                  />
                  {/* Fallback warna jika belum ada foto */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center -z-10"
                    style={{ background: 'linear-gradient(135deg,#8B6A4F,#6B4A2F)' }}
                  >
                    <span className="text-5xl mb-2" aria-hidden="true">🚿</span>
                    <span className="text-white text-xs font-semibold">Kotor</span>
                  </div>
                  {/* Label SEBELUM */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <span className="bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      SEBELUM
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge sudut kanan atas */}
              <div className="absolute top-3 right-3 bg-brand-yellow text-gray-900 rounded-xl px-3 py-1.5 text-xs font-bold shadow z-20">
                📸 Before → After
              </div>

              {/* Label kategori sudut kiri atas */}
              <div className="absolute top-3 left-3 bg-white/90 text-brand-dark rounded-xl px-3 py-1.5 text-xs font-bold shadow z-20">
                🚿 Kamar Mandi
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              {[
                { icon: '📍', text: 'Area Jogja' },
                { icon: '💬', text: 'Via WhatsApp' },
                { icon: '🧹', text: 'Hasil Bersih' },
              ].map((s) => (
                <div
                  key={s.text}
                  className="bg-white/15 rounded-xl px-3 py-3 text-center border border-white/15"
                >
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="text-white text-xs font-medium">{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce hidden md:block" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
