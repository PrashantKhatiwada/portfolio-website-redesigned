import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import ScrollIndicator from "@/components/scroll-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prashant Khatiwada | Portfolio",
  description: "Personal portfolio of Prashant Khatiwada - Web Developer and Data Analyst",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="grain" />
          <ScrollIndicator />
          <CustomCursor />
          <Navbar />
          <div className="pt-16">{children}</div>
          <footer className="py-6 border-t">
            <div className="container px-4 md:px-6 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Prashant Khatiwada. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
