import React from "react";
import { Link } from "react-router-dom";

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
    title: "Resource hub",
    body: "A curated library of articles and books designed to help members understand high-impact cause areas and explore how their mathematical skills can be applied to them. Whether you're new to effective altruism or already familiar with the landscape, the Resource Hub can give you a clear starting point and a deeper foundation to build upon.",
    href: "/learn/resources",
  },
  {
    num: "02",
    title: "Community forum",
    body: "Our community forum hosted on GitHub Discussions allows members to share ideas, comment on proposals, collaborate on projects, and build on each other's work. It's a space designed for collective thinking and encourages communities to join in with members to make comments, suggest ideas, and help each other out.",
    href: "https://github.com/orgs/High-Impact-Mathematicians/discussions",
    external: true,
  },
  {
    num: "03",
    title: "Introductory course",
    body: "A structured course delivered through this website, designed for those just getting started. The course introduces the core ideas in our space, outlines the most important cause areas, and helps newcomers find their footing.",
    status: "In progress",
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
                Every year, thousands of mathematicians and quantitatively trained graduates enter academia, finance, and industry. The overwhelming majority spend their careers on problems that are intellectually rich; however, they are largely disconnected from the world's most pressing problems.
              </p>
              <blockquote className="my-8 pl-6 border-l-4 border-orange-500 dark:border-orange-400">
                <p className="font-serif-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug italic">
                  The world needs more mathematicians working on important problems.
                </p>
              </blockquote>
              <p>
                The world's most pressing cause areas, from biosecurity and climate change to global health and farmed animal welfare, are severely underpowered. They lack quantitative minds willing to turn their skills toward them. These problems are technically complex, very neglected, and in many cases, tractable. 
              </p>
              <p>
                Unfortunately, no unified community exists for them to do so. There is no dedicated space where mathematicians and quantitative thinkers can come together to explore high-impact opportunities, exchange ideas, develop proposals, and direct their skills toward work that genuinely matters. As a result, so many talented people simply don't know what's possible with their skills. Many underestimate what they could contribute. Most have far more potential to do good than they realise!
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
                To build the first unified global community for mathematicians and quantitative thinkers to learn about high-impact cause areas, connect with peers, and produce work that truly matters.
              </p>
              <div className="mt-6 w-12 h-px bg-orange-500/60" />
              <p className="mt-6 text-stone-400 text-[15px] leading-[1.75]">
                Today, the mathematical community's most visible spaces tend to be competitive mathematics forums and academic circles, which are arguably oriented around demonstrating ability or advancing academia. While these communities are valuable, they celebrate what mathematicians can do, without often using their skills to address real-world challenges.
              </p>
              <p className="mt-4 text-stone-400 text-[15px] leading-[1.75]">
                We are building a community defined by contribution to the world's most important cause areas. We want to connect like-minded individuals, surface high-impact opportunities, foster meaningful collaboration, and grow a space for mathematicians to use their abilities for good.
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
              We work with mathematicians and quantitative thinkers of all ages and backgrounds to help them in directing their skills toward the world's most pressing problems. Our work is centered around three core initiatives:
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

          <div className="relative bg-stone-900 dark:bg-stone-900 rounded-lg p-8 md:p-10 overflow-hidden">
            <div
              aria-hidden
              className="absolute font-serif-display font-medium select-none pointer-events-none text-[180px] leading-none text-white/[0.04] right-6 bottom-0 translate-y-1/4"
            >
              ∞
            </div>
            <div className="relative">
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-3">
                Open source
              </div>
              <h3 className="font-serif-display text-2xl md:text-3xl text-white mb-4">
                Open source community
              </h3>
              <p className="text-stone-300 text-[15px] leading-relaxed">
                Our entire community is open source. Since it is hosted on GitHub, anyone can contribute, suggest improvements, edit pages, add resources, and help shape what this community becomes. High Impact Mathematicians is therefore, an ever-evolving project, built collectively by the people who care most about it.
              </p>
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
              We track two core indicators to evaluate whether we are actually achieving our goal of redirecting mathematical talent toward high-impact causes.
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
                Participant perspective shift
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of participants who changed their stance on how mathematics can be used for impactful causes, and which causes matter most. We measure this through a survey completed after participants finish the introductory course.
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
                Projects developed
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of projects developed that aim to do good using mathematics and quantiative tools, and direct work toward high-impact cause areas.
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
              The world's most pressing problems are severely neglected and deeply quantitative in nature. Yet the mathematicians and quantitative thinkers best equipped to work on them are rarely guided toward these cause areas. High Impact Mathematicians addresses this by building a global, open community that connects peers, shares resources, and helps people direct their skills toward the cause areas where they can do the most good.
            </p>
          </div>

          {/* Infographic placeholder */}
          <div className="mt-4">
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mb-4">
              Theory of change 
            </div>
            <div className="w-full aspect-[21/9] rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
              <img
                src={`${process.env.PUBLIC_URL}/images/infographic.jpg`}
                alt="Theory of change infographic"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
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
                High Impact Mathematicians does not require its members to subscribe to any particular school of thought. That said, our movement draws heavily on ideas emerging from the effective altruism community. This is because we believe EA has surfaced some very useful frameworks and heuristics for thinking about how to do the most good.
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
