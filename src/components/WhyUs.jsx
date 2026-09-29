const REASONS = [
  {
    icon: '📍',
    title: 'Fokus Area Jogja',
    desc: 'Kami khusus melayani area Yogyakarta dan sekitarnya — tidak tersebar ke mana-mana.',
  },
  {
    icon: '💬',
    title: 'Konsultasi via WhatsApp',
    desc: 'Tanya langsung, kirim foto, dan dapatkan respons cepat tanpa perlu isi form panjang.',
  },
  {
    icon: '🎯',
    title: 'Pengerjaan Sesuai Kebutuhan',
    desc: 'Tidak semua area sama. Kami sesuaikan metode dan alat dengan kondisi nyata.',
  },
  {
    icon: '📸',
    title: 'Hasil Pengerjaan Bisa Dilihat',
    desc: 'Kami tunjukkan bukti before & after. Bukan sekadar janji bersih.',
  },
  {
    icon: '🏠',
    title: 'Cocok untuk Rumah & Bisnis',
    desc: 'Dari kamar kost hingga kantor — kami siap untuk berbagai jenis area.',
  },
  {
    icon: '🔍',
    title: 'Bisa Cleaning Detail',
    desc: 'Termasuk area kecil yang sering terlewat — sudut, sela, nat keramik, dan lainnya.',
  },
  {
    icon: '📅',
    title: 'Jadwal Fleksibel',
    desc: 'Menyesuaikan jadwal Anda. Koordinasi mudah lewat WhatsApp.',
  },
  {
    icon: '💡',
    title: 'Estimasi Berdasarkan Kondisi',
    desc: 'Harga dihitung berdasarkan foto dan kondisi nyata. Tidak sembarangan menentukan tarif.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="kenapa-kami"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-light text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            ⭐ Keunggulan
          </span>
          <h2 id="whyus-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Kenapa Memilih Jasa Cleaning Jogja?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Bukan sekadar klaim — ini alasan konkret yang membuat kami menjadi pilihan tepat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="card-hover p-5 rounded-2xl bg-brand-light border border-blue-50 flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-sm mb-1">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
