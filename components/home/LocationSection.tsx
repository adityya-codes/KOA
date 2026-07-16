"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Plane, Train, Car } from "lucide-react";

const routes = [
  {
    icon: Car,
    from: "Delhi",
    distance: "300 km",
    duration: "8–9 hrs",
    route: "Delhi → Meerut → Roorkee → Haridwar → Rishikesh → Chamba → Kanatal",
  },
  {
    icon: Plane,
    from: "Jolly Grant Airport, Dehradun",
    distance: "90 km",
    duration: "3 hrs",
    route: "Taxi from airport to Kanatal via Mussoorie",
  },
  {
    icon: Train,
    from: "Rishikesh Railway Station",
    distance: "78 km",
    duration: "2.5 hrs",
    route: "Taxi from station to Kanatal",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Find Your Way"
          subtitle="Kanatal is perched at 8,500 feet in the Tehri Garhwal district of Uttarakhand — easily accessible from Delhi and major North Indian cities."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.from}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-brand-snow rounded-2xl p-6 border border-border-subtle"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-koa/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-koa" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-tight text-ink mb-1">{r.from}</h3>
                <p className="text-xs text-ink-muted mb-3">
                  {r.distance} · {r.duration}
                </p>
                <p className="text-xs text-ink-muted/60 leading-relaxed">{r.route}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-brand-koa rounded-2xl p-8 text-center"
        >
          <MapPin className="w-6 h-6 text-surface mx-auto mb-3" />
          <p className="text-lg font-black text-surface">
            Village Saur Kanatal, Near by Winter Line Cafe, Tehri Garhwal, Uttarakhand
          </p>
          <p className="text-sm text-surface/60 mt-2">
            Owner: Ajay Ramola · Web: www.kanataloutdoor.com · #KanatalOutdoors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
