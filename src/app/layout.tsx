import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdminLayout } from "@/components/layout/admin-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "공공 관리자 시스템 | admin-web",
  description: "기관 등록, 출입 정책, 예약 및 출입증 관리 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-foreground bg-background`}
      >
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
