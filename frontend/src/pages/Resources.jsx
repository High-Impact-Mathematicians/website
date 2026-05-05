import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";

const RESOURCES = [
  {
    type: "Book",
    title: "80,000 Hours: Find a Fulfilling Career That Does Good",
    author: "Benjamin Todd",
    desc: "A pragmatic guide to building a high-impact career using careful reasoning.",
    url: "https://www.goodreads.com/book/show/33844107-80-000-hours",
    topic: "Career",
    image: "/books/80000-hours.jpg"
  },
  {
    type: "Book",
    title: "The Model Thinker",
    author: "Scott E. Page",
    desc: "A toolkit of models for understanding complex systems and making better decisions.",
    url: "https://www.goodreads.com/book/show/39088592-the-model-thinker",
    topic: "Decision Making",
    image: "/books/the-model-thinker.jpg"
  },
  {
    type: "Book",
    title: "Doing Good Better",
    author: "William MacAskill",
    desc: "The foundational introduction to effective altruism.",
    url: "https://www.goodreads.com/book/show/23398748-doing-good-better",
    topic: "Foundations",
    image: "/books/doing-good-better.jpg"
  },
  {
    type: "Book",
    title: "Superforecasting: The Art and Science of Prediction",
    author: "Dan Gardner & Philip E. Tetlock",
    desc: "Evidence-based techniques for improving prediction and decision-making under uncertainty.",
    url: "https://www.goodreads.com/book/show/23995360-superforecasting",
    topic: "Forecasting",
    image: "/books/superforecasting.jpg"
  },
  {
    type: "Book",
    title: "What We Owe the Future",
    author: "William MacAskill",
    desc: "A longtermist framework for decision-making in a high-stakes century.",
    url: "https://www.goodreads.com/book/show/59802037-what-we-owe-the-future",
    topic: "Longtermism",
    image: "/books/what-we-owe-the-future.jpg"
  },
  {
    type: "Book",
    title: "The Life You Can Save",
    author: "Peter Singer",
    desc: "A practical case for effective giving and concrete ways to reduce global suffering.",
    url: "https://www.goodreads.com/book/show/49005196-the-life-you-can-save",
    topic: "Giving",
    image: "/books/the-life-you-can-save.jpg"
  },
  {
    type: "Book",
    title: "Animal Liberation Now",
    author: "Peter Singer",
    desc: "Updated classic on the moral status of animals and the ethics of our food systems.",
    url: "https://www.goodreads.com/book/show/62119780-animal-liberation-now",
    topic: "Animal Welfare",
    image: "/books/animal-liberation-now.jpg"
  },
  {
    type: "Article",
    title: "Much Better, Awful Can Be Better",
    author: "Our World in Data",
    desc: "A data-driven argument that many global outcomes have improved — and can improve further.",
    url: "https://ourworldindata.org/much-better-awful-can-be-better",
    topic: "Global Progress",
    image: "/articles/much-better-than-we-think.png"
  },
  {
    type: "Article",
    title: "Existential Risks",
    author: "80,000 Hours",
    desc: "An overview of catastrophic risks and why reducing them matters.",
    url: "https://80000hours.org/articles/existential-risks/",
    topic: "Existential Risk",
    image: "/articles/existential-risks.jpg"
  },
  {
    type: "Article",
    title: "From Logs to Insights: How Log-Normal Distribution Fuels Machine Learning",
    author: "Akash Sri (Medium)",
    desc: "A practical overview of how log-normal distributions show up in ML and real-world data.",
    url: "https://medium.com/@akashsri306/from-logs-to-insights-how-log-normal-distribution-fuels-machine-learning-f566ae727825",
    topic: "Machine Learning",
    image: "/articles/from-logs-to-insights.png"
  },
  {
    type: "Article",
    title: "Introduction to Effective Altruism",
    author: "Effective Altruism",
    desc: "A concise introduction to EA ideas and how to do the most good.",
    url: "https://www.effectivealtruism.org/articles/introduction-to-effective-altruism",
    topic: "Foundations",
    image: "/articles/introduction-to-effective-altruism.png"
  },
  {
    type: "Article",
    title: "Key Ideas",
    author: "Happier Lives Institute",
    desc: "Core ideas about wellbeing, measurement, and effective giving.",
    url: "https://www.happierlivesinstitute.org/key-ideas/",
    topic: "Wellbeing",
    image: "/articles/happier-lives-institute-key-ideas.png"
  },
  {
    type: "Article",
    title: "The Future Is Vast",
    author: "Our World in Data",
    desc: "A data-rich case for long-term thinking about humanity's future.",
    url: "https://ourworldindata.org/the-future-is-vast",
    topic: "Longtermism",
    image: "/articles/the-future-is-vast.png"
  },
  
];

const TYPES = ["All", "Book", "Article"];
const GROUP_ORDER = ["Book", "Article"];
const GROUP_LABELS = {
  Book: "Books",
  Article: "Articles"
};

export default function Resources() {
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      if (type !== "All" && r.type !== type) return false;
      if (q.trim()) {
        const s = (r.title + r.author + r.desc + r.topic).toLowerCase();
        if (!s.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [type, q]);

  const grouped = useMemo(() => {
    const out = {};
    GROUP_ORDER.forEach((g) => {
      out[g] = [];
    });
    filtered.forEach((r) => {
      if (!out[r.type]) out[r.type] = [];
      out[r.type].push(r);
    });
    return out;
  }, [filtered]);

  return (
    <div data-testid="page-resources">
      {/* HEADER */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] max-w-5xl text-stone-900">
            Resources
          </h1>
          <p className="mt-6 max-w-3xl font-serif-display italic text-stone-600 text-xl md:text-2xl leading-snug">
            A reading list for people who want to learn more about reasoning carefully.
          </p>
          <div className="ea-rule mt-10" />
          <p className="mt-10 max-w-3xl text-stone-700 text-lg leading-[1.7]">
            Curated books, articles, websites and podcasts that shape how this community thinks.
          </p>
        </div>
      </section>
      {/* FILTERS — minimal: text-only tabs + search */}
      <section
        className="bg-white sticky top-[64px] md:top-[72px] z-30 border-y border-stone-200"
        data-testid="resources-filters"
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`pb-1 text-[14px] tracking-wide transition-colors border-b ${
                  type === t
                    ? "text-stone-900 border-orange-600"
                    : "text-stone-500 border-transparent hover:text-stone-900"
                }`}
                data-testid={`filter-${t.toLowerCase()}`}
              >
                {t === "All" ? "All resources" : t === "Book" ? "Books" : t === "Article" ? "Articles" : `${t}s`}
              </button>
            ))}
          </div>
          <div className="md:ml-auto relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search…"
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-full text-sm text-stone-900 focus:outline-none focus:border-orange-600 placeholder:text-stone-400"
              data-testid="resources-search"
            />
          </div>
        </div>
      </section>
      {/* GROUPED GRID — EA achievements/research pattern */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div
            className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 mb-2"
            data-testid="results-count"
          >
            Showing {filtered.length} of {RESOURCES.length} resources
          </div>
          {filtered.length === 0 ? (
            <div className="border border-stone-200 rounded-md p-12 text-center text-stone-600 mt-6">
              No resources match — try a different filter.
            </div>
          ) : (
            GROUP_ORDER.map((g) => {
              const items = grouped[g] || [];
              if (items.length === 0) return null;
              return (
                <div key={g} className="mt-10 md:mt-14">
                  <h6 className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 mb-3">
                    {GROUP_LABELS[g]}
                  </h6>
                  <div className="ea-rule" />
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-12">
                    {items.map((r, i) => {
                      const isExternal = r.url && r.url !== "#";
                      const isBook = r.type === "Book";
                      const Wrapper = isExternal ? "a" : "div";
                      const props = isExternal ? { href: r.url, target: "_blank", rel: "noreferrer" } : {};

                      return (
                        <Wrapper
                          key={`${r.title}-${i}`}
                          {...props}
                          className="ea-card group block"
                          data-testid={`resource-${RESOURCES.indexOf(r)}`}
                        >
                          <div
                            className={`ea-card-img ${
                              isBook
                                ? "aspect-[3/4] bg-stone-100 ring-1 ring-stone-200 shadow-[0_14px_24px_rgba(15,23,42,0.16)] p-[1px]"
                                : "aspect-[4/3] bg-stone-50"
                            } rounded-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5`}
                          >
                            <img
                              src={r.image}
                              alt={r.title}
                              loading="lazy"
                              className={`w-full h-full ${isBook ? "object-contain" : "object-contain"}`}
                            />
                          </div>
                          <div className="mt-4">
                            <div className="font-serif-display text-[19px] md:text-[20px] leading-[1.25] text-stone-900 group-hover:text-orange-700 transition-colors">
                              {r.title}
                            </div>
                            <div className="mt-1.5 text-[13px] text-stone-500">{r.author}</div>
                            <p className="mt-3 text-[14px] text-stone-700 leading-relaxed">{r.desc}</p>
                          </div>
                        </Wrapper>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
