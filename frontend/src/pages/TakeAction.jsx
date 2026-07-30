import React from "react";
import { Link } from "react-router-dom";
import ProjectsBoard from "../components/ProjectsBoard";
import { PROJECTS } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

const DISCORD_URL = "https://discord.gg/yCWmXRwxdW"; // HIM Discord invite

const SPONSORS = [
  // Non-Trivial funded the $500 cash prize pool.
  { label: "Non-Trivial", href: "https://www.non-trivial.org/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/non-trivial.svg` },
  { label: ".xyz", href: "https://gen.xyz/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/xyz.png` },
  { label: "Overleaf", href: "https://www.overleaf.com/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/overleaf.jpg` },
  { label: "The Daily Integral", href: "https://dailyintegral.com/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/daily-integral.png` },
];

export default function TakeAction() {
  return (
    <div data-testid="page-project-board" className="bg-white dark:bg-stone-950">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-stone-950">
        <div
          aria-hidden
          className="absolute font-serif-display font-medium select-none pointer-events-none text-[340px] md:text-[560px] leading-none text-orange-600/[0.05] right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
        >
          λ
        </div>
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5 em-fade-up">
              <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-white bg-stone-700 px-2.5 py-1 rounded">
                Archived
              </span>
              <span className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                From our launch event
              </span>
            </div>
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[92px] tracking-tight leading-[0.95] text-stone-900 dark:text-stone-100 em-fade-up em-delay-1">
              Project Board
            </h1>
            <p className="mt-6 max-w-2xl font-serif-display italic text-stone-500 dark:text-stone-400 text-xl md:text-2xl leading-snug em-fade-up em-delay-2">
              Everything students built at HIMPact Hacks, our launch hackathon and first weekend as a community.
            </p>
            <p className="mt-5 max-w-2xl text-stone-600 dark:text-stone-400 text-[16px] md:text-[17px] leading-[1.75]">
              HIMPact Hacks &rsquo;26 ran from Friday 24 to Sunday 26 July 2026, online and open to
              school and university students anywhere. Each participant chose one of six cause
              areas and spent the weekend, working solo or in a small team, turning a problem they
              cared about into a model, a simulation, a data analysis, or an original piece of
              research. Mentors and expert seminars ran throughout, and the weekend closed with
              Demo Day, where judges picked first, second and third place alongside a set of
              honourable mentions. The {PROJECTS.length} projects below are the permanent archive
              of what they made.
            </p>
            <div className="mt-8">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-full font-medium transition-colors"
                data-testid="project-board-discord"
              >
                Join our Discord <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Sponsors — logos link out to each sponsor. */}
          <div className="mt-14 md:mt-16 pt-10 border-t border-stone-200 dark:border-stone-800 max-w-5xl">
            <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400 mb-6">
              Sponsored by
            </div>
            <div className="flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-6">
              {SPONSORS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={s.logo}
                    alt={s.label}
                    className="max-h-9 md:max-h-11 w-auto object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <p className="mt-7 text-stone-500 dark:text-stone-400 text-[14px]">
              Interested in supporting what we run next?{" "}
              <Link to="/contact" className="em-link text-orange-700 dark:text-orange-400 font-medium">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── THE BOARD ────────────────────────────────────────────────────────── */}
      <ProjectsBoard />

      {/* ── WHAT CAME NEXT ───────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-2xl bg-stone-900 dark:bg-stone-950 border border-stone-800 px-8 md:px-14 py-12 md:py-16">
            <div
              aria-hidden
              className="absolute font-serif-display font-medium select-none pointer-events-none text-[240px] md:text-[380px] leading-none text-orange-500/[0.06] right-4 bottom-0 translate-y-1/4"
            >
              ∞
            </div>
            <div className="relative max-w-2xl">
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-4">
                What came next
              </div>
              <h2 className="font-serif-display text-3xl md:text-5xl text-white leading-[1.05]">
                The hackathon was just the start
              </h2>
              <p className="mt-5 text-stone-300 text-[16px] md:text-lg leading-[1.7]">
                Every participant stepped into our Discord community and Impact Hours, our recurring bi-weekly sessions that are part seminar and part office hours, where you share how your work is going, meet an influential high-impact mathematician, and keep pushing your project forward long after Demo Day. That community is still open, and you do not need to have been at the hackathon to join it.
              </p>
              <div className="mt-8">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-100 hover:bg-white hover:text-stone-900 px-6 py-3.5 rounded-full font-medium transition-colors"
                >
                  Join our Discord <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
