const BENEFITS = [
  {
    icon: '📍',
    title: 'Area Jogja dan Sekitarnya',
    desc: 'Melayani Yogyakarta, Sleman, Bantul, Magelang, Klaten.',
  },
  {
    icon: '💬',
    title: 'Konsultasi via WhatsApp',
    desc: 'Tanya, kirim foto area, dan dapatkan estimasi langsung lewat WhatsApp.',
  },
  {
    icon: '🧹',
    title: 'Sesuai Kebutuhan',
    desc: 'Dari kamar kost hingga ruko bisnis — cleaning disesuaikan kondisi nyata.',
  },
  {
    icon: '📸',
    title: 'Bukti Hasil Nyata',
    desc: 'Kami tunjukkan hasil before & after, bukan sekadar klaim.',
  },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-brand-light border-b border-blue-50" aria-label="Keunggulan layanan">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center p-4">
              <div className="text-3xl mb-3" aria-hidden="true">{b.icon}</div>
              <h3 className="font-bold text-brand-dark text-sm lg:text-base mb-1">{b.title}</h3>
              <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
