import { ChevronDown, MessageCircle, Phone } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <aside className="fixed right-9 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex">
      <a href="tel:0981123456" className="flex h-[74px] w-[76px] flex-col items-center justify-center gap-1 rounded-[14px] bg-primary-gradient text-white shadow-float transition hover:-translate-y-0.5"><Phone className="h-7 w-7" /><span className="text-[12px] font-bold">Gọi ngay</span></a>
      <a href="#contact" className="flex h-[74px] w-[76px] flex-col items-center justify-center gap-1 rounded-[14px] bg-viet-zalo text-white shadow-float transition hover:-translate-y-0.5"><span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[13px] font-extrabold text-viet-zalo">Zalo</span><span className="text-[12px] font-bold">Zalo</span></a>
      <a href="#contact" className="flex h-[74px] w-[76px] flex-col items-center justify-center gap-1 rounded-[14px] bg-viet-messenger text-white shadow-float transition hover:-translate-y-0.5"><MessageCircle className="h-7 w-7 fill-white/15" /><span className="text-[12px] font-bold">Messenger</span></a>
      <a href="#contact" className="mt-5 grid h-[58px] w-[58px] place-items-center rounded-full bg-viet-teal text-white shadow-float transition hover:-translate-y-0.5" aria-label="Scroll down"><ChevronDown className="h-8 w-8" /></a>
    </aside>
  );
}