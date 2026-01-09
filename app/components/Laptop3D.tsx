'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'
import { MotionValue } from 'framer-motion'

// Interface for the props passed from HeroSection
interface Laptop3DProps {
  scrollProgress: MotionValue<number>
}

function LaptopModel({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Group>(null)

  // -- MATERIAL SYSTEM (Titanium & Glass) --
  
  // 1. Titanium Body (Satin finish, dark grey)
  const titaniumMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1b1b1f',      // Dark Obsidian/Titanium
    metalness: 0.8,        // High metal
    roughness: 0.25,       // Satin finish (not mirror, not matte)
    envMapIntensity: 1.2,
  }), [])

  // 2. High-Gloss Glass (Screen & Trackpad)
  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#000000',
    metalness: 0.1,
    roughness: 0.05,       // Very smooth
    clearcoat: 1.0,        // Extra glossy layer
    clearcoatRoughness: 0,
    reflectivity: 1.0,
  }), [])

  // 3. Deep Black Keys (Matte contrast)
  const keyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#050505',
    roughness: 0.7,
    metalness: 0.2,
  }), [])

  // 4. OLED Display Emission (The glowing screen)
  const screenLightMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#000000', // Off state
  }), [])

  // -- ANIMATION LOOP --
  useFrame((state) => {
    // Get current scroll value (0 to 1)
    const scroll = scrollProgress.get()
    
    const t = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      // Passive Floating (Breathing motion)
      groupRef.current.rotation.z = Math.sin(t / 2) * 0.03
      
      // Scroll Interaction:
      // Tilt the whole laptop forward as user scrolls to show the keyboard deck
      // Lerp from 0.2 (tilted back) to 0.5 (tilted forward)
      const targetTilt = THREE.MathUtils.lerp(0.2, 0.6, scroll)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetTilt, 0.1)
      
      // Rotate slightly based on mouse/time
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.sin(t / 4) * 0.15, 0.1)
    }

    if (screenRef.current) {
      // Screen Opening Physics
      // Opens from -1.6 rad (closed) to -0.3 rad (open viewing angle)
      // It opens FAST initially then slows down (ease out)
      const openAngle = THREE.MathUtils.lerp(-1.6, -0.3, Math.min(scroll * 1.5 + 0.2, 1))
      screenRef.current.rotation.x = THREE.MathUtils.lerp(screenRef.current.rotation.x, openAngle, 0.08)
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0.2, 0, 0]}>
      
      {/* -- CHASSIS (Bottom Case) -- */}
      <mesh material={titaniumMaterial} castShadow receiveShadow>
        <boxGeometry args={[3.4, 0.15, 2.3]} /> {/* Slightly wider/thinner for premium look */}
      </mesh>

      {/* Trackpad (Glass Insert) */}
      <mesh position={[0, 0.076, 0.7]} material={glassMaterial}>
        <planeGeometry args={[1.4, 0.8]} />
      </mesh>

      {/* Keyboard Well (Indent) */}
      <mesh position={[0, 0.076, -0.2]} material={keyMaterial}>
        <planeGeometry args={[2.9, 1.15]} />
      </mesh>

      {/* Side Ports (Detailing) */}
      <mesh position={[-1.71, 0, -0.5]} material={new THREE.MeshStandardMaterial({ color: '#000' })}>
         <boxGeometry args={[0.02, 0.06, 0.4]} />
      </mesh>
      <mesh position={[1.71, 0, -0.5]} material={new THREE.MeshStandardMaterial({ color: '#000' })}>
         <boxGeometry args={[0.02, 0.06, 0.4]} />
      </mesh>

      {/* -- LID ASSEMBLY -- */}
      {/* Pivot point at the back edge */}
      <group ref={screenRef} position={[0, 0.07, -1.15]}>
        
        {/* Lid Casing (Titanium) */}
        <mesh position={[0, 1.15, -0.04]} material={titaniumMaterial} castShadow>
          <boxGeometry args={[3.4, 2.3, 0.08]} />
        </mesh>

        {/* Screen Glass (Front) */}
        <mesh position={[0, 1.15, 0.005]} material={glassMaterial}>
          <boxGeometry args={[3.35, 2.25, 0.01]} />
        </mesh>

        {/* OLED Panel (The Display Area) */}
        <mesh position={[0, 1.15, 0.006]}>
          <planeGeometry args={[3.2, 2.1]} />
          {/* Subtle reflection shader instead of a static image for now */}
          <meshPhysicalMaterial 
            color="#050505"
            metalness={0.9}
            roughness={0.1}
            emissive="#101015" // Very faint glow to imply it's "On" but black
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Logo (HP Monogram) on back of lid */}
        <mesh position={[0.8, 1.6, -0.081]} rotation={[0, Math.PI, 0]}>
           {/* Simple geometric shape for logo */}
           <planeGeometry args={[0.3, 0.3]} />
           <meshBasicMaterial color="#333" />
        </mesh>

      </group>

    </group>
  )
}

export default function Laptop3D({ scrollProgress }: Laptop3DProps) {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        dpr={[1, 2]} // Handle High-DPI screens
        camera={{ position: [0, 0, 7.5], fov: 30 }} // Narrow FOV for cinematic look
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        {/* -- STUDIO LIGHTING RIG -- */}
        
        {/* 1. Ambient Fill (Deep Blue) - Simulates screen glow / environment */}
        <ambientLight intensity={0.5} color="#1a237e" />
        
        {/* 2. Key Light (Top Left) - Soft shadows */}
        <spotLight 
          position={[10, 15, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={2} 
          castShadow 
          shadow-mapSize={1024}
          color="#ffffff"
        />

        {/* 3. Rim Light (Back) - The "Hero" Light */}
        {/* This creates the premium white outline on the dark metal */}
        <spotLight 
          position={[0, 5, -10]} 
          intensity={8} 
          color="#ffffff" 
          angle={0.6}
          penumbra={0.5}
        />

        {/* 4. Cool Fill (Bottom Right) */}
        <pointLight position={[5, -5, 5]} intensity={1} color="#2997ff" />

        {/* -- ENVIRONMENT -- */}
        {/* City preset gives nice complex reflections on the glass/metal */}
        <Environment preset="city" blur={0.8} />

        {/* -- SCENE CONTENT -- */}
        <Float 
          speed={2} // Animation speed
          rotationIntensity={0.2} // How much it rotates
          floatIntensity={0.4} // How high it floats
        >
          <LaptopModel scrollProgress={scrollProgress} />
        </Float>

        {/* -- FLOOR SHADOW -- */}
        <ContactShadows 
          position={[0, -1.8, 0]} 
          opacity={0.6} 
          scale={25} 
          blur={2.5} 
          far={5}
          color="#000000" 
        />

      </Canvas>
    </div>
  )
}