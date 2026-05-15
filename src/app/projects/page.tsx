import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { allProjects } from "@/lib/data";
import PageHeroAnimated from "@/components/ui/PageHeroAnimated";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Pollicy's projects across data governance, digital rights, feminist data, civic technology, and more.",
};

const THEMATIC_AREAS = [
  {
    icon: "🏛️",
    title: "Data Governance",
    desc: "Advocating for responsible, ethical, and inclusive data governance frameworks across Africa. Running the Africa Data Governance Hub — a $400,000 Hewlett Foundation-funded community platform.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
    color: "bg-blue-50 border-blue-200",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🛡️",
    title: "Digital Rights & Online Safety",
    desc: "Research and advocacy on digital rights, internet shutdowns, surveillance, and platform accountability. Building tools like Digital SafeTea to protect African women online.",
    image: "https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg",
    color: "bg-red-50 border-red-200",
    tag: "bg-red-100 text-red-700",
  },
  {
    icon: "♀️",
    title: "Feminist Data & Gender Equity",
    desc: "Centering women's experiences in data research. From Alternate Realities, Alternate Internets (3,306 women surveyed) to the Afrofeminist Data Governance Project.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-08.png",
    color: "bg-pink-50 border-pink-200",
    tag: "bg-pink-100 text-pink-700",
  },
  {
    icon: "🏙️",
    title: "Civic Technology",
    desc: "Building platforms like WeSpeak (citizen-government feedback via USSD/IVR) and Wetaase (anti-human trafficking platform in 7 languages) that connect citizens with services.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    color: "bg-teal-50 border-teal-200",
    tag: "bg-teal-100 text-teal-700",
  },
  {
    icon: "🗳️",
    title: "Women in Politics",
    desc: "VOTE:Women — a leadership springboard for women political aspirants and incumbents across Tanzania, Uganda, and Senegal, using digital tools to support civic leadership.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-02-1536x1137.png",
    color: "bg-rose-50 border-rose-200",
    tag: "bg-rose-100 text-rose-700",
  },
  {
    icon: "📰",
    title: "Media Literacy",
    desc: "Choose Your Own Fake News — Mozilla Creative Media Award-winning web game showing how misinformation spreads in African contexts. Featured by CNN in 2020.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    color: "bg-amber-50 border-amber-200",
    tag: "bg-amber-100 text-amber-700",
  },
  {
    icon: "🌐",
    title: "Language & Digital Inclusion",
    desc: "Are We Together? — Internet Society Foundation-funded research on how non-dominant languages affect digital platform usability in East Africa and India.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-05.png",
    color: "bg-purple-50 border-purple-200",
    tag: "bg-purple-100 text-purple-700",
  },
  {
    icon: "📊",
    title: "Data Skills & Capacity",
    desc: "Training the next generation of African data professionals through workshops, Data Ladies events, and the Fellowship Programme ($500/month, 6-month paid fellowship).",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    color: "bg-green-50 border-green-200",
    tag: "bg-green-100 text-green-700",
  },
  {
    icon: "💼",
    title: "Digital Labour & Gig Economy",
    desc: "Data Mtaani — research on platform workers navigating risk and opportunity in Africa's growing digital economy, with fieldwork in Nairobi and Kampala.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
    color: "bg-orange-50 border-orange-200",
    tag: "bg-orange-100 text-orange-700",
  },
];

const CAT_COLORS: Record<string, string> = {
  "DATA ARTISTRY": "bg-pink-100 text-pink-700",
  "DATA PRODUCTS": "bg-blue-100 text-blue-700",
  "DATA TRAININGS": "bg-green-100 text-green-700",
  "DATA GOVERNANCE": "bg-purple-100 text-purple-700",
  "DATA RIGHTS AND SAFETY": "bg-red-100 text-red-700",
};

export default function ProgrammesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHeroAnimated
        badge="Projects & Work Areas"
        title="Work that moves"
        titleHighlight="Africa forward."
        description="From feminist internet research to civic technology platforms, our projects span data governance, digital rights, women's leadership, and community empowerment across 15+ African countries."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=85&auto=format&fit=crop"
        imageAlt="African professionals working on civic technology"
        overlayOpacity={65}
      />

      {/* ── Thematic Areas ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Thematic Areas</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-4">
              Nine areas of <span className="text-brand-orange">deep impact.</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto text-sm leading-relaxed">
              Pollicy&apos;s work is organised around interconnected themes that together advance inclusive and equitable digital ecosystems across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEMATIC_AREAS.map((area) => (
              <div key={area.title} className={`group rounded-3xl border overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${area.color}`}>
                <div className="relative h-40 overflow-hidden">
                  <Image src={area.image} alt={area.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-2xl">{area.icon}</span>
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${area.tag}`}>{area.title}</span>
                  <p className="text-brand-gray text-sm leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Projects ── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">All Projects</span>
              </div>
              <h2 className="font-display font-black text-4xl text-brand-dark">
                Every project, <span className="text-brand-orange">every story.</span>
              </h2>
            </div>
            <p className="text-brand-gray text-sm max-w-xs">
              {allProjects.length}+ projects spanning data governance, digital rights, civic tech, and feminist data practices.
            </p>
          </div>

          <div className="space-y-3">
            {allProjects.map((project, i) => (
              <Link
                key={project.id}
                href={project.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-white rounded-3xl hover:bg-brand-orange/5 hover:shadow-card transition-all duration-300"
              >
                <span className="font-display font-black text-3xl text-brand-gray-mid group-hover:text-brand-orange/40 transition-colors duration-300 w-14 shrink-0 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${CAT_COLORS[project.category] || "bg-gray-100 text-gray-600"}`}>
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-brand-gray text-xs">
                      <Calendar size={11} />{project.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-base group-hover:text-brand-orange transition-colors duration-300 truncate">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray text-xs mt-0.5 line-clamp-1">{project.description}</p>
                </div>
                <ArrowRight size={18} className="text-brand-gray group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-orange">
        <div className="container-custom text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4">Want to collaborate on a project?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">We partner with researchers, civil society organisations, governments, and technologists across Africa.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:bg-brand-cream transition-all duration-300 hover:scale-105">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
