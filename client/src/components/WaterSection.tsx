/* =============================================================
   POMERANIA RENT – Water Sports Section
   Haff Noir: Jetskis & Surfbretter, horizontale Karten
   ============================================================= */
import { useEffect, useRef } from "react";
import { Waves, Wind, Shield, Clock } from "lucide-react";

const waterProducts = [
  {
    id: "jetski",
    name: "Jetski",
    subtitle: "Motorisierter Wasserspaß",
    comingSoon: true,
    image: "/manus-storage/jetski_1050c0db.png",
    description:
      "Erlebe puren Adrenalinkick auf dem Stettiner Haff. Unsere modernen Jetskis bieten maximalen Fahrspaß auf den weiten Wasserflächen der Region.",
    features: ["Einweisung inklusive", "Schutzausrüstung gestellt", "Ab 18 Jahren"],
    icon: Waves,
    accentColor: "oklch(0.55 0.15 200)",
  },
  {
    id: "surfboard",
    name: "Surfbrett & SUP",
    subtitle: "Stand-Up-Paddling & Surfen",
    image: "/manus-storage/surfboards_d47fb958.png",
    description:
      "Die ruhigen Gewässer des Haffs sind ideal für Stand-Up-Paddling. Entdecke die Küste aus einer neuen Perspektive – entspannt und naturverbunden.",
    features: ["Für alle Niveaus", "Paddle inklusive", "Ab 12 Jahren"],
    icon: Wind,
    accentColor: "oklch(0.72 0.12 75)",
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Sicherheit zuerst",
    text: "Vollständige Einweisung und Schutzausrüstung bei jedem Verleih inklusive.",
  },
  {
    icon: Clock,
    title: "Flexible Zeiten",
    text: "Stundenweise oder tageweise – ganz nach Ihrem Urlaubsrhythmus.",
  },
  {
    icon: Waves,
    title: "Ideale Bedingungen",
    text: "Das Stettiner Haff bietet mit seinen ruhigen Gewässern perfekte Bedingungen.",
  },
];

export default function WaterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="wassersport"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[oklch(0.17_0.028_240)] relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.72 0.12 75) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, oklch(0.55 0.15 200) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={(el) => { itemRefs.current[0] = el; }}
          className="reveal mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
              Wassersport
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Das Haff wartet.
            <br />
            <em className="italic text-[oklch(0.72_0.12_75)]">Du auch?</em>
          </h2>
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            Vom Adrenalin-Kick auf dem Jetski bis zur meditativen SUP-Tour –
            das Stettiner Haff bietet für jeden das perfekte Wassererlebnis.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {waterProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => { itemRefs.current[index + 1] = el; }}
              className="reveal group relative overflow-hidden rounded-sm bg-[oklch(0.19_0.03_240)] border border-white/8 hover:border-[oklch(0.72_0.12_75/0.4)] transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${'comingSoon' in product && product.comingSoon ? 'opacity-60 grayscale-[30%]' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.025_240)] via-transparent to-transparent" />
                {'comingSoon' in product && product.comingSoon && (
                  <div className="absolute top-4 right-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.14_0.025_240)] text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm shadow-lg">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: product.accentColor }}>
                  {product.subtitle}
                </p>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs rounded-sm border border-white/10 text-white/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {'comingSoon' in product && product.comingSoon ? (
                  <div className="w-full py-3 border border-white/15 text-white/30 text-sm font-semibold tracking-widest uppercase text-center rounded-sm cursor-not-allowed select-none">
                    Bald verfügbar
                  </div>
                ) : (
                  <button
                    onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full py-3 border text-sm font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm active:scale-[0.98]"
                    style={{
                      borderColor: `${product.accentColor}80`,
                      color: product.accentColor,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = product.accentColor;
                      (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.14 0.025 240)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color = product.accentColor;
                    }}
                  >
                    Anfragen & Buchen
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div
          ref={(el) => { itemRefs.current[3] = el; }}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="p-6 rounded-sm bg-[oklch(0.19_0.03_240)] border border-white/8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h.icon size={24} className="text-[oklch(0.72_0.12_75)] mb-3" />
              <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2">
                {h.title}
              </h4>
              <p className="text-sm text-white/55 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
