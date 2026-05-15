import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { ArrowRight, DollarSign, Clock, Globe, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers & Opportunities",
  description: "Join Pollicy — explore job openings, the Fellowship Programme, and other opportunities to work at the intersection of data, technology, and social justice in Africa.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers & Opportunities"
        title="Shape Africa's"
        titleHighlight="digital future."
        description="Join a team of technologists, data scientists, creatives, and researchers working to advance inclusive and equitable digital ecosystems across Africa."
        image="https://pollicy.org/wp-content/uploads/2021/09/collage-02-1536x1137.png"
        imageAlt="Pollicy team working together"
      />

      {/* Fellowship Programme — Hero Feature */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="relative bg-brand-orange rounded-5xl overflow-hidden p-12 md:p-16">
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-xl" />
            <div className="absolute top-8 right-8 w-32 h-32 border border-white/20 rounded-full" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6 uppercase tracking-wider">
                  🌟 Featured Opportunity
                </span>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
                  Pollicy Fellowship Programme
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  A 6-month paid fellowship designed as a launchpad for emerging African thinkers, creatives, technologists, and community organisers.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <DollarSign size={18} />, label: "Stipend", value: "USD $500/month" },
                    { icon: <Clock size={18} />, label: "Duration", value: "6 months" },
                    { icon: <Globe size={18} />, label: "Open to", value: "Pan-African" },
                    { icon: <Users size={18} />, label: "Format", value: "Cohort-based" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 text-white/70 text-xs mb-1">
                        {detail.icon}
                        {detail.label}
                      </div>
                      <p className="text-white font-bold text-sm">{detail.value}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:bg-brand-cream transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Apply for Fellowship
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-xl mb-4">What Fellows Do</h3>
                {[
                  "Collaborate with civic tech innovators across Africa",
                  "Conduct exploratory research on data and civic tech",
                  "Strengthen capacity in equitable data practices",
                  "Engage in digital storytelling and design",
                  "Participate in tech-driven activism and advocacy",
                  "Build networks with African data professionals",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-white/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Who Should Apply</span>
            </div>
            <h2 className="font-display font-black text-4xl text-brand-dark mb-4">
              Are you the right <span className="text-brand-orange">fit?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Students & Early Career", desc: "In early stages of your career or studies with demonstrated interest in civic tech, data, or digital rights." },
              { icon: "✍️", title: "Digital Storytellers", desc: "Writers, journalists, and communicators who can translate complex data issues for broad audiences." },
              { icon: "💻", title: "Technologists", desc: "Developers, data scientists, and designers passionate about using technology for social good." },
              { icon: "🔬", title: "Researchers", desc: "Academics and independent researchers interested in feminist data practices and digital rights." },
              { icon: "🌱", title: "Community Organisers", desc: "Grassroots activists and community leaders working on digital inclusion and civic engagement." },
              { icon: "🎨", title: "Creatives", desc: "Artists, designers, and multimedia creators who can bring data stories to life through creative expression." },
            ].map((profile) => (
              <div key={profile.title} className="group bg-white rounded-3xl p-7 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                <span className="text-3xl mb-4 block">{profile.icon}</span>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {profile.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Current Openings</span>
              </div>
              <h2 className="font-display font-black text-4xl text-brand-dark">
                Open <span className="text-brand-orange">positions.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {/* Website Developer ToR */}
            <div className="group bg-brand-cream rounded-3xl p-8 hover:shadow-card transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold">CONSULTANCY</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">OPEN</span>
                    <span className="text-brand-gray text-xs">Deadline: 24 May 2026</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    Website Developer
                  </h3>
                  <p className="text-brand-gray text-sm max-w-2xl">
                    Design, develop, deploy, and maintain a secure, scalable, and user-friendly Pollicy website. 2–4 month project. Must be based in East Africa.
                  </p>
                </div>
                <a
                  href="mailto:info@pollicy.org?subject=Website Developer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Placeholder for future openings */}
            <div className="bg-brand-gray-light rounded-3xl p-8 text-center">
              <p className="text-brand-gray text-sm">
                No other positions currently open. Check back regularly or{" "}
                <a href="mailto:info@pollicy.org" className="text-brand-orange font-semibold hover:underline">
                  send us your CV
                </a>{" "}
                to be considered for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4">
            Ready to <span className="text-brand-orange">join us?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Send your portfolio, CV, and a cover letter to info@pollicy.org. Applications are reviewed on a rolling basis — early applications are encouraged.
          </p>
          <a
            href="mailto:info@pollicy.org?subject=Application - Pollicy"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Send Your Application
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
