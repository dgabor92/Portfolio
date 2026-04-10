import { SectionHeading } from "../SectionHeading";
import { stackGroups } from "../../lib/site-data";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div data-reveal>
        <SectionHeading
          eyebrow="Stack"
          title="The stack I reach for when the goal is quality and delivery."
          description="I prefer a focused system: a modern frontend, solid backend integration, and a deployment flow that stays simple enough to trust."
        />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {stackGroups.map((group, index) => (
          <div
            key={group.title}
            className="rounded-[1.75rem] border border-stroke bg-card p-6 shadow-soft backdrop-blur-xl"
            data-reveal
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
