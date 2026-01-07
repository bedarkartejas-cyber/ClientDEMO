'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const models = [
  {
    name: 'ZenBook 14 OLED',
    tagline: 'The Essential Classic',
    processor: 'Intel® Core™ Ultra 5',
    ram: '16GB LPDDR5X',
    storage: '1TB NVMe SSD',
    gpu: 'Intel® Arc™ Graphics',
    display: '14” 3K 120Hz',
    price: '₹96,990',
    mrp: '₹1,09,990',
    emi: '₹4,650/mo',
    highlight: false,
    delay: 0
  },
  {
    name: 'ZenBook Pro 14',
    tagline: 'The Creator Standard',
    processor: 'Intel® Core™ Ultra 7',
    ram: '32GB LPDDR5X',
    storage: '1TB NVMe SSD',
    gpu: 'NVIDIA® RTX 4050',
    display: '14.5” 2.8K 120Hz',
    price: '₹1,44,990',
    mrp: '₹1,69,990',
    emi: '₹6,900/mo',
    highlight: true, // The Hero Product
    delay: 0.1
  },
  {
    name: 'ZenBook Pro 16X',
    tagline: 'Desktop Replacement',
    processor: 'Intel® Core™ i9-13900H',
    ram: '64GB LPDDR5X',
    storage: '2TB NVMe SSD',
    gpu: 'NVIDIA® RTX 4070',
    display: '16” 4K OLED Touch',
    price: '₹2,19,990',
    mrp: '₹2,49,990',
    emi: '₹10,500/mo',
    highlight: false,
    delay: 0.2
  },
]

export default function CTASection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="buy" className="relative py-32 bg-black overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-radial from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container-fluid max-w-7xl mx-auto px-6 relative z-10">
        
        {/* -- HEADER -- */}
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="headline-cinema text-5xl md:text-7xl mb-6"
          >
            Your Studio Awaits.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-editorial text-white/50 max-w-xl mx-auto"
          >
            Choose your configuration. Includes 1-Year Accidental Damage Protection.
          </motion.p>
        </div>

        {/* -- BANK OFFER STRIP (The "Golden Ticket") -- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <div className="relative bg-[#08080a] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" style={{ backgroundSize: '200% 100%' }} />
              
              {/* Left: Logos */}
              <div className="flex items-center gap-6 z-10">
                 <div className="flex -space-x-4">
                    {/* HDFC */}
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-[#08080a] shadow-lg">
                       <span className="text-[10px] font-bold text-[#004c8f] tracking-tighter">HDFC</span>
                    </div>
                    {/* SBI */}
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-[#08080a] shadow-lg">
                       <span className="text-[10px] font-bold text-[#280071] tracking-tighter">SBI</span>
                    </div>
                    {/* AXIS */}
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-[#08080a] shadow-lg">
                       <span className="text-[10px] font-bold text-[#861f41] tracking-tighter">AXIS</span>
                    </div>
                 </div>
                 <div>
                    <div className="flex items-center gap-2">
                       <h4 className="text-white font-medium text-lg">Instant ₹5,000 Off</h4>
                       <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Limited Time</span>
                    </div>
                    <p className="text-white/40 text-xs">On all Credit & Debit Card EMI transactions.</p>
                 </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-12 bg-white/10" />

              {/* Right: EMI */}
              <div className="text-center md:text-right z-10">
                 <div className="text-white font-medium text-lg">No Cost EMI</div>
                 <p className="text-white/40 text-xs">Zero interest up to 12 months.</p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* -- PRICING CARDS -- */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: model.delay }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 group ${
                model.highlight 
                  ? 'bg-[#0f0f12] border-blue-500/30 scale-105 shadow-[0_0_60px_rgba(37,99,235,0.15)] z-20' 
                  : 'bg-transparent border-white/10 hover:bg-[#0a0a0c] hover:border-white/20'
              }`}
            >
              {/* Highlight Badge */}
              {model.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/20 ring-4 ring-black">
                  Recommended
                </div>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                
                {/* Title */}
                <h3 className={`text-xl font-medium mb-1 transition-colors ${model.highlight ? 'text-white' : 'text-white/80'}`}>
                  {model.name}
                </h3>
                <p className="text-white/40 text-xs mb-8">{model.tagline}</p>

                {/* Specs Grid */}
                <div className="space-y-4 mb-10">
                  {[
                    { label: 'Processor', val: model.processor },
                    { label: 'Graphics', val: model.gpu },
                    { label: 'Memory', val: model.ram },
                    { label: 'Storage', val: model.storage },
                    { label: 'Display', val: model.display },
                  ].map((spec, s) => (
                    <div key={s} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                       <span className="text-white/40">{spec.label}</span>
                       <span className="text-white/80 font-medium text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Price Area */}
                <div className="mb-8">
                   <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-white tracking-tight">{model.price}</span>
                      <span className="text-sm text-white/30 line-through decoration-white/20">{model.mrp}</span>
                   </div>
                   <div className="flex items-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-blue-400 text-xs font-medium">EMI from {model.emi}</span>
                   </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  model.highlight
                    ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-white border border-white/5 hover:bg-white/10'
                }`}>
                  Buy Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              
              </div>
            </motion.div>
          ))}
        </div>

        {/* -- TRUST FOOTER -- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-32 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-60"
        >
           {[
             { label: 'Free Shipping', sub: 'On all orders' },
             { label: 'Secure Payment', sub: '256-bit SSL Encrypted' },
             { label: 'Official Warranty', sub: '2 Years Global' },
             { label: 'Easy Returns', sub: '7 Days Replacement' },
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center">
                <span className="text-white font-medium text-sm mb-1">{item.label}</span>
                <span className="text-white/40 text-xs">{item.sub}</span>
             </div>
           ))}
        </motion.div>

      </div>
    </section>
  )
}