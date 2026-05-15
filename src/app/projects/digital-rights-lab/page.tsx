"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DigitalRightsLabPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=85&auto=format&fit=crop" alt="Digital Rights Lab" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/75" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-4 w-fit">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Data Rights &amp; Safety</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
            Digital Rights <span className="text-brand-orange">Lab</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A creative virtual space for learning, exchanging ideas, and commemorating notable milestones in digital rights across Africa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85&auto=format&fit=crop" alt="Digital rights learning" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>The Digital Rights Lab is a creative virtual space designed to foster learning, knowledge exchange, and commemoration of key milestones in the digital rights movement across Africa.</p>
                <p>The Lab brings together activists, researchers, technologists, and community members to explore the evolving landscape of digital rights — from internet shutdowns and surveillance to platform accountability and data governance.</p>
                <p>Through workshops, webinars, and collaborative research, the Digital Rights Lab builds capacity among African civil society to engage meaningfully with digital rights issues.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "🎓", title: "Learning", desc: "Workshops and training on digital rights topics for civil society" },
                  { icon: "💡", title: "Exchange", desc: "Knowledge sharing between activists, researchers, and technologists" },
                  { icon: "🏆", title: "Commemoration", desc: "Marking milestones in Africa's digital rights movement" },
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
                  <div><span className="text-brand-gray">Format:</span><span className="text-brand-dark font-semibold ml-2">Virtual</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Rights","Internet Shutdowns","Surveillance","Platform Accountability","Civil Society"].map((t) => (
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
