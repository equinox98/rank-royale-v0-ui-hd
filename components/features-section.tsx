"use client"

import { useEffect, useRef, useState } from "react"
import { Gauge, TrendingUp, Wrench, Target, Share2, Zap } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "SEO Power Score",
    desc: "Composite 0–100 score measuring technical SEO, content quality, authority, and competitive positioning instantly.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Competitor Benchmarking",
    desc: "Real-time side-by-side comparison of your metrics vs top-ranking competitors in your exact niche and city.",
  },
  {
    icon: Wrench,
    title: "Technical SEO Audit",
    desc: "Deep analysis of Core Web Vitals, page speed, schema markup, crawlability, and 40+ technical factors.",
  },
  {
    icon: Target,
    title: "Prioritized SEO Missions",
    desc: "Ranked task list with point values showing exactly which fixes will have the biggest impact on your rankings.",
  },
  {
    icon: Share2,
    title: "Shareable Reports",
    desc: "Generate beautiful, branded audit reports with a unique URL to share with clients and stakeholders instantly.",
  },
  {
    icon: Zap,
    title: "Live Rankings Leaderboard",
    desc: "See where you rank versus competitors in real-time with live keyword position tracking and historical trends.",
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="features" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-soft via-background to-background pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Complete Platform
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3">Everything You Need to Win</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete SEO intelligence platform built for founders, marketers, and agencies who want real, measurable results.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                {/* Gradient border */}
                <div className={`absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${feature.highlight ? "opacity-60 group-hover:opacity-100" : ""}`} />
                
                <div className={`relative p-7 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] overflow-hidden
                  ${feature.highlight
                    ? "bg-gradient-to-br from-primary/15 to-primary/5 border-primary/40"
                    : "bg-surface-raised border-border"
                  }`}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-110
                      ${feature.highlight
                        ? "bg-primary text-primary-foreground shadow-[0_0_16px_var(--brand-orange-glow)]"
                        : "bg-primary/15 text-primary group-hover:bg-primary/25"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Text */}
                    <div>
                      <h3 className={`font-bold text-lg ${feature.highlight ? "text-primary" : "text-foreground"} group-hover:text-primary transition-colors`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
