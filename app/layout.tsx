import type { Metadata } from 'next'
import { Outfit, Crimson_Pro } from 'next/font/google'
import './globals.css'

// 1. Setup Editorial Fonts
const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const crimson = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: 'HP Victus  | Cinematic Showcase',
  description: 'Experience the new HP Victus. Precision crafted for the creative professional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /* 2. FORCE BLACK BACKGROUND ON HTML TAG TO PREVENT FLICKER */
    <html 
      lang="en" 
      className={`${outfit.variable} ${crimson.variable} scroll-smooth`}
      style={{ backgroundColor: '#000000' }} 
    >
      <head>
        {/* 3. CRITICAL INLINE SCRIPT
            This runs before React loads to ensure the body is never white.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.style.backgroundColor = '#000000';
                document.body.style.backgroundColor = '#000000';
              })();
            `,
          }}
        />
      </head>
      
      {/* 4. LAYOUT STRUCTURE */}
      <body className="bg-black text-[#F5F5F7] antialiased selection:bg-[#2997ff]/30 selection:text-white overflow-x-hidden">
        
        {/* Global Cinematic Background Layers */}
        <div className="noise-overlay" />
        <div className="ambient-glow" />
      

        {/* Main Content Wrapper */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  )
}