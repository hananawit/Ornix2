"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, LOGO_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-ornix-navy-900/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-ornix-navy-950/40"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Mark & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-9 h-9 overflow-hidden rounded-lg border border-white/10 group-hover:border-ornix-yellow/50 transition-colors">
              <Image
                src={LOGO_PATH}
                alt="ORNIX AI Healthcare Logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-wider font-heading text-white group-hover:text-ornix-yellow transition-colors">
              ORNIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-ornix-navy-850/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "bg-ornix-yellow text-ornix-navy-950 font-semibold shadow-sm"
                      : "text-ornix-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="/contact" variant="accent" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Contact ORNIX
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel text-white hover:text-ornix-yellow focus:outline-none cursor-pointer touch-manipulation relative z-50"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
};
