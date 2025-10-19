"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group hover-scale">
            <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-5 h-5 text-primary"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="100,40 160,70 160,130 100,160 40,130 40,70"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <polygon
                  points="100,60 140,80 140,120 100,140 60,120 60,80"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <circle cx="100" cy="100" r="4" fill="currentColor" />
              </svg>
            </div>
            <span className="font-light text-lg tracking-wide hidden sm:inline text-foreground group-hover:text-primary transition-colors">
              Codetoli Technology
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light hover:text-primary transition-colors relative group underline-animate"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hidden sm:inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-light hover:opacity-90 transition-opacity button-press"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-secondary transition-colors button-press"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-light hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-light hover:opacity-90 transition-opacity text-center mt-4"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
