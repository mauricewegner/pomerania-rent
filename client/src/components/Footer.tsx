/* =============================================================
   POMERANIA RENT – Footer
   Haff Noir: Elegant, minimalistisch
   ============================================================= */
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.11_0.02_240)] border-t border-white/8">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img
              src="/manus-storage/logo_transparent_767deb0e.png"
              alt="Pomerania Rent"
              className="h-24 w-auto object-contain mb-4"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Exklusiver Fahrzeug- und Wassersportverleih in Vorpommern
              am Stettiner Haff.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Mail, href: "mailto:info@pomerania-rent.de", label: "E-Mail" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-[oklch(0.72_0.12_75)] hover:border-[oklch(0.72_0.12_75/0.4)] transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)] mb-4 font-semibold">
              Navigation
            </h5>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Fahrzeuge", href: "#fahrzeuge" },
                { label: "Wassersport", href: "#wassersport" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-sm text-white/45 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)] mb-4 font-semibold">
              Rechtliches
            </h5>
            <nav className="flex flex-col gap-2.5">
              {["Impressum", "Datenschutz", "AGB"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-white/45 hover:text-white/80 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-6 p-4 rounded-sm bg-[oklch(0.19_0.03_240)] border border-white/8">
              <p className="text-xs text-white/40 leading-relaxed">
                Pomerania Rent<br />
                Vorpommern · Stettiner Haff<br />
                info@pomerania-rent.de
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} Pomerania Rent. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-white/20">
            Mobilität & Abenteuer an der Haffküste
          </p>
        </div>
      </div>
    </footer>
  );
}
