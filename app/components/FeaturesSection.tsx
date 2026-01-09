'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

/**
 * THE TITAN BESPOKE (ULTRA-PREMIUM FEATURES)
 * Implements architectural bento-spacing, fluid depth masking,
 * and high-fidelity textures for an elite professional narrative.
 */

const BespokeTile = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: ReactNode, 
  className?: string,
  delay?: number
}) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98, y: 40 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      delay, 
      duration: 1.4, 
      ease: [0.19, 1, 0.22, 1] // Luxury "Power" Ease
    }}
    className={`relative overflow-hidden rounded-[4rem] border border-white/5 bg-[#030303] group ${className}`}
  >
    {/* Metallic Shimmer Effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    {/* Micro-Film Grain */}
    <div className="absolute inset-0 opacity-[0.012] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    {children}
  </motion.div>
)

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={containerRef} id="features" className="relative py-60 bg-black">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* 1. ARCHITECTURAL HEADER */}
        <div className="mb-40 flex flex-col md:flex-row md:items-start justify-between">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="h-[1px] w-24 bg-gradient-to-r from-blue-600 to-transparent" />
              <span className="text-[11px] font-mono text-blue-500/80 uppercase tracking-[0.6em]">Titan Masterclass</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-[11rem] font-medium text-white tracking-tighter leading-[0.75]"
            >
              Elite <br />
              <span className="text-white/10 font-light italic">Orchestration.</span>
            </motion.h2>
          </div>
        </div>

        {/* 2. THE BESPOKE CANVAS (Asymmetric Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 auto-rows-[460px]">
          
          {/* THE VANGUARD: Wi-Fi 7 (Dominant Hero) */}
          <BespokeTile className="md:col-span-8 p-0 flex items-end">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4s] ease-out"
              alt="Advanced Silicon"
            />
            <div className="relative z-10 p-20 bg-gradient-to-t from-black via-black/90 to-transparent w-full">
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-8">Vanguard Network</span>
              <h3 className="text-6xl text-white mb-8 tracking-tighter">Wi-Fi 7 Extreme</h3>
              <p className="text-white/40 text-xl max-w-2xl leading-relaxed font-light">
                Redefining the speed of thought. With 5.8 Gbps throughput, your cloud-gaming environments and 4K asset streams resolve instantly.
              </p>
            </div>
          </BespokeTile>

          {/* THE CINEMATOGRAPHER: Thunderbolt (Vertical Pillar) */}
          <BespokeTile className="md:col-span-4 p-20 flex flex-col justify-between border-purple-500/5 hover:border-purple-500/20 transition-all">
            <div>
              <span className="text-purple-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-8">Creative I/O</span>
              <h3 className="text-5xl text-white mb-6 tracking-tighter">Pro <br/>Lanes</h3>
            </div>
            {/* Visual: Kinetic Port Shimmer */}
            <div className="relative h-32 w-full flex items-center justify-center">
               <div className="absolute inset-0 bg-purple-600/5 blur-[100px] rounded-full group-hover:bg-purple-600/15 transition-colors duration-1000" />
               <div className="flex gap-6">
                  <div className="w-[1px] h-20 bg-white/5 rounded-full group-hover:bg-purple-500 transition-all duration-700" />
                  <div className="w-[1px] h-20 bg-white/5 rounded-full group-hover:bg-purple-500 transition-all duration-700 delay-150" />
               </div>
            </div>
            <p className="text-white/20 text-sm font-light leading-relaxed">
              Dual 40Gbps channels. Support for two 8K cinema displays or a full studio RAID array.
            </p>
          </BespokeTile>

          {/* THE ARCHITECT: Battery (Vertical Pillar) */}
          <BespokeTile className="md:col-span-4 p-20 flex flex-col justify-between border-emerald-500/5 hover:border-emerald-500/20 transition-all">
            <div className="relative z-10">
              <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-8">Endurance</span>
              <h3 className="text-5xl text-white mb-6 tracking-tighter">16-Hour <br/>Unplugged</h3>
            </div>
            {/* Liquid Silicon Battery Visual */}
            <div className="h-56 w-full bg-white/[0.02] rounded-[3rem] border border-white/5 p-3 overflow-hidden relative">
               <motion.div 
                 initial={{ height: "10%" }}
                 whileInView={{ height: "100%" }}
                 transition={{ duration: 3.5, ease: [0.19, 1, 0.22, 1] }}
                 className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600/30 to-emerald-400/5"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-500/20 font-mono text-[11px] tracking-[0.5em] uppercase">Titan Power Cell</span>
               </div>
            </div>
          </BespokeTile>

          {/* THE TITAN: Military Grade (Wide Hero) */}
          <BespokeTile className="md:col-span-8 p-0 flex items-center">
             <img 
              src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-all duration-[5s]"
              alt="Industrial Texture"
            />
            <div className="relative z-10 p-20 max-w-3xl">
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-8">MIL-STD 810H</span>
              <h3 className="text-6xl text-white mb-8 tracking-tighter leading-none">Titanium Build <br/><span className="text-white/10 italic">Indestructible Spirit.</span></h3>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                Rigorously tested against thermal shock, altitude, and vibration. Forged to sustain peak operation in the world’s most demanding environments.
              </p>
            </div>
          </BespokeTile>

        </div>

        {/* 3. BESPOKE CERTIFICATION BAR */}
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-wrap justify-between gap-16 opacity-10 hover:opacity-100 transition-opacity duration-1000">
           {['Harman Kardon Audio', 'Dolby Atmos®', 'AiSense Camera', 'VESA DisplayHDR™'].map((cert, i) => (
             <span key={i} className="text-[12px] font-mono text-white tracking-[0.8em] uppercase">{cert}</span>
           ))}
        </div>

      </div>
    </section>
  )
}