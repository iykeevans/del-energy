const stats = [
  { value: "6.48M", label: "SOFON (GHS) Interest Annually" },
  { value: "6", label: "Active Sites" },
  { value: "95.33%", label: "Average Uptime" },
  { value: "10,950+", label: "MWH Power Supplied" },
];

export function StatsSection() {
  return (
    <section className="bg-[#0A1C36] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-bold text-white lg:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
