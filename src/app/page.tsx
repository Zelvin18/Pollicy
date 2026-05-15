import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import VideoSection from "@/components/home/VideoSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import InsightsSection from "@/components/home/InsightsSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <VideoSection />
      <FeaturedProjectsSection />
      <InsightsSection />
      <PartnersSection />
      <NewsletterSection />
    </>
  );
}
