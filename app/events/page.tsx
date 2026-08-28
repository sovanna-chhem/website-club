import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { EventCard } from "../../components/event-card";
import { events } from "../../lib/data";

export default function EventsPage() {
  return <><main><div className="border-b border-line bg-[#0b1018] pt-36"><SiteHeader /><div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-lime">The calendar</p><h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">Make time<br />for good things.</h1><p className="mt-6 max-w-lg text-base leading-7 text-slate-400">Intimate gatherings, practical workshops, and a few excuses to put the laptop down.</p></div></div><section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-8 flex flex-wrap gap-2">{["All events", "Workshops", "Community", "Showcase"].map((filter, i) => <button key={filter} className={`rounded-full border px-4 py-2 text-xs font-semibold ${i === 0 ? "border-lime bg-lime text-ink" : "border-line text-slate-400 hover:border-white hover:text-white"}`}>{filter}</button>)}</div><div className="grid gap-5 md:grid-cols-2">{events.map((event) => <EventCard key={event.slug} event={event} />)}</div></section></main><SiteFooter /></>;
}
