"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles } from "lucide-react";
import { packages } from "@/lib/data";
import { getDiscountedPrice } from "@/lib/price";

export function PackagesSection() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-brand-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Choose Your Adventure"
          subtitle="All packages include professional guides, safety equipment, and hygienic meals prepared with locally sourced ingredients."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className={`relative bg-surface rounded-2xl border-2 p-8 flex flex-col transition-shadow ${
                pkg.popular
                  ? "border-brand-koa shadow-[0_16px_48px_-12px_rgba(15,61,36,0.15)]"
                  : "border-border-subtle shadow-[0_8px_24px_-8px_rgba(15,61,36,0.06)]"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-koa text-surface text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-black uppercase tracking-tight text-ink">{pkg.name}</h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">{pkg.description}</p>
              </div>

              <div className="mb-6">
                {(() => { const pd = getDiscountedPrice(pkg.price); return (
                  <>
                    {pd.show ? (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-lg font-black text-ink-muted/40 line-through">{pd.original}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-brand-koa">{pd.discounted}</span>
                          <span className="text-xs font-bold text-brand-ember bg-brand-ember/10 px-2 py-0.5 rounded-full">20% off</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-4xl font-black text-brand-koa">{pkg.price}</span>
                    )}
                    <span className="text-xs text-ink-muted ml-2">/{pkg.per}</span>
                  </>
                );})()}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-ember bg-brand-ember/10 px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Pre-book & save
                  </span>
                  <span className="text-[9px] font-bold text-ink-muted/50 uppercase tracking-wider">Limited Period</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-koa shrink-0 mt-0.5" />
                    <span className="text-xs text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={pkg.popular ? "primary" : "outline"} href="/packages" className="w-full justify-center">
                {pkg.popular ? "Book Now" : "View Details"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
