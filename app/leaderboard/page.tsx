"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Trophy, TrendingUp, MapPin, Globe, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { CtaSection } from "@/components/cta-section"

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

const leaderboardData = [
  {
    rank: 1,
    domain: "londondentalcare.co.uk",
    category: "London Dentists",
    seoScore: 82,
    backlinks: "1.24K",
    powerScore: 89,
    trend: "up",
    change: 5,
  },
  {
    rank: 2,
    domain: "smiledentalclinic.co.uk",
    category: "London Dentists",
    seoScore: 78,
    backlinks: "980",
    powerScore: 85,
    trend: "up",
    change: 3,
  },
  {
    rank: 3,
    domain: "brightdentalcenter.co.uk",
    category: "London Dentists",
    seoScore: 75,
    backlinks: "856",
    powerScore: 82,
    trend: "up",
    change: 8,
  },
  {
    rank: 4,
    domain: "dentalhealth.london",
    category: "London Dentists",
    seoScore: 71,
    backlinks: "654",
    powerScore: 78,
    trend: "down",
    change: 2,
  },
  {
    rank: 5,
    domain: "premierdentalltd.co.uk",
    category: "London Dentists",
    seoScore: 68,
    backlinks: "523",
    powerScore: 74,
    trend: "up",
    change: 4,
  },
  {
    rank: 6,
    domain: "cosmetic-dentistry.london",
    category: "London Dentists",
    seoScore: 64,
    backlinks: "412",
    powerScore: 70,
    trend: "down",
    change: 1,
  },
  {
    rank: 7,
    domain: "advanceddental.co.uk",
    category: "London Dentists",
    seoScore: 61,
    backlinks: "389",
    powerScore: 67,
    trend: "up",
    change: 6,
  },
  {
    rank: 8,
    domain: "familydentistry.london",
    category: "London Dentists",
    seoScore: 58,
    backlinks: "267",
    powerScore: 63,
    trend: "down",
    change: 3,
  },
  {
    rank: 9,
    domain: "smileconfidence.co.uk",
    category: "London Dentists",
    seoScore: 55,
    backlinks: "198",
    powerScore: 60,
    trend: "up",
    change: 2,
  },
  {
    rank: 10,
    domain: "perfectsmile.london",
    category: "London Dentists",
    seoScore: 52,
    backlinks: "156",
    powerScore: 57,
    trend: "down",
    change: 4,
  },
]

export default function LeaderboardPage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <main>
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-16 px-6 bg-gradient-to-b from-surface-soft via-background to-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Global Rankings
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-3">
            <span className="text-primary">Live</span> SEO Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Top performing domains analyzed with Rank Royale. See who's winning the SEO battle in your industry.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Total Reports", value: "2.4K+", icon: Trophy },
              { label: "Industries Tracked", value: "150+", icon: Globe },
              { label: "Live Updates", value: "Hourly", icon: TrendingUp },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-surface-raised border border-border"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="py-12 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Category header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">London Dentists</h2>
            </div>
            <p className="text-sm text-muted-foreground">Updated hourly</p>
          </div>

          {/* Table */}
          <div className="relative rounded-2xl border border-border overflow-hidden bg-surface-raised shadow-lg">
            {/* Table header */}
            <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-muted/50 border-b border-border sticky top-0 z-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Rank</div>
              <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Domain</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">Backlinks</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">SEO Score</div>
              <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Power Score</div>
            </div>

            {/* Rows */}
            {leaderboardData.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-7 gap-4 px-6 py-5 items-center border-b border-border last:border-b-0 transition-all duration-300 hover:bg-surface-overlay group cursor-pointer
                  ${item.rank <= 3 ? "bg-surface-raised/50" : ""}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.05}s, transform 0.5s ease ${0.2 + i * 0.05}s`,
                }}
              >
                {/* Rank */}
                <div>
                  {item.rank <= 3 ? (
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all group-hover:scale-110 shadow-lg
                      ${
                        item.rank === 1
                          ? "bg-gradient-to-br from-primary to-orange-600 text-primary-foreground shadow-[0_0_12px_var(--brand-orange-glow)]"
                          : item.rank === 2
                            ? "bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900"
                            : "bg-gradient-to-br from-amber-600 to-orange-700 text-white"
                      }`}
                    >
                      {item.rank === 1 ? <Trophy className="w-5 h-5" /> : item.rank}
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {item.rank}
                    </div>
                  )}
                </div>

                {/* Domain */}
                <div className="col-span-2">
                  <Link href={`/report/example`} className="group/link">
                    <p className="font-semibold text-foreground group-hover/link:text-primary transition-colors truncate">
                      {item.domain}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                  </Link>
                </div>

                {/* Backlinks */}
                <div className="text-center">
                  <p className="font-medium text-foreground">
                    <AnimatedNumber target={parseInt(item.backlinks.replace(/[^0-9]/g, ""))} duration={1000} />
                    {item.backlinks.replace(/[0-9]/g, "")}
                  </p>
                </div>

                {/* SEO Score */}
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-8 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-orange-600 flex items-center justify-center text-xs font-bold text-primary-foreground transition-all duration-1000"
                        style={{
                          width: visible ? `${item.seoScore}%` : "0%",
                        }}
                      >
                        {item.seoScore > 40 && item.seoScore}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Power Score with trend */}
                <div className="col-span-2 flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className={`font-bold text-lg ${
                      item.rank <= 3 ? "text-primary" : "text-foreground"
                    } group-hover:text-primary transition-colors`}>
                      <AnimatedNumber target={item.powerScore} duration={1200} />
                    </p>
                    <p className="text-xs text-muted-foreground">pts</p>
                  </div>
                  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold
                    ${
                      item.trend === "up"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">See Your Domain on the Leaderboard</h3>
                <p className="text-muted-foreground">Generate a comprehensive SEO report and get ranked alongside top competitors.</p>
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

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
