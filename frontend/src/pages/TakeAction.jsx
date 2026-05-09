import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import EASectionHeader from "../components/EASectionHeader";
import { ArrowUpRight, ArrowRight, Users, PenLine, Lightbulb, ChevronDown } from "lucide-react";

const FORUM_URL = "https://github.com/orgs/High-Impact-Mathematicians/discussions";

const COMMUNITY_PHOTOS = [
  { src: "https://placehold.co/600x800/e7e5e4/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x450/d6d3d1/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x800/e7e5e4/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x450/d6d3d1/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x450/e7e5e4/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x800/d6d3d1/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x450/e7e5e4/a8a29e?text=Photo", alt: "Community member" },
  { src: "https://placehold.co/600x800/d6d3d1/a8a29e?text=Photo", alt: "Community member" },
];

const LEFT_ASPECTS  = ["aspect-[3/4]", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]"];
const RIGHT_ASPECTS = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[3/4]"];

const STEPS = [
  {
    number: "01",
    Icon: Users,
    title: "Join the GitHub Forum",
    body: "Our GitHub Discussions forum is the heartbeat of this community. Browse open questions, connect with mathematicians working on high-impact problems, and see what's already being built.",
    cta: { label: "Open the forum", href: FORUM_URL, external: true },
  },
  {
    number: "02",
    Icon: PenLine,
    title: "Make Your First Post",
    body: "Introduce yourself, share a problem you're curious about, or post a draft idea. The forum is intentionally low-stakes and welcomes half-formed thoughts. Every great project starts with a single question.",
    cta: { label: "Start a discussion", href: FORUM_URL, external: true },
  },
  {
    number: "03",
    Icon: Lightbulb,
    title: "Work on an Impactful Cause Area",
    body: "Browse cause areas — from biosecurity to AI safety to climate modelling — and find where your mathematical skills can do the most good. Write a problem profile, join a project, or start your own.",
    cta: { label: "Explore cause areas", to: "/learn/cause-areas" },
  },
];

const MORE_WAYS = [
  {
    title: "Write a short problem profile",
    body: "Pick a sub-problem in a cause area. Spend a weekend putting numbers on it and share what you find.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "See profile examples", to: "/learn/cause-areas" },
  },
  {
    title: "Co-host an event",
    body: "Reading group, problem-solving night, talk at your university maths department. We'll help you put it together and amplify your impact.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "Email the organisers", to: "/contact" },
  },
  {
    title: "Mentor someone new",
    body: "If you have already done one piece of work in a priority area, you are qualified to help someone start theirs. Mentorship is a very high-leverage way to use your expertise.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    cta: { label: "Get in touch", to: "/contact" },
  },
];

function PhotoCollage({ col1Ref, col2Ref, containerRef }) {
  const left  = COMMUNITY_PHOTOS.slice(0, 4);
  const right = COMMUNITY_PHOTOS.slice(4, 8);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full rounded-2xl"
      style={{ height: "calc(100vh - 240px)", minHeight: 360, maxHeight: 600 }}
    >
      <div
        ref={col1Ref}
        className="absolute flex flex-col gap-2.5 will-change-transform"
        style={{ top: 0, left: 0, right: "calc(50% + 5px)" }}
      >
        {left.map((p, i) => (
          <div key={i} className={`${LEFT_ASPECTS[i]} shrink-0 overflow-hidden rounded-xl`}>
            <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div
        ref={col2Ref}
        className="absolute flex flex-col gap-2.5 will-change-transform"
        style={{ top: 40, left: "calc(50% + 5px)", right: 0 }}
      >
        {right.map((p, i) => (
          <div key={i} className={`${RIGHT_ASPECTS[i]} shrink-0 overflow-hidden rounded-xl`}>
            <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TakeAction() {
  const pinRef       = useRef(null);
  const col1Ref      = useRef(null);
  const col2Ref      = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let col1Overflow = 0;
    let col2Overflow = 0;

    const isDesktop = () => window.innerWidth >= 1024;

    const measure = () => {
      if (!isDesktop()) return;
      const col1 = col1Ref.current;
      const col2 = col2Ref.current;
      const box  = containerRef.current;
      if (!col1 || !col2 || !box) return;
      const boxH = box.offsetHeight;
      col1Overflow = Math.max(0, col1.offsetHeight - boxH);
      col2Overflow = Math.max(0, col2.offsetHeight + 40 - boxH);
    };

    const onScroll = () => {
      if (!isDesktop()) return;
      const el = pinRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable));
      if (col1Ref.current) col1Ref.current.style.transform = `translateY(${-progress * col1Overflow}px)`;
      if (col2Ref.current) col2Ref.current.style.transform = `translateY(${-progress * col2Overflow * 0.78}px)`;
    };

    const onResize = () => { measure(); onScroll(); };

    const t = setTimeout(() => { measure(); onScroll(); }, 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div data-testid="page-take-action" className="bg-white dark:bg-stone-950">

      {/* ── PINNED HERO ──────────────────────────────────────────────────────────
          On desktop (lg+): 260vh tall — sticky child locks to viewport while
          the extra 160vh drives the photo scroll animation.
          On mobile: h-screen — no scroll trap, page flows naturally.
      ──────────────────────────────────────────────────────────────────────── */}
      <div ref={pinRef} className="relative h-screen lg:h-[260vh]">
        <div className="sticky top-0 h-screen flex flex-col bg-white dark:bg-stone-950 overflow-hidden">

          {/* Content */}
          <div className="flex-1 flex items-center min-h-0">
            <div className="max-w-[1240px] mx-auto px-6 md:px-10 w-full py-8 lg:py-0">
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center">

                {/* Left: copy */}
                <div>
                  <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-3 md:mb-4">
                    Join the community
                  </div>
                  <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-stone-900 dark:text-stone-100">
                    Become a High-Impact Mathematician
                  </h1>
                  <p className="mt-4 md:mt-6 text-stone-600 dark:text-stone-400 text-base md:text-xl leading-relaxed max-w-lg">
                    Join a growing community of mathematicians directing their skills toward the world's most pressing problems. Connect, collaborate, and contribute to cause areas where your work can matter most.
                  </p>
                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                    <a
                      href={FORUM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Join the forum <ArrowUpRight size={16} />
                    </a>
                    <Link
                      to="/learn/cause-areas"
                      className="inline-flex items-center justify-center gap-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-400 px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Explore cause areas <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Right: scroll-driven photo collage — desktop only */}
                <div className="hidden lg:block w-full">
                  <PhotoCollage col1Ref={col1Ref} col2Ref={col2Ref} containerRef={containerRef} />
                </div>

              </div>
            </div>
          </div>

          {/* Scroll hint — desktop only (mobile has no scroll trap) */}
          <div className="hidden lg:flex pb-6 justify-center">
            <div className="flex flex-col items-center gap-1.5 text-stone-400 dark:text-stone-600">
              <span className="font-mono-tag text-[9px] uppercase tracking-[0.2em]">Scroll to explore</span>
              <ChevronDown size={14} className="animate-bounce" />
            </div>
          </div>

        </div>
      </div>

      {/* ── YOUR ROADMAP ─────────────────────────────────────────────────────── */}
      <section data-testid="roadmap" className="bg-cream dark:bg-stone-900">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="Your Journey"
            title="Your roadmap"
            subtitle="Three steps to get started and make your mark."
          />

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {STEPS.map(({ number, Icon, title, body, cta }) => (
              <div key={number} className="bg-white dark:bg-stone-950 rounded-md p-6 md:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5 md:mb-6">
                  <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                    Step {number}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <h3 className="font-serif-display text-xl md:text-[22px] leading-tight text-stone-900 dark:text-stone-100">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                  {body}
                </p>
                <div className="mt-5 md:mt-6 pt-4 border-t border-stone-200 dark:border-stone-800">
                  {cta.external ? (
                    <a href={cta.href} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-400 text-sm font-medium em-link">
                      {cta.label} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <Link to={cta.to}
                          className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-400 text-sm font-medium em-link">
                      {cta.label} <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GO FURTHER ───────────────────────────────────────────────────────── */}
      <section data-testid="ways-to-engage" className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="Go Deeper"
            title="Go further"
            subtitle="More ways to contribute, in roughly increasing order of commitment."
          />

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-10 md:gap-y-12">
            {MORE_WAYS.map((w, i) => (
              <div key={w.title} data-testid={`way-${i}`}>
                <Link to={w.cta.to} className="ea-card group block">
                  <div className="ea-card-img aspect-[4/3] rounded-md">
                    <img src={w.image} alt={w.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4">
                    <div className="font-serif-display text-[18px] md:text-[20px] leading-tight text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
                      {w.title}
                    </div>
                    <p className="mt-2 text-[13px] md:text-[14px] text-stone-700 dark:text-stone-300 leading-relaxed">{w.body}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-orange-700 dark:text-orange-400 text-sm em-link">
                      {w.cta.label} <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
