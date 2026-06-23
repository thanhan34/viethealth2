import type { Metadata } from "next";
import { ContactCTASection } from "@/components/ContactCTASection";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductsIndexClient } from "@/components/products-page/ProductsIndexClient";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Sản phẩm chỉnh hình & chân tay giả | VietHealth",
  description:
    "Khám phá các giải pháp chân giả dưới gối, chân giả trên gối, tay giả, nẹp chỉnh hình và lót bàn chân tại VietHealth. Thiết kế cá nhân hóa theo từng nhu cầu vận động.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-14 md:pt-[86px]">
        <ProductsIndexClient products={products} />
        <ContactCTASection />
      </main>
      <Footer />
      <FloatingContactButtons />
      <div id="contact" className="sr-only">Liên hệ VIETHEALTH</div>
    </>
  );
}
