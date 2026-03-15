"use client"

import Link from "next/link"
import { Swords, Linkedin, Mail, X as XIcon } from "lucide-react"

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
