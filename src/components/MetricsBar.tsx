const metrics = [
  { num: "4th", label: "Semester" },
  { num: "BBA", label: "Degree Program" },
  { num: "2×", label: "Specializations" },
  { num: "∞", label: "Growth Mindset" },
];

const MetricsBar = () => (
  <div className="bg-ink grid grid-cols-2 md:grid-cols-4">
    {metrics.map((m, i) => (
      <div key={i} className="py-8 px-6 text-center border-r border-primary-foreground/[0.07] last:border-r-0">
        <div className="font-display text-5xl font-bold text-primary-foreground tracking-[-0.04em] leading-none mb-1.5">{m.num}</div>
        <div className="text-[0.72rem] text-primary-foreground/40 uppercase tracking-[0.12em] font-medium">{m.label}</div>
      </div>
    ))}
  </div>
);

export default MetricsBar;
