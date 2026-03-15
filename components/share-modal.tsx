"use client"

import { useState } from "react"
import { Copy, Check, X, Share2, Linkedin, MessageCircle } from "lucide-react"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  reportUrl: string
  reportId: string
  seoScore: number
  domain: string
}

export function ShareModal({
  isOpen,
  onClose,
  reportUrl,
  reportId,
  seoScore,
  domain,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(reportUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const xShareUrl = `https://twitter.com/intent/tweet?text=I%20just%20analyzed%20${encodeURIComponent(domain)}%20with%20Rank%20Royale%20and%20got%20a%20${seoScore}%2F100%20SEO%20Power%20Score%21%20Run%20your%20own%20SEO%20battle%20%E2%9A%A1&url=${encodeURIComponent(reportUrl)}&via=rankroyale`

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(reportUrl)}`

  const whatsappShareUrl = `https://wa.me/?text=Check%20out%20my%20SEO%20battle%20report%20for%20${encodeURIComponent(domain)}%20-%20${seoScore}%2F100%20score%20${encodeURIComponent(reportUrl)}`

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-surface-raised border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
              <Share2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Share Your Report</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Report info */}
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Report Link
            </p>
            <p className="text-sm text-foreground truncate font-mono">{reportUrl}</p>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-[0_0_16px_var(--brand-orange-glow)] hover:shadow-[0_0_24px_var(--brand-orange-glow)] flex items-center justify-center gap-2 group active:animate-[copy-pulse_0.4s_ease]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 animate-[score-increment_0.3s_ease]" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Copy Link
              </>
            )}
          </button>

          {/* Social share buttons */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Share to Social
            </p>
            <div className="grid grid-cols-3 gap-3">
              {/* X */}
              <a
                href={xShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-surface-soft hover:bg-muted transition-colors group"
              >
                <svg
                  className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.308l7.734-8.835L2.6 2.25h6.696l4.893 6.469 5.255-6.469zM17.313 20.713h1.82L5.541 4.067H3.457l13.856 16.646z" />
                </svg>
                <span className="text-xs font-medium">X</span>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-surface-soft hover:bg-muted transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-surface-soft hover:bg-muted transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Chat</span>
              </a>
            </div>
          </div>

          {/* Info */}
          <p className="text-xs text-muted-foreground text-center">
            Share your report to inspire others to run their own SEO battle.
          </p>
        </div>
      </div>
    </>
  )
}
