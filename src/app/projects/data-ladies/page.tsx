"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DataLadiesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0805]">
        <div className="absolute inset-0 z-0">
          <Image src="https://pollicy.org/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-27-at-14.43.11-1.jpeg" alt="Data Ladies" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0a0805]/70" />
        </div>
        <div className="container-custom relative z-10 pt-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors duration-300 mb-5 block">
            ← Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 rounded-full mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Data Trainings</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
            Data <span className="text-brand-orange">Ladies</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">● RUNNING</span>
            <span className="text-white/50 text-sm">Kampala, Uganda · East Africa</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A community engagement initiative focused on providing young professionals, especially women, with the skills and resources needed to thrive in the data industry.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-56 rounded-3xl overflow-hidden">
                  <Image src="https://pollicy.org/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-27-at-14.43.11-1.jpeg" alt="Data Ladies session" fill className="object-cover object-center" sizes="50vw" />
                </div>
                <div className="relative h-56 rounded-3xl overflow-hidden">
                  <Image src="https://pollicy.org/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-27-at-14.43.08.jpeg" alt="Data Ladies session 2" fill className="object-cover object-center" sizes="50vw" />
                </div>
              </div>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>Data Ladies is a monthly community engagement initiative in response to the success of DataFest Africa. The aim is to foster a sense of community among individuals and organisations interested in working with data in Uganda and the East African region, with a particular focus on promoting the participation and leadership of women in the data industry.</p>
                <p>The sessions cover various topics in data science, including data analysis, machine learning, data visualisation, and data storytelling.</p>
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-6">Programme Sessions</h2>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "Programming for Data Science", desc: "Introduction to R, Introduction to Python" },
                    { num: "2", title: "Querying Data", desc: "Introduction to SQL: From fundamental to advanced SQL" },
                    { num: "3", title: "Analyzing and Visualizing Data", desc: "Statistics, Power BI, Advanced Excel for Data Scientists" },
                    { num: "4", title: "Machine Learning & Data Mining", desc: "Classification, Regression, Income Prediction" },
                    { num: "5", title: "Deep Learning", desc: "Introduction to Neural Nets: Image detection" },
                    { num: "6", title: "Natural Language Processing", desc: "Spam detection, Hate speech detection, Sentiment Analysis" },
                    { num: "7", title: "ML Hackathon", desc: "Monitoring Hate Speech during Uganda & Kenya General Elections" },
                    { num: "8", title: "Deployment", desc: "Deploying machine learning models, working with APIs" },
                    { num: "9", title: "Applied Data Science", desc: "Noise detection in Kampala" },
                    { num: "10", title: "Applied Data Science", desc: "Building a Predictive text keyboard" },
                  ].map((s) => (
                    <div key={s.num} className="flex gap-4 p-4 bg-brand-cream rounded-2xl">
                      <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{s.num}</div>
                      <div>
                        <h3 className="font-display font-bold text-brand-dark text-sm">{s.title}</h3>
                        <p className="text-brand-gray text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-brand-gray">Status:</span><span className="text-green-600 font-semibold ml-2">Running</span></div>
                  <div><span className="text-brand-gray">Frequency:</span><span className="text-brand-dark font-semibold ml-2">Monthly sessions</span></div>
                  <div><span className="text-brand-gray">Location:</span><span className="text-brand-dark font-semibold ml-2">National ICT Hub, Kampala</span></div>
                </div>
              </div>
              <div className="bg-brand-cream rounded-3xl p-6">
                <h3 className="font-display font-bold text-brand-dark mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Data Science","AI","Machine Learning","Women","Uganda"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-brand-gray rounded-full text-xs border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <Link href="/careers" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105">
                Join the Community <ArrowRight size={16} />
              </Link>
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
