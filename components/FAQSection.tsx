"use client";

import Image from "next/image";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Clapperboard,
  Footprints,
  Grid2X2,
  HelpCircle,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type FAQVideo = {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  videoUrl?: string;
  facebookUrl?: string;
};

type FAQCategory = {
  label: string;
  icon: LucideIcon;
};

const faqVideos: FAQVideo[] = [
  {
    id: 1,
    title: "Làm chân giả mất bao lâu?",
    description: "Quy trình và thời gian hoàn thiện một chân giả tại Viethealth.",
    duration: "0:45",
    category: "Chân tay giả",
    image: "/images/faq/faq-1.jpg",
  },
  {
    id: 2,
    title: "Mang chân giả có đau không?",
    description: "Cảm giác khi sử dụng và cách chúng tôi giúp bạn thoải mái nhất.",
    duration: "0:38",
    category: "Chân tay giả",
    image: "/images/faq/faq-2.jpg",
  },
  {
    id: 3,
    title: "Bao lâu thì nên thay chân giả mới?",
    description: "Dấu hiệu cần thay và khuyến nghị từ chuyên gia.",
    duration: "0:42",
    category: "Chân tay giả",
    image: "/images/faq/faq-3.jpg",
  },
  {
    id: 4,
    title: "Sản phẩm có được bảo hành không?",
    description: "Chính sách bảo hành và hỗ trợ sau bán hàng tại Viethealth.",
    duration: "0:36",
    category: "Chính sách & bảo hành",
    image: "/images/faq/faq-4.jpg",
  },
  {
    id: 5,
    title: "Chi phí làm chân giả khoảng bao nhiêu?",
    description: "Các yếu tố ảnh hưởng đến chi phí và bảng giá tham khảo.",
    duration: "0:41",
    category: "Chân tay giả",
    image: "/images/faq/faq-5.jpg",
  },
];

const categories: FAQCategory[] = [
  { label: "Tất cả", icon: Grid2X2 },
  { label: "Chân tay giả", icon: Footprints },
  { label: "Nẹp chỉnh hình", icon: Wrench },
  { label: "Phục hồi chức năng", icon: Users },
  { label: "Chính sách & bảo hành", icon: ShieldCheck },
];

const contactOptions = [
  {
    icon: Calendar,
    title: "Đặt lịch tư vấn trực tiếp",
    description: "Đặt lịch hẹn với chuyên gia tại trung tâm",
    href: "#contact",
  },
  {
    icon: Phone,
    title: "Gọi ngay cho chúng tôi",
    description: "0981 123 456\n(8:00 – 17:00, Thứ 2 – Thứ 7)",
    href: "tel:0981123456",
  },
  {
    icon: MessageCircle,
    title: "Chat với chuyên viên",
    description: "Nhận hỗ trợ nhanh chóng qua Messenger",
    href: "#",
  },
];

function QuestionBubbles() {
  return (
    <div className="pointer-events-none absolute right-[4%] top-0 hidden text-viet-cyan opacity-[0.11] md:block" aria-hidden="true">
      <HelpCircle className="h-[128px] w-[128px]" strokeWidth={1.8} />
      <div className="absolute left-[72px] top-[70px] h-[76px] w-[96px] rounded-[32px] border-[7px] border-current" />
    </div>
  );
}

function VideoPlayButton({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`grid place-items-center rounded-full border-2 border-white bg-black/20 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-200 group-hover:scale-105 ${
        small ? "h-10 w-10" : "h-[68px] w-[68px]"
      }`}
    >
      <Play className={small ? "h-[17px] w-[17px] translate-x-0.5 fill-white" : "h-7 w-7 translate-x-0.5 fill-white"} strokeWidth={1.8} />
    </span>
  );
}

function DesktopVideoCard({ video }: { video: FAQVideo }) {
  return (
    <button
      type="button"
      onClick={() => console.log("FAQ video placeholder", video)}
      className="group relative h-[388px] min-w-0 overflow-hidden rounded-[18px] bg-viet-deep text-left shadow-[0_16px_38px_rgba(6,75,95,0.18)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(6,75,95,0.25)] focus-visible:ring-4 focus-visible:ring-viet-cyan/35"
    >
      <Image src={video.image} alt={video.title} fill sizes="190px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-viet-deep shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur">
        <Clapperboard className="h-5 w-5 fill-viet-deep/10" strokeWidth={2.3} />
      </div>
      <div className="absolute right-4 top-4 flex flex-col gap-1">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="h-1.5 w-1.5 rounded-full bg-white/85" />
        ))}
      </div>

      <div className="absolute inset-0 grid place-items-center pb-8">
        <VideoPlayButton />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 pb-5 text-white">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[18px] font-black leading-none text-viet-cyan">{String(video.id).padStart(2, "0")}</span>
          <span className="rounded-md bg-black/70 px-2 py-1 text-[12px] font-black leading-none text-white shadow-sm">{video.duration}</span>
        </div>
        <h3 className="text-[17px] font-black leading-[1.18] tracking-[-0.02em] text-white">{video.title}</h3>
        <p className="mt-2 line-clamp-3 text-[12.5px] font-semibold leading-[1.55] text-white/90">{video.description}</p>
      </div>
    </button>
  );
}

function MobileVideoItem({ video }: { video: FAQVideo }) {
  return (
    <button
      type="button"
      onClick={() => console.log("FAQ video placeholder", video)}
      className="group grid w-full grid-cols-[128px_minmax(0,1fr)] gap-3 border-b border-[#EAF2F4] py-3 text-left outline-none min-[390px]:grid-cols-[146px_minmax(0,1fr)] min-[390px]:gap-3.5 focus-visible:ring-4 focus-visible:ring-viet-cyan/25"
    >
      <div className="relative h-[94px] overflow-hidden rounded-[11px] bg-viet-deep shadow-[0_10px_24px_rgba(6,75,95,0.13)] min-[390px]:h-[104px]">
        <Image src={video.image} alt={video.title} fill sizes="150px" className="object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/12" />
        <div className="absolute inset-0 grid place-items-center">
          <VideoPlayButton small />
        </div>
      </div>

      <div className="flex min-w-0 items-start gap-2 pt-1">
        <span className="shrink-0 text-[17px] font-black leading-none text-viet-cyan min-[390px]:text-[18px]">{String(video.id).padStart(2, "0")}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[13px] font-black leading-[1.25] tracking-[-0.02em] text-viet-text min-[390px]:text-[14px]">{video.title}</h3>
            <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-viet-deep" strokeWidth={2.2} />
          </div>
          <p className="mt-1.5 line-clamp-2 text-[10.5px] font-medium leading-[1.45] text-viet-muted min-[390px]:text-[11.5px]">{video.description}</p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-viet-pale px-2 py-1 text-[10.5px] font-black leading-none text-viet-deep">
            <Play className="h-2.5 w-2.5 fill-viet-deep" />
            {video.duration}
          </span>
        </div>
      </div>
    </button>
  );
}

function SidebarCard() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[110px] rounded-[22px] border border-[#E3F0F3] bg-white p-7 shadow-[0_18px_50px_rgba(6,75,95,0.08)]">
        <h3 className="text-[24px] font-black leading-tight tracking-[-0.03em] text-viet-text">Bạn vẫn còn thắc mắc?</h3>
        <p className="mt-3 text-[14px] font-medium leading-[1.7] text-[#41545C]">
          Đội ngũ chuyên gia của Viethealth luôn sẵn sàng lắng nghe và tư vấn cho bạn.
        </p>

        <div className="mt-7 space-y-3.5">
          {contactOptions.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-viet-border/85 bg-white p-4 shadow-[0_8px_20px_rgba(6,75,95,0.045)] transition duration-200 hover:translate-x-1 hover:border-viet-teal/45 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary-gradient text-white shadow-[0_12px_26px_rgba(0,77,99,0.22)]">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-black leading-snug text-viet-text">{title}</span>
                <span className="mt-1 block whitespace-pre-line text-[12.5px] font-medium leading-[1.45] text-viet-muted">{description}</span>
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-viet-deep transition group-hover:translate-x-0.5" strokeWidth={2.2} />
            </a>
          ))}
        </div>

        <div className="mt-7 rounded-[18px] bg-primary-gradient p-5 text-white shadow-[0_18px_38px_rgba(0,77,99,0.2)]">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-14 w-14 shrink-0 text-white" strokeWidth={1.7} />
            <p className="text-[14px] font-bold leading-[1.6] text-white">
              Viethealth cam kết đồng hành cùng bạn trên hành trình phục hồi vận động và nâng cao chất lượng cuộc sống.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function MobileContactBox() {
  return (
    <div className="mt-7 rounded-[18px] bg-[#EAF8FB] p-4 shadow-[0_10px_26px_rgba(6,75,95,0.06)] min-[390px]:p-[18px] lg:hidden">
      <div className="grid gap-4 min-[390px]:grid-cols-[1fr_176px] min-[390px]:items-center">
        <div className="flex gap-3.5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-viet-teal/25 bg-white text-viet-deep shadow-[0_8px_18px_rgba(6,75,95,0.07)]">
            <Calendar className="h-6 w-6" strokeWidth={2} />
          </span>
          <div>
            <h3 className="text-[17px] font-black leading-tight tracking-[-0.02em] text-viet-text">Bạn vẫn còn thắc mắc?</h3>
            <p className="mt-1.5 text-[11.5px] font-semibold leading-[1.55] text-viet-muted min-[390px]:text-[12px]">
              Đội ngũ chuyên gia của Viethealth luôn sẵn sàng lắng nghe và tư vấn cho bạn.
            </p>
          </div>
        </div>
        <div className="grid gap-2.5">
          <a href="#" className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-primary-gradient px-4 text-[13px] font-black text-white shadow-button transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/30 active:translate-y-0.5">
            <MessageCircle className="h-4 w-4" />
            Nhắn Zalo ngay
          </a>
          <a href="#contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border border-viet-teal/60 bg-white px-4 text-[13px] font-black text-viet-deep shadow-[0_8px_18px_rgba(6,75,95,0.04)] transition hover:-translate-y-0.5 hover:border-viet-teal focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 active:translate-y-0.5">
            <Calendar className="h-4 w-4" />
            Đặt lịch tư vấn
          </a>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const visibleVideos = useMemo(() => {
    if (activeCategory === "Tất cả") return faqVideos;
    return faqVideos.filter((video) => video.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="faq" className="relative overflow-hidden bg-[linear-gradient(180deg,#FAFDFF_0%,#F7FBFC_58%,#FFFFFF_100%)] py-10 md:pb-20 md:pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px] px-3 min-[390px]:px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_304px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <div className="relative max-w-[820px] pb-1">
              <QuestionBubbles />
              <div className="mb-3 flex items-center gap-3 text-[9.5px] font-black uppercase tracking-[0.14em] text-viet-text min-[390px]:text-[10.5px] md:mb-6 md:text-[13px] md:tracking-[0.13em]">
                <span className="h-[3px] w-8 rounded-full bg-viet-cyan md:w-9" />
                NHỮNG THẮC MẮC THƯỜNG GẶP
              </div>
              <h2 className="max-w-[760px] text-[28px] font-black leading-[1.15] tracking-[-0.045em] text-viet-text min-[390px]:text-[31px] md:text-[46px] md:leading-[1.12] lg:text-[44px] xl:text-[48px]">
                Giải đáp những điều <br className="md:hidden" />bạn quan tâm nhất
              </h2>
              <p className="mt-4 max-w-[560px] whitespace-pre-line text-[13px] font-medium leading-[1.62] text-[#41545C] md:mt-5 md:text-[16px] md:leading-[1.7]">
                {"Mọi thắc mắc của bạn đều quan trọng với chúng tôi.\nClick vào video để xem giải đáp chi tiết."}
              </p>
            </div>

            <div className="no-scrollbar -mx-3 mt-8 hidden overflow-x-auto px-3 md:flex md:items-center md:gap-7 lg:gap-8">
              {categories.map(({ label, icon: Icon }) => {
                const isActive = activeCategory === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveCategory(label)}
                    className={`inline-flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-full px-5 text-[14px] font-black transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 ${
                      isActive ? "bg-primary-gradient text-white shadow-[0_12px_26px_rgba(0,77,99,0.22)]" : "bg-transparent text-viet-text hover:bg-[#E8F6F8]"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 hidden grid-cols-5 gap-2.5 md:grid lg:gap-3 xl:gap-3.5">
              {visibleVideos.map((video) => (
                <DesktopVideoCard key={video.id} video={video} />
              ))}
            </div>

            <div className="mt-5 md:hidden">
              {faqVideos.map((video) => (
                <MobileVideoItem key={video.id} video={video} />
              ))}
            </div>

            <div className="mt-9 hidden justify-center md:flex">
              <button
                type="button"
                onClick={() => console.log("Xem thêm câu hỏi placeholder")}
                className="inline-flex h-12 w-[220px] items-center justify-center gap-4 rounded-2xl border border-viet-teal bg-white px-5 text-[14px] font-black text-viet-deep shadow-[0_10px_24px_rgba(6,75,95,0.045)] transition duration-200 hover:-translate-y-0.5 hover:bg-viet-pale focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 active:translate-y-0.5"
              >
                Xem thêm câu hỏi
                <ChevronDown className="h-4 w-4" strokeWidth={2.3} />
              </button>
            </div>

            <MobileContactBox />
          </div>

          <SidebarCard />
        </div>
      </div>
    </section>
  );
}
