import { SectionHeading } from "../SectionHeading";
import { ExperienceTimeline } from "../ExperienceTimeline";
import { experience } from "../../lib/site-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div data-reveal>
        <SectionHeading
          eyebrow="Experience"
          title="I like work that makes complex systems feel simpler."
          description="The throughline in my career is consistent: building useful software, improving interface quality, and collaborating closely with product and backend teams."
        />
      </div>

      <ExperienceTimeline
        items={experience.map((item, index) => ({
          ...item,
          kind: index === 0 ? "work" : index === 2 ? "product" : "work",
        }))}
      />
    </section>
  );
}
