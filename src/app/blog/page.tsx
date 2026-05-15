import type { Metadata } from "next";
import PageHeroAnimated from "@/components/ui/PageHeroAnimated";
import { blogPosts, blogCategories } from "@/lib/data";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, research, and stories from Pollicy on data governance, digital rights, feminist technology, and civic tech in Africa.",
};

const categoryColors: Record<string, string> = {
  "FELLOWSHIP": "bg-purple-100 text-purple-700",
  "DATA GOVERNANCE": "bg-blue-100 text-blue-700",
  "DATA ARTISTRY": "bg-pink-100 text-pink-700",
  "AI & TECHNOLOGY": "bg-green-100 text-green-700",
  "DATA RIGHTS AND SAFETY": "bg-red-100 text-red-700",
  "DATA TRAININGS": "bg-yellow-100 text-yellow-700",
  "JOBS & OTHER OPPORTUNITIES": "bg-teal-100 text-teal-700",
};

const allBlogPosts = [
  ...blogPosts,
  {
    id: 7, number: "07", date: "JUL 2025", category: "DATA GOVERNANCE",
    title: "What Makes Us Tick? Social Media in Shaping Youth Engagement in Elections",
    excerpt: "Philomena Esi Agudu (Ghana) | 1st place winner of the 2024 Youth & Elections in Africa Essay Competition.",
    href: "https://pollicy.medium.com/what-makes-us-tick-social-media-in-shaping-youth-engagement-in-elections-807e734bb439",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-03.png",
    external: true,
  },
  {
    id: 8, number: "08", date: "APR 2025", category: "DATA GOVERNANCE",
    title: "Towards Rebuilding Trust — Making a Case for Citizen Centred Digital Governance in Kenya",
    excerpt: "Nairobi hosted the Open Government Partnership (OGP)'s Africa and Middle East Regional Meeting in March 2025.",
    href: "https://pollicy.medium.com/towards-rebuilding-trust-making-a-case-for-citizen-centred-digital-governance-in-kenya-65cee6955d57",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
    external: true,
  },
  {
    id: 9, number: "09", date: "APR 2025", category: "DATA GOVERNANCE",
    title: "Beyond the Hustle: Insights from 'Fair Digital Kazi'",
    excerpt: "As Africa's digital economy continues to thrive and traditional jobs continue to dwindle, many young Africans are turning to platform work.",
    href: "https://pollicy.medium.com/beyond-the-hustle-insights-from-fair-digital-kazi-a-manifesto-on-the-future-of-african-tech-and-2c11614e8b42",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    external: true,
  },
  {
    id: 10, number: "10", date: "JAN 2025", category: "DATA GOVERNANCE",
    title: "Rewriting Uganda's Labour Laws for Fair Digital Work",
    excerpt: "The digital revolution is transforming labour markets across the globe bringing about the platform economy.",
    href: "https://pollicy.medium.com/rewriting-ugandas-labour-laws-for-fair-digital-work-73685a0f46b4",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-08.png",
    external: true,
  },
  {
    id: 11, number: "11", date: "NOV 2024", category: "AI & TECHNOLOGY",
    title: "Beyond the Good and Bad: Making Sense of the AU Continental AI Strategy",
    excerpt: "Between the 18th and the 19th of July, the African Union (AU) endorsed the African Union Continental AI Strategy.",
    href: "https://pollicy.medium.com/beyond-the-good-and-bad-making-sense-of-the-au-continental-ai-strategy-for-african-people-88632d58df72",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-02-1536x1137.png",
    external: true,
  },
  {
    id: 12, number: "12", date: "OCT 2024", category: "DATA RIGHTS AND SAFETY",
    title: "Everyday Cybersecurity: Safeguarding Your Digital Life in Africa",
    excerpt: "In today's digital world, cybersecurity isn't just for tech experts — it's for everyone.",
    href: "https://pollicy.medium.com/everyday-cybersecurity-safeguarding-your-digital-life-in-africa-d87db5e459a5",
    image: "https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg",
    external: true,
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeroAnimated
        badge="Blog & Insights"
        title="Stories from the"
        titleHighlight="frontlines of data."
        description="Research findings, event recaps, policy analysis, and perspectives from Pollicy's team and community on data, technology, and digital rights in Africa."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Pollicy blog and insights"
      />

      {/* Categories */}
      <section className="bg-white border-b border-brand-gray-mid sticky top-20 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {blogCategories.map((cat) => (
              <button key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  cat === "ALL" ? "bg-brand-orange text-white" : "bg-brand-gray-light text-brand-gray hover:bg-brand-orange/10 hover:text-brand-orange"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid — with images */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogPosts.map((post) => (
              <a key={post.id} href={post.href}
                target={post.external ? "_blank" : "_self"}
                rel={post.external ? "noopener noreferrer" : undefined}
                className="group block bg-white rounded-3xl overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category badge over image */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                      categoryColors[post.category] || "bg-white/90 text-brand-dark"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-brand-gray text-xs mb-3">
                    <Calendar size={11} />
                    {post.date}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-sm leading-snug mb-3 group-hover:text-brand-orange transition-colors duration-300 line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray text-xs leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-orange text-xs font-bold group-hover:gap-3 transition-all duration-300">
                    Read Article
                    {post.external ? <ExternalLink size={12} /> : <ArrowRight size={12} />}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://pollicy.medium.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-orange transition-all duration-300 hover:scale-105">
              Read More on Medium <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
