import { buildWAUrl, WA_MESSAGES } from '../utils/whatsapp';

const STEPS = [
  {
    num: '01',
    icon: '💬',
    title: 'Chat WhatsApp',
    desc: 'Hubungi admin lewat WhatsApp. Ceritakan kebutuhan cleaning Anda.',
  },
  {
    num: '02',
    icon: '📸',
    title: 'Kirim Foto & Lokasi',
    desc: 'Kirim foto area yang ingin dibersihkan beserta lokasi untuk estimasi akurat.',
  },
  {
    num: '03',
    icon: '💰',
    title: 'Dapatkan Estimasi',
    desc: 'Admin akan memberikan estimasi harga dan jadwal pengerjaan berdasarkan kondisi nyata.',
  },
  {
    num: '04',
    icon: '🧹',
    title: 'Tim Datang & Kerjakan',
    desc: 'Tim cleaning profesional datang sesuai jadwal dan mengerjakan hingga selesai.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="py-16 lg:py-24 bg-brand-light"
      aria-labelledby="cara-kerja-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-blue text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            📋 Proses
          </span>
          <h2 id="cara-kerja-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Pesan Cleaning Jadi Lebih Mudah
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cukup 4 langkah sederhana untuk mendapatkan layanan cleaning profesional di Jogja.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Connector line (desktop) */}
              {idx < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(50%+32px)] right-0 h-0.5 bg-blue-100 z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="w-20 h-20 rounded-2xl bg-brand-blue flex flex-col items-center justify-center shadow-md mb-4 relative">
                  <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-yellow text-gray-900 text-xs font-black flex items-center justify-center">
                    {step.num.replace('0', '')}
                  </span>
                </div>

                <h3 className="font-bold text-brand-dark text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={buildWAUrl(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-dark text-white font-bold px-10 py-4 rounded-2xl transition-colors duration-200 shadow-lg text-base"
            aria-label="Chat admin WhatsApp sekarang"
          >
            <span>💬</span>
            <span>Chat Admin Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
}
