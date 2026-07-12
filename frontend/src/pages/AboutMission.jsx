import React from "react";
import { Link } from "react-router-dom";

// TODO: replace with the real HIM Discord invite before publishing.
const DISCORD_URL = "https://discord.gg/yCWmXRwxdW";

const PRINCIPLES = [
  {
    title: "Inclusive & Quantitatively Driven",
    body: "We welcome mathematicians and quantitative thinkers across backgrounds, career stages, and levels of experience. You do not need to arrive as an expert in effective altruism to contribute meaningfully. What matters is a genuine commitment to using your skills thoughtfully.",
  },
  {
    title: "Collaborative",
    body: "We believe that progress in solving the world's most important problems comes from open collaboration, peer feedback, and shared ownership of ideas. We encourage collaboration, and group particiption in projects to iterate upon each others' ideas and feedback.",
  },
  {
    title: "Open Truth-Seeking",
    body: "We treat belief as provisional and update when better evidence appears. Being willing to revise assumptions is a core part of rigorous reasoning.",
  },
  {
    title: "Honest & Epistemically Humble",
    body: "We reason transparently and make our assumptions explicit whenever possible. Epistemic humility means recognizing uncertainty, and welcoming critique. We would rather improve our reasoning together than preserve confidence in a weak argument.",
  },
  {
    title: "Impartially Altruistic",
    body: "We take a 'radical' view of empathy that extends across borders, identities, and species. Geographic proximity or familiarity alone should not determine which cause areas are worth pursuing. We aim to direct effort where suffering is greatest and where carefully applied quantitative work can help most.",
  },
];

const PROGRAMS = [
  {
    num: "01",
    title: "Community and events",
    body: "A tight-knit, welcoming Discord community, launched by HIMPact Hacks, our first hackathon, and kept alive by recurring bi-weekly sessions, expert seminars, and collaborative ideation so mathematicians can meet peers and build together.",
    href: "/take-action",
  },
  {
    num: "02",
    title: "Projects board",
    body: "We connect projects that need quantitative or mathematical expertise with people who can contribute, and give members a place to showcase what they build, from open research questions to collaborations and partner-led problems worth exploring.",
  },
  {
    num: "03",
    title: "Impact Hours",
    body: "Our recurring bi-weekly sessions, part seminar and part office hours. Members share how their work is going, meet an influential high-impact mathematician, and keep pushing their projects forward together.",
  },
];

function ImagePlaceholder({ label = "Image placeholder", aspect = "aspect-[4/3]" }) {
  return (
    <div className={`w-full ${aspect} rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col items-center justify-center gap-3`}>
      <div className="w-10 h-10 rounded-full border-2 border-stone-300 dark:border-stone-700 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-400 dark:text-stone-600">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <span className="font-mono-tag text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">{label}</span>
    </div>
  );
}

export default function AboutMission() {
  return (
    <div data-testid="page-about-mission" className="bg-white dark:bg-stone-950">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
        <div
          aria-hidden
          className="absolute font-serif-display font-medium select-none pointer-events-none text-[360px] md:text-[540px] leading-none text-orange-600/[0.045] right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
        >
          ∂
        </div>
        <div className="relative w-full max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-6 em-fade-up">
            Our Philosophy
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-4xl text-stone-900 dark:text-stone-100 em-fade-up em-delay-1">
            Our mission, values and strategy
          </h1>
          <p className="mt-6 max-w-3xl font-serif-display italic text-stone-500 dark:text-stone-400 text-xl md:text-2xl leading-snug em-fade-up em-delay-2">
            Mathematicians are unusually good at noticing when an argument doesn&#39;t quite add up. We think the world would be better if more of that energy were pointed at the problems that matter most.
          </p>
        </div>
      </section>

      {/* THE IMPACT GAP */}
      <section className="relative bg-cream dark:bg-stone-900/40 overflow-hidden">
        <div
          aria-hidden
          className="absolute font-serif-display font-medium select-none pointer-events-none text-[280px] md:text-[460px] leading-none text-orange-600/[0.05] -right-10 md:-right-20 top-1/2 -translate-y-1/2"
        >
          ∅
        </div>
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-4">
            The problem
          </div>
          <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-3">
            The impact gap
          </h2>
          <div className="ea-rule mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-12 space-y-5 text-stone-700 dark:text-stone-300 text-[17px] leading-[1.75] max-w-5xl">
              <p>
                Mathematicians are trained to solve the hardest quantitative problems. Yet most mathematical talent flows into academia, finance, and industry while the world's most pressing problems continue to remain under-resourced.
              </p>
              <blockquote className="my-8 pl-6 border-l-4 border-orange-500 dark:border-orange-400">
                <p className="font-serif-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug italic">
                  The world needs more mathematicians working on important problems.
                </p>
              </blockquote>
              <p>
                The most urgent cause areas, from biosecurity and climate change to global health and farmed animal welfare, are technically complex, deeply neglected, and often tractable. They need quantitative minds willing to turn their skills toward them.
              </p>
              <p>
                There are numerous resources online such as fellowships, introductory EA courses, and books and articles that can be read. But none provide a dedicated space for mathematicians to work together and help each other translate their mathematical skills into concrete impact pathways.
              </p>
              <p>
                There is a lack of a larger quantitative network focused on contributing to high-impact cause areas. Mathematics is not as much of a socially focused community compared to other fields. We want this community to be a home where you can connect, build specific skills, and use your work for good causes.
              </p>
              <p>
                If you are an early-career mathematician or a math student who wants to use your skills for altruistic ambitions, this is the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-stone-900 dark:bg-stone-900 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute font-serif-display font-medium select-none pointer-events-none text-[240px] md:text-[380px] leading-none text-white/[0.03] left-0 bottom-0 translate-y-1/4 -translate-x-1/6"
        >
          λ
        </div>
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            <div>
              <div>
                <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-6">
                  Vision
                </h6>
                <p className="font-serif-display text-3xl md:text-4xl text-white leading-[1.2]">
                  We envision a world where mathematicians and quantitative thinkers direct their skills toward humanity's most pressing problems.
                </p>
              </div>
            </div>
            <div className="lg:border-l lg:border-stone-700 lg:pl-16">
              <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-6">
                Mission
              </h6>
              <p className="text-stone-200 text-[17px] leading-[1.8] font-medium">
                To build the first unified global community for early career mathematicians and quantitative thinkers to learn about high-impact cause areas, connect with peers, and produce work that truly matters. 
              </p>
              <div className="mt-6 w-12 h-px bg-orange-500/60" />
              <p className="mt-6 text-stone-400 text-[15px] leading-[1.75]">
                Today, the mathematical community's most visible spaces tend to be competitive mathematics forums and academic circles. While these communities are valuable, they often celebrate what mathematicians can do without directing those skills toward real-world challenges.
              </p>
              <p className="mt-4 text-stone-400 text-[15px] leading-[1.75]">
                We are building a community defined by contribution to the world's most important cause areas. We connect like-minded individuals, surface high-impact opportunities, foster meaningful collaboration, and grow a space for mathematicians to use their abilities for good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-16">
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-4">
              Our strategy
            </div>
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              How will we achieve our mission?
            </h2>
            <div className="ea-rule mb-6" />
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[16px]">
              Our target audience is early-career mathematicians and quantitative thinkers. We help them direct their skills toward the world's most pressing problems through three core initiatives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {PROGRAMS.map((prog) => {
              const card = (
                <article
                  className="bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-lg p-7 md:p-8 flex flex-col transition-colors h-full group-hover:border-orange-400/50 dark:group-hover:border-orange-500/40"
                >
                  <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-4">
                    {prog.num}
                  </div>
                  <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed flex-1">
                    {prog.body}
                  </p>
                  {prog.status && (
                    <span className="mt-4 inline-flex items-center font-mono-tag text-[10px] uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300 bg-orange-100/80 dark:bg-orange-400/15 px-3 py-1 rounded-full self-start">
                      {prog.status}
                    </span>
                  )}
                </article>
              );

              if (prog.href && prog.external) {
                return (
                  <a
                    key={prog.num}
                    href={prog.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    {card}
                  </a>
                );
              }

              if (prog.href) {
                return (
                  <Link key={prog.num} to={prog.href} className="group block">
                    {card}
                  </Link>
                );
              }

              return (
                <div key={prog.num} className="group">
                  {card}
                </div>
              );
            })}
          </div>

          <div className="mb-16 text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
            We also support career transitions by sharing pathways, case studies, and skill-to-impact mappings inspired by 80,000 Hours. We facilitate referrals between EA organizations and technical mathematicians so talent can move toward high-impact roles faster.
          </div>

          <div className="relative bg-stone-900 dark:bg-stone-900 rounded-lg p-8 md:p-10 overflow-hidden">
            <div
              aria-hidden
              className="absolute font-serif-display font-medium select-none pointer-events-none text-[180px] leading-none text-white/[0.04] right-6 bottom-0 translate-y-1/4"
            >
              ∞
            </div>
            <div className="relative">
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-3">
                Community
              </div>
              <h3 className="font-serif-display text-2xl md:text-3xl text-white mb-4">
                Join our server
              </h3>
              <p className="text-stone-300 text-[15px] leading-relaxed max-w-2xl">
                Our community lives on Discord. It is where members meet, share what they are working on, ask for help, and find people to build with. Come and say hello.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-full font-medium transition-colors"
              >
                Join our Discord community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS */}
      <section className="bg-cream dark:bg-stone-900/40">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-12">
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-4">
              How we measure progress
            </div>
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Success metrics
            </h2>
            <div className="ea-rule mb-6" />
            <p className="text-stone-600 dark:text-stone-400 text-[16px] leading-relaxed">
              We track metrics that show whether the community is moving mathematical talent toward high-impact work. HIMPact Hacks, our launch event, is where a lot of this starts, so it anchors what we measure first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-8 md:p-10 hover:border-orange-400/50 dark:hover:border-orange-500/40 transition-colors">
              <div className="font-serif-display text-6xl md:text-7xl text-orange-600/20 dark:text-orange-400/20 leading-none mb-4 select-none" aria-hidden>
                01
              </div>
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-3">
                Metric 1
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Events and participation
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of events we run and how many people take part, starting with HIMPact Hacks registrations and active participants. We track the reach and depth of our engagement.
              </p>
            </article>

            <article className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-8 md:p-10 hover:border-orange-400/50 dark:hover:border-orange-500/40 transition-colors">
              <div className="font-serif-display text-6xl md:text-7xl text-orange-600/20 dark:text-orange-400/20 leading-none mb-4 select-none" aria-hidden>
                02
              </div>
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-3">
                Metric 2
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Research questions answered
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of EA-aligned mathematical research questions answered or advanced through community work.
              </p>
            </article>

            <article className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-8 md:p-10 hover:border-orange-400/50 dark:hover:border-orange-500/40 transition-colors">
              <div className="font-serif-display text-6xl md:text-7xl text-orange-600/20 dark:text-orange-400/20 leading-none mb-4 select-none" aria-hidden>
                03
              </div>
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-3">
                Metric 3
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Ideas generated
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of ideas and projects generated for mathematical solutions to pressing problems, including everything built at HIMPact Hacks.
              </p>
            </article>

            <article className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-8 md:p-10 hover:border-orange-400/50 dark:hover:border-orange-500/40 transition-colors">
              <div className="font-serif-display text-6xl md:text-7xl text-orange-600/20 dark:text-orange-400/20 leading-none mb-4 select-none" aria-hidden>
                04
              </div>
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-3">
                Metric 4
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Career impact shifts
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of mathematicians who self-report pivoting to higher-impact careers due to the community.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="mb-14">
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-4">
              Our logic
            </div>
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Theory of change
            </h2>
            <div className="ea-rule mb-8" />
            <p className="text-stone-600 dark:text-stone-400 text-[17px] leading-relaxed">
              Our theory of change is simple. The world's most pressing problems are severely neglected and deeply quantitative in nature, yet the mathematicians best equipped to work on them are rarely guided toward these cause areas. We focus on three levers: provide a clear on-ramp using existing high-quality resources, coordinate mathematicians through a tight-knit community, and match skills to concrete projects and research questions. Iterating on this logic has shaped our current mission and strategy.
            </p>
          </div>

          <div className="mt-8">
            <img
              src={`${process.env.PUBLIC_URL}/images/toc.svg`}
              alt="High Impact Mathematicians theory of change"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* PRINCIPLES & PHILOSOPHY */}
      <section className="bg-cream dark:bg-stone-900/40">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-24">
          <div>
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-4">
              Our Cultural DNA
            </div>
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Principles &amp; philosophy
            </h2>
            <div className="ea-rule mb-6" />
            <div className="space-y-4 text-stone-600 dark:text-stone-400 text-[16px] leading-relaxed">
              <p>
                High Impact Mathematicians does not require its members to subscribe to any particular school of thought. Our ideas have been shaped by a few of them, from effective altruism to Rutger Bregman&#39;s{" "}
                <a href="https://rutgerbregman.com/books/moral-ambition" target="_blank" rel="noreferrer" className="em-link font-medium">moral ambition</a>, but we do not fully endorse or align ourselves with any single one. We take the parts we find useful, mostly the frameworks for thinking clearly about how to do the most good, and leave the rest. What holds us together is a shared commitment to pointing mathematical skill at the problems that matter, not any particular label.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-12">
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-4">
              Our values
            </div>
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              The values that guide our work
            </h2>
            <div className="ea-rule mb-6" />
          </div>
          <div className="space-y-10">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h4 className="inline-flex items-center font-mono-tag text-[14px] md:text-[15px] uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300 font-semibold bg-orange-100/80 dark:bg-orange-400/15 px-3 py-1 rounded">
                  {p.title.toUpperCase()}
                </h4>
                <p className="mt-3 text-stone-600 dark:text-stone-400 text-[16px] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
