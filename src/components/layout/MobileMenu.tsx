"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, LOGO_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, currentPath }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-ornix-navy-850/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-8 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link, idx) => {
              const isActive = currentPath === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 px-4 text-xl font-bold font-heading rounded-2xl transition-colors ${
                      isActive
                        ? "bg-ornix-yellow text-ornix-navy-950"
                        : "text-white hover:text-ornix-yellow hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 pt-6 border-t border-white/10"
          >
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              className="w-full"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={onClose}
            >
              Contact ORNIX
            </Button>

            <div className="flex items-center justify-between text-xs text-ornix-slate-400 font-mono pt-2">
              <span>ORNIX AI + HEALTHCARE</span>
              <span>Â© {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
