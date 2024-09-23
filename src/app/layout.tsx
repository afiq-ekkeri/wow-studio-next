import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import GoogleAnalytics from '@/app/providers/GoogleAnalytics';
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const georgia = localFont({ src: '../fonts/Georgia.woff2' })
const blatant = localFont({ src: '../fonts/BlatantRegular.woff2' })

export const metadata: Metadata = {
  title: 'Digital Branding Creative Agency in Dubai',
  description: 'Wow Studio is a creative brand agency in Dubai. We help build brands that leaves a lasting impression, brands with purpose, which impact the lives of millions.',
  keywords: "creative studio, brand strategy, brand identity, design strategy, product design, marketing strategy, graphic design, brochure design, wow studio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`${georgia.className} ${blatant.className}`}>{children}</body>
    </html>
  )
}
