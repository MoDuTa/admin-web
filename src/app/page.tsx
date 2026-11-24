"use client";

import { useState } from "react";
import {
  Building2,
  CalendarCheck,
  CreditCard,
  Clock,
  Search,
  CheckCircle2,
  Plus,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
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
    desc: "정상 운영 중",
    icon: Building2,
  },
  {
    title: "오늘 방문 예약",
    value: "48건",
    desc: "32명 입장 완료",
    icon: CalendarCheck,
  },
  {
    title: "활성 출입증",
    value: "126건",
    desc: "발급 및 유효 상태",
    icon: CreditCard,
  },
  {
    title: "승인 대기",
    value: "5건",
    desc: "관리자 검토 필요",
    icon: Clock,
    urgent: true,
  },
];

const mockReservations = [
  {
    id: "RSV-20261124-001",
    visitor: "김철수",
    affiliation: "데이터솔루션 협력사",
    place: "본청 3층 데이터운영과",
    time: "14:00",
    status: "approved",
    statusLabel: "승인 완료",
  },
  {
    id: "RSV-20261124-002",
    visitor: "이영희",
    affiliation: "클라우드 인프라팀",
    place: "전산센터 2층 서버실",
    time: "14:30",
    status: "pending",
    statusLabel: "승인 대기",
  },
  {
    id: "RSV-20261124-003",
    visitor: "박민수",
    affiliation: "보안 점검 위원회",
    place: "별관 5층 종합상황실",
    time: "15:00",
    status: "approved",
    statusLabel: "승인 완료",
  },
  {
    id: "RSV-20261124-004",
    visitor: "정수진",
    affiliation: "네트워크 관리업체",
    place: "본청 1층 통신실",
    time: "16:00",
    status: "checked_in",
    statusLabel: "입장 완료",
  },
];

const mockPasses = [
  {
    passId: "PASS-QR-9921",
    holder: "김철수",
    type: "일일 방문증 (QR)",
    targetArea: "본청 일반구역",
    expireAt: "오늘 18:00",
    status: "active",
  },
  {
    passId: "PASS-QR-9922",
    holder: "박민수",
    type: "보안구역 출입증 (QR)",
    targetArea: "별관 보안구역",
    expireAt: "오늘 20:00",
    status: "active",
  },
  {
    passId: "PASS-QR-9920",
    holder: "최지훈",
    type: "일일 방문증 (QR)",
    targetArea: "본청 로비",
    expireAt: "13:00 만료",
    status: "expired",
  },
];

const mockInstitutions = [
  { name: "본청", code: "INST-HQ", zones: "일반구역, 통신실, 데이터운영과", managers: 4 },
  { name: "전산센터", code: "INST-DC", zones: "보안구역, 서버실, 전원실", managers: 6 },
  { name: "별관", code: "INST-ANNEX", zones: "종합상황실, 회의실", managers: 2 },
];

export default function SinglePageDashboard() {
  const [activeTab, setActiveTab] = useState<"reservations" | "passes" | "institutions">("reservations");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReservations = mockReservations.filter((r) =>
    r.visitor.includes(searchTerm) || r.affiliation.includes(searchTerm) || r.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen">
      {/* 상단 네비게이션 헤더 */}
      <header className="border-b bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wider">
              GG
            </div>
            <div>
              <span className="font-bold text-base text-slate-900">공공 관리자 시스템</span>
              <span className="ml-2 text-xs text-slate-500 font-normal">admin-web</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              서버 정상 연결
            </Badge>
            <div className="text-right text-xs">
              <p className="font-medium text-slate-800">관리자 계정</p>
              <p className="text-slate-400">admin@gonggong.local</p>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* 상단 페이지 소개 & 액션 바 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">통합 관리 대시보드</h1>
            <p className="text-sm text-slate-500 mt-1">
              기관 등록 현황, 출입 정책, 방문 예약 및 출입증을 단일 화면에서 관리합니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="text-xs"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1 text-slate-500" />
              새로고침
            </Button>
            <Button size="sm" className="text-xs">
              <Plus className="w-3.5 h-3.5 mr-1" />
              신규 등록 / 발급
            </Button>
          </div>
        </div>

        {/* 요약 통계 카드 4종 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className={stat.urgent ? "border-amber-300 bg-amber-50/20" : ""}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`w-4 h-4 ${stat.urgent ? "text-amber-500" : "text-slate-400"}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <p className="text-xs text-slate-500 mt-1">{stat.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 탭 네비게이션 및 검색 바 */}
        <Card className="border">
          <CardHeader className="pb-3 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* 심플 탭 버튼 그룹 */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg w-fit">
                <button
                  type="button"
                  onClick={() => setActiveTab("reservations")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === "reservations"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  방문 예약 현황 ({mockReservations.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("passes")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === "passes"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  출입증 관리 ({mockPasses.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("institutions")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === "institutions"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  기관 목록 ({mockInstitutions.length})
                </button>
              </div>

              {/* 검색 인풋 */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="방문자, 소속 또는 번호 검색..."
                  className="pl-9 h-9 text-xs"
                />
              </div>
            </div>
          </CardHeader>

          {/* 탭 1: 방문 예약 현황 */}
          {activeTab === "reservations" && (
            <CardContent className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-xs">예약번호</TableHead>
                    <TableHead className="text-xs">방문자</TableHead>
                    <TableHead className="text-xs">소속</TableHead>
                    <TableHead className="text-xs">방문 장소</TableHead>
                    <TableHead className="text-xs">예약 일시</TableHead>
                    <TableHead className="text-xs">상태</TableHead>
                    <TableHead className="text-xs text-right">관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReservations.map((item) => (
                    <TableRow key={item.id} className="text-xs">
                      <TableCell className="font-mono text-slate-500">{item.id}</TableCell>
                      <TableCell className="font-medium text-slate-900">{item.visitor}</TableCell>
                      <TableCell className="text-slate-600">{item.affiliation}</TableCell>
                      <TableCell className="text-slate-600">{item.place}</TableCell>
                      <TableCell className="text-slate-600">{item.time}</TableCell>
                      <TableCell>
                        {item.status === "approved" && (
                          <Badge variant="secondary" className="text-[11px] bg-blue-50 text-blue-700 border-blue-200">
                            {item.statusLabel}
                          </Badge>
                        )}
                        {item.status === "pending" && (
                          <Badge variant="outline" className="text-[11px] text-amber-600 border-amber-300 bg-amber-50/50">
                            {item.statusLabel}
                          </Badge>
                        )}
                        {item.status === "checked_in" && (
                          <Badge variant="secondary" className="text-[11px] bg-emerald-50 text-emerald-700 border-emerald-200 flex items-center gap-1 w-fit">
                            <CheckCircle2 className="w-3 h-3" />
                            {item.statusLabel}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="xs" className="text-xs">
                          상세보기
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredReservations.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-slate-400 text-xs">
                        검색 결과가 없습니다.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          )}

          {/* 탭 2: 출입증 관리 */}
          {activeTab === "passes" && (
            <CardContent className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-xs">출입증 ID</TableHead>
                    <TableHead className="text-xs">소지자</TableHead>
                    <TableHead className="text-xs">종류</TableHead>
                    <TableHead className="text-xs">출입 가능 구역</TableHead>
                    <TableHead className="text-xs">만료 일시</TableHead>
                    <TableHead className="text-xs">상태</TableHead>
                    <TableHead className="text-xs text-right">관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPasses.map((pass) => (
                    <TableRow key={pass.passId} className="text-xs">
                      <TableCell className="font-mono text-slate-500">{pass.passId}</TableCell>
                      <TableCell className="font-medium text-slate-900">{pass.holder}</TableCell>
                      <TableCell className="text-slate-600">{pass.type}</TableCell>
                      <TableCell className="text-slate-600">{pass.targetArea}</TableCell>
                      <TableCell className="text-slate-600">{pass.expireAt}</TableCell>
                      <TableCell>
                        {pass.status === "active" ? (
                          <Badge variant="secondary" className="text-[11px] bg-emerald-50 text-emerald-700 border-emerald-200">
                            유효함
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[11px] text-slate-400">
                            만료됨
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="xs" className="text-xs">
                          {pass.status === "active" ? "권한 회수" : "재발급"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          )}

          {/* 탭 3: 기관 목록 */}
          {activeTab === "institutions" && (
            <CardContent className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-xs">기관명</TableHead>
                    <TableHead className="text-xs">기관 코드</TableHead>
                    <TableHead className="text-xs">보안 구역 설정</TableHead>
                    <TableHead className="text-xs">담당 관리자 수</TableHead>
                    <TableHead className="text-xs text-right">관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockInstitutions.map((inst) => (
                    <TableRow key={inst.code} className="text-xs">
                      <TableCell className="font-medium text-slate-900 flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {inst.name}
                      </TableCell>
                      <TableCell className="font-mono text-slate-500">{inst.code}</TableCell>
                      <TableCell className="text-slate-600">{inst.zones}</TableCell>
                      <TableCell className="text-slate-600">{inst.managers}명</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="xs" className="text-xs">
                          설정
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          )}
        </Card>
      </main>
    </div>
  );
}
