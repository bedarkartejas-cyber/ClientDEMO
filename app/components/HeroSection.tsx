'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// REMOVED: Dynamic import for Laptop3D

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  // Track scroll for the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20
  })

  // -- TEXT ANIMATIONS ONLY --
  // Text fades out as you scroll down
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]) // Extended range slightly since model is gone
  const textBlur = useTransform(smoothProgress, [0, 0.5], ['0px', '20px'])
  const textScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8])
  
  // REMOVED: Model position (modelY, modelScale, modelOpacity) variables

  return (
    // Explicit bg-black to prevent white flashes
    <section ref={containerRef} className="relative h-[200vh] bg-black z-0">
      
      {/* Sticky container that holds the visual while we scroll */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Cinematic Spotlight */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* -- TEXT LAYER -- */}
        <motion.div 
          className="relative z-10 text-center flex flex-col items-center px-6"
          style={{ 
            opacity: textOpacity, 
            scale: textScale, 
            filter: useTransform(textBlur, (v) => `blur(${v})`)
          }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zen-blue shadow-[0_0_10px_#2997ff]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
              Flagship Series
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={isMounted ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="headline-cinema text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tighter text-white"
          >
            ZenBook Pro
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="text-editorial text-lg text-white/50 max-w-lg mx-auto leading-relaxed"
          >
            The pinnacle of performance. <br className="hidden md:block" />
            Designed for those who shape the future.
          </motion.p>
        </motion.div>

        {/* REMOVED: <motion.div> wrapper containing <Laptop3D /> */}

        {/* -- SCROLL INDICATOR -- */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
        >
          <span className="text-[9px] uppercase tracking-widest text-white/40">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent">
             <div className="w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}