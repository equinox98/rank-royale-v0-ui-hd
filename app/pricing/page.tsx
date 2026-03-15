"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { CtaSection } from "@/components/cta-section"
import { Check, Zap, Users, Building2 } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "0",
    period: "Forever",
    description: "Perfect for getting started with SEO insights",
    icon: Zap,
    highlight: false,
    features: [
      { text: "Limited battle reports", included: true },
      { text: "Basic competitor analysis", included: true },
      { text: "5 reports per month", included: true },
      { text: "Standard SEO audit", included: true },
      { text: "1 domain", included: true },
      { text: "Shareable reports", included: false },
      { text: "Team dashboard", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free",
    ctaLink: "/#hero",
  },
  {
    name: "Pro",
    price: "49",
    period: "per month",
    description: "For professionals who need detailed insights",
    icon: Users,
    highlight: true,
    features: [
      { text: "Unlimited battle reports", included: true },
      { text: "Advanced competitor analysis", included: true },
      { text: "Unlimited reports", included: true },
      { text: "Advanced SEO audit", included: true },
      { text: "5 domains", included: true },
      { text: "Shareable reports with branding", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: false },
    ],
    cta: "Try Pro",
    ctaLink: "/get-started?plan=pro",
  },
  {
    name: "Agency",
    price: "199",
    period: "per month",
    highlight: false,
    description: "For agencies managing multiple clients",
    icon: Building2,
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Full competitor analysis suite", included: true },
      { text: "Unlimited reports", included: true },
      { text: "Enterprise SEO audit", included: true },
      { text: "Unlimited domains", included: true },
      { text: "Team dashboard with roles", included: true },
      { text: "White-label reports", included: true },
      { text: "Full API access", included: true },
    ],
    cta: "Contact Sales",
    ctaLink: "mailto:hello@rankroyale.com?subject=Agency%20Plan",
  },
]

export default function PricingPage() {
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
            Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Choose Your SEO Arsenal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Pick the plan that fits your needs and start dominating your local search results today.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-surface-soft via-background to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`group relative ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Gradient border */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${plan.highlight ? "opacity-60 group-hover:opacity-100" : ""}`} />
                  
                  <div className={`relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col overflow-hidden
                    ${plan.highlight
                      ? "bg-gradient-to-br from-primary/15 to-primary/5 border-primary/40 group-hover:shadow-[0_0_32px_var(--brand-orange-glow)] group-hover:-translate-y-1"
                      : "bg-surface-raised border-border group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] group-hover:-translate-y-1"
                    }`}
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Highlight badge */}
                    {plan.highlight && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-[0_0_12px_var(--brand-orange-glow)]">
                        Most Popular
                      </div>
                    )}

                    <div className="relative">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${plan.highlight ? "bg-primary text-primary-foreground shadow-[0_0_16px_var(--brand-orange-glow)]" : "bg-primary/15 text-primary"}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Plan name and description */}
                      <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-primary" : "text-foreground"}`}>
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-black text-foreground">${plan.price}</span>
                          <span className="text-sm text-muted-foreground">/{plan.period}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={plan.ctaLink}
                        className={`w-full py-3 rounded-lg font-semibold text-sm transition-all mb-8 inline-block text-center ${
                          plan.highlight
                            ? "bg-primary text-primary-foreground hover:opacity-95 shadow-[0_0_16px_var(--brand-orange-glow)] hover:shadow-[0_0_24px_var(--brand-orange-glow)]"
                            : "bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 hover:border-primary/50"
                        }`}
                      >
                        {plan.cta}
                      </Link>

                      {/* Features list */}
                      <div className="space-y-4 pt-8 border-t border-border/50">
                        {plan.features.map((feature, j) => (
                          <div key={j} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            ) : (
                              <div className="w-5 h-5 border border-border rounded flex-shrink-0 mt-0.5" />
                            )}
                            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground line-through"}`}>
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes! Upgrade or downgrade your plan anytime. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Do you offer a free trial?",
                a: "Absolutely. Start with our Free plan to explore all features. No credit card required.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express) and can arrange custom invoicing for agencies.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees. Just select your plan and start using Rank Royale immediately.",
              },
              {
                q: "What if I need more than the Agency plan?",
                a: "Contact our sales team at hello@rankroyale.com for custom enterprise solutions.",
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
