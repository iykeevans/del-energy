const stats = [
  { value: "6.48M", label: "SCM Gas delivered Annually" },
  { value: "6", label: "Active Sites" },
  { value: "95.33%", label: "Average Uptime" },
  { value: "10,950+", label: "MWH Power Supplied" },
  { value: "296,960", label: "tonnes of CO₂E avoided" },
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="shrink-0">
      <div className="text-4xl font-medium text-white lg:text-[80px]">
        {value}
      </div>
      <div className="mt-2 text-lg text-white/80">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-del-primary-darken-3 overflow-hidden py-16 lg:py-24">
      <div className="animate-marquee flex w-max gap-[113px] pr-[113px]">
        {[...stats, ...stats].map((stat, i) => (
          <StatItem key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
