"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-blue-400 mb-6 block">
              Based in India, Serving Globally
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Nitesh Patel
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Web Developer & SEO Expert
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Trusted web development and SEO services focused on performance, clarity, and results — helping businesses establish a strong digital presence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16 border-t border-white/10 mt-16">
            {[
              { label: "Projects Delivered", value: "120+" },
              { label: "Years Experience", value: "3+" },
              { label: "Happy Clients", value: "100+" },
              { label: "Focus", value: "SEO & Perf" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
