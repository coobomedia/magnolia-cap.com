import "@/styles/globals.css"
import { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import MagFooter from "@/components/mag-footer"
import MagHeader from "@/components/mag-header"
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Magnolia Private Capital",
    template: "%s | Coobo Media Template",
  },
  description: "Streamlined Private Investment Firm.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={cn(
        montserrat.variable,
        roboto.variable,
        "scroll-smooth font-sans antialiased"
      )}
      lang="en"
    >
      <body className=" bg-white ">
        <MagHeader />
        {children}
        <MagFooter />
        {/* <Toaster />
        <Analytics /> */}
      </body>
    </html>
  )
}
