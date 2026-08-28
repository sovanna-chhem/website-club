"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, CalendarDays, LayoutDashboard, LogOut, Settings, Users } from "./icons";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/events", label: "My events", icon: CalendarDays },
  { href: "/dashboard/members", label: "Members", icon: Users },
  { href: "/dashboard/resources", label: "Resources", icon: BookOpen }
];

export function DashboardShell({ children, admin = false }: { children: React.ReactNode; admin?: boolean }) {
  const pathname = usePathname();
  const items = admin ? [{ href: "/admin", label: "Overview", icon: LayoutDashboard }, { href: "/admin/events", label: "Events", icon: CalendarDays }, { href: "/admin/members", label: "Members", icon: Users }, { href: "/admin/resources", label: "Resources", icon: BookOpen }] : nav;
  return <div className="min-h-screen bg-ink text-white">
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-[#0b1018] px-5 py-6 lg:flex">
      <Link href="/" className="mb-14 flex items-center gap-2 text-sm font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-black text-ink">W</span>website<span className="text-lime">club</span></Link>
      <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-slate-600">{admin ? "Administration" : "Your space"}</p>
      <nav className="space-y-1">{items.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${pathname === href ? "bg-lime font-semibold text-ink" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}><Icon size={17} />{label}</Link>)}</nav>
      {!admin && <div className="mt-auto rounded-2xl border border-line bg-panel p-4"><p className="text-xs font-semibold text-white">Want to host something?</p><p className="mt-1 text-xs leading-5 text-slate-500">Share an idea with the club team.</p><Link href="/join" className="mt-3 block text-xs font-bold text-lime">Pitch an event →</Link></div>}
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-5"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-xs font-bold text-ink">MT</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">Minh Tran</p><p className="text-[11px] text-slate-500">{admin ? "Admin" : "Member"}</p></div><LogOut size={15} className="text-slate-600" /></div>
    </aside>
    <div className="lg:pl-64"><header className="flex h-20 items-center justify-between border-b border-line px-5 lg:px-10"><div className="lg:hidden"><Link href="/" className="font-bold">website<span className="text-lime">club</span></Link></div><div className="hidden text-sm text-slate-400 lg:block">{admin ? "Admin console / " : "Member space / "}<span className="text-white">{admin ? "Overview" : "Good morning, Minh"}</span></div><div className="flex items-center gap-5"><button className="text-slate-500 hover:text-white"><Bell size={18} /></button><Link href="/profile" className="flex items-center gap-2 text-sm text-slate-300"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-xs font-bold text-ink">MT</span><span className="hidden sm:inline">Minh Tran</span></Link></div></header><main className="mx-auto max-w-7xl p-5 lg:p-10">{children}</main></div>
  </div>;
}
