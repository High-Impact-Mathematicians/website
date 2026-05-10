import React from "react";
import { Link } from "react-router-dom";
import EASectionHeader from "../components/EASectionHeader";
import { ArrowRight } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Inclusive & Quantitatively Driven",
    body: "We welcome mathematicians and quantitative thinkers across backgrounds, career stages, and levels of experience. You do not need to arrive as an expert in effective altruism to contribute meaningfully. What matters is a genuine commitment to using your skills thoughtfully in service of high-impact work.",
  },
  {
    title: "Collaborative",
    body: "We believe the world's most important problems are too complex to solve in isolation. Strong progress comes from open collaboration, peer feedback, and shared ownership of ideas. We build structures that help people think together, improve each other's work, and move from discussion to action.",
  },
  {
    title: "Open Truth-Seeking",
    body: "We treat belief as provisional and update when better evidence appears. Being willing to revise assumptions is not a weakness; it is a core part of rigorous reasoning. Our culture rewards curiosity, intellectual honesty, and clarity over defensiveness.",
  },
  {
    title: "Honest & Epistemically Humble",
    body: "We reason transparently and make our assumptions explicit whenever possible. Epistemic humility means recognizing uncertainty, sharing limits honestly, and welcoming critique. We would rather improve a model together than preserve confidence in a weak argument.",
  },
  {
    title: "Impartially Altruistic",
    body: "We take an expansive view of moral concern that extends across borders, identities, and species. Geographic proximity or familiarity alone should not determine whose wellbeing matters. We aim to direct effort where suffering is greatest and where carefully applied quantitative work can help most.",
  },
];

const TOC_STEPS = [
  {
    symbol: "∵",
    label: "Because",
    text: "Most mathematicians and quantitative thinkers are never exposed to concrete links between their skills and high-priority global problems — and no unified peer community exists for them in the EA ecosystem.",
  },
  {
    symbol: "→",
    label: "We build",
    text: "A global, open, mathematician-to-mathematician platform with an introductory curriculum, an open-source skills-to-cause-area resource hub, and collaborative project infrastructure.",
  },
  {
    symbol: "∴",
    label: "So that",
    text: "Quantitatively skilled people gain the knowledge, peer connections, and motivation to direct their work toward cause areas that matter.",
  },
  {
    symbol: "⇒",
    label: "Resulting in",
    text: "More mathematical talent applied to biosecurity, climate change, global health, animal welfare, and AI safety — and a replicable model for other STEM-specific communities in EA.",
  },
];

const STRATEGY_PHASES = [
  {
    num: "01",
    label: "Foundation",
    target: "First 50 members",
    body: "Build the introductory course and the first version of the skills-to-cause-area map. Establish the open-source contribution infrastructure. Recruit first members through EA Forums, university group networks, and mathematics communities where we are already active.",
  },
  {
    num: "02",
    label: "Community activation",
    target: "10 projects, at least 3 with concrete outputs",
    body: "Members begin proposing and working on projects. Establish relationships with at least two or three EA organizations willing to act as problem-setters or reviewers of community output — elevating the community from a club to a pipeline.",
  },
  {
    num: "03",
    label: "Consolidation and growth",
    target: "200 members, 25 completed projects",
    body: "Transition the most active members into a structured fellowship model — cohort-based, with defined problem sets and mentorship from senior mathematicians in high-impact roles. Introduce mentorship from practitioners once we have the credibility and network to source them.",
  },
  {
    num: "04",
    label: "Institutionalization",
    target: "Default EA resource for quantitative thinkers",
    body: "Register as a nonprofit. Apply for funding from EA-aligned funders. Become the first place 80,000 Hours, EA university groups, and EA organizations point quantitative people toward.",
  },
];

export default function AboutMission() {
  return (
    <div data-testid="page-about-mission" className="bg-white dark:bg-stone-950">

      {/* HERO */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-4xl text-stone-900 dark:text-stone-100">
            An online community with a specific goal
          </h1>
          <p className="mt-6 max-w-3xl font-serif-display italic text-stone-600 dark:text-stone-400 text-xl md:text-2xl leading-snug">
            Mathematicians are unusually good at noticing when an argument doesn&#39;t quite add up. We think the world would be better if more of that energy were pointed at the problems that actually matter.
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
          <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-3">
            The impact gap
          </h2>
          <div className="ea-rule mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-12 space-y-5 text-stone-700 dark:text-stone-300 text-[17px] leading-[1.75] max-w-5xl">
              <p>
                Every year, thousands of mathematicians and quantitatively trained graduates enter academia, finance, and industry. The overwhelming majority spend their careers on problems that are intellectually rich; however, they are largely disconnected from the world's most urgent challenges.
              </p>
              <p>
                <span className="font-medium text-stone-900 dark:text-stone-100">This isn't a failure of talent or ambition. It's a failure of direction.</span>
              </p>
              <p>
                The world's most pressing cause areas — from biosecurity and climate change to global health and farmed animal welfare — are severely underpowered. They don't lack funding alone; they lack rigorous, quantitative minds willing to turn their skills toward them. These problems are technically complex, deeply neglected, and in many cases, tractable — exactly the kind of challenges that mathematicians are uniquely equipped to tackle.
              </p>
              <p>
                Yet no unified community exists for them to do so. There is no dedicated space where mathematicians and quantitative thinkers can come together to explore high-impact opportunities, exchange ideas, develop proposals, and direct their skills toward work that genuinely matters. No shared forum. No collective knowledge base. No clear on-ramp.
              </p>
              <p>
                The result? Talented people — including many students and early-career researchers — simply don't know what's possible. It isn't obvious how mathematical expertise translates into meaningful impact. Many underestimate what they could contribute. Most have far more potential to do good than they realise — they just haven't been shown how.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-stone-900 dark:bg-stone-900">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            <div>
              <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-6">
                Vision
              </h6>
              <p className="font-serif-display text-3xl md:text-4xl text-white leading-[1.2]">
                A world where mathematicians and quantitative thinkers direct their exceptional skills toward humanity's most important problems.
              </p>
            </div>
            <div>
              <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-6">
                Mission
              </h6>
              <p className="text-stone-300 text-[17px] leading-[1.8]">
                To build the first unified global community for mathematicians and quantitative thinkers to learn about high-impact cause areas, connect with peers, and produce work that truly matters.
              </p>
              <p className="mt-6 text-stone-300 text-[15px] leading-[1.75]">
                Today, the mathematical community's most visible spaces — Olympiad forums, competitive mathematics networks, academic circles — are oriented around personal achievement: demonstrating ability, winning prizes, securing places at elite institutions. These communities are valuable, but they are largely inward-facing. They celebrate what mathematicians can do, without asking what mathematicians should do.
              </p>
              <p className="mt-4 text-stone-300 text-[15px] leading-[1.75]">
                We are building something different. A community defined not by credentials, but by contribution — where the measure of success is not a score or an acceptance letter, but the real-world impact of the work being done. We will connect like-minded individuals, surface high-impact opportunities, foster meaningful collaboration, and grow a generation of mathematicians who use their abilities not just for themselves — but for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-16">
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100">
              How will we achieve our mission?
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed">
              We work with mathematicians and quantitative thinkers of all ages and backgrounds — from undergraduate students to seasoned researchers — helping them direct their skills toward the world's most pressing problems. Our work is organized around three core programmes:
            </p>
          </div>

          <div className="mb-16">
            <div className="space-y-8">
              <div className="border-l-2 border-orange-600 dark:border-orange-400 pl-8">
                <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                  Resource Hub
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                  A curated library of articles, books, research, and guides designed to help members understand high-impact cause areas and explore how their mathematical skills can be applied to them. Whether you're new to effective altruism or already familiar with the landscape, the Resource Hub gives you a clear starting point and a deeper foundation to build from.
                </p>
              </div>
              <div className="border-l-2 border-orange-600 dark:border-orange-400 pl-8">
                <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                  Community Forum
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                  Hosted on GitHub, our open forum is where the community comes alive. Members can share ideas, comment on proposals, collaborate on projects, and build on each other's work. It's a space designed for collective thinking — not passive consumption. It encourages communities to join in with members to make comments, suggest ideas, and help each other out in a collaborative environment.
                </p>
              </div>
              <div className="border-l-2 border-orange-600 dark:border-orange-400 pl-8">
                <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                  Introductory Fellowship
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                  A structured course delivered through this website, designed for those just getting started. The fellowship introduces the core ideas in our space, outlines the most important cause areas, and helps newcomers find their footing and their path to impact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cream dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 rounded-md p-8 md:p-10 mb-16">
            <h3 className="font-serif-display text-xl text-stone-900 dark:text-stone-100 mb-4">
              Open source community
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
              Our entire community is open source. Hosted on GitHub, anyone can contribute — suggesting improvements, editing pages, adding resources, and helping shape what this community becomes. High Impact Mathematicians is not a static platform; it is a living, evolving project, built collectively by the people who care most about it.
            </p>
          </div>

        </div>
      </section>

      {/* SUCCESS METRICS */}
      <section className="bg-stone-50 dark:bg-stone-900/50 border-y border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Success metrics
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-[16px] leading-relaxed">
              We track two core indicators to evaluate whether we are actually redirecting mathematical talent toward high-impact causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-md p-7 md:p-8">
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-4">
                Metric 1
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Participant perspective shift
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of participants who changed their stance on how mathematics can be used for impactful causes, and which causes matter most. We measure this through a form completed after participants finish the introductory fellowship.
              </p>
            </article>

            <article className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-md p-7 md:p-8">
              <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-4">
                Metric 2
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Projects developed
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                The number of projects developed that aim to do good using mathematics and direct work toward high-impact cause areas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="bg-cream dark:bg-stone-900/40">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-12">
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6">
              Theory of change
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-3xl text-[17px] leading-relaxed">
              The world's most pressing problems — biosecurity threats, pandemic preparedness, climate change, and farmed animal welfare — are severely neglected and deeply quantitative in nature. Yet the mathematicians and quantitative thinkers best equipped to work on them are rarely guided toward these cause areas. High Impact Mathematicians addresses this directly by reaching mathematicians and quantitative thinkers worldwide and equipping them with the knowledge, community, and resources to act.
            </p>
          </div>

          <div className="space-y-1 mb-14">
            {TOC_STEPS.map((step, i) => (
              <div
                key={step.label}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 ${
                  i < TOC_STEPS.length - 1 ? "border-b border-stone-200 dark:border-stone-800" : ""
                }`}
              >
                <div className="md:col-span-3 flex items-start gap-5">
                  <span className="font-serif-display text-[44px] text-orange-600 dark:text-orange-400 leading-none flex-shrink-0 mt-0.5">
                    {step.symbol}
                  </span>
                  <div className="pt-2">
                    <span className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                      {step.label}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <p className="text-stone-700 dark:text-stone-300 text-[17px] leading-[1.75]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="w-full min-h-[360px] md:min-h-[460px] rounded-md border-2 border-dashed border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-900/60 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-3">
                  Infographic placeholder
                </div>
                <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed max-w-md">
                  Add your Theory of Change infographic image here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES, VALUES & PHILOSOPHY */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-16">
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6">
              Principles, values & philosophy
            </h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 max-w-3xl text-[15px] leading-relaxed">
              <p>
                High Impact Mathematicians does not require its members to subscribe to any particular ideology or school of thought. We are a broad, welcoming community. That said, our movement draws heavily on ideas emerging from the effective altruism community — because we believe EA has surfaced some of the most rigorous and practically useful frameworks for thinking about how to do the most good.
              </p>
              <p>
                In particular, we find the ITN framework — evaluating cause areas by their Importance, Tractability, and Neglectedness — to be an exceptionally clear-headed tool for identifying where mathematical talent can have the greatest real-world impact. We use it not as dogma, but as a compass.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-serif-display text-2xl text-stone-900 dark:text-stone-100 mb-8">
              Our values
            </h3>
            <div className="space-y-4">
              {PRINCIPLES.map((p) => (
                <article
                  key={p.title}
                  className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-md p-5 md:p-6"
                >
                  <div>
                    <h4 className="font-serif-display text-[22px] leading-tight text-stone-900 dark:text-stone-100 mb-2">
                      {p.title}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
