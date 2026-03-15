import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Rank Royale",
  description: "Our terms of service governing the use of Rank Royale.",
}

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Rank Royale website and service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rank Royale provides SEO analysis and competitive benchmarking reports. The service analyzes websites based on publicly available data sources and generates comparative reports. These reports are intended for informational purposes and as general guidance for SEO improvement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">You agree to:</p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Provide accurate information when using our service</li>
                <li>Not use the service for illegal or unauthorized purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not harass or abuse other users</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. No Guarantee of Rankings</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rank Royale provides analysis and recommendations based on data and best practices, but does not guarantee improvement in search rankings or traffic. SEO results depend on many factors beyond our control, including search engine algorithm changes, competitive actions, and proper implementation of recommendations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">5. Report Sharing Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reports generated through our service are assigned a public URL and can be shared with anyone. By generating a report, you acknowledge that the data in your report may be viewed by others who have the link. You are responsible for any information you choose to share publicly through our service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rank Royale and its team shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the service or materials on the service, even if Rank Royale or an authorized representative has been notified of the possibility of such damages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">7. Modifications to Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rank Royale reserves the right to modify or discontinue the service at any time. We will make reasonable efforts to notify users of significant changes, but are not obligated to do so.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-surface-raised border border-border rounded-lg p-4 text-sm">
                <p className="text-foreground font-medium">Equinox Dynamics LDA</p>
                <p className="text-muted-foreground">Lisbon, Portugal</p>
                <p className="text-muted-foreground mt-2">Email: legal@rankroyale.tech</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
