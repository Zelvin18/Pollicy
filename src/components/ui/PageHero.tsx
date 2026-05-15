"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  image,
  imageAlt = "Page background",
  children,
}: PageHeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-[#0f0a06]">

      {/* ── Background image — darkened ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Heavy dark overlay so image is visible but subdued */}
        <div className="absolute inset-0 bg-[#0f0a06]/78" />
        {/* Warm orange gradient from bottom-left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-brand-orange/8 blur-3xl rounded-full" />
      </div>

      {/* ── Decorative circles — right side, matching the screenshot ── */}

      {/* Large outline circle — the big one on the right */}
      <div
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none z-10"
        style={{ border: "1.5px solid rgba(232,117,26,0.22)" }}
      />
      {/* Medium outline circle — slightly inside */}
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full pointer-events-none z-10"
        style={{ border: "1px solid rgba(232,117,26,0.13)" }}
      />
      {/* Small outline circle — innermost */}
      <div
        className="absolute right-[60px] top-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full pointer-events-none z-10"
        style={{ border: "1px solid rgba(232,117,26,0.10)" }}
      />

      {/* ── Floating small orange filled circles (Pollicy logo colour) ── */}
      {/* These use CSS keyframe animation defined in globals.css */}
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 10, height: 10,
          top: "22%", right: "28%",
          opacity: 0.7,
          animation: "floatA 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 6, height: 6,
          top: "55%", right: "18%",
          opacity: 0.5,
          animation: "floatB 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 8, height: 8,
          top: "70%", right: "38%",
          opacity: 0.45,
          animation: "floatA 6s ease-in-out infinite 1.5s",
        }}
      />
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 5, height: 5,
          top: "35%", right: "45%",
          opacity: 0.35,
          animation: "floatB 8s ease-in-out infinite 0.8s",
        }}
      />
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 12, height: 12,
          top: "15%", right: "55%",
          opacity: 0.25,
          animation: "floatA 9s ease-in-out infinite 2s",
        }}
      />
      {/* A couple on the left side too */}
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 7, height: 7,
          top: "60%", left: "8%",
          opacity: 0.3,
          animation: "floatB 6.5s ease-in-out infinite 1s",
        }}
      />
      <div
        className="absolute z-10 pointer-events-none rounded-full bg-brand-orange"
        style={{
          width: 4, height: 4,
          top: "30%", left: "15%",
          opacity: 0.25,
          animation: "floatA 7.5s ease-in-out infinite 3s",
        }}
      />

      {/* ── Content ── */}
      <div className="container-custom relative z-20">

        {/* Badge */}
        {badge && (
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">
              {badge}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1
          className={`font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.0] mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white">{title}</span>
          {titleHighlight && (
            <>
              <br />
              <span className="text-brand-orange">{titleHighlight}</span>
            </>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p
            className={`text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {description}
          </p>
        )}

        {/* Optional extra content (buttons etc.) */}
        {children && (
          <div
            className={`mt-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
