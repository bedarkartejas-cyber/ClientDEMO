'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'

/**
 * THE MONOLITH PERFORMANCE SECTION
 * A complete structural redesign using depth layers and focal lighting.
 */

const WORKFLOW_MODES = [
  {
    id: 'gaming',
    title: 'Velocity',
    subtitle: 'Gaming & Simulation',
    stat: '144+ FPS',
    detail: 'Unleashing the full 140W TGP of the NVIDIA® GeForce RTX™ 40-Series. Cinematic ray tracing rendered in real-time.',
    color: '#3b82f6', // Electric Blue
    glow: 'rgba(59, 130, 246, 0.15)'
  },
  {
    id: 'editing',
    title: 'Precision',
    subtitle: 'Studio & Cinema',
    stat: '8K Raw',
    detail: 'Hardware-accelerated encoding for ProRes and AV1. Color-critical accuracy with a factory-calibrated ΔE < 1.0.',
    color: '#a855f7', // Studio Purple
    glow: 'rgba(168, 85, 247, 0.15)'
  },
  {
    id: 'office',
    title: 'Intelligence',
    subtitle: 'Executive Productivity',
    stat: '16 Hrs',
    detail: 'Dedicated NPU engine offloading AI tasks from the CPU, ensuring whisper-silent operation during massive workloads.',
    color: '#10b981', // Emerald
    glow: 'rgba(16, 185, 129, 0.15)'
  }
]

export default function PerformanceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Smooth progress for high-end feel
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Update active mode based on scroll position
  useEffect(() => {
    return smoothScroll.onChange((latest) => {
      if (latest < 0.33) setIndex(0)
      else if (latest < 0.66) setIndex(1)
      else setIndex(2)
    })
  }, [smoothScroll])

  const active = WORKFLOW_MODES[index]

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* 1. DYNAMIC FOCAL LIGHTING (The 'Soul' of the section) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ backgroundColor: active.glow }}
            transition={{ duration: 1.5 }}
            className="w-[60vw] h-[60vh] rounded-full blur-[160px] opacity-50"
          />
        </div>

        {/* 2. BACKGROUND TYPOGRAPHY (Ghost Text) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.h2
              key={active.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[25vw] font-bold text-white leading-none uppercase"
            >
              {active.title}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* 3. THE CENTRAL MONOLITH (Visualizing the Power) */}
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* CONTENT LAYER */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
               initial={false}
               animate={{ color: active.color }}
               className="text-[10px] font-mono uppercase tracking-[0.5em] mb-6 block"
            >
              Mode: {active.subtitle}
            </motion.div>

            <div className="overflow-hidden h-24 mb-4">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active.id}
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  exit={{ y: -80 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl font-medium text-white tracking-tighter"
                >
                  {active.title}
                </motion.h3>
              </AnimatePresence>
            </div>

            <motion.p 
              key={`${active.id}-desc`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-editorial text-white/40 max-w-md leading-relaxed mb-12"
            >
              {active.detail}
            </motion.p>

            {/* Premium Stat Reveal */}
            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-light text-white tracking-tighter">
                {active.stat}
              </span>
              <span className="text-xs font-mono text-white/20 uppercase tracking-widest">Performance Peak</span>
            </div>
          </div>

          {/* VISUAL CORE LAYER */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-square">
              {/* Outer Glass Ring */}
              <div className="absolute inset-0 border border-white/5 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]" />
                <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.6]" />
              </div>

              {/* The "Core" - Floating Silicon Graphic */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 glass-panel rounded-3xl border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,1)] bg-black/40 backdrop-blur-3xl">
                   <div className="relative">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-16 h-16 rounded-full blur-2xl" 
                        style={{ backgroundColor: active.color }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]" />
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Technical Annotations */}
              <div className="absolute top-0 right-0 p-8 text-right hidden md:block">
                 <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">Thermal Logic</div>
                 <div className="text-sm text-white/60">Liquid Metal Cooling</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. PROGRESS BAR (Side) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 h-32 items-center">
            {WORKFLOW_MODES.map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  height: index === i ? 40 : 8,
                  backgroundColor: index === i ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
                }}
                className="w-[1px] rounded-full transition-all"
              />
            ))}
        </div>

      </div>
    </section>
  )
}