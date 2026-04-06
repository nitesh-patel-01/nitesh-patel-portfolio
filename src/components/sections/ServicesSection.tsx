"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, SearchCode, Megaphone, Smartphone } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Business Websites",
      desc: "Custom-developed corporate platforms reflecting your brand identity and capturing your target audience.",
      icon: <LayoutTemplate size={24} />
    },
    {
      title: "E-Commerce Solutions",
      desc: "Robust, high-converting online stores that provide smooth shopping experiences and secure checkouts.",
      icon: <Smartphone size={24} />
    },
    {
      title: "SEO Audits & Strategy",
      desc: "In-depth site structure analysis to fix technical issues, establish better indexing, and drive organic traffic.",
      icon: <SearchCode size={24} />
    },
    {
      title: "Landing Pages",
      desc: "High-performance landing pages structured specifically for digital marketing campaigns and lead generation.",
      icon: <Megaphone size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-black/40 border-t border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 md:flex justify-between items-end gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-400 text-lg">
              Offering full-stack web solutions combined with deep SEO implementations to ensure maximum visibility.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-emerald-500 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
