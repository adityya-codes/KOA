"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    from: "Delhi",
    text: "The camping experience was incredible. Waking up to the Himalayan sunrise with a cup of tea — there's nothing like it. The guides were professional and the food was delicious.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    from: "Mumbai",
    text: "We did the 2-night adventure camp and it exceeded every expectation. Valley crossing was terrifying and amazing in equal measure. The bonfire night with local music was magical.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    from: "Bangalore",
    text: "Kanatal's Winterline phenomenon is real and breathtaking. I got some of the best photographs of my life. The trek to Surkanda Devi Temple through snow-covered trails is unforgettable.",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    from: "Dehradun",
    text: "Perfect weekend getaway from Delhi. The drive is beautiful, the campsite has amazing valley views, and the staff takes care of everything. Highly recommend the zipline!",
    rating: 4,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Real experiences from real adventurers who have explored Kanatal with us."
        />

        <div className="relative mt-16 max-w-2xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-center px-4"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[current].rating
                          ? "text-brand-ember fill-brand-ember"
                          : "text-border-subtle"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-base md:text-lg text-ink leading-relaxed italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-black text-ink">{testimonials[current].name}</p>
                  <p className="text-xs text-ink-muted/60">{testimonials[current].from}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-border-subtle/50 hover:bg-border-subtle flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-ink-muted" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    i === current ? "bg-brand-koa w-8" : "bg-border-subtle"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-border-subtle/50 hover:bg-border-subtle flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-ink-muted" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
