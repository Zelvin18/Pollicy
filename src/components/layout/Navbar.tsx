"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

/** Official Pollicy logo — inline SVG matching the real brand mark */
function PollicyLogo() {
  return (
    <Link href="/" aria-label="Pollicy homepage" className="shrink-0 hover:opacity-90 transition-opacity duration-200">
      <svg width="148" height="48" viewBox="0 0 148 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Large orange circle overlapping the right side of the text */}
        <circle cx="122" cy="24" r="24" fill="#E8751A" />
        {/* Shadow text layer — dark, offset 2px */}
        <text x="3" y="36"
          fontFamily="'Arial Black','Arial Bold',Arial,sans-serif"
          fontWeight="900" fontSize="32" letterSpacing="1.5" fill="#111111">
          POLLICY
        </text>
        {/* Main text layer — white fill with dark stroke = outlined look */}
        <text x="1" y="34"
          fontFamily="'Arial Black','Arial Bold',Arial,sans-serif"
          fontWeight="900" fontSize="32" letterSpacing="1.5"
          fill="white" stroke="#111111" strokeWidth="1.8" paintOrder="stroke fill">
          POLLICY
        </text>
      </svg>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md border-b border-gray-100" : "shadow-sm border-b border-gray-100"
      )}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">

            {/* ── Official Pollicy Logo ── */}
            <PollicyLogo />

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn("nav-link-sweep", isActive && "active")}
                    style={{ color: isActive ? "#ffffff" : "#0A0A0A" }}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              <Link href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-white text-sm font-bold rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-glow hover:scale-105">
                Get in Touch
              </Link>
              <button onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full text-brand-dark hover:bg-brand-orange/10 transition-all duration-300"
                aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <div className="container-custom py-6 flex flex-col gap-2">
              {/* Logo in mobile menu too */}
              <div className="mb-2">
                <PollicyLogo />
              </div>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={cn(
                    "px-5 py-3 rounded-2xl text-base font-semibold transition-all duration-300",
                    pathname === link.href
                      ? "bg-brand-orange text-white"
                      : "text-brand-dark hover:bg-brand-orange/10 hover:text-brand-orange"
                  )}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact"
                className="mt-3 px-5 py-3 bg-brand-orange text-white font-bold rounded-2xl text-center hover:bg-brand-orange-dark transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
