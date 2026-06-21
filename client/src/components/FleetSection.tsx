/* =============================================================
   POMERANIA RENT – Fleet Section
   Haff Noir: Fahrzeugkarten, filmisch, Hover-Reveal
   EQC mit echten Fotos + Bildergalerie
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Zap, Gauge, Calendar, Users, ChevronLeft, ChevronRight, X } from "lucide-react";

const vehicles = [
  {
    id: "corvette",
    name: "Corvette Stingray",
    year: "1974",
    type: "Klassischer Sportwagen",
    color: "Schwarz",
    images: ["/manus-storage/corvette_stingray_1974_a8429a3e.png"],
    description:
      "Ein ikonischer amerikanischer Sportwagen – für Liebhaber, besondere Anlässe und unvergessliche Ausfahrten entlang der Alleen Vorpommerns.",
    specs: [
      { icon: Gauge, label: "Hubraum", value: "5,7 Liter V8" },
      { icon: Calendar, label: "Baujahr", value: "1974" },
      { icon: Users, label: "Sitze", value: "2 Personen" },
    ],
    tag: "Klassiker",
    tagColor: "oklch(0.72 0.12 75)",
  },
  {
    id: "eqc",
    name: "Mercedes EQC",
    year: "2022",
    type: "Elektrischer Luxus-SUV",
    color: "Schwarz",
    images: [
      "/manus-storage/eqc_reetdach_e91e8730.jpg",
      "/manus-storage/eqc_parkplatz_9171646c.jpg",
    ],
    description:
      "Moderner Luxus trifft auf emissionsfreies Fahren. Ideal für Familienausflüge, Inselerkundungen oder als komfortabler Premium-Reisegefährte.",
    specs: [
      { icon: Zap, label: "Antrieb", value: "Vollelektrisch" },
      { icon: Gauge, label: "Leistung", value: "408 PS" },
      { icon: Users, label: "Sitze", value: "5 Personen" },
    ],
    tag: "Elektro",
    tagColor: "oklch(0.55 0.15 200)",
  },
];

// Lightbox-Komponente
function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`${title} – Foto ${current + 1}`}
          className="w-full max-h-[80vh] object-contain rounded-sm"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-[oklch(0.72_0.12_75)] scale-125"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <p className="text-center text-white/50 text-sm mt-3 font-['DM_Sans']">
          {title} · {current + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

function VehicleCard({ vehicle, index }: { vehicle: typeof vehicles[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const openLightbox = (imgIndex: number) => {
    setLightboxStart(imgIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          images={vehicle.images}
          startIndex={lightboxStart}
          title={vehicle.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <div
        ref={cardRef}
        className="reveal group relative overflow-hidden rounded-sm bg-[oklch(0.19_0.03_240)] border border-white/8 hover:border-[oklch(0.72_0.12_75/0.4)] transition-all duration-500"
      >
        {/* Main Image */}
        <div
          className="relative overflow-hidden aspect-[16/9] cursor-zoom-in"
          onClick={() => openLightbox(activeImg)}
        >
          <img
            src={vehicle.images[activeImg]}
            alt={`${vehicle.year} ${vehicle.name}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.025_240)] via-transparent to-transparent" />

          {/* Tag */}
          <div
            className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm"
            style={{
              backgroundColor: `${vehicle.tagColor}`,
              color: "oklch(0.14 0.025 240)",
            }}
          >
            {vehicle.tag}
          </div>

          {/* Foto-Anzahl Badge */}
          {vehicle.images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white/80 text-xs px-2 py-1 rounded-sm font-['DM_Sans']">
              1 / {vehicle.images.length} · Klicken zum Vergrößern
            </div>
          )}
        </div>

        {/* Thumbnail Strip (nur wenn mehrere Bilder) */}
        {vehicle.images.length > 1 && (
          <div className="flex gap-2 px-4 pt-3">
            {vehicle.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative overflow-hidden rounded-sm flex-1 aspect-[16/9] border-2 transition-all duration-200 ${
                  i === activeImg
                    ? "border-[oklch(0.72_0.12_75)]"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`${vehicle.name} Foto ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs tracking-widest uppercase text-[oklch(0.72_0.12_75)] mb-1">
                {vehicle.year} · {vehicle.type}
              </p>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white">
                {vehicle.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div
                className="w-4 h-4 rounded-full border border-white/20"
                style={{
                  backgroundColor: "#111",
                }}
                title={vehicle.color}
              />
              <span className="text-xs text-white/50">{vehicle.color}</span>
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {vehicle.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-white/8">
            {vehicle.specs.map((spec) => (
              <div key={spec.label} className="text-center">
                <spec.icon size={16} className="mx-auto mb-1 text-[oklch(0.72_0.12_75)]" />
                <div className="text-xs font-semibold text-white">{spec.value}</div>
                <div className="text-xs text-white/40 mt-0.5">{spec.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full py-3 border border-[oklch(0.72_0.12_75/0.5)] text-[oklch(0.72_0.12_75)] text-sm font-semibold tracking-widest uppercase hover:bg-[oklch(0.72_0.12_75)] hover:text-[oklch(0.14_0.025_240)] transition-all duration-200 rounded-sm active:scale-[0.98]"
          >
            Anfragen & Reservieren
          </button>
        </div>
      </div>
    </>
  );
}

export default function FleetSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="fahrzeuge" className="py-24 md:py-32 bg-[oklch(0.14_0.025_240)]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
              Unsere Flotte
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Zwei Welten.
            <br />
            <em className="italic text-[oklch(0.72_0.12_75)]">Eine Küste.</em>
          </h2>
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            Ob klassischer Muscle-Car oder moderner Elektro-SUV – beide Fahrzeuge
            sind perfekt für die Straßen und Alleen Vorpommerns.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-10 p-6 border border-white/8 rounded-sm bg-[oklch(0.19_0.03_240)] flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-white/70">
              <span className="text-[oklch(0.72_0.12_75)] font-semibold">Hinweis:</span>{" "}
              Für die Anmietung der Fahrzeuge ist ein gültiger Führerschein der Klasse B
              erforderlich. Mindestalter 21 Jahre. Kaution erforderlich.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 px-6 py-2.5 bg-[oklch(0.72_0.12_75)] text-[oklch(0.14_0.025_240)] text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-[oklch(0.82_0.09_75)] transition-colors"
          >
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>
  );
}
