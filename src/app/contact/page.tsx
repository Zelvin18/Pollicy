"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", type: "General Inquiry" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's talk data,"
        titleHighlight="policy & service delivery."
        description="Have a question, partnership idea, or want to collaborate? We'd love to hear from you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Contact and communication"
      />

      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-black text-3xl text-brand-dark mb-6">
                  Get in <span className="text-brand-orange">touch.</span>
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  Whether you&apos;re a researcher, partner, funder, journalist, or community member — we want to connect with you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                <a href="mailto:info@pollicy.org" className="group flex items-start gap-4 p-5 bg-white rounded-2xl hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <Mail size={18} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-brand-dark font-semibold text-sm group-hover:text-brand-orange transition-colors duration-300">info@pollicy.org</p>
                  </div>
                </a>

                <a href="tel:+256708310397" className="group flex items-start gap-4 p-5 bg-white rounded-2xl hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <Phone size={18} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-brand-dark font-semibold text-sm">+256 708 310 397</p>
                    <p className="text-brand-dark font-semibold text-sm">+256 760 193 143</p>
                  </div>
                </a>

                <a
                  href="https://goo.gl/maps/P4phPvK87Tn5NjB27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 bg-white rounded-2xl hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <MapPin size={18} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-semibold uppercase tracking-wider mb-1">Address</p>
                    <p className="text-brand-dark font-semibold text-sm">Plot 7, Kulubya Close</p>
                    <p className="text-brand-dark text-sm">Bugolobi, Kampala, Uganda</p>
                    <p className="text-brand-gray text-xs mt-1">P.O. Box 71593, Kampala</p>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div>
                <p className="text-brand-gray text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { href: "https://pollicy.medium.com/", label: "Medium", icon: <span className="font-bold text-sm">M</span> },
                    { href: "https://www.facebook.com/pollicy/", label: "Facebook", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                    { href: "https://twitter.com/PollicyOrg", label: "Twitter", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
                    { href: "https://www.linkedin.com/company/pollicy/", label: "LinkedIn", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                    { href: "https://www.youtube.com/channel/UCOdn9u9dFEnOIUDL10SESnQ", label: "YouTube", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-gray hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-4xl p-12 text-center shadow-card">
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">✓</span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-brand-dark mb-3">Message Sent!</h3>
                  <p className="text-brand-gray">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-4xl p-8 md:p-10 shadow-card space-y-6">
                  <h3 className="font-display font-bold text-2xl text-brand-dark">Send us a message</h3>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-brand-dark text-sm font-semibold mb-3">Inquiry Type</label>
                    <div className="flex flex-wrap gap-2">
                      {["General Inquiry", "Partnership", "Media", "Fellowship", "Research", "Other"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, type })}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            form.type === type
                              ? "bg-brand-orange text-white"
                              : "bg-brand-gray-light text-brand-gray hover:bg-brand-orange/10 hover:text-brand-orange"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-dark text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-brand-gray-light border border-transparent rounded-2xl text-brand-dark placeholder-brand-gray text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-dark text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-brand-gray-light border border-transparent rounded-2xl text-brand-dark placeholder-brand-gray text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-dark text-sm font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 bg-brand-gray-light border border-transparent rounded-2xl text-brand-dark placeholder-brand-gray text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-dark text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 bg-brand-gray-light border border-transparent rounded-2xl text-brand-dark placeholder-brand-gray text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <MapPin size={28} className="text-white" />
            </div>
            <p className="text-white font-display font-bold text-lg">Plot 7, Kulubya Close</p>
            <p className="text-white/60">Bugolobi, Kampala, Uganda</p>
            <a
              href="https://goo.gl/maps/P4phPvK87Tn5NjB27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-brand-orange text-white text-sm font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300"
            >
              Open in Google Maps
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-2 to-brand-dark-3 opacity-90" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
      </section>
    </>
  );
}
