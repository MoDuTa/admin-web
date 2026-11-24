"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  ShieldCheck,
  CalendarCheck,
  CreditCard,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "대시보드", href: "/", icon: LayoutDashboard },
  { name: "기관 관리", href: "/institutions", icon: Building2 },
  { name: "출입 정책", href: "/policies", icon: ShieldCheck },
  { name: "예약 관리", href: "/reservations", icon: CalendarCheck },
  { name: "출입증 관리", href: "/passes", icon: CreditCard },
  { name: "시스템 설정", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-card flex flex-col min-h-screen">
      <div className="h-16 flex items-center px-6 border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-primary tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
            GG
          </div>
          <span>공공 관리자</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t text-xs text-muted-foreground">
        <p className="font-medium text-foreground">admin-web v0.1.0</p>
        <p className="mt-0.5">기관 및 출입 관리 시스템</p>
      </div>
    </aside>
  );
}
