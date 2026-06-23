"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bone,
  Calendar,
  CheckCircle2,
  Filter,
  Footprints,
  Hand,
  MessageCircle,
  PackageCheck,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/types/product";

type ProductGroupKey = "all" | "Chân dưới" | "Chân trên" | "Tay giả" | "Nẹp chỉnh hình" | "Lót bàn chân";

type ProductGroupConfig = {
  key: Exclude<ProductGroupKey, "all">;
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  heroImage: string;
};

const fallbackProductImage = "/images/products/default-product.png";
// TODO: Đặt ảnh sản phẩm thật vào /public/images/products theo đúng các đường dẫn trong data/products.ts.

const productGroups: ProductGroupConfig[] = [
  {
    key: "Chân dưới",
    id: "chan-duoi",
    title: "Chân dưới",
    description: "Các giải pháp chân giả dưới gối hỗ trợ đi lại hằng ngày, tăng sự ổn định, thoải mái và tự tin khi sinh hoạt.",
    icon: Footprints,
    heroImage: "/images/products/chan-duoi.png",
  },
  {
    key: "Chân trên",
    id: "chan-tren",
    title: "Chân trên",
    description: "Các giải pháp chân giả trên gối hỗ trợ kiểm soát khớp gối, tăng độ an toàn và tối ưu dáng đi theo từng mức độ vận động.",
    icon: Activity,
    heroImage: "/images/products/chan-tren.png",
  },
  {
    key: "Tay giả",
    id: "tay-gia",
    title: "Tay giả",
    description: "Các giải pháp tay giả giúp cải thiện thẩm mỹ, hỗ trợ sinh hoạt và tăng tính độc lập trong cuộc sống hằng ngày.",
    icon: Hand,
    heroImage: "/images/products/tay-gia.png",
  },
  {
    key: "Nẹp chỉnh hình",
    id: "nep-chinh-hinh",
    title: "Nẹp chỉnh hình",
    description: "Nẹp chỉnh hình được thiết kế theo từng người nhằm hỗ trợ ổn định khớp, cải thiện trục cơ thể và phục hồi khả năng vận động.",
    icon: Bone,
    heroImage: "/images/products/nep-chinh-hinh.png",
  },
  {
    key: "Lót bàn chân",
    id: "lot-ban-chan",
    title: "Lót bàn chân",
    description: "Lót chỉnh hình hỗ trợ nâng đỡ vòm bàn chân, cải thiện phân bố áp lực và điều chỉnh trục bàn chân – cổ chân – chi dưới.",
    icon: ShieldCheck,
    heroImage: "/images/products/lot-ban-chan.png",
  },
];

const tabs: Array<{ key: ProductGroupKey; label: string; icon: LucideIcon }> = [
  { key: "all", label: "Tất cả", icon: PackageCheck },
  { key: "Chân dưới", label: "Chân dưới", icon: Footprints },
  { key: "Chân trên", label: "Chân trên", icon: Activity },
  { key: "Tay giả", label: "Tay giả", icon: Hand },
  { key: "Nẹp chỉnh hình", label: "Nẹp chỉnh hình", icon: Bone },
  { key: "Lót bàn chân", label: "Lót bàn chân", icon: ShieldCheck },
];

function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackProductImage;
      }}
      className={className}
    />
  );
}

export function ProductsPageHero() {
  const trustItems = [
    { label: "Thiết kế cá nhân hóa", icon: Settings },
    { label: "Chuyên gia chỉnh hình", icon: Star },
    { label: "Đồng hành sau lắp", icon: CheckCircle2 },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(105deg,#FFFFFF_0%,#F7FBFC_50%,#F3FAFC_100%)] pb-14 pt-12 md:pb-[70px] md:pt-20">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-viet-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 hidden h-80 w-80 rounded-full bg-viet-teal/10 blur-3xl md:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-9 px-4 md:grid-cols-[1.02fr_0.98fr] md:items-center md:gap-14 md:px-8 lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-viet-teal shadow-[0_8px_22px_rgba(6,75,95,0.06)] md:text-[12px]">
            <PackageCheck className="h-4 w-4 text-viet-cyan" strokeWidth={2.3} />
            SẢN PHẨM &amp; GIẢI PHÁP
          </div>

          <h1 className="mt-5 max-w-[700px] text-[34px] font-black leading-[1.08] tracking-[-0.055em] text-viet-text min-[390px]:text-[38px] md:text-[54px] lg:text-[58px]">
            Giải pháp chỉnh hình phù hợp cho <span className="text-viet-teal">từng nhu cầu</span>
          </h1>

          <p className="mt-5 max-w-[650px] text-[15.5px] font-medium leading-[1.75] text-[#41545C] md:text-[18px]">
            VietHealth cung cấp các giải pháp chân tay giả, nẹp chỉnh hình và lót bàn chân được thiết kế theo tình trạng, mức độ vận động và nhu cầu sinh hoạt của từng người.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:flex">
            <a href="#contact" className="btn-primary h-12 rounded-[14px] px-6 text-[14px] font-black md:h-[54px] md:text-[15px]"><Calendar className="h-5 w-5" />Đặt lịch tư vấn</a>
            <a href="tel:0981123456" className="btn-secondary h-12 rounded-[14px] px-6 text-[14px] font-black md:h-[54px] md:text-[15px]"><Phone className="h-5 w-5" />Gọi tư vấn ngay</a>
          </div>

          <div className="mt-6 grid gap-2.5 text-[13px] font-bold text-viet-muted sm:grid-cols-3 md:max-w-[620px] md:text-[14px]">
            {trustItems.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-viet-teal" strokeWidth={2.4} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[300px] overflow-hidden rounded-[28px] border border-white bg-white p-4 shadow-[0_26px_70px_rgba(6,75,95,0.14)] min-[390px]:h-[330px] md:h-[520px] md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(56,191,209,0.18),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f3fafc_100%)]" />
            <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-3 md:gap-4">
              {productGroups.slice(0, 4).map((group, index) => (
                <div key={group.key} className={`relative overflow-hidden rounded-[18px] border border-viet-border bg-white/85 shadow-[0_10px_28px_rgba(6,75,95,0.055)] ${index === 0 ? "row-span-2" : ""}`}>
                  <ProductImage src={group.heroImage} alt={group.title} className="h-full w-full object-contain p-3 md:p-5" />
                  <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-black text-viet-text shadow-[0_8px_18px_rgba(6,75,95,0.08)] backdrop-blur md:text-[11px]">{group.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -left-2 top-5 rounded-2xl border border-viet-border bg-white/95 px-3.5 py-2 text-[12px] font-black text-viet-text shadow-[0_12px_30px_rgba(6,75,95,0.08)] backdrop-blur md:-left-5 md:top-8 md:text-[13px]">
            5 nhóm sản phẩm chính
          </div>
          <div className="absolute -bottom-3 right-4 rounded-2xl bg-primary-gradient px-3.5 py-2 text-[12px] font-black text-white shadow-button md:-bottom-4 md:right-8 md:text-[13px]">
            Tư vấn theo từng trường hợp
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCategoryTabs({ activeTab, onChange }: { activeTab: ProductGroupKey; onChange: (tab: ProductGroupKey) => void }) {
  return (
    <section className="sticky top-14 z-30 border-y border-viet-border/70 bg-[#F7FBFC]/85 py-3 backdrop-blur md:top-[86px] md:py-4">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto rounded-[18px] border border-viet-border bg-white p-2 shadow-[0_10px_28px_rgba(6,75,95,0.055)]">
          {tabs.map(({ key, label, icon: Icon }) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onChange(key)}
                className={`inline-flex h-11 shrink-0 snap-start items-center justify-center gap-2 rounded-xl px-4 text-[13px] font-black transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 md:text-[14px] ${active ? "bg-primary-gradient text-white shadow-button" : "bg-transparent text-viet-text hover:-translate-y-0.5 hover:bg-viet-pale hover:text-viet-teal"}`}
              >
                <Icon className="h-4 w-4" strokeWidth={2.2} />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductListingCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col rounded-[22px] border border-viet-border bg-white p-4 shadow-[0_10px_28px_rgba(6,75,95,0.055)] transition duration-300 ease-out hover:-translate-y-1 hover:border-viet-teal/35 hover:shadow-[0_22px_52px_rgba(6,75,95,0.12)] md:p-6">
      <div className="relative h-[180px] overflow-hidden rounded-[18px] bg-[#F7FBFC] md:h-[220px]">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(56,191,209,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(56,191,209,0.12)_1px,transparent_1px)] [background-size:30px_30px]" />
        <ProductImage src={product.image} alt={product.title} className="relative h-full w-full object-contain p-5 transition duration-300 group-hover:scale-[1.03]" />
      </div>

      <div className="mt-5 inline-flex w-fit items-center rounded-full bg-viet-pale px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-viet-teal">
        {product.category}
      </div>
      <h3 className="mt-3 text-[20px] font-black leading-[1.18] tracking-[-0.035em] text-viet-text md:text-[24px]">{product.title}</h3>
      <p className="mt-3 text-[14px] font-medium leading-[1.65] text-[#41545C] md:text-[15px]">{product.summary}</p>

      <div className="mt-5 flex gap-3 rounded-[14px] border border-viet-border bg-viet-pale p-4">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-viet-teal" strokeWidth={2.3} />
        <p className="text-[14px] font-semibold leading-[1.6] text-viet-text"><span className="font-black text-viet-teal">Phù hợp: </span>{product.suitableFor}</p>
      </div>

      <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <Link href={`/san-pham/${product.slug}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-primary-gradient px-4 text-[14px] font-black text-white shadow-button transition duration-200 hover:-translate-y-0.5 hover:shadow-float focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/30 active:translate-y-0.5">
          Xem chi tiết <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2.4} />
        </Link>
        <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] border border-viet-teal/70 bg-white px-4 text-[14px] font-black text-viet-teal shadow-[0_10px_26px_rgba(0,122,138,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-viet-teal hover:bg-viet-pale focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 active:translate-y-0.5">
          Tư vấn sản phẩm này
        </a>
      </div>
    </article>
  );
}

export function ProductGroupSection({ group, products, index }: { group: ProductGroupConfig; products: Product[]; index: number }) {
  const Icon = group.icon;
  const isEven = index % 2 === 1;

  return (
    <section id={group.id} className={`scroll-mt-36 py-14 md:py-[72px] ${isEven ? "bg-[#F7FBFC]" : "bg-white"}`}>
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-5 md:mb-11 md:flex-row md:items-start md:gap-6">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-viet-pale text-viet-teal shadow-[0_10px_24px_rgba(0,122,138,0.08)] md:h-16 md:w-16">
            <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2} />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-viet-teal shadow-[0_8px_22px_rgba(6,75,95,0.05)] md:text-[12px]">
              <span className="h-2 w-2 rounded-full bg-viet-cyan" />
              NHÓM SẢN PHẨM
            </div>
            <h2 className="mt-3 text-[30px] font-black leading-[1.12] tracking-[-0.045em] text-viet-text md:text-[42px]">{group.title}</h2>
            <p className="mt-3 max-w-[720px] text-[15px] font-medium leading-[1.75] text-viet-muted md:text-[17px]">{group.description}</p>
          </div>
        </div>

        <div className={`grid gap-5 md:grid-cols-2 md:gap-6 ${products.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {products.map((product) => <ProductListingCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  );
}

export function ProductConsultationCTA() {
  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="relative mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#003847_0%,#004D63_52%,#00313F_100%)] p-6 text-white shadow-[0_26px_70px_rgba(0,63,82,0.24)] md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-10 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:42px_42px]" />
        <svg className="pointer-events-none absolute left-1/2 top-1/2 h-[120px] w-[980px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]" viewBox="0 0 980 130" fill="none" aria-hidden="true">
          <path d="M0 68H165L184 68L202 42L222 96L245 28L268 68H410L432 68L448 51L465 82L486 34L510 68H654L676 68L693 49L711 80L734 38L758 68H980" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <Search className="h-4 w-4 text-[#7EDFEA]" /> TƯ VẤN LỰA CHỌN
          </div>
          <h2 className="mt-5 text-[28px] font-black leading-[1.12] tracking-[-0.045em] text-white md:text-[42px]">Chưa biết sản phẩm nào phù hợp với bạn?</h2>
          <p className="mt-4 max-w-[650px] text-[15px] font-medium leading-[1.75] text-[#B9D7DE] md:text-[17px]">
            Mỗi tình trạng vận động sẽ cần một giải pháp khác nhau. Đội ngũ VietHealth sẽ thăm khám, lắng nghe nhu cầu và tư vấn phương án phù hợp nhất.
          </p>
        </div>

        <div className="relative z-10 mt-7 grid gap-3 md:mt-0">
          <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-white px-6 text-[14px] font-black text-viet-text shadow-[0_18px_34px_rgba(255,255,255,0.16)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/35 active:translate-y-0.5 md:h-[54px]"><Calendar className="h-5 w-5 text-viet-teal" />Đặt lịch tư vấn</a>
          <a href="tel:0981123456" className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] border border-white/25 bg-white/10 px-6 text-[14px] font-black text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/35 active:translate-y-0.5 md:h-[54px]"><Phone className="h-5 w-5" />Gọi ngay 0981 123 456</a>
          <a href="#" className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] border border-white/25 bg-white/10 px-6 text-[14px] font-black text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/35 active:translate-y-0.5 md:h-[54px]"><MessageCircle className="h-5 w-5" />Nhắn Zalo</a>
        </div>
      </div>
    </section>
  );
}

export function ProductsIndexClient({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState<ProductGroupKey>("all");

  const visibleGroups = useMemo(() => {
    return activeTab === "all" ? productGroups : productGroups.filter((group) => group.key === activeTab);
  }, [activeTab]);

  return (
    <>
      <ProductsPageHero />
      <ProductCategoryTabs activeTab={activeTab} onChange={setActiveTab} />
      <div className="bg-white">
        <div className="mx-auto flex w-full max-w-[1240px] items-center gap-2 px-4 pb-1 pt-6 text-[13px] font-bold text-viet-muted md:px-8 md:pt-8">
          <Filter className="h-4 w-4 text-viet-teal" />
          {activeTab === "all" ? "Đang hiển thị tất cả nhóm sản phẩm" : `Đang lọc nhóm ${activeTab}`}
        </div>
      </div>
      {visibleGroups.map((group, index) => (
        <ProductGroupSection key={group.key} group={group} products={products.filter((product) => product.group === group.key)} index={index} />
      ))}
      <ProductConsultationCTA />
    </>
  );
}
