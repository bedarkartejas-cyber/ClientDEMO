'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// --- 1. REUSABLE CARD WRAPPER (For consistent glass look) ---
const BentoCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: ReactNode, 
  className?: string,
  delay?: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500 group ${className}`}
  >
    {/* Internal Noise Texture */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    
    {/* Hover Glow Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    {children}
  </motion.div>
)

// --- 2. MICRO-INTERACTION COMPONENTS ---

const BatteryGraphic = () => (
  <div className="relative w-full">
    {/* Battery Container */}
    <div className="h-10 w-full bg-white/5 rounded-lg border border-white/10 p-1 flex items-center relative overflow-hidden">
      {/* The Liquid Charge */}
      <motion.div 
        initial={{ width: "20%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 2, ease: "circOut" }}
        className="h-full bg-gradient-to-r from-emerald-900/50 via-emerald-500/50 to-emerald-400 rounded-md relative overflow-hidden"
      >
        {/* Shimmer Effect */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
        />
      </motion.div>
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 flex justify-evenly opacity-10">
         {[1,2,3].map(i => <div key={i} className="w-[1px] h-full bg-black" />)}
      </div>
    </div>
    
    <div className="flex justify-between items-center mt-2 px-1">
       <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-widest">Rapid Charge</span>
       <span className="text-xs font-mono text-emerald-400 font-bold">75Wh</span>
    </div>
  </div>
)

const AudioVisualizer = () => (
  <div className="flex items-end justify-center gap-[3px] h-12 w-full">
    {[0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 0.4, 0.6, 0.2].map((h, i) => (
      <motion.div
        key={i}
        animate={{ height: ["20%", `${h * 100}%`, "20%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.8 + Math.random() * 0.5, 
          ease: "easeInOut",
          delay: i * 0.05 
        }}
        className="w-1.5 bg-gradient-to-t from-violet-900 to-violet-400 rounded-full opacity-80"
      />
    ))}
  </div>
)

const WifiRadar = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ 
          repeat: Infinity, 
          duration: 2.5, 
          delay: i * 0.8,
          ease: "easeOut"
        }}
        className="absolute border border-indigo-400/50 rounded-full w-full h-full"
      />
    ))}
    {/* Center Dot */}
    <div className="relative z-10 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1]" />
    <div className="absolute inset-0 bg-indigo-500/10 blur-[30px] rounded-full" />
  </div>
)

// --- 3. MAIN SECTION ---

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-[#050505]">
      
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
             <div className="h-[1px] w-8 bg-blue-500/50" />
             <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase">
               System Capabilities
             </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-medium text-white tracking-tighter"
          >
            Everything needed. <br />
            <span className="text-white/30">Nothing superfluous.</span>
          </motion.h2>
        </div>

        {/* -- BENTO GRID -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-dense auto-rows-[300px]">
          
          {/* 1. BATTERY CARD (Wide) */}
          <BentoCard className="col-span-1 md:col-span-2 p-8 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
               <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            
            <div className="relative z-10 max-w-sm">
              <h3 className="text-2xl font-medium text-white mb-2">All-Day Power</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                High-density 75Wh architecture. 
                <span className="text-emerald-400/80"> 50% charge in 30 mins.</span>
              </p>
            </div>

            <div className="relative z-10">
              <BatteryGraphic />
            </div>
            
            {/* Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/15 transition-colors" />
          </BentoCard>


          {/* 2. CONNECTIVITY CARD (Small) */}
          <BentoCard className="col-span-1 p-8 flex flex-col items-center justify-center text-center" delay={0.1}>
             <div className="mb-8">
               <WifiRadar />
             </div>
             <h3 className="text-lg font-medium text-white tracking-tight">Wi-Fi 7 Ready</h3>
             <p className="text-white/30 text-xs mt-2 font-mono">320MHz • 4K QAM</p>
          </BentoCard>


          {/* 3. AUDIO CARD (Tall) */}
          <BentoCard className="col-span-1 row-span-1 md:row-span-2 p-8 flex flex-col justify-between" delay={0.2}>
             <div>
                <h3 className="text-2xl font-medium text-white mb-2">Harman Kardon</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Precision-tuned quad speakers with Dolby Atmos® spatial rendering.
                </p>
             </div>
             
             <div className="flex-grow flex items-center justify-center py-8">
               <AudioVisualizer />
             </div>

             <div className="flex justify-end">
                <span className="text-[9px] font-mono border border-violet-500/30 text-violet-300 rounded px-2 py-1 uppercase tracking-wider">
                  Smart Amp
                </span>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-violet-500/10 blur-[80px] rounded-full" />
          </BentoCard>


          {/* 4. DURABILITY CARD (Wide) */}
          <BentoCard className="col-span-1 md:col-span-2 p-8 flex items-center justify-between" delay={0.3}>
             <div className="relative z-10 max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                   <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b]" />
                   <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">Military Grade</span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">US MIL-STD 810H</h3>
                <p className="text-white/40 text-sm">
                  Rigorously tested against shock, vibration, altitude, and extreme temperatures.
                </p>
             </div>
             
             {/* Abstract Texture */}
             <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 border-l border-white/5" />
             <div className="hidden md:block text-7xl font-bold text-white/[0.03] absolute right-8 tracking-tighter select-none">
               810H
             </div>
          </BentoCard>


          {/* 5. CAMERA CARD (Small) */}
          <BentoCard className="col-span-1 p-0" delay={0.4}>
             <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                {/* Abstract Lens */}
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30" />
                  </div>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-lg font-medium text-white">AiSense™ IR</h3>
                <p className="text-white/40 text-xs mt-1">Presence Detection</p>
             </div>
          </BentoCard>

        </div>

        {/* -- BOTTOM SPEC SHEET -- */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: 'Connectivity', val: 'Thunderbolt™ 4' },
             { label: 'Transfer', val: 'USB 3.2 Gen 2' },
             { label: 'Display Out', val: 'HDMI 2.1 TMDS' },
             { label: 'Storage', val: 'SD Express 7.0' }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="py-4 border border-white/5 rounded-xl text-center hover:border-white/10 hover:bg-white/[0.02] transition-colors cursor-default"
             >
               <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">{item.label}</div>
               <div className="text-sm font-medium text-white/80">{item.val}</div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  )
}