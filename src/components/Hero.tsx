"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, FileText, Download } from "lucide-react";
import { Github, Linkedin, Twitter } from "./SocialIcons";
import Image from "next/image";

const TYPING_ROLES = [
  "Full-Stack Software Engineer",
  "Cloud Solutions Architect",
  "Generative AI Engineer",
  "UI/UX Design Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TYPING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause before backspacing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left text panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 text-xs font-semibold tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
            Available for Core Roles
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Hi, I&apos;m <span className="gradient-text font-black">Rohit</span>
          </h1>

          <div className="h-8 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
            <span>{currentText}</span>
            <span className="inline-block w-[3px] h-[20px] ml-1 bg-indigo-500 animate-pulse" />
          </div>

          <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed mx-auto md:mx-0">
            I build responsive, high-performance SaaS applications and distributed backend networks. 
            Focused on creating clean APIs, robust data services, and pixel-perfect interactive UIs.
          </p>

          {/* Social quicklinks */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
              { icon: <Twitter size={20} />, href: "https://twitter.com" },
              { icon: <Mail size={20} />, href: "mailto:rohit.dev@example.com" },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white hover:scale-110 shadow-sm transition-all duration-300"
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 font-medium inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-950 dark:bg-slate-100 hover:bg-slate-900 dark:hover:bg-white text-white dark:text-slate-900 font-medium inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Avatar panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Glowing rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-[30px] animate-pulse" />
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 opacity-30 animate-spin" style={{ animationDuration: "12s" }} />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white dark:border-slate-950 overflow-hidden shadow-2xl z-10 bg-slate-100 dark:bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Rohit Profile Headshot"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </motion.div>
      </div>

      {/* Down arrow link */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => scrollToSection("about")}
          className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white shadow-sm transition-colors"
          aria-label="Scroll to About Me"
        >
          <ArrowDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
