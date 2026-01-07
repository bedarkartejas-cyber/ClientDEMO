import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import GallerySection from './components/GallerySection'
import PerformanceSection from './components/PerformanceSection'
import DisplaySection from './components/DisplaySection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="relative bg-[#050507] min-h-screen selection:bg-blue-500/30">
      
      {/* 1. Global Navigation (Sticky) */}
      <Navigation />

      {/* 2. Hero Section (Introduction) */}
      <div id="overview">
        <HeroSection />
      </div>

      {/* 3. NEW: Visual Gallery Section 
          (Make sure you have created app/components/GallerySection.tsx)
      */}
      <GallerySection />

      {/* 4. Performance Section */}
      <div id="performance">
        <PerformanceSection />
      </div>

      {/* 5. Display Section */}
      <div id="display">
        <DisplaySection />
      </div>

      {/* 6. Features Grid */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* 7. Buy Section (Bank Offers & Config) */}
      <div id="buy">
        <CTASection />
      </div>

      {/* 8. Footer */}
      <Footer />
      
    </main>
  )
}