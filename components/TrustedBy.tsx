'use client';

import { Stethoscope, Wrench, Home, Scissors, Car, Truck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const trustedProfessions = [
  { name: 'Doctors', icon: Stethoscope },
  { name: 'Mechanics', icon: Wrench },
  { name: 'Real Estate Agents', icon: Home },
  { name: 'Hair Salons', icon: Scissors },
  { name: 'Auto-Detailers', icon: Car },
  { name: 'Logistics Companies', icon: Truck },
  { name: 'Nail Salons', icon: Sparkles },
];

// Duplicate the list to create a seamless loop
const tickerItems = [...trustedProfessions, ...trustedProfessions];

export function TrustedBy() {
  return (
    <section className="py-8 border-y border-subtle/30 bg-background/50 text-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <h2 className="text-center text-sm font-medium text-secondary/70 uppercase tracking-wider">
          We are trusted by
        </h2>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-8 md:gap-12 items-center min-w-max px-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2.5 text-secondary/80 hover:text-primary transition-colors duration-300">
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base tracking-tight whitespace-nowrap">{item.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
