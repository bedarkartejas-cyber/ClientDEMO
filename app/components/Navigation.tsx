'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * TITAN HYPER-HUD NAVIGATION (STATE-AWARE)
 * Features: Adaptive island compression, liquid-shimmer branding, 
 * and Global State Integration for the Slide-to-Left Comparison transition.
 */
export default function Navbar({ 
  onCompareClick, 
  isComparing 
}: { 
  onCompareClick: () => void, 
  isComparing: boolean 
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const coreLinks = [
    { name: 'Vanguard', href: '#features' },
    { name: 'Aperture', href: '#gallery' },
    { name: 'Specs', href: '#specs' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-10 pointer-events-none">
      <div className="container mx-auto max-w-[1400px] flex justify-between items-center">
        
        {/* 1. BRAND SIGNATURE (Liquid Shimmer) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto group relative"
        >
          <a href="#" onClick={(e) => { e.preventDefault(); if(isComparing) onCompareClick(); }} className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-[0.4em] uppercase leading-none overflow-hidden relative">
              HP <span className="text-white/10 font-light group-hover:text-blue-500 transition-all duration-700 ease-out">TITAN</span>
            </span>
            <div className="flex items-center gap-3 mt-2">
              <motion.div 
                animate={{ width: isScrolled ? 12 : 24 }}
                className={`h-[1px] ${isComparing ? 'bg-blue-400' : 'bg-emerald-500/60'}`} 
              />
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] group-hover:text-white/50 transition-colors">
                {isComparing ? 'PROTOCOL_COMPARE' : 'Node_P01.SYS'}
              </span>
            </div>
          </a>
        </motion.div>

        {/* 2. ADAPTIVE HUD ISLAND (State-Aware) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block pointer-events-auto"
        >
          <motion.div 
            animate={{ 
              paddingLeft: isScrolled ? 12 : 24, 
              paddingRight: isScrolled ? 12 : 24,
              scale: isScrolled ? 0.95 : 1
            }}
            className={`
              relative flex items-center gap-1 py-2 rounded-full border border-white/5 transition-all duration-1000
              ${isScrolled || isComparing 
                ? 'bg-black/60 backdrop-blur-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
                : 'bg-transparent'}
            `}
          >
            <AnimatePresence>
              {hoveredLink && (
                <motion.div 
                  layoutId="nav-bg"
                  className="absolute bg-white/5 rounded-full z-0 inset-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            {/* Home/Back Trigger if in Compare Mode */}
            {isComparing && (
               <button
                 onClick={onCompareClick}
                 className="px-6 py-2 text-[10px] font-mono text-white/40 hover:text-white uppercase tracking-[0.3em] z-10"
               >
                 Back
               </button>
            )}

            {coreLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`px-6 py-2 text-[10px] font-mono uppercase tracking-[0.3em] transition-all relative z-10 ${isComparing ? 'opacity-20 pointer-events-none' : 'text-white/40 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-[1px] h-4 bg-white/10 mx-2" />

            {/* ISOLATED COMPARE TRIGGER */}
            <button
              onClick={onCompareClick}
              onMouseEnter={() => setHoveredLink('compare')}
              onMouseLeave={() => setHoveredLink(null)}
              className={`px-6 py-2 text-[10px] font-mono uppercase tracking-[0.3em] transition-all relative z-10 group ${isComparing ? 'text-white font-bold' : 'text-blue-400 hover:text-blue-300'}`}
            >
              {isComparing ? 'Close Matrix' : 'Compare'}
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full transition-transform ${isComparing ? 'scale-150' : 'scale-0 group-hover:scale-100'}`} />
            </button>

            <div className="w-[1px] h-4 bg-white/10 mx-2" />

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
              className="px-8 py-2 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
            >
              Acquire
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3. SYSTEM DIAGNOSTICS (State-Aware) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto hidden lg:flex items-center gap-8"
        >
          <div className="flex flex-col items-end group">
            <div className="flex items-center gap-3">
              <span className={`text-[9px] font-mono uppercase tracking-[0.4em] italic transition-colors ${isComparing ? 'text-blue-400' : 'text-white/40'}`}>
                {isComparing ? 'SYS_COMPARE' : 'SYS_LIVE'}
              </span>
              <div className="relative w-2 h-2">
                <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isComparing ? 'bg-blue-400' : 'bg-emerald-500'}`} />
                <div className={`relative w-full h-full rounded-full shadow-lg ${isComparing ? 'bg-blue-500 shadow-blue-500/50' : 'bg-emerald-500 shadow-emerald-500/50'}`} />
              </div>
            </div>
            <span className="text-[8px] font-mono text-white/10 uppercase mt-2">
              Node // {isComparing ? 'MATRIX_VIEW' : '026-TITAN'}
            </span>
          </div>
          
          <button className="relative w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-white/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative flex flex-col gap-1.5 z-10">
              <div className="w-5 h-[1px] bg-white/30 group-hover:bg-white transition-colors" />
              <div className="w-3 h-[1px] bg-white/30 group-hover:bg-white transition-colors self-end" />
            </div>
          </button>
        </motion.div>

      </div>
    </nav>
  )
}