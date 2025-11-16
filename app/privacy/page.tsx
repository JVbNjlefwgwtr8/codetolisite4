import type { Metadata } from "next"
import PrivacyPageContent from "./content"

export const metadata: Metadata = {
  title: "Privacy Policy - Codetoli Technology",
  description: "Read Codetoli Technology's privacy policy to understand how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Codetoli Technology",
    description: "Read Codetoli Technology's privacy policy to understand how we collect, use, and protect your data.",
    url: "https://www.codetolittech.qzz.io/privacy",
    type: "website",
  },
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
