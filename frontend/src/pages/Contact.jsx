import React, { useState } from "react";
import { Send, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "General", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div data-testid="page-contact" className="bg-white dark:bg-stone-950">
      <section>
        <div className="max-w-[760px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32 text-center">
          <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight leading-[0.98] text-stone-900 dark:text-stone-100">
            Write to us
          </h1>
          <p className="mt-6 font-serif-display italic text-stone-600 dark:text-stone-400 text-xl md:text-2xl leading-snug">
            Questions, half-formed ideas, partnership proposals, all welcome! 
          </p>
          <div className="ea-rule mt-10" />

          {/* <p className="mt-10 text-stone-600 dark:text-stone-400 text-sm">
            <span className="font-mono-tag text-orange-600 dark:text-orange-400">// note —</span> this is a prototype form. Submissions are not yet sent anywhere; the visible confirmation is for layout review only.
          </p> */}

          {submitted ? (
            <div
              className="mt-12 mx-auto max-w-xl border-l-2 border-orange-600 bg-cream dark:bg-stone-900 p-6 flex items-start gap-4 text-left"
              data-testid="form-success-state"
            >
              <div className="bg-orange-600 text-white p-2 rounded-full shrink-0">
                <Check size={18} />
              </div>
              <div>
                <div className="font-serif-display text-2xl text-stone-900 dark:text-stone-100">Thank you — message received.</div>
                <p className="mt-2 text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  In the live version of the site, we'd email you back within a week.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", topic: "General", message: "" });
                  }}
                  className="mt-4 font-mono-tag text-[11px] uppercase tracking-[0.22em] text-orange-700 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-300"
                  data-testid="form-reset"
                >
                  ← send another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-12 space-y-6 text-left" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="mt-2 w-full border-b border-stone-300 dark:border-stone-700 px-0 py-2.5 text-base bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none focus:border-orange-600 placeholder:text-stone-400 dark:placeholder:text-stone-500"
                    placeholder="Ada Lovelace"
                    data-testid="form-input-name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="mt-2 w-full border-b border-stone-300 dark:border-stone-700 px-0 py-2.5 text-base bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none focus:border-orange-600 placeholder:text-stone-400 dark:placeholder:text-stone-500"
                    placeholder="ada@example.org"
                    data-testid="form-input-email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Topic</span>
                <select
                  value={form.topic}
                  onChange={update("topic")}
                  className="mt-2 w-full border-b border-stone-300 dark:border-stone-700 px-0 py-2.5 text-base bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none focus:border-orange-600"
                  data-testid="form-input-topic"
                >
                  <option>General</option>
                  <option>I'd like to contribute</option>
                  <option>Partnership / collaboration</option>
                  <option>Feedback on a profile</option>
                  <option>Press / media</option>
                </select>
              </label>

              <label className="block">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Message</span>
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  rows={6}
                  className="mt-2 w-full border-b border-stone-300 dark:border-stone-700 px-0 py-2.5 text-base bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none focus:border-orange-600 resize-y placeholder:text-stone-400 dark:placeholder:text-stone-500"
                  placeholder="What's on your mind?"
                  data-testid="form-input-message"
                />
              </label>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                <div className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                  We never share your email.
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 text-sm font-medium transition-colors rounded-full"
                  data-testid="form-submit"
                >
                  Send message <Send size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
