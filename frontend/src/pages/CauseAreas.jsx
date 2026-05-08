import React, { useState } from "react";
import { Link } from "react-router-dom";
import EACard from "../components/EACard";
import Modal from "../components/Modal";
import { ArrowRight } from "lucide-react";
import { CAUSE_AREAS } from "../data/causeAreas";

export default function CauseAreas() {
  const [open, setOpen] = useState(null);
  const causeAreas = Array.isArray(CAUSE_AREAS) ? CAUSE_AREAS : [];

  return (
    <div data-testid="page-cause-areas" className="bg-white dark:bg-stone-950">
      {/* HEADER */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-5xl text-stone-900 dark:text-stone-100">
            Cause areas
          </h1>
          <p className="mt-6 max-w-3xl font-serif-display italic text-stone-600 dark:text-stone-400 text-xl md:text-2xl leading-snug">
            Problems where mathematicians can maximise their impact.
          </p>
          <div className="ea-rule mt-10" />
          <p className="mt-10 max-w-3xl text-stone-700 dark:text-stone-300 text-lg leading-[1.7]">
            Each profile consists of a problem the world requires help with and how mathematics has something to offer, as well as a starting list of questions you could begin chewing on this week. Click any card to read more.
          </p>
        </div>
      </section>

      {/* SINGLE UNGROUPED GRID */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 mt-10 md:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {causeAreas.map((c) => (
              <EACard
                key={c.slug}
                image={c.image}
                title={c.title}
                source={c.short}
                onClick={() => setOpen(c)}
                className=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL MODAL */}
      <Modal open={!!open} onClose={() => setOpen(null)} labelledBy="cause-modal-title">
        {open && (
          <>
            <div className="aspect-[21/9] overflow-hidden rounded-t-3xl">
              <img src={open.image} alt={open.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-10">
              <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                Cause area
              </div>
              <h3 id="cause-modal-title" className="mt-3 font-serif-display text-3xl md:text-4xl leading-[1.1] text-stone-900 dark:text-stone-100">
                {open.title}
              </h3>
              <p className="mt-5 text-stone-700 dark:text-stone-300 text-lg leading-relaxed font-serif-display italic">
                {open.short}
              </p>
              <p className="mt-5 text-stone-700 dark:text-stone-300 leading-relaxed">{open.why}</p>
              <div className="mt-8">
                <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-3">
                  Open work mathematicians can take on
                </div>
                <ul className="space-y-2">
                  {open.work.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-stone-800 dark:text-stone-200">
                      <span className="font-mono-tag text-orange-600 dark:text-orange-400 mt-1">→</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/take-action" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 text-sm font-medium rounded-full transition-colors">
                  Get involved <ArrowRight size={15} />
                </Link>
                <Link to="/learn/resources" className="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-200 text-stone-900 dark:text-stone-100 px-5 py-3 text-sm font-medium rounded-full transition-colors">
                  Browse resources
                </Link>
              </div>
            </div>
          </>
        )}
      </Modal>

    </div>
  );
}
