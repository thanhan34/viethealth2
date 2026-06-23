import { Calendar, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const contactInfo = [
  { icon: MapPin, text: "42 Chùa Quỳnh, Bạch Mai, Hà Nội" },
  { icon: Clock, text: "Thứ 2 – Thứ 7: 8:00 – 17:30" },
];

const ctaButtons = [
  {
    label: "Gọi ngay",
    href: "tel:0981123456",
    icon: Phone,
    className:
      "bg-[linear-gradient(135deg,#62D4E2_0%,#38BFD1_48%,#007A8A_100%)] text-[#002733] shadow-[0_18px_34px_rgba(56,191,209,0.26)] hover:shadow-[0_24px_46px_rgba(56,191,209,0.34)]",
  },
  {
    label: "Liên hệ ngay",
    href: "#contact",
    icon: Calendar,
    className:
      "border border-white/[0.22] bg-white/[0.06] text-white shadow-[0_14px_30px_rgba(0,39,51,0.14)] backdrop-blur-md hover:border-white/40 hover:bg-white/[0.1] hover:shadow-[0_20px_40px_rgba(0,39,51,0.22)]",
  },
  {
    label: "Nhắn Zalo",
    href: "#",
    icon: MessageCircle,
    className:
      "border border-white/[0.22] bg-white/[0.06] text-white shadow-[0_14px_30px_rgba(0,39,51,0.14)] backdrop-blur-md hover:border-white/40 hover:bg-white/[0.1] hover:shadow-[0_20px_40px_rgba(0,39,51,0.22)]",
  },
];

function ContactPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:42px_42px] md:opacity-[0.18]" />
      <div className="absolute -left-[8%] top-[-26%] h-[290px] w-[460px] rounded-full border border-white/10 bg-cyan-200/10 blur-2xl md:h-[380px] md:w-[620px]" />
      <div className="absolute -right-[12%] bottom-[-34%] h-[330px] w-[530px] rounded-full border border-cyan-100/10 bg-[#38BFD1]/10 blur-3xl md:h-[440px] md:w-[760px]" />
      <svg className="absolute left-1/2 top-1/2 h-[130px] w-[980px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] md:opacity-[0.16]" viewBox="0 0 980 130" fill="none">
        <path
          d="M0 68H165L184 68L202 42L222 96L245 28L268 68H410L432 68L448 51L465 82L486 34L510 68H654L676 68L693 49L711 80L734 38L758 68H980"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="absolute inset-x-0 bottom-[-1px] h-24 w-full opacity-[0.16]" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
        <path d="M0 68C192 114 355 12 540 52C753 98 876 114 1088 58C1228 21 1348 24 1440 48V120H0V68Z" fill="white" />
      </svg>
    </div>
  );
}

export function ContactCTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#003847_0%,#004D63_52%,#00313F_100%)] px-4 py-14 text-white md:px-8 md:py-20">
      <ContactPattern />

      <div className="relative z-10 mx-auto flex min-h-[250px] w-full max-w-[980px] flex-col items-center justify-center text-center md:min-h-[240px]">
        <div className="inline-flex h-9 items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(0,39,51,0.12)] backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-[#38BFD1] shadow-[0_0_18px_rgba(56,191,209,0.9)]" />
          HỖ TRỢ 24/7
        </div>

        <h2 className="mt-5 max-w-[760px] text-[32px] font-black leading-[1.12] tracking-[-0.045em] text-white min-[390px]:text-[35px] md:mt-6 md:text-[48px] lg:text-[52px]">
          Bạn cần tư vấn <span className="text-[#7EDFEA]">giải pháp phù hợp</span>?
        </h2>

        <p className="mt-[18px] max-w-[650px] text-[14px] font-medium leading-[1.65] text-[#B9D7DE] md:text-[17px] md:leading-[1.65]">
          Đội ngũ chuyên gia của Viethealth luôn sẵn sàng lắng nghe và đồng hành cùng bạn. Tư vấn miễn phí, không áp lực.
        </p>

        <div className="mt-8 grid w-full max-w-[320px] gap-3 md:flex md:max-w-none md:justify-center md:gap-4">
          {ctaButtons.map(({ label, href, icon: Icon, className }) => (
            <a
              key={label}
              href={href}
              className={`inline-flex h-12 items-center justify-center gap-2.5 rounded-[14px] px-6 text-[14px] font-black transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BFD1]/35 active:translate-y-0.5 md:h-[54px] md:min-w-[154px] ${className}`}
            >
              <Icon className="h-5 w-5" strokeWidth={2.4} />
              {label}
            </a>
          ))}
        </div>

        <div className="mt-[26px] flex flex-col items-center justify-center gap-2.5 text-[13px] font-semibold leading-snug text-[#A9C8D0] md:flex-row md:flex-wrap md:gap-6 md:text-[14px]">
          {contactInfo.map(({ icon: Icon, text }) => (
            <div key={text} className="inline-flex items-center justify-center gap-2">
              <Icon className="h-4 w-4 shrink-0 text-[#38BFD1]" strokeWidth={2.2} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}