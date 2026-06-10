"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate sending email to REST endpoint
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Get In Touch
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s Build Together
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left panel - location details & social contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Context cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                Have an project idea, job vacancy, or contract task? Fill out the form or reach out via email directly.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-xl glass-card border border-slate-100 dark:border-slate-900/50 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Address</h4>
                    <a href="mailto:rohit.dev@example.com" className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-450 transition-colors">
                      rohit.dev@example.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass-card border border-slate-100 dark:border-slate-900/50 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Primary Location</h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      San Francisco, CA, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive location map panel */}
            <div className="p-6 rounded-2xl glass-card border border-slate-100 dark:border-slate-900/50 bg-gradient-to-br from-indigo-500/5 via-cyan-500/0 to-purple-500/5 relative overflow-hidden flex-1 min-h-[160px] flex flex-col justify-between">
              {/* Pulse locator map detail */}
              <div className="absolute inset-0 opacity-15 dark:opacity-[0.06] grid-bg" />
              <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/25 self-start">
                <Sparkles size={12} className="animate-pulse" />
                <span>Timezone: UTC-7 (Pacific Standard Time)</span>
              </div>

              <div className="relative z-10 pt-8">
                {/* Glowing coordinate pulse */}
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-indigo-500 relative flex items-center justify-center">
                    <span className="absolute h-6 w-6 rounded-full bg-indigo-500/30 animate-ping" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">37.7749&deg; N, 122.4194&deg; W</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  Operating remotely for global clients and teams. Available for select on-site arrangements.
                </p>
              </div>
            </div>

          </div>

          {/* Right panel - Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-100 dark:border-slate-900/50 flex flex-col justify-center h-full min-h-[380px]">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all ${
                            errors.name ? "border-rose-500 dark:border-rose-900" : "border-slate-200 dark:border-slate-800"
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-[10px] font-medium text-rose-500">{errors.name}</p>}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                        <input
                          id="email"
                          type="text"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all ${
                            errors.email ? "border-rose-500 dark:border-rose-900" : "border-slate-200 dark:border-slate-800"
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-[10px] font-medium text-rose-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all ${
                          errors.subject ? "border-rose-500 dark:border-rose-900" : "border-slate-200 dark:border-slate-800"
                        }`}
                        placeholder="Inquiry subject"
                      />
                      {errors.subject && <p className="text-[10px] font-medium text-rose-500">{errors.subject}</p>}
                    </div>

                    {/* Message input */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none ${
                          errors.message ? "border-rose-500 dark:border-rose-900" : "border-slate-200 dark:border-slate-800"
                        }`}
                        placeholder="Detail your request or proposal..."
                      />
                      {errors.message && <p className="text-[10px] font-medium text-rose-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/60 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-300 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Form Success animation overlay */
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-500/20"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                        Thank you for reaching out. Your message has been successfully transmitted and Rohit will get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold transition-colors mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
