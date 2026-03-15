"use client"

import { useEffect, useRef, useState } from "react"
import { Search, TrendingUp, Building2 } from "lucide-react"

const audiences = [
  {
    icon: Search,
    title: "SEO Specialists",
    desc: "Get a comprehensive competitive analysis in seconds. Stop spending hours on manual audits and start delivering results faster.",
    tags: ["Keyword Gap Analysis", "Technical Audit", "Competitor Intel"],
  },
  {
    icon: TrendingUp,
    title: "Founders & Marketers",
    desc: "Understand exactly why your competitors outrank you and what to do about it — no SEO experience needed.",
    tags: ["Simple Missions", "Power Score", "Plain English"],
    featured: true,
  },
  {
    icon: Building2,
    title: "Agencies",
    desc: "Deliver stunning battle reports to clients. White-label shareable links make it easy to demonstrate your value.",
    tags: ["Shareable Reports", "Multi-site", "Client Ready"],
  },
]

export function WhoForSection() {
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
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3">Who This Is For</h2>
          <p className="text-sm text-muted-foreground">Built for every kind of growth-focused professional</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, i) => {
            const Icon = audience.icon
            return (
              <div
                key={audience.title}
                className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-2 group
                  ${audience.featured
                    ? "bg-primary/10 border-primary/50 hover:border-primary"
                    : "bg-card border-border hover:border-primary/40"
                  }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    ${audience.featured ? "bg-primary text-primary-foreground shadow-[0_0_16px_var(--brand-orange-glow)]" : "bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"} transition-all`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${audience.featured ? "text-primary" : "text-foreground"}`}>
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{audience.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {audience.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-xs font-medium
                        ${audience.featured ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
