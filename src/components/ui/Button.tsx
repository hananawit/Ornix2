"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "primary" | "accent" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className,
  disabled,
  onClick,
  ...props
}) => {
  const baseStyles =
    "relative z-20 pointer-events-auto touch-manipulation select-none inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-ornix-yellow/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-ornix-navy-800 text-white border border-white/10 hover:bg-ornix-navy-700 hover:border-ornix-yellow/40 shadow-lg shadow-ornix-navy-950/50",

    accent:
      "bg-ornix-yellow text-ornix-navy-900 font-semibold hover:bg-ornix-yellow-hover hover:shadow-lg hover:shadow-ornix-yellow/20 text-ornix-navy-950",

    glass:
      "glass-panel text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md",

    outline:
      "border border-white/20 text-white hover:border-ornix-yellow hover:text-ornix-yellow bg-transparent",

    ghost:
      "text-ornix-slate-200 hover:text-ornix-yellow hover:bg-white/5 bg-transparent",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-1 shrink-0">
          {icon}
        </span>
      )}

      <span className="shrink-0">{children}</span>

      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    "group",
    className
  );

  if (href) {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="inline-block relative z-20"
      >
        <Link
          href={href}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          className={combinedClasses}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(props as HTMLMotionProps<"button">)}
    >
      {content}
    </motion.button>
  );
};