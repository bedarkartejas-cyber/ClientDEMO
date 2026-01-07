import type { Metadata } from 'next'
import { Outfit, Crimson_Pro } from 'next/font/google'
import './globals.css'

// 1. Setup Editorial Fonts
// 'Outfit' for modern UI text (Apple-style clean sans)
const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// 'Crimson Pro' for elegant, high-fashion accent text
const crimson = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: 'ASUS ZenBook Pro | Cinematic Showcase',
  description: 'Experience the new ZenBook Pro 14 OLED. Precision crafted for the creative professional.',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${crimson.variable} scroll-smooth`}>
      <body className="bg-canvas text-content-primary antialiased selection:bg-zen-blue/30 selection:text-white">
        
        {/* 2. GLOBAL CINEMATIC LAYERS 
           These stay fixed while content scrolls over them 
        */}
        
        {/* Film Grain Texture (See globals.css .noise-overlay) */}
        <div className="noise-overlay" />
        
        {/* Subtle Bottom Fog (See globals.css .ambient-glow) */}
        <div className="ambient-glow" />

        {/* 3. Main Content Wrapper */}
        <div className="relative z-10">
          {children}
        </div>
        
      </body>
    </html>
  )
}