'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-subtle/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-primary">
          Agency<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#works" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Works
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Why Us
          </Link>
        </nav>

        <button className="bg-primary text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
          Schedule a free call
        </button>
      </div>
    </motion.header>
  );
}
