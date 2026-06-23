import Image from "next/image";
import { Calendar, ChevronDown, Heart, MessageCircle, Settings, ShieldCheck } from "lucide-react";
import { FeatureBar } from "./FeatureBar";
import heroImage from "../images/hero.png";
import mobileHeroImage from "../images/mobilehero.png";

const benefits = [
  { icon: ShieldCheck, title: "Thiết kế cá nhân hóa", desc: "Phù hợp từng người" },
  { icon: Settings, title: "Công nghệ hiện đại", desc: "Đo đạc chính xác" },
  { icon: Heart, title: "Đồng hành dài hạn", desc: "Hỗ trợ sau chỉnh sửa" },
];

export function HeroSection() {
  return (
    <main className="relative h-screen overflow-hidden bg-hero-gradient pt-14 md:pt-[86px]">
      <section className="relative h-[calc(100vh-56px)] min-h-0 pb-0 md:h-[calc(100vh-86px)] md:pb-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,191,209,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0)_74%,rgba(255,255,255,0.96)_100%)] md:bg-[radial-gradient(circle_at_78%_22%,rgba(56,191,209,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0)_74%,rgba(255,255,255,0.96)_100%)]" />

        <div className="absolute inset-0 z-0 md:inset-y-0 md:left-auto md:right-0 md:w-[58%]">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(243,250,252,0.82)_0%,rgba(243,250,252,0.54)_38%,rgba(243,250,252,0)_68%),linear-gradient(180deg,rgba(255,255,255,0)_70%,rgba(255,255,255,0.94)_100%)] md:hidden" />
          <div className="absolute inset-0 z-10 hidden md:block md:bg-[linear-gradient(90deg,#f7fcfd_0%,rgba(247,252,253,0.5)_16%,rgba(247,252,253,0)_42%)]" />
          <Image
            src={mobileHeroImage}
            alt="Kỹ thuật viên VIETHEALTH đang chỉnh chân giả"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[right_center] md:hidden"
          />
          <Image
            src={heroImage}
            alt="Kỹ thuật viên VIETHEALTH đang chỉnh chân giả"
            fill
            priority
            sizes="58vw"
            className="hidden object-cover object-right-top md:block"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 hidden h-32 bg-gradient-to-t from-[#f3fafc] via-[#f3fafc]/70 to-transparent md:block md:h-44 md:from-white" />
          <div className="absolute inset-y-0 left-0 z-10 hidden w-28 bg-gradient-to-r from-[#f7fcfd] to-transparent md:block md:w-52" />
        </div>

        <div className="container-viet relative z-20 flex h-full min-h-0 flex-col justify-between pt-[72px] pb-3 md:pt-[78px] md:pb-[150px]">
          <div className="max-w-[650px] md:ml-10 lg:ml-14 xl:ml-16">
            <div className="max-w-[66%] md:max-w-none">
            <div className="mb-3 flex items-center gap-2 bg-transparent p-0 shadow-none md:mb-7 md:inline-flex md:gap-3 md:rounded-full md:bg-white/88 md:px-4 md:py-3 md:shadow-[0_8px_24px_rgba(6,75,95,0.07)] md:backdrop-blur">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-viet-cyan md:h-2 md:w-2" />
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#0B5B68] min-[390px]:text-[10px] md:text-[13px] md:font-extrabold md:tracking-[0.18em] md:text-viet-deep">TRUNG TÂM CHỈNH HÌNH VIETHEALTH</span>
            </div>

            <div className="hidden md:block">
              <p className="mb-4 text-[31px] font-black uppercase leading-none tracking-[0.32em] text-viet-deep">GIẢI PHÁP</p>
              <h1 className="max-w-[640px] text-[60px] font-black uppercase leading-[0.98] tracking-[-0.045em] text-viet-navy lg:text-[68px] xl:text-[72px]">
                CHÂN TAY GIẢ <span className="text-viet-cyan">&</span>
                <br /> NẸP CHỈNH HÌNH
              </h1>
            </div>

            <h1 className="text-[29px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#063F52] min-[390px]:text-[31px] md:hidden">
              CHÂN TAY GIẢ <span className="text-viet-cyan">&</span>
              <br /> NẸP CHỈNH HÌNH
            </h1>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B5B68] min-[390px]:text-[11px] md:mt-7 md:text-[24px] md:font-black md:tracking-[0.18em] md:text-viet-deep">THIẾT KẾ RIÊNG CHO TỪNG NGƯỜI</p>

            <div className="mt-3 mb-4 h-[2px] w-10 rounded-full bg-viet-cyan md:hidden" />

            <p className="max-w-[220px] text-[13.5px] font-normal leading-[1.55] text-[#52636B] md:mt-8 md:max-w-[560px] md:text-[19px] md:font-medium md:leading-[1.6] md:text-viet-muted">
              <span className="hidden md:block">Đồng hành cùng bạn trên hành trình phục hồi vận động,<br /> lấy lại sự tự tin và nâng cao chất lượng cuộc sống.</span>
              <span className="md:hidden">Tư vấn, đo đạc, chế tác và<br /> đồng hành phục hồi vận động<br /> cho từng người bệnh.</span>
            </p>
            </div>

            <div className="absolute inset-x-4 bottom-[124px] flex flex-col gap-2.5 md:static md:inset-auto md:mt-11 md:max-w-none md:flex-row md:gap-5">
              <a href="#contact" className="btn-primary h-[44px] w-full justify-start rounded-[10px] px-5 text-[13px] md:h-[58px] md:w-auto md:justify-center md:px-7 md:text-[16px]">
                <Calendar className="h-4 w-4 md:h-6 md:w-6" />Đặt lịch tư vấn<span className="ml-auto text-xl leading-none md:hidden">→</span>
              </a>
              <a href="#contact" className="btn-secondary h-[44px] w-full justify-start rounded-[10px] px-5 text-[18px] md:h-[58px] md:w-auto md:justify-center md:px-7 md:text-[16px]">
                <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />Nhắn Zalo<span className="ml-auto text-xl leading-none md:hidden">→</span>
              </a>
            </div>

            <div className="absolute inset-x-4 bottom-[18px] grid grid-cols-3 gap-0 rounded-2xl border border-white bg-white/94 px-2 py-4 shadow-soft backdrop-blur md:static md:inset-auto md:mt-11 md:flex md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center gap-1 text-center md:flex-row md:items-start md:gap-4 md:text-left">
                  <Icon className="h-6 w-6 text-viet-teal md:h-8 md:w-8 md:text-viet-text" strokeWidth={1.8} />
                  <div>
                    <p className="mt-1 text-[9px] font-extrabold leading-tight text-viet-text min-[390px]:text-[10px] md:mt-0 md:text-[14px]">{title}</p>
                    <p className="mt-1 text-[8px] font-medium leading-tight text-viet-muted min-[390px]:text-[9px] md:text-[14px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-0 flex justify-center md:ml-[42%] md:justify-start">
            <div className="hidden items-center gap-3 md:flex">
              {[0, 1, 2, 3].map((dot) => <span key={dot} className={`h-3 w-3 rounded-full ${dot === 0 ? "bg-viet-teal" : "bg-viet-border"}`} />)}
            </div>
            <a href="#contact" className="grid h-8 w-8 place-items-center rounded-full text-viet-teal md:hidden" aria-label="Scroll down"><ChevronDown className="h-5 w-5" /></a>
          </div>
        </div>

        <FeatureBar />
      </section>
    </main>
  );
}