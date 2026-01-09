'use client'

import { motion } from 'framer-motion'

/**
 * THE TITAN SIGNATURE (ELITE FOOTER)
 * Reimagined as a bespoke professional dashboard with persona-based navigation
 * for Gaming, Studio Editing, and Executive Office ecosystems.
 */

const footerLinks = [
  {
    title: 'The Vanguard', // Gaming Persona
    links: ['Victus Extreme 16', 'Performance Tuning', 'DirectStorage Hub', 'Titan Accessories'],
    accent: 'group-hover:text-blue-400'
  },
  {
    title: 'The Studio', // Editing Persona
    links: ['Lumina OLED Tech', 'Calman Verified', 'ProArt Creator Hub', 'Software Suite'],
    accent: 'group-hover:text-purple-400'
  },
  {
    title: 'The Architect', // Office Persona
    links: ['Enterprise Security', 'AI Productivity', 'Sustainability Report', 'Investor Relations'],
    accent: 'group-hover:text-emerald-400'
  },
  {
    title: 'Concierge', // Support Persona
    links: ['Product Registration', 'Titan Priority Support', 'Service Centers', 'Contact Us'],
    accent: 'group-hover:text-white'
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#020203] pt-32 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* 1. CINEMATIC LIGHT ANCHOR */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container-wide px-8 relative z-10">
        
        {/* 2. MASTER BRANDING SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          
          <div className="lg:col-span-4">
            <motion.a 
              href="#" 
              whileHover={{ opacity: 0.7 }}
              className="text-white text-3xl font-bold tracking-[0.4em] uppercase mb-8 inline-block"
            >
              HP <span className="text-white/20 font-light">Titan</span>
            </motion.a>
            <p className="text-editorial text-white/30 text-sm max-w-xs leading-relaxed font-light mb-10">
              In Search of Incredible. Engineering the absolute pinnacle of professional mobile computing for those who define the future.
            </p>
            
            {/* High-Fidelity Social Signature */}
            <div className="flex gap-8">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.a 
                  key={social} 
                  href="#" 
                  whileHover={{ y: -3, color: '#fff' }}
                  className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 3. ARCHITECTURAL LINKS GRID */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerLinks.map((section, i) => (
              <div key={i} className="group">
                <h4 className="text-white font-medium mb-8 text-[11px] uppercase tracking-[0.3em] opacity-80">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className={`text-white/30 hover:text-white text-xs font-light transition-all duration-300 block ${section.accent}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PREMIUM UTILITY BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">Titan Protocol v1.02</span>
            <div className="w-[1px] h-3 bg-white/10" />
            <span className="text-[9px] font-mono text-white/60 uppercase tracking-[0.3em]">Global / English</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {['Privacy', 'Terms', 'Legal'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white/20 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-white/10 text-[10px] font-mono uppercase tracking-widest">
            © {currentYear} HP Computer Inc.
          </div>
        </div>

      </div>

      {/* 5. TITAN BACKGROUND WATERMARK */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[30vw] font-bold text-white/[0.015] tracking-tighter pointer-events-none select-none">
        TITAN
      </div>
    </footer>
  )
}