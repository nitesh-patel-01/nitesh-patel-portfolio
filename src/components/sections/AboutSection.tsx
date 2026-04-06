"use client";

import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 bg-black/20 backdrop-blur-sm border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-black/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <User size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                <div className="space-y-4 text-gray-400 text-lg">
                  <p>
                    I am a passionate Web Developer and SEO Expert based in India. I specialize in building highly performant, visually aesthetic applications that inherently rank high in search engines.
                  </p>
                  <p>
                    Over my 3+ years of professional experience alongside MBG Cards India Pvt. Ltd. and various partner agencies, I've delivered over 120 digital projects to more than 100 happy clients.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 text-sm text-emerald-400 font-medium">
                  <MapPin size={18} />
                  <span>Serving Delhi, Mumbai, Bangalore, Pune, Indore and globally.</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h3 className="text-4xl font-bold text-white leading-tight">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">design and visibility.</span>
            </h3>
            <p className="text-gray-400 text-lg">
              A great looking website is useless if no one can find it. By keeping a sharp focus on modern web development practices accompanied by deep SEO optimizations, I ensure that my client platforms look premium and convert effectively.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
