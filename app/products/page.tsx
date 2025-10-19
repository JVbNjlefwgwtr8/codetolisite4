import type { Metadata } from "next"
import ProductsPageContent from "./content"

export const metadata: Metadata = {
  title: "Business Software Products - Codetoli Technology",
  description:
    "Explore Codetoli's comprehensive business software solutions: POS, ERP, eCommerce, Accounting, Restaurant Management, and AI-powered systems.",
  keywords: [
    "business software",
    "POS system",
    "ERP software",
    "eCommerce platform",
    "accounting software",
    "restaurant management",
    "AI business solutions",
  ],
  openGraph: {
    title: "Business Software Products - Codetoli Technology",
    description:
      "Explore Codetoli's comprehensive business software solutions: POS, ERP, eCommerce, Accounting, Restaurant Management, and AI-powered systems.",
    url: "https://codetoli.com/products",
    type: "website",
  },
}

export default function ProductsPage() {
  return <ProductsPageContent />
}
