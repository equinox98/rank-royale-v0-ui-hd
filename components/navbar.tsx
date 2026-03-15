"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Swords, Globe, ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-[0_0_24px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-10">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-[0_0_16px_var(--brand-orange-glow)] group-hover:shadow-[0_0_24px_var(--brand-orange-glow)] transition-all">
            <Swords className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-base tracking-tight text-foreground hidden sm:block">
            Rank <span className="text-primary">Royale</span>
          </span>
        </Link>

        {/* Center Nav - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/report" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            Example Report
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 z-10">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-raised">
            <Globe className="w-4 h-4" />
            EN
            <ChevronDown className="w-3 h-3" />
          </button>
          <Link
            href="#hero"
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-orange-600 text-primary-foreground text-sm font-semibold hover:opacity-95 transition-all shadow-[0_0_16px_var(--brand-orange-glow)] hover:shadow-[0_0_24px_var(--brand-orange-glow)]"
          >
            Start
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface-soft">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            <Link 
              href="#features" 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-raised rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-raised rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="/report" 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-raised rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Example Report
            </Link>
            <Link 
              href="/dashboard" 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-raised rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
