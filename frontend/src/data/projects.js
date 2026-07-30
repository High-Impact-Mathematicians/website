/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONSENT
 *
 * Every entry on the projects board is opt-in. A project is only added to
 * projects.json after the participant has consented to it being published.
 * If any member of a team declines, the project does not go up — there is no
 * partial listing and no anonymised listing.
 *
 * This notice lives here rather than at the top of projects.json because JSON
 * has no comment syntax and the board reads that file as a bare array.
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * projects.json holds the real HIMPact Hacks '26 submissions. It was built
 * from the response sheet, which records one row per *person* rather than per
 * project — teams filed separately — so any rebuild from that source must
 * dedupe by submitted link before adding entries here.
 */

import rawProjects from "./projects.json";
import { CAUSE_AREAS } from "./causeAreas";

// Labels are pulled from the site's existing cause-area data so the board and
// the /learn/cause-areas page can never drift apart. Institutional resilience
// is a HIMPact Hacks area that has no profile page yet, so its label is
// declared here until one exists.
const LOCAL_LABELS = {
  "institutional-resilience": "Institutional Resilience",
};

export const CAUSE_AREA_LABELS = CAUSE_AREAS.reduce(
  (acc, area) => ({ ...acc, [area.slug]: area.title }),
  { ...LOCAL_LABELS }
);

export const AWARD_LABELS = {
  "1st": "1st place",
  "2nd": "2nd place",
  "3rd": "3rd place",
  "honourable-mention": "Honourable mention",
};

// Awarded projects sort above unawarded ones, in placement order.
const PLACEMENT_ORDER = { "1st": 0, "2nd": 1, "3rd": 2, "honourable-mention": 3 };
const UNAWARDED = 99;

// "HIMPact Hacks '26" -> 2026, "HIMPact Hacks 2027" -> 2027. Unparseable
// editions sort last rather than throwing.
export function editionYear(edition) {
  const match = String(edition || "").match(/(\d{4})|'(\d{2})/);
  if (!match) return 0;
  return match[1] ? Number(match[1]) : 2000 + Number(match[2]);
}

/** Newest edition first, then placement order, then alphabetical by title. */
export function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    const byEdition = editionYear(b.edition) - editionYear(a.edition);
    if (byEdition !== 0) return byEdition;

    const rankA = a.award ? PLACEMENT_ORDER[a.award] ?? UNAWARDED : UNAWARDED;
    const rankB = b.award ? PLACEMENT_ORDER[b.award] ?? UNAWARDED : UNAWARDED;
    if (rankA !== rankB) return rankA - rankB;

    return a.title.localeCompare(b.title);
  });
}

export const PROJECTS = sortProjects(rawProjects);
