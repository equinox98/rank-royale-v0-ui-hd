"use client"

import { useEffect, useRef, useState } from "react"

const tools = [
  { name: "Google PageSpeed", abbr: "PS", color: "text-[#4285F4]" },
  { name: "Google Search Console", abbr: "SC", color: "text-[#34A853]" },
  { name: "Ahrefs", abbr: "AH", color: "text-[#FF6B35]" },
  { name: "Moz", abbr: "MZ", color: "text-[#1B8CFF]" },
]

export function TrustSection() {
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
    <section ref={ref} className="py-20 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">
          Powered by industry-leading SEO data sources
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.3s`,
              }}
            >
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center font-black text-lg ${tool.color}`}>
                {tool.abbr}
              </div>
              <span className="text-sm font-medium text-foreground text-center">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* SEO Battle Report Includes */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">SEO Battle Report Includes</h2>
          <p className="text-muted-foreground text-sm mb-12">Everything you need to outrank your competitors</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "SEO Power Score",
                desc: "See how strong your website is compared to competitors with a 0-100 composite score.",
              },
              {
                icon: "📊",
                title: "Competitor Analysis",
                desc: "Discover which websites outrank you and exactly why they are winning in Google.",
              },
              {
                icon: "🎯",
                title: "SEO Missions",
                desc: "Simple, prioritized actions to increase your SEO power and climb the rankings.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-left"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s, border-color 0.3s`,
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
