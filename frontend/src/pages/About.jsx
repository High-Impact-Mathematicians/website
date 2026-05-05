import React from "react";
import EASectionHeader from "../components/EASectionHeader";
import EACard from "../components/EACard";

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


export default function About() {
  return (
    <div data-testid="page-about" className="bg-white">
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
