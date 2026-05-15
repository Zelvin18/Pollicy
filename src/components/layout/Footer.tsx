"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA Banner */}
      <div className="bg-brand-orange">
        <div className="container-custom py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-2">
              Let&apos;s talk data, policy
            </h2>
            <p className="text-white/80 text-lg">and service delivery.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:bg-brand-cream transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-display font-black text-sm">P</span>
              </div>
              <span className="font-display font-black text-2xl text-white">POLLICY</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A Pan-African feminist organisation working at the intersection of data, technology, and design to advance inclusive and equitable digital ecosystems.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://pollicy.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 hover:scale-110"
                aria-label="Medium"
              >
                <span className="text-white font-bold text-sm">M</span>
              </a>
              <a href="https://www.facebook.com/pollicy/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://twitter.com/PollicyOrg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/pollicy/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCOdn9u9dFEnOIUDL10SESnQ" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 hover:scale-110" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-orange transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-brand-orange transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@pollicy.org"
                  className="flex items-start gap-3 text-white/60 hover:text-brand-orange transition-colors duration-300 group"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 group-hover:text-brand-orange" />
                  <span className="text-sm">info@pollicy.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+256708310397"
                  className="flex items-start gap-3 text-white/60 hover:text-brand-orange transition-colors duration-300 group"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 group-hover:text-brand-orange" />
                  <span className="text-sm">+256 708 310 397<br />+256 760 193 143</span>
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/P4phPvK87Tn5NjB27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-brand-orange transition-colors duration-300 group"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 group-hover:text-brand-orange" />
                  <span className="text-sm">
                    Plot 7, Kulubya Close,<br />
                    Bugolobi, Kampala, Uganda<br />
                    P.O. Box 71593
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest">
              Stay Updated
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Sign up for Pollicy updates, upcoming events, blogs, careers, podcasts, and more.
            </p>
            {subscribed ? (
              <div className="bg-brand-orange/20 border border-brand-orange/30 rounded-2xl p-4 text-brand-orange text-sm font-semibold">
                ✓ You&apos;re subscribed! Welcome to the Pollicy community.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/15 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-brand-orange text-white font-bold rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Pollicy Data Institute Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-300">
              Privacy Pollicy
            </Link>
            <a
              href="https://www.ngosource.org/about-equivalency-determination-on-file-badge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-300"
            >
              NGOsource Verified
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
