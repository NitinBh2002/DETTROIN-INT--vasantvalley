"use client";

import React from "react";
import Image from "next/image";

export interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  backgroundImage: string;
  overlay?: boolean;
  overlayOpacity?: number;
  height?: string;
  location?: string;
  phone?: string;
  email?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export const PageHeroBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300 w-max">
    <span>{text}</span>
  </div>
);

export const PageHeroContactInfo: React.FC<{
  location?: string;
  phone?: string;
  email?: string;
}> = ({ location, phone, email }) => {
  if (!location && !phone && !email) return null;

  return (
    <div className="pt-2 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-bold uppercase tracking-wider text-amber-200">
      {location && <span>📍 {location}</span>}
      {location && (phone || email) && <span>•</span>}
      {phone && <span>📞 {phone}</span>}
      {phone && email && <span>•</span>}
      {email && <span>✉️ {email}</span>}
    </div>
  );
};

export const PageHeroButtons: React.FC<{
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}> = ({ primaryButton, secondaryButton }) => {
  if (!primaryButton && !secondaryButton) return null;

  return (
    <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
      {primaryButton && (
        <a
          href={primaryButton.href}
          className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all"
        >
          <span>{primaryButton.text}</span>
          <span>&rarr;</span>
        </a>
      )}
      {secondaryButton && (
        <a
          href={secondaryButton.href}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all"
        >
          <span>{secondaryButton.text}</span>
        </a>
      )}
    </div>
  );
};

export default function PageHero({
  badge,
  title,
  description,
  backgroundImage,
  overlay = true,
  overlayOpacity,
  height,
  location,
  phone,
  email,
  primaryButton,
  secondaryButton,
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-stone-900 text-white font-sans ${
        height ? height : "py-20 lg:py-28"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-75"
        />
      </div>

      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-[#800000]/90 to-[#660000]/85 z-10 pointer-events-none"
          style={{ opacity: overlayOpacity !== undefined ? overlayOpacity : 1 }}
        />
      )}

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {badge && <PageHeroBadge text={badge} />}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-stone-200 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          {description}
        </p>

        <PageHeroContactInfo location={location} phone={phone} email={email} />

        <PageHeroButtons
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      </div>
    </section>
  );
}
