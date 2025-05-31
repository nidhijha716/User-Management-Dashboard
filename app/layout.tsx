import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ParallaxBackground } from "@/components/layout/parallax-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "User Management Dashboard",
  description: "A modern user management dashboard with parallax backgrounds",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ParallaxBackground />
          <div className="relative z-10">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
