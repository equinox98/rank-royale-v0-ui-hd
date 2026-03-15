"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Swords,
  LayoutDashboard,
  Globe,
  FileBarChart,
  Settings,
  Plus,
  TrendingUp,
  TrendingDown,
  Zap,
  Clock,
  Trophy,
  ArrowRight,
  Bell,
  Search,
  ChevronRight,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const scoreHistory = [
  { month: "Oct", score: 44 },
  { month: "Nov", score: 48 },
  { month: "Dec", score: 51 },
  { month: "Jan", score: 55 },
  { month: "Feb", score: 58 },
  { month: "Mar", score: 62 },
]

const competitorData = [
  { name: "SmileClinic", score: 94 },
  { name: "LondonDental", score: 91 },
  { name: "BrightSmile", score: 88 },
  { name: "YourSite", score: 62 },
  { name: "DentalHub", score: 58 },
]

const recentReports = [
  {
    site: "YourSite.co.uk",
    niche: "London Dentists",
    score: 62,
    rank: 23,
    date: "Mar 15, 2025",
    trend: "up",
    delta: "+4",
  },
  {
    site: "ClientA.co.uk",
    niche: "Manchester Solicitors",
    score: 77,
    rank: 8,
    date: "Mar 12, 2025",
    trend: "up",
    delta: "+11",
  },
  {
    site: "ClientB.co.uk",
    niche: "Birmingham Plumbers",
    score: 53,
    rank: 31,
    date: "Mar 10, 2025",
    trend: "down",
    delta: "-2",
  },
]

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard", active: true },
  { icon: Globe, label: "Websites", href: "#" },
  { icon: FileBarChart, label: "Reports", href: "/report" },
  { icon: Trophy, label: "Leaderboard", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
]

function AnimatedNumber({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return <>{current}</>
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 text-xs">
        <p className="text-muted-foreground mb-1">{label}</p>
        <p className="font-bold text-primary">{payload[0].value} pts</p>
      </div>
    )
  }
  return null
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="h-14 flex items-center px-5 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_10px_var(--brand-orange-glow)]">
              <Swords className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-sm text-foreground">
              Rank <span className="text-primary">Royale</span>
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${item.active
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-sidebar-border">
          <Link
            href="/#hero"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity shadow-[0_0_12px_var(--brand-orange-glow)]"
          >
            <Plus className="w-3.5 h-3.5" />
            New SEO Battle
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                placeholder="Search reports..."
                className="pl-9 pr-4 py-1.5 rounded-lg bg-secondary border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-52"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 transition-colors">
              <Bell className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
              JW
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">Overview</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Welcome back, James. Here's your SEO battlefield.</p>
            </div>
            <Link
              href="/#hero"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity shadow-[0_0_12px_var(--brand-orange-glow)]"
            >
              <Zap className="w-3.5 h-3.5" />
              New Audit
            </Link>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Websites Analyzed",
                value: 3,
                icon: Globe,
                trend: "+1 this month",
                positive: true,
              },
              {
                label: "Avg SEO Score",
                value: 64,
                icon: Zap,
                trend: "+6 pts vs last month",
                positive: true,
              },
              {
                label: "Reports Generated",
                value: 12,
                icon: FileBarChart,
                trend: "+4 this month",
                positive: true,
              },
              {
                label: "Best Ranking",
                value: 8,
                icon: Trophy,
                trend: "ClientA.co.uk",
                positive: true,
                prefix: "#",
              },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-foreground">
                    {stat.prefix}
                    <AnimatedNumber target={stat.value} duration={1200 + i * 100} />
                  </p>
                  <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Score over time */}
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-semibold text-foreground text-sm">SEO Score Over Time</h2>
                  <p className="text-xs text-muted-foreground">YourSite.co.uk — last 6 months</p>
                </div>
                <span className="text-xs text-green-400 flex items-center gap-1 font-semibold">
                  <TrendingUp className="w-3 h-3" /> +18 pts
                </span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={scoreHistory} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.2 42)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="oklch(0.65 0.2 42)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0 0)" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: "oklch(0.55 0 0)" }} />
                  <YAxis tick={{ fontSize: 10, fill: "oklch(0.55 0 0)" }} domain={[30, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="oklch(0.65 0.2 42)"
                    strokeWidth={2}
                    fill="url(#scoreGrad)"
                    dot={{ fill: "oklch(0.65 0.2 42)", r: 3 }}
                    activeDot={{ r: 5, fill: "oklch(0.65 0.2 42)" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Competitor bar chart */}
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-semibold text-foreground text-sm">Competitor Benchmark</h2>
                  <p className="text-xs text-muted-foreground">London Dentists — power scores</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={competitorData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0 0)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "oklch(0.55 0 0)" }} />
                  <YAxis tick={{ fontSize: 10, fill: "oklch(0.55 0 0)" }} domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="score"
                    radius={[4, 4, 0, 0]}
                    fill="oklch(0.25 0 0)"
                    // highlight user bar
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="rounded-xl bg-card border border-border overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold text-foreground text-sm">Recent Reports</h2>
              <Link
                href="/report"
                className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                View all
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {recentReports.map((report, i) => (
                <Link
                  key={i}
                  href="/report"
                  className="flex items-center gap-4 px-5 py-4 hover:bg-secondary/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                    <Globe className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {report.site}
                    </p>
                    <p className="text-xs text-muted-foreground">{report.niche}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-sm font-bold text-foreground">{report.score} pts</span>
                      <span
                        className={`text-xs font-semibold flex items-center gap-0.5 ${
                          report.trend === "up" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {report.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {report.delta}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end mt-0.5">
                      <span className="text-xs text-muted-foreground">Rank #{report.rank}</span>
                      <span className="text-[10px] text-muted-foreground/60">·</span>
                      <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                        <Clock className="w-2.5 h-2.5" />
                        {report.date}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
