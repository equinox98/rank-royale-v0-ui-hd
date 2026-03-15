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
    <section ref={ref} className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-1">
            <span className="text-primary">Live</span> Ranking Leaderboard
          </h2>
          <p className="text-sm text-muted-foreground">
            Top SEO Websites in{" "}
            <span className="font-semibold text-foreground">London Dentists</span>
          </p>
        </div>

        <div
          className="rounded-2xl border border-border overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Location badge */}
          <div className="flex items-center justify-end px-4 py-3 bg-secondary border-b border-border">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              London, UK
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 px-4 py-3 bg-muted/50 border-b border-border">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Rank</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground col-span-1">Website</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">Backlinks</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">Power Score</span>
          </div>

          {/* Rows */}
          {leaderboardData.map((row, i) => (
            <div
              key={row.rank}
              className={`grid grid-cols-4 px-4 py-4 items-center border-b border-border last:border-b-0 transition-colors
                ${row.isUser
                  ? "bg-primary/10 hover:bg-primary/15"
                  : "hover:bg-secondary/50"
                }`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            >
              {/* Rank */}
              <div className="flex items-center gap-2">
                {row.rank <= 3 ? (
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                      ${row.rank === 1 ? "bg-primary text-primary-foreground shadow-[0_0_8px_var(--brand-orange-glow)]" : "bg-secondary text-foreground"}`}
                  >
                    {row.rank === 1 ? <Trophy className="w-3.5 h-3.5" /> : row.rank}
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {row.rank}
                  </div>
                )}
                {row.isUser && (
                  <span className="px-1.5 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-bold">
                    You
                  </span>
                )}
              </div>

              {/* Website */}
              <span className={`text-sm font-medium ${row.isUser ? "text-primary" : "text-foreground"}`}>
                {row.website}
              </span>

              {/* Backlinks */}
              <span className="text-sm text-muted-foreground text-center">{row.backlinks}</span>

              {/* Score */}
              <div className="flex justify-end">
                <span
                  className={`px-2.5 py-1 rounded-lg text-sm font-bold
                    ${row.isUser
                      ? "bg-primary text-primary-foreground shadow-[0_0_10px_var(--brand-orange-glow)]"
                      : row.rank === 1
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground"
                    }`}
                >
                  <AnimatedNumber target={row.score} />{" "}
                  <span className="text-xs font-normal">pts</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
