'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * Enhanced HeroSection:
 * - Removed 3D Model logic to prevent "popping" or "new model" issues.
 * - Optimized text exit for a cleaner transition to the next section.
 * - Maintained cinematic background depth.
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  // Track scroll progress through the hero area (200vh height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Smooth out the scroll interaction
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.001
  })

  // --- CONTENT TRANSITIONS ---
  // Elements fade and scale down as we scroll into the next section
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0])
  const contentScale = useTransform(smoothProgress, [0, 0.4], [1, 0.95])
  const contentY = useTransform(smoothProgress, [0, 0.4], [0, -40])

  return (
    // Section height provides the scroll runway
    <section ref={containerRef} className="relative h-[180vh] bg-black z-0">
      
      {/* Sticky container centers content during the scroll */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Static Cinematic Background (Does not re-appear or scale) */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-40 pointer-events-none" />

        {/* -- MAIN TEXT LAYER -- */}
        <motion.div 
          className="relative z-10 text-center flex flex-col items-center px-6"
          style={{ 
            opacity: contentOpacity, 
            scale: contentScale,
            y: contentY
          }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#2997ff]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
               Victus Series
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            animate={isMounted ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="headline-cinema text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tighter text-white"
          >
            Incredible <br />
            <span className="text-white/20">Starts Within.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="text-editorial text-lg text-white/40 max-w-lg mx-auto leading-relaxed"
          >
            Engineered for the visionaries. <br className="hidden md:block" />
            Designed to shape the future.
          </motion.p>
        </motion.div>

        {/* -- SCROLL INDICATOR -- */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-widest text-white/30">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent">
             <motion.div 
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-1/2 bg-blue-500/50" 
             />
          </div>
        </motion.div>

      </div>
    </section>
  )
}