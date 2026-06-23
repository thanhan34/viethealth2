import Image from "next/image";
import logoImage from "../images/viethealthlogo.png";

type LogoProps = { compact?: boolean };

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#" className="flex items-center gap-2.5 md:gap-3" aria-label="VIETHEALTH home">
      <div className={`${compact ? "h-8 w-8" : "h-[54px] w-[54px] md:h-[58px] md:w-[58px]"} relative shrink-0 overflow-hidden rounded-full shadow-[0_8px_22px_rgba(0,63,82,0.22)]`}>
        <Image
          src={logoImage}
          alt="VIETHEALTH logo"
          fill
          priority
          sizes={compact ? "32px" : "58px"}
          className="object-contain"
        />
      </div>
      <div className="leading-none">
        <div className={`${compact ? "text-[10px]" : "text-[24px] md:text-[25px]"} font-extrabold tracking-[0.02em] text-viet-teal`}>VIETHEALTH</div>
        {!compact && <div className="mt-1 text-[12px] font-medium tracking-[0.01em] text-viet-muted md:text-[13px]">Trung tâm chỉnh hình uy tín</div>}
      </div>
    </a>
  );
}