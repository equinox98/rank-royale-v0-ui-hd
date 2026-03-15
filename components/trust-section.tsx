"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, TrendingUp, Target } from "lucide-react"

const tools = [
  { 
    name: "Google PageSpeed", 
    description: "Performance metrics",
    gradient: "from-blue-500 to-cyan-400",
    icon: "ps"
  },
  { 
    name: "Google Search Console", 
    description: "Search insights",
    gradient: "from-green-500 to-emerald-400",
    icon: "sc"
  },
  { 
    name: "Ahrefs", 
    description: "Backlink analysis",
    gradient: "from-orange-600 to-amber-500",
    icon: "ah"
  },
  { 
    name: "Moz", 
    description: "Authority metrics",
    gradient: "from-blue-600 to-cyan-500",
    icon: "mz"
  },
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
    <section ref={ref} className="py-24 border-y border-border bg-gradient-to-b from-surface-soft via-background to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block px-3 py-1 rounded-full bg-primary/10">
            Powered by Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Trusted Data Sources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We integrate with the world's most trusted SEO and web intelligence platforms
          </p>
        </div>

        {/* Brand cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="group relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
              }}
            >
              {/* Premium gradient border */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative bg-surface-raised border border-border rounded-xl p-6 hover:border-border group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-3">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{tool.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Report includes section */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Comprehensive SEO Battle Report
              </h2>
              <p className="text-muted-foreground">
                Everything you need to dominate your local search results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "SEO Power Score",
                  desc: "Get a comprehensive 0-100 score showing your website's SEO strength compared to local competitors.",
                },
                {
                  icon: TrendingUp,
                  title: "Competitor Analysis",
                  desc: "Discover exactly which websites outrank you and the specific reasons they're winning in Google.",
                },
                {
                  icon: Target,
                  title: "Actionable Missions",
                  desc: "Prioritized, easy-to-understand recommendations to improve your SEO power and climb rankings.",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group relative"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.5s ease ${0.24 + i * 0.08}s, transform 0.5s ease ${0.24 + i * 0.08}s`,
                    }}
                  >
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative p-7 rounded-xl bg-surface-raised border border-border hover:border-border group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative space-y-4">
                        <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
