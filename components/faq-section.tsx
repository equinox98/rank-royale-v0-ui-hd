"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "How does Rank Royale generate the SEO Power Score?",
    a: "We analyze over 40 SEO signals including backlink authority, technical health, page speed, content relevance, and local SEO signals. These are weighted and combined into a single 0–100 score for easy comparison.",
  },
  {
    q: "How accurate is the competitor analysis?",
    a: "We pull data directly from Google PageSpeed, Search Console API, and third-party backlink databases including Ahrefs and Moz. Results are as accurate as the best tools in the industry.",
  },
  {
    q: "How long does it take to generate a report?",
    a: "Most reports complete in under 60 seconds. Complex sites with many competitors may take up to 2 minutes.",
  },
  {
    q: "Can I share my report with clients or teammates?",
    a: "Yes. Every report gets a unique public URL (e.g. rankroyale.com/report/your-site) that anyone can view without creating an account.",
  },
  {
    q: "What is Equinox Dynamics LDA?",
    a: "Equinox Dynamics LDA is the software company behind Rank Royale. We build data-driven growth tools for businesses and agencies worldwide.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes — you can run one free SEO battle report and get your power score instantly, no credit card required.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-sm text-muted-foreground">Everything you need to know before your first battle</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300
                ${open === i ? "bg-card border-primary/40" : "bg-secondary border-border hover:border-primary/30"}`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`text-sm font-semibold ${open === i ? "text-primary" : "text-foreground"}`}>
                  {faq.q}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                    ${open === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
