"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ByteBulliesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=85&auto=format&fit=crop" alt="Byte Bullies" fill priority className="object-cover object-center" sizes="100vw" />
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
            Byte <span className="text-brand-orange">Bullies</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Examining the malignant influence of social media as a ubiquitous and powerful medium of communication in African countries.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85&auto=format&fit=crop" alt="Social media and cyberbullying" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>Byte Bullies examines how social media platforms have become vectors for harassment, disinformation, and online violence — particularly targeting women, activists, and marginalised communities across Africa.</p>
                <p>The project analyses patterns of online abuse, platform accountability gaps, and the legal and policy frameworks that fail to adequately protect African internet users from digital harm.</p>
                <p>Through research and advocacy, Byte Bullies aims to hold platforms accountable and push for stronger protections for African users online.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "📱", title: "Social Media Abuse", desc: "Documenting patterns of harassment on major platforms" },
                  { icon: "⚖️", title: "Policy Gaps", desc: "Identifying failures in legal frameworks to protect users" },
                  { icon: "🛡️", title: "Platform Accountability", desc: "Pushing for stronger content moderation in African contexts" },
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
                  <div><span className="text-brand-gray">Year:</span><span className="text-brand-dark font-semibold ml-2">2023</span></div>
                  <div><span className="text-brand-gray">Focus:</span><span className="text-brand-dark font-semibold ml-2">Online Harassment, Africa</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Cyberbullying","Social Media","Online Safety","Platform Accountability","Digital Rights"].map((t) => (
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
