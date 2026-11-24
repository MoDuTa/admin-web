import { CreditCard, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">출입증 관리</h1>
          <p className="text-sm text-muted-foreground mt-1">
            QR 및 모바일 출입증 발급 현황을 모니터링하고 권한을 회수합니다.
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-1.5" />
          출입증 수동 발급
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">출입증 발급 현황</CardTitle>
          <CardDescription>활성화된 출입증 및 만료된 출입증 내역입니다.</CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex flex-col items-center justify-center text-muted-foreground text-sm">
          <CreditCard className="w-10 h-10 mb-2 stroke-1 text-muted-foreground/60" />
          <p>출입증 관리 및 상태 제어 테이블이 표시될 영역입니다.</p>
        </CardContent>
      </Card>
    </div>
  );
}
