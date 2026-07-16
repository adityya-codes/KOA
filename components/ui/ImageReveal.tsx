"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageReveal({ src, alt, className = "" }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-brand-koa z-10 origin-right"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
      />
    </div>
  );
}
