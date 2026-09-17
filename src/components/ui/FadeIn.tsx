"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInVariants, slideUpVariants, staggerContainerVariants } from "@/lib/animations";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn: React.FC<MotionProps> = ({ children, className, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp: React.FC<MotionProps> = ({ children, className, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={slideUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren: React.FC<MotionProps> = ({ children, className }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
