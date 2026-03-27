'use client';

import { motion } from 'motion/react';
import { Hammer, HeartPulse, Briefcase, Wrench } from 'lucide-react';

const industries = [
  {
    title: 'Trades',
    description: 'Plumbers, electricians, builders, and contractors.',
    icon: Hammer,
  },
  {
    title: 'Clinics & Health',
    description: 'Chiropractors, dentists, massage therapists, and wellness centers.',
    icon: HeartPulse,
  },
  {
    title: 'Professional Services',
    description: 'Lawyers, accountants, business coaches, and consultants.',
    icon: Briefcase,
  },
  {
    title: 'Local Services',
    description: 'Cleaning, landscaping, maintenance, auto-detailing, and mechanics.',
    icon: Wrench,
  },
];

export function WhoWeBuildFor() {
  return (
    <section className="py-24 bg-subtle/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary">
            We build websites for
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl border border-subtle/50 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {industry.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
