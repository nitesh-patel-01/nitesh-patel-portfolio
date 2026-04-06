import { Phone, Mail, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-black border-t border-gray-800 relative z-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-blue-500">📄</span> Nitesh Patel
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Trusted web development and SEO services focused on performance, clarity, and results. No fluff. Just results.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/_nitesh_visions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="mailto:niteshpatel7479@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/917974823298" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-base uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">Testimonials</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">FAQs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-base uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">Custom Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">SEO Optimization</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">Business Websites</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">Landing Pages</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">E-commerce Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-base uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:+917974823298" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">+91 7974823298</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:niteshpatel7479@gmail.com" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">niteshpatel7479@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <a href="https://instagram.com/_nitesh_visions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">@_nitesh_visions</a>
              </li>
              <li className="flex items-center gap-3">
                <User size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Author: Nitesh Patel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">© 2026 Nitesh Patel. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Designed & developed by <a href="https://niteshpatelweb.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors hover:underline">Nitesh Patel</a></p>
        </div>
      </div>
    </footer>
  );
}
