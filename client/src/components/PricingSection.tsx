/* =============================================================
   POMERANIA RENT – Pricing Section
   Haff Noir: Dramatisch, klare Preistabellen, elegant
   ============================================================= */
import { Car, Zap, Waves, Info } from "lucide-react";

interface PriceRow {
  label: string;
  price: string;
  km?: string;
  highlight?: boolean;
}

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  rows: PriceRow[];
  deposit?: string;
  note?: string;
  saleNote?: string;
  accent?: boolean;
}

function ProductCard({
  icon,
  title,
  subtitle,
  rows,
  deposit,
  note,
  saleNote,
  accent,
}: ProductCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-sm overflow-hidden border ${
        accent
          ? "border-[oklch(0.72_0.12_75)] bg-[oklch(0.13_0.025_240)]"
          : "border-white/10 bg-[oklch(0.11_0.020_240)]"
      }`}
    >
      {accent && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[oklch(0.72_0.12_75)]" />
      )}

      {/* Header */}
      <div className="px-6 pt-7 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`p-2 rounded-sm ${
              accent
                ? "bg-[oklch(0.72_0.12_75/0.15)] text-[oklch(0.72_0.12_75)]"
                : "bg-white/5 text-white/60"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-white">
              {title}
            </h3>
            <p className="text-xs text-white/50 tracking-wider uppercase mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Price Rows */}
      <div className="flex-1 px-6 py-5 space-y-1">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-3 border-b border-white/5 last:border-0 ${
              row.highlight ? "bg-[oklch(0.72_0.12_75/0.06)] -mx-2 px-2 rounded-sm" : ""
            }`}
          >
            <div>
              <span className="text-sm font-medium text-white/80">{row.label}</span>
              {row.km && (
                <span className="ml-2 text-xs text-white/35 font-['DM_Sans']">
                  inkl. {row.km}
                </span>
              )}
            </div>
            <div className="text-right">
              <span
                className={`text-lg font-bold font-['Playfair_Display'] ${
                  row.highlight
                    ? "text-[oklch(0.72_0.12_75)]"
                    : "text-white"
                }`}
              >
                {row.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="px-6 pb-6 space-y-3">
        {note && (
          <div className="flex items-start gap-2 bg-[oklch(0.72_0.12_75/0.08)] border border-[oklch(0.72_0.12_75/0.25)] rounded-sm p-3">
            <Info className="w-4 h-4 text-[oklch(0.72_0.12_75)] mt-0.5 shrink-0" />
            <p className="text-xs text-white/70 leading-relaxed">{note}</p>
          </div>
        )}
        {deposit && (
          <div className="flex items-center justify-between text-xs text-white/40 pt-1">
            <span>Kaution</span>
            <span className="font-semibold text-white/60">{deposit}</span>
          </div>
        )}
        {saleNote && (
          <p className="text-xs text-[oklch(0.72_0.12_75)/0.8] italic border-t border-white/5 pt-3">
            {saleNote}
          </p>
        )}
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="preise"
      className="py-24 bg-[oklch(0.09_0.020_240)] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(1 0 0) 40px, oklch(1 0 0) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(1 0 0) 40px, oklch(1 0 0) 41px)",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
              Transparente Preise
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Tarife
          </h2>
          <p className="text-white/50 font-['DM_Sans'] max-w-xl">
            Alle Preise verstehen sich inklusive Versicherung. Kilometerüberschreitungen
            werden nach Vereinbarung berechnet.
          </p>
        </div>

        {/* Fahrzeuge */}
        <div className="mb-6">
          <h3 className="text-xs font-medium tracking-[0.3em] uppercase text-white/30 mb-5 font-['DM_Sans']">
            Fahrzeuge
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Corvette */}
            <ProductCard
              accent
              icon={<Car className="w-5 h-5" />}
              title="Corvette Stingray"
              subtitle="1974 · V8 · Schwarz"
              rows={[
                { label: "Tag", price: "300 €", km: "300 km" },
                {
                  label: "Wochenende",
                  price: "450 €",
                  km: "450 km",
                  highlight: true,
                },
                { label: "Woche", price: "900 €", km: "1.200 km" },
              ]}
              deposit="2.000 €"
              note="Gäste unserer Ferienwohnungen erhalten 150 € Rabatt auf den Wochenendpreis."
              saleNote="Kauf auf Anfrage möglich – sprechen Sie uns an."
            />

            {/* EQC */}
            <ProductCard
              icon={<Zap className="w-5 h-5" />}
              title="Mercedes EQC"
              subtitle="2022 · Elektro · Silber"
              rows={[
                { label: "Tag", price: "250 €", km: "300 km" },
                {
                  label: "Wochenende",
                  price: "350 €",
                  km: "600 km",
                  highlight: true,
                },
                { label: "Woche", price: "700 €", km: "1.500 km" },
              ]}
              deposit="1.500 €"
              saleNote="Kauf auf Anfrage möglich – sprechen Sie uns an."
            />
          </div>
        </div>

        {/* Wassersport */}
        <div>
          <h3 className="text-xs font-medium tracking-[0.3em] uppercase text-white/30 mb-5 font-['DM_Sans']">
            Wassersport
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* SUP Standard */}
            <ProductCard
              icon={<Waves className="w-5 h-5" />}
              title="SUP Board"
              subtitle="Stand-Up-Paddleboard · klassisch"
              rows={[
                { label: "Stunde", price: "20 €" },
                { label: "Tag", price: "40 €", highlight: true },
              ]}
              saleNote="Kauf auf Anfrage möglich – sprechen Sie uns an."
            />

            {/* SUP Elektro */}
            <ProductCard
              accent
              icon={<Zap className="w-5 h-5" />}
              title="SUP mit Elektrojetantrieb"
              subtitle="E-Jet · Powered SUP"
              rows={[
                { label: "Stunde", price: "40 €" },
                { label: "Tag", price: "80 €", highlight: true },
              ]}
              saleNote="Kauf auf Anfrage möglich – sprechen Sie uns an."
            />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex items-start gap-3 bg-white/3 border border-white/8 rounded-sm p-5">
          <Info className="w-5 h-5 text-white/30 mt-0.5 shrink-0" />
          <p className="text-sm text-white/40 font-['DM_Sans'] leading-relaxed">
            Alle Preise in Euro inkl. MwSt. Für Langzeitmieten, Gruppenangebote oder
            individuelle Pakete kontaktieren Sie uns direkt. Wir erstellen Ihnen gerne
            ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>
    </section>
  );
}
