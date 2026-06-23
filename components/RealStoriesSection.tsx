"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { ReelItem } from "@/types/reel";

const demoReels: ReelItem[] = [
  {
    id: "demo-anh-hung",
    title: "Anh Hùng",
    subtitle: "Phục hồi sau tai nạn giao thông",
    facebookUrl: "https://www.facebook.com/reel/1234567890",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1234567890&show_text=false&width=360",
    duration: "1:28",
    order: 1,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "demo-co-lan",
    title: "Cô Lan",
    subtitle: "Tập đi lại với chân giả",
    facebookUrl: "https://www.facebook.com/watch/1234567891",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F1234567891&show_text=false&width=360",
    duration: "1:36",
    order: 2,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "demo-anh-duc",
    title: "Anh Đức",
    subtitle: "Phục hồi vận động",
    facebookUrl: "https://fb.watch/abcdef1234/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2Fabcdef1234%2F&show_text=false&width=360",
    duration: "1:42",
    order: 3,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
];

function Facebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function ReelFallback({ facebookUrl }: { facebookUrl: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-b from-[#172E3A] via-[#0A5266] to-[#062D3A] p-4 text-center text-white">
      <div className="rounded-[18px] bg-white/12 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-md">
        <p className="text-sm font-bold leading-snug">Nếu Reel không hiển thị, video có thể chưa public hoặc Facebook chặn embed.</p>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1877F2] px-4 text-[13px] font-extrabold text-white shadow-[0_12px_26px_rgba(24,119,242,0.28)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35 active:translate-y-0.5"
        >
          Xem trên Facebook
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function ReelCard({ reel }: { reel: ReelItem }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <article className="group w-[76vw] max-w-[286px] flex-none snap-center min-[390px]:w-[72vw] min-[390px]:max-w-[300px] md:w-[294px] md:max-w-[320px] lg:w-[306px]">
      <div className="relative h-[430px] overflow-hidden rounded-[22px] bg-white shadow-[0_20px_46px_rgba(6,75,95,0.18)] ring-1 ring-white/90 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_32px_80px_rgba(6,75,95,0.28)] min-[390px]:h-[456px] md:h-[500px] lg:h-[516px]">
        <div className="relative h-full w-full bg-white">
          <iframe
            title={`${reel.title} - ${reel.subtitle}`}
            src={reel.embedUrl}
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="relative z-10 h-full w-full bg-white"
            onLoad={() => setIframeLoaded(true)}
          />
          {!iframeLoaded ? <ReelFallback facebookUrl={reel.facebookUrl} /> : null}
        </div>
      </div>

      <div className="mt-3 rounded-[18px] border border-viet-border bg-white/95 px-4 py-3.5 text-left shadow-[0_12px_28px_rgba(6,75,95,0.08)] backdrop-blur-sm md:mt-4 md:rounded-[20px] md:px-5 md:py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[18px] font-black leading-tight tracking-[-0.02em] text-viet-text md:text-[20px]">{reel.title}</h3>
            <p className="mt-1 text-[13px] font-semibold leading-snug text-[#526973] md:text-[13.5px]">{reel.subtitle}</p>
          </div>
          {reel.duration ? (
            <span className="rounded-full bg-viet-pale px-2.5 py-1 text-[11px] font-extrabold text-viet-teal">{reel.duration}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function RealStoriesSection() {
  const [reels, setReels] = useState<ReelItem[]>(demoReels);

  useEffect(() => {
    let isMounted = true;

    async function loadReels() {
      try {
        const response = await fetch("/api/reels", { cache: "no-store" });
        const data = await response.json();
        const nextReels = Array.isArray(data.reels) ? data.reels : [];

        if (isMounted && nextReels.length) {
          setReels(nextReels);
        }
      } catch (error) {
        console.warn("[VietHealth Reels] Không thể lấy /api/reels, dùng demo fallback.", error);
      }
    }

    void loadReels();

    return () => {
      isMounted = false;
    };
  }, []);

  const visibleReels = reels.length ? reels.slice(0, 6) : demoReels.slice(0, 3);

  return (
    <section id="real-stories" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7FBFC] to-white py-12 md:py-[90px]">
      <div className="pointer-events-none absolute -right-16 top-8 h-44 w-44 opacity-[0.16] [background-image:radial-gradient(#38BFD1_1.1px,transparent_1.1px)] [background-size:16px_16px] md:right-0 md:top-12 md:h-56 md:w-56 md:opacity-[0.28] md:[background-image:radial-gradient(#38BFD1_1.2px,transparent_1.2px)] md:[background-size:18px_18px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-28 h-44 w-44 opacity-[0.13] [background-image:radial-gradient(#007A8A_1.1px,transparent_1.1px)] [background-size:16px_16px] md:bottom-24 md:left-0 md:h-52 md:w-52 md:opacity-[0.22] md:[background-image:radial-gradient(#007A8A_1.2px,transparent_1.2px)] md:[background-size:18px_18px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-52 hidden h-72 w-72 rounded-full border border-viet-cyan/20 md:block" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <div className="mx-auto max-w-[840px] text-center">
          <div className="mx-auto mb-3 inline-flex h-[32px] items-center gap-2 rounded-full bg-[#1877F2] px-3.5 text-[12px] font-extrabold text-white shadow-[0_12px_28px_rgba(24,119,242,0.22)] md:mb-5 md:h-[34px] md:px-4 md:text-[13px]">
            <Facebook className="h-4 w-4 fill-white" />
            Facebook Reels
          </div>

          <h2 className="text-[30px] font-black leading-[1.08] tracking-[-0.045em] text-viet-text min-[390px]:text-[34px] md:text-[56px] md:leading-[1.02] lg:text-[60px]">
            Câu chuyện người thật
          </h2>

          <p className="mx-auto mt-3 max-w-[320px] text-[13.5px] font-medium leading-[1.55] text-[#41545C] md:mt-5 md:max-w-[720px] md:text-[18px] md:leading-[1.7]">
            Hành trình phục hồi chức năng và thay đổi cuộc sống của người bệnh tại Viethealth.
          </p>

          <div className="mx-auto mt-4 h-1 w-[74px] rounded-full bg-viet-teal md:mt-6 md:w-[86px]" />
        </div>

        <div className="relative mt-7 md:mt-14">
          <button
            type="button"
            aria-label="Câu chuyện trước"
            className="absolute left-0 top-[42%] z-20 hidden h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-viet-teal shadow-[0_14px_34px_rgba(6,75,95,0.14)] transition hover:scale-105 hover:bg-viet-pale focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 lg:grid"
          >
            <ChevronLeft className="h-7 w-7" strokeWidth={2.2} />
          </button>

          <div className="pointer-events-none absolute bottom-[88px] left-0 z-10 h-[170px] w-8 bg-gradient-to-r from-[#F7FBFC] to-transparent md:hidden" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-[88px] right-0 z-10 h-[170px] w-8 bg-gradient-to-l from-[#F7FBFC] to-transparent md:hidden" aria-hidden="true" />

          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2 pt-1 [scroll-padding-inline:1rem] min-[390px]:gap-4 md:mx-0 md:justify-center md:gap-6 md:px-0 lg:gap-7">
            {visibleReels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>

          <button
            type="button"
            aria-label="Câu chuyện tiếp theo"
            className="absolute right-0 top-[42%] z-20 hidden h-[54px] w-[54px] translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-viet-teal shadow-[0_14px_34px_rgba(6,75,95,0.14)] transition hover:scale-105 hover:bg-viet-pale focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/25 lg:grid"
          >
            <ChevronRight className="h-7 w-7" strokeWidth={2.2} />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2.5 md:mt-7">
          {Array.from({ length: Math.max(visibleReels.length, 3) }).map((_, dot) => (
            <span key={dot} className={`h-2 rounded-full md:h-2.5 ${dot === 0 ? "w-7 bg-viet-teal md:w-8" : "w-2 bg-viet-border md:w-2.5"}`} />
          ))}
        </div>

        <p className="mx-auto mt-3 max-w-[280px] text-center text-[12px] font-bold text-[#6B7D84] md:hidden">
          Vuốt ngang để xem thêm câu chuyện
        </p>

        <div className="mx-auto mt-7 max-w-[780px] text-center md:mt-9">
          <p className="text-[14px] font-semibold leading-relaxed text-[#41545C] md:text-[20px]">
            Hàng trăm câu chuyện thật – Động lực thật
          </p>
          <p className="mx-auto mt-1.5 max-w-[330px] text-[18px] font-black leading-snug tracking-[-0.02em] text-viet-text md:max-w-none md:text-[22px]">
            Viethealth luôn đồng hành cùng bạn trên hành trình hồi phục.
          </p>
        </div>

        <div className="mt-6 flex justify-center md:mt-8">
          <a
            href="#"
            className="inline-flex h-[52px] w-full max-w-[340px] items-center justify-center gap-2 rounded-full bg-primary-gradient px-5 text-[14px] font-extrabold text-white shadow-button transition duration-200 hover:-translate-y-0.5 hover:shadow-float focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-viet-cyan/30 active:translate-y-0.5 md:h-14 md:w-auto md:max-w-none md:gap-2.5 md:px-8 md:text-[15.5px]"
          >
            <Facebook className="h-5 w-5 fill-white" />
            Xem thêm trên Facebook
            <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}