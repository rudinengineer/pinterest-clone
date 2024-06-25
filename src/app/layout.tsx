import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { app_description, app_name } from '@/constants/config'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700', '800'], display: 'swap' })

export const metadata: Metadata = {
  title: app_name,
  description: app_description,
  keywords: [app_name, "pinterest", "nextjs", "image explore", "image stock", "photo stock"],
  authors: [{ name: "Rudin Engineer", url: "http://rudinengineer.my.id" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
