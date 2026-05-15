import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { whyDataReasons, teamMembers } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Pollicy Data Institute — a Pan-African feminist organisation working at the intersection of data, technology, and design.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Pollicy"
        title="We are a feminist"
        titleHighlight="data collective."
        description="Pollicy functions at the intersection of data, technology and design to improve government service delivery and advance inclusive digital ecosystems across Africa."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Pollicy team and community"
      />

      {/* Why Data & Tech */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Why Data & Tech</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark">
              The case for <span className="text-brand-orange">African data sovereignty.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyDataReasons.map((reason, i) => (
              <div key={reason.title} className="group bg-brand-cream rounded-4xl overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                {/* Real Pollicy image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-display font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-black text-xl text-brand-dark mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Priorities */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Our Priorities</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white">
              Three pillars of <span className="text-brand-orange">our mission.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "IMPROVE",
                title: "Improve data literacy",
                desc: "Through training, workshops, events and engagements, we increase the collection, production and use of data among a wide range of stakeholders, especially those who may lack resources.",
              },
              {
                label: "PROMOTE",
                title: "Promote data governance",
                desc: "We advocate for appropriate data governance frameworks that protect citizens' rights while enabling innovation and economic growth across the African continent.",
              },
              {
                label: "FOSTER",
                title: "Foster digital rights",
                desc: "We work to ensure that all Africans can exercise their digital rights — from freedom of expression online to data privacy and protection from surveillance.",
              },
            ].map((p) => (
              <div key={p.label} className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                  {p.label}
                </span>
                <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-brand-orange rounded-full" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Our Story</span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
                From Kampala to <span className="text-brand-orange">the continent.</span>
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  <strong className="text-brand-dark">Pollicy</strong> is a portmanteau that stems from{" "}
                  <em>Opinion polling</em> and <em>Policy making</em>. Founded and registered in 2016 with a
                  mandate to redesign service delivery for citizens.
                </p>
                <p>
                  Founded by <strong className="text-brand-dark">Neema Iyer</strong> in Kampala, Uganda, Pollicy
                  began with a simple but powerful idea: that data, when used responsibly and equitably, can
                  transform how governments serve their citizens.
                </p>
                <p>
                  Today, under the leadership of Executive Director{" "}
                  <strong className="text-brand-dark">Irene Mwendwa</strong>, Pollicy has grown into a
                  Pan-African organisation with projects spanning 15+ countries, a flagship annual event
                  (DataFest Africa), and a fellowship programme nurturing the next generation of African
                  data professionals.
                </p>
              </div>
            </div>

            {/* Timeline with real DataFest image */}
            <div className="space-y-0">
              {/* DataFest image */}
              <div className="relative h-56 w-full rounded-3xl overflow-hidden mb-8">
                <Image
                  src="https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg"
                  alt="First DataFest Africa 2019"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">
                    First DataFest Africa — 2019
                  </span>
                </div>
              </div>
              {[
                { year: "2016", event: "Pollicy founded and registered in Kampala, Uganda" },
                { year: "2019", event: "First DataFest Africa — bringing together hundreds of data enthusiasts" },
                { year: "2020", event: "Choose Your Own Fake News wins Mozilla Creative Media Award" },
                { year: "2021", event: "Alternate Realities, Alternate Internets published — 3,306 women surveyed" },
                { year: "2023", event: "Irene Mwendwa becomes Executive Director; DataFest Africa goes to Nairobi" },
                { year: "2025", event: "DataFest Africa 2025 — two-city edition: Nairobi & Kampala" },
              ].map((item, i) => (
                <div key={item.year} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-display font-black text-xs">{item.year}</span>
                    </div>
                    {i < 5 && <div className="w-px h-full bg-brand-orange/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-brand-dark font-semibold text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Leadership</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark">
              The people behind <span className="text-brand-orange">Pollicy.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="group bg-brand-cream rounded-4xl p-8 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange/30 transition-colors duration-300">
                  <span className="font-display font-black text-2xl text-brand-orange">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-1">{member.name}</h3>
                <p className="text-brand-orange text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-brand-gray text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-brand-orange rounded-full" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Annual Reports</span>
              </div>
              <h2 className="font-display font-black text-4xl text-white mb-4">
                Fuelling accountability <span className="text-brand-orange">and transparency.</span>
              </h2>
              <p className="text-white/60 max-w-lg">
                Read about our impact over the years. Learn how we are conducting interventions through
                which Africans can take back control of their data and reimagine new ways of tech ownership.
              </p>
            </div>
            <a
              href="https://pollicy.org/resource/1762/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 hover:shadow-glow whitespace-nowrap"
            >
              2021 Annual Report
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
