"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { CtaSection } from "@/components/cta-section"
import { Globe, Target, Zap, Users, Award, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Focused",
    description: "We help small businesses and agencies win in their local SEO battles by providing honest, transparent competitive intelligence.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description: "Every feature is built for speed and accuracy. Your report generates in seconds, not hours.",
  },
  {
    icon: Award,
    title: "Data-Driven",
    description: "We pull from the most trusted SEO sources and use advanced AI analysis to deliver the most accurate insights.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you achieve measurable, lasting improvements in your rankings.",
  },
  {
    icon: Heart,
    title: "Transparent",
    description: "No black boxes. Our methodology is clear, our pricing is straightforward, and our support is always there for you.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Built from Portugal, serving business owners worldwide. We understand the challenges of competing globally.",
  },
]

export default function AboutPage() {
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
            About Rank Royale
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Leveling the Playing Field
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe every business deserves access to enterprise-grade SEO intelligence. Rank Royale makes competitive analysis affordable, fast, and actionable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-gradient-to-b from-surface-soft via-background to-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none text-foreground space-y-6">
            <div className="p-8 rounded-xl bg-surface-raised border border-border/50">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Rank Royale was born from frustration. We watched small business owners and marketing agencies struggle to understand why their websites weren't ranking, while large corporations had access to expensive tools costing thousands per month.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                In 2024, our team at Equinox Dynamics in Lisbon, Portugal decided to change that. We built Rank Royale to democratize SEO intelligence—making it accessible, affordable, and actionable for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, thousands of entrepreneurs and agencies use Rank Royale to dominate their local search results. And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-24 px-6 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Built by Equinox Dynamics</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Equinox Dynamics is a SaaS product company based in Lisbon, Portugal. We specialize in building AI-powered tools that solve real business problems with elegant solutions.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Location</p>
                  <p className="text-foreground">Lisbon, Portugal</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Founded</p>
                  <p className="text-foreground">2024</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Team</p>
                  <p className="text-foreground">10+ engineers, designers & marketers</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-8 rounded-xl bg-surface-raised border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-foreground leading-relaxed mb-6">
                To help businesses of all sizes discover their competitive advantage in Google Search and equip them with the insights and roadmap needed to dominate their local market.
              </p>
              <p className="text-foreground leading-relaxed">
                We believe that great SEO tools should be powerful yet simple, transparent yet insightful, and most importantly—built for the entrepreneur who doesn't have a $50K/month budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we build and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group relative p-8 rounded-xl bg-surface-raised border border-border hover:border-border hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 border-y border-border bg-gradient-to-b from-surface-soft to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Questions about Rank Royale? Want to partner with us? Have feedback? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@rankroyale.com"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all shadow-[0_0_16px_var(--brand-orange-glow)]"
            >
              Email Us
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary/15 text-primary border border-primary/30 font-semibold hover:bg-primary/25 transition-all"
            >
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
