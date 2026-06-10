"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight, Loader2, FileText, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/utils/mockData";

export default function ResumeViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [scale, setScale] = useState(1.1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const pdfUrl = "/resume.pdf";

  useEffect(() => {
    let active = true;

    // Load PDFJS from CDN
    const loadPdfJS = async () => {
      try {
        if (!(window as any).pdfjsLib) {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js";
          script.async = true;
          document.body.appendChild(script);

          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error("Failed to load PDF.js script"));
          });
        }

        const pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

        if (!active) return;
        
        // Load Document
        const doc = await pdfjsLib.getDocument(pdfUrl).promise;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setLoading(false);
      } catch (err) {
        console.warn("Could not render actual resume.pdf (File may be missing in /public). Displaying premium mock resume.", err);
        if (active) {
          setError(true);
          setLoading(false);
        }
      }
    };

    loadPdfJS();

    return () => {
      active = false;
    };
  }, []);

  // Render Page
  useEffect(() => {
    if (!pdfDoc || error) return;

    let renderTask: any = null;

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(pageNum);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        if (renderTask) {
          renderTask.cancel();
        }

        renderTask = page.render(renderContext);
        await renderTask.promise;
      } catch (err: any) {
        if (err.name !== "RenderingCancelledException") {
          console.error("PDF render page error:", err);
        }
      }
    };

    renderPage();

    return () => {
      if (renderTask) renderTask.cancel();
    };
  }, [pdfDoc, pageNum, scale, error]);

  // Fullscreen handlers
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handlePrevPage = () => {
    if (pageNum > 1) setPageNum(pageNum - 1);
  };

  const handleNextPage = () => {
    if (pageNum < numPages) setPageNum(pageNum + 1);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(2.5, prev + 0.2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(0.6, prev - 0.2));
  };

  return (
    <section id="resume" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/2 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Curriculum Vitae
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Interactive Resume Viewer
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left panel - stats and downloads */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Resume Statistics
            </h3>

            {/* Quick credentials cards */}
            <div className="space-y-4">
              {[
                { label: "Core Competency", val: "Full-Stack System Engineering", desc: "Front-end UX + Backend distributed microservices Architecture." },
                { label: "Total Techs Used", val: "18+ Technologies", desc: "Next.js, TypeScript, Node.js, Go, Python, AWS, Docker." },
                { label: "Production Projects", val: "24+ Applications", desc: "E-Commerce engines, Real-time charts, AI prompted LLM workspaces." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl glass-card border border-slate-100 dark:border-slate-900 flex items-start gap-3.5">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </h4>
                    <p className="font-bold text-slate-900 dark:text-white text-sm mt-1">
                      {item.val}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Callout Download Anchor */}
            <div className="p-6 rounded-2xl bg-indigo-600/5 dark:bg-indigo-600/10 border border-indigo-600/20 space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Looking for a copy?
              </h4>
              <p className="text-xs text-slate-650 dark:text-slate-400 leading-normal">
                You can download the compiled PDF version of the CV directly to save it locally or attach to applications.
              </p>
              <a
                href={pdfUrl}
                download
                className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:scale-[1.02] transition-all duration-300 text-sm"
              >
                <Download size={16} />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right panel - PDF Canvas viewer */}
          <div className="lg:col-span-8 flex flex-col items-center">
            {/* Viewer container with ref for fullscreen */}
            <div
              ref={containerRef}
              className={`w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner flex flex-col justify-between overflow-hidden ${
                isFullscreen ? "h-screen p-4" : "h-[620px]"
              }`}
            >
              {/* Toolbar */}
              <div className="px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-slate-700 dark:text-slate-350">
                {/* File detail tag */}
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <FileText size={15} className="text-indigo-500" />
                  <span className="hidden sm:inline">rohit_resume.pdf</span>
                </div>

                {/* Page Navigation */}
                {!error && !loading && (
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={handlePrevPage}
                      disabled={pageNum <= 1}
                      className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 transition-colors"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-[11px] font-bold tracking-wider">
                      PAGE {pageNum} / {numPages}
                    </span>
                    <button
                      onClick={handleNextPage}
                      disabled={pageNum >= numPages}
                      className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 transition-colors"
                      aria-label="Next Page"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}

                {/* Zoom Controls & Maximize */}
                <div className="flex items-center gap-1.5">
                  {!error && !loading && (
                    <>
                      <button
                        onClick={handleZoomOut}
                        className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Zoom Out"
                      >
                        <ZoomOut size={16} />
                      </button>
                      <span className="text-[11px] font-bold w-10 text-center tracking-wider">
                        {Math.round(scale * 100)}%
                      </span>
                      <button
                        onClick={handleZoomIn}
                        className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Zoom In"
                      >
                        <ZoomIn size={16} />
                      </button>
                    </>
                  )}
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1.5"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>

              {/* Viewport Canvas or Mock Document */}
              <div className="flex-1 overflow-auto p-4 flex justify-center items-start no-scrollbar bg-slate-50 dark:bg-slate-950">
                {loading && (
                  <div className="flex flex-col items-center justify-center h-full gap-3 py-16">
                    <Loader2 size={36} className="text-indigo-500 animate-spin" />
                    <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Loading Document...</span>
                  </div>
                )}

                {error && !loading && (
                  /* Premium Styled Mock Resume Document */
                  <div className="w-full max-w-[550px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl shadow-lg p-6 sm:p-8 text-left space-y-6 text-slate-800 dark:text-slate-200 relative">
                    <div className="absolute top-4 right-4 text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-full">
                      CV Preview Mode
                    </div>

                    {/* Header */}
                    <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                      <h4 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                        {PROFILE.name}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mt-1.5">
                        {PROFILE.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        <span>Email: {PROFILE.socials.email}</span>
                        <span>Github: github.com/rohit</span>
                        <span>LinkedIn: linkedin.com/in/rohit</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider border-l-2 border-indigo-500 pl-2">
                        Summary
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Highly skilled Full-Stack Developer with 6+ years of expertise designing and managing modern cloud services, 
                        database networks, microservice architectures, and fluid client-side dashboard panels. Focused on high-performance metrics.
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="space-y-4">
                      <h5 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider border-l-2 border-indigo-500 pl-2">
                        Experience Highlights
                      </h5>
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                            <span>Senior Full-Stack Architect @ Nova Technologies</span>
                            <span className="text-[10px] text-slate-400">2023 - Pres</span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Lead engineer on core distributed services. Re-designed the React dashboards to Next.js 15, lowering startup latency by 42%. Built billing gateways using Go and Redis.
                          </p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                            <span>Full-Stack Engineer @ Apex Ledger Corp</span>
                            <span className="text-[10px] text-slate-400">2021 - 2023</span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Created real-time financial tracking widgets. Optimized backend queries in Node.js/Postgres, boosting analytics lookup times by 30%.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2.5">
                      <h5 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider border-l-2 border-indigo-500 pl-2">
                        Technical Expertise
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {["Next.js", "TypeScript", "Node.js", "Go", "FastAPI", "Postgres", "AWS", "Docker", "Stripe", "Framer Motion"].map((sk) => (
                          <span key={sk} className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {!loading && !error && (
                  <div className="shadow-lg border border-slate-200 dark:border-slate-800 rounded overflow-hidden">
                    <canvas ref={canvasRef} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
