"use client";

import React from "react";
import { CERTIFICATIONS, EDUCATION } from "@/utils/mockData";
import { Award, BookOpen, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-slate-50/30 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] bg-purple-500/5 dark:bg-purple-500/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Credentials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Certifications & Education
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Block - Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award size={20} className="text-indigo-500" />
              <span>Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="p-5 rounded-2xl glass-card border border-slate-100 dark:border-slate-900/50 hover:border-indigo-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Badge header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                        {cert.date}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                      <span>ID: {cert.credentialId}</span>
                      <span className="text-indigo-500 font-semibold uppercase tracking-wider text-[9px]">Verified</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Block - Detailed Education */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-indigo-500" />
              <span>Academic Qualifications</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl glass-card border border-slate-100 dark:border-slate-900/50 hover:border-indigo-500/20 hover:scale-[1.01] transition-all duration-300 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {edu.school}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-800/50 self-start sm:self-center">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-900">
                    <h5 className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2">Honors & Focused Electives</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {["Distributed Systems", "Cloud Computing", "Cryptography", "Automated Testing", "Machine Learning"].map((topic) => (
                        <span key={topic} className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/5 text-indigo-600 dark:text-indigo-400">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
