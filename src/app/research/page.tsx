import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import PageHeroAnimated from "@/components/ui/PageHeroAnimated";

export const metadata: Metadata = {
  title: "Research & Insights",
  description: "Pollicy's research on data governance, digital rights, feminist technology, and civic tech in Africa.",
};

const PUBLICATIONS = [
  { year: "2025", title: "Lessons from West Africa towards Robust Data Governance Structures", type: "Article", tags: ["Data Governance", "West Africa"], href: "https://pollicy.medium.com/lessons-from-west-africa-towards-robust-data-governance-structures-c881b010a75e", featured: false },
  { year: "2024", title: "DataFest Africa 2024: Navigating the Future of Data Governance in Africa", type: "Event Report", tags: ["Data Governance", "DataFest"], href: "https://pollicy.medium.com/navigating-the-future-of-data-governance-in-africa-insights-from-datafest-africa-2024-ef730c3e1761", featured: false },
  { year: "2024", title: "Afrofeminist Data Futures Manifesto", type: "Manifesto", tags: ["Feminist Data", "Data Governance"], href: "https://d4daccess.eu/en/afro-feminist-data-futures-manifesto", featured: false },
  { year: "2023", title: "State of Data Governance in Africa", type: "Report", tags: ["Data Governance", "Africa"], href: "https://pollicy.medium.com/state-of-data-governance-in-africa-ad00c75053f6", featured: false },
  { year: "2023", title: "Fairwork Uganda Ratings 2023: A Need for Pro-Worker Change", type: "Research Report", tags: ["Digital Labour", "Uganda"], href: "https://pollicy.org/projects/fairwork-uganda-ratings-2023-a-need-for-pro-worker-change/", featured: false },
  { year: "2022", title: "(In)Visible: Digital Threats to Muslim Women Human Rights Defenders", type: "Research Report", tags: ["Digital Rights", "Women"], href: "https://pollicy.org/projects/invisible/", featured: false },
  { year: "2021", title: "Automated Imperialism, Expansionist Dreams: Exploring Digital Extractivism in Africa", type: "Research Paper", tags: ["Digital Extractivism", "Tech Policy"], href: "https://pollicy.org/projects/automated-imperialism-expansionist-dreams-digital-extractivism/", featured: false },
  { year: "2021", title: "Alternate Realities, Alternate Internets: Feminist Research for a Feminist Internet", type: "Research Report", tags: ["Feminist Internet", "OGBV"], href: "https://www.genderit.org/resources/alternate-realities-alternate-internets-african-feminist-research-feminist-internet", featured: true },
  { year: "2021", title: "Afro Feminist Data Futures: Exploring the Use of Data by Feminist Movements", type: "Research Report", tags: ["Feminist Data", "Movements"], href: "https://pollicy.org/projects/afro-feminist-data-futures/", featured: false },
  { year: "2021", title: "Unseen Eyes, Unheard Stories: Surveillance and Data Protection During COVID-19", type: "Research Report", tags: ["Surveillance", "COVID-19"], href: "https://pollicy.org/projects/unseen-eyes-unheard-stories/", featured: false },
];

const TYPE_COLORS: Record<string, string> = {
  "Research Report": "bg-blue-100 text-blue-700",
  "Research Paper": "bg-purple-100 text-purple-700",
  "Article": "bg-green-100 text-green-700",
  "Event Report": "bg-orange-100 text-orange-700",
  "Manifesto": "bg-pink-100 text-pink-700",
  "Report": "bg-teal-100 text-teal-700",
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <PageHeroAnimated
        badge="Research & Insights"
        title="Evidence-based work"
        titleHighlight="for Africa's future."
        description="Pollicy's research spans feminist internet studies, data governance, digital rights, platform accountability, and civic technology — all grounded in African contexts and communities."
        image="https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg"
        imageAlt="Pollicy research"
        overlayOpacity={55}
      />

      {/* Featured Research — Alternate Realities */}
      <section className="section-padding bg-brand-dark border-t border-white/5">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-12">
            <span className="w-2 h-2 bg-brand-orange rounded-full" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Landmark Research</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-xs font-bold mb-5">MOST CITED RESEARCH</span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-5 leading-tight">
                Alternate Realities,<br /><span className="text-brand-orange">Alternate Internets</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-sm">
                Feminist Research for a Feminist Internet — a landmark study understanding the online lived experiences of women in five African countries. The research found that repeated negative encounters fundamentally impact how women navigate and utilise the internet.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: "3,306", label: "Women Surveyed" },
                  { value: "5", label: "Countries" },
                  { value: "28%", label: "Experienced OGBV" },
                  { value: "71.2%", label: "OGBV on Facebook" },
                  { value: "2020", label: "Published" },
                  { value: "APC", label: "Partner" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                    <div className="font-display font-black text-xl text-brand-orange">{m.value}</div>
                    <div className="text-white/40 text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <a href="https://www.genderit.org/resources/alternate-realities-alternate-internets-african-feminist-research-feminist-internet" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 text-sm">
                Read Full Report <ExternalLink size={15} />
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-4xl p-8">
              <h3 className="font-display font-bold text-white text-lg mb-6">Key Findings</h3>
              <div className="space-y-4">
                {[
                  "28% of women surveyed reported experiencing online gender-based violence",
                  "71.2% of OGBV incidents occurred on Facebook",
                  "Repeated negative encounters fundamentally impact how women navigate the internet",
                  "Legal frameworks in all 5 countries inadequately protect women online",
                  "Platform content moderation consistently fails African language users",
                  "Women self-censor and withdraw from online spaces due to harassment",
                ].map((finding) => (
                  <div key={finding} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand-orange/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-brand-orange text-xs font-bold">→</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Research Areas</span>
            </div>
            <h2 className="font-display font-black text-4xl text-brand-dark mb-4">
              Six pillars of <span className="text-brand-orange">our inquiry.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏛️", title: "Data Governance", desc: "How data is collected, managed, and used across African institutions — and how to make those systems more equitable and accountable." },
              { icon: "🛡️", title: "Digital Rights", desc: "Surveillance, internet shutdowns, freedom of expression online, and the legal frameworks that protect — or fail to protect — African citizens." },
              { icon: "♀️", title: "Feminist Data Practices", desc: "How feminist movements use data, and how data systems can be redesigned to centre women's experiences and needs." },
              { icon: "🤖", title: "AI & Emerging Technology", desc: "The impact of artificial intelligence on African societies, including bias, digital extractivism, and the AU Continental AI Strategy." },
              { icon: "💼", title: "Digital Labour", desc: "Platform workers, gig economy dynamics, and the rights of those whose labour powers Africa's digital economy." },
              { icon: "🌐", title: "Language & Inclusion", desc: "How non-dominant languages shape — and are shaped by — digital platforms, and what a truly inclusive internet looks like." },
            ].map((area) => (
              <div key={area.title} className="group bg-white rounded-3xl p-7 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                <span className="text-3xl mb-4 block">{area.icon}</span>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-3 group-hover:text-brand-orange transition-colors duration-300">{area.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">All Publications</span>
              </div>
              <h2 className="font-display font-black text-4xl text-brand-dark">
                Our research <span className="text-brand-orange">library.</span>
              </h2>
            </div>
            <p className="text-brand-gray text-sm max-w-xs">{PUBLICATIONS.length} publications spanning 2020–2025.</p>
          </div>
          <div className="space-y-3">
            {PUBLICATIONS.map((pub) => (
              <a key={pub.title} href={pub.href} target="_blank" rel="noopener noreferrer"
                className={`group flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-3xl hover:shadow-card transition-all duration-300 ${pub.featured ? "bg-brand-orange/5 border border-brand-orange/20" : "bg-brand-cream hover:bg-brand-orange/5"}`}>
                <div className="w-14 shrink-0 text-center">
                  <span className="font-display font-black text-2xl text-brand-orange">{pub.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${TYPE_COLORS[pub.type] || "bg-gray-100 text-gray-600"}`}>{pub.type}</span>
                    {pub.featured && <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold">⭐ Featured</span>}
                    {pub.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-sm group-hover:text-brand-orange transition-colors duration-300 leading-snug">{pub.title}</h3>
                </div>
                <ExternalLink size={16} className="text-brand-gray group-hover:text-brand-orange transition-colors duration-300 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="container-custom text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4">Interested in collaborating on research?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm">We partner with academics, civil society, and institutions to produce rigorous, community-centred research on data and technology in Africa.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 hover:shadow-glow">
            Partner With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
