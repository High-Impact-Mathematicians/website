import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  {
    label: "Learn",
    dropdown: [
      { to: "/learn/cause-areas", label: "Cause areas" },
      { to: "/learn/resources", label: "Resources" },
    ],
  },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const location = useLocation();
  const homeUrl = `${process.env.PUBLIC_URL || ""}/`;

  const handleTopOfPageClick = (targetPath) => (event) => {
    if (location.pathname === targetPath) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setMobileOpen(false);
    setLearnOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="sticky top-0 z-50 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800"
      data-testid="site-header"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 h-[64px] md:h-[72px] flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 md:gap-3 group min-w-0"
          data-testid="logo-link"
          onClick={(event) => {
            event.preventDefault();
            window.location.assign(homeUrl);
          }}
        >
          <Logo size={30} />
          <div className="leading-[1.15] pb-[2px]">
            <div className="font-serif-display text-[18px] md:text-[22px] font-semibold tracking-tight">
              <span style={{ color: "#EA580C" }}>High Impact </span>
              <span className="text-stone-900 dark:text-stone-100">Mathematicians</span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setLearnOpen(true)}
                onMouseLeave={() => setLearnOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[15px] text-stone-700 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  data-testid="learn-dropdown-trigger"
                  onClick={() => setLearnOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${learnOpen ? "rotate-180" : ""}`} />
                </button>
                {learnOpen && (
                  <div
                    className="absolute left-0 top-full pt-2 min-w-[200px]"
                    data-testid="learn-dropdown-menu"
                  >
                    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg rounded-md overflow-hidden py-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="block px-4 py-2 text-[14px] text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
                          data-testid={`dropdown-link-${sub.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={handleTopOfPageClick(item.to)}
                className={({ isActive }) =>
                  `px-4 py-2 text-[15px] transition-colors ${
                    isActive
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-stone-700 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400"
                  }`
                }
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link
            to="/take-action"
            className="hidden sm:inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-5 py-2 md:py-2.5 text-[13px] md:text-[14px] font-medium transition-colors rounded-full"
            data-testid="header-cta-take-action"
            onClick={handleTopOfPageClick("/take-action")}
          >
            Take action
          </Link>
          <button
            className="lg:hidden text-stone-900 dark:text-stone-100 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950" data-testid="mobile-menu">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="border-b border-stone-200 dark:border-stone-800 pb-2 mb-1">
                  <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-orange-600 px-1 py-2">
                    {item.label}
                  </div>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      onClick={handleTopOfPageClick(sub.to)}
                      className="block px-1 py-2 text-stone-800 dark:text-stone-200 hover:text-orange-700 dark:hover:text-orange-400"
                      data-testid={`mobile-dropdown-link-${sub.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={handleTopOfPageClick(item.to)}
                  className={({ isActive }) =>
                    `px-1 py-3 border-b border-stone-200 dark:border-stone-800 ${
                      isActive ? "text-orange-600 dark:text-orange-400" : "text-stone-800 dark:text-stone-200"
                    }`
                  }
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/take-action"
              className="mt-4 inline-flex items-center justify-center gap-1.5 bg-orange-600 text-white px-4 py-3 font-medium rounded-full"
              data-testid="mobile-cta-take-action"
              onClick={handleTopOfPageClick("/take-action")}
            >
              Take action
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
