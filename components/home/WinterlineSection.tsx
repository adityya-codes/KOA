"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WinterlineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="winterline" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-koa-dark via-brand-winterline/20 to-brand-koa-dark" />

      {/* Animated winterline beam */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{ top: "45%" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 0.6 } : {}}
        transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-brand-winterline to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="The Winterline"
          subtitle="One of the rarest atmospheric phenomena on Earth — a razor-sharp horizon line where snow meets sky, visible at sunrise and sunset from December through February."
        />

        <motion.div
          className="mt-12 grid grid-cols-3 gap-1 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {[
            { num: "Dec–Feb", label: "Peak Visibility" },
            { num: "8,500 ft", label: "Optimal Altitude" },
            { num: "Sunrise/Sunset", label: "Best Viewing Time" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-sm:p-3"
            >
              <p className="text-xl md:text-2xl max-sm:text-[10px] font-black text-brand-winterline break-words">{item.num}</p>
              <p className="text-xs max-sm:text-[10px] font-bold uppercase tracking-wider text-white/50 mt-2 max-sm:mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm text-white/50 mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          &ldquo;A blade of light separating heaven and earth — the Himalayan peaks cut the sky with surgical precision, 
          snow blazing white against the deepest cerulean blue.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
