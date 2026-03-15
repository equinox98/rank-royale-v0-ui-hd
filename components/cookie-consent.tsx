"use client"

import { useState, useEffect } from "react"
import { X, ChevronRight } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background to-background/95 border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">
              We use cookies to enhance your experience
            </p>
            <p className="text-xs text-muted-foreground">
              We use essential, analytics, and preference cookies to improve our service. By continuing to use this site, you consent to our use of cookies.{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Learn more
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-border transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-[0_0_12px_var(--brand-orange-glow)] flex items-center gap-1"
            >
              Accept
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
