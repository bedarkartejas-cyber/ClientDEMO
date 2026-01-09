'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

/**
 * TITAN APERTURE HERO - HYPER-PREMIUM EDITION
 * Features: Perspective-shift mouse tracking, technical HUD overlays, 
 * and surgical editorial typography.
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  // 1. ADVANCED SCROLL PHYSICS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 })
  
  // Parallax layers for architectural depth
  const textY = useTransform(smoothScroll, [0, 1], [0, -250])
  const subTextY = useTransform(smoothScroll, [0, 1], [0, -150])
  const bgScale = useTransform(smoothScroll, [0, 1], [1, 1.15])
  const opacity = useTransform(smoothScroll, [0, 0.6], [1, 0])

  // 2. KINETIC MOUSE PERSPECTIVE (Interaction)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    // Calculate normalized offset from center (-0.5 to 0.5)
    mouseX.set((clientX / innerWidth) - 0.5)
    mouseY.set((clientY / innerHeight) - 0.5)
  }

  // Smooth rotation values for the 3D tilt effect
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]))

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[125vh] bg-[#010102] flex items-center justify-center overflow-hidden"
    >
      {/* 1. ATMOSPHERIC DEPTH LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic Light Leaks for premium ambiance */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-600/[0.03] blur-[200px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/[0.03] blur-[200px] rounded-full" />
        
        {/* Technical HUD Dot Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="flex flex-col items-center text-center"
        >
          
          {/* 2. TECHNICAL HUD BADGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl mb-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="flex items-center gap-6">
              <span className="text-[9px] font-mono text-blue-500 uppercase tracking-[0.6em]">System Active</span>
              <div className="w-[1px] h-4 bg-white/10" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.6em]">Titan_P01 // 2026</span>
            </div>
          </motion.div>

          {/* 3. SURGICAL TYPOGRAPHY */}
          <motion.div style={{ y: textY, opacity }} className="mb-24 relative">
            <h1 className="text-8xl md:text-[15rem] font-bold text-white tracking-tighter leading-[0.75] uppercase">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 italic font-extralight">Limits.</span>
            </h1>
            
            {/* High-Fidelity Floating Vertical Subtitle */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block rotate-90">
               <span className="text-[10px] font-mono text-white/10 uppercase tracking-[1em] whitespace-nowrap">Engineering Perfection</span>
            </div>
          </motion.div>

          {/* 4. PRODUCT NARRATIVE & CTAs */}
          <motion.div style={{ y: subTextY, opacity }} className="max-w-3xl">
            <p className="text-editorial text-white/30 text-xl md:text-2xl font-light leading-relaxed mb-20 tracking-wide">
              Forged in the intersection of <span className="text-white/80">Vanguard Gaming</span>, 
              <span className="text-white/80"> Cinema Science</span>, and 
              <span className="text-white/80"> Architectural Precision</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                className="group relative px-16 py-6 border border-white/20 rounded-full text-white font-medium text-lg tracking-tight transition-all duration-700 overflow-hidden"
              >
                <span className="relative z-10">Acquire Titan</span>
              </motion.button>
              
              <motion.button
                whileHover={{ opacity: 1, x: 5 }}
                className="flex items-center gap-6 text-white/40 hover:text-white transition-all text-sm font-mono uppercase tracking-[0.4em]"
              >
                <span>Full Specs</span>
                <div className="w-12 h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
              </motion.button>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* 5. ARCHITECTURAL PERSONA FOOTER */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-20 w-full px-20 hidden lg:grid grid-cols-3 gap-24 border-t border-white/5 pt-12"
      >
        {[
          { label: 'Vanguard', val: '140W TGP Pro' },
          { label: 'Cinema', val: 'Lumina 10-Bit' },
          { label: 'Architect', val: 'AI Neural Core' }
        ].map((item, i) => (
          <div key={i} className="group cursor-crosshair">
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em] block mb-3 group-hover:text-blue-500 transition-colors">{item.label}</span>
            <p className="text-white/60 text-xs font-light tracking-widest">{item.val}</p>
          </div>
        ))}
      </motion.div>

      {/* 6. BACKGROUND MONOLITH WATERMARK */}
      <motion.div 
        style={{ y: textY, scale: bgScale }}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[38vw] font-black text-white/[0.01] tracking-tighter pointer-events-none select-none"
      >
        TITAN
      </motion.div>
    </section>
  )
}