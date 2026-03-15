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
