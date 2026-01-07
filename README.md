# ASUS ZenBook Showcase - Apple-Style Product Page

A premium, production-ready product showcase website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Canvas-based Image Sequence Animation**
- 60 procedurally generated frames showing laptop rotation, opening, and screen glow
- Scroll-controlled animation for smooth storytelling
- No external images needed - everything generated with Canvas API

🎯 **Scroll-Triggered Animations**
- Sticky performance section with sequential spec reveals
- Parallax effects on display section
- Staggered grid animations with Framer Motion

🎨 **Premium Design**
- Dark theme with cyan accents (#00d9ff)
- Distinctive typography (Crimson Pro + Outfit)
- 3D tilt effect on CTA card
- Smooth 60fps animations

📱 **Fully Responsive**
- Desktop-first design
- Optimized for tablets and mobile
- Touch-friendly interactions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Crimson Pro, Outfit)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd asus-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
asus-showcase/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx          # Fixed navigation with smooth scroll
│   │   ├── HeroCanvas.tsx          # Canvas image sequence animation
│   │   ├── PerformanceSection.tsx  # Sticky scroll with spec reveals
│   │   ├── DisplaySection.tsx      # Parallax section with OLED visual
│   │   ├── FeaturesGrid.tsx        # Staggered grid animation
│   │   ├── CTASection.tsx          # 3D tilt card effect
│   │   └── Footer.tsx              # Footer component
│   ├── layout.tsx                  # Root layout with fonts
│   ├── page.tsx                    # Main page
│   └── globals.css                 # Global styles
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## Key Features Explained

### 1. Hero Canvas Animation
- Generates 60 frames of laptop animation programmatically
- Maps scroll position (0-400vh) to frame index
- Phases: rotation (0-20), opening (20-40), glow (40-60)
- Uses `requestAnimationFrame` for smooth 60fps rendering

### 2. Performance Section
- Sticky container with 300vh scroll height
- Three specs appear sequentially using Framer Motion transforms
- Each spec fades in at different scroll depths (33%, 66%, 100%)

### 3. Display Section
- Parallax effect using Framer Motion's `useTransform`
- Canvas-generated OLED display with radial gradients
- Right column moves at 0.5x scroll speed

### 4. Features Grid
- Staggered fade-in using Framer Motion's `staggerChildren`
- Hover effects with scale transform
- 3x2 responsive grid layout

### 5. CTA Section
- 3D tilt effect tracking mouse position
- Calculates `rotateX` and `rotateY` based on cursor
- Smooth transitions with perspective transform

## Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#00d9ff',  // Change accent color
  primary: '#000000', // Background color
}
```

### Fonts
Edit `app/layout.tsx` to change Google Fonts

### Animation Timing
Adjust in component files:
- Scroll ranges in `useTransform()`
- Stagger delays in variants
- Transition durations

## Performance Optimization

- Pre-generates all canvas frames on mount
- Uses `requestAnimationFrame` for scroll updates
- Lazy viewport detection with Intersection Observer
- Optimized Tailwind CSS (purged unused styles)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a demonstration project. ASUS and ZenBook are trademarks of ASUSTeK Computer Inc.

## Credits

Inspired by Apple's product pages and built with modern web technologies.
