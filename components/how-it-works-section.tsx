"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Cpu, BarChart2, FileText } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Globe,
    title: "Enter Your URL",
    desc: "Simply paste your link and tell us your target keyword or city.",
  },
  {
    number: "2",
    icon: Cpu,
    title: "AI Analysis",
    desc: "Our engine scouts the competition and finds their ranking secret sauce.",
  },
  {
    number: "3",
    icon: BarChart2,
    title: "Competitor Comparison",
    desc: "Side-by-side SEO signals reveal exactly where you stand.",
  },
  {
    number: "4",
    icon: FileText,
    title: "Get Missions",
    desc: "Execute high-impact missions to climb the leaderboard and win.",
  },
]

export function HowItWorksSection() {
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
    <section ref={ref} id="how-it-works" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-sm text-muted-foreground">Four steps to dominate your local SEO rankings</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center gap-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
              >
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-secondary border-2 border-border flex flex-col items-center justify-center gap-1 hover:border-primary transition-colors group">
                  <span className="text-2xl font-black text-primary">{step.number}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
