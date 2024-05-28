import '@/app/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Anime',
  description: 'Your favorite anime, all in one place.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'dark min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <header className='flex flex-col items-center h-20'>header</header>
        {children}
      </body>
    </html>
  )
}
