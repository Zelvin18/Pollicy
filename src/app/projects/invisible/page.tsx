"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InvisiblePage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=85&auto=format&fit=crop" alt="Invisible project" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/75" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-5 block">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Data Rights &amp; Safety</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
            <span className="text-brand-orange">(In)</span>Visible
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Exploring the digital threats Muslim Women Human Rights Defenders (MWHRDs) face while working on issues of gender justice and human rights online.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85&auto=format&fit=crop" alt="Women human rights defenders" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>This report explores the digital threats Muslim Women Human Rights Defenders (MWHRDs) face while working on issues of gender justice and human rights. MWHRDs operate at the intersection of multiple marginalised identities — as women, as Muslims, and as human rights defenders — making them particularly vulnerable to targeted online attacks.</p>
                <p>The research documents the specific forms of digital harassment, surveillance, and censorship that MWHRDs experience, and examines how these threats affect their ability to do their work safely and effectively.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "🔍", title: "Digital Surveillance", desc: "Monitoring and tracking of activists by state and non-state actors" },
                  { icon: "💬", title: "Online Harassment", desc: "Targeted abuse, doxxing, and coordinated attacks" },
                  { icon: "🚫", title: "Censorship", desc: "Content removal and account suspension targeting MWHRDs" },
                ].map((item) => (
                  <div key={item.title} className="bg-brand-cream rounded-2xl p-5">
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h3 className="font-display font-bold text-brand-dark text-sm mb-2">{item.title}</h3>
                    <p className="text-brand-gray text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Category:</span><span className="text-brand-dark font-semibold ml-2">Data Rights &amp; Safety</span></div>
                  <div><span className="text-brand-gray">Year:</span><span className="text-brand-dark font-semibold ml-2">2022</span></div>
                  <div><span className="text-brand-gray">Focus:</span><span className="text-brand-dark font-semibold ml-2">Muslim Women HRDs</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Rights","Women","Human Rights","Online Safety","Surveillance"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="container-custom text-center">
          <h2 className="font-display font-black text-3xl text-white mb-4">Explore more projects</h2>
          <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
