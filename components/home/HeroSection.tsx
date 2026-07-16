"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { VideoHero } from "./VideoHero";
import { OfferBadge } from "@/components/ui/OfferBadge";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section id="hero" ref={sectionRef} className="relative h-dvh min-h-[600px] overflow-hidden">
      {/* Video background */}
      <VideoHero />

      {/* Sky gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-koa/80 via-brand-koa/40 to-transparent" />

      {/* Winterline beam */}
      <div className="absolute top-1/3 left-0 right-0 h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-brand-winterline to-transparent opacity-60 animate-[winterline-glow_4s_ease-in-out_infinite]" />
      </div>

      {/* Background mountains (far) */}
      <motion.div
        style={{ y: backY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234A90D9' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E")`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }} />
      </motion.div>

      {/* Mid mountains */}
      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 opacity-50"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230F3D24' d='M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,240C672,245,768,235,864,208C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E")`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }} />
      </motion.div>

      {/* Front mountains (darkest) */}
      <motion.div
        style={{ y: frontY }}
        className="absolute inset-0 opacity-80"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23092617' d='M0,288L48,277.3C96,267,192,245,288,245.3C384,245,480,267,576,272C672,277,768,267,864,245.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E")`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
      >
        <h1 className="flex flex-col items-center max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-4 sm:p-5 md:p-6">
            <Image
              src="/images/logo.png"
              alt="KOA"
              width={500}
              height={500}
              className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto"
              priority
            />
          </div>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-surface/90 mt-4">
            Kanatal Outdoor Adventure
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-surface/70 mt-6 max-w-xl leading-relaxed font-medium">
          18 activities — Giant Swing, Sky Roller, Rope Courses, Zip Line, ATV, Valley Crossing & more. Adventure awaits at Saur Kanatal, Tehri Garhwal.
        </p>
        <div className="mt-5">
          <OfferBadge variant="pill" />
        </div>
        <p className="text-xs text-surface/50 mt-2 font-medium">
          Pre-book now and save big. Min. booking ₹500.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 max-sm:gap-2 mt-10">
          <Button variant="primary" href="/activities" className="max-sm:px-3 max-sm:py-2 max-sm:text-[10px]">
            Explore Activities
          </Button>
          <Button variant="primary" href="/packages" className="!bg-white/10 !backdrop-blur-md !border-2 !border-white/40 !text-white hover:!bg-white/20 hover:!text-white max-sm:px-3 max-sm:py-2 max-sm:text-[10px]">
            Plan Your Trip
          </Button>
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-surface/40">Scroll</span>
        <ChevronDown className="w-4 h-4 text-surface/40 animate-[chevron-bounce_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
