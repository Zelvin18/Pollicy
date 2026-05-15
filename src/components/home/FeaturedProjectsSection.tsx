"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: "alternate-realities",
    number: "01",
    title: "Alternate Realities, Alternate Internets",
    category: "Data Rights & Safety",
    description: "Feminist Research for a Feminist Internet — a landmark study of 3,306 women across Ethiopia, Kenya, Uganda, Senegal, and South Africa exploring online lived experiences and gender-based violence.",
    metrics: [{ value: "3,306", label: "Women Surveyed" }, { value: "5", label: "Countries" }, { value: "28%", label: "Experienced OGBV" }],
    tags: ["#Research", "#OGBV", "#FeministInternet"],
    href: "/research",
    image: "https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg",
    accent: "bg-brand-orange",
  },
  {
    id: "datafest",
    number: "02",
    title: "DataFest Africa",
    category: "Events & Community",
    description: "Africa's premier annual data festival — 7 editions, 250+ stakeholders, two cities in 2025.",
    href: "/events",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    accent: "bg-teal-600",
  },
  {
    id: "digital-safetea",
    number: "03",
    title: "Digital SafeTea",
    category: "Digital Rights",
    description: "Interactive fiction game championing online safety for African women.",
    href: "/projects/digital-safetea",
    image: "https://pollicy.org/wp-content/uploads/2021/09/Project-thumbnails-14.jpg",
    accent: "bg-purple-600",
  },
  {
    id: "vote-women",
    number: "04",
    title: "VOTE: Women",
    category: "Women in Politics",
    description: "A leadership springboard for women political aspirants across Tanzania, Uganda, and Senegal.",
    href: "/projects/vote-women",
    image: "https://pollicy.org/wp-content/uploads/2021/08/eye-for-ebony-402231-1200x900-1.jpg",
    accent: "bg-rose-600",
  },
  {
    id: "fake-news",
    number: "05",
    title: "Choose Your Own Fake News",
    category: "Media Literacy",
    description: "Mozilla Creative Media Award-winning game on how misinformation spreads.",
    href: "/resources",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    accent: "bg-amber-600",
  },
];

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

export default function FeaturedProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding bg-brand-cream overflow-hidden" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Featured Projects</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight">
              Work that moves<br /><span className="text-brand-orange">Africa forward.</span>
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all duration-300 group shrink-0">
            View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Layout: big card left + 2 small right, then 3 across */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Big card */}
          <div
            className={`lg:col-span-2 group relative rounded-4xl overflow-hidden transition-all duration-700 hover:shadow-card-hover ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ minHeight: "460px" }}
          >
            <div className="absolute inset-0">
              <Image src={PROJECTS[0].image} alt={PROJECTS[0].title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="(max-width:1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
            </div>
            <div className="relative z-10 p-9 flex flex-col justify-between" style={{ minHeight: "460px" }}>
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full uppercase tracking-wider">{PROJECTS[0].category}</span>
                <span className="font-display font-black text-7xl text-white/8 leading-none">{PROJECTS[0].number}</span>
              </div>
              <div>
                <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-3 leading-tight">{PROJECTS[0].title}</h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-lg mb-6">{PROJECTS[0].description}</p>
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {PROJECTS[0].metrics!.map((m) => (
                    <div key={m.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="font-display font-black text-xl text-brand-orange">{m.value}</div>
                      <div className="text-white/50 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={PROJECTS[0].href} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 text-sm">
                  Explore Project <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column — 2 stacked */}
          <div className="flex flex-col gap-5">
            {PROJECTS.slice(1, 3).map((p, i) => (
              <Link
                key={p.id}
                href={p.href}
                className={`group relative rounded-3xl overflow-hidden flex-1 transition-all duration-700 hover:shadow-card-hover hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms`, minHeight: "215px" }}
              >
                <div className="absolute inset-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 p-6 flex flex-col justify-between" style={{ minHeight: "215px" }}>
                  <span className="inline-block px-3 py-1 bg-brand-orange/80 text-white text-xs font-bold rounded-full uppercase tracking-wider self-start">{p.category}</span>
                  <div>
                    <h3 className="font-display font-black text-lg text-white mb-2 leading-tight group-hover:text-brand-orange transition-colors duration-300">{p.title}</h3>
                    <span className="inline-flex items-center gap-1 text-brand-orange text-xs font-bold">Explore <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row — 3 cards */}
          {PROJECTS.slice(2, 5).map((p, i) => (
            <Link
              key={p.id + "-bottom"}
              href={p.href}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-card-hover hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(i + 3) * 80}ms`, minHeight: "200px" }}
            >
              <div className="absolute inset-0">
                <Image src={p.image} alt={p.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>
              <div className="relative z-10 p-6 flex flex-col justify-between" style={{ minHeight: "200px" }}>
                <span className="inline-block px-3 py-1 bg-brand-orange/80 text-white text-xs font-bold rounded-full uppercase tracking-wider self-start">{p.category}</span>
                <div>
                  <h3 className="font-display font-black text-base text-white mb-1 leading-tight group-hover:text-brand-orange transition-colors duration-300">{p.title}</h3>
                  <p className="text-white/55 text-xs line-clamp-2 mb-2">{p.description}</p>
                  <span className="inline-flex items-center gap-1 text-brand-orange text-xs font-bold">Explore <ArrowRight size={12} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
