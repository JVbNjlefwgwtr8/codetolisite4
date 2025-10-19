import type { Metadata } from "next"
import TermsPageContent from "./content"

export const metadata: Metadata = {
  title: "Terms of Service - Codetoli Technology",
  description:
    "Read Codetoli Technology's terms of service to understand the conditions of using our website and services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - Codetoli Technology",
    description:
      "Read Codetoli Technology's terms of service to understand the conditions of using our website and services.",
    url: "https://codetoli.com/terms",
    type: "website",
  },
}

export default function TermsPage() {
  return <TermsPageContent />
}
