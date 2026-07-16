"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ target, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const node = nodeRef.current;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.215, 0.61, 0.355, 1],
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString("en-IN");
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-black text-brand-koa">
        <span ref={nodeRef}>0</span>
        {suffix}
      </span>
      <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mt-2">{label}</p>
    </div>
  );
}
