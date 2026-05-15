import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Download, Gamepad2, Mic, ArrowRight } from "lucide-react";
import PageHeroAnimated from "@/components/ui/PageHeroAnimated";

export const metadata: Metadata = {
  title: "Resources",
  description: "Pollicy's publications, toolkits, interactive games, podcast, and other resources.",
};

const REPORTS = [
  {
    title: "Alternate Realities, Alternate Internets",
    year: "2021", type: "Research Report",
    image: "https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg",
    href: "https://www.genderit.org/resources/alternate-realities-alternate-internets-african-feminist-research-feminist-internet",
  },
  {
    title: "Automated Imperialism, Expansionist Dreams",
    year: "2021", type: "Research Paper",
    image: "https://pollicy.org/wp-content/uploads/2021/10/Project-thumbnails-17.jpg",
    href: "https://pollicy.org/projects/automated-imperialism-expansionist-dreams-digital-extractivism/",
  },
  {
    title: "Afrofeminist Data Futures Manifesto",
    year: "2024", type: "Manifesto",
    image: "https://pollicy.org/wp-content/uploads/2021/08/sample-project-1167x1536.jpg",
    href: "https://d4daccess.eu/en/afro-feminist-data-futures-manifesto",
  },
  {
    title: "State of Data Governance in Africa",
    year: "2023", type: "Report",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
    href: "https://pollicy.medium.com/state-of-data-governance-in-africa-ad00c75053f6",
  },
  {
    title: "Fairwork Uganda Ratings 2023",
    year: "2023", type: "Research Report",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format&fit=crop",
    href: "https://pollicy.org/projects/fairwork-uganda-ratings-2023-a-need-for-pro-worker-change/",
  },
  {
    title: "Afro Feminist Data Futures",
    year: "2021", type: "Research Report",
    image: "https://pollicy.org/wp-content/uploads/2021/08/sample-project-1167x1536.jpg",
    href: "https://pollicy.org/projects/afro-feminist-data-futures/",
  },
  {
    title: "Unseen Eyes, Unheard Stories",
    year: "2021", type: "Research Report",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    href: "https://pollicy.org/projects/unseen-eyes-unheard-stories/",
  },
  {
    title: "(In)Visible: Muslim Women Human Rights Defenders",
    year: "2022", type: "Research Report",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
    href: "https://pollicy.org/projects/invisible/",
  },
  {
    title: "2021 Annual Report",
    year: "2021", type: "Annual Report",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-05.png",
    href: "https://pollicy.org/resource/1762/",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeroAnimated
        badge="Publications & Resources"
        title="Knowledge for"
        titleHighlight="Africa's data future."
        description="Reports, toolkits, interactive games, podcasts, and guides — all freely available to advance data literacy and digital rights across Africa."
        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Books and knowledge resources"
        overlayOpacity={62}
      />

      {/* Interactive Games */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-10">
            <Gamepad2 size={14} className="text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Interactive Tools &amp; Games</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Choose Your Own Fake News",
                badge: "🏆 Mozilla Creative Media Award",
                description: "A web-based game showing how misinformation spreads. Players explore scenarios revealing real-life consequences of fake news in African contexts. Featured by CNN in June 2020.",
                tags: ["Media Literacy", "Misinformation", "Interactive"],
                href: "https://pollicy.org/projects/choose-your-own-fake-news/",
                cta: "Play the Game",
                image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
              },
              {
                title: "Digital SafeTea",
                badge: "🎮 Interactive Fiction",
                description: "An interactive fiction game championing online safety for African women. Navigate scenarios with Goitse, Aisha, and Dami to learn about digital safety issues.",
                tags: ["Online Safety", "Women", "Interactive Fiction"],
                href: "https://www.digitalsafetea.com/",
                cta: "Play Digital SafeTea",
                image: "https://pollicy.org/wp-content/uploads/2021/09/Project-thumbnails-14.jpg",
              },
            ].map((tool) => (
              <div key={tool.title} className="group relative rounded-4xl overflow-hidden hover:shadow-glow transition-all duration-500">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image src={tool.image} alt={tool.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                  <div className="absolute inset-0 bg-brand-dark/80" />
                </div>
                <div className="relative z-10 p-9">
                  <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-xs font-bold mb-5">{tool.badge}</span>
                  <h3 className="font-display font-black text-2xl text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">{tool.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{tool.description}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs">{tag}</span>
                    ))}
                  </div>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 text-sm">
                    <Gamepad2 size={15} /> {tool.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 rounded-4xl overflow-hidden">
              <Image
                src="https://pollicy.org/wp-content/uploads/2021/09/collage-b-03.png"
                alt="Terms and Conditions Podcast"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                  <Mic size={18} className="text-white" />
                </div>
                <span className="text-white font-display font-bold text-sm">Terms &amp; Conditions Podcast</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <Mic size={14} className="text-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Podcast</span>
              </div>
              <h2 className="font-display font-black text-4xl text-brand-dark mb-5">
                Terms and <span className="text-brand-orange">Conditions.</span>
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4 text-sm">
                A podcast co-hosted by Pollicy founder <strong className="text-brand-dark">Neema Iyer</strong> and <strong className="text-brand-dark">Berhan Taye</strong>, covering digital rights, surveillance laws, internet shutdowns, and tech policy in Africa.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "South African RICA surveillance law declared unconstitutional",
                  "Nigerian lawyers take Communications Commission to court",
                  "Mass deployment of CCTV cameras in Kampala streets",
                  "Digital rights in closing civic spaces across Africa",
                  "Platform accountability and content moderation in Africa",
                ].map((ep) => (
                  <div key={ep} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <div className="w-6 h-6 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-brand-orange text-xs">▶</span>
                    </div>
                    <p className="text-brand-dark text-xs font-medium">{ep}</p>
                  </div>
                ))}
              </div>
              <a href="https://podcasts.apple.com/gb/podcast/terms-conditions/id1454378009" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-orange transition-all duration-300 hover:scale-105 text-sm">
                <Mic size={15} /> Listen on Apple Podcasts <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reports — with images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-10">
            <Download size={14} className="text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Reports &amp; Publications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REPORTS.map((pub) => (
              <a key={pub.title} href={pub.href} target="_blank" rel="noopener noreferrer"
                className="group rounded-3xl overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 flex flex-col bg-brand-cream">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-brand-orange text-white rounded-full text-xs font-bold">{pub.type}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-white/90 text-brand-dark rounded-full text-xs font-semibold">{pub.year}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-brand-dark text-sm leading-snug mb-3 group-hover:text-brand-orange transition-colors duration-300 flex-1">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-orange text-xs font-bold mt-auto">
                    <Download size={11} /> Access Report <ExternalLink size={11} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-orange">
        <div className="container-custom text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4">Want to use our research?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">All Pollicy publications are freely available. For permissions, citations, or collaboration inquiries, get in touch.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:bg-brand-cream transition-all duration-300 hover:scale-105">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
