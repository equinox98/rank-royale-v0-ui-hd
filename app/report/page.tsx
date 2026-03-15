"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Swords,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Globe,
  CalendarDays,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Zap,
  BarChart2,
  FileText,
  Trophy,
  MapPin,
} from "lucide-react"
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from "recharts"

function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
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

function ProgressBar({ value, max = 100, delay = 0 }: { value: number; max?: number; delay?: number }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth((value / max) * 100), 300 + delay)
    return () => clearTimeout(t)
  }, [value, max, delay])

  return (
    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
      <div
        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

const metrics = [
  { label: "Domain Authority", value: 38, max: 100, trend: "up", delta: "+4" },
  { label: "Page Speed (Desktop)", value: 72, max: 100, trend: "up", delta: "+12" },
  { label: "Backlinks", value: 142, max: 500, trend: "down", delta: "-58" },
  { label: "Core Web Vitals", value: 65, max: 100, trend: "up", delta: "+9" },
  { label: "Technical Health", value: 80, max: 100, trend: "up", delta: "+5" },
  { label: "Content Score", value: 55, max: 100, trend: "down", delta: "-8" },
]

const issues = [
  { severity: "critical", title: "Page speed below 1.5s target", desc: "Currently loading in 4.2s on mobile. Fix Core Web Vitals." },
  { severity: "critical", title: "Missing FAQ schema markup", desc: "3 FAQ pages detected with no structured data markup." },
  { severity: "warning", title: "Thin content on 5 service pages", desc: "Pages under 400 words are ranking poorly against competitors." },
  { severity: "warning", title: "No Google Business Profile link", desc: "Local SEO signal missing from site footer and contact page." },
  { severity: "info", title: "Images missing alt text", desc: "18 images detected without descriptive alt attributes." },
]

const opportunities = [
  { icon: Zap, title: "Improve page speed", pts: "+6 pts", desc: "Fix LCP — currently 4.2s, target 1.5s" },
  { icon: BarChart2, title: "Add FAQ schema to 3 pages", pts: "+4 pts", desc: "Unlock rich results on Google SERP" },
  { icon: FileText, title: "Create teeth whitening page", pts: "+8 pts", desc: "High-intent keyword with low competition" },
  { icon: Globe, title: "Build 10 local citations", pts: "+5 pts", desc: "Boost local pack rankings in London" },
]

const competitors = [
  { rank: 1, website: "SmileClinic.co.uk", backlinks: "4.2k", score: 94, da: 58 },
  { rank: 2, website: "LondonDentalCare.co.uk", backlinks: "3.1k", score: 91, da: 52 },
  { rank: 3, website: "BrightSmileDental.co.uk", backlinks: "2.8k", score: 88, da: 47 },
  { rank: 23, website: "YourSite.co.uk", backlinks: "142", score: 62, da: 38, isUser: true },
]

export default function ReportPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("rankroyale.com/report/yoursite")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scoreData = [{ name: "score", value: 62, fill: "oklch(0.65 0.2 42)" }]

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <Swords className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-bold text-sm text-foreground">
                Rank <span className="text-primary">Royale</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-[0_0_10px_var(--brand-orange-glow)]">
              <Share2 className="w-3.5 h-3.5" />
              Share Report
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Report Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">YourSite.co.uk</h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" /> London, UK
                </span>
                <span className="text-xs text-muted-foreground">London Dentists</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarDays className="w-3 h-3" /> March 15, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Share link */}
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 rounded-lg bg-secondary border border-border text-xs text-muted-foreground font-mono">
              rankroyale.com/report/yoursite
            </div>
          </div>
        </div>

        {/* Score + Metrics row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Power Score */}
          <div className="p-6 rounded-2xl bg-card border border-primary/30 flex flex-col items-center justify-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">SEO Power Score</p>
            <div className="relative w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="70%"
                  outerRadius="100%"
                  data={scoreData}
                  startAngle={180}
                  endAngle={-180}
                >
                  <RadialBar dataKey="value" cornerRadius={8} background={{ fill: "oklch(0.2 0 0)" }} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-primary">
                  <AnimatedNumber target={62} />
                </span>
                <span className="text-xs text-muted-foreground">/100</span>
              </div>
            </div>
            <div className="text-center">
              <span className="px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 text-xs font-semibold">
                Rank #23
              </span>
              <p className="text-xs text-muted-foreground mt-1">in London Dentists</p>
            </div>
          </div>

          {/* Metrics */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div key={m.label} className="p-4 rounded-xl bg-card border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{m.label}</span>
                  <span
                    className={`flex items-center gap-0.5 text-xs font-semibold ${
                      m.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {m.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {m.delta}
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-black text-foreground">
                    <AnimatedNumber target={m.value} duration={1200 + i * 100} />
                  </span>
                  <span className="text-xs text-muted-foreground mb-0.5">/{m.max}</span>
                </div>
                <ProgressBar value={m.value} max={m.max} delay={i * 80} />
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-bold text-foreground">Competitor Leaderboard</h2>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" /> London, UK
            </span>
          </div>
          <div className="grid grid-cols-5 px-6 py-3 bg-muted/40 border-b border-border">
            {["Rank", "Website", "Backlinks", "DA", "Power Score"].map((h) => (
              <span key={h} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {h}
              </span>
            ))}
          </div>
          {competitors.map((row) => (
            <div
              key={row.rank}
              className={`grid grid-cols-5 px-6 py-4 items-center border-b border-border last:border-b-0 transition-colors
                ${row.isUser ? "bg-primary/10 hover:bg-primary/15" : "hover:bg-secondary/40"}`}
            >
              <div className="flex items-center gap-2">
                {row.rank <= 3 ? (
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                      ${row.rank === 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
                  >
                    {row.rank === 1 ? <Trophy className="w-3.5 h-3.5" /> : row.rank}
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {row.rank}
                  </div>
                )}
                {row.isUser && (
                  <span className="px-1.5 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-bold">You</span>
                )}
              </div>
              <span className={`text-sm font-medium ${row.isUser ? "text-primary" : "text-foreground"}`}>
                {row.website}
              </span>
              <span className="text-sm text-muted-foreground">{row.backlinks}</span>
              <span className="text-sm text-muted-foreground">{row.da}</span>
              <span
                className={`text-sm font-bold ${
                  row.isUser
                    ? "text-primary"
                    : row.rank === 1
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {row.score} pts
              </span>
            </div>
          ))}
        </div>

        {/* Issues + Missions */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Issues */}
          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-bold text-foreground">Technical Issues</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Found {issues.length} issues on your site</p>
            </div>
            <div className="divide-y divide-border">
              {issues.map((issue, i) => (
                <div key={i} className="px-6 py-4 flex gap-3 items-start hover:bg-secondary/30 transition-colors">
                  <div className="mt-0.5 flex-shrink-0">
                    {issue.severity === "critical" ? (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    ) : issue.severity === "warning" ? (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{issue.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{issue.desc}</p>
                  </div>
                  <span
                    className={`ml-auto flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold
                      ${issue.severity === "critical"
                        ? "bg-red-400/10 text-red-400"
                        : issue.severity === "warning"
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {issue.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Missions */}
          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-bold text-foreground">SEO Missions</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Complete these to jump up the leaderboard</p>
            </div>
            <div className="p-4 space-y-3">
              {opportunities.map((opp, i) => {
                const Icon = opp.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-all group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {opp.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{opp.desc}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0 shadow-[0_0_8px_var(--brand-orange-glow)]">
                      {opp.pts}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
