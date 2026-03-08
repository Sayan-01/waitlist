export default function Marquee() {
  const stats = [
    { num: "20+", label: "Agencies waitlisted" },
    { num: "3x", label: "Faster client approvals" },
    { num: "Q2 2026", label: "Launch target" },
    { num: "Free", label: "Early access tier" },
  ];

  return (
    <div className="flex justify-center items-center gap-0 py-10 px-6 border-y border-white/5 bg-[#0F0F0F] overflow-x-auto w-full relative z-10">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 min-w-[160px] text-center px-8 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-10 after:bg-white/10 last:after:hidden"
        >
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-b from-white to-white/50 bg-clip-text text-transparent mb-1 font-display2">{s.num}</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium whitespace-nowrap">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

