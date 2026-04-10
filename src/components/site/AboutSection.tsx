import { SectionHeading } from "../SectionHeading";
import { principles } from "../../lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div data-reveal>
        <SectionHeading
          eyebrow="About"
          title="Senior craft, clear decisions, and interfaces that feel intentional."
          description="I like building with restraint: the message should read quickly, the structure should feel calm, and every interaction should earn its place."
        />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <article
            key={principle.title}
            className="rounded-[1.75rem] border border-stroke bg-card p-6 shadow-soft backdrop-blur-xl"
            data-reveal
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
              0{index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{principle.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
