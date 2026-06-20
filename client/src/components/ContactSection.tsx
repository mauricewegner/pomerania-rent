/* =============================================================
   POMERANIA RENT – Contact Section
   Haff Noir: Kontaktformular + Infos
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const rentalOptions = [
  "Corvette Stingray 1974",
  "Mercedes EQC 2022",
  "Jetski",
  "Surfbrett / SUP",
  "Mehrere Produkte",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 bg-[oklch(0.17_0.028_240)] relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.12 75) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div
          ref={sectionRef}
          className="reveal grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
                Kontakt
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bereit für
              <br />
              <em className="italic text-[oklch(0.72_0.12_75)]">Ihr Abenteuer?</em>
            </h2>
            <p className="text-white/65 leading-relaxed mb-10">
              Schreiben Sie uns – wir melden uns innerhalb von 24 Stunden zurück
              und klären alle Details für Ihre Reservierung.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "+49 (0) XXX XXX XXX",
                  href: "tel:+49",
                },
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: "info@pomerania-rent.de",
                  href: "mailto:info@pomerania-rent.de",
                },
                {
                  icon: MapPin,
                  label: "Standort",
                  value: "Stettiner Haff, Vorpommern",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[oklch(0.72_0.12_75/0.1)] flex items-center justify-center group-hover:bg-[oklch(0.72_0.12_75/0.2)] transition-colors">
                    <item.icon size={18} className="text-[oklch(0.72_0.12_75)]" />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase text-white/40 mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="p-5 rounded-sm bg-[oklch(0.19_0.03_240)] border border-white/8">
              <h4 className="font-['Playfair_Display'] text-base font-semibold text-white mb-3">
                Verfügbarkeit
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Montag – Freitag", time: "09:00 – 18:00 Uhr" },
                  { day: "Samstag – Sonntag", time: "08:00 – 20:00 Uhr" },
                  { day: "Feiertage", time: "Nach Vereinbarung" },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between">
                    <span className="text-white/50">{row.day}</span>
                    <span className="text-white/80">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[oklch(0.19_0.03_240)] border border-white/8 rounded-sm p-6 md:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={48} className="text-[oklch(0.72_0.12_75)] mb-4" />
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3">
                  Vielen Dank!
                </h3>
                <p className="text-white/60 max-w-sm">
                  Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb
                  von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-[oklch(0.72_0.12_75/0.5)] text-[oklch(0.72_0.12_75)] text-sm font-medium rounded-sm hover:bg-[oklch(0.72_0.12_75/0.1)] transition-colors"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-2">
                  Reservierungsanfrage
                </h3>

                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-white/50 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="w-full px-4 py-2.5 bg-[oklch(0.14_0.025_240)] border border-white/10 rounded-sm text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/0.6)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-white/50 mb-1.5">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className="w-full px-4 py-2.5 bg-[oklch(0.14_0.025_240)] border border-white/10 rounded-sm text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/0.6)] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/50 mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+49 ..."
                    className="w-full px-4 py-2.5 bg-[oklch(0.14_0.025_240)] border border-white/10 rounded-sm text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/0.6)] transition-colors"
                  />
                </div>

                {/* Product */}
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/50 mb-1.5">
                    Gewünschtes Produkt *
                  </label>
                  <select
                    name="product"
                    required
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[oklch(0.14_0.025_240)] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/0.6)] transition-colors appearance-none"
                  >
                    <option value="" disabled>Bitte wählen...</option>
                    {rentalOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[oklch(0.14_0.025_240)]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/50 mb-1.5">
                    Gewünschter Zeitraum *
                  </label>
                  <input
                    type="text"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    placeholder="z.B. 15.07. – 17.07.2025"
                    className="w-full px-4 py-2.5 bg-[oklch(0.14_0.025_240)] border border-white/10 rounded-sm text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/0.6)] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/50 mb-1.5">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Weitere Wünsche oder Fragen..."
                    rows={3}
                    className="w-full px-4 py-2.5 bg-[oklch(0.14_0.025_240)] border border-white/10 rounded-sm text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/0.6)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 bg-[oklch(0.72_0.12_75)] text-[oklch(0.14_0.025_240)] font-semibold tracking-wider uppercase text-sm hover:bg-[oklch(0.82_0.09_75)] transition-all duration-200 rounded-sm active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Anfrage absenden
                </button>

                <p className="text-xs text-white/30 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
