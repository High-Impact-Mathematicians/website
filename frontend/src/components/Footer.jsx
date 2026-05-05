import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-cream dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-serif-display text-[22px] font-semibold">
              <span style={{ color: "#EA580C" }}>Effective </span>
              <span className="text-stone-900 dark:text-stone-100">Mathematicians</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-stone-600 dark:text-stone-400 leading-relaxed text-[15px]">
            A community for mathematicians, statisticians, and quantitative thinkers who want to use their craft to address the world's most pressing problems.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-4">Site</div>
          <ul className="space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
            <li><Link to="/" className="hover:text-orange-700 dark:hover:text-orange-400">Home</Link></li>
            <li><Link to="/learn/cause-areas" className="hover:text-orange-700 dark:hover:text-orange-400">Cause Areas</Link></li>
            <li><Link to="/learn/resources" className="hover:text-orange-700 dark:hover:text-orange-400">Resources</Link></li>
            <li><Link to="/about" className="hover:text-orange-700 dark:hover:text-orange-400">About</Link></li>
            <li><Link to="/take-action" className="hover:text-orange-700 dark:hover:text-orange-400">Take Action</Link></li>
            <li><Link to="/contact" className="hover:text-orange-700 dark:hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-4">Learn more</div>
          <ul className="space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
            <li><a href="https://www.effectivealtruism.org/" target="_blank" rel="noreferrer" className="hover:text-orange-700 dark:hover:text-orange-400">Effective Altruism</a></li>
            <li><a href="https://leaf.courses/" target="_blank" rel="noreferrer" className="hover:text-orange-700 dark:hover:text-orange-400">Leaf</a></li>
            <li><a href="https://www.highimpactprofessionals.org/" target="_blank" rel="noreferrer" className="hover:text-orange-700 dark:hover:text-orange-400">High Impact Professionals</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-4">Connect</div>
          <ul className="space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
            <li>
              <a href="https://github.com/effective-mathematicians" target="_blank" rel="noreferrer" className="hover:text-orange-700 dark:hover:text-orange-400 inline-flex items-center gap-2">
                <Github size={14} /> GitHub Forum
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-700 dark:hover:text-orange-400 inline-flex items-center gap-2">
                <Mail size={14} /> Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 pb-10 pt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-stone-500 dark:text-stone-500 border-t border-stone-200 dark:border-stone-800">
        <div className="pt-6">© {new Date().getFullYear()} Effective Mathematicians</div>
      </div>
    </footer>
  );
}
