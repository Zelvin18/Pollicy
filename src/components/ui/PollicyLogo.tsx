"use client";

import Link from "next/link";

interface PollicyLogoProps {
  className?: string;
  scale?: number;
  href?: string;
  showLink?: boolean;
}

/**
 * Official Pollicy logo — bold "POLLICY" text with large orange circle
 * overlapping the right side (over the "CY"), matching the real brand identity.
 * Built as SVG so it renders crisply at any size.
 */
export default function PollicyLogo({
  className = "",
  scale = 1,
  href = "/",
  showLink = true,
}: PollicyLogoProps) {
  const w = Math.round(180 * scale);
  const h = Math.round(60 * scale);

  const logo = (
    <svg
      width={w}
      height={h}
      viewBox="0 0 180 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pollicy"
      role="img"
    >
      {/* Large orange circle — sits on the right, overlapping "CY" */}
      <circle cx="152" cy="30" r="28" fill="#E8751A" />

      {/*
        POLLICY text — the real logo uses a heavy slab/display font
        with a white fill and dark outline giving the 3D/shadow effect.
        We replicate this with two text layers: dark shadow offset + white stroked top.
      */}

      {/* Layer 1 — dark shadow (offset 2px down-right) */}
      <text
        x="4"
        y="44"
        fontFamily="'Arial Black', 'Impact', 'Haettenschweiler', sans-serif"
        fontWeight="900"
        fontSize="38"
        letterSpacing="2"
        fill="#111111"
      >
        POLLICY
      </text>

      {/* Layer 2 — white fill with dark stroke = outlined look matching real logo */}
      <text
        x="2"
        y="42"
        fontFamily="'Arial Black', 'Impact', 'Haettenschweiler', sans-serif"
        fontWeight="900"
        fontSize="38"
        letterSpacing="2"
        fill="white"
        stroke="#111111"
        strokeWidth="2"
        paintOrder="stroke fill"
      >
        POLLICY
      </text>
    </svg>
  );

  if (showLink) {
    return (
      <Link
        href={href}
        className="inline-flex items-center hover:opacity-90 transition-opacity duration-200"
        aria-label="Pollicy — go to homepage"
      >
        {logo}
      </Link>
    );
  }

  return logo;
}
