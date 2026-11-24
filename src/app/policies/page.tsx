import { ShieldCheck, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PoliciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">출입 정책 관리</h1>
          <p className="text-sm text-muted-foreground mt-1">
            기관 및 구역별 보안 등급, 방문자 승인 정책을 구성합니다.
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-1.5" />
          정책 추가
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">출입 정책 규칙 목록</CardTitle>
          <CardDescription>보안 구역별 접근 권한 및 자동 승인 기준을 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex flex-col items-center justify-center text-muted-foreground text-sm">
          <ShieldCheck className="w-10 h-10 mb-2 stroke-1 text-muted-foreground/60" />
          <p>출입 정책 규칙 목록이 표시될 영역입니다.</p>
        </CardContent>
      </Card>
    </div>
  );
}
