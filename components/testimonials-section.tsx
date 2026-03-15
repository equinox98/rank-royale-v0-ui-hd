"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "In just 3 weeks, we moved from page 4 to the top 3 spots in our city. The SEO missions are incredibly easy to follow even if you're not a techie.",
    name: "Dr. James Wilson",
    title: "Founder, Wilson Family Dentistry",
    stars: 5,
  },
  {
    quote:
      "Rank Royale gave us a crystal-clear picture of why our competitors were outranking us. We fixed 3 missions and jumped 8 positions in 2 weeks.",
    name: "Sarah Chen",
    title: "Head of Marketing, GrowthLab Agency",
    stars: 5,
  },
  {
    quote:
      "The shareable battle report is a game changer for client presentations. They see exactly what we're doing and why it matters. Clients love it.",
    name: "Marcus Rivera",
    title: "SEO Director, Apex Digital",
    stars: 5,
  },
  {
    quote:
      "I was skeptical at first but after running my first report I immediately saw 6 actionable improvements I had missed for months. Absolutely brilliant.",
    name: "Emma Thompson",
    title: "Founder, Thompson Legal",
    stars: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
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

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-surface-soft to-background border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Customer Testimonials
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3">Trusted by industry leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Business owners and marketing professionals use Rank Royale to dominate their local search results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Social proof stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Avatar stack with ratings */}
            <div className="mb-8 p-6 rounded-xl bg-surface-raised border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {["JW", "SC", "MR", "ET"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-orange-500/20 border-2 border-background flex items-center justify-center text-xs font-bold text-foreground"
                      style={{ zIndex: 4 - i }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-foreground">100+ Five-Star Reviews</p>
                  <p className="text-xs text-muted-foreground">Average 4.9/5 rating</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "2.4k+", label: "Reports", subtext: "Generated" },
                { value: "94%", label: "Improvement", subtext: "In rankings" },
                { value: "3 wks", label: "Average", subtext: "To results" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-surface-raised border border-border/50 hover:border-primary/40 transition-colors text-center group">
                  <div className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-xs font-medium text-foreground mt-1">{stat.label}</div>
                  <div className="text-[10px] text-muted-foreground">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial carousel */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative p-8 rounded-2xl bg-surface-raised border border-border hover:border-border group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all duration-300 min-h-[300px] flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(testimonials[current].stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">5-star review</span>
                  </div>

                  {/* Quote */}
                  <blockquote
                    key={current}
                    className="text-lg text-foreground leading-relaxed font-medium mb-6"
                    style={{ animation: "fadeIn 0.4s ease" }}
                  >
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author + Controls */}
                <div className="relative space-y-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[current].title}</p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <button
                        onClick={prev}
                        className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center hover:bg-primary/25 hover:border-primary/50 transition-all group/btn"
                      >
                        <ChevronLeft className="w-4 h-4 text-primary group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                      <button
                        onClick={next}
                        className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center hover:bg-primary/25 hover:border-primary/50 transition-all group/btn"
                      >
                        <ChevronRight className="w-4 h-4 text-primary group-hover/btn:-translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-1.5">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrent(i)}
                          className={`rounded-full transition-all duration-300 ${i === current ? "bg-primary w-7 h-2" : "bg-border w-2 h-2 hover:bg-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}
