import { Building2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InstitutionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">기관 관리</h1>
          <p className="text-sm text-muted-foreground mt-1">
            출입 통제 및 출입증 발급이 적용되는 기관을 등록하고 관리합니다.
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-1.5" />
          신규 기관 등록
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">등록된 기관 목록</CardTitle>
          <CardDescription>총 12개 기관이 등록되어 운영 중입니다.</CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex flex-col items-center justify-center text-muted-foreground text-sm">
          <Building2 className="w-10 h-10 mb-2 stroke-1 text-muted-foreground/60" />
          <p>기관 목록 테이블이 표시될 영역입니다.</p>
        </CardContent>
      </Card>
    </div>
  );
}
