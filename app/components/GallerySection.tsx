'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useState } from 'react'

/**
 * TITAN APERTURE - KINETIC INTERFACE EDITION
 * Features: Mouse-reactive tilt, scroll-shimmer typography, 
 * and focal depth transitions for a bespoke interactive feel.
 */

const GalleryFeature = ({ 
  title, subtitle, description, image, reverse = false, accent = "blue", index 
}: { 
  title: string, subtitle: string, description: string, image: string, 
  reverse?: boolean, accent?: "blue" | "purple" | "emerald", index: number 
}) => {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // 1. SCROLL PHYSICS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const imageY = useTransform(smoothProgress, [0, 1], [-60, 60])
  const textScale = useTransform(smoothProgress, [0.3, 0.5], [0.8, 1])
  const textOpacity = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0])

  // 2. MOUSE INTERACTION PHYSICS
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]))
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]))

  const accents = {
    blue: { text: "text-blue-500", glow: "bg-blue-500/20", line: "bg-blue-500" },
    purple: { text: "text-purple-500", glow: "bg-purple-500/20", line: "bg-purple-500" },
    emerald: { text: "text-emerald-500", glow: "bg-emerald-500/20", line: "bg-emerald-500" }
  }

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity: textOpacity }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20 mb-72 w-full relative`}
    >
      {/* KINETIC IMAGE ASSET */}
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); mouseX.set(0); mouseY.set(0); }}
        style={{ rotateX: tiltX, rotateY: tiltY, perspective: 1000 }}
        className="relative w-full md:w-3/5 group cursor-none"
      >
        <div className={`absolute -inset-10 ${accents[accent].glow} blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
        
        <div className="relative overflow-hidden rounded-[3rem] bg-[#050505] border border-white/5 shadow-2xl">
          <motion.img 
            style={{ y: imageY, scale: 1.2 }}
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          {/* INTERACTIVE SCANLINE FOLLOWER */}
          <motion.div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 w-full"
            animate={{ top: isHovered ? ["-20%", "120%"] : "-20%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>

        {/* CUSTOM CURSOR FOLLOWER */}
        <motion.div 
          className={`fixed top-0 left-0 w-4 h-4 rounded-full ${accents[accent].line} mix-blend-difference pointer-events-none z-50`}
          style={{ x: useSpring(mouseX), y: useSpring(mouseY), opacity: isHovered ? 1 : 0 }}
        />
      </motion.div>

      {/* REACTIVE CONTENT BLOCK */}
      <motion.div style={{ scale: textScale }} className="w-full md:w-2/5 text-left space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
             <motion.div 
               animate={{ width: isHovered ? 80 : 40 }} 
               className={`h-[1px] ${accents[accent].line}`} 
             />
             <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.6em] ${accents[accent].text}`}>
               Protocol // 0{index + 1}
             </span>
          </div>

          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] transition-all duration-700">
            {title.split(', ').map((word, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-white/10 group-hover:text-white/30' : ''}`}>
                {word}
              </span>
            ))}
          </h3>

          <p className="text-white/30 text-lg leading-relaxed font-light max-w-sm">
            {description}
          </p>

          <motion.button 
            whileHover={{ x: 10 }}
            className={`flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest ${accents[accent].text}`}
          >
            <span>Explore Specification</span>
            <div className={`w-8 h-[1px] ${accents[accent].line}`} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-64 bg-black overflow-hidden">
      {/* INTERACTIVE BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[180px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <GalleryFeature 
          index={0}
          subtitle="Input Architecture"
          title="Built for, Gaming"
          description="A stunning RGB per-key tactile layout. Optimized for high-speed response and extreme durability."
          image="/gallery/img6.png"
          accent="blue"
        />

        <GalleryFeature 
          index={1}
          subtitle="Sonic Immersion"
          title="Game-Changing, Sound"
          description="Advanced spatial audio turns every frequency into a competitive advantage. Powered by HyperX engineering."
          image="/gallery/img5.png"
          reverse={true}
          accent="purple"
        />

        <GalleryFeature 
          index={2}
          subtitle="Systems Architecture"
          title="Compete, & Connect"
          description="Equipped with Wi-Fi 7 Extreme and Dual Thunderbolt™ 4 lanes for absolute data mastery."
          image="/gallery/img3.jpg"
          accent="emerald"
        />
      </div>
    </section>
  )
}