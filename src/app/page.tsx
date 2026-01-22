import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MenuHighlights } from "@/components/MenuHighlights";
import { FullMenu } from "@/components/FullMenu";
import { Philosophy } from "@/components/Philosophy";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-full">
      <Navigation />
      <Hero />
      <Marquee />
      <MenuHighlights />
      <FullMenu />
      <Philosophy />
      <Locations />
      <Footer />
    </main>
  );
}
