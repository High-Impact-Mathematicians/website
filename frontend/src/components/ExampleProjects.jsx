import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { causeAreas, PROJECTS_BOARD_URL } from "../data/exampleProjects";

// Watermark glyphs for cards with no cover, picked from a hash of the title so
// a project always draws the same one. Mirrors the projects board.
const GLYPHS = ["∑", "∫", "∂", "π", "λ", "∇", "⊕", "≈"];

function glyphFor(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i += 1) {
    hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  }
  return GLYPHS[hash % GLYPHS.length];
}

// Covers are pages and slides of every shape. Anything wider than the tile is
// contained rather than cropped — cover-cropping a 16:9 slide into a 4:3 tile
// slices its title off both edges.
const TILE_RATIO = 4 / 3;

function ProjectTile({ project }) {
  const [failed, setFailed] = React.useState(false);
  const [isWide, setIsWide] = React.useState(false);
  const showImage = Boolean(project.image) && !failed;

  // Deployed under a repo subpath on GitHub Pages, so covers authored as
  // "/projects/x.webp" need the public path prefixed at render time.
  const src = project.image
    ? `${process.env.PUBLIC_URL}${project.image}`
    : null;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-stone-900/15 bg-[#F8F5F0] transition-colors [transition-duration:120ms] group-hover:border-orange-600 dark:border-stone-100/15 dark:bg-stone-900">
        {showImage ? (
          <>
            {/* Blurred copy of the cover fills whatever a contained slide
                leaves over, so the ground matches the slide's own background
                instead of reading as dead space. */}
            {isWide && (
              <div
                aria-hidden
                style={{ backgroundImage: `url("${src}")` }}
                className="absolute inset-0 scale-[1.25] bg-cover bg-center blur-[22px]"
              />
            )}
            <img
              src={src}
              alt={project.alt || ""}
              loading="lazy"
              onError={() => setFailed(true)}
              onLoad={(e) => {
                const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                if (w && h) setIsWide(w / h > TILE_RATIO);
              }}
              className={`relative h-full w-full ${
                isWide ? "object-contain" : "object-cover object-top"
              }`}
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span
              aria-hidden
              className="select-none font-serif-display text-[64px] leading-none text-stone-900/[0.10] dark:text-stone-100/[0.10]"
            >
              {glyphFor(project.title)}
            </span>
          </div>
        )}
      </div>

      <span className="mt-3 inline-block bg-[#EA580C] px-2 py-1 font-mono-tag text-[9px] uppercase leading-none tracking-[0.14em] text-[#F8F5F0]">
        {project.pill}
      </span>

      {/* The visible title is the link's accessible name — the thumbnail alt
          describes the artwork and is not relied on for that. */}
      <h4 className="mt-2 font-serif-display text-[17px] leading-[1.25] text-stone-900 group-hover:text-orange-700 dark:text-stone-100 dark:group-hover:text-orange-400">
        {project.title}
      </h4>
    </a>
  );
}

function CauseAccordion({ area }) {
  const [open, setOpen] = React.useState(false);
  const panelId = `example-projects-panel-${area.id}`;
  const buttonId = `example-projects-button-${area.id}`;

  return (
    <div className="border-b border-stone-900/15 dark:border-stone-100/15">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <span
            className={`font-serif-display text-[22px] leading-tight transition-colors [transition-duration:120ms] md:text-[26px] ${
              open
                ? "text-[#EA580C]"
                : "text-stone-900 dark:text-stone-100"
            }`}
          >
            {area.name}
          </span>
          <ChevronDown
            size={20}
            aria-hidden
            className={`shrink-0 transition-transform duration-200 ${
              open ? "rotate-180 text-[#EA580C]" : "text-stone-900 dark:text-stone-100"
            }`}
          />
        </button>
      </h3>

      {/* Kept in the DOM only when open — height is not animated, so there is
          no collapsed-but-focusable content to trap the keyboard. */}
      {open && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-8">
          {area.projects.length === 0 ? (
            <p className="text-[15px] italic text-stone-500 dark:text-stone-500">
              Projects from this cause area coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {area.projects.map((project) => (
                <ProjectTile key={project.title} project={project} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExampleProjects() {
  return (
    <section
      id="example-projects"
      className="relative overflow-hidden border-t border-stone-200 bg-cream dark:border-stone-800"
      data-testid="example-projects"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-serif-display text-[280px] leading-none text-stone-900/[0.03] md:text-[420px] dark:text-stone-100/[0.03]"
      >
        ∑
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-24">
        <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-[#EA580C]">
          Example projects
        </div>
        <h2 className="mt-4 font-serif-display text-4xl leading-[1.05] tracking-tight text-stone-900 md:text-5xl dark:text-stone-100">
          Do maths that makes a difference
        </h2>
        <p className="mt-4 text-[16px] leading-[1.7] text-stone-700 dark:text-stone-300">
          Browse projects built by HIMPact Hacks participants.
        </p>

        <div className="mt-10 border-t border-stone-900/15 dark:border-stone-100/15">
          {causeAreas.map((area) => (
            <CauseAccordion key={area.id} area={area} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to={PROJECTS_BOARD_URL}
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#EA580C] hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:hover:text-orange-400"
            data-testid="example-projects-cta"
          >
            Show more projects
            <ArrowRight
              size={16}
              className="transition-transform [transition-duration:120ms] group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
