"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    "Professional website with excellent speed.",
    "SEO-ready structure improved visibility.",
    "Clean design and smooth delivery.",
    "Reliable and professional work.",
    "Fast and mobile friendly website.",
    "Very result-oriented developer.",
    "Performance improved significantly.",
    "Delivered exactly as discussed."
  ];

  return (
    <section id="testimonials" className="py-24 relative z-10 bg-black/40 backdrop-blur-sm border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Client Feedback</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What 100+ happy clients say about my web development and SEO services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex gap-1 mb-4 text-emerald-400">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
