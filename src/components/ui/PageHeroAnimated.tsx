"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PageHeroAnimatedProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt?: string;
  overlayOpacity?: number;
}

export default function PageHeroAnimated({
  badge,
  title,
  titleHighlight,
  description,
  image,
  imageAlt = "Page background",
  overlayOpacity = 65,
}: PageHeroAnimatedProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const overlayBg = `rgba(10,8,5,${overlayOpacity / 100})`;

  return (
    <section className="relative pt-36 pb-24 overflow-x-hidden overflow-hidden bg-[#0a0805]">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: overlayBg }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[260px] bg-brand-orange/10 blur-3xl rounded-full" />
      </div>

      {/* ── Large outline circles — right side, clearly visible ── */}
      {/* Outermost — biggest, most visible */}
      <div className="hidden md:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full pointer-events-none z-10"
        style={{ border: "2px solid rgba(232,117,26,0.42)" }} />
      {/* Middle */}
      <div className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none z-10"
        style={{ border: "1.5px solid rgba(232,117,26,0.28)" }} />
      {/* Inner */}
      <div className="hidden md:block absolute right-[70px] top-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full pointer-events-none z-10"
        style={{ border: "1px solid rgba(232,117,26,0.20)" }} />

      {/* ── Floating orange circles — one big logo-sized + varied ── */}
      {/* BIG — 40px, same as Pollicy logo circle */}
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:40, height:40, top:"40%", right:"28%", opacity:0.58, animation:"floatA 6s ease-in-out infinite" }} />
      {/* Medium */}
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:24, height:24, top:"18%", right:"22%", opacity:0.62, animation:"floatB 5s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:20, height:20, top:"74%", right:"36%", opacity:0.42, animation:"floatA 6s ease-in-out infinite 1.5s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:18, height:18, top:"64%", left:"7%", opacity:0.36, animation:"floatB 6.5s ease-in-out infinite 1s" }} />
      {/* Small */}
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:12, height:12, top:"56%", right:"15%", opacity:0.50, animation:"floatB 7s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:10, height:10, top:"35%", right:"50%", opacity:0.30, animation:"floatB 8s ease-in-out infinite 0.8s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:16, height:16, top:"13%", right:"60%", opacity:0.26, animation:"floatA 9s ease-in-out infinite 2s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:8, height:8, top:"30%", left:"20%", opacity:0.22, animation:"floatA 7.5s ease-in-out infinite 3s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:14, height:14, top:"82%", left:"33%", opacity:0.20, animation:"floatB 8.5s ease-in-out infinite 0.5s" }} />

      {/* Content */}
      <div className="container-custom relative z-20">

        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="text-white text-sm font-semibold tracking-wide uppercase">{badge}</span>
        </div>

        <h1 className={`font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.0] mb-6 transition-all duration-700 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="text-white">{title}</span>
          <br />
          <span className="text-brand-orange">{titleHighlight}</span>
        </h1>

        <p className={`text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ color: 'rgba(255,255,255,0.70)' }}>
          {description}
        </p>
      </div>
    </section>
  );
}
