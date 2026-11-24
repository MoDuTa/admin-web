import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  CreditCard,
  Clock,
  Plus,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const summaryCards = [
  {
    title: "등록 기관",
    value: "12개소",
    description: "전월 대비 2개소 증가",
    icon: Building2,
  },
  {
    title: "오늘 방문 예정",
    value: "48건",
    description: "현재 32명 입장 완료",
    icon: CalendarCheck,
  },
  {
    title: "활성 출입증",
    value: "126건",
    description: "유효 기간 내 출입증",
    icon: CreditCard,
  },
  {
    title: "승인 대기",
    value: "5건",
    description: "관리자 검토 필요",
    icon: Clock,
    highlight: true,
  },
];

const recentReservations = [
  {
    id: "RSV-20261124-001",
    visitor: "김철수",
    organization: "공공데이터포털 협력사",
    institution: "본청 3층 데이터운영과",
    scheduledAt: "2026-11-24 14:00",
    status: "approved",
    statusLabel: "승인 완료",
  },
  {
    id: "RSV-20261124-002",
    visitor: "이영희",
    organization: "클라우드 인프라팀",
    institution: "전산센터 2층 서버실",
    scheduledAt: "2026-11-24 14:30",
    status: "pending",
    statusLabel: "승인 대기",
  },
  {
    id: "RSV-20261124-003",
    visitor: "박민수",
    organization: "보안 점검 위원회",
    institution: "별관 5층 종합상황실",
    scheduledAt: "2026-11-24 15:00",
    status: "approved",
    statusLabel: "승인 완료",
  },
  {
    id: "RSV-20261124-004",
    visitor: "정수진",
    organization: "네트워크 솔루션",
    institution: "본청 1층 통신실",
    scheduledAt: "2026-11-24 16:00",
    status: "checked_in",
    statusLabel: "입장 완료",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 상단 헤더 & 액션 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
          <p className="text-sm text-muted-foreground mt-1">
            기관 등록 현황 및 출입 정책, 예약 현황을 실시간으로 확인합니다.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/institutions"
            className={buttonVariants({ variant: "outline" })}
          >
            <Building2 className="w-4 h-4 mr-1.5" />
            기관 관리
          </Link>
          <Link
            href="/passes"
            className={buttonVariants({ variant: "default" })}
          >
            <Plus className="w-4 h-4 mr-1.5" />
            출입증 발급
          </Link>
        </div>
      </div>

      {/* 요약 카드 그리드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className={card.highlight ? "border-amber-500/50" : ""}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 최근 예약 및 출입 현황 테이블 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">최근 방문 예약 현황</CardTitle>
            <CardDescription className="text-xs mt-1">
              오늘 승인 및 검토가 필요한 예약 목록입니다.
            </CardDescription>
          </div>
          <Link
            href="/reservations"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <span className="text-xs flex items-center gap-1">
              전체 보기
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>예약 번호</TableHead>
                <TableHead>방문자</TableHead>
                <TableHead>소속</TableHead>
                <TableHead>방문 기관 및 장소</TableHead>
                <TableHead>예약 일시</TableHead>
                <TableHead>상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentReservations.map((res) => (
                <TableRow key={res.id}>
                  <TableCell className="font-mono text-xs">{res.id}</TableCell>
                  <TableCell className="font-medium">{res.visitor}</TableCell>
                  <TableCell className="text-muted-foreground text-xs">{res.organization}</TableCell>
                  <TableCell className="text-xs">{res.institution}</TableCell>
                  <TableCell className="text-xs">{res.scheduledAt}</TableCell>
                  <TableCell>
                    {res.status === "approved" && (
                      <Badge variant="secondary" className="text-[11px] bg-blue-50 text-blue-700 border-blue-200">
                        {res.statusLabel}
                      </Badge>
                    )}
                    {res.status === "pending" && (
                      <Badge variant="outline" className="text-[11px] text-amber-600 border-amber-300">
                        {res.statusLabel}
                      </Badge>
                    )}
                    {res.status === "checked_in" && (
                      <Badge variant="secondary" className="text-[11px] bg-emerald-50 text-emerald-700 border-emerald-200 flex items-center gap-1 w-fit">
                        <CheckCircle2 className="w-3 h-3" />
                        {res.statusLabel}
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
