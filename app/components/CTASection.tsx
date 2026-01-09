'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * THE TITAN INVITATION (CTA SECTION)
 * Replaces standard CTAs with a high-fidelity "Bespoke Invitation" experience.
 * Features liquid-metal textures and elite professional narratives.
 */
export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Luxury Parallax for background elements
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} id="contact" className="relative py-60 bg-black overflow-hidden">
      
      {/* 1. LIQUID METAL BACKGROUND */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Large abstract gradient "soul" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-blue-600/10 blur-[160px] rounded-full" />
        
        {/* Subtle hardware-inspired grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* 2. TITAN BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.4em]">Limited Titan Release</span>
        </motion.div>

        {/* 3. EDITORIAL HEADLINE */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-medium text-white tracking-tighter leading-[0.8] mb-16"
        >
          Own the <br />
          <span className="text-white/10 italic">Apex.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-editorial text-white/40 max-w-2xl mx-auto mb-20 leading-relaxed"
        >
          Whether you are rendering 8K cinema, competing at the global stage, 
          or orchestrating an enterprise, the ZenBook Pro Titan is your definitive edge.
        </motion.p>

        {/* 4. PREMIUM CALL TO ACTION */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 bg-white rounded-full overflow-hidden transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative z-10 text-black font-medium tracking-tight text-lg">Order Your Titan</span>
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            className="px-12 py-6 border border-white/10 rounded-full text-white/60 font-light tracking-tight text-lg transition-colors backdrop-blur-md"
          >
            Request Private Demo
          </motion.button>
        </div>

        {/* 5. DATA SUMMARY (PERSONA STATS) */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20 max-w-5xl mx-auto">
          <div>
            <span className="text-blue-400 font-mono text-[9px] uppercase tracking-widest block mb-4">The Vanguard</span>
            <p className="text-white text-sm font-light">Optimized for Gaming & 120Hz Fluidity.</p>
          </div>
          <div>
            <span className="text-purple-400 font-mono text-[9px] uppercase tracking-widest block mb-4">The Cinematographer</span>
            <p className="text-white text-sm font-light">Calman Verified OLED Color Science.</p>
          </div>
          <div>
            <span className="text-emerald-400 font-mono text-[9px] uppercase tracking-widest block mb-4">The Architect</span>
            <p className="text-white text-sm font-light">16-Hour AI-Accelerated Endurance.</p>
          </div>
        </div>

      </div>

      {/* FOOTER LOGO WATERMARK */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[30vw] font-bold text-white/[0.02] tracking-tighter pointer-events-none select-none">
        TITAN
      </div>
    </section>
  )
}