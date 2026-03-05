import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pioneer OEL Gallery',
  description: 'Pioneer DEH-P7600MP screensaver animation library — 67 animations including level meters, patterns, and procedural visuals. Includes a virtual head unit showcase.',
  keywords: ['Pioneer', 'DEH-P7600MP', 'OEL', 'screensaver', 'animation', 'ESP32', 'CYD'],
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
