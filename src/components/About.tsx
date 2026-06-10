"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE, EDUCATION } from "@/utils/mockData";
import { Award, Briefcase, GraduationCap, Heart, CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: `${PROFILE.experienceYears}+ Years`, desc: "In backend & full-stack roles", color: "indigo" },
    { label: "Projects Completed", value: `${PROFILE.projectsCount}+ Projects`, desc: "Constructed & deployed apps", color: "purple" },
    { label: "Technologies Used", value: `${PROFILE.technologiesCount}+`, desc: "Dev tools & frameworks", color: "cyan" },
    { label: "Certifications", value: `${PROFILE.certificationsCount}+ Certifications`, desc: "Including Django credentials", color: "emerald" },
  ];

  const strengths = [
    "Robust API & Backend Architecture",
    "Database Modeling & Query Optimization",
    "Clean, Maintainable Code Design",
    "Competent Full-Stack Delivery",
  ];

  const interests = [
    "Distributed Systems & Caching",
    "Database Design & SQL Optimization",
    "AI & Machine Learning Basics",
    "UI/UX Design Systems",
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Background & Approach
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase size={20} className="text-indigo-500" />
              <span>Professional Summary</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a backend-focused Full-Stack Developer based in Kathmandu, Nepal. My core expertise lies in designing robust backend structures, constructing efficient APIs, and managing databases, while maintaining competent full-stack delivery capabilities.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              My engineering philosophy revolves around simplicity, performance, and attention to detail. Whether optimizing database queries in PostgreSQL, writing backend servers in Django or Node.js, or implementing interactive client-side interfaces in React, I strive to achieve clean code and optimal metrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Strengths */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 tracking-wider uppercase flex items-center gap-2">
                  <Award size={16} className="text-indigo-500" />
                  <span>Key Strengths</span>
                </h4>
                <ul className="space-y-2">
                  {strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 tracking-wider uppercase flex items-center gap-2">
                  <Heart size={16} className="text-indigo-500" />
                  <span>Interests</span>
                </h4>
                <ul className="space-y-2">
                  {interests.map((int, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                      <span>{int}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-900">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <GraduationCap size={20} className="text-indigo-500" />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-2xl glass-card relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                      {edu.school}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block - Statistics Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const borderColors: { [key: string]: string } = {
                indigo: "hover:border-indigo-500/30 dark:hover:border-indigo-500/50 hover:shadow-indigo-500/5",
                purple: "hover:border-purple-500/30 dark:hover:border-purple-500/50 hover:shadow-purple-500/5",
                cyan: "hover:border-cyan-500/30 dark:hover:border-cyan-500/50 hover:shadow-cyan-500/5",
                emerald: "hover:border-emerald-500/30 dark:hover:border-emerald-500/50 hover:shadow-emerald-500/5",
              };
              const glowColors: { [key: string]: string } = {
                indigo: "bg-indigo-500/10",
                purple: "bg-purple-500/10",
                cyan: "bg-cyan-500/10",
                emerald: "bg-emerald-500/10",
              };
              const textColors: { [key: string]: string } = {
                indigo: "text-indigo-600 dark:text-indigo-400",
                purple: "text-purple-600 dark:text-purple-400",
                cyan: "text-cyan-600 dark:text-cyan-400",
                emerald: "text-emerald-600 dark:text-emerald-400",
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`p-6 rounded-2xl glass-card flex flex-col justify-between border border-slate-100 dark:border-slate-900/50 cursor-default hover:scale-[1.03] transition-all duration-300 ${borderColors[stat.color]}`}
                >
                  <div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${glowColors[stat.color]} ${textColors[stat.color]} mb-4`}>
                      {stat.label}
                    </span>
                    <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-normal">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
