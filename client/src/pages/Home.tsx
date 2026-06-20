/* =============================================================
   POMERANIA RENT – Home Page
   Haff Noir Design: Alle Sektionen zusammengeführt
   ============================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import WaterSection from "@/components/WaterSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0.025_240)]">
      <Navbar />
      <main>
        <HeroSection />
        <FleetSection />
        <WaterSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
