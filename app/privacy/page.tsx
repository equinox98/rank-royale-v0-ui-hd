import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Rank Royale",
  description: "Our privacy policy explaining how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rank Royale ("we", "our", or "us") operates the rankroyale.tech website and service. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed">We collect several different types of information for various purposes to provide and improve our service to you:</p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Website URLs you analyze through our SEO audit tool</li>
                <li>Competitor domain names you provide for comparison</li>
                <li>Your location and industry/niche information</li>
                <li>Email address for account creation and communication</li>
                <li>Usage patterns and interaction data with our platform</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">Rank Royale uses the collected data for various purposes:</p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>To provide and maintain our service</li>
                <li>To generate SEO audit reports and competitive analysis</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to share your reports with others</li>
                <li>To monitor usage and improve our analytics features</li>
                <li>To detect, prevent and address technical and security issues</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Report Sharing and Public Leaderboards</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you generate an SEO battle report, it receives a unique public URL that can be shared. This URL allows anyone with the link to view your report data. We may also aggregate anonymized data from reports to display on our public leaderboards, showing top-ranking domains by industry and location. No personally identifiable information is displayed on leaderboards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-surface-raised border border-border rounded-lg p-4 text-sm">
                <p className="text-foreground font-medium">Equinox Dynamics LDA</p>
                <p className="text-muted-foreground">Lisbon, Portugal</p>
                <p className="text-muted-foreground mt-2">Email: privacy@rankroyale.tech</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
