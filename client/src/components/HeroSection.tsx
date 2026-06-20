/* =============================================================
   POMERANIA RENT – Hero Section
   Haff Noir: Dramatisch, Corvette als Hauptbild, asymmetrisch
   ============================================================= */
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Parallax-Effekt beim Scrollen
    const onScroll = () => {
      const scrollY = window.scrollY;
      const bg = el.querySelector(".hero-bg") as HTMLElement;
      if (bg) bg.style.transform = `translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToFleet = () => {
    document.querySelector("#fahrzeuge")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="hero-bg absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url('/manus-storage/corvette_stingray_1974_a8429a3e.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Dark Overlay – gradient from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.025_240/0.95)] via-[oklch(0.10_0.025_240/0.75)] to-[oklch(0.10_0.025_240/0.20)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.025_240/0.80)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
              Vorpommern · Stettiner Haff
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ animationDelay: "100ms" }}
          >
            Fahre, was
            <br />
            <em className="italic text-[oklch(0.72_0.12_75)]">andere</em>
            <br />
            nur träumen.
          </h1>

          {/* Subtext */}
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg font-['DM_Sans']">
            Exklusiver Fahrzeug- und Wassersportverleih direkt am Stettiner Haff.
            Für Urlauber, Feriengäste und Einheimische, die mehr wollen als nur ankommen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToFleet}
              className="px-8 py-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.14_0.025_240)] font-semibold tracking-wider uppercase text-sm hover:bg-[oklch(0.82_0.09_75)] transition-all duration-200 rounded-sm active:scale-[0.97]"
            >
              Unsere Flotte entdecken
            </button>
            <button
              onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-white/40 text-white font-medium tracking-wider uppercase text-sm hover:border-white/80 hover:bg-white/5 transition-all duration-200 rounded-sm active:scale-[0.97]"
            >
              Jetzt reservieren
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-10">
            {[
              { value: "2", label: "Premium-Fahrzeuge" },
              { value: "4+", label: "Wassersport-Geräte" },
              { value: "100%", label: "Küstenerlebnis" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-['Playfair_Display'] font-bold text-[oklch(0.72_0.12_75)]">
                  {stat.value}
                </div>
                <div className="text-xs tracking-wider uppercase text-white/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToFleet}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Nach unten scrollen"
      >
        <span className="text-xs tracking-widest uppercase">Entdecken</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
