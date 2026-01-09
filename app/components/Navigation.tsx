'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValue, useTransform } from 'framer-motion'

const navLinks = [
  { name: 'Vision', href: '#overview' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Performance', href: '#performance' },
  { name: 'Tech Specs', href: '#specs' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  // Handle Scroll Logic for "Dock" compression
  useTransform(scrollY, [0, 100], [0, 1]) // Example usage for future expansions

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* -- MAIN FLOATING DOCK -- 
        Uses 'fixed' positioning but margins create the 'floating' look.
        Transition duration is long (700ms) for that 'heavy' premium feel.
      */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-700 ${
          isScrolled ? 'top-0 py-4' : 'top-6 py-0'
        }`}
      >
        <div 
          className={`
            relative flex items-center justify-between 
            transition-all duration-700 ease-luxury
            backdrop-blur-xl border border-white/10 shadow-2xl
            ${isScrolled 
              ? 'w-full px-8 bg-[#050507]/80 rounded-none border-x-0 border-t-0' 
              : 'w-[95%] md:w-[90%] max-w-7xl px-6 py-4 bg-[#0a0a0c]/60 rounded-full'
            }
          `}
        >
          {/* 1. BRAND LOGO */}
          <a href="#" className="flex items-center gap-3 group z-50">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-bold text-sm tracking-tighter group-hover:rotate-180 transition-transform duration-700 ease-luxury">
              HP
            </div>
            <span className="font-sans text-lg font-medium tracking-wide text-white group-hover:text-white/70 transition-colors">
              Helix <span className="text-white/40 font-light">AI</span>
            </span>
          </a>

          {/* 2. DESKTOP LINKS (Magnetic) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 group overflow-hidden rounded-full transition-all hover:bg-white/5"
              >
                <span className="relative z-10 text-xs font-medium uppercase tracking-widest text-white/60 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                {/* Hover Glow */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md" />
              </a>
            ))}
          </nav>

          {/* 3. RIGHT ACTIONS */}
          <div className="flex items-center gap-4 z-50">
            <motion.a
              href="#buy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full 
                text-xs font-semibold uppercase tracking-wider transition-all
                ${isScrolled 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-zen-blue text-white shadow-[0_0_20px_rgba(41,151,255,0.4)] hover:shadow-[0_0_30px_rgba(41,151,255,0.6)]'
                }
              `}
            >
              Pre-Order
            </motion.a>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-4 h-[2px] bg-white/60 transition-opacity duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* -- MOBILE MENU OVERLAY -- 
        Full screen takeover with stagger animations
      */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#000000] flex items-center justify-center"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-light text-white hover:text-zen-blue transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 w-full h-[1px] bg-white/10 max-w-xs"
              />

              <motion.a
                href="#buy"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm font-mono text-white/50 uppercase tracking-widest hover:text-white"
              >
                [ Proceed to Order ]
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}