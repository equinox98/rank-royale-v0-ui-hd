"use client"

import { useState } from "react"
import { Zap, ArrowRight, Swords, Linkedin, Mail, X as XIcon } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  const [url, setUrl] = useState("")

  return (
    <section
      className="py-24 relative overflow-hidden border-t border-border"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.2 0.06 42 / 0.2) 0%, transparent 70%), oklch(0.1 0 0)",
      }}
    >
      {/* Faded warrior image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%202v.png-sB0ZtS0ql1fW5ivEXJpI8jbfKhpxNP.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary mb-6">
          <Swords className="w-3.5 h-3.5" />
          Start Your SEO Battle
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-balance uppercase leading-tight mb-4">
          Check <span className="text-primary">Your SEO</span>
          <br />
          Power Now
        </h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Start your free analysis now and see exactly how to beat your competitors in Google search results.
        </p>

        {/* URL input */}
        <div className="flex gap-2 max-w-md mx-auto mb-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website"
            className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button className="w-full max-w-md mx-auto flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-[0_0_24px_var(--brand-orange-glow)] hover:shadow-[0_0_40px_var(--brand-orange-glow)] group">
          <Zap className="w-4 h-4" />
          Start SEO Battle
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-3 text-xs text-muted-foreground">Free instant SEO power score</p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-surface-soft border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12 mb-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-[0_0_12px_var(--brand-orange-glow)] group-hover:shadow-[0_0_20px_var(--brand-orange-glow)] transition-all">
              <Swords className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">
              Rank <span className="text-primary">Royale</span>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed mt-3 max-w-xs">
            AI-powered SEO battle reports that reveal exactly why competitors outrank you.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Product</h3>
          <nav className="space-y-3">
            {[
              { label: "Features", href: "/#features" },
              { label: "How it works", href: "/how-it-works" },
              { label: "Example report", href: "/report/example" },
              { label: "Pricing", href: "/pricing" },
              { label: "Dashboard", href: "/dashboard" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Resources</h3>
          <nav className="space-y-3">
            {[
              { label: "Blog", href: "#" },
              { label: "SEO Guides", href: "#" },
              { label: "API Docs", href: "#" },
              { label: "Status", href: "#" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Company</h3>
          <nav className="space-y-3">
            {[
              { label: "About", href: "/about" },
              { label: "Contact", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Partners", href: "#" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Legal</h3>
          <nav className="space-y-3">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
              { label: "Impressum", href: "#" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2026 Rank Royale. Built by{" "}
            <a href="#" className="text-primary hover:underline">
              Equinox Dynamics LDA
            </a>
            .
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-surface-raised border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-surface-raised border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@rankroyale.tech"
              className="w-8 h-8 rounded-lg bg-surface-raised border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
