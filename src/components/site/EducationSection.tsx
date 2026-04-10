import { SectionHeading } from "../SectionHeading";
import { ExperienceTimeline } from "../ExperienceTimeline";
import { education } from "../../lib/site-data";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div data-reveal>
        <SectionHeading
          eyebrow="Education"
          title="Formal study matters when it still shows up in how you think."
          description="I left education in because it gives useful context for how I approach systems, structure, and continued growth. For a senior portfolio, that adds credibility rather than clutter."
        />
      </div>

      <ExperienceTimeline items={education} />
    </section>
  );
}
