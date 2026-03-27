'use client';

import { motion } from 'motion/react';
import { Layout, RefreshCw, ArrowRightLeft, Settings, Search } from 'lucide-react';

const services = [
  {
    title: 'Website Design',
    description: 'Custom, high-converting websites tailored to your brand and optimized for local search.',
    icon: Layout,
  },
  {
    title: 'Website Revamp',
    description: 'Breathe new life into your outdated website with modern design and improved user experience.',
    icon: RefreshCw,
  },
  {
    title: 'Website Migration',
    description: 'Seamlessly move your website to a new platform without losing traffic or data.',
    icon: ArrowRightLeft,
  },
  {
    title: 'Template Customization',
    description: 'Affordable, quick-launch websites using premium templates customized to your needs.',
    icon: Settings,
  },
  {
    title: 'SEO',
    description: 'Rank higher on Google and attract more local customers with our proven SEO strategies.',
    icon: Search,
  },
];

export function OurServices() {
  return (
    <section id="services" className="py-32 bg-primary text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Solutions that fit your vision
            </h2>
            <p className="text-xl text-subtle/80 max-w-md leading-relaxed">
              We offer everything you need to thrive online. Explore our services and see how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-secondary/20 border border-subtle/10 hover:bg-secondary/40 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-background transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-subtle/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
