import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Activity,
  ArrowLeft,
  Bone,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Footprints,
  Hand,
  MessageCircle,
  PackageCheck,
  Phone,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import type { Product, ProductFeatureIcon } from "@/types/product";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const fallbackImage = "/images/products/default-product.png";
// TODO: Đặt ảnh sản phẩm thật đúng các đường dẫn trong /public/images/products.
// Trong khi chưa có ảnh thật, Next/Image sẽ tự dùng fallback khi ảnh product.image lỗi tải ở runtime.

const featureIconMap: Record<ProductFeatureIcon, LucideIcon> = {
  Activity,
  Footprints,
  Hand,
  Bone,
  Settings,
  Wrench,
  Star,
  Users,
  Clock,
  PackageCheck,
  ShieldCheck,
};

const processSteps = [
  {
    title: "Thăm khám & lắng nghe nhu cầu",
    description: "Đánh giá tình trạng, mức độ vận động và mong muốn của người sử dụng.",
  },
  {
    title: "Đo đạc & lấy thông số cá nhân",
    description: "Ghi nhận số đo, hình dạng chi thể và các yếu tố ảnh hưởng đến thiết kế.",
  },
  {
    title: "Thiết kế giải pháp phù hợp",
    description: "Lựa chọn socket, linh kiện, vật liệu và cấu hình phù hợp với từng trường hợp.",
  },
  {
    title: "Chế tác & căn chỉnh",
    description: "Sản phẩm được chế tác, thử nghiệm và điều chỉnh để tối ưu độ vừa vặn.",
  },
  {
    title: "Hướng dẫn sử dụng & theo dõi sau lắp",
    description: "Hướng dẫn tập luyện, bảo quản và hỗ trợ điều chỉnh khi cần.",
  },
];

const productFaqs = [
  {
    question: "Sản phẩm này có cần thiết kế riêng không?",
    answer:
      "Có. Hầu hết thiết bị chỉnh hình và chân tay giả cần được đo đạc, thiết kế và căn chỉnh theo từng người để đảm bảo độ vừa vặn, thoải mái và hiệu quả sử dụng.",
  },
  {
    question: "Thời gian hoàn thiện thường mất bao lâu?",
    answer:
      "Thời gian hoàn thiện phụ thuộc vào loại sản phẩm, mức độ phức tạp và tình trạng của từng người. VietHealth sẽ tư vấn cụ thể sau khi thăm khám và đo đạc.",
  },
  {
    question: "Có cần tái khám hoặc điều chỉnh sau khi sử dụng không?",
    answer:
      "Có. Sau khi lắp thiết bị, người sử dụng thường cần theo dõi, tập làm quen và điều chỉnh để đạt cảm giác thoải mái nhất.",
  },
  {
    question: "VietHealth có hỗ trợ bảo hành và bảo trì không?",
    answer:
      "Có. VietHealth hỗ trợ kiểm tra, bảo hành, bảo trì và tư vấn sử dụng trong quá trình đồng hành cùng khách hàng.",
  },
];

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Không tìm thấy sản phẩm | VietHealth" };
  }

  return {
    title: `${product.title} | VietHealth`,
    description: product.summary,
    openGraph: {
      title: `${product.title} | VietHealth`,
      description: product.summary,
      images: [{ url: product.image }],
    },
  };
}

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-11">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-viet-teal shadow-[0_8px_22px_rgba(6,75,95,0.06)]">
          <span className="h-2 w-2 rounded-full bg-viet-cyan" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-[28px] font-black leading-[1.12] tracking-[-0.04em] text-viet-text md:text-[44px]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-[14.5px] font-medium leading-[1.7] text-[#41545C] md:text-[17px]">{description}</p> : null}
    </div>
  );
}

function ProductImage({ product, className }: { product: Product; className?: string }) {
  return (
    <Image
      src={product.image || fallbackImage}
      alt={product.title}
      fill
      sizes="(max-width: 767px) 92vw, (max-width: 1199px) 45vw, 540px"
      className={`object-contain ${className ?? ""}`}
      priority
    />
  );
}

function Breadcrumb({ product }: { product: Product }) {
  return (
    <nav className="mx-auto w-full max-w-[1180px] px-4 pt-[18px] text-[13px] font-semibold text-viet-muted md:px-6 md:pt-7 md:text-[14px]" aria-label="Breadcrumb">
      <ol className="flex min-w-0 items-center gap-1.5 overflow-hidden whitespace-nowrap">
        <li><Link href="/" className="transition hover:text-viet-teal">Trang chủ</Link></li>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-viet-cyan" />
        <li><Link href="/san-pham" className="transition hover:text-viet-teal">Sản phẩm</Link></li>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-viet-cyan" />
        <li className="truncate text-viet-text">{product.title}</li>
      </ol>
    </nav>
  );
}

function ProductHero({ product }: { product: Product }) {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(105deg,#FFFFFF_0%,#F7FBFC_50%,#F3FAFC_100%)] pb-14 pt-8 md:pb-[70px] md:pt-10">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-viet-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-16 hidden text-viet-cyan/15 md:block" aria-hidden="true">
        <div className="h-28 w-28 border border-current [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]" />
        <div className="ml-20 mt-2 h-16 w-16 border border-current [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-8 px-4 md:grid-cols-[1.04fr_0.96fr] md:items-center md:gap-14 md:px-6">
        <div>
          <Link href="/san-pham" className="mb-5 inline-flex items-center gap-2 text-[13px] font-black text-viet-teal transition hover:text-viet-text md:hidden">
            <ArrowLeft className="h-4 w-4" /> Quay lại sản phẩm
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-viet-teal shadow-[0_8px_22px_rgba(6,75,95,0.06)] md:text-[12px]">
            <PackageCheck className="h-4 w-4 text-viet-cyan" strokeWidth={2.3} />
            SẢN PHẨM VIETHEALTH
          </div>
          <p className="mt-5 text-[13px] font-black uppercase tracking-[0.16em] text-viet-cyan md:text-[14px]">{product.category}</p>
          <h1 className="mt-3 max-w-[680px] text-[34px] font-black leading-[1.08] tracking-[-0.05em] text-viet-text min-[390px]:text-[37px] md:text-[54px]">
            {product.title}
          </h1>
          <p className="mt-5 max-w-[640px] text-[15px] font-medium leading-[1.75] text-[#41545C] md:text-[18px]">
            {product.summary}
          </p>
          <div className="mt-6 flex gap-3 rounded-2xl border border-viet-teal/20 bg-white p-4 shadow-[0_12px_30px_rgba(6,75,95,0.06)] md:max-w-[640px]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-viet-teal" strokeWidth={2.3} />
            <p className="text-[14px] font-bold leading-[1.65] text-viet-text md:text-[15.5px]"><span className="text-viet-teal">Phù hợp:</span> {product.suitableFor}</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:flex">
            <a href="#contact" className="btn-primary h-12 rounded-[14px] px-6 text-[14px] font-black md:h-[54px] md:text-[15px]"><Calendar className="h-5 w-5" />Đặt lịch tư vấn</a>
            <a href="tel:0981123456" className="btn-secondary h-12 rounded-[14px] px-6 text-[14px] font-black md:h-[54px] md:text-[15px]"><Phone className="h-5 w-5" />Gọi tư vấn ngay</a>
            <a href="#" className="btn-secondary h-12 rounded-[14px] px-6 text-[14px] font-black sm:col-span-2 lg:hidden"><MessageCircle className="h-5 w-5" />Nhắn Zalo</a>
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_26px_70px_rgba(6,75,95,0.14)] md:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(56,191,209,0.18),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f3fafc_100%)]" />
            <div className="absolute inset-6 rounded-[22px] border border-viet-border/70" />
            <ProductImage product={product} />
            <div className="absolute left-4 top-4 rounded-2xl border border-viet-border bg-white/90 px-3.5 py-2 text-[12px] font-black text-viet-text shadow-[0_10px_26px_rgba(6,75,95,0.08)] backdrop-blur md:left-6 md:top-6">
              Thiết kế cá nhân hóa
            </div>
            <div className="absolute bottom-4 right-4 rounded-2xl bg-primary-gradient px-3.5 py-2 text-[12px] font-black text-white shadow-button md:bottom-6 md:right-6">
              Tư vấn bởi chuyên gia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ product }: { product: Product }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] gap-9 px-4 md:grid-cols-[minmax(0,1fr)_360px] md:gap-10 md:px-6">
        <article>
          <h2 className="text-[28px] font-black leading-[1.12] tracking-[-0.035em] text-viet-text md:text-[42px]">Tổng quan sản phẩm</h2>
          <div className="mt-6 space-y-5 text-[15px] font-medium leading-[1.85] text-[#41545C] md:text-[17px]">
            {product.longDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 rounded-[22px] border border-viet-border bg-viet-pale p-5 shadow-[0_12px_30px_rgba(6,75,95,0.055)] md:p-7">
            <ShieldCheck className="h-8 w-8 text-viet-teal" strokeWidth={2.1} />
            <p className="mt-4 text-[18px] font-black leading-[1.45] text-viet-text md:text-[22px]">
              “Mỗi thiết bị được thiết kế theo tình trạng, mức độ vận động và nhu cầu sinh hoạt của từng người.”
            </p>
          </div>
        </article>

        <aside className="md:sticky md:top-[110px] md:self-start">
          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#003F52_0%,#007A8A_100%)] p-6 text-white shadow-[0_22px_52px_rgba(0,63,82,0.24)] md:p-7">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <Calendar className="relative h-9 w-9 text-[#7EDFEA]" />
            <h3 className="relative mt-5 text-[24px] font-black leading-tight tracking-[-0.03em]">Cần tư vấn sản phẩm này?</h3>
            <p className="relative mt-3 text-[14px] font-medium leading-[1.7] text-[#D4EEF3]">Đội ngũ VietHealth sẽ đánh giá tình trạng và gợi ý giải pháp phù hợp nhất cho bạn.</p>
            <div className="relative mt-6 grid gap-3">
              <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-white text-[14px] font-black text-viet-text transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/30 active:translate-y-0.5"><Calendar className="h-5 w-5 text-viet-teal" />Đặt lịch tư vấn</a>
              <a href="tel:0981123456" className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] border border-white/25 bg-white/10 text-[14px] font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/30 active:translate-y-0.5"><Phone className="h-5 w-5" />Gọi ngay</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FeaturesSection({ product }: { product: Product }) {
  return (
    <section className="bg-[#F7FBFC] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <SectionHeading eyebrow="GIẢI PHÁP CÁ NHÂN HÓA" title="Đặc điểm nổi bật" description="Các điểm mạnh được VietHealth tối ưu để sản phẩm vừa vặn, dễ sử dụng và đồng hành lâu dài." />
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {product.features.map((feature) => {
            const Icon = feature.icon ? featureIconMap[feature.icon] : CheckCircle2;
            return (
              <article key={feature.title} className="rounded-[18px] border border-viet-border bg-white p-5 shadow-[0_10px_28px_rgba(6,75,95,0.055)] transition duration-300 hover:-translate-y-1 hover:border-viet-teal/30 hover:shadow-[0_20px_46px_rgba(6,75,95,0.12)] md:p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-viet-pale text-viet-teal shadow-[0_8px_20px_rgba(0,122,138,0.08)]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-[18px] font-black leading-snug text-viet-text">{feature.title}</h3>
                <p className="mt-2.5 text-[14px] font-medium leading-[1.65] text-viet-muted">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SuitableSection({ product }: { product: Product }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <div className="grid overflow-hidden rounded-[24px] border border-viet-border bg-white shadow-[0_18px_48px_rgba(6,75,95,0.08)] md:grid-cols-[320px_1fr]">
          <div className="relative min-h-[210px] bg-[linear-gradient(135deg,#F3FAFC,#E7F7FA)] md:min-h-full">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(56,191,209,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(56,191,209,0.16)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute inset-8"><ProductImage product={product} className="p-2" /></div>
          </div>
          <div className="p-6 md:p-9">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-viet-teal text-white shadow-[0_12px_26px_rgba(0,122,138,0.18)]"><Users className="h-6 w-6" /></div>
            <h2 className="mt-5 text-[28px] font-black leading-[1.12] tracking-[-0.035em] text-viet-text md:text-[40px]">Sản phẩm phù hợp với ai?</h2>
            <div className="mt-5 flex gap-3 text-[15px] font-bold leading-[1.75] text-[#41545C] md:text-[16.5px]">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-viet-teal" />
              <p>{product.suitableFor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-viet-pale py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <SectionHeading eyebrow="QUY TRÌNH VIETHEALTH" title="Quy trình tư vấn và chế tác tại VietHealth" />
        <div className="relative grid gap-4 md:grid-cols-5 md:gap-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-[18px] border border-viet-border bg-white p-5 shadow-[0_10px_28px_rgba(6,75,95,0.055)] md:p-4 lg:p-5">
              <div className="mb-4 text-[28px] font-black leading-none text-viet-cyan md:text-[30px]">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="text-[16px] font-black leading-snug text-viet-text">{step.title}</h3>
              <p className="mt-2.5 text-[13.5px] font-medium leading-[1.6] text-viet-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedProductsSection({ product }: { product: Product }) {
  const relatedProducts = getRelatedProducts(product);
  if (relatedProducts.length === 0) return null;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <SectionHeading eyebrow="CÙNG NHÓM SẢN PHẨM" title="Sản phẩm liên quan" />
        <div className="grid gap-5 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link key={item.slug} href={`/san-pham/${item.slug}`} className="group overflow-hidden rounded-[20px] border border-viet-border bg-white shadow-[0_10px_28px_rgba(6,75,95,0.055)] transition duration-300 hover:-translate-y-1 hover:border-viet-teal/30 hover:shadow-[0_20px_46px_rgba(6,75,95,0.12)]">
              <div className="relative h-48 bg-viet-pale"><ProductImage product={item} className="p-6 transition duration-300 group-hover:scale-[1.03]" /></div>
              <div className="p-5">
                <p className="text-[12px] font-black uppercase tracking-[0.14em] text-viet-teal">{item.category}</p>
                <h3 className="mt-2 text-[21px] font-black leading-tight tracking-[-0.03em] text-viet-text">{item.title}</h3>
                <p className="mt-3 line-clamp-3 text-[14px] font-medium leading-[1.6] text-viet-muted">{item.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-black text-[#006A7A]">Xem chi tiết <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductFAQSection() {
  return (
    <section className="bg-[#F7FBFC] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[900px] px-4 md:px-6">
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <div className="space-y-3">
          {productFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-[18px] border border-viet-border bg-white p-5 shadow-[0_8px_22px_rgba(6,75,95,0.045)] open:border-viet-teal/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-black text-viet-text md:text-[18px]">
                {faq.question}
                <ChevronRight className="h-5 w-5 shrink-0 text-viet-teal transition group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-[14px] font-medium leading-[1.75] text-viet-muted md:text-[15.5px]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="pt-14 md:pt-[86px]">
        <Breadcrumb product={product} />
        <ProductHero product={product} />
        <OverviewSection product={product} />
        <FeaturesSection product={product} />
        <SuitableSection product={product} />
        <ProcessSection />
        <RelatedProductsSection product={product} />
        <ProductFAQSection />
        <ContactCTASection />
      </main>
      <Footer />
      <FloatingContactButtons />
      <div id="contact" className="sr-only">Liên hệ VIETHEALTH</div>
    </>
  );
}