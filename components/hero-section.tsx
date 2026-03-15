"use client"

import { useState } from "react"
import { Zap, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [url, setUrl] = useState("")
  const [location, setLocation] = useState("")
  const [niche, setNiche] = useState("")
  const [competitors, setCompetitors] = useState(["", "", ""])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 70% 40%, oklch(0.22 0.06 42 / 0.25) 0%, transparent 60%), oklch(0.1 0 0)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%202v.png-sB0ZtS0ql1fW5ivEXJpI8jbfKhpxNP.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised border border-border text-xs font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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

            {/* Simple CTA row */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/report"
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
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
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
                  placeholder="https://yourwebsite.com"
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                    placeholder="London, UK"
                    className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Niche</label>
                  <input
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="Dentists"
                    className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                    placeholder={`Competitor ${i + 1} URL`}
                    className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                ))}
              </div>

              {/* CTA */}
              <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-[0_0_20px_var(--brand-orange-glow)] hover:shadow-[0_0_32px_var(--brand-orange-glow)] group flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Run SEO Battle
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-muted-foreground">Free instant SEO power score</p>
            </div>
          </div>

          {/* Right: Interactive Preview */}
          <div className="relative h-full min-h-[500px]">
            {/* Glow background */}
            <div className="absolute -inset-10 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />
            
            {/* Preview card */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative h-full bg-surface-raised border border-border rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Header glow */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                
                {/* Content */}
                <div className="relative space-y-6 h-full flex flex-col">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Battle Preview</h3>
                    <p className="text-xs text-muted-foreground">Real-time SEO comparison</p>
                  </div>

                  {/* Score comparison */}
                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {[
                      { label: "Your Site", score: 68, color: "from-primary" },
                      { label: "Competitor 1", score: 82, color: "from-cyan-500" },
                      { label: "Competitor 2", score: 75, color: "from-blue-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-2">
                        <div className="relative w-16 h-16">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="oklch(0.2 0 0)" strokeWidth="8" />
                            {/* Progress circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke={item.color.includes("primary") ? "oklch(0.65 0.22 44)" : item.color}
                              strokeWidth="8"
                              strokeDasharray={`${2.827 * item.score} 282.7`}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                              style={{
                                transform: "rotate(-90deg)",
                                transformOrigin: "50% 50%",
                              }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-foreground">{item.score}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    {[
                      { label: "Backlinks", value: "1,240", delta: "-340" },
                      { label: "Domain Authority", value: "42", delta: "-8" },
                      { label: "Ranking Keywords", value: "156", delta: "-89" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">{stat.value}</span>
                          <span className="text-destructive">{stat.delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
