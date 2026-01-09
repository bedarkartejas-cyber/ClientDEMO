'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

/**
 * TITAN COMPARISON MATRIX
 * A high-fidelity data grid comparing the three core professional personas.
 * Features: Architectural borders, micro-glows, and surgical typography.
 */

const specifications = [
  { feature: 'Processor', vanguard: 'Core i9 HX (14th Gen)', cinema: 'Core i9 (Ultra Series)', architect: 'Core i7 (vPro Elite)' },
  { feature: 'GPU Power', vanguard: 'RTX 4090 (175W TGP)', cinema: 'RTX 4080 (Studio)', architect: 'RTX 4070 (Efficiency)' },
  { feature: 'Display', vanguard: '120Hz Lumina OLED', cinema: '10-Bit ProArt Calibrated', architect: 'EyeCare Matte 4K' },
  { feature: 'Thermal', vanguard: 'Active Vapor Chamber', cinema: 'Silent Fan Profile', architect: 'Passive Carbon Cooling' },
  { feature: 'Network', vanguard: 'Wi-Fi 7 + 2.5G Eth', cinema: 'Wi-Fi 7 + Dual TB4', architect: 'Wi-Fi 7 + 5G LTE' },
]

export default function CompareSection() {
  return (
    <section id="compare" className="relative py-48 bg-[#020203] overflow-hidden">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-blue-500/50" />
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.6em]">Matrix // Comparison</span>
            <div className="h-[1px] w-12 bg-blue-500/50" />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Choose Your <br />
            <span className="text-white/10 italic font-light">Titan.</span>
          </h2>
        </div>

        {/* COMPARISON GRID */}
        <div className="relative overflow-x-auto lg:overflow-visible">
          <div className="min-w-[800px] grid grid-cols-4 gap-4">
            
            {/* COLUMN HEADERS */}
            <div className="p-8" /> {/* Empty corner */}
            
            <div className="p-8 rounded-t-[2rem] border-t border-x border-white/10 bg-white/[0.02] text-center">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-4">The Vanguard</span>
              <h4 className="text-white text-xl font-bold uppercase tracking-tighter">Elite Gaming</h4>
            </div>

            <div className="p-8 rounded-t-[2rem] border-t border-x border-white/10 bg-white/[0.02] text-center shadow-[0_-20px_50px_rgba(168,85,247,0.05)]">
              <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest block mb-4">The Cinema</span>
              <h4 className="text-white text-xl font-bold uppercase tracking-tighter">Studio Pro</h4>
            </div>

            <div className="p-8 rounded-t-[2rem] border-t border-x border-white/10 bg-white/[0.02] text-center">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-4">The Architect</span>
              <h4 className="text-white text-xl font-bold uppercase tracking-tighter">Enterprise</h4>
            </div>

            {/* DATA ROWS */}
            {specifications.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="contents group"
              >
                {/* Feature Name */}
                <div className="p-8 flex items-center border-b border-white/5">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">{spec.feature}</span>
                </div>

                {/* Vanguard Value */}
                <div className="p-8 bg-white/[0.01] border-x border-b border-white/5 flex items-center justify-center text-center">
                  <span className="text-white/60 text-sm font-light">{spec.vanguard}</span>
                </div>

                {/* Cinema Value (Highlight) */}
                <div className="p-8 bg-white/[0.03] border-x border-b border-white/10 flex items-center justify-center text-center group-hover:bg-purple-500/5 transition-colors">
                  <span className="text-white text-sm font-medium">{spec.cinema}</span>
                </div>

                {/* Architect Value */}
                <div className="p-8 bg-white/[0.01] border-x border-b border-white/5 flex items-center justify-center text-center">
                  <span className="text-white/60 text-sm font-light">{spec.architect}</span>
                </div>
              </motion.div>
            ))}

            {/* ACTION FOOTER */}
            <div className="p-8" />
            <div className="p-8 bg-white/[0.02] rounded-b-[2rem] border-x border-b border-white/10 flex justify-center">
              <button className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em] hover:text-blue-400 transition-colors">Configure Vanguard</button>
            </div>
            <div className="p-8 bg-white/[0.03] rounded-b-[2rem] border-x border-b border-white/10 flex justify-center">
              <button className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em] hover:text-purple-400 transition-colors">Configure Cinema</button>
            </div>
            <div className="p-8 bg-white/[0.02] rounded-b-[2rem] border-x border-b border-white/10 flex justify-center">
              <button className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em] hover:text-emerald-400 transition-colors">Configure Architect</button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}