import React from "react";
import { Link } from "react-router-dom";
import EASectionHeader from "../components/EASectionHeader";
import EACard from "../components/EACard";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const FORUM_URL = "https://github.com/orgs/Effective-Mathematicians/discussions";

const ways = [
  {
    title: "Post a question in the forum",
    body: "Stuck on a model? Wondering whether a problem is worth your time? Ask. The forum is intentionally low-stakes and is open to drafts and half-formed ideas.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "Open the forum", href: FORUM_URL, external: true },
  },
  {
    title: "Write a short problem profile",
    body: "Pick a sub-problem in a cause area. Spend a weekend putting numbers on it and share what you find!",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "See profile examples", to: "/learn/cause-areas" },
  },
  {
    title: "Co-host an event",
    body: "Reading group, problem-solving night, talk at your university maths department. We'll help you put it together and amplify your impact!",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "Email the organisers", to: "/contact" },
  },
  {
    title: "Mentor someone new",
    body: "If you have already done one piece of work in a priority area, you are qualified to help someone start theirs. Mentorship is a very high-leverage way to use your expertise to generate value for the community.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "Get in touch", to: "/contact" },
  },
];

export default function TakeAction() {
  return (
    <div data-testid="page-take-action" className="bg-white dark:bg-stone-950">
      {/* HEADER */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-4xl text-stone-900 dark:text-stone-100">
            Take action
          </h1>
          <p className="mt-6 max-w-3xl font-serif-display italic text-stone-600 dark:text-stone-400 text-xl md:text-2xl leading-snug">
            We often hear from impact-minded mathematicians that they feel alone in wanting their work to matter more. We are working to change that!
          </p>
          <div className="ea-rule mt-10" />
          <div className="mt-4 max-w-3xl text-stone-700 dark:text-stone-300 text-lg leading-[1.7] space-y-4">
            <p>
              There is no shortage of urgent problems, and mathematics can be part of the solution. We are a community for mathematicians who want their skills to translate into tangible good.
            </p>
            <p>
              If you would like to be involved, the GitHub forum below is the best place to start: share ideas, ask for feedback, and find collaborators.
            </p>
          </div>
        </div>
      </section>

      {/* FORUM — featured card */}
      <section data-testid="forum-feature">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <a
            href={FORUM_URL}
            target="_blank"
            rel="noreferrer"
            className="group block bg-cream dark:bg-stone-900 rounded-md overflow-hidden hover:bg-orange-50 dark:hover:bg-stone-800 transition-colors"
            data-testid="forum-hero-cta"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
              <div className="md:col-span-7 p-10 md:p-14">
                <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                  The community forum
                </div>
                <h2 className="mt-3 font-serif-display text-3xl md:text-5xl leading-[1.05] text-stone-900 dark:text-stone-100">
                  A GitHub-based forum.
                </h2>
                <p className="mt-5 text-stone-700 dark:text-stone-300 text-lg leading-relaxed max-w-xl">
                  We use GitHub Discussions as a forum because keeping a public, version-controlled history of our reasoning allows us to build on each other's ideas.
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-orange-700 dark:text-orange-400 font-medium em-link">
                  Open the forum <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="mt-4 font-mono-tag text-xs text-stone-500 dark:text-stone-500 break-all">{FORUM_URL}</div>
              </div>
              <div className="md:col-span-5 ea-card-img min-h-[260px] md:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
                  alt="People working together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* WAYS TO ENGAGE — EA "Find ways to help" image-top card grid */}
      <section data-testid="ways-to-engage">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <EASectionHeader
            title="Concrete next steps"
            subtitle="Four ways to contribute, in roughly increasing order of commitment."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12">
            {ways.map((w, i) => (
              <div key={w.title} data-testid={`way-${i}`}>
                {w.cta.external ? (
                  <a href={w.cta.href} target="_blank" rel="noreferrer" className="ea-card group block">
                    <div className="ea-card-img aspect-[4/3] rounded-md">
                      <img src={w.image} alt={w.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <div className="font-serif-display text-[20px] leading-tight text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">{w.title}</div>
                      <p className="mt-2 text-[14px] text-stone-700 dark:text-stone-300 leading-relaxed">{w.body}</p>
                      <div className="mt-3 inline-flex items-center gap-1 text-orange-700 dark:text-orange-400 text-sm em-link">
                        {w.cta.label} <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link to={w.cta.to} className="ea-card group block">
                    <div className="ea-card-img aspect-[4/3] rounded-md">
                      <img src={w.image} alt={w.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <div className="font-serif-display text-[20px] leading-tight text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">{w.title}</div>
                      <p className="mt-2 text-[14px] text-stone-700 dark:text-stone-300 leading-relaxed">{w.body}</p>
                      <div className="mt-3 inline-flex items-center gap-1 text-orange-700 dark:text-orange-400 text-sm em-link">
                        {w.cta.label} <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
