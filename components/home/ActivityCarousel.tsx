"use client";

import { motion } from "framer-motion";
import { ActivityCard } from "@/components/activities/ActivityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { activities } from "@/lib/data";

export function ActivityCarousel() {
  return (
    <section id="activities" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Adventures"
          subtitle="Giant Swing, Sky Roller, Zip Line, Rope Courses, Valley Crossing, ATV Ride, and more — 18 thrilling activities at Saur Kanatal, Tehri Garhwal."
        />

        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {activities.map((activity, i) => (
            <motion.div
              key={activity.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
              }}
            >
              <ActivityCard {...activity} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
