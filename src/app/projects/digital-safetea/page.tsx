"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Tag } from "lucide-react";

export default function DigitalSafeteaPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2021/09/Project-thumbnails-14.jpg" alt="Digital SafeTea" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/72" />
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
            Digital <span className="text-brand-orange">SafeTea</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">● RUNNING</span>
            <span className="text-white/50 text-sm">Partner: HIVOS</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Digital SafeTea is a portmanteau of &apos;digital safety&apos; and &apos;tea&apos;, based on the storyline of three characters: Aisha, Goitse and Dami — each representing an archetype of different, but relatable, African women.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://pollicy.org/wp-content/uploads/2021/09/Project-thumbnails-13.jpg" alt="Digital SafeTea gameplay" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>As players step into the world of these three characters, they face digital threats like zoom bombing, impersonation, and Non-Consensual Sharing of Intimate Images (NCII). Players pick their response from available choices to progress through the game.</p>
                <p>As players weave through the maze of threats, they are presented with lessons on how to navigate such threats in real life and are directed to sites and toolkits for further learning.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Meet the Characters</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Aisha", desc: "Navigating online harassment and privacy threats in her daily digital life." },
                    { name: "Goitse", desc: "Facing impersonation and identity theft on social media platforms." },
                    { name: "Dami", desc: "Dealing with non-consensual sharing of intimate images and cyberbullying." },
                  ].map((char) => (
                    <div key={char.name} className="bg-brand-cream rounded-2xl p-5">
                      <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-3">
                        <span className="text-white font-display font-black">{char.name[0]}</span>
                      </div>
                      <h3 className="font-display font-bold text-brand-dark mb-2">{char.name}</h3>
                      <p className="text-brand-gray text-sm leading-relaxed">{char.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Resources</h2>
                <div className="space-y-3">
                  {[
                    { title: "Digital Rights Are Women's Rights!", type: "Toolkit", href: "https://pollicy.org/resource/digital-rights-are-womens-rights/", date: "Sep 2021" },
                    { title: "Haki za Kidijitali ni Haki za Wanawake!", type: "Toolkit", href: "https://pollicy.org/resource/haki-za-kidijitali-ni-haki-za-wanawake/", date: "Oct 2021" },
                  ].map((r) => (
                    <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-5 bg-brand-cream rounded-2xl hover:bg-brand-orange/5 transition-all duration-300">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-all duration-300">
                        <Tag size={16} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{r.type}</span>
                        <h3 className="font-display font-bold text-brand-dark text-sm group-hover:text-brand-orange transition-colors duration-300">{r.title}</h3>
                        <p className="text-brand-gray text-xs">{r.date}</p>
                      </div>
                      <ExternalLink size={16} className="text-brand-gray group-hover:text-brand-orange transition-colors duration-300 shrink-0" />
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
                  <div><span className="text-brand-gray">Partner:</span><span className="text-brand-dark font-semibold ml-2">HIVOS</span></div>
                  <div><span className="text-brand-gray">Category:</span><span className="text-brand-dark font-semibold ml-2">Data Rights &amp; Safety</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital rights", "Digital safety", "Games", "Women's rights"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://www.digitalsafetea.com/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
                Play Digital SafeTea <ExternalLink size={16} />
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
