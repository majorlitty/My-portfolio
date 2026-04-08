'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    type: 'image',
    title: 'Apex Plumbing\nRedesign',
    image: 'https://picsum.photos/seed/plumbing/800/600',
  },
  {
    id: 2,
    type: 'text',
    pill: "WHO IT'S FOR",
    title: 'Built for businesses\nthat need growth',
    description: 'Websites designed to meet organizations where they are, building digital structure for real life.',
    bgColor: 'bg-[#FFFCF8]',
    textColor: 'text-zinc-900',
  },
  {
    id: 3,
    type: 'image',
    title: 'Smile Dental\nPatient Portal',
    image: 'https://picsum.photos/seed/dental/800/600',
  },
  {
    id: 4,
    type: 'solid',
    title: 'Law Partners\nCorporate Identity',
    bgColor: 'bg-[#E5B585]',
  },
  {
    id: 5,
    type: 'solid',
    title: 'Green Landscaping\nPortfolio',
    bgColor: 'bg-[#9BA892]',
  },
  {
    id: 6,
    type: 'solid',
    title: 'Elite Auto Detail\nE-commerce',
    bgColor: 'bg-[#A9B4C2]',
  }
];

export function OurWork() {
  return (
    <section id="works" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            Our Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const orderClass = project.id === 1 ? 'order-2 lg:order-1' : project.id === 2 ? 'order-1 lg:order-2' : 'order-3 lg:order-none';

            if (project.type === 'text') {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${orderClass} ${project.bgColor} rounded-[2rem] p-8 flex flex-col items-center text-center justify-between h-[340px]`}
                >
                  <div className="px-4 py-1.5 rounded-full border border-zinc-200 text-xs font-bold tracking-widest text-zinc-500 uppercase mb-6 bg-white">
                    {project.pill}
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <h3 className={`font-heading text-3xl font-medium ${project.textColor} mb-4 leading-tight`}>
                      {project.title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </h3>
                    <p className="text-zinc-600 text-sm max-w-[260px] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            }

            if (project.type === 'solid') {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${orderClass} ${project.bgColor} rounded-[2rem] p-8 flex flex-col justify-between h-[340px] relative group cursor-pointer overflow-hidden`}
                >
                  <h3 className="font-heading text-2xl text-white font-medium leading-tight z-10">
                    {project.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h3>
                  <div className="flex justify-end z-10">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Image type
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${orderClass} rounded-[2rem] p-8 flex flex-col justify-between h-[340px] relative group cursor-pointer overflow-hidden`}
              >
                <Image
                  src={project.image!}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/20 to-zinc-900/60" />
                
                <h3 className="font-heading text-2xl text-white font-medium leading-tight z-10">
                  {project.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <div className="flex justify-end z-10">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
