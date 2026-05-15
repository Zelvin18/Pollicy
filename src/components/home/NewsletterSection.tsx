"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Mail } from "lucide-react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function NewsletterSection() {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div
          className={`relative bg-brand-dark rounded-5xl overflow-hidden p-12 md:p-16 lg:p-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-2xl" />
          <div className="absolute top-8 right-8 w-32 h-32 border border-brand-orange/20 rounded-full" />
          <div className="absolute top-16 right-16 w-16 h-16 border border-brand-orange/10 rounded-full" />

          {/* Floating dots */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-brand-orange rounded-full animate-float opacity-60" />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-brand-orange-light rounded-full animate-float-slow opacity-40" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-6">
                <Mail size={14} className="text-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold">Stay Connected</span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
                Join the Pollicy
                <br />
                <span className="text-brand-orange">community.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-md">
                Sign up for Pollicy updates, upcoming events, blogs, careers, podcasts, and more.
                Be part of Africa&apos;s data revolution.
              </p>
            </div>

            {/* Right — Form */}
            <div className="flex-1 w-full max-w-md">
              {subscribed ? (
                <div className="bg-brand-orange/20 border border-brand-orange/30 rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">You&apos;re in!</h3>
                  <p className="text-white/60 text-sm">
                    Welcome to the Pollicy community. Watch your inbox for updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:bg-white/15 transition-all duration-300 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2"
                  >
                    Subscribe to Updates
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-white/30 text-xs text-center">
                    No spam. Unsubscribe at any time. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
