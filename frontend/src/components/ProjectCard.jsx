import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CAUSE_AREA_LABELS, AWARD_LABELS } from "../data/projects";

// Watermark glyphs, matching the mathematical marks used elsewhere in HIM
// branding. Picked from a hash of the project id so a project always draws
// the same one.
const GLYPHS = ["∑", "∫", "∂", "π", "λ", "∇", "⊕", "≈"];

function glyphFor(id) {
  let hash = 0;
  for (let i = 0; i < String(id).length; i += 1) {
    hash = (hash * 31 + String(id).charCodeAt(i)) >>> 0;
  }
  return GLYPHS[hash % GLYPHS.length];
}

/** Full list, for the expanded body. */
function fullTeam(team) {
  const names = (team || []).filter(Boolean);
  if (names.length === 0) return null;
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

/** One-line version for the rest-state band: two names, then a count. */
function shortTeam(team) {
  const names = (team || []).filter(Boolean);
  if (names.length === 0) return null;
  if (names.length <= 2) return fullTeam(names);
  const rest = names.length - 2;
  return `${names[0]}, ${names[1]} and ${rest === 1 ? "one" : rest} more`;
}

const PILL_CLASS =
  "inline-block self-start rounded-none border px-2 py-0.5 font-mono-tag text-[8px] uppercase leading-tight tracking-[0.12em]";

// Covers are whatever the team submitted — portrait papers, landscape slides.
// Anything wider than the 3:4 frame gets contained rather than cropped.
const FRAME_RATIO = 3 / 4;

export default function ProjectCard({
  project,
  expanded,
  onExpand,
  onCollapse,
  onFocusExpand,
}) {
  const [imageFailed, setImageFailed] = React.useState(false);
  const [isWide, setIsWide] = React.useState(false);

  const causeLabel = CAUSE_AREA_LABELS[project.causeArea] || project.causeArea;
  const awardLabel = project.award ? AWARD_LABELS[project.award] : null;
  const showImage = Boolean(project.coverImage) && !imageFailed;

  // Deployed under a repo subpath on GitHub Pages, so covers authored as
  // "/projects/x.png" need the public path prefixed at render time.
  const coverSrc = project.coverImage
    ? `${process.env.PUBLIC_URL}${project.coverImage}`
    : null;

  return (
    <div className="pb-slot" data-testid={`project-slot-${project.id}`}>
      <div
        className={`pb-card group ${expanded ? "is-expanded" : ""}`}
        data-testid={`project-card-${project.id}`}
        onMouseEnter={onExpand}
        onMouseLeave={onCollapse}
      >
        {/* ── Cover ─────────────────────────────────────────────────────── */}
        <div className="pb-media">
          {showImage ? (
            <>
              {/* A landscape slide can only ever fill ~42% of a 3:4 frame, and
                  cropping it to fit would throw away half its width. So the
                  remainder is filled with a blurred copy of the cover itself —
                  the ground matches whatever the slide's own background is,
                  and the dead space stops reading as dead space. Only wide
                  covers need it; portrait ones fill the frame already. */}
              {isWide && (
                <div
                  aria-hidden
                  className="pb-media-bg"
                  style={{ backgroundImage: `url("${coverSrc}")` }}
                />
              )}
              <img
                src={coverSrc}
                alt=""
                loading="lazy"
                className={isWide ? "is-wide" : undefined}
                onError={() => setImageFailed(true)}
                onLoad={(e) => {
                  const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                  if (w && h) setIsWide(w / h > FRAME_RATIO);
                }}
              />
            </>
          ) : (
            <div className="pb-fallback flex items-center justify-center">
              <span
                aria-hidden
                className="select-none font-serif-display leading-none text-[68px] text-stone-900/[0.10] dark:text-stone-100/[0.10]"
              >
                {glyphFor(project.id)}
              </span>
            </div>
          )}

          {/* #C2410C rather than the spec's white-on-#EA580C: that pairing is
              3.56:1 and fails AA. #C2410C gives 5.18:1 at any size. */}
          {awardLabel && (
            <span className="absolute left-0 top-0 z-[3] bg-[#C2410C] px-1.5 py-0.5 font-mono-tag text-[8.5px] uppercase tracking-[0.08em] text-white">
              {awardLabel}
            </span>
          )}
        </div>

        {/* ── Rest-state band ───────────────────────────────────────────── */}
        <div className="pb-band">
          {/* Rides on the band's top edge rather than the card's, where it
              collided with the award tag. Anchored to the band so it tracks
              the band's height on touch, where that height is auto. */}
          <span className="pb-cause bg-[#FEF0E7] px-2 py-1 font-mono-tag text-[8px] uppercase leading-tight tracking-[0.12em] text-stone-900">
            {causeLabel}
          </span>
          <h3 className="font-serif-display text-[15px] leading-[1.2] text-white">
            {project.title}
          </h3>
          {shortTeam(project.team) && (
            <p className="mt-1.5 truncate font-mono-tag text-[9px] uppercase tracking-[0.12em] text-stone-400">
              {shortTeam(project.team)}
            </p>
          )}
          {/* Touch only: no hover to reveal the description, so it lives here. */}
          {project.description && (
            <p className="pb-touch-desc mt-1.5 text-[11px] leading-[1.45] text-stone-200">
              {project.description}
            </p>
          )}
          {project.videoUrl && (
            <p className="pb-touch-desc mt-2">
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onFocus={onFocusExpand}
                onBlur={onCollapse}
                className="relative z-[3] inline-flex items-center gap-1 text-[10.5px] font-medium text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Demo video <ArrowUpRight size={12} />
              </a>
            </p>
          )}
        </div>

        {/* ── Expanded body ─────────────────────────────────────────────── */}
        <div className="pb-body">
          <span className={`${PILL_CLASS} border-[#F5CBA8] bg-[#FEF0E7] text-stone-900`}>
            {causeLabel}
          </span>
          <h3 className="mt-2 font-serif-display text-[15px] leading-[1.18] text-stone-900 dark:text-stone-100">
            {project.title}
          </h3>
          {fullTeam(project.team) && (
            <p className="mt-1 text-[10px] leading-snug text-stone-500 dark:text-stone-400">
              {fullTeam(project.team)}
            </p>
          )}
          {project.description && (
            <p className="mt-2.5 text-[11px] leading-[1.45] text-stone-600 dark:text-stone-400">
              {project.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onFocus={onFocusExpand}
                onBlur={onCollapse}
                className="inline-flex items-center gap-1 text-[11.5px] font-medium text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:text-orange-400"
              >
                View project <ArrowUpRight size={11} />
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onFocus={onFocusExpand}
                onBlur={onCollapse}
                className="inline-flex items-center gap-1 text-[11.5px] font-medium text-stone-600 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:text-stone-400"
              >
                Demo video <ArrowUpRight size={11} />
              </a>
            )}
          </div>
        </div>

        {/* Rest-state link over the whole tile. A sibling of the body links,
            so the two are never nested. */}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onFocus={onFocusExpand}
            onBlur={onCollapse}
            aria-label={project.title}
            className="pb-stretch focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600"
          />
        )}
      </div>
    </div>
  );
}
