import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | Rank Royale",
  description: "Our cookie policy explaining how we use cookies and tracking technologies.",
}

export default function CookiesPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-3xl mx-auto px-6 pb-24">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small files placed on your device by websites you visit. They contain information that enables the website to recognize your browser and remember information about your visit.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rank Royale uses cookies for the following purposes:
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for authentication, security, and core functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Performance Cookies:</strong> Measure performance and optimize user experience</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may allow third-party service providers to place cookies on our website for analytics and performance monitoring. These third parties are bound by confidentiality agreements and are not permitted to use cookie information for purposes other than those specified by Rank Royale.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through your browser settings. You can:
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>View what cookies are set and delete them individually</li>
                <li>Block cookies from specific websites</li>
                <li>Disable all cookies or third-party cookies</li>
                <li>Delete all cookies when closing your browser</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality and performance of our service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Cookie Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you first visit Rank Royale, we display a cookie consent banner. By continuing to use our website after this banner is displayed, or by clicking "Accept", you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your cookie settings in your browser.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Legal Basis for Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Essential and performance cookies are necessary for our service to function properly. Analytics and preference cookies are based on your consent, which you can withdraw at any time through your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-surface-raised border border-border rounded-lg p-4 text-sm">
                <p className="text-foreground font-medium">Equinox Dynamics LDA</p>
                <p className="text-muted-foreground">Lisbon, Portugal</p>
                <p className="text-muted-foreground mt-2">Email: cookies@rankroyale.tech</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
