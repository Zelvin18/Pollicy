import type { Metadata } from "next";
import PageHeroAnimated from "@/components/ui/PageHeroAnimated";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description: "Pollicy events including DataFest Africa, Data Governance Dialogues, workshops, and community gatherings.",
};

const datafestEditions = [
  {
    year: "2025",
    location: "Nairobi + Kampala",
    theme: "Reclaiming Our Data Futures",
    highlight: "Two-city edition — diverse voices reimagining how data works for communities",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    partners: ["Aga Khan University", "Pollicy Data Institute"],
    active: true,
  },
  {
    year: "2024",
    location: "Nairobi, Kenya",
    theme: "Data Governance",
    highlight: "250+ stakeholders from government, civil society, academia, and private sector",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-05.png",
    partners: ["Aga Khan University", "University of Michigan"],
    active: false,
  },
  {
    year: "2023",
    location: "Nairobi, Kenya (Hybrid)",
    theme: "Gender Data & AI Bias",
    highlight: "Co-hosted with AKU — spotlighted gender data, AI bias, and inclusive technology",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
    partners: ["Aga Khan University", "Internet Society Foundation"],
    active: false,
  },
  {
    year: "2022",
    location: "Kampala, Uganda",
    theme: "Data & Environment",
    highlight: "Noise Pollution Classification Challenge with Sunbird AI & Zindi",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    partners: ["Sunbird AI", "Zindi"],
    active: false,
  },
  {
    year: "2021",
    location: "Kampala (Hybrid)",
    theme: "Data for Social Good",
    highlight: "120+ in-person, 300+ virtual; data hackathon; movie screening of The Price is Wrong",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    partners: ["Code for Science"],
    active: false,
  },
  {
    year: "2019",
    location: "Kampala, Uganda",
    theme: "First Ever DataFest",
    highlight: "Hundreds of data enthusiasts from academia, civil society, and tech across the region",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    partners: ["Pollicy"],
    active: false,
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHeroAnimated
        badge="Events"
        title="Where Africa's data"
        titleHighlight="community gathers."
        description="From DataFest Africa to Data Governance Dialogues, Pollicy convenes the continent's brightest minds to advance data science, digital rights, and inclusive technology."
        image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=85&auto=format&fit=crop"
        imageAlt="African community conference and events"
      />

      {/* Featured — DataFest 2025 */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-10">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Latest Edition</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 rounded-4xl overflow-hidden">
              <Image
                src="https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg"
                alt="DataFest Africa 2025"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">DataFest Africa 2025</span>
              </div>
            </div>
            <div>
              <h2 className="font-display font-black text-4xl text-white mb-3 leading-tight">
                DataFest Africa 2025<br />
                <span className="text-brand-orange">&ldquo;Reclaiming Our Data Futures&rdquo;</span>
              </h2>
              <p className="text-white/65 leading-relaxed mb-6 text-sm">
                A two-city edition bringing together diverse voices from across the continent in both Nairobi and Kampala to reimagine how data can work for communities, not just institutions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-white/50 text-sm"><Calendar size={14} /> 2025</div>
                <div className="flex items-center gap-2 text-white/50 text-sm"><MapPin size={14} /> Nairobi, Kenya &amp; Kampala, Uganda</div>
                <div className="flex items-center gap-2 text-white/50 text-sm"><Users size={14} /> Aga Khan University · Pollicy Data Institute</div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 text-sm">
                Get Involved <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DataFest History — card grid with images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
              <span className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">DataFest Africa History</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-4">
              Seven years of <span className="text-brand-orange">celebrating data.</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto text-sm">
              DataFest Africa is Pollicy&apos;s flagship annual event — celebrating data science and its evolving impact on the African continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datafestEditions.map((ed) => (
              <div key={ed.year} className={`group rounded-3xl overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${ed.year === "2020" ? "opacity-50" : ""}`}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={ed.image}
                    alt={`DataFest Africa ${ed.year}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${ed.active ? "bg-brand-orange text-white" : "bg-white/20 text-white backdrop-blur-sm"}`}>
                      {ed.year}
                    </span>
                  </div>
                </div>
                <div className="bg-brand-cream p-5">
                  <div className="flex items-center gap-2 text-brand-orange text-xs font-semibold mb-2">
                    <MapPin size={12} /> {ed.location}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-sm mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    &ldquo;{ed.theme}&rdquo;
                  </h3>
                  <p className="text-brand-gray text-xs leading-relaxed">{ed.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Governance Dialogues */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 rounded-4xl overflow-hidden">
              <Image
                src="https://pollicy.org/wp-content/uploads/2021/09/collage-b-08.png"
                alt="Data Governance Dialogues"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">Webinar Series</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Ongoing Series</span>
              </div>
              <h2 className="font-display font-black text-4xl text-brand-dark mb-5">
                Data Governance <span className="text-brand-orange">Dialogues.</span>
              </h2>
              <p className="text-brand-gray leading-relaxed mb-6 text-sm">
                An ongoing series of multi-stakeholder webinars addressing compliance and ethical challenges in data governance across Africa. Co-hosted with partners like Niyel for West Africa.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: "Data Protection in East Africa: Compliance Challenges", date: "Coming Soon", live: true },
                  { title: "AI Governance for African Governments", date: "Coming Soon", live: true },
                  { title: "Safeguarding Data in the Digital Age (West Africa)", date: "Jan 2025", live: false },
                ].map((s) => (
                  <div key={s.title} className="flex items-start gap-3 p-4 bg-white rounded-2xl">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${s.live ? "bg-green-500 animate-pulse" : "bg-brand-gray"}`} />
                    <div>
                      <p className="text-brand-dark text-sm font-semibold">{s.title}</p>
                      <p className="text-brand-gray text-xs mt-0.5">{s.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-orange transition-all duration-300 hover:scale-105 text-sm">
                Register for Next Session <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
