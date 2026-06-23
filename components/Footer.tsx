import { Globe, Mail, MapPin, MessageCircle, Phone, Play } from "lucide-react";
import { Logo } from "./Logo";

const quickLinks = ["Về chúng tôi", "Dịch vụ", "Sản phẩm", "Câu chuyện khách hàng", "Kiến thức chỉnh hình"];
const supportLinks = ["Đặt lịch tư vấn", "Câu hỏi thường gặp", "Chính sách bảo hành", "Hướng dẫn sử dụng", "Tuyển dụng"];

const contactItems = [
  { icon: MapPin, label: "42 Chùa Quỳnh, Bạch Mai, Hà Nội", href: "https://maps.google.com/?q=42%20Ch%C3%B9a%20Qu%E1%BB%B3nh%2C%20B%E1%BA%A1ch%20Mai%2C%20H%C3%A0%20N%E1%BB%99i" },
  { icon: Phone, label: "0866 948 838", href: "tel:0866948838" },
  { icon: Mail, label: "info@chantaygiaviethealthhanoi.com", href: "mailto:info@chantaygiaviethealthhanoi.com" },
  { icon: Globe, label: "www.chantaygiaviethealthhanoi.com", href: "http://www.chantaygiaviethealthhanoi.com" },
];

const socialLinks = [
  { icon: MessageCircle, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "Zalo", href: "#" },
  { icon: Play, label: "Youtube", href: "#" },
];

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[14px] font-black uppercase tracking-[0.08em] text-white">{title}</h3>
      <ul className="mt-[18px] space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="group inline-flex items-center gap-2 text-[14px] font-medium leading-snug text-[#A9C8D0] transition duration-200 hover:translate-x-1 hover:text-[#38BFD1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BFD1]/25">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007A8A] transition duration-200 group-hover:bg-[#38BFD1]" />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#002733] text-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-7 pt-11 md:px-8 md:pb-7 md:pt-[68px] lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.82fr_0.95fr_1.28fr] lg:gap-10 xl:gap-14">
          <div>
            <div className="[&_*]:text-white">
              <Logo />
            </div>
            <p className="mt-5 max-w-[280px] text-[14px] font-medium leading-[1.7] text-[#A9C8D0]">
              Viethealth đồng hành cùng người bệnh trong hành trình phục hồi vận động, lấy lại sự tự tin và nâng cao chất lượng cuộc sống với thiết bị chỉnh hình tiên tiến.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/[0.08] bg-white/[0.08] text-[#B9D7DE] transition duration-200 hover:-translate-y-0.5 hover:border-[#38BFD1]/40 hover:bg-[#007A8A] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BFD1]/25 active:translate-y-0.5"
                >
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </a>
              ))}
            </div>
          </div>

          <FooterLinks title="THAM KHẢO NHANH" links={quickLinks} />
          <FooterLinks title="HỖ TRỢ KHÁCH HÀNG" links={supportLinks} />

          <div>
            <h3 className="text-[14px] font-black uppercase tracking-[0.08em] text-white">LIÊN HỆ</h3>
            <ul className="mt-[18px] space-y-4">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="group flex items-start gap-3 text-[14px] font-medium leading-[1.55] text-[#A9C8D0] transition duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BFD1]/25">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[9px] border border-white/[0.08] bg-white/[0.06] text-[#38BFD1] transition duration-200 group-hover:bg-[#007A8A] group-hover:text-white">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0 break-words">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-[22px] text-[12.5px] font-medium leading-relaxed text-[#7FA7B0] md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Viethealth – Trung tâm Chỉnh hình. Tất cả quyền được bảo lưu.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-[#38BFD1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BFD1]/25">Chính sách bảo mật</a>
            <a href="#" className="transition hover:text-[#38BFD1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BFD1]/25">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}