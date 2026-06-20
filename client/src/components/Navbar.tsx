/* =============================================================
   POMERANIA RENT – Navbar
   Haff Noir: Sticky, Blur-Backdrop, Gold-Akzente
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "Wassersport", href: "#wassersport" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.14_0.025_240/0.95)] backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-28 md:h-36">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 group"
        >
          <img
            src="/manus-storage/logo_lightblue2_924ef834.png"
            alt="Pomerania Rent Logo"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-[oklch(0.72_0.12_75)] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.72_0.12_75)] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#kontakt")}
            className="ml-4 px-5 py-2 text-sm font-semibold tracking-wider uppercase border border-[oklch(0.72_0.12_75)] text-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.72_0.12_75)] hover:text-[oklch(0.14_0.025_240)] transition-all duration-200 rounded-sm"
          >
            Reservieren
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.14_0.025_240/0.98)] backdrop-blur-xl border-t border-white/10">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium tracking-widest uppercase text-white/70 hover:text-[oklch(0.72_0.12_75)] transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#kontakt")}
              className="mt-2 px-5 py-3 text-sm font-semibold tracking-wider uppercase border border-[oklch(0.72_0.12_75)] text-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.72_0.12_75)] hover:text-[oklch(0.14_0.025_240)] transition-all duration-200 rounded-sm text-center"
            >
              Jetzt Reservieren
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
