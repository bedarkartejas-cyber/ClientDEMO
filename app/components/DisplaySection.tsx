'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function DisplaySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll over 250vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Heavy physics for smooth luxury feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20
  })

  // -- ANIMATION SEQUENCE --

  // 1. Zoom into the screen (0.8 -> 1.0)
  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1])
  
  // 2. "Turning On" Effect (Brightness & Contrast)
  const brightness = useTransform(smoothProgress, [0, 0.2, 0.5], [0.2, 1.2, 1])
  const contrast = useTransform(smoothProgress, [0, 0.5], [0.8, 1.1])
  
  // 3. Pixel Grid Fade Out (Simulates resolution resolving)
  const gridOpacity = useTransform(smoothProgress, [0.1, 0.4], [0.4, 0])
  
  // 4. Text Parallax (Moves slower than the screen)
  const textY = useTransform(smoothProgress, [0, 1], [0, 100])
  
  // 5. Spec Cards (Float in from sides)
  const leftCardX = useTransform(smoothProgress, [0.2, 0.5], [-100, 0])
  const rightCardX = useTransform(smoothProgress, [0.2, 0.5], [100, 0])
  const cardOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1])

  return (
    <section ref={containerRef} id="display" className="relative h-[250vh] bg-black">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* -- BACKGROUND AMBIENCE -- */}
        {/* Dynamic colored glow that matches the image content */}
        <motion.div 
          style={{ opacity: smoothProgress }}
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black pointer-events-none"
        />

        {/* -- MAIN CONTENT STACK -- */}
        <div className="relative w-full max-w-[90vw] md:max-w-[1400px] aspect-video flex items-center justify-center">
          
          {/* 1. THE SCREEN (Masked Container) */}
          <motion.div 
            style={{ scale }}
            className="relative w-full h-full rounded-[2rem] overflow-hidden border-[8px] border-[#1a1a1c] shadow-2xl bg-black"
          >
            {/* The Vivid OLED Image */}
            <motion.div 
              style={{ 
                filter: useTransform(
                  [brightness, contrast], 
                  ([b, c]) => `brightness(${b}) contrast(${c})`
                ) 
              }}
              className="w-full h-full"
            >
              {/* Abstract Colorful Fluid Image */}
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
                alt="OLED HDR" 
                className="w-full h-full object-cover"
              />
              
              {/* Inner Glow (Bloom) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-overlay" />
            </motion.div>

            {/* Pixel Grid Overlay (Fades out) */}
            <motion.div 
              style={{ opacity: gridOpacity }}
              className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[length:4px_4px] mix-blend-overlay"
            />
            
            {/* Reflection Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-30" />

            {/* Center Label (Inside Screen) */}
            <div className="absolute inset-0 flex items-center justify-center z-40 mix-blend-difference">
               <motion.h2 
                 style={{ y: textY }}
                 className="text-[10vw] font-bold text-white tracking-tighter leading-none text-center"
               >
                 LUMINA<br/>
                 <span className="text-[2vw] tracking-[1em] font-light opacity-50 block mt-4">OLED HDR</span>
               </motion.h2>
            </div>
          </motion.div>

          {/* -- FLOATING SPEC CARDS (Parallax Layers) -- */}
          
          {/* Top Left: Resolution */}
          <motion.div 
            style={{ x: leftCardX, opacity: cardOpacity }}
            className="absolute top-[10%] left-[-5%] md:left-[-10%] z-50"
          >
            <div className="glass-panel p-6 rounded-2xl border-l-2 border-zen-purple backdrop-blur-xl">
               <div className="text-4xl font-light text-white mb-1">3.2K</div>
               <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Resolution</div>
            </div>
          </motion.div>

          {/* Bottom Right: Refresh Rate */}
          <motion.div 
            style={{ x: rightCardX, opacity: cardOpacity }}
            className="absolute bottom-[10%] right-[-5%] md:right-[-10%] z-50"
          >
            <div className="glass-panel p-6 rounded-2xl border-r-2 border-zen-blue backdrop-blur-xl text-right">
               <div className="text-4xl font-light text-white mb-1">120Hz</div>
               <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Motion Clarity</div>
            </div>
          </motion.div>

          {/* Bottom Left: Color Accuracy */}
          <motion.div 
            style={{ x: leftCardX, opacity: cardOpacity }}
            className="absolute bottom-[-5%] left-[10%] z-50"
          >
             <div className="flex items-center gap-3 glass-panel px-6 py-3 rounded-full">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500" />
                <span className="text-sm text-white font-medium">100% DCI-P3</span>
             </div>
          </motion.div>

        </div>
        
        {/* Background Footer Text */}
        <div className="absolute bottom-12 text-center">
           <p className="text-editorial text-white/40 text-sm">
             Certified VESA DisplayHDR™ True Black 600
           </p>
        </div>

      </div>
    </section>
  )
}