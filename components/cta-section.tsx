"use client"

import { useState } from "react"
import { Zap, ArrowRight, Swords } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  const [url, setUrl] = useState("")

  return (
    <section
      className="py-24 relative overflow-hidden border-t border-border"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.2 0.06 42 / 0.2) 0%, transparent 70%), oklch(0.1 0 0)",
      }}
    >
      {/* Faded warrior image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%202v.png-sB0ZtS0ql1fW5ivEXJpI8jbfKhpxNP.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary mb-6">
          <Swords className="w-3.5 h-3.5" />
          Start Your SEO Battle
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-balance uppercase leading-tight mb-4">
          Check <span className="text-primary">Your SEO</span>
          <br />
          Power Now
        </h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Start your free analysis now and see exactly how to beat your competitors in Google search results.
        </p>

        {/* URL input */}
        <div className="flex gap-2 max-w-md mx-auto mb-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website"
            className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button className="w-full max-w-md mx-auto flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-[0_0_24px_var(--brand-orange-glow)] hover:shadow-[0_0_40px_var(--brand-orange-glow)] group">
          <Zap className="w-4 h-4" />
          Start SEO Battle
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-3 text-xs text-muted-foreground">Free instant SEO power score</p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <Swords className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Rank <span className="text-primary">Royale</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy;2025 Rank Royale by{" "}
          <span className="text-foreground font-medium">Equinox Dynamics LDA</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link href="/report" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Example Report
          </Link>
          <Link href="/dashboard" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
