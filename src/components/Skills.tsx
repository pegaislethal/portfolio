"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/utils/mockData";
import { Code, Server, Database, Cloud, Cpu, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  // Map category title/index to appropriate icon
  const getCategoryIcon = (title: string) => {
    const term = title.toLowerCase();
    if (term.includes("core")) return <Server className="text-indigo-500" size={20} />;
    if (term.includes("secondary")) return <Code className="text-purple-500" size={20} />;
    if (term.includes("foundational")) return <Cpu className="text-cyan-500" size={20} />;
    return <Terminal className="text-amber-500" size={20} />;
  };

  const getCategoryGradient = (title: string) => {
    const term = title.toLowerCase();
    if (term.includes("core")) return "from-indigo-500 via-indigo-600 to-purple-500";
    if (term.includes("secondary")) return "from-purple-500 via-purple-600 to-cyan-500";
    return "from-cyan-500 via-cyan-600 to-emerald-500";
  };

  return (
    <section id="skills" className="relative py-24 bg-slate-50/30 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Dynamic background highlights */}
      <div className="absolute top-1/3 left-10 w-[250px] h-[250px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-purple-500/5 dark:bg-purple-500/2 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Skills Inventory
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Tech Stack & Capabilities
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: catIdx * 0.05, duration: 0.6 }}
              className="p-6 rounded-2xl glass-card border border-slate-100 dark:border-slate-900/50 hover:shadow-lg hover:shadow-indigo-500/2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-900">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                        <span>{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar container */}
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${getCategoryGradient(category.title)} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
