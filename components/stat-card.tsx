export function StatCard({ label, value, change }: { label: string; value: string; change: string }) {
  return <div className="rounded-2xl border border-line bg-panel p-5"><p className="text-xs text-slate-500">{label}</p><div className="mt-3 flex items-end justify-between"><p className="text-3xl font-semibold tracking-tight text-white">{value}</p><span className="rounded-full bg-lime/10 px-2 py-1 text-[11px] font-bold text-lime">{change}</span></div></div>;
}
