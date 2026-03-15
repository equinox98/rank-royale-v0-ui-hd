import { Metadata } from "next"
import ExampleReportPage from "./client"

export const metadata: Metadata = {
  title: "SEO Battle Report - londondentalcare.co.uk | Rank Royale",
  description: "SEO Power Score: 68/100. See how londondentalcare.co.uk compares to competitors. Analyze backlinks, technical SEO, and get actionable recommendations.",
  openGraph: {
    title: "I just analyzed londondentalcare.co.uk with Rank Royale - 68/100 SEO Power Score!",
    description: "See our SEO battle report with detailed competitor analysis, technical audits, and priority missions to improve rankings.",
    type: "website",
    url: "https://rankroyale.tech/report/example",
    images: [
      {
        url: "https://rankroyale.tech/og-report.png",
        width: 1200,
        height: 630,
        alt: "SEO Battle Report Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I just analyzed londondentalcare.co.uk with Rank Royale - 68/100 SEO Power Score!",
    description: "See our SEO battle report with detailed competitor analysis, technical audits, and priority missions.",
    images: ["https://rankroyale.tech/og-report.png"],
    creator: "@rankroyale",
  },
  keywords: [
    "SEO analysis",
    "competitor analysis",
    "SEO report",
    "London dentists",
    "local SEO",
  ],
  robots: "index, follow",
  canonical: "https://rankroyale.tech/report/example",
}

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ExampleReportPage />
}
