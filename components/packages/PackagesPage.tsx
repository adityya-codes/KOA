"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { packages } from "@/lib/data";
import { getDiscountedPrice } from "@/lib/price";

const tCfg = [
  { lift: -2, Icon: Check, shadow: "0 8px 28px -12px rgba(15,61,36,0.15)" },
  { lift: -3, Icon: Check, shadow: "0 12px 36px -14px rgba(180,120,60,0.18)" },
  { lift: -5, Icon: Star, shadow: "0 18px 48px -18px rgba(15,61,36,0.24)" },
  { lift: -6, Icon: Sparkles, shadow: "0 22px 56px -20px rgba(180,80,30,0.22)" },
] as const;

const grad = [
  "linear-gradient(135deg, #ffffff 0%, #fcfaf8 100%)",
  "linear-gradient(135deg, #fcfaf8 0%, #ffffff 45%, #faf5ef 100%)",
  "linear-gradient(135deg, rgba(15,61,36,0.04) 0%, #ffffff 35%, rgba(180,80,30,0.03) 100%)",
  "linear-gradient(135deg, #faf5ef 0%, #ffffff 30%, #f7f0e8 70%, #fcfaf8 100%)",
];

const borderCls = [
  "border-[rgba(15,61,36,0.08)] shadow-[0_4px_16px_-8px_rgba(15,61,36,0.06)]",
  "border-[rgba(120,80,40,0.10)] shadow-[0_6px_20px_-10px_rgba(120,80,40,0.06)]",
  "border-[rgba(15,61,36,0.12)] shadow-[0_8px_28px_-12px_rgba(15,61,36,0.08)]",
  "border-[rgba(180,80,30,0.14)] shadow-[0_10px_32px_-14px_rgba(180,80,30,0.08)]",
];

const bHover = [
  "rgba(15,61,36,0.18)",
  "rgba(180,120,60,0.30)",
  "rgba(15,61,36,0.35)",
  "rgba(180,80,30,0.40)",
];

const glareColors = [
  "rgba(255,255,255,0.15)",
  "rgba(255,255,255,0.20)",
  "rgba(255,255,255,0.25)",
  "rgba(255,255,255,0.30)",
];

const kf = `@keyframes glare-sweep { 0% { transform: translateX(-100%) rotate(15deg); } 100% { transform: translateX(300%) rotate(15deg); } }`;

export function PackagesPage() {
  return (
    <main className="pt-28 pb-24 relative">
      <style>{kf}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Breadcrumbs items={[{ label: "Packages" }]} />
        <SectionHeading
          title="Adventure Packages"
          subtitle="All packages include professional guides, certified safety equipment, and hygienic meals with locally sourced ingredients."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-8">
          {packages.map((pkg, i) => {
            const t = (pkg.tier ?? 1) - 1;
            const cfg = tCfg[t] ?? tCfg[0];
            const { Icon } = cfg;
            const eY = 12 + t * 6;
            const eS = 1 - t * 0.01;
            const eD = 0.35 + t * 0.06;

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: eY, scale: eS }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: eD, ease: [0.215, 0.61, 0.355, 1] as const }}
                style={{ background: grad[t] ?? grad[0] }}
                whileHover={{
                  y: cfg.lift,
                  boxShadow: cfg.shadow,
                  borderColor: bHover[t] ?? bHover[0],
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className={`relative rounded-2xl border-2 p-8 max-sm:p-3 flex flex-col group cursor-default transition-[border-color,box-shadow] duration-300 ${borderCls[t] ?? borderCls[0]}`}
              >
                {/* glare */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div
                    className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(115deg, transparent 30%, ${glareColors[t] ?? glareColors[0]} 45%, transparent 60%)`,
                      animation: "glare-sweep 1.8s ease-in-out infinite",
                    }}
                  />
                </div>

                <div className="flex gap-2 absolute -top-3 left-6 right-6 z-10 flex-wrap">
                  {pkg.popular && (
                    <motion.span
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.15 }}
                      className="bg-brand-koa text-surface text-[10px] max-sm:text-[8px] font-black uppercase tracking-widest px-4 max-sm:px-2 py-1.5 rounded-full inline-flex items-center gap-1.5"
                    >
                      {t >= 2 && <Star className="w-3 h-3 max-sm:w-2 max-sm:h-2" />}
                      Most Popular
                    </motion.span>
                  )}
                  {pkg.highlight && (
                    <motion.span
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.2 }}
                      className={`text-surface text-[10px] max-sm:text-[8px] font-black uppercase tracking-widest px-4 max-sm:px-2 py-1.5 rounded-full inline-flex items-center gap-1.5 ${
                        pkg.highlight === "All Activities"
                          ? "bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-600/40"
                          : t >= 3
                            ? "bg-gradient-to-r from-brand-koa to-brand-ember"
                            : "bg-brand-ember"
                      }`}
                    >
                      {t >= 3 && <Sparkles className="w-3 h-3 max-sm:w-2 max-sm:h-2" />}
                      {pkg.highlight}
                    </motion.span>
                  )}
                </div>

                <div className="flex items-start justify-between mb-3 max-sm:mb-2 gap-1">
                  <h3 className="text-2xl max-sm:text-base font-black uppercase tracking-tight text-ink">{pkg.name}</h3>
                  {t >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, rotate: -90, scale: 0 }}
                      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.35, type: "spring", stiffness: 200 + t * 30 }}
                    >
                      {t >= 3 ? <Sparkles className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-brand-ember" /> : <Star className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-brand-koa/60" />}
                    </motion.div>
                  )}
                </div>

                <p className="text-xs max-sm:text-[10px] text-ink-muted leading-relaxed">{pkg.description}</p>

                <div className="my-6 max-sm:my-3">
                  {(() => { const pd = getDiscountedPrice(pkg.price); return (
                    <>
                      {pd.show ? (
                        <div className="flex flex-col gap-0.5">
                          <span className="text-lg max-sm:text-sm font-black text-ink-muted/40 line-through">{pd.original}</span>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-4xl max-sm:text-xl font-black text-brand-koa">{pd.discounted}</span>
                            <span className="text-[10px] font-bold text-brand-ember bg-brand-ember/10 px-2 py-0.5 rounded-full">20% off</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-4xl max-sm:text-xl font-black text-brand-koa">{pkg.price}</span>
                      )}
                      <span className="text-xs max-sm:text-[10px] text-ink-muted ml-2">/{pkg.per}</span>
                    </>
                  );})()}
                </div>

                <ul className="space-y-3 max-sm:space-y-1 mb-8 max-sm:mb-3 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Icon className={`w-4 h-4 max-sm:w-3 max-sm:h-3 shrink-0 mt-0.5 ${t >= 2 ? "text-brand-ember" : "text-brand-koa"}`} />
                      <span className="text-xs max-sm:text-[10px] text-ink-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                {t >= 2 && (
                  <motion.div
                    className="h-[3px] max-sm:h-[2px] rounded-full bg-gradient-to-r from-brand-koa/20 to-brand-ember/20 mb-6 max-sm:mb-3"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.4, duration: 0.7, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}

                <Button
                  variant={t >= 2 ? "primary" : "outline"}
                  href="/contact"
                  className={`w-full justify-center max-sm:text-[10px] max-sm:px-3 max-sm:py-2 ${
                    t >= 3 ? "bg-gradient-to-r from-brand-koa to-brand-ember border-0" : ""
                  }`}
                >
                  <Phone className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
                  Call to Pre-book & Save 20%
                  <ArrowRight className="w-4 h-4 max-sm:w-3 max-sm:h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
