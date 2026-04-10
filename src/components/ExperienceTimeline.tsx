import { GraduationCap, Rocket, SquareActivity, BriefcaseBusiness } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  kind?: "work" | "education" | "product";
};

const icons = {
  work: BriefcaseBusiness,
  education: GraduationCap,
  product: Rocket,
} as const;

type ExperienceTimelineProps = {
  items: readonly ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-10">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-white/15 to-transparent lg:left-1/2" />
      <div className="space-y-6">
        {items.map((item, index) => {
          const Icon = icons[item.kind ?? "work"];
          const alignRight = index % 2 === 1;

          return (
            <div key={`${item.company}-${item.role}`} className="relative grid gap-4 lg:grid-cols-2 lg:gap-8">
              <div className={`${alignRight ? "lg:col-start-2 lg:pl-12" : "lg:pr-12"} pl-14 lg:pl-0`}>
                <div className="rounded-[1.5rem] border border-stroke bg-card p-5 shadow-soft backdrop-blur-xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stroke bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                    <Icon size={14} className="text-accent" />
                    {item.period}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent/90">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </div>

              <div className={`absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-background lg:left-1/2 lg:-translate-x-1/2 ${alignRight ? "hidden lg:flex" : "flex"}`}>
                <SquareActivity size={16} className="text-accent" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
