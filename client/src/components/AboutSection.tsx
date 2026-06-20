/* =============================================================
   POMERANIA RENT – About Section
   Haff Noir: Region, Geschichte, Werte
   Haff-Panorama als Hintergrundbild
   ============================================================= */
import { useEffect, useRef } from "react";
import { MapPin, Heart, Star } from "lucide-react";

const values = [
  {
    icon: MapPin,
    title: "Verwurzelt in Vorpommern",
    text: "Wir kennen die Region wie unsere Westentasche. Als lokales Unternehmen am Stettiner Haff bieten wir Ihnen authentische Empfehlungen für die schönsten Routen und Ausflugsziele.",
  },
  {
    icon: Heart,
    title: "Leidenschaft für Mobilität",
    text: "Jedes Fahrzeug in unserer Flotte wurde mit Bedacht ausgewählt. Von der klassischen Corvette bis zum modernen EQC – wir vermieten nur, was wir selbst lieben würden zu fahren.",
  },
  {
    icon: Star,
    title: "Erlebnis für alle",
    text: "Ob Gäste unserer Ferienwohnungen, Touristen oder Einheimische – Pomerania Rent ist für jeden offen, der die Region auf besondere Weise erleben möchte.",
  },
];

export default function AboutSection() {
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
    <section id="ueber-uns" className="relative py-24 md:py-32 overflow-hidden">
      {/* Haff Panorama Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663238618296/PiiNrJPstNNRYkocC6PH8B/haff_panorama-iS8ZPL4AEVcD2W5SxRFYWy.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Heavy dark overlay for readability */}
      <div className="absolute inset-0 bg-[oklch(0.10_0.025_240/0.88)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Text */}
          <div
            ref={(el) => { itemRefs.current[0] = el; }}
            className="reveal"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
                Über uns
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pommern neu
              <br />
              <em className="italic text-[oklch(0.72_0.12_75)]">erleben.</em>
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">
              Pomerania Rent entstand aus der Idee, die einzigartige Landschaft des
              Stettiner Haffs auf außergewöhnliche Weise erlebbar zu machen. Die Region
              Vorpommern ist noch immer einer der letzten echten Geheimtipps an der
              deutschen Küste – unberührt, weitläufig und atemberaubend schön.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Wir glauben, dass die Art, wie man reist, das Erlebnis prägt. Eine Fahrt
              in der schwarzen Corvette entlang der Alleen, eine emissionsfreie Tour
              im EQC zur polnischen Grenze, oder ein Sonnenuntergang auf dem SUP-Board –
              das sind Momente, die bleiben.
            </p>

            {/* Region Facts */}
            <div className="grid grid-cols-2 gap-4 p-5 rounded-sm bg-[oklch(0.14_0.025_240/0.85)] border border-white/10 backdrop-blur-sm">
              {[
                { label: "Stettiner Haff", value: "687 km²" },
                { label: "Küstenlinie", value: "~200 km" },
                { label: "Naturpark", value: "260 km²" },
                { label: "Berlin entfernt", value: "~2 Std." },
              ].map((fact) => (
                <div key={fact.label} className="text-center py-2">
                  <div className="text-xl font-['Playfair_Display'] font-bold text-[oklch(0.72_0.12_75)]">
                    {fact.value}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-white/45 mt-0.5">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className="flex flex-col gap-5">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={(el) => { itemRefs.current[index + 1] = el; }}
                className="reveal flex gap-5 p-6 rounded-sm bg-[oklch(0.14_0.025_240/0.80)] border border-white/10 backdrop-blur-sm hover:border-[oklch(0.72_0.12_75/0.4)] transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-sm bg-[oklch(0.72_0.12_75/0.15)] flex items-center justify-center">
                  <value.icon size={20} className="text-[oklch(0.72_0.12_75)]" />
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
