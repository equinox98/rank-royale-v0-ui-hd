import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { MissionsSection } from "@/components/missions-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhoForSection } from "@/components/who-for-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection, Footer } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <MissionsSection />
      <LeaderboardSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoForSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
