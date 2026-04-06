"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What types of websites do you build?", a: "Business, ecommerce, landing pages and SEO websites." },
  { q: "Are the websites SEO-ready?", a: "Yes, all websites are SEO-ready and performance optimized from the start." },
  { q: "Do you redesign existing websites?", a: "Yes, I redesign existing websites for better UI, speed, and SEO." },
  { q: "Will the website be mobile responsive?", a: "Absolutely. All websites are fully responsive and work seamlessly across devices." },
  { q: "How much does a website cost?", a: "Website cost depends on your business goals, features, and design needs. Flexible pricing is available for startups and businesses." },
  { q: "How long does it take to complete?", a: "Most business websites are completed within 5–10 working days, depending on content and project scope." },
  { q: "Do you assist with domain and hosting?", a: "Yes. I assist with domain selection, hosting setup, and full website deployment if required." },
  { q: "Is the website easy to manage post-launch?", a: "Yes. The website will be easy to manage, and guidance is provided for future updates." },
  { q: "Do you offer maintenance and support?", a: "Yes. Ongoing maintenance, updates, and technical support are available after launch." },
  { q: "Do you work with clients outside your city?", a: "Yes. I work with clients all over India and handle projects completely online." }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about my web development and SEO services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm self-start"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
