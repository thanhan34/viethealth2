import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  Activity,
  ArrowRight,
  Bone,
  Footprints,
  Grid2X2,
  Hand,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import sp1 from "@/images/sanpham/sp1.png";
import sp2 from "@/images/sanpham/sp2.png";
import sp3 from "@/images/sanpham/sp3.png";
import sp4 from "@/images/sanpham/sp4.png";
import sp5 from "@/images/sanpham/sp5.png";
import sp6 from "@/images/sanpham/sp6.png";

type Product = {
  title: string;
  mobileTitle?: string;
  description: string;
  icon: LucideIcon;
  image: StaticImageData;
  imageAlt: string;
  imageFit?: "contain" | "cover";
};

const products: Product[] = [
  {
    title: "Chân giả dưới gối",
    mobileTitle: "Chân giả\ndưới gối",
    description: "Dành cho người mất chi dưới gối.",
    icon: Footprints,
    image: sp1,
    imageAlt: "Chân giả dưới gối VietHealth",
  },
  {
    title: "Chân giả trên gối",
    mobileTitle: "Chân giả\ntrên gối",
    description: "Dành cho người mất chi trên gối.",
    icon: Activity,
    image: sp2,
    imageAlt: "Chân giả trên gối VietHealth",
  },
  {
    title: "Tay giả",
    description: "Đa dạng mẫu mã, chức năng linh hoạt.",
    icon: Hand,
    image: sp3,
    imageAlt: "Tay giả chức năng VietHealth",
  },
  {
    title: "Nẹp chỉnh hình",
    mobileTitle: "Nẹp\nchỉnh hình",
    description: "Hỗ trợ điều trị cong vẹo, thoái hoá cột sống, thoát vị đĩa đệm.",
    icon: Shield,
    image: sp4,
    imageAlt: "Nẹp chỉnh hình cột sống VietHealth",
  },
  {
    title: "Nẹp chi",
    description: "Hỗ trợ cố định và phục hồi chi trên, chi dưới.",
    icon: Bone,
    image: sp5,
    imageAlt: "Nẹp chi chỉnh hình VietHealth",
  },
  {
    title: "Sửa chữa & bảo trì",
    mobileTitle: "Sửa chữa &\nbảo trì",
    description: "Kiểm tra, sửa chữa và bảo dưỡng định kỳ thiết bị chỉnh hình.",
    icon: Wrench,
    image: sp6,
    imageAlt: "Dịch vụ sửa chữa và bảo trì thiết bị chỉnh hình VietHealth",
    imageFit: "cover",
  },
];

function ProductImage({ product }: { product: Product }) {
  return (
    <Image
      src={product.image}
      alt={product.imageAlt}
      fill
      sizes="(max-width: 767px) 31vw, (max-width: 1023px) 44vw, 360px"
      className={`rounded-[12px] ${product.imageFit === "cover" ? "object-cover" : "object-contain"}`}
    />
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const mobileTitle = product.mobileTitle ?? product.title;

  return (
    <article className="group relative overflow-hidden rounded-[14px] border border-viet-border/95 bg-white shadow-[0_10px_28px_rgba(6,75,95,0.055)] transition duration-300 ease-out hover:-translate-y-1 hover:border-viet-teal/30 hover:shadow-[0_20px_46px_rgba(6,75,95,0.12)] md:min-h-[224px] md:rounded-[20px] md:p-5 lg:p-6">
      <div className="grid h-[190px] grid-rows-[55%_45%] md:h-full md:min-h-[176px] md:grid-cols-[48%_52%] md:grid-rows-1 md:items-center md:gap-5">
        <div className="relative h-full min-h-0 p-1.5 md:p-0">
          <ProductImage product={product} />
        </div>

        <div className="relative flex min-h-0 flex-col px-2 pb-2 pt-3 md:px-0 md:py-0">
          <div className="absolute -top-5 left-2 grid h-9 w-9 place-items-center rounded-full border border-viet-border bg-viet-teal text-white shadow-[0_8px_18px_rgba(0,122,138,0.18)] md:static md:mb-5 md:h-14 md:w-14 md:bg-white md:text-viet-teal md:shadow-[0_10px_24px_rgba(6,75,95,0.06)]">
            <Icon className="h-[17px] w-[17px] md:h-7 md:w-7" strokeWidth={1.8} />
          </div>

          <h3 className="whitespace-pre-line text-[12px] font-black leading-[1.14] tracking-[-0.02em] text-viet-text min-[390px]:text-[13px] md:whitespace-normal md:text-[24px] md:leading-[1.13] lg:text-[25px]">
            <span className="md:hidden">{mobileTitle}</span>
            <span className="hidden md:inline">{product.title}</span>
          </h3>
          <p className="mt-1.5 line-clamp-3 text-[9.5px] font-medium leading-[1.35] text-viet-muted min-[390px]:text-[10px] md:mt-3 md:line-clamp-none md:text-[15.5px] md:leading-[1.6] md:text-[#41545C]">
            {product.description}
          </p>

          <a
            href="#products"
            aria-label={`Xem chi tiết ${product.title}`}
            className="mt-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-viet-border bg-white text-viet-teal transition hover:border-viet-teal/50 hover:bg-viet-pale focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 md:h-auto md:w-auto md:justify-start md:gap-1.5 md:border-0 md:bg-transparent md:text-[15px] md:font-extrabold md:text-[#006A7A] md:hover:bg-transparent"
          >
            <span className="hidden md:inline">Xem chi tiết</span>
            <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_48%,#f3fafc_100%)] py-11 md:py-0 md:pb-20 md:pt-[90px]">
      <div className="pointer-events-none absolute left-8 top-20 hidden text-viet-cyan/15 md:block" aria-hidden="true">
        <div className="h-24 w-24 rotate-30 border border-current [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]" />
        <div className="ml-16 mt-2 h-20 w-20 border border-current [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]" />
      </div>
      <div className="pointer-events-none absolute right-10 top-28 hidden text-viet-cyan/15 md:block" aria-hidden="true">
        <div className="h-28 w-28 border border-current [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]" />
        <div className="ml-20 mt-1 h-16 w-16 border border-current [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-3 min-[390px]:px-4 md:px-8">
        <div className="mx-0 max-w-[95%] text-left md:mx-auto md:max-w-[850px] md:text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-transparent py-0 text-[9px] font-black uppercase tracking-[0.18em] text-viet-teal md:mb-5 md:bg-white/90 md:px-4 md:py-2.5 md:text-[14px] md:tracking-[0.16em] md:shadow-[0_8px_22px_rgba(6,75,95,0.06)]">
            <span className="h-[3px] w-5 rounded-full bg-viet-cyan md:h-2 md:w-2 md:rounded-full" />
            SẢN PHẨM &amp; DỊCH VỤ
          </div>

          <h2 className="text-[26px] font-black leading-[1.08] tracking-[-0.045em] text-viet-text min-[390px]:text-[27px] md:text-[46px] md:leading-[1.12] md:tracking-[-0.035em] lg:text-[48px]">
            <span className="md:hidden">Chọn sản phẩm<br />phù hợp với nhu cầu của bạn</span>
            <span className="hidden md:inline">Giải pháp phù hợp với nhu cầu của bạn</span>
          </h2>

          <p className="mt-2.5 text-[12.5px] font-medium leading-[1.55] text-viet-muted md:mx-auto md:mt-5 md:max-w-[760px] md:text-[17.5px] md:leading-[1.72] md:text-[#41545C]">
            <span className="md:hidden">Viethealth cung cấp đa dạng sản phẩm chỉnh hình được thiết kế riêng theo tình trạng và nhu cầu của từng người.</span>
            <span className="hidden md:inline">Viethealth cung cấp đa dạng các giải pháp chân tay giả, nẹp chỉnh hình và vật lý trị liệu – được thiết kế riêng theo tình trạng và nhu cầu của từng người.</span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>

        <div className="mt-3.5 flex md:mt-8 md:justify-center">
          <a
            href="#products"
            className="inline-flex h-11 w-full items-center justify-between rounded-[10px] border border-viet-teal/45 bg-white px-4 text-[13px] font-extrabold text-viet-text shadow-[0_8px_22px_rgba(6,75,95,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-viet-teal hover:bg-viet-pale focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 active:translate-y-0.5 md:h-14 md:w-auto md:justify-center md:gap-5 md:rounded-xl md:px-7 md:text-[15.5px]"
          >
            <Grid2X2 className="h-4 w-4 text-viet-teal md:h-5 md:w-5" strokeWidth={1.9} />
            <span>Xem tất cả sản phẩm &amp; dịch vụ</span>
            <ArrowRight className="h-4 w-4 text-viet-teal md:h-5 md:w-5" strokeWidth={2.1} />
          </a>
        </div>
      </div>
    </section>
  );
}