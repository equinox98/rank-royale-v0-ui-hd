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
    <section ref={ref} className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: trust stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-3">Trusted by business owners</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Business owners use our tool to discover why competitors rank higher in Google and what to improve first.
            </p>

            {/* Avatar stack */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {["JW", "SC", "MR", "ET"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-foreground"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground">100+ Reviews</p>
                <p className="text-xs text-muted-foreground">Average 4.87 stars</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2.4k+", label: "Reports Generated" },
                { value: "94%", label: "Rank Improvement" },
                { value: "3 wks", label: "Avg. Time to Results" },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-lg bg-secondary border border-border text-center">
                  <div className="text-lg font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: testimonial carousel */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <div className="relative p-6 rounded-2xl bg-card border border-border min-h-[200px]">
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote
                key={current}
                className="text-sm text-foreground leading-relaxed mb-6"
                style={{ animation: "fadeIn 0.4s ease" }}
              >
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[current].title}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border w-1.5"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}
