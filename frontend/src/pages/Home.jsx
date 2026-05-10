import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import EASectionHeader from "../components/EASectionHeader";
import EACard from "../components/EACard";
import Modal from "../components/Modal";
import { CAUSE_AREAS } from "../data/causeAreas";

const HERO_VIDEO_FALLBACK = `${process.env.PUBLIC_URL}/hero-bg.mp4`;
const HERO_VIDEO_MANIFEST = `${process.env.PUBLIC_URL}/hero-videos/playlist.json`;
const HERO_VIDEO_DURATION_MS = 6000;
const HERO_VIDEO_FADE_MS = 80;
const HERO_STARTUP_TIMEOUT_MS = 8000;
const HERO_POSTER =
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80";

function toHeroVideoUrl(videoPath) {
  if (!videoPath) {
    return null;
  }

  if (videoPath.startsWith("http://") || videoPath.startsWith("https://") || videoPath.startsWith("/")) {
    return videoPath;
  }

  return `${process.env.PUBLIC_URL}/hero-videos/${videoPath}`;
}

function shuffleVideos(videoUrls) {
  const shuffled = [...videoUrls];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getRandomNextIndex(currentIndex, total) {
  if (total <= 1) {
    return 0;
  }

  let nextIndex = currentIndex;

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * total);
  }

  return nextIndex;
}

async function discoverHeroVideosFromFolder() {
  const foundVideos = [];
  const fileExtensions = ["mp4", "webm", "mov"];

  for (let index = 1; index <= 20; index += 1) {
    for (const extension of fileExtensions) {
      const candidateUrl = `${process.env.PUBLIC_URL}/hero-videos/${index}.${extension}`;

      try {
        const response = await fetch(candidateUrl, {
          cache: "no-store",
          method: "HEAD",
        });

        if (response.ok) {
          foundVideos.push(candidateUrl);
        }
      } catch {
        // Ignore missing files and keep probing.
      }
    }
  }

  return foundVideos;
}

const MARQUEE_ITEMS = [
  { sym: "∑", label: "Biosecurity" },
  { sym: "∫", label: "AI Safety" },
  { sym: "∂", label: "Game Theory" },
  { sym: "π", label: "Modelling" },
  { sym: "λ", label: "Climate Change" },
  { sym: "Ω", label: "Existential Risks" },
];

const TESTIMONIALS = [
  {
    quote: "I was an awarded undergraduate math student, but had no guidance on how to connect my interests and skills to my values and altruistic ambitions. This community and these resources are exactly what I wish a career counselor had showed me early in my journey!",
    name: "Jonah Boucher",
    role: (
      <>
        Director of youth impact nonprofits, <a href="https://www.non-trivial.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Non-Trivial</a> and <a href="https://leaf.courses/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Leaf</a>
      </>
    ),
    portrait: `${process.env.PUBLIC_URL}/images/jonah-boucher.jpeg`,
    linkedin: "https://www.linkedin.com/in/jonah-boucher/",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    name: "Lorem Ipsum",
    role: "Placeholder Role, Lorem Organization",
    portrait: "https://placehold.co/400x400/e7e5e4/78716c?text=Photo",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    name: "Lorem Ipsum",
    role: "Placeholder Role, Lorem Organization",
    portrait: "https://placehold.co/400x400/e7e5e4/78716c?text=Photo",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam.",
    name: "Lorem Ipsum",
    role: "Placeholder Role, Lorem Organization",
    portrait: "https://placehold.co/400x400/e7e5e4/78716c?text=Photo",
  },
];

function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = useCallback(() => setI((x) => (x - 1 + total) % total), [total]);
  const next = useCallback(() => setI((x) => (x + 1) % total), [total]);
  const t = TESTIMONIALS[i];

  return (
    <section className="bg-white dark:bg-stone-950" data-testid="testimonials-section">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-28 relative">
        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-950/80 text-stone-700 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-900 hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-400 items-center justify-center transition-colors z-10"
          data-testid="testimonial-prev"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="hidden md:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-950/80 text-stone-700 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-900 hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-400 items-center justify-center transition-colors z-10"
          data-testid="testimonial-next"
        >
          <ChevronRight size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center md:px-12 lg:px-16">
          <div className="md:col-span-3 flex md:justify-end">
            {t.linkedin ? (
              <a href={t.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  key={t.portrait}
                  src={t.portrait}
                  alt={t.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover em-fade-up"
                  loading="lazy"
                  data-testid="testimonial-portrait"
                />
              </a>
            ) : (
              <img
                key={t.portrait}
                src={t.portrait}
                alt={t.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover em-fade-up"
                loading="lazy"
                data-testid="testimonial-portrait"
              />
            )}
          </div>
          <blockquote className="md:col-span-9 em-fade-up" key={i}>
            <p className="font-serif-display text-2xl md:text-[32px] leading-[1.28] text-stone-900 dark:text-stone-100">
              "{t.quote.replace(/^"|"$/g, "")}"
            </p>
            <footer className="mt-6 text-stone-700 dark:text-stone-300">
              <div className="font-medium text-stone-900 dark:text-stone-100" data-testid="testimonial-name">
                {t.linkedin ? (
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">{t.role}</div>
            </footer>
          </blockquote>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="md:hidden w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2" data-testid="testimonial-dots">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i
                    ? "w-8 bg-orange-600"
                    : "w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="md:hidden w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [openCause, setOpenCause] = useState(null);
  const [heroVideos, setHeroVideos] = useState([HERO_VIDEO_FALLBACK]);
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);
  const [visibleSlot, setVisibleSlot] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const currentPlayingIndexRef = useRef(0);
  const rotationIntervalRef = useRef(null);
  const causeAreas = Array.isArray(CAUSE_AREAS) ? CAUSE_AREAS : [];
  const sneak = causeAreas.slice(0, 6);
  const heroVideoSrc = heroVideos[heroVideoIndex] || HERO_VIDEO_FALLBACK;

  useEffect(() => {
    let cancelled = false;

    async function loadHeroVideos() {
      try {
        const response = await fetch(HERO_VIDEO_MANIFEST, { cache: "no-store" });
        if (response.ok) {
          const payload = await response.json();
          const list = Array.isArray(payload)
            ? payload
            : Array.isArray(payload?.videos)
              ? payload.videos
              : [];
          const resolvedVideos = list.map(toHeroVideoUrl).filter(Boolean);

          if (!cancelled && resolvedVideos.length > 0) {
            setHeroVideos(shuffleVideos(resolvedVideos));
            setHeroVideoIndex(0);
            return;
          }
        }
      } catch {
        // Keep the fallback video when no manifest is present.
      }
    }

    loadHeroVideos();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (document.readyState === "complete") {
      window.requestAnimationFrame(() => setPageReady(true));
      return undefined;
    }

    const handleLoad = () => {
      window.requestAnimationFrame(() => setPageReady(true));
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  function waitForCanPlay(videoElement, timeout = 2500) {
    return new Promise((resolve) => {
      if (!videoElement) {
        resolve(false);
        return;
      }

      if (videoElement.readyState >= 2) {
        resolve(true);
        return;
      }

      let settled = false;

      const cleanup = () => {
        videoElement.removeEventListener("loadeddata", handleReady);
        videoElement.removeEventListener("canplay", handleReady);
      };

      const handleReady = () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(true);
      };

      videoElement.addEventListener("loadeddata", handleReady, { once: true });
      videoElement.addEventListener("canplay", handleReady, { once: true });

      window.setTimeout(() => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(false);
      }, timeout);
    });
  }

  useEffect(() => {
    const firstVideo = toHeroVideoUrl(heroVideos[0]) || HERO_VIDEO_FALLBACK;
    const frontVideo = frontRef.current;
    const backVideo = backRef.current;

    currentPlayingIndexRef.current = 0;
    setHeroVideoIndex(0);
    setVisibleSlot(0);
    setHeroReady(false);

    if (frontVideo) {
      frontVideo.src = firstVideo;
      try {
        frontVideo.load();
      } catch {
        // Ignore load failures and fall back to the browser's default handling.
      }

      void waitForCanPlay(frontVideo, HERO_STARTUP_TIMEOUT_MS).then((ready) => {
        if (ready) {
          frontVideo.play().catch(() => {});
        }
        setHeroReady(true);
      });
    }

    if (backVideo) {
      try {
        backVideo.pause();
        backVideo.removeAttribute("src");
        backVideo.load();
      } catch {
        // Ignore cleanup failures.
      }
    }
  }, [heroVideos]);

  useEffect(() => {
    if (heroVideos.length <= 1) {
      return undefined;
    }

    const advanceVideo = async () => {
      const activeSlot = visibleSlot === 0 ? frontRef.current : backRef.current;
      const inactiveSlot = visibleSlot === 0 ? backRef.current : frontRef.current;

      if (!activeSlot || !inactiveSlot) {
        return;
      }

      const nextIndex = getRandomNextIndex(currentPlayingIndexRef.current, heroVideos.length);
      const nextSrc = toHeroVideoUrl(heroVideos[nextIndex]);

      try {
        inactiveSlot.src = nextSrc;
        inactiveSlot.load();
      } catch {
        return;
      }

      const ready = await waitForCanPlay(inactiveSlot, 3500);
      if (!ready) {
        return;
      }

      inactiveSlot.currentTime = 0;
      inactiveSlot.play().catch(() => {});

      currentPlayingIndexRef.current = nextIndex;
      setHeroVideoIndex(nextIndex);
      setVisibleSlot((slot) => (slot === 0 ? 1 : 0));

      window.setTimeout(() => {
        try {
          activeSlot.pause();
        } catch {
          // Ignore cleanup failures.
        }
      }, HERO_VIDEO_FADE_MS + 40);
    };

    rotationIntervalRef.current = window.setInterval(() => {
      void advanceVideo();
    }, HERO_VIDEO_DURATION_MS);

    return () => {
      if (rotationIntervalRef.current) {
        window.clearInterval(rotationIntervalRef.current);
        rotationIntervalRef.current = null;
      }
    };
  }, [heroVideos, visibleSlot]);

  return (
    <div data-testid="page-home">
      {!(heroReady && pageReady) && (
        <div
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          data-testid="hero-loading-screen"
          aria-hidden="true"
        >
          <div className="h-12 w-12 rounded-full border-4 border-stone-200 border-t-orange-600 animate-spin" />
        </div>
      )}
      {/* HERO — UNCHANGED, with math symbols added next to marquee labels and responsive tweaks */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden" data-testid="hero-section">
        <video
          ref={frontRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          loop={false}
          style={{
            opacity: visibleSlot === 0 ? 1 : 0,
            transition: `opacity ${HERO_VIDEO_FADE_MS}ms linear`,
          }}
          onError={() => {
            if (heroVideos.length > 1) {
              setHeroVideos((currentVideos) => shuffleVideos(currentVideos));
              setHeroVideoIndex(0);
            }
            setHeroReady(true);
          }}
          data-testid="hero-video-front"
        />
        <video
          ref={backRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          loop={false}
          style={{
            opacity: visibleSlot === 1 ? 1 : 0,
            transition: `opacity ${HERO_VIDEO_FADE_MS}ms linear`,
          }}
          onError={() => {
            if (heroVideos.length > 1) {
              setHeroVideos((currentVideos) => shuffleVideos(currentVideos));
              setHeroVideoIndex(0);
            }
          }}
          data-testid="hero-video-back"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/45 via-stone-900/40 to-stone-900/70" />

        <div className="relative w-full max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end md:-translate-y-4 lg:-translate-y-6">
          <div className="lg:col-span-8 em-fade-up">
            <div className="font-mono-tag text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-orange-300 mb-5 md:mb-6 flex items-center gap-3">
              <span className="h-px w-8 md:w-10 bg-orange-300/70" />
              An affinity space for mathematicians 
            </div>
            <h1 className="max-w-3xl font-serif-display text-white text-4xl sm:text-5xl md:text-7xl lg:text-[88px] leading-[1.02] md:leading-[0.98] tracking-tight font-medium">
              <span className="whitespace-nowrap">Mathematics, applied</span>{" "}
              <em className="text-orange-300 not-italic font-serif-display italic">to the problems that matter most.</em>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-stone-100 text-base md:text-xl leading-relaxed">
              We're a community of mathematicians that use quantitative methods to address the world's most pressing problems.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <Link
                to="/learn/cause-areas"
                className="group inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 md:px-6 py-3 md:py-3.5 text-sm font-medium tracking-wide transition-colors rounded-full"
                data-testid="hero-cta-explore"
              >
                Explore cause areas
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about/mission"
                className="inline-flex items-center gap-2 border border-stone-200/60 text-white hover:bg-white hover:text-stone-900 px-5 md:px-6 py-3 md:py-3.5 text-sm font-medium tracking-wide transition-colors rounded-full"
                data-testid="hero-cta-about"
              >
                Read our story
              </Link>
            </div>
          </div>

        </div>

        {/* MARQUEE — math symbols next to each label */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-stone-900/40 backdrop-blur-sm overflow-hidden">
          <div className="em-marquee whitespace-nowrap py-3 font-mono-tag text-xs uppercase tracking-[0.28em] text-stone-200">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, idx) => (
              <span key={idx} className="mx-7 inline-flex items-center gap-2.5">
                <span className="font-serif-display text-base normal-case tracking-normal text-orange-300">{m.sym}</span>
                <span>{m.label}</span>
                <span className="ml-7 text-orange-300">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ARE HIGH IMPACT MATHEMATICIANS */}
      <section className="relative bg-white dark:bg-stone-950 overflow-hidden" data-testid="definition-section">
        <div
          aria-hidden
          className="em-sigma-watermark absolute text-[400px] md:text-[640px] -right-8 md:-right-20 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          data-testid="definition-sigma"
        >
          ∑
        </div>

        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <EASectionHeader title="What are High Impact Mathematicians?" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: who we are */}
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-5">
                <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-[1.75]">
                  High Impact Mathematicians is a global, open community built for mathematicians and quantitative thinkers who want to direct their skills toward the world's most pressing problems. We believe mathematical talent is one of the most powerful and under-directed forces for good — and that the gap between where it goes and where it is needed most is a problem worth solving.
                </p>
                <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-[1.75]">
                  Our community connects people across career stages and backgrounds — from undergraduates encountering effective altruism for the first time to established researchers looking for their next meaningful challenge. We surface high-impact opportunities, build shared infrastructure, and help members find the path from mathematical skill to real-world contribution.
                </p>
                <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-[1.75]">
                  We draw on ideas from the effective altruism community — in particular the ITN framework, which evaluates cause areas by their Importance, Tractability, and Neglectedness. It is not a dogma but a compass: a way of asking where mathematical effort is most needed, and where it can go furthest. Our goal is to make that question feel answerable, and to build the community that helps people act on the answer.
                </p>
              </div>
              <Link
                to="/about/mission"
                className="inline-flex items-center gap-2 mt-8 text-[14px] font-medium text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
              >
                Read our full mission <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: three pillars */}
            <div className="space-y-0">
              <div className="border-t border-stone-200 dark:border-stone-800 py-6">
                <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-2">Our goal</div>
                <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-[1.7]">
                  To become the first unified global platform where mathematicians learn about high-impact cause areas, collaborate on meaningful projects, and redirect their expertise toward biosecurity, AI safety, climate change, global health, and animal welfare.
                </p>
              </div>
              <div className="border-t border-stone-200 dark:border-stone-800 py-6">
                <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-2">How we operate</div>
                <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-[1.7]">
                  Entirely open source and hosted on GitHub. We offer an introductory course, a curated resource hub, and a collaborative community forum — three programmes designed to take someone from curiosity to contribution.
                </p>
              </div>
              <div className="border-t border-b border-stone-200 dark:border-stone-800 py-6">
                <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400 mb-2">Who we welcome</div>
                <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-[1.7]">
                  Any mathematician or quantitatively-minded person, at any career stage. You don't need to arrive as an expert in effective altruism — just bring a genuine interest in using your skills for something that matters.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSPIRED BY */}
      <section className="bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-12">
          <div className="text-center font-mono-tag text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-8">
            Inspired by
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              {
                label: "Effective Altruism",
                href: "https://www.effectivealtruism.org/",
                logo: `${process.env.PUBLIC_URL}/partner-logos/effective-altrusim.jpg`,
              },
              {
                label: "Leaf",
                href: "https://leaf.courses/",
                logo: `${process.env.PUBLIC_URL}/partner-logos/leaf.webp`,
              },
              {
                label: "High Impact Professionals",
                href: "https://www.highimpactprofessionals.org/",
                logo: `${process.env.PUBLIC_URL}/partner-logos/high-impact-professionals.jpg`,
              },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-[220px] md:w-[260px] h-[96px] md:h-[110px] bg-transparent hover:opacity-85 transition-opacity duration-200"
              >
                <img
                  src={p.logo}
                  alt={p.label}
                  className="max-h-14 md:max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSE AREAS */}
      <section className="bg-cream dark:bg-stone-900" data-testid="cause-areas-preview">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-600 mb-3">
              Cause areas
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.04] text-stone-900 dark:text-stone-100">
              Where math goes to work
            </h2>
            <p className="mt-5 font-serif-display italic text-stone-600 dark:text-stone-400 text-xl md:text-2xl leading-snug max-w-3xl">
              From global priorities to existential risk: see the problems where rigorous quantitative thinking is most undersupplied.
            </p>
            <div className="ea-rule mt-10" />
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {sneak.map((c) => (
              <EACard
                key={c.slug}
                image={c.image}
                title={c.title}
                source={c.short}
                onClick={() => setOpenCause(c)}
              />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/learn/cause-areas"
              className="inline-flex items-center gap-2 text-stone-900 dark:text-stone-100 hover:text-orange-700 dark:hover:text-orange-400 font-medium em-link"
              data-testid="cause-areas-cta"
            >
              See all problem profiles <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Modal open={!!openCause} onClose={() => setOpenCause(null)} labelledBy="cause-modal-title">
        {openCause && (
          <>
            <div className="aspect-[21/9] overflow-hidden rounded-t-3xl">
              <img src={openCause.image} alt={openCause.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-10">
              <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                {openCause.tag} · cause area
              </div>
              <h3 id="cause-modal-title" className="mt-3 font-serif-display text-3xl md:text-4xl leading-[1.1] text-stone-900 dark:text-stone-100">
                {openCause.title}
              </h3>
              <p className="mt-5 text-stone-700 dark:text-stone-300 text-lg leading-relaxed font-serif-display italic">
                {openCause.short}
              </p>
              {openCause.itn && (
                <div className="mt-6 space-y-4">
                  {openCause.itn.map(({ label, body }) => (
                    <div key={label}>
                      <span className="font-mono-tag text-[11px] uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">
                        {label}
                      </span>
                      <p className="mt-1 text-stone-700 dark:text-stone-300 leading-relaxed text-[15px]">{body}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-8">
                <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-3">
                  Open work mathematicians can take on
                </div>
                <ul className="space-y-2">
                  {openCause.work.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-stone-800 dark:text-stone-200">
                      <span className="font-mono-tag text-orange-600 dark:text-orange-400 mt-1">→</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {openCause.links && openCause.links.length > 0 && (
                <div className="mt-8">
                  <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-3">
                    Further reading
                  </div>
                  <ul className="space-y-2">
                    {openCause.links.map(({ text, note, url }) => (
                      <li key={text} className="flex items-start gap-3 text-stone-800 dark:text-stone-200 text-sm">
                        <span className="font-mono-tag text-stone-400 dark:text-stone-600 mt-0.5">↗</span>
                        <span>
                          {url ? (
                            <a href={url} target="_blank" rel="noreferrer" className="em-link text-stone-900 dark:text-stone-100 font-medium">
                              {text}
                            </a>
                          ) : (
                            <span className="text-stone-900 dark:text-stone-100 font-medium">{text}</span>
                          )}
                          {note && <span className="text-stone-500 dark:text-stone-500"> — {note}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/learn/cause-areas" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 text-sm font-medium rounded-full transition-colors">
                  See all problem profiles <ArrowRight size={15} />
                </Link>
                <Link to="/take-action" className="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-200 text-stone-900 dark:text-stone-100 px-5 py-3 text-sm font-medium rounded-full transition-colors">
                  Get involved
                </Link>
              </div>
            </div>
          </>
        )}
      </Modal>

      {/* TESTIMONIALS CAROUSEL */}
      <TestimonialCarousel />
    </div>
  );
}
