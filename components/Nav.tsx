"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-5 h-16">
        <Link href="/" className={`font-heading text-lg font-bold ${scrolled ? "text-primary" : "text-white"}`}>
          Cepedas <span className="text-accent">Event Center</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={`hover:text-accent transition-colors ${scrolled ? "text-ink" : "text-white"}`}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.phoneHref} className={`text-sm ${scrolled ? "text-ink" : "text-white"} hover:text-accent`}>
            {SITE.phone}
          </a>
          <Link href="/inquiry" className="bg-accent text-primary font-semibold text-sm px-4 py-2 rounded-full hover:opacity-90">
            Book a Tour
          </Link>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper border-t px-5 py-4 space-y-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="block text-ink" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="block text-ink font-semibold">📞 {SITE.phone}</a>
          <Link href="/inquiry" className="block text-center bg-accent text-primary font-semibold px-4 py-2 rounded-full">
            Book a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
