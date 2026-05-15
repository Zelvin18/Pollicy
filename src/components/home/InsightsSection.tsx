"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";

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

const CAT_COLORS: Record<string, string> = {
  "FELLOWSHIP": "bg-purple-100 text-purple-700",
  "DATA GOVERNANCE": "bg-blue-100 text-blue-700",
  "DATA ARTISTRY": "bg-pink-100 text-pink-700",
  "AI & TECHNOLOGY": "bg-emerald-100 text-emerald-700",
  "DATA RIGHTS AND SAFETY": "bg-red-100 text-red-700",
};

export default function InsightsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding bg-brand-dark overflow-hidden" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-5">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Insights, Events &amp; News</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Stories from the<br /><span className="text-brand-orange">frontlines of data.</span>
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all duration-300 group shrink-0">
            Read All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.slice(0, 6).map((post, i) => (
            <a
              key={post.id}
              href={post.href}
              target={post.external ? "_blank" : "_self"}
              rel={post.external ? "noopener noreferrer" : undefined}
              className={`group flex flex-col bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-400 hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${CAT_COLORS[post.category] || "bg-brand-orange/20 text-brand-orange"}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-white/30 text-xs">
                  <Calendar size={11} />{post.date}
                </div>
              </div>
              <div className="font-display font-black text-5xl text-white/5 leading-none mb-2">{post.number}</div>
              <h3 className="font-display font-bold text-white text-sm leading-snug mb-3 group-hover:text-brand-orange transition-colors duration-300 line-clamp-3 flex-1">
                {post.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold group-hover:gap-3 transition-all duration-300 mt-auto">
                Read Article {post.external ? <ExternalLink size={12} /> : <ArrowRight size={12} />}
              </div>
            </a>
          ))}
        </div>

        {/* Scrolling ticker — pure CSS */}
        <div className={`mt-14 overflow-hidden transition-opacity duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, gi) => (
              <div key={gi} className="flex gap-10 shrink-0">
                {["Data Governance","Digital Rights","Feminist Tech","DataFest Africa","Civic Technology","Pan-African","Data Science","Online Safety","AI Ethics","Digital Inclusion"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 text-white/25 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 bg-brand-orange/60 rounded-full" />{tag}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
