"use client";

import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="h-16 border-b bg-card px-6 flex items-center justify-between gap-4 sticky top-0 z-10">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="기관명, 예약자, 출입증 번호 검색..."
            className="pl-9 bg-background h-9 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative" aria-label="알림">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
        </Button>

        <div className="flex items-center gap-3 pl-3 border-l">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
              관
            </AvatarFallback>
          </Avatar>
          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium">관리자</span>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">총괄</Badge>
            </div>
            <p className="text-xs text-muted-foreground">admin@gonggong.go.kr</p>
          </div>
        </div>
      </div>
    </header>
  );
}
