"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { CtaSection } from "@/components/cta-section"
import { ChevronRight, Globe, Zap, BarChart3, Trophy } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Enter Your Website URL",
    description: "Type in your website and the keywords you want to dominate. Select your target city to focus your local SEO battle.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: 2,
    title: "AI Scans Technical SEO Signals",
    description: "Our AI instantly analyzes 50+ technical SEO factors including Core Web Vitals, page speed, schema markup, and crawlability.",
    icon: Zap,
    color: "from-amber-500 to-orange-400",
  },
  {
    number: 3,
    title: "Competitor Comparison",
    description: "We identify your top competitors and pull their SEO data from Google, Ahrefs, and other industry-leading sources.",
    icon: BarChart3,
    color: "from-green-500 to-emerald-400",
  },
  {
    number: 4,
    title: "Generate SEO Battle Report",
    description: "Get a beautiful, shareable report with your SEO power score, competitor rankings, and prioritized missions to win.",
    icon: Trophy,
    color: "from-primary to-orange-600",
  },
]

export default function HowItWorksPage() {
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
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            How Rank Royale Works
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Dominate Your Local SEO in 4 Simple Steps
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From entering your website to getting a shareable SEO battle report, our AI-powered platform delivers instant, actionable intelligence about your competitive position in Google.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-surface-soft via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="group relative"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative p-8 rounded-2xl bg-surface-raised border border-border hover:border-border group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative flex-1">
                      {/* Step number */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>

                      {/* Title and description */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Icon indicator */}
                    <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-semibold">Step {step.number}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Connection arrows - Desktop only */}
          <div className="hidden lg:grid grid-cols-4 gap-6 mt-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <ChevronRight className="w-6 h-6 text-muted-foreground/50 rotate-0 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process visualization */}
      <section className="py-24 px-6 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-3">Real-Time Competitor Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform pulls data from the most trusted SEO sources to give you accurate, up-to-date information about your competitive landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Audit",
                items: ["Core Web Vitals", "Page Speed", "Mobile Optimization", "SSL Certificate", "XML Sitemap", "Robots.txt"],
              },
              {
                title: "Competitive Intelligence",
                items: ["Backlink Analysis", "Domain Authority", "Ranking Keywords", "Traffic Estimates", "Content Gap Analysis", "Keyword Opportunities"],
              },
            ].map((category, i) => (
              <div
                key={category.title}
                className="p-8 rounded-xl bg-surface-raised border border-border hover:border-border group hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${0.3 + i * 0.15}s, transform 0.6s ease ${0.3 + i * 0.15}s`,
                }}
              >
                <h3 className="font-bold text-lg text-foreground mb-5 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-3">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to generate a report?",
                a: "Our AI analyzes your website and competitors in under 30 seconds. You get instant results with no waiting required.",
              },
              {
                q: "Can I share the report with clients?",
                a: "Yes! Every report gets a unique shareable URL you can send to clients, colleagues, or share on social media.",
              },
              {
                q: "What data sources do you use?",
                a: "We integrate with Google PageSpeed Insights, Google Search Console, Ahrefs, and Moz to ensure the most accurate competitive data.",
              },
              {
                q: "How often are reports updated?",
                a: "Your SEO power score updates in real-time. Competitive data is refreshed monthly for the most current insights.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-surface-raised border border-border hover:border-primary/40 transition-all duration-300 group cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
