"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

interface OfferBadgeProps {
  variant?: "pill" | "ribbon" | "badge";
  className?: string;
}

export function OfferBadge({ variant = "pill", className = "" }: OfferBadgeProps) {
  const base = "inline-flex items-center gap-1.5 font-black uppercase tracking-wider";

  const content = (
    <motion.span
      className={`${base} ${variant === "ribbon" ? "text-[10px] sm:text-xs bg-gradient-to-r from-red-600 to-red-500 text-surface px-3 py-1.5 rounded-full shadow-lg shadow-red-600/30" : variant === "badge" ? "gap-1 text-[9px] bg-brand-ember text-surface px-2 py-1 rounded-md font-bold" : "gap-2 text-xs sm:text-sm bg-gradient-to-r from-red-600 to-red-500 text-surface px-4 py-2 rounded-full shadow-lg shadow-red-600/30"} ${className}`}
      animate={{ scale: [1, variant === "badge" ? 1.06 : variant === "ribbon" ? 1.04 : 1.03, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Sparkles className={`shrink-0 ${variant === "badge" ? "w-2.5 h-2.5" : variant === "ribbon" ? "w-3 h-3" : "w-4 h-4"}`} />
      <span>20% OFF on Pre-booking</span>
      {variant === "pill" && (
        <span className="hidden sm:inline text-surface/70 text-[10px] font-normal normal-case">Min. ₹500</span>
      )}
    </motion.span>
  );

  return (
    <Link href="/packages" className={`inline-block ${className}`}>
      {content}
    </Link>
  );
}
