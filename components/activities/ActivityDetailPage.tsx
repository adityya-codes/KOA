"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLeft, Clock, Shield, Users } from "lucide-react";
import Link from "next/link";

interface ActivityDetailProps {
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  price: string;
  image: string;
  details: string[];
  slug: string;
}

export function ActivityDetailPage({
  title,
  description,
  difficulty,
  duration,
  price,
  image,
  details,
  slug,
}: ActivityDetailProps) {
  return (
    <main className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Activities", href: "/activities" }, { label: title }]} />
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-muted hover:text-ink mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Activities
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-koa/10 text-brand-koa px-4 py-2 rounded-full">
                  {difficulty}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-koa/10 text-brand-koa px-4 py-2 rounded-full">
                  {duration}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-ink leading-[0.85]">
                {title}
              </h1>
              <p className="text-sm text-ink-muted mt-6 leading-relaxed">{description}</p>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-ink-muted/40" />
                  <span className="text-xs text-ink-muted">{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-ink-muted/40" />
                  <span className="text-xs text-ink-muted">Certified Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-ink-muted/40" />
                  <span className="text-xs text-ink-muted">All Ages Welcome</span>
                </div>
              </div>

              <p className="text-2xl font-black text-brand-koa mt-8">{price}</p>

              <Button variant="primary" href="/packages" className="mt-6">
                Book This Activity
              </Button>
            </motion.div>
          </div>

          <ImageReveal src={image} alt={title} className="h-[240px] sm:h-[400px] lg:h-[500px] rounded-2xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 max-w-3xl"
        >
          <h2 className="text-2xl font-black uppercase tracking-tight text-ink mb-6">What to Expect</h2>
          <ul className="space-y-4">
            {details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-koa mt-2 shrink-0" />
                <span className="text-sm text-ink-muted leading-relaxed">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
