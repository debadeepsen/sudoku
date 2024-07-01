import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sudoku',
  description: 'A simple sudoku game'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-forest-100 dark:bg-forest-950'>{children}</body>
    </html>
  )
}
