import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIETHEALTH - Trung tâm chỉnh hình uy tín",
  description: "Giải pháp chân tay giả và nẹp chỉnh hình thiết kế riêng cho từng cá nhân.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}