'use client';

import { motion, useMotionValue, useSpring, useTransform, MotionValue, useScroll } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';

const mockups = [
  { id: 1, src: 'https://i.postimg.cc/prKqgVs6/screencapture_brooklynlookin_netlify_app_2026_03_27_21_36_08hero.png', rotate: -12, yClass: 'translate-y-12 sm:translate-y-16 md:translate-y-24', z: 10, depth: 3 },
  { id: 2, src: 'https://i.postimg.cc/QtK3K5MQ/screencapture_arlingtonrentals_netlify_app_2026_03_27_21_45_47hero.png', rotate: -6, yClass: 'translate-y-4 sm:translate-y-6 md:translate-y-8', z: 20, depth: 2, pill: { text: 'designer ↗', color: 'bg-blue-500', position: '-top-4 -left-4 md:-top-6 md:-left-6' } },
  { id: 3, src: 'https://i.postimg.cc/bJShSbvD/screencapture_cosmo_dent_netlify_app_2026_03_27_21_43_28hero.png', rotate: 0, yClass: '-translate-y-2 sm:-translate-y-4 md:-translate-y-8', z: 30, depth: 1 },
  { id: 4, src: 'https://i.postimg.cc/zBHrHWfX/screencapture_dispenroute_netlify_app_2026_03_27_21_44_54hero.png', rotate: 6, yClass: 'translate-y-4 sm:translate-y-6 md:translate-y-8', z: 20, depth: 2 },
  { id: 5, src: 'https://i.postimg.cc/43SG3wX4/screencapture_venicedetailing_netlify_app_2026_03_27_21_50_31hero.png', rotate: 12, yClass: 'translate-y-12 sm:translate-y-16 md:translate-y-24', z: 10, depth: 3, pill: { text: 'artist ↗', color: 'bg-orange-500', position: '-top-4 -right-4 md:-top-6 md:-right-6' } },
];

function MockupCard({ 
  mockup, 
  springX, 
  springY, 
  scrollY,
  isHovered,
  onHoverStart,
  onHoverEnd
}: { 
  mockup: typeof mockups[0], 
  springX: MotionValue<number>, 
  springY: MotionValue<number>, 
  scrollY: MotionValue<number>,
  isHovered: boolean,
  onHoverStart: () => void,
  onHoverEnd: () => void,
}) {
  const moveX = useTransform(springX, [-1, 1], [-15 * mockup.depth, 15 * mockup.depth]);
  const moveY = useTransform(springY, [-1, 1], [-15 * mockup.depth, 15 * mockup.depth]);
  
  // Scroll parallax: elements move at different speeds based on depth
  const scrollParallax = useTransform(scrollY, [0, 1000], [0, -mockup.depth * 40]);

  return (
    <div 
      className={`relative flex-shrink-0 ${mockup.yClass}`}
      style={{ zIndex: isHovered ? 50 : mockup.z }}
    >
      <motion.div style={{ y: scrollParallax }}>
        <motion.div
          style={{ x: moveX, y: moveY }}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        >
          <motion.div
            style={{ rotate: mockup.rotate }}
            className="relative w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px] aspect-[4/5] rounded-xl md:rounded-2xl shadow-2xl border border-subtle/50 bg-background transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl">
              <Image src={mockup.src} fill className="object-cover" alt="Mockup" />
            </div>
            {mockup.pill && (
              <div className={`absolute ${mockup.pill.position} px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-bold shadow-xl z-50 ${mockup.pill.color} whitespace-nowrap`}>
                {mockup.pill.text}
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      className="relative pt-40 pb-32 overflow-hidden" 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary max-w-5xl leading-[1.1]"
        >
          We build high-converting websites for local and service businesses
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg md:text-xl text-secondary max-w-3xl leading-relaxed"
        >
          Designed to build trust, attract customers, and support your local growth - with clear upfront payments and simple ongoing maintenance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-stretch gap-4"
        >
          <button className="bg-primary text-background px-8 py-3 rounded-xl text-base font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto flex flex-col items-center justify-center">
            <span>Let&apos;s build your website now</span>
            <span className="text-xs text-background/70 font-normal mt-0.5">(No commitment or payment required)</span>
          </button>
          <button className="bg-transparent border border-subtle text-primary px-8 py-3 rounded-xl text-base font-medium hover:bg-subtle/20 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View our work
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-32 w-full relative flex justify-center items-center px-4 h-[300px] sm:h-[400px] md:h-[500px] max-w-[100vw] -space-x-16 sm:-space-x-24 md:-space-x-32 lg:-space-x-40"
        >
          {mockups.map((mockup) => (
            <MockupCard 
              key={mockup.id} 
              mockup={mockup} 
              springX={springX} 
              springY={springY} 
              scrollY={scrollY}
              isHovered={hoveredId === mockup.id}
              onHoverStart={() => setHoveredId(mockup.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
