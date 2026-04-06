"use client";

import { motion } from "framer-motion";
import { Search, MonitorSmartphone, Zap, ShieldCheck } from "lucide-react";

export function WhyChooseMeSection() {
  const reasons = [
    {
      title: "SEO-First Architecture",
      desc: "Websites built from the ground up to rank and attract organic traffic continuously.",
      icon: <Search size={28} />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    },
    {
      title: "Business Focused",
      desc: "Designed specifically to generate high-quality leads, drive conversions, and establish brand trust.",
      icon: <MonitorSmartphone size={28} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      title: "Fast & Responsive",
      desc: "Highly optimized for page speed and flawless operation on all screen sizes and mobile devices.",
      icon: <Zap size={28} />,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20"
    },
    {
      title: "Reliable Support",
      desc: "Professional maintenance, robust security setups, and ongoing guidance after your platform launches.",
      icon: <ShieldCheck size={28} />,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    }
  ];

  return (
    <section id="why-choose-me" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Me?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            What sets my development services apart and how it translates to your business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-8 rounded-3xl bg-white/5 border ${reason.border} hover:bg-white/10 hover:shadow-[0_0_30px_inherit] hover:border-[currentColor] transition-all duration-300 backdrop-blur-sm group cursor-default relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`relative w-16 h-16 rounded-2xl ${reason.bg} flex items-center justify-center ${reason.color} mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-lg">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
