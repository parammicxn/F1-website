"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-[2px] bg-brand" />
          <span className="font-semibold tracking-wide">F1 Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-white shadow-sm hover:opacity-90"
          >
            Start a project
          </a>
        </nav>

        <button
          className="md:hidden inline-flex size-10 items-center justify-center rounded-md border border-white/10"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-white shadow-sm hover:opacity-90"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}