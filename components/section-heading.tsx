import { ArrowUpRight } from "./icons";

export function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: string }) {
  return <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
    <div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-lime">{eyebrow}</p><h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>{description && <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{description}</p>}</div>
    {action && <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">{action} <ArrowUpRight size={16} className="text-lime" /></span>}
  </div>;
}
