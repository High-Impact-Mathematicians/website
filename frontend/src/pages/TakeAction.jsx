import React from "react";
import { Link } from "react-router-dom";
import EASectionHeader from "../components/EASectionHeader";
import { ArrowUpRight, ArrowRight, ChevronDown, Rocket, Hammer, Trophy, Calendar, Globe, Users, Coins, Sparkles } from "lucide-react";

const DISCORD_URL = "https://discord.gg/yCWmXRwxdW"; // HIM Discord invite
const HACKATHON_URL = "https://forms.gle/7re5qsqdorN7y9CV9"; // HIMPact Hacks registration form

const PILLS = ["24–26 July 2026", "Free to enter", "Fully online", "High-school and undergrad", "Solo or small teams"];

const FACTS = [
  { Icon: Calendar, label: "When", value: "Friday 24 to Sunday 26 July 2026" },
  { Icon: Globe, label: "Where", value: "Fully online" },
  { Icon: Users, label: "Who", value: "High-school and undergraduate students" },
  { Icon: Coins, label: "Cost", value: "Free to enter" },
  { Icon: Sparkles, label: "Format", value: "Mostly your own schedule, with a few live calls" },
  { Icon: Trophy, label: "Prizes", value: "Cash, sponsor swag and honourable mentions" },
];

const STEPS = [
  {
    number: "01",
    Icon: Rocket,
    title: "Register and get matched",
    body: "Sign up in a couple of minutes. Enter on your own, bring your own team, or ask to be matched with others, then meet your cause-area group before we begin.",
  },
  {
    number: "02",
    Icon: Hammer,
    title: "Build your project",
    body: "Pick a cause and use maths to move it forward, whether that is a model, a simulation, an analysis, or a piece of research. Mentors and expert seminars run throughout.",
  },
  {
    number: "03",
    Icon: Trophy,
    title: "Demo Day and prizes",
    body: "Submit a short slide deck and a two to three minute demo, present at Demo Day, and compete for cash prizes and sponsor swag. Standout projects get showcased on our board.",
  },
];

const CAUSES = [
  "Mathematics for climate change",
  "Mathematics for biosecurity and pandemic preparedness",
  "Mathematics for AI safety",
  "Mathematics for animal welfare",
  "Mathematics for institutional resilience and decision-making",
  "Mathematics for global health and development",
];

// Ranked prize data. rank drives the podium heights and the highlight on 1st.
const PRIZES = [
  { place: "1st", amount: "$250", note: "Top project overall", rank: 1, standH: "h-28", accent: "bg-orange-500", numText: "text-white" },
  { place: "2nd", amount: "$150", note: "Runner-up", rank: 2, standH: "h-20", accent: "bg-stone-200 dark:bg-stone-800", numText: "text-stone-600 dark:text-stone-300" },
  { place: "3rd", amount: "$100", note: "Third place", rank: 3, standH: "h-16", accent: "bg-stone-200 dark:bg-stone-800", numText: "text-stone-600 dark:text-stone-300" },
];
// Podium order places 1st in the middle, flanked by 2nd (left) and 3rd (right).
const PODIUM_ORDER = [PRIZES[1], PRIZES[0], PRIZES[2]];

const SPONSORS = [
  // Non-Trivial funds the $500 cash prize pool.
  { label: "Non-Trivial", href: "https://www.non-trivial.org/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/non-trivial.svg` },
  { label: ".xyz", href: "https://gen.xyz/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/xyz.png` },
  { label: "Overleaf", href: "https://www.overleaf.com/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/overleaf.jpg` },
  { label: "The Daily Integral", href: "https://dailyintegral.com/", logo: `${process.env.PUBLIC_URL}/sponsor-logos/daily-integral.png` },
];

const SCHEDULE = [
  {
    day: "Friday 24 July",
    label: "Kickoff",
    points: [
      "Live kickoff call and welcome",
      "Channels open and team matching",
      "Start building",
    ],
  },
  {
    day: "Saturday 25 July",
    label: "Seminars and mentoring",
    points: [
      "Expert seminar one",
      "Midpoint check-in",
      "Expert seminar two",
      "Mentors on hand in Discord",
      "Keep building",
    ],
  },
  {
    day: "Sunday 26 July",
    label: "Demo Day",
    points: [
      "Final build time and office hours",
      "Submissions close",
      "Demo Day presentations",
      "Winners announced",
    ],
  },
];

const FAQS = [
  {
    q: "Do I need to be an advanced mathematician?",
    a: "No. HIMPact Hacks is open to high-school and undergraduate students at any level of experience. Curiosity and a willingness to learn matter more than how much you already know.",
  },
  {
    q: "Do I need to know about effective altruism or these cause areas already?",
    a: "Not at all. Mentors and expert seminars run throughout the weekend to help you get up to speed, whatever your starting point.",
  },
  {
    q: "Can I take part on my own, or do I need a team?",
    a: "Either works. Enter solo, bring your own team, or ask to be matched with others when you register. Teams are kept small.",
  },
  {
    q: "How much time does it take?",
    a: "The weekend is mostly on your own schedule. The only fixed live moments are the kickoff, two seminars, and Demo Day, and you choose how many hours you put in around them.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. HIMPact Hacks is free to enter.",
  },
  {
    q: "What do I actually submit?",
    a: "A short slide deck and a two to three minute demo of what you built, whether that is a model, a simulation, an analysis, or a piece of research.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-stone-200 dark:border-stone-800">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span className="font-serif-display text-lg md:text-xl text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-orange-600 dark:text-orange-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="-mt-1 pb-5 text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed max-w-3xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function TakeAction() {
  return (
    <div data-testid="page-take-action" className="bg-white dark:bg-stone-950">

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
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-5 em-fade-up">
              Our launch hackathon
            </div>
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[92px] tracking-tight leading-[0.95] text-stone-900 dark:text-stone-100 em-fade-up em-delay-1">
              HIMPact Hacks
            </h1>
            <p className="mt-6 max-w-2xl font-serif-display italic text-stone-500 dark:text-stone-400 text-xl md:text-2xl leading-snug em-fade-up em-delay-2">
              A weekend hackathon where students use mathematics to make real progress on the world's most pressing problems.
            </p>
            <p className="mt-5 max-w-2xl text-stone-600 dark:text-stone-400 text-[16px] md:text-[17px] leading-[1.75]">
              Over three days you choose a cause you care about, work solo or in a small team, and build a project with mathematics, whether that is a model, a simulation, an analysis, or a piece of research. Mentors and expert seminars run throughout, the strongest projects win prizes, and everyone steps into our community afterwards. No prior experience needed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <a
                href={HACKATHON_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-full font-medium transition-colors"
                data-testid="take-action-register"
              >
                Register now <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-400 px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                Join our Discord <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="font-mono-tag text-[10px] uppercase tracking-[0.18em] text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-700 rounded-full px-3 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ──────────────────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-stone-900/40 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
            {FACTS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-1">
                    {label}
                  </div>
                  <div className="text-stone-800 dark:text-stone-200 text-[15px] leading-snug">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="How it works"
            title="From sign-up to Demo Day"
            subtitle="The shape of the weekend, in three steps."
          />
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {STEPS.map(({ number, Icon, title, body }) => (
              <div key={number} className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif-display text-4xl text-orange-600/30 dark:text-orange-400/30 leading-none select-none">
                    {number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <h3 className="font-serif-display text-xl md:text-[22px] leading-tight text-stone-900 dark:text-stone-100">
                  {title}
                </h3>
                <p className="mt-2.5 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE (CENTERED TIMELINE) ─────────────────────────────────────── */}
      <section className="bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="Schedule"
            title="The weekend, day by day"
            subtitle="Mostly your own time, with a few live moments that hold it together."
          />
          <div className="mt-12 md:mt-16 max-w-3xl">
            <div className="relative border-l border-stone-200 dark:border-stone-800 ml-2">
              {SCHEDULE.map((d) => (
                <div key={d.day} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                  <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-orange-600 ring-4 ring-white dark:ring-stone-950" />
                  <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-1">
                    {d.day}
                  </div>
                  <h3 className="font-serif-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-4">
                    {d.label}
                  </h3>
                  <ul className="space-y-2">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed">
                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-orange-500/70 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAUSE AREAS ──────────────────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-stone-900/40 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="Choose your focus"
            title="Pick a cause area"
            subtitle="Build your project around one problem you care about, framed as mathematics for good."
          />
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {CAUSES.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 py-4 border-b border-stone-200 dark:border-stone-800"
              >
                <span className="font-mono-tag text-orange-600 dark:text-orange-400 shrink-0 mt-0.5">→</span>
                <span className="text-stone-800 dark:text-stone-200 text-[15px]">{c}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/learn/cause-areas"
              className="inline-flex items-center gap-1.5 text-orange-700 dark:text-orange-400 text-sm font-medium em-link"
            >
              See the full cause-area profiles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRIZES (PODIUM) ──────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="What's at stake"
            title="Prizes and recognition"
            subtitle="A $500 cash pool for the top three, plus swag and honourable mentions."
            align="center"
          />

          {/* Podium (small screens and up) */}
          <div className="mt-14 hidden sm:flex items-end justify-center gap-4 md:gap-6 max-w-2xl mx-auto">
            {PODIUM_ORDER.map((p) => (
              <div key={p.place} className="flex-1 max-w-[200px] flex flex-col items-center">
                <div className="text-center mb-4">
                  <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-1">
                    {p.place} place
                  </div>
                  <div className="font-serif-display text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-none">
                    {p.amount}
                  </div>
                  <div className="mt-1.5 text-stone-500 dark:text-stone-400 text-[13px]">{p.note}</div>
                </div>
                <div className={`w-full rounded-t-lg ${p.accent} ${p.standH} flex items-start justify-center pt-3`}>
                  <span className={`text-2xl font-bold ${p.numText} leading-none`}>{p.rank}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stacked (mobile) */}
          <div className="mt-10 sm:hidden space-y-3 max-w-xs mx-auto">
            {PRIZES.map((p) => (
              <div
                key={p.place}
                className="flex items-center justify-between rounded-lg border border-stone-200 dark:border-stone-800 px-5 py-4"
              >
                <div>
                  <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                    {p.place} place
                  </div>
                  <div className="text-stone-500 dark:text-stone-400 text-[13px]">{p.note}</div>
                </div>
                <div className="font-serif-display text-3xl text-stone-900 dark:text-stone-100 leading-none">
                  {p.amount}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed max-w-2xl mx-auto">
            The $500 cash prize pool is provided by Non-Trivial. Winners also get sponsor swag from .xyz, and we award a mix of honourable mentions and category awards.
          </p>
        </div>
      </section>

      {/* ── SPONSORS ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-stone-900/40 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="text-center font-mono-tag text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-8">
            Sponsored by
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {SPONSORS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={s.logo}
                  alt={s.label}
                  className="max-h-12 md:max-h-14 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-stone-500 dark:text-stone-400 text-[14px]">
            Interested in supporting HIMPact Hacks?{" "}
            <Link to="/contact" className="em-link text-orange-700 dark:text-orange-400 font-medium">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── AFTER THE WEEKEND ────────────────────────────────────────────────── */}
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
                After the weekend
              </div>
              <h2 className="font-serif-display text-3xl md:text-5xl text-white leading-[1.05]">
                The hackathon is just the start
              </h2>
              <p className="mt-5 text-stone-300 text-[16px] md:text-lg leading-[1.7]">
                Every participant steps into our Discord community and Impact Hours, our recurring bi-weekly sessions that are part seminar and part office hours, where you share how your work is going, meet an influential high-impact mathematician, and keep pushing your project forward long after Demo Day.
              </p>
              <div className="mt-8">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-100 hover:bg-white hover:text-stone-900 px-6 py-3.5 rounded-full font-medium transition-colors"
                >
                  Join our Discord <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (CENTERED ACCORDION) ─────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-stone-900/40 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <EASectionHeader
            kicker="Questions"
            title="Frequently asked"
            subtitle="Everything you might be wondering before you sign up."
          />
          <div className="mt-10 md:mt-14 max-w-3xl mx-auto">
            {FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-stone-950">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <div className="rounded-2xl bg-orange-600 px-8 md:px-14 py-14 md:py-20 text-center">
            <h2 className="font-serif-display text-4xl md:text-6xl text-white tracking-tight leading-[1.02]">
              Ready to build?
            </h2>
            <p className="mt-4 text-orange-50 text-lg leading-relaxed max-w-xl mx-auto">
              Registration for HIMPact Hacks is open, and spots are limited. Register soon to claim yours and bring your maths to a problem that matters.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={HACKATHON_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                Register now <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/60 text-white hover:bg-white hover:text-orange-700 px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
