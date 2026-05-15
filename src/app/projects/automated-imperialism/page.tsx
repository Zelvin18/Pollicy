"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download } from "lucide-react";

export default function AutomatedImperialismPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2021/10/Project-thumbnails-17.jpg" alt="Digital Extractivism" fill priority className="object-cover object-center" sizes="100vw" />
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
          <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Automated Imperialism,<br /><span className="text-brand-orange">Expansionist Dreams</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-white/50 text-sm">Partners: Omidyar Network · Stanford PACS</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A project identifying the key methods of digital extractivism in Africa, showcasing case studies and providing policy responses to tackle these practices.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://pollicy.org/wp-content/uploads/2021/10/Project-thumbnails-17.jpg" alt="Digital Extractivism" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>During the desk review for this paper, nine methods of digital extractivism were identified, studied, and explained. These methods include digital labour, data extraction, illicit financial flows, natural resource mining, infrastructure monopolies, digital lending, funding structures, beta testing, and platform governance.</p>
                <p>Information was obtained from an extensive desk review of academic literature, thought pieces, blog posts, and in-depth interviews with key experts.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Nine Methods of Digital Extractivism</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Digital Labour","Data Extraction","Illicit Financial Flows","Natural Resource Mining","Infrastructure Monopolies","Digital Lending","Funding Structures","Beta Testing","Platform Governance"].map((m, i) => (
                    <div key={m} className="bg-brand-cream rounded-2xl p-4 flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">{i + 1}</span>
                      <span className="text-brand-dark text-sm font-semibold">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://pollicy.org/wp-content/uploads/2021/10/Automated-Imperialism-Expansionist-Dreams-Exploring-Digital-Extractivism-in-Africa_2-1.pdf"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
                <Download size={16} /> Download PDF
              </a>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Partners:</span><span className="text-brand-dark font-semibold ml-2">Omidyar Network, Stanford PACS</span></div>
                  <div><span className="text-brand-gray">Author:</span><span className="text-brand-dark font-semibold ml-2">Neema Iyer</span></div>
                  <div><span className="text-brand-gray">Year:</span><span className="text-brand-dark font-semibold ml-2">2021</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Extractivism","Research","Tech Policy","Africa"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://pollicy.org/digitalextractivism/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-dark text-white font-bold rounded-2xl hover:bg-brand-orange transition-all duration-300">
                Explore Project Site <ExternalLink size={16} />
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
