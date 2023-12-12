import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This is the main descrption.',
  openGraph: {
    title: "My page title",
    description: "this is a description",
    url: "mywebsite.com",
    siteName: "codewithguillaume",
    images: [
      {
        url: '/mywebsite.png',
        width: 1260,
        height: 800,
      },
    
    ]
  }
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
