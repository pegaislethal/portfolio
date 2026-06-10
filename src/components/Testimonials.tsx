"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/utils/mockData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[activeIndex];

  // Framer Motion Slide Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/2 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Recommendations
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What Colleagues Say
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[340px] flex flex-col justify-between items-center text-center">
          
          {/* Big Quote Emblems */}
          <div className="absolute top-0 left-0 text-indigo-500/10 dark:text-indigo-500/5 -translate-y-10 pointer-events-none">
            <Quote size={120} style={{ transform: "rotate(180deg)" }} />
          </div>

          {/* Animating Slide Container */}
          <div className="relative w-full overflow-hidden px-4 sm:px-12 flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Star Ratings */}
                <div className="flex justify-center items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < active.rating
                          ? "fill-amber-500 text-amber-500"
                          : "text-slate-200 dark:text-slate-800"
                      }
                    />
                  ))}
                </div>

                {/* Recommendation Content */}
                <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed italic max-w-2xl mx-auto font-medium">
                  &ldquo;{active.text}&rdquo;
                </p>

                {/* Colleague Profile metadata */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-500 shadow bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      {active.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {active.role} &middot; <span className="font-semibold text-indigo-600 dark:text-indigo-400">{active.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 mt-10 z-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:scale-105 shadow-sm transition-all duration-200"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5 px-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                      : "w-2 bg-slate-300 dark:bg-slate-800"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:scale-105 shadow-sm transition-all duration-200"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
