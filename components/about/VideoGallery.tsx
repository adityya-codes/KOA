"use client";

import { useState, useCallback, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    src: "/videos/KOA.mp4",
    title: "Kanatal Outdoor Adventure",
    description: "A glimpse of the adventures waiting for you at Saur Kanatal.",
  },
  {
    src: "/videos/activity.mp4",
    title: "Activities in Action",
    description: "Real moments from the park — thrill, fun, and the Himalayas.",
  },
  {
    src: "/videos/gaint_swing.mp4",
    title: "Giant Swing",
    description: "Feel the rush of the 40-ft Giant Swing at Saur Kanatal.",
  },
];

export function VideoGallery() {
  const [active, setActive] = useState<string | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, close]);

  return (
    <section className="mt-16">
      <SectionHeading
        title="In Action"
        subtitle="Short clips from the park — real moments, real adventure."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((v) => (
          <button
            key={v.src}
            onClick={() => setActive(v.src)}
            className="relative group rounded-2xl overflow-hidden bg-brand-koa/5 border border-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-koa text-left"
          >
            <div className="aspect-video relative overflow-hidden">
              <video
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Play className="w-6 h-6 text-brand-koa ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-black uppercase tracking-tight text-ink">{v.title}</h3>
              <p className="text-xs text-ink-muted mt-1">{v.description}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={active} type="video/mp4" />
              </video>
              <button
                onClick={close}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
