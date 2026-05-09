import React from "react";
import { Link } from "react-router-dom";
import EASectionHeader from "../components/EASectionHeader";
import EACard from "../components/EACard";
import { ArrowRight } from "lucide-react";

const VALUES = [
  {
    title: "Evidence-Based Beliefs",
    body: "We like to quantify our assumptions and update our positions as soon as the data changes.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Methodological Transparency",
    body: "We encourage showing the logic behind our decisions (epistemtic humility). Every conclusion must be reproducible by others.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Proactive Collaboration",
    body: "We share our tools, and default to open-source work. We believe information is most valuable when it is shared.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Practical Impact",
    body: "We focus on measurable real-world outcomes. We are interested in using mathematics to contribute to high-impact cause areas.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
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

const PHASES = [
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

const DIFFERENTIATORS = [
  {
    symbol: "∑",
    title: "Mathematician-to-mathematician",
    body: "We are not EA generalists advising mathematicians from the outside. We are mathematicians who have already done this ourselves. That credibility matters for relevance and trust, in exactly the way that Hi-Med's medic-to-medic model matters for their audience.",
  },
  {
    symbol: "∂",
    title: "The skills map is the product",
    body: "Every other EA resource tells mathematicians that their skills are valuable. We are the only ones showing them exactly how — at the level of specific subfields, specific techniques, and specific open problems. No comparable organization has built and maintained this mapping.",
  },
  {
    symbol: "∞",
    title: "Open-source from day one",
    body: "The platform is not dependent on us. Anyone can contribute resources, problems, and improvements via GitHub. This means the community owns the infrastructure and it scales beyond what two people can maintain.",
  },
  {
    symbol: "→",
    title: "Not career consulting",
    body: "We are not advising people to quit their jobs or change their degrees. We are showing them that the work they already know how to do can be pointed at problems that matter — lowering the barrier to involvement dramatically.",
  },
];

export default function About() {
  return (
    <div data-testid="page-about" className="bg-white">

      {/* HERO */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-6">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-4xl text-stone-900">
            An online community with a specific goal
          </h1>
          <p className="mt-6 max-w-3xl font-serif-display italic text-stone-600 text-xl md:text-2xl leading-snug">
            Mathematicians are unusually good at noticing when an argument doesn&#39;t quite add up. We
            think the world would be better if more of that energy were pointed at the problems that
            actually matter.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="pt-12 pb-14 md:pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 mb-3">
            Our values
          </h6>
          <div className="ea-rule" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12">
            {VALUES.map((v) => (
              <EACard key={v.title} image={v.image} title={v.title} source={v.body} />
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-stone-900">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-6">
                Vision
              </h6>
              <p className="font-serif-display text-3xl md:text-[40px] text-white leading-[1.18]">
                A world where mathematicians and quantitative thinkers routinely direct their skills toward the world's most important problems.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-400 mb-6">
                  Mission
                </h6>
                <p className="text-stone-300 text-[17px] leading-[1.75]">
                  To build the first unified global community for mathematicians and quantitative thinkers to learn about high-impact cause areas, connect with peers, and produce work that matters — guided by the principle that mathematical talent, when directed well, is one of the most powerful tools available for reducing suffering and existential risk.
                </p>
              </div>
              <Link
                to="/learn/cause-areas"
                className="inline-flex items-center gap-2 border border-stone-600 hover:border-orange-500 text-stone-200 hover:text-orange-400 px-5 py-3 text-sm font-medium tracking-wide transition-colors rounded-full self-start"
              >
                Explore cause areas <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE IMPACT GAP */}
      <section className="relative bg-cream overflow-hidden">
        <div
          aria-hidden
          className="absolute font-serif-display font-medium select-none pointer-events-none text-[280px] md:text-[460px] leading-none text-orange-600/[0.05] -right-10 md:-right-20 top-1/2 -translate-y-1/2"
        >
          ∅
        </div>
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 mb-3">
            The impact gap
          </h6>
          <div className="ea-rule mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="font-serif-display text-[90px] md:text-[112px] text-stone-900 leading-none tracking-tight">
                ~500
              </div>
              <p className="mt-4 font-mono-tag text-[11px] uppercase tracking-[0.14em] text-stone-500 leading-relaxed">
                Estimated quantitative thinkers currently directing their skills to high-priority EA cause areas
              </p>
            </div>
            <div className="md:col-span-8 space-y-5 text-stone-700 text-[17px] leading-[1.75]">
              <p>
                Every year, thousands of mathematicians and quantitatively trained graduates enter academia, finance, and industry. The overwhelming majority spend their careers on problems that are intellectually rich but disconnected from the world's most pressing challenges.
              </p>
              <p>
                This is not a failure of talent or values — it is a failure of exposure and infrastructure. Most mathematicians have never been shown a concrete, credible link between their specific skills and high-impact cause areas. No unified community exists for them in the effective altruism ecosystem. No resource hub maps their skills to tractable problems. No peer group exists to collaborate with.
              </p>
              <p>
                The gap between available talent and deployed talent is enormous, and it is almost entirely explained by the absence of a space that makes the connection visible and accessible.{" "}
                <span className="font-medium text-stone-900">Effective Mathematicians is built to provide that infrastructure at scale.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <EASectionHeader
            title="Theory of change"
            kicker="How we get there"
            subtitle="A clear logical chain from the problem to the impact."
          />
          <div className="mt-14">
            {TOC_STEPS.map((step, i) => (
              <div
                key={step.label}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-9 ${
                  i < TOC_STEPS.length - 1 ? "border-b border-stone-200" : ""
                }`}
              >
                <div className="md:col-span-3 flex items-start gap-5">
                  <span className="font-serif-display text-[44px] text-orange-600 leading-none flex-shrink-0 mt-0.5">
                    {step.symbol}
                  </span>
                  <div className="pt-2">
                    <span className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-stone-400">
                      {step.label}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <p className="text-stone-700 text-[17px] leading-[1.75]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <EASectionHeader
            title="Our strategy"
            kicker="Roadmap"
            subtitle="Four phases from founding to institutionalization."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {PHASES.map((phase) => (
              <div
                key={phase.num}
                className="border border-stone-200 p-8 md:p-10"
              >
                <div className="flex items-start gap-5 mb-5">
                  <span className="font-serif-display text-[52px] text-orange-600/25 leading-none font-medium flex-shrink-0">
                    {phase.num}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-serif-display text-2xl text-stone-900 leading-tight capitalize">
                      {phase.label}
                    </h3>
                    <div className="mt-1 font-mono-tag text-[10px] uppercase tracking-[0.18em] text-orange-600">
                      {phase.target}
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 text-[15px] leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="bg-cream">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <EASectionHeader
            title="What makes this different"
            kicker="Our edge"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="flex gap-7">
                <div className="font-serif-display text-[42px] text-orange-600 leading-none flex-shrink-0 mt-0.5">
                  {d.symbol}
                </div>
                <div>
                  <h3 className="font-serif-display text-[23px] text-stone-900 leading-tight">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-stone-600 text-[15px] leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER PROGRAMS */}
      <section className="bg-white" data-testid="partners-section">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-16">
          <EASectionHeader
            title="Partner programs"
            subtitle="We are actively seeking partnerships with organisations aligned with our mission."
            kicker="Looking to collaborate"
          />
          <p className="mt-6 max-w-3xl text-stone-600 text-[15px]">
            If your organisation shares our goals, we would love to explore a partnership.
          </p>
        </div>
      </section>

    </div>
  );
}
