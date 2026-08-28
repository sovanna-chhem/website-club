import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { Event } from "../lib/data";

export function EventCard({ event }: { event: Event }) {
  return <Link href={`/events/${event.slug}`} className="group relative block overflow-hidden rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-glow">
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-70`} />
    <div className="relative">
      <div className="mb-10 flex items-start justify-between"><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-lime">{event.category}</span><ArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" size={19} /></div>
      <h3 className="max-w-sm text-xl font-semibold text-white">{event.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{event.description}</p>
      <div className="mt-7 space-y-2 border-t border-white/10 pt-5 text-xs text-slate-400"><div className="flex items-center gap-2"><CalendarDays size={14} className="text-lime" />{event.date} · {event.time}</div><div className="flex items-center gap-2"><MapPin size={14} className="text-lime" />{event.location}</div></div>
    </div>
  </Link>;
}
