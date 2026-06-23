"use client";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  UserRound,
  Users,
} from "lucide-react";
import whyChooseDesktopImage from "@/images/visaochondesktop.png";
import whyChooseMobileImage from "@/images/visaochonmobile.png";

const expertImageSrc = "/images/about/dao-quang-duy.png";

const bullets = [
  "ISPO Category I – Tiêu chuẩn quốc tế",
  "Hơn 10 năm kinh nghiệm",
  "Trực tiếp tư vấn & chế tác cho từng bệnh nhân",
  "Trực tiếp tư vấn và lắp đặt dụng cụ cho từng bệnh nhân.",
];

const credentials = [
  {
    icon: Award,
    title: "Chứng chỉ quốc tế ISPO Category I",
    description:
      "Prosthetist & Orthotist – tiêu chuẩn quốc tế trong lĩnh vực chân tay giả và nẹp chỉnh hình",
  },
  {
    icon: GraduationCap,
    title: "Nghiên cứu sinh Tiến sĩ",
    description: "Prosthetics & Orthotics – Mahidol University, Thái Lan",
  },
  {
    icon: BookOpen,
    title: "Cử nhân Chân tay giả & Nẹp chỉnh hình",
    description: "Đào tạo bài bản, nền tảng chuyên môn vững chắc",
  },
  {
    icon: Users,
    title: "10+ năm kinh nghiệm thực hành lâm sàng",
    description:
      "Trực tiếp tư vấn, thiết kế, chế tạo và thử dụng cụ chỉnh hình cho hàng ngàn người bệnh",
  },
];

const commitments = [
  {
    icon: InternationalExpertiseIcon,
    title: "Chuyên môn chuẩn quốc tế",
    description: "ISPO Category I\nTiêu chuẩn quốc tế",
  },
  {
    icon: PersonalizedDesignIcon,
    title: "Thiết kế cá nhân hóa",
    description: "Mỗi thiết bị được\nthiết kế riêng cho bạn",
  },
  {
    icon: LongTermCompanionIcon,
    title: "Đồng hành lâu dài",
    description: "Theo dõi – Bảo hành\nHỗ trợ sử dụng dài lâu",
  },
  {
    icon: GenuineWarrantyIcon,
    title: "Bảo hành chính hãng",
    description: "Sản phẩm chính hãng,\nnguồn gốc rõ ràng",
  },
];

type CommitmentIconProps = {
  className?: string;
};

function CommitmentIconShell({ className, children }: React.PropsWithChildren<CommitmentIconProps>) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

function InternationalExpertiseIcon({ className }: CommitmentIconProps) {
  return (
    <CommitmentIconShell className={className}>
      <path d="M32 6.8 38 11l7.3.2 3.1 6.6 6.1 4-1.7 7.1 1.7 7.1-6.1 4-3.1 6.6-7.3.2-6 4.2-6-4.2-7.3-.2-3.1-6.6-6.1-4 1.7-7.1-1.7-7.1 6.1-4 3.1-6.6 7.3-.2L32 6.8Z" />
      <circle cx="32" cy="28.8" r="10.2" />
      <path d="m24 48.2-3.1 10.1 8-3.1 5.9 6.1 2.8-10.1" />
      <path d="m40 48.2 3.1 10.1-8-3.1-5.9 6.1-2.8-10.1" />
    </CommitmentIconShell>
  );
}

function PersonalizedDesignIcon({ className }: CommitmentIconProps) {
  return (
    <CommitmentIconShell className={className}>
      <path d="M36.8 5.9 53.3 12l-4.7 17.8-8.8 8.1-8.1-3.1 1.4-13.2 3.7-15.7Z" />
      <path d="M31.7 34.8c-1.4 5.3-1.4 9.3 1.2 13.5" />
      <path d="M33.1 48.3c-9.4 1.8-15 4.9-15.3 8.5-.2 3.1 5 4.5 13.8 3.4 9.1-1.1 14.8-3.7 15.1-6.9.2-2.6-3.4-4.3-9.4-4.7" />
      <path d="M24.6 55.8c3.8-1.4 7.1-2.1 11.7-2.4" />
    </CommitmentIconShell>
  );
}

function LongTermCompanionIcon({ className }: CommitmentIconProps) {
  return (
    <CommitmentIconShell className={className}>
      <path d="M10.1 42.9c8.2 2.1 13.4 5.3 18.1 9.2 2.5 2.1 5.9 2.6 8.9 1.4l15.6-6.2c2.5-1 3.8-3.7 2.8-6.1-.9-2.4-3.7-3.6-6.1-2.7L37.9 43" />
      <path d="M9.2 53.3c8.1-5.3 15.8-6.5 27.3-3.7" />
      <path d="M24.9 28.5c-7.9-7.5-7-18.6 1.2-20.4 4.3-.9 7.3 1.2 9.1 4.5 1.9-3.3 4.9-5.4 9.2-4.5 8.2 1.8 9 12.9 1.2 20.4L35.2 38.8 24.9 28.5Z" />
    </CommitmentIconShell>
  );
}

function GenuineWarrantyIcon({ className }: CommitmentIconProps) {
  return (
    <CommitmentIconShell className={className}>
      <path d="M32 6.4c6 5.2 12.3 7.4 20.3 7.9v17.9c0 11.9-7.8 20.7-20.3 25.4C19.5 52.9 11.7 44.1 11.7 32.2V14.3C19.7 13.8 26 11.6 32 6.4Z" />
      <path d="m23.8 31.8 5.8 5.9 11.8-12.9" />
    </CommitmentIconShell>
  );
}

function ExpertBulletCheck() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" fill="#C9F6FA" />
      <path
        d="m5.8 10.1 2.8 2.8 5.8-6.1"
        stroke="#007A8A"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpertImage({ className }: { className: string }) {
  return (
    <>
      <div className="absolute bottom-0 left-1/2 h-[72%] w-[58%] -translate-x-1/2 rounded-t-[42%] bg-gradient-to-b from-[#DDF3F6] via-[#C6EEF3] to-[#F7FBFC] opacity-80 blur-2xl" />
      <img
        src={expertImageSrc}
        alt="Đào Quang Duy, chuyên gia VietHealth mặc áo polo xanh đứng khoanh tay trong phòng chỉnh hình"
        className={className}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute bottom-0 left-1/2 hidden w-[52%] -translate-x-1/2 flex-col items-center md:flex">
        <div className="h-[360px] w-[260px] rounded-t-[120px] bg-gradient-to-b from-[#0B93A6] to-[#004D63] shadow-[0_28px_60px_rgba(0,77,99,0.24)]" />
      </div>
      <div className="absolute bottom-0 right-0 flex w-[82%] flex-col items-center md:hidden">
        <div className="h-[400px] w-[190px] rounded-t-[96px] bg-gradient-to-b from-[#0B93A6] to-[#004D63] shadow-[0_20px_44px_rgba(0,77,99,0.22)]" />
      </div>
    </>
  );
}

function ExpertCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <article
      className={`relative overflow-hidden bg-primary-gradient text-white shadow-[0_22px_50px_rgba(0,77,99,0.22)] ${
        mobile ? "rounded-[18px] p-[22px]" : "rounded-[20px] p-5"
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#38BFD1]/20 blur-2xl" />
      {!mobile && (
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-white/72">
          NGƯỜI SÁNG LẬP &amp; CHUYÊN MÔN CHÍNH
        </p>
      )}
      <div className="relative flex items-center gap-4">
        <div className={`${mobile ? "h-[54px] w-[54px]" : "h-14 w-14"} grid shrink-0 place-items-center rounded-full bg-[#38BFD1]/95 text-white shadow-[0_10px_24px_rgba(56,191,209,0.22)]`}>
          <UserRound className={mobile ? "h-8 w-8" : "h-7 w-7"} strokeWidth={2.1} />
        </div>
        <div>
          <h3 className={`${mobile ? "text-[19px]" : "text-[30px]"} font-black uppercase leading-none tracking-[-0.02em]`}>
            ĐÀO QUANG DUY
          </h3>
          <p className={`${mobile ? "mt-1 text-[13px]" : "mt-1.5 text-[15px]"} font-medium text-[#BEEEF4]`}>Giám đốc chuyên môn</p>
        </div>
      </div>
      <div className={`${mobile ? "my-4" : "my-3"} h-px w-full bg-white/22`} />
      {mobile && (
        <ul className="relative space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-[12px] font-semibold leading-snug text-white/92">
              <ExpertBulletCheck />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href="#contact"
        className={`relative inline-flex min-h-11 items-center justify-center gap-4 rounded-full border border-white/75 bg-white/0 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_12px_28px_rgba(255,255,255,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 active:translate-y-0.5 ${
          mobile ? "mt-5 w-[324px] max-w-full px-6 text-[14px]" : "mt-4 px-6 text-[14px]"
        }`}
      >
        Xem hồ sơ chuyên môn
        <ArrowRight className="h-5 w-5" />
      </a>
    </article>
  );
}

function CommitmentTitle() {
  return (
    <div className="flex items-center justify-center gap-6 text-center">
      <span className="h-1 w-12 rounded-full bg-[#38BFD1] md:w-16" />
      <h3 className="text-[24px] font-black uppercase leading-none tracking-[0.02em] text-[#073B4C] md:text-[24px]">
        CAM KẾT TỪ VIETHEALTH
      </h3>
      <span className="h-1 w-12 rounded-full bg-[#38BFD1] md:w-16" />
    </div>
  );
}

function CommitmentCard({ item, mobile = false }: { item: (typeof commitments)[number]; mobile?: boolean }) {
  const Icon = item.icon;
  return (
    <article
      className={`group border border-[#E3F0F3] bg-white shadow-[0_10px_28px_rgba(7,59,76,0.045)] transition duration-200 md:hover:-translate-y-1 md:hover:shadow-soft ${
        mobile ? "min-h-[162px] rounded-2xl p-[18px]" : "flex min-h-[150px] items-center gap-5 rounded-[18px] p-6"
      }`}
    >
      <div className={`${mobile ? "mb-4 h-[72px] w-[72px]" : "h-[70px] w-[70px]"} grid shrink-0 place-items-center rounded-full bg-[#F3FAFC]`}>
        <Icon className={`${mobile ? "h-12 w-12" : "h-12 w-12"} text-[#007A8A]`} />
      </div>
      <div>
        <h4 className={`${mobile ? "text-[16px]" : "text-[21px]"} font-black leading-[1.12] tracking-[-0.02em] text-[#073B4C]`}>
          {item.title}
        </h4>
        <div className="mt-3 h-[3px] w-8 rounded-full bg-[#38BFD1]" />
        <p className={`${mobile ? "mt-4 text-[12px]" : "mt-4 text-[15px]"} whitespace-pre-line font-medium leading-[1.45] text-[#4D5F68]`}>
          {item.description}
        </p>
      </div>
    </article>
  );
}

function TrustBar({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`mx-auto flex items-center justify-center gap-3 text-center font-bold text-[#073B4C] ${mobile ? "mt-5 text-[15px]" : "mt-5 w-fit rounded-full bg-white px-9 py-4 text-[15px] shadow-[0_8px_24px_rgba(7,59,76,0.05)]"}`}>
      <BadgeCheck className="h-5 w-5 shrink-0 text-[#007A8A]" strokeWidth={2} />
      <span>Đối tác chính hãng&nbsp;&nbsp; • &nbsp;&nbsp;ISPO Category I&nbsp;&nbsp; • &nbsp;&nbsp;ISO 13485</span>
    </div>
  );
}

function CredentialsList() {
  return (
    <div className="mx-auto mt-7 w-full max-w-[620px] rounded-[20px] bg-white/80 px-5 py-2 text-left backdrop-blur-sm">
      {credentials.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`flex gap-4 py-3.5 ${
              index !== credentials.length - 1 ? "border-b border-[#E5EEF1]" : ""
            }`}
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#007A8A] to-[#004D63] shadow-[0_8px_18px_rgba(0,122,138,0.25)]">
              <Icon className="h-[22px] w-[22px] text-white" strokeWidth={2.2} />
            </div>

            <div className="min-w-0 pt-0.5">
              <h3 className="text-[16.5px] font-extrabold leading-[1.25] text-[#073B4C]">
                {item.title}
              </h3>
              <p className="mt-1 text-[12.5px] leading-[1.45] text-[#5F6F78]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative isolate overflow-x-clip bg-[#F7FBFC] text-[#073B4C]">
      <div className="hidden md:block">
        <div className="relative min-h-screen overflow-hidden bg-[#EFF8FA]">
          <img
            src={whyChooseDesktopImage.src}
            alt="Vì sao chọn VietHealth - chuyên môn vững vàng, đồng hành dài lâu"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
          />

          <div className="relative z-10 mx-auto grid min-h-screen max-w-[1240px] grid-cols-[45%_55%] items-center gap-4 px-8 py-[72px]">
            <div aria-hidden="true" />

            <div className="self-start pl-8 pt-[12vh] text-center">
              <div className="mb-5 flex items-center justify-center gap-4">
                <span className="h-1 w-14 rounded-full bg-[#38BFD1]" />
                <p className="text-[13px] font-black uppercase tracking-[0.16em] text-[#007A8A]">VÌ SAO CHỌN VIETHEALTH?</p>
              </div>
              <h2 className="mx-auto max-w-[620px] text-[52px] font-black leading-[0.99] tracking-[-0.055em] text-[#073B4C] xl:text-[48px]">
                Chuyên môn vững vàng,
                <br />đồng hành dài lâu
              </h2>
              <p className="mx-auto mt-7 max-w-[560px] text-[18px] font-medium leading-[1.65] text-[#4D5F68]">
                Chúng tôi không chỉ tạo ra sản phẩm, mà còn đồng hành cùng bạn trên hành trình phục hồi và nâng cao chất lượng cuộc sống.
              </p>

              <CredentialsList />
            </div>

            <div className="absolute bottom-12 left-[-150px] w-[640px] max-w-[50vw]">
              <ExpertCard />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-8 py-14">
          <div>
            <CommitmentTitle />
            <div className="mt-7 grid grid-cols-4 gap-5">
              {commitments.map((item) => (
                <CommitmentCard key={item.title} item={item} />
              ))}
            </div>
            <TrustBar />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative min-h-[736px] overflow-hidden bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.96)_36%,rgba(247,251,252,0.76)_62%,rgba(247,251,252,0.18)_100%)] px-4 pt-[92px]">
          <img
            src={whyChooseMobileImage.src}
            alt="Vì sao chọn VietHealth - chuyên môn vững vàng, đồng hành dài lâu"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.94)_40%,rgba(255,255,255,0.42)_68%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0)_72%,#FFFFFF_100%)]" />

          <div className="relative z-20 max-w-[330px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-1 w-[52px] rounded-full bg-[#38BFD1]" />
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#007A8A]">VÌ SAO CHỌN VIETHEALTH?</p>
            </div>
            <h2 className="text-[32px] font-black leading-[1.05] tracking-[-0.055em] text-[#073B4C] min-[390px]:text-[36px]">
              Chuyên môn
              <br />vững vàng,
              <br />đồng hành
              <br />dài lâu
            </h2>
            <p className="mt-5 max-w-[300px] text-[12px] font-medium leading-[1.55] text-[#101820] min-[390px]:text-[13px]">
              Chúng tôi không chỉ tạo ra sản phẩm, mà còn đồng hành cùng bạn trên hành trình phục hồi và nâng cao chất lượng cuộc sống.
            </p>
          </div>

          <div className="absolute inset-x-4 bottom-5 z-30">
            <ExpertCard mobile />
          </div>
        </div>

        <div className="relative z-10 bg-white px-4 pb-7 pt-5">
          <CommitmentTitle />
          <div className="mt-5 grid grid-cols-2 gap-3">
            {commitments.map((item) => (
              <CommitmentCard key={item.title} item={item} mobile />
            ))}
          </div>
          <TrustBar mobile />
        </div>
      </div>
    </section>
  );
}