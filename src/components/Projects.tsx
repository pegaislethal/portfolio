"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/utils/mockData";
import { Search, ExternalLink, X, Grid, Cpu, Terminal, Layers, Smartphone } from "lucide-react";
import { Github } from "./SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [category, setCategory] = useState<"All" | "Frontend" | "Backend" | "Fullstack" | "Mobile">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = category === "All" || project.category === category;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend":
        return <Layers size={14} />;
      case "Backend":
        return <Terminal size={14} />;
      case "Mobile":
        return <Smartphone size={14} />;
      default:
        return <Grid size={14} />;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-slate-50/30 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Background radial spotlights */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Featured Projects
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Controls: Search and Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 order-2 md:order-1">
            {(["All", "Fullstack", "Frontend", "Backend", "Mobile"] as const).map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/10"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-350 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700"
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search project or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Grid of Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl overflow-hidden glass-card border border-slate-100 dark:border-slate-900/50 hover:border-indigo-500/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-all duration-300 z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Summary Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Badges and action bar */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/5 text-indigo-600 dark:text-indigo-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if nothing matches query */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects match your search query or filter selection.
            </p>
          </div>
        )}
      </div>

      {/* Modern Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 no-scrollbar"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 z-20 transition-all duration-200"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Visual side */}
                <div className="md:col-span-5 relative h-56 md:h-auto min-h-[240px] bg-slate-100 dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Content side */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-3 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Project Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-650 dark:text-slate-400 leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-2.5">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-900">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-indigo-600/10 hover:scale-[1.03] transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 text-xs font-semibold flex items-center gap-2 hover:scale-[1.03] transition-all duration-200"
                      >
                        <Github size={14} />
                        <span>View Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
