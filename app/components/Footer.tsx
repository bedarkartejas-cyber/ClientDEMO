'use client'

import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: 'Shop and Learn',
    links: ['ZVictus 16', 'Victus S', 'VivoBook', 'ProArt Studiobook', 'Accessories']
  },
  {
    title: 'Features',
    links: ['OLED Display', 'ProArt Creator Hub', 'ScreenPad™', 'MyHP', 'Software']
  },
  {
    title: 'Support',
    links: ['Product Registration', 'Driver Downloads', 'Service Centers', 'Warranty', 'Contact Us']
  },
  {
    title: 'About HP',
    links: ['About Us', 'News & Awards', 'Investor Relations', 'Employment', 'Sustainability']
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-20 pb-10">
      <div className="container-wide px-6">
        
        {/* -- MAIN LINKS GRID -- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="text-white text-xl font-bold tracking-widest uppercase mb-6 inline-block">
              HP
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              In Search of Incredible.<br />
              Innovation that revolves around you.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-full" /> {/* Placeholder Icon */}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-medium mb-6 text-sm">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-white/40 hover:text-white text-xs transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* -- BOTTOM BAR -- */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-xs">
            © 2026 HP Computer Inc. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Use Notice', 'Legal Info', 'Global / English'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white/30 hover:text-white text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}