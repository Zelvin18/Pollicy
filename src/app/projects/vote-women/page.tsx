"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function VoteWomenPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2021/08/eye-for-ebony-402231-1200x900-1.jpg" alt="VOTE Women" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/70" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-4 w-fit">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Women in Politics</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
            VOTE: <span className="text-brand-orange">Women</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">● RUNNING</span>
            <span className="text-white/50 text-sm">Partner: NED</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Building data skills among women politicians. We want more women voting, running and leading our countries.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <Image src="https://pollicy.org/wp-content/uploads/2021/08/eye-for-ebony-402231-1200x900-1.jpg" alt="VOTE Women" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>Vote:Women is a leadership springboard leveraging digital tools for women to follow their ambitions of civic leadership. Less than a quarter of African national parliamentarians are women.</p>
                <p>We provide a platform for support every step of the way through capability development, fundraising, and campaign management using innovation, technology and community. We want women to run and to win.</p>
                <p>Vote:Women empowers women to follow their ambitions of civic leadership across Tanzania, Uganda, and Senegal — with plans to expand to DRC, Cameroon, and Mozambique.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: "3", label: "Countries Active", sub: "Tanzania, Uganda, Senegal" },
                  { value: "<25%", label: "Women in Parliament", sub: "Current African average" },
                  { value: "100+", label: "Women Supported", sub: "Political aspirants & incumbents" },
                ].map((s) => (
                  <div key={s.label} className="bg-brand-cream rounded-2xl p-5 text-center">
                    <div className="font-display font-black text-3xl text-brand-orange mb-1">{s.value}</div>
                    <div className="text-brand-dark font-semibold text-sm">{s.label}</div>
                    <div className="text-brand-gray text-xs mt-1">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Status:</span><span className="text-green-600 font-semibold ml-2">Running</span></div>
                  <div><span className="text-brand-gray">Partner:</span><span className="text-brand-dark font-semibold ml-2">NED</span></div>
                  <div><span className="text-brand-gray">Countries:</span><span className="text-brand-dark font-semibold ml-2">Tanzania, Uganda, Senegal</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Feminist Data", "Politics", "Women's rights", "Leadership"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <a href="https://votewomen.pollicy.org/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
                Visit VOTE:Women <ExternalLink size={16} />
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
