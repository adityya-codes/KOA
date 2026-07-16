"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


interface ActivityCardProps {
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  price: string;
  image: string;
  slug: string;
  index: number;
}

export function ActivityCard({
  title,
  description,
  difficulty,
  duration,
  price,
  image,
  slug,
  index,
}: ActivityCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative bg-surface rounded-2xl overflow-hidden border border-border-subtle shadow-[0_8px_24px_-8px_rgba(15,61,36,0.08)] hover:shadow-[0_0_30px_4px_rgba(15,61,36,0.2),0_20px_60px_-12px_rgba(15,61,36,0.25)] transition-shadow duration-500"
    >
      {/* Gradient border glow on hover */}
      <div className="pointer-events-none absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-brand-koa/30 via-brand-ember/20 to-brand-koa/30" style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor", padding: "1px" }} />

      {/* Image */}
      <div className="relative h-52 max-sm:h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-koa-dark/70 via-brand-koa-dark/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-koa/10 to-transparent z-10" />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ translateZ: 30 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="text-[10px] max-sm:text-[8px] font-bold uppercase tracking-wider bg-white/90 text-brand-koa-dark px-2.5 max-sm:px-1.5 py-1 max-sm:py-0.5 rounded-full shadow-sm">
            {difficulty}
          </span>
          <span className="text-[10px] max-sm:text-[8px] font-bold uppercase tracking-wider bg-white/90 text-ink-muted px-2.5 max-sm:px-1.5 py-1 max-sm:py-0.5 rounded-full shadow-sm">
            {duration}
          </span>
        </div>
        {false && null}
      </div>

      {/* Content */}
      <div className="relative p-5 max-sm:p-3 bg-gradient-to-b from-white to-brand-snow/50" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-start justify-between mb-2 gap-1">
          <h3 className="text-lg max-sm:text-sm font-black uppercase tracking-tight text-ink">{title}</h3>
          <span className="text-sm max-sm:text-[11px] font-black text-brand-koa whitespace-nowrap">{price}</span>
        </div>

        <p className="text-xs max-sm:text-[11px] text-ink-muted leading-relaxed line-clamp-2">{description}</p>
        <Link
          href={`/activities/${slug}`}
          className="inline-flex items-center gap-1.5 mt-4 max-sm:mt-2 text-xs max-sm:text-[10px] font-bold uppercase tracking-wider text-brand-koa hover:text-brand-koa-light transition-colors group/link relative"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 max-sm:w-3 max-sm:h-3 transition-all group-hover/link:translate-x-1" />
          <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-brand-koa/20 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      </div>
    </motion.div>
  );
}
