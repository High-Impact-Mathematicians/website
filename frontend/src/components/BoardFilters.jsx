import React from "react";
import { Search, X } from "lucide-react";

const CHIP_BASE =
  "rounded-none border px-3 py-1.5 font-mono-tag text-[9.5px] uppercase leading-none tracking-[0.12em] transition-colors [transition-duration:120ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600";

const CHIP_ON = "border-[#C2410C] bg-[#C2410C] text-white";
const CHIP_OFF =
  "border-stone-300 bg-white text-stone-600 hover:border-stone-400 hover:text-stone-900 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-400 dark:hover:text-stone-100";

/**
 * Search field plus one chip per cause area.
 *
 * Causes are passed in already counted from the visible projects rather than
 * taken from the full cause-area list, so the board can never offer a filter
 * that returns nothing.
 */
export default function BoardFilters({
  query,
  onQueryChange,
  cause,
  onCauseChange,
  causes,
  total,
  shown,
}) {
  const filtering = Boolean(query.trim()) || Boolean(cause);

  return (
    <div className="mt-10" data-testid="board-filters">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* ── Search ──────────────────────────────────────────────────────── */}
        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="board-search" className="sr-only">
            Search projects
          </label>
          <Search
            size={15}
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            id="board-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search projects, people, topics"
            data-testid="board-search"
            className="w-full rounded-none border border-stone-300 bg-white py-2.5 pl-9 pr-9 text-[14px] text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              data-testid="board-search-clear"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-400 transition-colors [transition-duration:120ms] hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:hover:text-stone-100"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* ── Cause areas ─────────────────────────────────────────────────── */}
        <div
          role="group"
          aria-label="Filter by topic"
          className="flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            onClick={() => onCauseChange(null)}
            aria-pressed={cause === null}
            data-testid="board-filter-all"
            className={`${CHIP_BASE} ${cause === null ? CHIP_ON : CHIP_OFF}`}
          >
            All {total}
          </button>
          {causes.map(({ slug, label, count }) => (
            <button
              key={slug}
              type="button"
              onClick={() => onCauseChange(cause === slug ? null : slug)}
              aria-pressed={cause === slug}
              data-testid={`board-filter-${slug}`}
              className={`${CHIP_BASE} ${cause === slug ? CHIP_ON : CHIP_OFF}`}
            >
              {label} {count}
            </button>
          ))}
        </div>
      </div>

      {/* Count is only worth saying once it differs from the full board. */}
      {filtering && (
        <p
          className="mt-4 font-mono-tag text-[9.5px] uppercase tracking-[0.12em] text-stone-500 dark:text-stone-500"
          role="status"
          data-testid="board-result-count"
        >
          {shown} of {total} projects
        </p>
      )}
    </div>
  );
}
