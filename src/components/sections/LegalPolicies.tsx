"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, AlertTriangle } from "lucide-react";

export function LegalPolicies() {
  const [activePolicy, setActivePolicy] = useState<"privacy" | "disclaimer" | null>(null);

  const toggle = (policy: "privacy" | "disclaimer") => {
    setActivePolicy(activePolicy === policy ? null : policy);
  };

  return (
    <section className="py-12 relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={() => toggle("privacy")}
            className={`flex-1 flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${activePolicy === "privacy" ? "bg-white/10 border-blue-500/50 text-white" : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"}`}
          >
            <div className="flex items-center gap-3">
              <Shield className={activePolicy === "privacy" ? "text-blue-400" : ""} size={20} />
              <span className="font-medium">Privacy Policy</span>
            </div>
            <ChevronDown className={`transition-transform duration-300 ${activePolicy === "privacy" ? "rotate-180" : ""}`} size={20} />
          </button>

          <button
            onClick={() => toggle("disclaimer")}
            className={`flex-1 flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${activePolicy === "disclaimer" ? "bg-white/10 border-yellow-500/50 text-white" : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"}`}
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className={activePolicy === "disclaimer" ? "text-yellow-400" : ""} size={20} />
              <span className="font-medium">Disclaimer</span>
            </div>
            <ChevronDown className={`transition-transform duration-300 ${activePolicy === "disclaimer" ? "rotate-180" : ""}`} size={20} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activePolicy === "privacy" && (
            <motion.div
              key="privacy"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-gray-300 text-sm space-y-6">
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">1. Introduction</h3>
                  <p>Welcome to Nitesh Patel's portfolio website. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">2. Data We Collect</h3>
                  <p>We may collect, use, store and transfer different kinds of personal data about you. When you use our contact form, we collect Identity Data (First name, Last name), Contact Data (Email address, Telephone numbers), and any other information you choose to provide in your message.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">3. How Your Data is Used</h3>
                  <p>We will only use your personal data for the purpose of communicating with you, providing web development or SEO consultation services, and managing our relationship with you. We do not sell or rent your data to third parties.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">4. Data Security</h3>
                  <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activePolicy === "disclaimer" && (
            <motion.div
              key="disclaimer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-gray-300 text-sm space-y-6">
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">1. General Information</h3>
                  <p>The information provided by Nitesh Patel on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">2. External Links Disclaimer</h3>
                  <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">3. Professional Disclaimer</h3>
                  <p>The Site cannot and does not contain financial or legal business advice. The web development and SEO information is provided for general informational and educational purposes only and is not a substitute for professional advice. Any reliance on the material provided is at your own risk.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">4. Results and Testimonials</h3>
                  <p>SEO results vary greatly and depend on numerous factors out of our control. Testimonials appearing on this site reflect real-life experiences of past clients, but are personal and may not represent typical results for all clients.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
