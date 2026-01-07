'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// -- COMPONENT: Premium Stat Card --
const StatCard = ({ label, value, sub, delay }: { label: string, value: string, sub: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="relative pl-8 py-4 group"
  >
    {/* Gradient Vertical Line */}
    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-blue-500/50 transition-colors duration-500" />
    
    <span className="text-blue-400/80 text-[10px] font-mono uppercase tracking-[0.2em] mb-2 block">
      {label}
    </span>
    
    {/* Metallic Text Effect */}
    <span className="text-4xl md:text-5xl font-medium tracking-tighter bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
      {value}
    </span>
    
    <p className="text-neutral-500 text-sm mt-3 leading-relaxed font-light max-w-sm">
      {sub}
    </p>
  </motion.div>
)

export default function PerformanceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Smooth Parallax
  const visualY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-[#050505] py-32 flex items-center justify-center overflow-hidden">
      
      {/* -- ATMOSPHERE -- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Noise Texture for "Film Grain" look */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        {/* Subtle top spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        
        {/* -- HEADER -- */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-medium text-white tracking-tighter mb-8"
          >
            Raw Power. <br />
            <span className="text-white/20">Refined.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-xl md:text-2xl text-neutral-400 font-light">
              The Intel® Core™ Ultra 9 processor. <br className="hidden md:block"/>
              Orchestrating performance with silence.
            </p>
          </motion.div>
        </div>

        {/* -- MAIN CONTENT GRID -- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">
          
          {/* LEFT: THE OBSIDIAN CHIP (Visual) */}
          <motion.div 
            style={{ y: visualY, opacity }}
            className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 group"
          >
            {/* 1. The Monolith Container */}
            <div className="relative w-full h-full bg-gradient-to-b from-[#111] to-black rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
              
              {/* Internal Circuit Grid (Subtle) */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Scanner Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[50%] animate-[scan_8s_linear_infinite]" />

              {/* The Glowing Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                 {/* Breathing Outer Glow */}
                 <motion.div 
                   animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.05, 0.95] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="w-48 h-48 bg-blue-900/30 rounded-full blur-[60px]" 
                 />
                 
                 {/* The Physical Core Die */}
                 <div className="relative w-32 h-32 bg-[#080808] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,1)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl" />
                    
                    {/* Inner Jewel */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#222] to-black rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-50" />
                       <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
                    </div>
                 </div>
              </div>

              {/* Technical Markings */}
              <div className="absolute top-6 left-6 flex gap-2">
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="w-1 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="absolute bottom-6 left-6 text-[9px] font-mono text-white/20 tracking-widest">
                SYS_ARCH_V9.0
              </div>

            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-4 top-12 bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full flex items-center gap-3 shadow-lg"
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Ultra 9 Series</span>
            </motion.div>
          </motion.div>


          {/* RIGHT: THE SPECS (Refined) */}
          <div className="flex flex-col gap-10 lg:pb-8 border-t border-white/5 pt-10 lg:border-t-0 lg:pt-0">
            
            <StatCard 
              delay={0.2}
              label="Architecture"
              value="Hybrid 3D"
              sub="Performance x Efficiency cores optimized for battery life and raw speed."
            />

            <StatCard 
              delay={0.3}
              label="Processing"
              value="16 Cores"
              sub="22 Threads. Up to 5.1 GHz Turbo Boost for instant responsiveness."
            />

            <StatCard 
              delay={0.4}
              label="Intelligence"
              value="11 TOPS"
              sub="Integrated NPU for local AI acceleration without cloud latency."
            />

          </div>

        </div>
      </div>
    </section>
  )
}