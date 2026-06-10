"use client";

import React, { useState } from "react";
import { TIMELINE_EXPERIENCE } from "@/utils/mockData";
import { Briefcase, Calendar, CheckSquare, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [filter, setFilter] = useState<"all" | "job" | "freelance" | "internship">("all");

  const filteredExperience = TIMELINE_EXPERIENCE.filter(
    (exp) => filter === "all" || exp.type === filter
  );

  return (
    <section id="experience" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 dark:bg-purple-500/2 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Career Journey
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Work History & Milestones
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {[
            { id: "all", label: "All Experiences" },
            { id: "job", label: "Full-Time Jobs" },
            { id: "freelance", label: "Freelance Projects" },
            { id: "internship", label: "Internships" },
          ].map((pill) => {
            const isActive = filter === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setFilter(pill.id as typeof filter)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "bg-slate-950 border-slate-950 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                layout
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-500 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-indigo-500/20" />

                {/* Main Card */}
                <div className="p-6 rounded-2xl glass-card border border-slate-100 dark:border-slate-900/50 group-hover:border-indigo-500/20 group-hover:shadow-md transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {exp.type === "job"
                          ? "Full-Time"
                          : exp.type === "freelance"
                          ? "Contract"
                          : "Internship"}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1.5">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-800/50 self-start md:self-center">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements Checklist */}
                  <div className="space-y-2.5 mb-5">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckSquare size={13} className="text-indigo-500" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-2 pl-1">
                      {exp.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology badging tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-900">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
