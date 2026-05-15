import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Pollicy",
  description: "Pollicy Data Institute's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Privacy Pollicy"
        title="Your data,"
        titleHighlight="your rights."
        description="We practice what we preach. Here's how Pollicy Data Institute handles your personal information."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Data privacy and security"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-10">
              {[
                {
                  title: "1. Who We Are",
                  content: "Pollicy Data Institute Limited is a Pan-African feminist organisation registered in Uganda. Our registered address is Plot 7, Kulubya Close, Bugolobi, Kampala, Uganda. You can contact us at info@pollicy.org.",
                },
                {
                  title: "2. What Data We Collect",
                  content: "We collect information you provide directly to us, such as when you subscribe to our newsletter, fill out a contact form, or apply for our fellowship programme. This may include your name, email address, and any other information you choose to provide.",
                },
                {
                  title: "3. How We Use Your Data",
                  content: "We use your data to send you updates, newsletters, and information about our work and events; to respond to your inquiries; to process fellowship and job applications; and to improve our website and services. We do not sell your personal data to third parties.",
                },
                {
                  title: "4. Data Protection",
                  content: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We comply with applicable data protection laws including Uganda's Data Protection and Privacy Act.",
                },
                {
                  title: "5. Your Rights",
                  content: "You have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time by clicking 'unsubscribe' in any email or contacting us at info@pollicy.org.",
                },
                {
                  title: "6. Cookies",
                  content: "Our website uses cookies to improve your browsing experience and to analyse website traffic. You can control cookie settings through your browser preferences.",
                },
                {
                  title: "7. Contact",
                  content: "For any privacy-related questions or requests, please contact us at info@pollicy.org or write to us at Plot 7, Kulubya Close, Bugolobi, Kampala, Uganda.",
                },
              ].map((section) => (
                <div key={section.title} className="bg-brand-cream rounded-3xl p-8">
                  <h2 className="font-display font-bold text-xl text-brand-dark mb-4">{section.title}</h2>
                  <p className="text-brand-gray leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
