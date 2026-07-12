import React, { useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100" data-testid="site-layout">
      {/* SITE-WIDE LAUNCH BANNER — HIMPact Hacks is the entry event */}
      <Link
        to="/take-action"
        className="group block bg-orange-600 hover:bg-orange-700 text-white transition-colors"
        data-testid="launch-banner"
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-2.5 flex items-center justify-center gap-x-3 gap-y-1 flex-wrap text-center">
          <span className="font-mono-tag uppercase tracking-[0.18em] text-[9px] md:text-[10px] bg-white/20 px-2 py-0.5 rounded">
            Launch event
          </span>
          <span className="text-[12px] md:text-[13px] font-medium">
            HIMPact Hacks is our launch event and our first hackathon, running 24–26 July 2026
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] md:text-[13px] font-medium underline underline-offset-2">
            Take part <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
