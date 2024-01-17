import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandon McKimmons Portfolio',
  description: 'Brandon McKimmons Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <body className={inter.className}>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
