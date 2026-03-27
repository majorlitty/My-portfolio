'use client';

import { motion } from 'motion/react';
import { Clock, MessageSquare, Award } from 'lucide-react';

const reasons = [
  {
    title: 'Fast Turnaround',
    description: 'We respect your time. Get your website launched quickly without sacrificing quality.',
    icon: Clock,
  },
  {
    title: 'Easy Communication',
    description: 'No jargon, no confusing emails. We keep you in the loop every step of the way.',
    icon: MessageSquare,
  },
  {
    title: 'Top-Notch Quality',
    description: 'Premium designs that not only look stunning but are built to convert visitors into customers.',
    icon: Award,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
            Why work with us
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Our expertise, creativity, and commitment to your success set us apart. Let us bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-10 rounded-3xl border border-subtle/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-subtle/50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                {reason.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
