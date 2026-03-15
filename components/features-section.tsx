"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Users, Wrench, Target, Share2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "SEO Power Score",
    desc: "A composite 0–100 score measuring your website's overall SEO strength across technical, content, and authority signals.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Competitor Benchmarking",
    desc: "Side-by-side comparison of your SEO metrics versus top-ranking competitors in your exact niche and location.",
  },
  {
    icon: Wrench,
    title: "Technical SEO Analysis",
    desc: "Deep audit of page speed, Core Web Vitals, crawlability, schema markup, and over 40 technical SEO factors.",
  },
  {
    icon: Target,
    title: "Actionable SEO Missions",
    desc: "Prioritized task list with point values, so you know exactly what to fix first to climb the rankings fastest.",
  },
  {
    icon: Share2,
    title: "Shareable Reports",
    desc: "Every audit generates a unique public link you can share with clients, teammates, or stakeholders instantly.",
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
    <section ref={ref} id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3">Everything You Need to Win</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            A complete SEO intelligence platform built for founders, marketers, and agencies who want real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] group cursor-default
                  ${feature.highlight
                    ? "bg-primary/10 border-primary/40 hover:border-primary"
                    : "bg-card border-border hover:border-primary/40"
                  }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all
                    ${feature.highlight
                      ? "bg-primary text-primary-foreground shadow-[0_0_12px_var(--brand-orange-glow)] group-hover:shadow-[0_0_20px_var(--brand-orange-glow)]"
                      : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-semibold mb-2 ${feature.highlight ? "text-primary" : "text-foreground"}`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}

          {/* Shareable report card - spans 2 cols on lg */}
          <div
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.5s ease ${features.length * 0.08}s, transform 0.5s ease ${features.length * 0.08}s`,
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Shareable Battle Report Link</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Every audit generates a unique public URL you can send to clients or share on social media.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-muted-foreground font-mono truncate">
                    rankroyale.com/report/example-site
                  </div>
                  <button className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-[0_0_10px_var(--brand-orange-glow)] whitespace-nowrap">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
