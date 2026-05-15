import React from "react";
import { Link } from "react-router-dom";
import EASectionHeader from "../components/EASectionHeader";
import { ArrowRight } from "lucide-react";

const FOUNDERS = [
  {
    name: "Vivan Panda",
    role: "Co-founder",
    image: `${process.env.PUBLIC_URL}/images/vivan.png`,
    linkedin: "https://www.linkedin.com/in/vivanpanda/",
    imageClassName: "object-[center_5%]",
  },
  {
    name: "Kushal Pagarani",
    role: "Co-founder",
    image: `${process.env.PUBLIC_URL}/images/kushal.png`,
    linkedin: "https://www.linkedin.com/in/kushal-pagarani-333874226/",
    imageClassName: "object-[center_70%]",
  },
];

export default function AboutTeam() {
  return (
    <div data-testid="page-about-team" className="bg-white dark:bg-stone-950">

      {/* HERO */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-8 md:pb-10">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-4xl text-stone-900 dark:text-stone-100">
            Our founders
          </h1>
          <p className="mt-5 max-w-3xl font-serif-display italic text-stone-600 dark:text-stone-400 text-lg md:text-xl leading-snug">
            High Impact Mathematicians was founded by two high schoolers who were desperately seeking to use their skills for good and share this vision with the wider community.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-2 pb-20 md:pb-24">
          <div className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-6">
            Founding team
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 max-w-[42rem]">
            {FOUNDERS.map((founder) => (
              <a
                key={founder.name}
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${founder.name} on LinkedIn`}
                className="group flex flex-col items-start text-left bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-md p-4 transition-colors hover:border-orange-500/80 hover:bg-orange-50/40 dark:hover:border-orange-400/70 dark:hover:bg-orange-500/10"
              >
                <div className="w-full aspect-[3/4] rounded-md overflow-hidden mb-5">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    loading="lazy"
                    className={`w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 ${founder.imageClassName || "object-center"}`}
                  />
                </div>
                <h3 className="font-serif-display text-xl md:text-[22px] text-stone-900 dark:text-stone-100">
                  {founder.name}
                </h3>
                <div className="mt-2 font-mono-tag text-[11px] uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">
                  {founder.role}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER & PARTNERSHIP */}
      <section className="bg-cream dark:bg-stone-900/40">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-12">
            <h2 className="font-serif-display text-3xl md:text-5xl text-stone-900 dark:text-stone-100">
              Help build this community
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-400 max-w-2xl text-[15px] leading-relaxed">
              If you care about directing mathematical talent toward high-impact work, we would love for you to join us!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-md p-8 md:p-9">
              <h3 className="font-serif-display text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4">
                Join as a volunteer
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-6">
                We're actively seeking passionate mathematicians and quantitative thinkers to contribute to our mission. Whether you're interested in curriculum development, community management, or project support, there are many ways to get involved.
              </p>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-6">
                Volunteers help us expand our reach, develop resources, mentor community members, and build partnerships with aligned organizations. Your time and expertise directly multiply the impact of talented mathematicians working on the world's most pressing problems.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-md p-8 md:p-9">
              <h3 className="font-serif-display text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4">
                Partner with us
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-6">
                We are actively seeking to partner with organizations, mathematics communities, educational institutions, and research initiatives that share our commitment to high-impact work.
              </p>
              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-6">
                Partnerships include co-hosting events, cross-promoting resources, providing talent pipelines to organizations working on neglected cause areas, and collaborating on research and curriculum development.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore partnerships <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION CTA */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-3xl border border-stone-200 dark:border-stone-800 rounded-md p-8 md:p-10 bg-stone-50 dark:bg-stone-900/50">
            <h2 className="font-serif-display text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-3">
              Read our mission and values
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-6">
              Learn how we think about impact and our theory of change.
            </p>
            <Link
              to="/about/mission"
              className="inline-flex items-center gap-2 text-orange-700 dark:text-orange-400 font-medium hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
            >
              Read mission and values <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
