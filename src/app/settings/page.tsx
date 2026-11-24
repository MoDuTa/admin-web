import { Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">시스템 설정</h1>
        <p className="text-sm text-muted-foreground mt-1">
          관리자 권한, 알림 연동 및 시스템 기본 환경을 설정합니다.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">기본 환경 설정</CardTitle>
          <CardDescription>시스템 환경 설정 옵션입니다.</CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex flex-col items-center justify-center text-muted-foreground text-sm">
          <Settings className="w-10 h-10 mb-2 stroke-1 text-muted-foreground/60" />
          <p>시스템 설정 세부 항목이 표시될 영역입니다.</p>
        </CardContent>
      </Card>
    </div>
  );
}
