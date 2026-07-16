"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative flex items-center justify-center">
          {/* rotating ring — like a compass dial / climbing carabiner */}
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-r from-brand-koa via-brand-ember to-brand-koa animate-spin [animation-duration:1.5s]" style={{ mask: "radial-gradient(farthest-side, transparent 70%, #000 73%)", WebkitMask: "radial-gradient(farthest-side, transparent 70%, #000 73%)" }} />
          <Image
            src="/images/logo.png"
            alt="KOA"
            width={500}
            height={500}
            className="w-14 sm:w-16 h-auto relative z-10"
            priority
          />
        </div>

        {/* pulsing ripple rings */}
        <div className="flex items-center justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-brand-koa"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
