import React from "react";
import { ArrowUpRight } from "lucide-react";
import EASectionHeader from "./EASectionHeader";
import ProjectCard from "./ProjectCard";
import BoardFilters from "./BoardFilters";
import { PROJECTS, CAUSE_AREA_LABELS, AWARD_LABELS } from "../data/projects";

// Where the next edition is announced and opened for sign-ups. The '26
// registration form is closed, so this points at the Discord.
const REGISTRATION_URL = "https://discord.gg/yCWmXRwxdW";

const ENTER_DELAY = 250;
const LEAVE_DELAY = 120;

/** Everything a visitor might reasonably type, flattened once per project. */
function haystack(project) {
  return [
    project.title,
    ...(project.team || []),
    project.description,
    CAUSE_AREA_LABELS[project.causeArea] || project.causeArea,
    project.award ? AWARD_LABELS[project.award] : null,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function ProjectsBoard({ projects = PROJECTS }) {
  const [expandedId, setExpandedId] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const [cause, setCause] = React.useState(null);
  const enterTimer = React.useRef(null);
  const leaveTimer = React.useRef(null);

  const clearTimers = React.useCallback(() => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
  }, []);

  // Hover intent: a fast sweep across the grid never lands, because each
  // mouseenter cancels the pending collapse and each mouseleave cancels the
  // pending expand.
  const expand = React.useCallback(
    (id) => {
      clearTimers();
      enterTimer.current = setTimeout(() => setExpandedId(id), ENTER_DELAY);
    },
    [clearTimers]
  );

  const collapse = React.useCallback(() => {
    clearTimers();
    leaveTimer.current = setTimeout(() => setExpandedId(null), LEAVE_DELAY);
  }, [clearTimers]);

  // Keyboard focus expands immediately — there is no intent to disambiguate.
  // Collapse still runs on the delay so tabbing between links inside an
  // expanded card does not close it.
  const expandNow = React.useCallback(
    (id) => {
      clearTimers();
      setExpandedId(id);
    },
    [clearTimers]
  );

  React.useEffect(() => clearTimers, [clearTimers]);

  // Search index is built once, not on every keystroke.
  const indexed = React.useMemo(
    () => projects.map((project) => ({ project, text: haystack(project) })),
    [projects]
  );

  // Chips are built from what is actually on the board, so a filter can never
  // come back empty. Counts ignore the search box — they describe the board.
  const causes = React.useMemo(() => {
    const counts = new Map();
    for (const project of projects) {
      if (!project.causeArea) continue;
      counts.set(project.causeArea, (counts.get(project.causeArea) || 0) + 1);
    }
    return [...counts.entries()]
      .map(([slug, count]) => ({
        slug,
        count,
        label: CAUSE_AREA_LABELS[slug] || slug,
      }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [projects]);

  // Every whitespace-separated term must match somewhere, so "khan origami"
  // narrows rather than widens.
  const visible = React.useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return indexed
      .filter(({ project, text }) => {
        if (cause && project.causeArea !== cause) return false;
        return terms.every((term) => text.includes(term));
      })
      .map(({ project }) => project);
  }, [indexed, query, cause]);

  // A card that filters out from under the cursor would otherwise stay stuck
  // in the expanded state.
  React.useEffect(() => {
    clearTimers();
    setExpandedId(null);
  }, [query, cause, clearTimers]);

  const clearAll = React.useCallback(() => {
    setQuery("");
    setCause(null);
  }, []);

  React.useEffect(() => {
    if (!expandedId) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        clearTimers();
        setExpandedId(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [expandedId, clearTimers]);

  return (
    <section
      className="border-t border-stone-200 bg-cream dark:border-stone-800"
      data-testid="projects-board"
    >
      {/* Extra bottom padding so a card in the final row can grow downwards
          without leaving the section. */}
      <div className="mx-auto max-w-[1240px] px-6 pb-32 pt-16 md:px-10 md:pb-44 md:pt-28">
        <EASectionHeader
          kicker="Projects board"
          title="What students built at HIMPact Hacks"
          subtitle="Every project here was built in a single weekend by students, and published with their permission."
        />

        {projects.length === 0 ? (
          <div
            className="mt-10 rounded-none border border-stone-200 bg-white p-8 md:p-12 dark:border-stone-800 dark:bg-stone-950"
            data-testid="projects-board-empty"
          >
            <h3 className="font-serif-display text-2xl leading-tight text-stone-900 dark:text-stone-100">
              The board opens after the next hackathon
            </h3>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
              Projects go up once HIMPact Hacks has run and participants have agreed to publish.
              Registration for the next edition opens in our Discord.
            </p>
            <div className="mt-6">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none bg-[#C2410C] px-5 py-3 text-[14px] font-medium text-white transition-colors [transition-duration:120ms] hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Join our Discord <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        ) : (
          <>
            <BoardFilters
              query={query}
              onQueryChange={setQuery}
              cause={cause}
              onCauseChange={setCause}
              causes={causes}
              total={projects.length}
              shown={visible.length}
            />

            {visible.length === 0 ? (
              <div
                className="mt-8 border border-stone-200 bg-white p-8 md:p-12 dark:border-stone-800 dark:bg-stone-950"
                data-testid="projects-board-no-results"
              >
                <h3 className="font-serif-display text-xl leading-tight text-stone-900 dark:text-stone-100">
                  No projects match that
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-600 dark:text-stone-400">
                  Try a different spelling, or search by a teammate&rsquo;s name.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 border border-stone-300 px-4 py-2 font-mono-tag text-[9.5px] uppercase tracking-[0.12em] text-stone-700 transition-colors [transition-duration:120ms] hover:border-stone-400 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-stone-700 dark:text-stone-300 dark:hover:text-stone-100"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {visible.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    expanded={expandedId === project.id}
                    onExpand={() => expand(project.id)}
                    onCollapse={collapse}
                    onFocusExpand={() => expandNow(project.id)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
