import { Settings, ShieldCheck, User } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "10+ năm kinh nghiệm", desc: "Trong lĩnh vực chỉnh hình" },
  { icon: Settings, title: "Hàng ngàn khách hàng", desc: "Đã phục hồi vận động" },
  { icon: User, title: "Đội ngũ chuyên gia", desc: "Tận tâm và giàu kinh nghiệm" },
];

export function FeatureBar() {
  return (
    <div className="pointer-events-auto absolute bottom-6 left-1/2 hidden w-[min(1180px,calc(100%-96px))] -translate-x-1/2 rounded-soft border border-white/80 bg-white/92 px-12 py-7 shadow-soft backdrop-blur md:block">
      <div className="grid grid-cols-3 divide-x divide-viet-border/70">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center justify-center gap-7 px-8 first:pl-0 last:pr-0">
            <Icon className="h-8 w-8 shrink-0 text-viet-teal" strokeWidth={1.8} />
            <div><h3 className="text-[16px] font-extrabold text-viet-text">{title}</h3><p className="mt-2 text-[14px] font-medium text-viet-muted">{desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}