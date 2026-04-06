"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Retail Operations Consulting",
      desc: "Professional consulting platform for retail store owners.",
      link: "https://johnstamang.in/"
    },
    {
      title: "Emotional Healing & Counseling",
      desc: "Supportive therapy platform helping individuals.",
      link: "https://happyhealinghappyfeeling.com/"
    },
    {
      title: "Digital Agency Website",
      desc: "Branding & service platform.",
      link: "https://anymediaworx.com/"
    },
    {
      title: "Real Estate Business",
      desc: "Real Estate & Property-focused website.",
      link: "https://akgoudproperties.com/"
    },
    {
      title: "Manufacturing Company",
      desc: "Corporate manufacturing platform.",
      link: "https://f4l-mst.com/"
    }
  ];

  const personalProjects = [
    {
      title: "Pro Resume Builder",
      desc: "Create a professional and ATS friendly resume in just minutes.",
      link: "https://proresumebuilder2026.blogspot.com/"
    },
    {
      title: "All-in-One Multi Tool Hub",
      desc: "Free online tools hub with multiple utility tools in one place.",
      link: "https://all-in-one-multi-tool-hub.blogspot.com/"
    },
    {
      title: "Dhanda Tycoon",
      desc: "Play a free online business simulator game and become a virtual tycoon.",
      link: "https://dhanda-tycoon.blogspot.com/"
    },
    {
      title: "Life Meter",
      desc: "A personal project that calculates time wasted on phone usage in lifetime.",
      link: "https://life-meter-home.blogspot.com/"
    },
    {
      title: "Weight Loss Calendar",
      desc: "Customizable printable calendars for tracking daily weight loss and fitness.",
      link: "https://weight-loss-calendar.blogspot.com/"
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Client Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of complex client platforms delivered independently and with MBG Cards India Pvt. Ltd.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-300">
                  <ExternalLink size={26} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed">{project.desc}</p>
            </motion.a>
          ))}
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-8 mt-24 border-b border-white/10 pb-4 inline-block">Personal Projects & Tools</h3>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {personalProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300">
                  <ExternalLink size={26} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{project.desc}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
