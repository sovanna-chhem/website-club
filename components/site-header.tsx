"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "./icons";

const links = [
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join the club" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2 text-sm font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-black text-ink transition-transform group-hover:rotate-12">W</span>
          <span>website<span className="text-lime">club</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</Link>)}
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-white transition hover:border-lime hover:text-lime">Member login <ArrowUpRight size={14} /></Link>
        </nav>
        <button aria-label="Toggle navigation" className="text-white md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="mx-4 rounded-2xl border border-line bg-panel p-4 shadow-2xl md:hidden">
        {links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="block border-b border-line py-3 text-sm text-slate-300 last:border-0">{link.label}</Link>)}
        <Link href="/dashboard" onClick={() => setOpen(false)} className="mt-3 block rounded-xl bg-lime px-4 py-3 text-center text-sm font-bold text-ink">Member login</Link>
      </nav>}
    </header>
  );
}
