"use client";

import { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";

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

export default function VideoSection() {
  const { ref, inView } = useInView();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-padding bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
            <span className="w-2 h-2 bg-brand-orange rounded-full" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
              Pollicy Under 5 Minutes
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-4">
            See what we&apos;re <span className="text-brand-orange">all about.</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto text-sm leading-relaxed">
            Pollicy is focused on influencing a data culture, promoting the use of shared data
            platforms, building analytical capacity, and advocating for digital rights and
            improved data use across Africa.
          </p>
        </div>

        {/* Video embed */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Decorative glow behind the video */}
          <div className="absolute -inset-4 bg-brand-orange/10 rounded-5xl blur-2xl pointer-events-none" />

          <div className="relative rounded-4xl overflow-hidden shadow-card-hover border border-brand-gray-mid">
            {!playing ? (
              /* ── Custom thumbnail / play button ── */
              <div
                className="relative w-full cursor-pointer group"
                style={{ paddingBottom: "56.25%" }}
                onClick={() => setPlaying(true)}
                role="button"
                aria-label="Play Pollicy video"
              >
                {/* YouTube thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/MBaBEAcgbp0/maxresdefault.jpg"
                  alt="Pollicy — what we do"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/30 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 bg-brand-orange/30 rounded-full scale-150 animate-ping" />
                    <div className="relative w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-lg text-white text-xs font-semibold backdrop-blur-sm">
                  Under 5 min
                </div>
              </div>
            ) : (
              /* ── Actual YouTube iframe ── */
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MBaBEAcgbp0?autoplay=1&rel=0&modestbranding=1"
                  title="Pollicy — what we do"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Caption below video */}
          <p className="text-center text-brand-gray text-sm mt-5">
            Learn about Pollicy&apos;s mission, work, and impact across Africa in under 5 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
