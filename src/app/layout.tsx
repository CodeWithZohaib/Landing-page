import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "STUDIO ZENO",
  description:
    "A bold studio delivering unique web and brand experiences with flair.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

