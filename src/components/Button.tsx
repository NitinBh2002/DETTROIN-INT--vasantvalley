"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "darkOutline" | "white";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none w-fit";

  const variantStyles = {
    primary:
      "bg-[#800000] text-white border border-[#800000] hover:bg-[#600010] hover:border-amber-400 hover:text-amber-300 shadow-md",
    secondary:
      "bg-stone-900 text-white border border-stone-900 hover:bg-[#800000] hover:border-[#800000] shadow-md",
    outline:
      "bg-transparent text-[#800000] border border-[#800000] hover:bg-[#800000] hover:text-white",
    darkOutline:
      "bg-transparent text-white border border-white/40 hover:bg-white hover:text-stone-950 hover:border-white shadow-sm",
    white:
      "bg-white text-[#800000] border border-white hover:bg-amber-100 hover:border-amber-200 shadow-md",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
