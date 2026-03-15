"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Trophy } from "lucide-react"

const leaderboardData = [
  { rank: 1, website: "SmileClinic.co.uk", backlinks: "4.2k", score: 94, isUser: false },
  { rank: 2, website: "LondonDentalCare.co.uk", backlinks: "3.1k", score: 91, isUser: false },
  { rank: 3, website: "BrightSmileDental.co.uk", backlinks: "2.8k", score: 88, isUser: false },
  { rank: 23, website: "Your website", backlinks: "142", score: 62, isUser: true },
]

function AnimatedNumber({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    const start = Date.now()
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return (
    <span
      ref={(el) => {
        if (!el) return
        const observer = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setStarted(true) },
          { threshold: 0.5 }
        )
        observer.observe(el)
      }}
    >
      {current}
    </span>
  )
}

export function LeaderboardSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-surface-soft to-background border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Live Rankings
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3">
            <span className="text-primary">Live</span> SEO Rankings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time rankings for <span className="font-semibold text-foreground">London Dentists</span> with power scores and backlink counts
          </p>
        </div>

        {/* Leaderboard card */}
        <div
          className="group relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Gradient border */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative rounded-2xl border border-border overflow-hidden shadow-xl group-hover:shadow-[0_0_32px_var(--brand-orange-glow)] transition-all duration-300 bg-surface-raised">
            {/* Location header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-surface-soft to-transparent border-b border-border">
              <div>
                <h3 className="font-semibold text-foreground">Rankings by City</h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/15 text-primary text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                London, UK
              </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-4 px-6 py-3 bg-muted/50 border-b border-border gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Position</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Website</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">Backlinks</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">SEO Power</span>
            </div>

            {/* Rows */}
            {leaderboardData.map((row, i) => (
              <div
                key={row.rank}
                className={`grid grid-cols-4 px-6 py-4 items-center border-b border-border last:border-b-0 transition-all duration-300 gap-4
                  ${row.isUser
                    ? "bg-gradient-to-r from-primary/15 to-primary/5 hover:from-primary/20 hover:to-primary/10"
                    : "hover:bg-surface-overlay"
                  }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.5s ease ${0.12 + i * 0.1}s, transform 0.5s ease ${0.12 + i * 0.1}s`,
                }}
              >
                {/* Rank badge */}
                <div className="flex items-center gap-3">
                  {row.rank <= 3 ? (
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all
                        ${row.rank === 1 
                          ? "bg-gradient-to-br from-primary to-orange-600 text-primary-foreground shadow-[0_0_12px_var(--brand-orange-glow)]" 
                          : row.rank === 2
                            ? "bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900"
                            : "bg-gradient-to-br from-amber-600 to-orange-700 text-white"
                        }`}
                    >
                      {row.rank === 1 ? <Trophy className="w-4 h-4" /> : row.rank}
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-surface-raised border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {row.rank}
                    </div>
                  )}
                  {row.isUser && (
                    <span className="px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold shadow-[0_0_8px_var(--brand-orange-glow)]">
                      You
                    </span>
                  )}
                </div>

                {/* Website */}
                <div>
                  <p className={`text-sm font-semibold ${row.isUser ? "text-primary" : "text-foreground"}`}>
                    {row.website}
                  </p>
                </div>

                {/* Backlinks */}
                <div className="text-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    <AnimatedNumber target={parseInt(row.backlinks.replace(/[^0-9]/g, ''))} duration={1200} />
                    {row.backlinks.replace(/[0-9]/g, '')}
                  </span>
                </div>

                {/* Power Score */}
                <div className="flex justify-end">
                  <div className={`px-3 py-1.5 rounded-lg transition-all
                    ${row.isUser
                      ? "bg-primary text-primary-foreground font-bold shadow-[0_0_12px_var(--brand-orange-glow)] flex items-center gap-1"
                      : row.rank === 1
                        ? "bg-primary/20 text-primary font-bold flex items-center gap-1"
                        : "text-muted-foreground font-medium flex items-center gap-1"
                    }`}
                  >
                    <span className="text-sm font-bold">
                      <AnimatedNumber target={row.score} duration={1200} />
                    </span>
                    <span className="text-xs font-normal opacity-75">pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
