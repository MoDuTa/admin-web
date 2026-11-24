import {
  Building2,
  CalendarCheck,
  CreditCard,
  Clock,
  Plus,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

const summaryStats = [
  {
    title: "등록 기관",
    value: "12개소",
    desc: "전월 대비 2개소 증가",
    icon: Building2,
  },
  {
    title: "오늘 방문 예정",
    value: "48건",
    desc: "현재 32명 입장 완료",
    icon: CalendarCheck,
  },
  {
    title: "활성 출입증",
    value: "126건",
    desc: "유효 기간 내 QR/카드",
    icon: CreditCard,
  },
  {
    title: "승인 대기",
    value: "5건",
    desc: "관리자 검토 필요",
    icon: Clock,
    highlight: true,
  },
];

const recentVisits = [
  {
    id: "RSV-20261124-001",
    visitor: "김철수",
    company: "데이터솔루션 협력사",
    place: "본청 3층 데이터운영과",
    time: "14:00",
    status: "approved",
    statusLabel: "승인 완료",
  },
  {
    id: "RSV-20261124-002",
    visitor: "이영희",
    company: "클라우드 인프라팀",
    place: "전산센터 2층 서버실",
    time: "14:30",
    status: "pending",
    statusLabel: "승인 대기",
  },
  {
    id: "RSV-20261124-003",
    visitor: "박민수",
    company: "보안 점검 위원회",
    place: "별관 5층 종합상황실",
    time: "15:00",
    status: "approved",
    statusLabel: "승인 완료",
  },
  {
    id: "RSV-20261124-004",
    visitor: "정수진",
    company: "네트워크 관리업체",
    place: "본청 1층 통신실",
    time: "16:00",
    status: "checked_in",
    statusLabel: "입장 완료",
  },
];

export default function DashboardPage() {
  return (
      <div className="space-y-6">
        {/* 상단 페이지 헤더 & 액션 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">대시보드</h1>
              <p className="text-sm text-slate-500 mt-1">
                기관별 출입 정책, 방문 예약 및 출입증 발급 현황을 한눈에 확인합니다.
              </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <RefreshCw className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
              새로고침
            </Button>
            <Button size="sm" className="text-xs">
              <Plus className="w-3.5 h-3.5 mr-1.5" />
              방문 예약 등록
            </Button>
          </div>
        </div>

            {/* 요약 통계 카드 그리드 */ }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {summaryStats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <Card key={stat.title} className={stat.highlight ? "border-amber-300 bg-amber-50/20" : ""}>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium text-slate-600">
                            {stat.title}
                          </CardTitle>
                          <Icon className={`w-4 h-4 ${stat.highlight ? "text-amber-500" : "text-slate-400"}`} />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                        <p className="text-xs text-slate-500 mt-1">{stat.desc}</p>
                      </CardContent>
                    </Card>
                    );
        })}
                  </div>

      {/* 2단 분할 콘텐츠 영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 좌측 2열: 최근 방문 예약 현황 */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-base font-semibold text-slate-900">
                오늘의 방문 예약 현황
              </CardTitle>
              <CardDescription className="text-xs text-slate-500 mt-0.5">
                당일 예정된 방문객 출입 신청 내역입니다.
              </CardDescription>
            </div>
            <Button variant="ghost" size="xs" className="text-xs text-slate-500">
              전체보기
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </CardHeader>

          <CardContent className="pt-0">
            <Table>
              <TableHeader>
                <TableRow className="text-xs hover:bg-transparent">
                  <TableHead>예약번호</TableHead>
                  <TableHead>방문자</TableHead>
                  <TableHead>소속</TableHead>
                  <TableHead>방문 장소</TableHead>
                  <TableHead>예약 시간</TableHead>
                  <TableHead>상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentVisits.map((visit) => (
                  <TableRow key={visit.id} className="text-xs">
                    <TableCell className="font-mono text-slate-500">{visit.id}</TableCell>
                    <TableCell className="font-medium text-slate-900">{visit.visitor}</TableCell>
                    <TableCell className="text-slate-600">{visit.company}</TableCell>
                    <TableCell className="text-slate-600">{visit.place}</TableCell>
                    <TableCell className="text-slate-600">{visit.time}</TableCell>
                    <TableCell>
                      {visit.status === "approved" && (
                        <Badge variant="secondary" className="text-[11px] bg-blue-50 text-blue-700 border-blue-200">
                          {visit.statusLabel}
                        </Badge>
                      )}
                      {visit.status === "pending" && (
                        <Badge variant="outline" className="text-[11px] text-amber-600 border-amber-300 bg-amber-50/50">
                          {visit.statusLabel}
                        </Badge>
                      )}
                      {visit.status === "checked_in" && (
                        <Badge variant="secondary" className="text-[11px] bg-emerald-50 text-emerald-700 border-emerald-200 flex items-center gap-1 w-fit">
                          <CheckCircle2 className="w-3 h-3" />
                          {visit.statusLabel}
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
                  </CardContent>
                </Card>

                {/* 우측 1열: 빠른 작업 & 시스템 현황 */ }
                <div className="space-y-6">
                  {/* 빠른 작업 */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base font-semibold text-slate-900">
                        빠른 작업
                      </CardTitle>
                      <CardDescription className="text-xs text-slate-500">
                        자주 사용하는 관리 기능입니다.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 pt-0">
                      <Button variant="outline" className="w-full justify-start text-xs h-9" size="sm">
                        <Building2 className="w-4 h-4 mr-2 text-slate-500" />
                        신규 기관 등록
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs h-9" size="sm">
                        <CreditCard className="w-4 h-4 mr-2 text-slate-500" />
                        일일 출입증(QR) 수동 발급
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs h-9" size="sm">
                        <ShieldCheck className="w-4 h-4 mr-2 text-slate-500" />
                        보안구역 출입 정책 설정
                      </Button>
                    </CardContent>
                  </Card>

                  {/* 시스템 안내 */}
                  <Card className="bg-slate-50/80 border-slate-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold text-slate-800">
                        안내 사항
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-500 space-y-1.5 pt-0">
                      <p>• 출입증 발급 시 1인 1QR 정책이 기본 적용됩니다.</p>
                      <p>• 긴급 점검 시간: 매주 수요일 02:00 ~ 03:00</p>
                    </CardContent>
                  </Card>
                </div>
      </div>
    </div>
        );
}
