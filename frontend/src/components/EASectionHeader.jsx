import React from "react";

export default function EASectionHeader({
  align = "left",
  className = "",
  kicker,
  title,
  subtitle,
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center mx-auto" : ""} ${className}`.trim()}>
      {kicker && (
        <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 mb-4">
          {kicker}
        </div>
      )}
      <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.04] text-stone-900">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 font-serif-display italic text-stone-600 text-xl md:text-2xl leading-snug ${isCenter ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      )}
      <div className={`ea-rule ${isCenter ? "mt-10 mx-auto max-w-[1320px]" : "mt-10"}`} />
    </div>
  );
}