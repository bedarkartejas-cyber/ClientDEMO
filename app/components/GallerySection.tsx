'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const galleryItems = [
  {
    id: '01',
    src: '/gallery/img1.jpg',
    title: 'Monogram',
    description: 'A symbol of precision. The new geometric monogram is precision-milled into the aerospace-grade lid.',
    color: '#0a0a0c'
  },
  {
    id: '02',
    src: '/gallery/img2.jpg',
    title: 'Profile',
    description: 'Impossibly thin. At just 14.5mm, it defies the laws of performance-to-size ratios.',
    color: '#1a1a1c'
  },
  {
    id: '03',
    src: '/gallery/img3.jpg',
    title: 'Ceramic Finish',
    description: 'Plasma ceramization coating creates a stone-like texture that is warm to the touch and scratch-resistant.',
    color: '#0f0f12'
  },
  {
    id: '04',
    src: '/gallery/img4.jpg',
    title: 'Interaction',
    description: 'The ASUS Dial. Physical rotary control for Adobe Creative Cloud apps, right at your fingertips.',
    color: '#050507'
  }
]

// Sub-component for individual cards
function Card({ 
  item, 
  index, 
  progress, 
  range, 
  targetScale 
}: { 
  item: typeof galleryItems[0], 
  index: number, 
  progress: MotionValue<number>,
  range: [number, number],
  targetScale: number
}) {
  
  // -- ANIMATION LOGIC --
  // 1. Scale: The card shrinks slightly as it gets pushed to the back
  const scale = useTransform(progress, range, [1, targetScale])
  
  // 2. Opacity/Brightness: The card gets darker as it goes back
  const brightness = useTransform(progress, range, [1, 0.4])

  return (
    <div className="h-screen w-full sticky top-0 flex items-center justify-center">
      <motion.div 
        style={{ 
          scale, 
          filter: useTransform(brightness, b => `brightness(${b})`),
          backgroundColor: item.color
        }}
        className="relative w-[90vw] md:w-[1000px] h-[60vh] md:h-[700px] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl origin-top"
      >
        <div className="grid md:grid-cols-2 h-full">
          
          {/* LEFT: Text Content */}
          <div className="p-10 md:p-16 flex flex-col justify-between relative z-10">
            <div>
              <span className="text-zen-blue font-mono text-xs tracking-widest uppercase mb-4 block">
                Fig. {item.id}
              </span>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                {item.title}
              </h3>
              <p className="text-editorial text-white/60 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>

            <div className="flex items-center gap-4 opacity-30">
               <div className="h-[1px] w-full bg-white"></div>
               <span className="text-xs font-mono uppercase whitespace-nowrap">ZenBook Pro Series</span>
            </div>
          </div>

          {/* RIGHT: Image Area */}
          <div className="relative h-full w-full overflow-hidden bg-black/20">
            <motion.img 
              src={item.src} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
              // Slight parallax within the card itself
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} id="gallery" className="relative bg-canvas">
      
      {/* Title Intro */}
      <div className="h-[50vh] flex items-center justify-center sticky top-0 z-0">
         <h2 className="headline-section text-center opacity-30">
           The Art of <br />
           Performance.
         </h2>
      </div>

      <div className="relative z-10 pb-[20vh]">
        {galleryItems.map((item, i) => {
          // Calculate scale ratio: First card scales down the most, last card stays full size
          const targetScale = 1 - ( (galleryItems.length - i) * 0.05 )
          
          // Logic for when the transition happens based on scroll
          const rangeStart = i * 0.25
          const rangeEnd = 1
          
          return (
            <Card 
              key={i} 
              item={item} 
              index={i}
              progress={scrollYProgress}
              range={[rangeStart, rangeEnd]}
              targetScale={targetScale}
            />
          )
        })}
      </div>

    </section>
  )
}