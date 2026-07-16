"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ActivityCard } from "@/components/activities/ActivityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { activities as allActivities } from "@/lib/data";

const difficulties = ["All", "Easy", "Moderate", "Challenging", "Extreme"];

export function ActivitiesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? allActivities
    : allActivities.filter((a) => a.difficulty.includes(filter));

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Activities" }]} />
        <SectionHeading
          title="All Activities"
          subtitle="From the Giant Swing to the Rope Courses — explore all 18 activities at Kanatal Outdoor Adventure. Filter by difficulty to find your perfect thrill."
        />

        <div className="flex flex-wrap gap-3 mt-12 justify-center">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
                filter === d
                  ? "bg-brand-koa text-surface"
                  : "bg-border-subtle/30 text-ink-muted hover:bg-border-subtle/60"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {filtered.map((activity, i) => (
            <ActivityCard key={activity.slug} {...activity} index={i} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
