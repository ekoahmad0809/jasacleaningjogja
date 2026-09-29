const AREAS = [
  { name: 'Kota Yogyakarta', icon: '🏙️', desc: 'Semua kecamatan dalam kota' },
  { name: 'Sleman', icon: '🌄', desc: 'Termasuk Depok, Mlati, Gamping, dll' },
  { name: 'Bantul', icon: '🌿', desc: 'Termasuk Kasihan, Sewon, Banguntapan, dll' },
  { name: 'Kulon Progo', icon: '🏔️', desc: 'Termasuk Wates dan sekitarnya' },
  { name: 'Gunungkidul', icon: '🌊', desc: 'Termasuk Wonosari dan sekitarnya' },
];

export default function ServiceArea() {
  return (
    <section
      id="area"
      className="py-16 lg:py-24 bg-brand-dark"
      aria-labelledby="area-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            📍 Coverage
          </span>
          <h2 id="area-heading" className="text-3xl lg:text-4xl font-black text-white mb-4">
            Cleaning Service Jogja &amp; Sekitarnya
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Melayani kebutuhan cleaning untuk rumah, kost, apartement, kantor, toko, ruko dan berbagai kebutuhan lainnya di area Jogja dan sekitarnya.
          </p>
        </div>

        {/* Area Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {AREAS.map((area) => (
            <div
              key={area.name}
              className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl p-5 text-center transition-colors duration-200"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{area.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1">{area.name}</h3>
              <p className="text-blue-300 text-xs">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Map CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://maps.app.goo.gl/UBpndkCfhqVy2JsH7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-blue-50 text-brand-blue font-bold px-6 py-3.5 rounded-2xl transition-colors duration-200 shadow text-sm"
              aria-label="Lihat lokasi di Google Maps"
            >
              <span>📍</span>
              <span>Lihat Lokasi di Google Maps</span>
            </a>
            <a
              href="https://wa.me/6281227293940?text=Halo%20Jasa%20Cleaning%20Jogja%2C%20saya%20ingin%20konsultasi%20cleaning%20di%20area%20saya.%20Mohon%20informasinya."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold px-6 py-3.5 rounded-2xl transition-colors duration-200 shadow text-sm"
              aria-label="Tanya area layanan via WhatsApp"
            >
              <span>💬</span>
              <span>Tanya Area Saya</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
