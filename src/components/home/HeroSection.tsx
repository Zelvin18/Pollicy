"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=85&auto=format&fit=crop";

const WORDS = ["Data", "Design", "Technology", "Justice", "Community"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setFading(false);
      }, 350);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="African women collaborating with technology"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-brand-orange/10 blur-3xl rounded-full" />
      </div>

      {/* Large outline circles — right side */}
      <div className="hidden md:block absolute right-[-90px] top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full pointer-events-none z-10"
        style={{ border: "2px solid rgba(232,117,26,0.40)" }} />
      <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-[290px] h-[290px] rounded-full pointer-events-none z-10"
        style={{ border: "1.5px solid rgba(232,117,26,0.25)" }} />
      <div className="hidden md:block absolute right-[65px] top-1/2 -translate-y-1/2 w-[145px] h-[145px] rounded-full pointer-events-none z-10"
        style={{ border: "1px solid rgba(232,117,26,0.18)" }} />

      {/* Floating orange circles — one big logo-sized + varied smaller */}
      {/* BIG one — same size as Pollicy logo circle (40px) */}
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:40, height:40, top:"42%", right:"30%", opacity:0.55, animation:"floatA 6s ease-in-out infinite" }} />
      {/* Medium */}
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:22, height:22, top:"18%", right:"22%", opacity:0.60, animation:"floatB 5s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:20, height:20, top:"72%", right:"35%", opacity:0.42, animation:"floatA 6s ease-in-out infinite 1.5s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:18, height:18, top:"62%", left:"6%", opacity:0.35, animation:"floatB 6.5s ease-in-out infinite 1s" }} />
      {/* Small */}
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:12, height:12, top:"55%", right:"14%", opacity:0.50, animation:"floatB 7s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:10, height:10, top:"38%", right:"48%", opacity:0.32, animation:"floatB 8s ease-in-out infinite 0.8s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:16, height:16, top:"12%", right:"58%", opacity:0.28, animation:"floatA 9s ease-in-out infinite 2s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:8, height:8, top:"28%", left:"18%", opacity:0.25, animation:"floatA 7.5s ease-in-out infinite 3s" }} />
      <div className="absolute pointer-events-none z-10 rounded-full bg-brand-orange"
        style={{ width:14, height:14, top:"82%", left:"30%", opacity:0.22, animation:"floatB 8.5s ease-in-out infinite 0.5s" }} />

      {/* Content — pushed back to far left (no max-w centering) */}
      <div className="relative z-20 w-full container-custom pt-24 pb-48 md:pt-28 md:pb-52">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full mb-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="w-2 h-2 bg-brand-orange rounded-full" />
          <span className="text-brand-orange text-sm font-semibold tracking-wide">
            Pan-African · Feminist · Civic Technology
          </span>
        </div>

        {/* Headline */}
        <h1 className={`font-display font-black leading-[1.0] mb-8 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Harnessing
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ minHeight: "1.1em" }}>
            <span className="text-brand-orange inline-block" style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease" }}>
              {WORDS[wordIndex]}
            </span>
          </span>
          <span className="block text-white/70 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            for Africa&apos;s Future.
          </span>
        </h1>

        {/* Subheadline */}
        <p className={`text-white/65 text-lg md:text-xl max-w-xl leading-relaxed mb-12 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          A feminist collective of technologists, data scientists, creatives and academics
          working at the intersection of data, design and technology — crafting better life
          experiences by harnessing improved data.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Link href="/projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-glow hover:scale-105 text-base">
            Explore Our Work <ArrowRight size={20} />
          </Link>
          <Link href="/about"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/25 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 text-base backdrop-blur-sm">
            About Pollicy
          </Link>
        </div>
      </div>

      {/* Stats — centred full width at bottom of hero */}
      <div className={`absolute bottom-8 left-0 right-0 z-20 px-4 transition-all duration-700 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { value: "3,306+", label: "Women Surveyed" },
              { value: "15+", label: "Countries Reached" },
              { value: "8+", label: "Years of Impact" },
              { value: "50+", label: "Projects Completed" },
            ].map((stat) => (
              <div key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-4 text-center hover:border-brand-orange/50 hover:bg-white/15 transition-all duration-300">
                <div className="font-display font-black text-xl md:text-2xl text-brand-orange mb-1">{stat.value}</div>
                <div className="text-white/55 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue — push up above stats */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        <ChevronDown size={18} className="text-white/30 -mt-2" />
      </div>
    </section>
  );
}
