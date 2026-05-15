"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { workPillars } from "@/lib/data";

const PILLAR_IMAGES = [
  "https://pollicy.org/wp-content/uploads/2021/08/what-we-do-01-1536x1536.png",
  "https://pollicy.org/wp-content/uploads/2021/08/what-we-do-04-1536x1536.png",
  "https://pollicy.org/wp-content/uploads/2021/08/what-we-do-03-1536x1536.png",
  "https://pollicy.org/wp-content/uploads/2021/08/what-we-do-02-1536x1536.png",
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function WhatWeDoSection() {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">What We Do</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brand-dark max-w-2xl leading-tight">
              Our work focuses on{" "}
              <span className="text-brand-orange">responsible data</span> for Africa.
            </h2>
            <p className="text-brand-gray max-w-sm text-base leading-relaxed">
              Influencing a culture of responsible data use, promoting appropriate data governance
              and advocating for policies that support an enabling data ecosystem.
            </p>
          </div>
        </div>

        {/* 2×2 grid — image left, text right layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workPillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`group flex flex-col sm:flex-row bg-brand-cream rounded-3xl overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, minHeight: "180px" }}
            >
              {/* Square image — fixed 160px wide, full height */}
              <div className="relative w-full h-36 sm:w-40 sm:h-auto shrink-0 overflow-hidden">
                <Image
                  src={PILLAR_IMAGES[i]}
                  alt={pillar.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="160px"
                />
                {/* Number overlay */}
                <div className="absolute top-3 left-3 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-display font-black text-xs">{pillar.number}</span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <h3 className="font-display font-black text-lg text-brand-dark mb-2 group-hover:text-brand-orange transition-colors duration-300 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>
              </div>

              {/* Right accent */}
              <div className="w-1 bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shrink-0" />
            </div>
          ))}
        </div>

        {/* Quote strip */}
        <div className={`mt-16 bg-brand-dark rounded-3xl p-10 md:p-14 text-center transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-brand-orange text-5xl font-display font-black leading-none mb-4">&ldquo;</div>
          <blockquote className="font-display font-bold text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            By thinking of government as a business, citizens as customers and{" "}
            <span className="text-brand-orange">data as business intelligence</span>, we have the
            potential to re-design how governments and citizens interact.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
