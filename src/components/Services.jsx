import { SERVICES } from '../data/services';

export default function ServicesSection() {
  return (
    <section
      id="layanan"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="layanan-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-light text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            🧹 Layanan
          </span>
          <h2 id="layanan-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Cleaning Service Sesuai Kebutuhan Anda
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Pilih layanan sesuai kebutuhan — kami siap memberikan hasil terbaik untuk setiap area.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article
      className="card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
      aria-label={`Layanan ${service.name}`}
    >
      {/* Card header color block */}
      <div className="h-28 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)',
        }} aria-hidden="true" />
        <span className="text-6xl" aria-hidden="true" role="img">{service.icon}</span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-brand-dark text-lg mb-2">{service.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>

        <a
          href={service.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-brand-blue hover:bg-brand-dark text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
          aria-label={`Chat WhatsApp untuk ${service.name}`}
        >
          <span>💬</span>
          <span>Chat WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
