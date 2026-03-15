"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ShareModal } from "@/components/share-modal"
import { ArrowLeft, Share2, Copy, Check, Globe, MapPin, Trophy, TrendingUp, AlertTriangle, CheckCircle2, Link as LinkIcon } from "lucide-react"
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"

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
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-orange-600 transition-all duration-1000"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export default function ExampleReportPage() {
  const [copied, setCopied] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main>
      <Navbar />
      
      {/* Header with back button */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 text-primary hover:bg-primary/25 transition-all text-sm font-medium"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
        reportUrl={typeof window !== "undefined" ? window.location.href : "rankroyale.tech/report/example"}
        reportId="RR-UK-2024-0847"
        seoScore={68}
        domain="londondentalcare.co.uk"
      />

      {/* Report content */}
      <div className="py-12 px-6 bg-gradient-to-b from-background to-surface-soft">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="mb-16">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">SEO Battle Report</span>
                </div>
                <h1 className="text-4xl font-bold text-foreground">londondentalcare.co.uk</h1>
                <p className="text-muted-foreground mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  London, UK • Generated today
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Audit ID</p>
                <p className="text-sm font-mono text-foreground">RR-UK-2024-0847</p>
              </div>
            </div>
          </div>

          {/* SEO Power Score */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Main score */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-raised border border-border overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <h2 className="text-lg font-bold text-foreground mb-8">Your SEO Power Score</h2>
                
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-7xl font-black text-foreground mb-2">
                      <AnimatedNumber target={68} />
                    </div>
                    <p className="text-muted-foreground">out of 100</p>
                  </div>
                  
                  <div className="w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="100%"
                        data={[{ value: 68, fill: "oklch(0.65 0.22 44)" }]}
                      >
                        <RadialBar dataKey="value" cornerRadius={10} />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Technical SEO</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">72%</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  <ProgressBar value={72} delay={100} />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Content Quality</span>
                    <span className="font-semibold text-foreground">68%</span>
                  </div>
                  <ProgressBar value={68} delay={200} />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Authority & Links</span>
                    <span className="font-semibold text-foreground">62%</span>
                  </div>
                  <ProgressBar value={62} delay={300} />
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="space-y-4">
              {[
                { label: "Ranking Keywords", value: "156", icon: Trophy },
                { label: "Backlinks", value: "1.24K", icon: LinkIcon },
                { label: "Domain Authority", value: "42", icon: TrendingUp },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl bg-surface-raised border border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-black text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="p-8 rounded-2xl bg-surface-raised border border-border mb-12 overflow-hidden">
            <h2 className="text-lg font-bold text-foreground mb-6">Live Rankings Leaderboard</h2>
            
            <div className="space-y-3">
              {[
                { rank: 1, site: "londondentalcare.co.uk", score: 68, badge: "You" },
                { rank: 2, site: "smiledentalclinic.co.uk", score: 82 },
                { rank: 3, site: "brightdentalcenter.co.uk", score: 75 },
                { rank: 4, site: "dentalhealth.london", score: 71 },
              ].map((item, i) => (
                <div
                  key={`${item.rank}-${item.site}`}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                    item.badge ? "bg-primary/15 border border-primary/40" : "bg-muted/50"
                  }`}
                  style={{
                    opacity: 1,
                    transform: "translateY(0)",
                    animation: `slideIn 0.5s ease ${i * 0.1}s both`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                      item.rank === 1 ? "bg-primary text-primary-foreground shadow-[0_0_12px_var(--brand-orange-glow)]" : "bg-border text-muted-foreground"
                    }`}>
                      {item.rank === 1 ? <Trophy className="w-5 h-5" /> : item.rank}
                    </div>
                    <div>
                      <p className={`font-semibold ${item.badge ? "text-primary" : "text-foreground"}`}>{item.site}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-[0_0_8px_var(--brand-orange-glow)]">
                        {item.badge}
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary font-bold text-sm">{item.score} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Issues found */}
          <div className="p-8 rounded-2xl bg-surface-raised border border-border mb-12">
            <h2 className="text-lg font-bold text-foreground mb-6">Issues Found (8)</h2>
            
            <div className="space-y-3">
              {[
                { severity: "High", issue: "Page speed below 2s threshold", action: "Optimize images and enable compression" },
                { severity: "High", issue: "Missing FAQ schema markup", action: "Add structured data for featured snippets" },
                { severity: "Medium", issue: "Mobile usability issues on 2 pages", action: "Fix button sizing and touch targets" },
                { severity: "Low", issue: "Outdated copyright year in footer", action: "Update to 2024" },
              ].map((item, i) => (
                <div
                  key={`${item.severity}-${item.issue}`}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border/50"
                  style={{
                    opacity: 1,
                    animation: `slideIn 0.5s ease ${i * 0.1}s both`,
                  }}
                >
                  <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    item.severity === "High" ? "text-destructive" : item.severity === "Medium" ? "text-amber-400" : "text-blue-400"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{item.issue}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.action}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0 ${
                    item.severity === "High" ? "bg-destructive/20 text-destructive" : item.severity === "Medium" ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {item.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Missions */}
          <div className="p-8 rounded-2xl bg-surface-raised border border-border mb-12">
            <h2 className="text-lg font-bold text-foreground mb-6">SEO Missions to Win (+24 points possible)</h2>
            
            <div className="space-y-3">
              {[
                { title: "Improve page speed to under 2s", points: 6 },
                { title: "Add FAQ schema markup", points: 4 },
                { title: "Build 10 high-quality backlinks", points: 8 },
                { title: "Create content for 'emergency dentist'", points: 6 },
              ].map((mission, i) => (
                <div
                  key={mission.title}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/40 transition-colors group"
                  style={{
                    opacity: 1,
                    animation: `slideIn 0.5s ease ${i * 0.1}s both`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="font-medium text-foreground">{mission.title}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-[0_0_8px_var(--brand-orange-glow)]">
                    +{mission.points} pts
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Want a report like this?</h3>
                <p className="text-muted-foreground">Run your own SEO battle and get a shareable report in seconds.</p>
              </div>
              <Link
                href="/#hero"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all shadow-[0_0_16px_var(--brand-orange-glow)] whitespace-nowrap"
              >
                Run SEO Battle
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
