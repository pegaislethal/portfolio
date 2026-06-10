"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "./SocialIcons";
import { PROFILE } from "@/utils/mockData";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Panel */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={scrollToTop}
              className="text-lg font-bold tracking-tight text-slate-950 dark:text-white flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span>Rohit.dev</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Premium Full-Stack Developer portfolio showcasing dynamic layouts, responsive services, micro-interactions, and visual excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Section Index</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {[
                { label: "Home", href: "#home" },
                { label: "About Me", href: "#about" },
                { label: "Skills Inventory", href: "#skills" },
                { label: "Work Experience", href: "#experience" },
                { label: "Projects Showcase", href: "#projects" },
                { label: "Resume / CV", href: "#resume" },
                { label: "Certifications", href: "#certifications" },
                { label: "Contact Form", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-500 hover:text-indigo-600 dark:text-slate-450 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Resume Quick Access */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect</h4>
            <div className="flex items-center gap-2.5">
              {[
                { icon: <Github size={16} />, href: PROFILE.socials.github },
                { icon: <Linkedin size={16} />, href: PROFILE.socials.linkedin },
                { icon: <Twitter size={16} />, href: PROFILE.socials.twitter },
                { icon: <Mail size={16} />, href: `mailto:${PROFILE.socials.email}` },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-all duration-200"
                  aria-label="Social Link"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 leading-normal pt-1">
              Currently accepting selected freelance projects and architectural consultations.
            </p>
          </div>
        </div>

        {/* Lower row */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          <div>
            &copy; {currentYear} Rohit. All rights reserved. Designed and developed with care.
          </div>
          
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 text-slate-500 dark:text-slate-450 hover:text-indigo-500 dark:hover:text-white bg-slate-50 dark:bg-slate-900 flex items-center gap-1.5 transition-all duration-200 text-xs font-semibold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            key="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 hover:bg-indigo-750 text-white shadow-xl shadow-indigo-600/20 z-30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-indigo-500/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
