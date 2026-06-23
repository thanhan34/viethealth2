"use client";

import { Calendar, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const menuItems = [
  { label: "Về chúng tôi", href: "/#contact" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Vì sao chọn VietHealth", href: "/#why-choose" },
  { label: "Câu chuyện người thật", href: "/#real-stories" },
  { label: "Giải đáp thắc mắc", href: "/#faq" },
  { label: "Liên hệ", href: "#contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 bg-white/96 shadow-header backdrop-blur md:h-[86px]">
      <div className="mx-auto flex h-full w-full max-w-[1500px] items-center justify-between px-4 md:px-12">
        <div className="hidden md:block"><Logo /></div>
        <div className="md:hidden"><Logo compact /></div>

        <nav className="hidden items-center gap-7 text-[14px] font-bold text-viet-text lg:flex xl:gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative whitespace-nowrap transition hover:text-viet-teal ${
                item.href === "/san-pham" && pathname?.startsWith("/san-pham")
                  ? "text-viet-teal after:absolute after:left-1/2 after:top-[42px] after:h-[3px] after:w-[74px] after:-translate-x-1/2 after:rounded-full after:bg-viet-cyan"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 md:gap-6">
          <a href="#contact" className="btn-primary h-9 px-3 text-[11px] md:h-[46px] md:px-5 md:text-[14px]"><Calendar className="h-4 w-4 md:h-[19px] md:w-[19px]" /><span>Đặt lịch tư vấn</span></a>
          <a href="tel:0981123456" className="hidden items-center gap-2 text-[14px] font-bold text-viet-text md:flex"><Phone className="h-5 w-5 fill-viet-teal/10 text-viet-teal" /><span>0981 123 456</span></a>
          <button className="grid h-9 w-9 place-items-center rounded-lg text-viet-text md:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}