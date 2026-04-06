"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full h-full bg-black/95 backdrop-blur-xl pointer-events-auto flex flex-col"
            >
              <div className="flex justify-center items-center p-6 border-b border-white/10 shrink-0">
                <div className="max-w-4xl mx-auto w-full flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  <button
                    onClick={onClose}
                    className="p-3 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6 md:p-12 overflow-y-auto min-h-0 flex-1 scroll-smooth">
                <div className="max-w-4xl mx-auto w-full text-gray-300">
                  {children}
                </div>
              </div>
              <div className="p-6 border-t border-white/10 shrink-0 flex justify-center">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white rounded-xl transition-all font-semibold"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
