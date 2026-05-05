import React from "react";

export default function EACard({
  image,
  title,
  source,
  href,
  external = false,
  className = "",
  onClick,
}) {
  const inner = (
    <>
      <div className="ea-card-img aspect-[4/3] rounded-md">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <div className="font-serif-display text-[19px] md:text-[21px] leading-[1.25] text-stone-900 group-hover:text-orange-700 transition-colors">
          {title}
        </div>
        {source && <div className="mt-2 text-[13px] text-stone-500">{source}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={`ea-card group block ${className}`}>
        {inner}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`ea-card group block text-left w-full ${className}`}>
        {inner}
      </button>
    );
  }

  return <div className={`ea-card group ${className}`}>{inner}</div>;
}