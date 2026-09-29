import { useState, useRef, useCallback, useEffect } from "react";
import { buildWAUrl } from "../utils/whatsapp";

const BA_ITEMS = [
  {
    id: "km",
    label: "Kamar Mandi",
    beforeAlt: "Before cleaning kamar mandi Jogja — kondisi kotor berkerak",
    afterAlt: "After cleaning kamar mandi Jogja — bersih mengkilap",
    beforeColor: "#8B6A4F",
    afterColor: "#E8F4FD",
    beforeIcon: "🚿",
    afterIcon: "✨",
    beforeDesc: "Kerak tebal & noda membandel",
    afterDesc: "Bersih & mengkilap kembali",
    beforeImg: "/images/before-kamar-mandi-01.jpg",
    afterImg: "/images/after-kamar-mandi-01.jpg",
    waMsg: "Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Kamar Mandi. Mohon info harga dan jadwal.",
  },
  {
    id: "kost",
    label: "Kamar Kost",
    beforeAlt: "Before cleaning kamar kost Jogja — kotor berdebu",
    afterAlt: "After cleaning kamar kost Jogja — rapi dan bersih",
    beforeColor: "#7A6550",
    afterColor: "#EBF5FF",
    beforeIcon: "🛏️",
    afterIcon: "✨",
    beforeDesc: "Debu & kotoran menumpuk",
    afterDesc: "Rapi, bersih, nyaman",
    beforeImg: "/images/before-kost-01.png",
    afterImg: "/images/after-kost-01.jpeg",
    waMsg: "Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Kamar Kost. Mohon info harga dan jadwal.",
  },
  {
    id: "keramik",
    label: "Keramik / Lantai",
    beforeAlt: "Before polish keramik Jogja — kusam dan berdaki",
    afterAlt: "After polish keramik Jogja — mengkilap seperti baru",
    beforeColor: "#9B8A6E",
    afterColor: "#F0F8FF",
    beforeIcon: "🔲",
    afterIcon: "✨",
    beforeDesc: "Kusam, noda & berdaki",
    afterDesc: "Kinclong seperti baru",
    beforeImg: "/images/before-keramik-01.png",
    afterImg: "/images/after-keramik-01.jpg",
    waMsg: "Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Polish Keramik. Mohon info harga dan jadwal.",
  },
  {
    id: "sofa",
    label: "Sofa",
    beforeAlt: "Before cuci sofa Jogja — kotor dan bernoda",
    afterAlt: "After cuci sofa Jogja — bersih dan segar",
    beforeColor: "#6B5B45",
    afterColor: "#F5F0FF",
    beforeIcon: "🛋️",
    afterIcon: "✨",
    beforeDesc: "Noda & debu pada sofa",
    afterDesc: "Bersih, segar, bebas bau",
    beforeImg: "/images/before-sofa-01.jpg",
    afterImg: "/images/after-sofa-01.jpg",
    waMsg: "Halo Jasa Cleaning Jogja, saya tertarik dengan Jasa Cuci Sofa. Mohon info harga dan jadwal.",
  },
];

function BASlider({ item }) {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const getPercent = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const x = clientX - rect.left;
    return Math.max(5, Math.min(95, (x / rect.width) * 100));
  }, []);

  const onMouseDown = (e) => { e.preventDefault(); isDragging.current = true; };
  const onMouseMove = useCallback((e) => { if (!isDragging.current) return; setPos(getPercent(e.clientX)); }, [getPercent]);
  const onMouseUp = useCallback(() => { isDragging.current = false; }, []);
  const onTouchMove = useCallback((e) => { setPos(getPercent(e.touches[0].clientX)); }, [getPercent]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  }, [onMouseMove, onMouseUp]);

  useEffect(() => { setPos(50); }, [item.id]);

  return (
    <div
      ref={sliderRef}
      className="ba-slider aspect-[4/3] select-none"
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      style={{ touchAction: "none" }}
      role="img"
      aria-label={`Before After slider: ${item.label}`}
    >
      {/* AFTER — latar belakang penuh (tampil di kanan saat slider di tengah) */}
      <div className="absolute inset-0">
        {item.afterImg ? (
          <img
            src={item.afterImg}
            alt={item.afterAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${item.afterColor}, ${item.afterColor}cc)` }}
          >
            <div className="text-6xl mb-3" aria-hidden="true">{item.afterIcon}</div>
            <p className="text-brand-dark font-medium text-sm text-center px-4">{item.afterDesc}</p>
          </div>
        )}
      </div>

      {/* Label SESUDAH — kanan */}
      <span className="ba-label ba-label-after">SESUDAH</span>

      {/* BEFORE — overlay dari kiri (tampil di kiri saat slider di tengah) */}
      <div className="ba-after-overlay" style={{ width: `${pos}%` }}>
        <div className="absolute inset-0" style={{ width: `${100 / (pos / 100)}%` }}>
          {item.beforeImg ? (
            <img
              src={item.beforeImg}
              alt={item.beforeAlt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${item.beforeColor}, ${item.beforeColor}dd)` }}
            >
              <div className="text-6xl mb-3" aria-hidden="true">{item.beforeIcon}</div>
              <p className="text-white font-medium text-sm text-center px-4">{item.beforeDesc}</p>
            </div>
          )}
        </div>
      </div>

      {/* Label SEBELUM — kiri */}
      <span className="ba-label ba-label-before">SEBELUM</span>

      {/* Handle geser */}
      <div
        className="ba-handle"
        style={{ left: `calc(${pos}% - 2px)` }}
        onMouseDown={onMouseDown}
        onTouchMove={onTouchMove}
        role="slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={5}
        aria-valuemax={95}
        aria-label="Geser untuk membandingkan"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos(p => Math.max(5, p - 5));
          if (e.key === "ArrowRight") setPos(p => Math.min(95, p + 5));
        }}
      >
        <div className="ba-handle-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0057B8" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section id="before-after" className="py-16 lg:py-24 bg-gray-900" aria-labelledby="ba-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-brand-yellow text-gray-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            📸 Bukti Nyata
          </span>
          <h2 id="ba-heading" className="text-3xl lg:text-5xl font-black text-white mb-4">
            LIHAT SENDIRI HASILNYA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata. Lihat perubahan sebelum dan sesudah dibersihkan.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {BA_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i ? "bg-brand-blue text-white shadow-lg" : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              aria-pressed={active === i}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <BASlider item={BA_ITEMS[active]} />

          <p className="text-center text-gray-500 text-xs mt-3 flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
            </svg>
            Geser untuk membandingkan SEBELUM dan SESUDAH
          </p>

          <div className="text-center mt-6">
            <a
              href={buildWAUrl(BA_ITEMS[active].waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              <span>💬</span>
              <span>Konsultasi {BA_ITEMS[active].label}</span>
            </a>
          </div>
        </div>

        {/* Grid thumbnail kategori lain */}
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mt-8">
          {BA_ITEMS.filter((_, i) => i !== active).map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(BA_ITEMS.indexOf(item))}
              className="aspect-[4/3] rounded-xl overflow-hidden relative group"
              aria-label={`Lihat before after ${item.label}`}
            >
              {item.afterImg ? (
                <img src={item.afterImg} alt={item.afterAlt} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${item.beforeColor}, ${item.afterColor})` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl" aria-hidden="true">{item.beforeIcon}</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-2">
                <span className="text-white text-xs font-medium">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
