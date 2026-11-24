import { CalendarCheck, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReservationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">예약 관리</h1>
          <p className="text-sm text-muted-foreground mt-1">
            방문객 예약 신청 건을 조회하고 승인 또는 반려합니다.
          </p>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-1.5" />
          필터 검색
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">방문 예약 신청 목록</CardTitle>
          <CardDescription>전체 방문 예약 현황을 조회합니다.</CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex flex-col items-center justify-center text-muted-foreground text-sm">
          <CalendarCheck className="w-10 h-10 mb-2 stroke-1 text-muted-foreground/60" />
          <p>방문 예약 상세 목록 및 필터링 기능이 위치할 영역입니다.</p>
        </CardContent>
      </Card>
    </div>
  );
}
