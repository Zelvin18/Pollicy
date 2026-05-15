"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const PARTNERS = [
  { name: "Hivos", href: "https://hivos.org/", initial: "H", color: "bg-orange-500" },
  { name: "Mozilla Foundation", href: "https://foundation.mozilla.org/", initial: "M", color: "bg-red-600" },
  { name: "Hewlett Foundation", href: "https://hewlett.org/", initial: "H", color: "bg-blue-600" },
  { name: "Internet Society Foundation", href: "https://isocfoundation.org/", initial: "I", color: "bg-teal-600" },
  { name: "APC", href: "https://www.apc.org/", initial: "A", color: "bg-purple-600" },
  { name: "NED", href: "https://www.ned.org/", initial: "N", color: "bg-indigo-600" },
  { name: "GIZ", href: "https://www.giz.de/", initial: "G", color: "bg-green-600" },
  { name: "NDI", href: "https://www.ndi.org/", initial: "N", color: "bg-blue-700" },
  { name: "Aga Khan University", href: "https://www.aku.edu/", initial: "A", color: "bg-emerald-600" },
  { name: "Defend Defenders", href: "https://defenddefenders.org/", initial: "D", color: "bg-rose-600" },
  { name: "Voice Global", href: "https://voice.global/", initial: "V", color: "bg-amber-600" },
  { name: "Code for Science", href: "https://codeforscience.org/", initial: "C", color: "bg-cyan-600" },
];

const COLLAGE_IMAGES = [
  "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
  "https://pollicy.org/wp-content/uploads/2021/09/collage-b-05.png",
  "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
];

export default function PartnersSection() {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
            <span className="w-2 h-2 bg-brand-orange rounded-full" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Partners &amp; Collaborations</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-4">
            Building Africa&apos;s digital future <span className="text-brand-orange">together.</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto text-sm leading-relaxed">
            Pollicy works with academics, data scientists, civil society organisations, private companies, and technologists across Africa and the world.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-12">
          {PARTNERS.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-brand-cream rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className={`w-10 h-10 ${p.color} rounded-full flex items-center justify-center font-display font-black text-white text-sm group-hover:scale-110 transition-transform duration-300`}>
                {p.initial}
              </div>
              <span className="text-brand-dark text-xs font-semibold text-center leading-tight group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                {p.name}
              </span>
            </a>
          ))}
        </div>

        {/* Collage strip */}
        <div className={`grid grid-cols-3 gap-3 mb-12 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {COLLAGE_IMAGES.map((src, i) => (
            <div key={i} className="relative h-44 rounded-3xl overflow-hidden">
              <Image src={src} alt="Pollicy community" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="33vw" />
              <div className="absolute inset-0 bg-brand-dark/20 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-orange transition-all duration-300 hover:scale-105 hover:shadow-glow">
            Become a Partner <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
