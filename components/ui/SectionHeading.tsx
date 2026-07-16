"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, subtitleClassName, align = "center" }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = title.split(" ");

  return (
    <div ref={ref} className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-ink leading-[0.9]">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-sm text-ink-muted mt-4 max-w-lg mx-auto leading-relaxed ${subtitleClassName ?? ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
