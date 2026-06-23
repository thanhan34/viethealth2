import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";
import { RealStoriesSection } from "@/components/RealStoriesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <WhyChooseSection />
      <RealStoriesSection />
      <FAQSection />
      <ContactCTASection />
      <Footer />
      <FloatingContactButtons />
      <div id="contact" className="sr-only">Liên hệ VIETHEALTH</div>
    </>
  );
}