import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Swords, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Login | Rank Royale",
  description: "Sign in to your Rank Royale account.",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_24px_var(--brand-orange-glow)]">
            <Swords className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Login</h1>
          <p className="text-muted-foreground mb-8">
            Sign in is coming soon. Run an SEO battle to get started.
          </p>
          <Link
            href="/#hero"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
