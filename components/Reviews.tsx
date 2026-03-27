'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "Since launching our new site, we've seen a 40% increase in new patient bookings. The ease of operations has completely transformed how we run our clinic.",
    author: "Dr. Sarah Jenkins",
    service: "Chiropractic Clinic",
    rating: 5,
  },
  {
    quote: "Our brand awareness skyrocketed locally. We used to rely on word-of-mouth, but now our website is our #1 lead generator. Highly recommend their team.",
    author: "Mike Thompson",
    service: "Plumbing Services",
    rating: 5,
  },
  {
    quote: "The revamp made our services so much clearer. Customers constantly compliment how easy it is to find what they need and book a consultation.",
    author: "Elena Rodriguez",
    service: "Legal Consulting",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-32 bg-subtle/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-primary">
            What our clients are saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-10 rounded-3xl border border-subtle/50 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-8 flex-grow">
                &quot;{review.quote}&quot;
              </p>
              <div>
                <p className="font-heading font-bold text-primary text-lg">{review.author}</p>
                <p className="text-sm text-secondary/70 uppercase tracking-wider mt-1">{review.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
