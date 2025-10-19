"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
