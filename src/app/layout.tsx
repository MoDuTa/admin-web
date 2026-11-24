import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Shield, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-50/50 text-slate-900 flex flex-col`}
      >
        {/* 상단 글로벌 네비게이션 헤더 */}
        <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            {/* 로고 & 메인 메뉴 */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base tracking-tight">공공 관리자</span>
                  <span className="text-xs text-slate-400 font-normal">admin-web</span>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                <Link
                  href="/"
                  className="px-3 py-1.5 rounded-md text-slate-900 bg-slate-100 font-semibold"
                >
                  대시보드
                </Link>
                <Link
                  href="#"
                  className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  기관 관리
                </Link>
                <Link
                  href="#"
                  className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  출입 정책
                </Link>
                <Link
                  href="#"
                  className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  예약 및 출입증
                </Link>
              </nav>
            </div>

            {/* 우측 관리자 정보 */}
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="hidden sm:inline-flex text-xs text-emerald-700 bg-emerald-50 border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                정상 운영 중
              </Badge>

              <button
                type="button"
                className="w-8 h-8 rounded-md flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors relative"
                aria-label="알림"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
              </button>

              <div className="h-4 w-px bg-slate-200" />

              <div className="flex items-center gap-2.5">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-slate-900 text-white text-xs font-medium">
                    관
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block text-left text-xs leading-tight">
                  <p className="font-semibold text-slate-800">관리자</p>
                  <p className="text-slate-400">admin@gonggong.local</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>

        {/* 하단 푸터 */}
        <footer className="border-t bg-white py-4 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <p>© 2026 공공기관 통합 출입 관리 시스템. All rights reserved.</p>
            <p className="font-mono">admin-web v0.1.0</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
