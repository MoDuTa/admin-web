import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md border shadow-sm">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-2">
            <Badge variant="outline" className="text-xs text-emerald-700 bg-emerald-50 border-emerald-200">
              admin-web
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-slate-900">
            공공 관리자 시스템
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 mt-1">
            Next.js 15, Tailwind CSS, shadcn/ui 기반 초기 세팅
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pt-2">
          <div className="rounded-lg bg-slate-50 p-3.5 border text-xs text-slate-600 space-y-1.5">
            <p className="font-medium text-slate-800">기본 스택</p>
            <p>• Framework: Next.js 15 (App Router)</p>
            <p>• Styling: Tailwind CSS v4</p>
            <p>• Components: shadcn/ui</p>
          </div>

          <div className="flex justify-center gap-2 pt-1">
            <Button size="sm">시작하기</Button>
            <Button variant="outline" size="sm">
              설정
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
