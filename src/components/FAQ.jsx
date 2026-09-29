import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-brand-light transition-colors duration-200"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className="font-semibold text-brand-dark text-sm lg:text-base pr-4">{item.question}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-brand-blue flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45 bg-brand-blue' : ''}`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? 'white' : '#0057B8'}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          id={`faq-answer-${item.id}`}
          role="region"
          aria-labelledby={`faq-question-${item.id}`}
          className="px-5 pb-5 pt-1"
        >
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 lg:py-24 bg-brand-light"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-brand-blue text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ❓ FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Pertanyaan yang Sering Ditanya
          </h2>
          <p className="text-gray-500">
            Belum menemukan jawaban? Langsung chat WhatsApp kami.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} role="listitem">
              <FAQItem item={item} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Ada pertanyaan lain?</p>
          <a
            href="https://wa.me/6281227293940?text=Halo%20Jasa%20Cleaning%20Jogja%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20cleaning.%20Mohon%20informasinya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-2xl transition-colors duration-200"
          >
            <span>💬</span>
            <span>Tanya Admin Langsung</span>
          </a>
        </div>
      </div>
    </section>
  );
}
