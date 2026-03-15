"use client"

import { useState, useEffect } from "react"
import { Zap, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(interval)
    }, 16)
    return () => clearInterval(interval)
  }, [target, duration])

  return <>{count.toLocaleString()}</>
}

export function HeroSection() {
  const [url, setUrl] = useState("")
  const [location, setLocation] = useState("")
  const [niche, setNiche] = useState("")
  const [competitors, setCompetitors] = useState(["", "", ""])
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(180deg, oklch(0.08 0 0) 0%, oklch(0.1 0.02 42 / 0.08) 50%, oklch(0.08 0 0) 100%)",
      }}
    >
      {/* Darker background image overlay with stronger gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%202v.png-sB0ZtS0ql1fW5ivEXJpI8jbfKhpxNP.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      />

      {/* Strong radial gradient overlay to darken further */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            {/* Premium Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/5 border border-primary/30 text-xs font-semibold text-primary backdrop-blur-sm">
              <span className="relative w-2 h-2 rounded-full bg-primary">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="absolute inset-0 rounded-full bg-primary opacity-50" />
              </span>
              LIVE SEO ARENA
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight text-balance uppercase">
                <span className="text-primary">Fight</span>{" "}
                <span className="text-foreground">Your</span>
                <br />
                <span className="text-foreground">Competitors</span>
                <br />
                <span className="text-foreground">In Google</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              See who wins the SEO battle in your city and discover why competitors rank higher than your website. Get a
              full battle report in seconds.
            </p>

            {/* Live Product Stats */}
            <div className="flex items-center gap-6 pt-4 border-t border-border/50">
              {[
                { value: 4213, label: "SEO Battles Today" },
                { value: 127, label: "Live Scans" },
                { value: 23481, label: "Reports Generated" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-sm font-bold text-primary">
                    <AnimatedCounter target={stat.value} duration={2000 + i * 200} />
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Simple CTA row */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/report/example"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                View Example Report
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="w-3.5 h-3.5 text-primary" />
              Free SEO power score in 10 seconds
            </div>
          </div>

          {/* Right: Audit Form */}
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4 hover:shadow-[0_0_32px_rgba(249,115,22,0.15)] transition-all duration-300">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-foreground">Run SEO Battle</h2>
                <p className="text-xs text-muted-foreground">Enter your website and competitors to get started</p>
              </div>

              {/* Website URL */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Your Website</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onFocus={() => setFocusedInput("url")}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_12px_var(--brand-orange-glow)] transition-all"
                />
              </div>

              {/* Location + Niche */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setFocusedInput("location")}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="London, UK"
                    className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_12px_var(--brand-orange-glow)] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Niche</label>
                  <input
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    onFocus={() => setFocusedInput("niche")}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="Dentists"
                    className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_12px_var(--brand-orange-glow)] transition-all"
                  />
                </div>
              </div>

              {/* Competitors */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Competitors
                </label>
                {competitors.map((c, i) => (
                  <input
                    key={i}
                    type="url"
                    value={c}
                    onChange={(e) => {
                      const next = [...competitors]
                      next[i] = e.target.value
                      setCompetitors(next)
                    }}
                    onFocus={() => setFocusedInput(`competitor-${i}`)}
                    onBlur={() => setFocusedInput(null)}
                    placeholder={`Competitor ${i + 1} URL`}
                    className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_12px_var(--brand-orange-glow)] transition-all"
                  />
                ))}
              </div>

              {/* CTA */}
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-orange-600 text-primary-foreground font-bold text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_0_20px_var(--brand-orange-glow)] hover:shadow-[0_0_32px_var(--brand-orange-glow)] group flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Run SEO Battle
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-muted-foreground">Free instant SEO power score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-[bounce-soft_2s_ease-in-out_infinite]">
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
