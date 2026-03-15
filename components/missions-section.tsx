"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Database, FileText, CheckCircle2, Gauge, Link2 } from "lucide-react"

const missions = [
  {
    icon: Gauge,
    title: "Improve page speed",
    desc: "Currently loading in 4.2s. Target: 1.5s for better rankings",
    pts: "+6 pts",
    color: "text-amber-400",
    bg: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Database,
    title: "Add FAQ schema markup",
    desc: "Unlock rich results and featured snippets on Google Search",
    pts: "+4 pts",
    color: "text-primary",
    bg: "from-primary/20 to-primary/5",
  },
  {
    icon: Link2,
    title: "Build high-quality backlinks",
    desc: "Get 10+ authoritative backlinks from industry publications",
    pts: "+12 pts",
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: FileText,
    title: "Create content for target keywords",
    desc: "Write comprehensive guides for 5 high-intent search terms",
    pts: "+8 pts",
    color: "text-green-400",
    bg: "from-green-500/20 to-emerald-500/10",
  },
]

export function MissionsSection() {
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
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.18 0.04 42 / 0.15) 0%, transparent 70%)",
      }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%202v.png-sB0ZtS0ql1fW5ivEXJpI8jbfKhpxNP.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Action Items
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3">Increase Your SEO Power</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete these prioritized missions to improve your rankings and dominate the competition in your city.
          </p>
        </div>

        {/* Missions grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {missions.map((mission, i) => {
            const Icon = mission.icon
            return (
              <div
                key={mission.title}
                className="group relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Gradient border */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative p-6 rounded-xl bg-surface-raised border border-border hover:border-border group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300 group-hover:-translate-y-1 overflow-hidden h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mission.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  
                  {/* Content */}
                  <div className="relative space-y-4 flex flex-col h-full">
                    {/* Icon and header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${mission.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${mission.color}`} />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-[0_0_12px_var(--brand-orange-glow)] whitespace-nowrap">
                        {mission.pts}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {mission.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{mission.desc}</p>
                    </div>

                    {/* Action */}
                    <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Mark as complete</span>
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
