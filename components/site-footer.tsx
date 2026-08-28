import Link from "next/link";

export function SiteFooter() {
  return <footer className="border-t border-line bg-ink">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:px-8 md:flex-row md:items-center md:justify-between">
      <div><p className="font-bold text-white">website<span className="text-lime">club</span></p><p className="mt-2 text-sm text-slate-500">A club for people building the internet.</p></div>
      <div className="flex gap-6 text-sm text-slate-500"><Link className="hover:text-white" href="/events">Events</Link><Link className="hover:text-white" href="/about">About</Link><Link className="hover:text-white" href="/join">Join</Link></div>
      <p className="text-xs text-slate-600">© 2026 Website Club</p>
    </div>
  </footer>;
}
