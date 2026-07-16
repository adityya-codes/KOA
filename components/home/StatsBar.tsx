"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 25, suffix: "+", label: "Years of Experience" },
  { target: 50000, suffix: "+", label: "Happy Guests" },
  { target: 18, suffix: "", label: "Adventure Activities" },
  { target: 500, suffix: "+", label: "Camps Hosted" },
];

export function StatsBar() {
  return (
    <section className="py-16 md:py-20 bg-brand-koa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
