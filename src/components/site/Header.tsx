"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, secondaryNav, site } from "@/content/site";
import { Diamond } from "@/components/ui/primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-[var(--rule)] bg-paper/88 backdrop-blur-[10px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-baseline gap-2.5"
            aria-label="Darsh Shhaparia — home"
          >
            <Diamond
              className="translate-y-[-1px] text-accent transition-transform duration-500 group-hover:rotate-[135deg]"
              size={6}
            />
            <span className="label text-ink">Darsh&nbsp;Shhaparia</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-[0.8125rem] leading-none transition-colors duration-300 ${
                    active ? "text-accent" : "text-ink-70 hover:text-ink"
                  }`}
                >
                  <span className="link-rule">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="label text-ink-45">Menu</span>
            <span className="flex w-6 flex-col gap-[5px]">
              <span className="h-px w-full bg-ink transition-transform duration-500 group-hover:translate-x-1" />
              <span className="h-px w-full bg-ink" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="graph-paper fixed inset-0 z-[80] overflow-y-auto bg-paper lg:hidden"
          >
            <div className="wrap flex h-[4.5rem] items-center justify-between">
              <span className="label flex items-baseline gap-2.5 text-ink">
                <Diamond className="text-accent" size={6} />
                Darsh&nbsp;Shhaparia
              </span>
              <button
                type="button"
                onClick={close}
                className="label flex items-center gap-3 text-ink-45"
                aria-label="Close menu"
              >
                Close
                <span className="relative block h-4 w-4">
                  <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-ink" />
                  <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-ink" />
                </span>
              </button>
            </div>

            <div className="wrap pt-6 pb-16">
              <ul className="border-t border-[var(--rule)]">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.035, duration: 0.5, ease: EASE }}
                    className="border-b border-[var(--rule)]"
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="row-hover flex items-baseline gap-5 py-4"
                    >
                      <span
                        className={`label-sm w-6 ${
                          isActive(item.href) ? "text-accent" : "text-ink-25"
                        }`}
                      >
                        {item.index}
                      </span>
                      <span
                        className={`display text-[2rem] ${
                          isActive(item.href) ? "text-accent" : "text-ink"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="label text-ink-45"
                    >
                      <span className="link-rule">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-[var(--rule)] pt-6">
                <p className="label mb-4 text-ink-25">Elsewhere</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="label text-ink-70"
                      >
                        <span className="link-rule">{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
