import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FAQSection } from "@/components/FAQSection";
import { RealStoriesSection } from "@/components/RealStoriesSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <RealStoriesSection />
      <FAQSection />
      <FloatingContactButtons />
      <div id="contact" className="sr-only">Liên hệ VIETHEALTH</div>
    </>
  );
}