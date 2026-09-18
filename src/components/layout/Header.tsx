"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, LOGO_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ornix-navy-900 border-b border-white/10 shadow-lg shadow-ornix-navy-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[76px] flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-9 h-9 overflow-hidden rounded-lg border border-white/10 group-hover:border-ornix-yellow/50 transition-colors">
                <Image
                  src={LOGO_PATH}
                  alt="ORNIX AI Solutions Logo"
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
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-ornix-yellow text-ornix-navy-950 font-semibold"
                        : "text-ornix-slate-300 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact CTA */}
            <div className="hidden md:flex items-center">
              <Button
                href="/contact"
                variant="accent"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Contact ORNIX
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-ornix-yellow focus:outline-none cursor-pointer touch-manipulation relative z-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
};