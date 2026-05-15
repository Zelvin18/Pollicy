"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download } from "lucide-react";

export default function AlternateRealitiesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg" alt="Alternate Realities" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/68" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-5 block">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Data Rights &amp; Safety</span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Alternate Realities,<br /><span className="text-brand-orange">Alternate Internets</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-white/50 text-sm">Partner: APC</span>
            <span className="text-white/50 text-sm">·</span>
            <span className="text-white/50 text-sm">Published 2020</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Feminist Research for a Feminist Internet — a landmark study of 3,306 women across five African countries exploring online lived experiences.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg" alt="Alternate Realities research" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "3,306", label: "Women Surveyed" },
                  { value: "5", label: "Countries" },
                  { value: "28%", label: "Experienced OGBV" },
                  { value: "71.2%", label: "OGBV on Facebook" },
                ].map((m) => (
                  <div key={m.label} className="bg-brand-cream rounded-2xl p-4 text-center">
                    <div className="font-display font-black text-2xl text-brand-orange mb-1">{m.value}</div>
                    <div className="text-brand-gray text-xs">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>This research presents findings from a study on the online lived experiences of women in Ethiopia, Kenya, Uganda, Senegal, and South Africa — illustrating that repeated negative encounters fundamentally impact how women navigate and utilise the internet.</p>
                <p>The study found that 28% of women surveyed reported experiencing online gender-based violence (OGBV), with 71.2% of those incidents occurring on Facebook. Legal frameworks in all five countries were found to inadequately protect women online.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Key Findings</h2>
                <div className="space-y-3">
                  {[
                    "28% of women surveyed reported experiencing online gender-based violence",
                    "71.2% of OGBV incidents occurred on Facebook",
                    "Repeated negative encounters fundamentally impact how women navigate the internet",
                    "Legal frameworks in all 5 countries inadequately protect women online",
                    "Platform content moderation consistently fails African language users",
                    "Women self-censor and withdraw from online spaces due to harassment",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-3 p-4 bg-brand-cream rounded-2xl">
                      <div className="w-5 h-5 bg-brand-orange/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-brand-orange text-xs font-bold">→</span>
                      </div>
                      <p className="text-brand-gray text-sm">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-4">Resources</h2>
                <div className="space-y-3">
                  <a href="https://pollicy.org/resource/alternate-realities-alternate-internets-feminist-research-for-a-feminist-internet/" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-brand-cream rounded-2xl hover:bg-brand-orange/5 transition-all duration-300">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-all duration-300">
                      <Download size={16} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Report</span>
                      <h3 className="font-display font-bold text-brand-dark text-sm group-hover:text-brand-orange transition-colors duration-300">Alternate Realities, Alternate Internets: Feminist Research for a Feminist Internet</h3>
                      <p className="text-brand-gray text-xs">Neema Iyer, Bonnita Nyamwire, Sandra Nabulega · Aug 2021</p>
                    </div>
                    <ExternalLink size={16} className="text-brand-gray group-hover:text-brand-orange transition-colors duration-300 shrink-0" />
                  </a>
                  <a href="https://ogbv.pollicy.org/legal_analysis.pdf" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-brand-cream rounded-2xl hover:bg-brand-orange/5 transition-all duration-300">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-all duration-300">
                      <Download size={16} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Legal Analysis</span>
                      <h3 className="font-display font-bold text-brand-dark text-sm group-hover:text-brand-orange transition-colors duration-300">Comparative Analysis of Legal Frameworks in Ethiopia, Kenya, Senegal, South Africa, and Uganda</h3>
                    </div>
                    <ExternalLink size={16} className="text-brand-gray group-hover:text-brand-orange transition-colors duration-300 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Partner:</span><span className="text-brand-dark font-semibold ml-2">APC</span></div>
                  <div><span className="text-brand-gray">Published:</span><span className="text-brand-dark font-semibold ml-2">2020 / 2021</span></div>
                  <div><span className="text-brand-gray">Surveyed:</span><span className="text-brand-dark font-semibold ml-2">3,306 women</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Countries</h3>
                <div className="flex flex-wrap gap-2">
                  {["Ethiopia","Kenya","Uganda","Senegal","South Africa"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://ogbv.pollicy.org/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
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
