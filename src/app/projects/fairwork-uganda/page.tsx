"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function FairworkUgandaPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=85&auto=format&fit=crop" alt="Fairwork Uganda" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/75" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-5 block">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Data Governance</span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Fairwork Uganda <span className="text-brand-orange">Ratings 2023</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A need for pro-worker change — the first year of Fairwork research in Uganda, examining twelve digital location-based platforms.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&auto=format&fit=crop" alt="Digital platform workers" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>In 2023, Fairwork conducted the first year of research in Uganda among twelve digital location-based platforms. The research assessed platforms against five Fairwork principles: fair pay, fair conditions, fair contracts, fair management, and fair representation.</p>
                <p>The findings revealed significant gaps in worker protections across Uganda&apos;s gig economy, with most platforms scoring poorly on fair pay and fair representation. The report calls for urgent pro-worker reforms in platform governance and national labour law.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Five Fairwork Principles</h2>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "Fair Pay", desc: "Workers earn at least the local minimum wage after costs" },
                    { num: "2", title: "Fair Conditions", desc: "Platforms protect workers from safety risks" },
                    { num: "3", title: "Fair Contracts", desc: "Terms are transparent and fair" },
                    { num: "4", title: "Fair Management", desc: "Workers are treated fairly and with dignity" },
                    { num: "5", title: "Fair Representation", desc: "Workers have a collective voice" },
                  ].map((p) => (
                    <div key={p.num} className="flex gap-4 p-4 bg-brand-cream rounded-2xl">
                      <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{p.num}</div>
                      <div>
                        <h3 className="font-display font-bold text-brand-dark text-sm">{p.title}</h3>
                        <p className="text-brand-gray text-xs mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Partner:</span><span className="text-brand-dark font-semibold ml-2">Fairwork Foundation</span></div>
                  <div><span className="text-brand-gray">Year:</span><span className="text-brand-dark font-semibold ml-2">2023</span></div>
                  <div><span className="text-brand-gray">Platforms:</span><span className="text-brand-dark font-semibold ml-2">12 platforms rated</span></div>
                  <div><span className="text-brand-gray">Country:</span><span className="text-brand-dark font-semibold ml-2">Uganda</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Labour","Gig Economy","Uganda","Platform Work","Workers Rights"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://pollicy.org/projects/fairwork-uganda-ratings-2023-a-need-for-pro-worker-change/" target="_blank" rel="noopener noreferrer"
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
