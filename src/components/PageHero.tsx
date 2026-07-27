"use client";

import React from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

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
    <div className="pt-2 flex flex-wrap justify-center items-center gap-4 text-xs font-bold uppercase tracking-wider text-amber-200">
      {location && (
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-amber-300 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </span>
      )}
      {location && (phone || email) && <span className="opacity-40">•</span>}
      {phone && (
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-amber-300 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {phone}
        </span>
      )}
      {phone && email && <span className="opacity-40">•</span>}
      {email && (
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-amber-300 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {email}
        </span>
      )}
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
        <Button href={primaryButton.href} variant="primary">
          <span>{primaryButton.text}</span>
          <span>&rarr;</span>
        </Button>
      )}
      {secondaryButton && (
        <Button href={secondaryButton.href} variant="darkOutline">
          <span>{secondaryButton.text}</span>
        </Button>
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
          className="object-cover object-center"
        />
        {overlay && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/80 to-stone-950/70"
            style={{ opacity: overlayOpacity !== undefined ? overlayOpacity : 0.85 }}
          />
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {badge && <PageHeroBadge text={badge} />}

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
          {title}
        </h1>

        <p className="text-stone-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>

        <PageHeroContactInfo location={location} phone={phone} email={email} />

        <PageHeroButtons primaryButton={primaryButton} secondaryButton={secondaryButton} />
      </div>
    </section>
  );
}
