"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, BarChart2, FileText, CheckCircle2 } from "lucide-react"

const missions = [
  {
    icon: Zap,
    title: "Improve page speed",
    desc: "Currently loading in 4.2s. Goal: 1.5s",
    pts: "+6 pts",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: BarChart2,
    title: "Add FAQ schema",
    desc: "Get rich results on Google search pages",
    pts: "+4 pts",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FileText,
    title: "Create new page about teeth whitening",
    desc: "Capture high-intent search traffic",
    pts: "+8 pts",
    color: "text-green-400",
    bg: "bg-green-400/10",
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
      {/* Background faded image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%202v.png-sB0ZtS0ql1fW5ivEXJpI8jbfKhpxNP.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Increase Your SEO Power</h2>
          <p className="text-sm text-muted-foreground">Complete these active missions to jump ranks today.</p>
        </div>

        <div className="space-y-4">
          {missions.map((mission, i) => {
            const Icon = mission.icon
            return (
              <div
                key={mission.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group cursor-pointer"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-30px)",
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
              >
                <div className={`w-10 h-10 rounded-full ${mission.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${mission.color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {mission.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{mission.desc}</p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-[0_0_10px_var(--brand-orange-glow)]">
                    {mission.pts}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
