import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CT</span>
              </div>
              <span className="font-light text-lg tracking-wide">Codetoli</span>
            </div>
            <p className="text-sm font-light text-muted-foreground">
              Powering digital transformation with fast, intelligent software solutions for modern businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-light text-sm mb-4 text-foreground font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  POS System
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  ERP Suite
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accounting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-light text-sm mb-4 text-foreground font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-light text-sm mb-4 text-foreground font-semibold">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:codetoli@outlook.com"
                  className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  codetoli@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/codetoli-technology/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-light text-muted-foreground">© 2025 Codetoli Technology. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-condition"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms and Condition
              </Link>
              <a
                href="/sitemap.xml"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
