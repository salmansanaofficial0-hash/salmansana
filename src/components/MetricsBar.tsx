import { useSiteContent } from "@/lib/site-content";

const MetricsBar = () => {
  const { metrics } = useSiteContent();
  return (
    <section className="relative bg-navy text-white" aria-label="Profile highlights">
      <div className="site-container grid grid-cols-2 py-3 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <div key={`${metric.label}-${index}`} className="border-white/10 px-3 py-7 text-center even:border-l md:border-l md:first:border-l-0 md:px-8 md:py-10">
            <p className="font-display text-3xl font-extrabold tracking-[-.06em] text-yellow-300 md:text-5xl">{metric.num}</p>
            <p className="mt-2 text-[.65rem] font-bold uppercase tracking-[.16em] text-white/45">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsBar;
