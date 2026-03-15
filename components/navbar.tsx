"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Swords, Globe, ChevronDown } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_12px_var(--brand-orange-glow)]">
            <Swords className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">
            Rank <span className="text-primary">Royale</span>
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="/report" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Example Report
          </Link>
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
            EN
            <ChevronDown className="w-3 h-3" />
          </button>
          <Link
            href="#hero"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all shadow-[0_0_16px_var(--brand-orange-glow)] hover:shadow-[0_0_24px_var(--brand-orange-glow)]"
          >
            Start
          </Link>
        </div>
      </div>
    </header>
  )
}
