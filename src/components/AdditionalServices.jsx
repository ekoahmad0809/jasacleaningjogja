import { ADDITIONAL_SERVICES } from '../data/services';

export default function AdditionalServices() {
  return (
    <section
      id="layanan-tambahan"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="tambahan-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-50 text-brand-yellow text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-yellow-100">
            ✨ Layanan Tambahan
          </span>
          <h2 id="tambahan-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Layanan Tambahan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lengkapi kebutuhan cleaning Anda dengan layanan tambahan kami.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ADDITIONAL_SERVICES.map((svc) => (
          <article
              key={svc.id}
              className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col"
              aria-label={svc.name}
            >
              {/* Gambar 3:2 — ganti file di public/images/ */}
              <div className="aspect-[3/2] relative overflow-hidden bg-brand-light">
                <img
                  src={svc.image}
                  alt={`Layanan ${svc.name} Jasa Cleaning Jogja`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Sembunyikan img, tampilkan fallback
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback saat foto belum ada */}
                <div
                  className="absolute inset-0 items-center justify-center flex-col gap-2 bg-gradient-to-br from-brand-blue to-brand-dark hidden"
                >
                  <span className="text-5xl" aria-hidden="true">{svc.icon}</span>
                  <span className="text-white text-xs font-medium opacity-70">Foto segera hadir</span>
                </div>
              </div>

              {/* Konten teks */}
              <div className="p-5 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-bold text-brand-dark text-base mb-2">{svc.name}</h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{svc.shortDesc}</p>

                {/* CTA */}
                <a
                  href={svc.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-blue hover:text-white text-brand-blue border border-blue-100 hover:border-brand-blue font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                  aria-label={`Konsultasi ${svc.name} via WhatsApp`}
                >
                  <span>💬</span>
                  <span>Konsultasi</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
