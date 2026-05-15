"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download } from "lucide-react";

export default function AfroFeministDataPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2021/08/sample-project-1167x1536.jpg" alt="Afro Feminist Data Futures" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/72" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-4 w-fit">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Data Governance</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
            Afro Feminist <span className="text-brand-orange">Data Futures</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">● RUNNING</span>
            <span className="text-white/50 text-sm">Partner: Meta</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Exploring how feminist movements in sub-Saharan Africa can be empowered through the production, sharing, and use of gender data.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://pollicy.org/wp-content/uploads/2021/08/sample-project-1167x1536.jpg" alt="Afro Feminist Data Futures" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>Data has become an indispensable tool to challenge power and create social impact. In working towards gender equity, it is crucial for traditionally marginalised groups to be consulted and have a seat at the table in developing inclusive design processes for data collection, analysis, and release.</p>
                <p>This project sought to better understand how feminist movements in sub-Saharan Africa can be empowered through the production, sharing and use of gender data, and how this knowledge can be translated into actionable recommendations for private technology companies.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-4">Download Report</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { lang: "English", href: "https://pollicy.org/wp-content/uploads/2021/09/Afrofeminist-Data-Futures-Report-ENGLISH.pdf" },
                    { lang: "French", href: "https://pollicy.org/wp-content/uploads/2021/08/Afrofeminist-Data-Futures-Report-FRENCH.pdf" },
                    { lang: "Portuguese", href: "https://pollicy.org/wp-content/uploads/2021/08/Afrofeminist-Data-Futures-Report-PORTUGUESE.pdf" },
                  ].map((d) => (
                    <a key={d.lang} href={d.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-brand-cream border border-brand-gray-mid rounded-full text-brand-dark text-sm font-semibold hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                      <Download size={14} /> {d.lang}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Status:</span><span className="text-green-600 font-semibold ml-2">Running</span></div>
                  <div><span className="text-brand-gray">Partner:</span><span className="text-brand-dark font-semibold ml-2">Meta</span></div>
                  <div><span className="text-brand-gray">Region:</span><span className="text-brand-dark font-semibold ml-2">Sub-Saharan Africa</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Feminist Data", "Inclusion", "Research", "Gender Data"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://pollicy.org/resource/afro-feminist-data-futures-report/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
                Read Full Report <ExternalLink size={16} />
              </a>
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
