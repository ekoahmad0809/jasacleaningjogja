import { SERVICES } from '../data/services';

export default function ServiceDetail() {
  return (
    <section
      id="detail-layanan"
      className="py-16 lg:py-24 bg-brand-light"
      aria-labelledby="detail-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="detail-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kami tangani berbagai jenis area dan kondisi. Lihat detail layanan sesuai kebutuhan Anda.
          </p>
        </div>

        {/* Services detail */}
        <div className="space-y-6">
          {SERVICES.map((service, idx) => (
            <ServiceDetailCard key={service.id} service={service} reversed={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailCard({ service, reversed }) {
  return (
    <article
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`}
      aria-label={`Detail layanan ${service.name}`}
    >
      <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Visual */}
        <div className="lg:w-72 h-48 lg:h-auto bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, white 0%, transparent 70%)',
          }} aria-hidden="true" />
          <span className="text-7xl relative z-10" aria-hidden="true" role="img">{service.icon}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8">
          <h3 className="text-xl font-bold text-brand-dark mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>

          {/* Problems list */}
          <ul className="space-y-2 mb-6" aria-label={`Masalah yang ditangani: ${service.name}`}>
            {service.problems.map((prob) => (
              <li key={prob} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#0057B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {prob}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={service.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
            aria-label={`Chat WhatsApp untuk ${service.name}`}
          >
            <span>💬</span>
            <span>{service.ctaText} → WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
