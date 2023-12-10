import type { Metadata } from 'next'
import { M_PLUS_1 } from 'next/font/google'
import './globals.css'

const inter = M_PLUS_1({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Banki: Trying to loot you',
  description: 'Banki is built using Nextjs framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
