"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function AreWeTogether() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2023/01/Are-we-together-01-1536x1536.jpg" alt="Are We Together" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/72" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-4 w-fit">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Language &amp; Digital Inclusion</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
            Are We <span className="text-brand-orange">Together?</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A user-first internet — envisioning a better and more inclusive internet for those who do not speak, write or read English as a first language.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://pollicy.org/wp-content/uploads/2023/01/Are-we-together-01-1536x1536.jpg" alt="Are We Together" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>This project recognises that the experiences of non-English speakers online are heavily shaped by the predominant languages available on digital platforms. The research presents design principles that key actors such as designers and developers can follow to ensure accessibility and inclusivity.</p>
                <p>The study was conducted in Ethiopia, India, Tanzania and Uganda, analysing different user groups and their experiences on usability, accessibility and safety online.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Countries Studied</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { country: "Ethiopia", note: "Non-Latin script (Amharic/Ge'ez)" },
                    { country: "Tanzania", note: "KiSwahili as national language" },
                    { country: "Uganda", note: "40+ local languages" },
                    { country: "India", note: "Surge of non-English users" },
                  ].map((c) => (
                    <div key={c.country} className="bg-brand-cream rounded-2xl p-4 text-center">
                      <div className="font-display font-bold text-brand-dark mb-1">{c.country}</div>
                      <div className="text-brand-gray text-xs">{c.note}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Key Design Principles</h2>
                <div className="space-y-3">
                  {[
                    { title: "Accessibility", desc: "Ensure more users, particularly non-English speakers, can use and benefit from applications and the internet." },
                    { title: "Inclusivity", desc: "Accommodate non-English users and expand information and services available for all segments of users." },
                    { title: "Trust, Safety & Privacy", desc: "Ensure internet users of all language abilities can exist online freely without risk of harm or violence." },
                  ].map((p) => (
                    <div key={p.title} className="flex gap-4 p-5 bg-brand-cream rounded-2xl">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 shrink-0" />
                      <div>
                        <h3 className="font-display font-bold text-brand-dark mb-1">{p.title}</h3>
                        <p className="text-brand-gray text-sm">{p.desc}</p>
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
                  <div><span className="text-brand-gray">Funder:</span><span className="text-brand-dark font-semibold ml-2">Internet Society Foundation</span></div>
                  <div><span className="text-brand-gray">Year:</span><span className="text-brand-dark font-semibold ml-2">2023</span></div>
                  <div><span className="text-brand-gray">Countries:</span><span className="text-brand-dark font-semibold ml-2">Ethiopia, Tanzania, Uganda, India</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Language","Digital Inclusion","Accessibility","Internet"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://pollicy.webflow.io/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
                Explore Project <ExternalLink size={16} />
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
