import { useState } from "react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "../data/gallery";
import { buildWAUrl, WA_MESSAGES } from "../utils/whatsapp";

function GalleryCard({ item, onClick }) {
  return (
    <button
      className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer block w-full"
      onClick={() => onClick(item)}
      aria-label={`Lihat before after ${item.label}`}
    >
      {/* Before / After split */}
      <div className="absolute inset-0 flex">
        {/* Before half (kiri) */}
        <div className="flex-1 relative overflow-hidden bg-gray-200">
          {item.beforeSrc ? (
            <img src={item.beforeSrc} alt={`Before ${item.label}`} className="absolute top-0 left-0 w-[200%] max-w-none h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #8B6A4F, #6B4A2F)" }}>
              <span className="text-3xl" aria-hidden="true">🧹</span>
            </div>
          )}
        </div>
        {/* After half (kanan) */}
        <div className="flex-1 relative overflow-hidden bg-gray-100">
          {item.afterSrc ? (
            <img src={item.afterSrc} alt={`After ${item.label}`} className="absolute top-0 right-0 w-[200%] max-w-none h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EBF5FF, #DCEEFB)" }}>
              <span className="text-3xl" aria-hidden="true">✨</span>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" aria-hidden="true" />

      {/* Labels */}
      <div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-20">BEFORE</div>
      <div className="absolute top-2 right-2 bg-brand-blue text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-20">AFTER</div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 z-30 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-xl px-3 py-1.5 text-xs font-semibold text-brand-dark shadow-lg transform translate-y-2 group-hover:translate-y-0">
          Lihat Detail
        </div>
      </div>

      {/* Caption bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 z-20">
        <p className="text-white text-xs font-bold text-center">{item.label}</p>
      </div>
    </button>
  );
}

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="lightbox-overlay open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Before After ${item.label}`}
    >
      <div
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2"
          aria-label="Tutup lightbox"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Before After display - split in half */}
          <div className="flex flex-col sm:flex-row">
            {/* Before */}
            <div className="flex-1 relative aspect-square sm:aspect-auto sm:h-[400px]">
              {item.beforeSrc ? (
                <img src={item.beforeSrc} alt={item.beforeAlt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8" style={{ background: "linear-gradient(135deg, #8B6A4F, #6B4A2F)" }}>
                  <span className="text-7xl mb-4" aria-hidden="true">🧹</span>
                </div>
              )}
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full shadow">SEBELUM</div>
            </div>
            
            {/* Divider line for desktop */}
            <div className="hidden sm:block w-1 bg-white z-10" />

            {/* After */}
            <div className="flex-1 relative aspect-square sm:aspect-auto sm:h-[400px]">
              {item.afterSrc ? (
                <img src={item.afterSrc} alt={item.afterAlt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8" style={{ background: "linear-gradient(135deg, #EBF5FF, #DCEEFB)" }}>
                  <span className="text-7xl mb-4" aria-hidden="true">✨</span>
                </div>
              )}
              <div className="absolute top-3 right-3 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow">SESUDAH</div>
            </div>
          </div>

          <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-brand-dark text-lg">{item.label}</h3>
              <p className="text-gray-500 text-sm">Hasil cleaning profesional di Jogja</p>
            </div>
            <a
              href={`https://wa.me/6281227293940?text=${encodeURIComponent("Halo Jasa Cleaning Jogja, saya tertarik dengan layanan cleaning " + item.label + ". Mohon info harganya.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-md"
            >
              <span>💬</span>
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-brand-light text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            📸 Gallery
          </span>
          <h2 id="gallery-heading" className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
            Gallery Hasil Pengerjaan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kumpulan hasil pengerjaan cleaning yang sudah kami selesaikan di area Jogja dan sekitarnya.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={setLightboxItem} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-gray-100">
            Belum ada foto untuk kategori ini.
          </div>
        )}
      </div>

      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </section>
  );
}
