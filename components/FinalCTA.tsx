'use client';

import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-accent text-background text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-10 leading-[1.1]">
            Let&apos;s build a website that turns visitors into customers
          </h2>
          <button className="bg-background text-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-subtle transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            Book Your Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
