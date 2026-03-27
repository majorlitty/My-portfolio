'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  { id: 1, title: 'Apex Plumbing', category: 'Trades', description: 'Complete website redesign and local SEO optimization.', fullDescription: 'Apex Plumbing approached us with an outdated website that was failing to convert visitors into leads. We completely overhauled their digital presence, focusing on a mobile-first design, lightning-fast load times, and comprehensive local SEO. The result was a 150% increase in online quote requests within the first three months.', image: 'https://picsum.photos/seed/plumbing/800/600', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, title: 'Smile Dental', category: 'Health', description: 'Modern patient portal and booking system integration.', fullDescription: 'Smile Dental needed a modern, trustworthy online presence that matched the quality of their care. We designed a clean, calming interface and integrated a seamless patient portal for online booking and form submissions, reducing front-desk administrative work by 40%.', image: 'https://picsum.photos/seed/dental/800/600', span: 'col-span-1 row-span-1' },
  { id: 3, title: 'Law Partners', category: 'Professional', description: 'Corporate identity and lead generation landing pages.', fullDescription: 'For Law Partners, establishing authority and trust was paramount. We created a sophisticated, professional corporate identity and a series of highly optimized landing pages tailored to specific legal services. This targeted approach decreased their cost-per-acquisition by 35%.', image: 'https://picsum.photos/seed/law/800/600', span: 'col-span-1 row-span-1' },
  { id: 4, title: 'Green Landscaping', category: 'Local Services', description: 'Portfolio showcase and automated quote request form.', fullDescription: 'Green Landscaping wanted to showcase their stunning outdoor transformations. We built a visually rich portfolio website with high-resolution image galleries and implemented an automated, multi-step quote request form that pre-qualifies leads before they even pick up the phone.', image: 'https://picsum.photos/seed/landscape/800/600', span: 'col-span-1 row-span-1' },
  { id: 5, title: 'Elite Auto Detail', category: 'Local Services', description: 'E-commerce integration for service packages.', fullDescription: 'Elite Auto Detail was ready to scale their premium detailing business. We developed a sleek, high-end website featuring an e-commerce integration that allows customers to easily browse, select, and pre-pay for detailing packages online, streamlining their entire sales process.', image: 'https://picsum.photos/seed/auto/800/600', span: 'col-span-1 md:col-span-2 row-span-1' },
];

const categories = ['All', 'Trades', 'Health', 'Professional', 'Local Services'];

export function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="works" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
            Some of our best Works
          </h2>
          <p className="text-xl text-secondary max-w-2xl">
            Websites that we designed for local and service businesses.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-background shadow-md'
                  : 'bg-subtle/30 text-secondary hover:bg-subtle/60 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${project.span}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                
                {/* Staggered Content Reveal */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="overflow-hidden mb-2">
                    <p className="text-accent text-sm font-bold uppercase tracking-wider translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {project.category}
                    </p>
                  </div>
                  <div className="overflow-hidden mb-3">
                    <h3 className="font-heading text-3xl font-bold text-background translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
                      {project.title}
                    </h3>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-background/80 text-base line-clamp-2 max-w-md translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Top Right Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-background/10 backdrop-blur-md rounded-full flex items-center justify-center text-background opacity-0 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out border border-background/20">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl bg-background rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-background/50 backdrop-blur-md rounded-full text-primary hover:bg-subtle transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-3">
                  {selectedProject.category}
                </p>
                <h3 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-secondary text-base md:text-lg leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-3 bg-primary text-background rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                  <button 
                    className="px-8 py-3 bg-transparent border border-subtle text-primary rounded-full font-medium hover:bg-subtle/20 transition-colors flex items-center gap-2"
                  >
                    Visit Website <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
