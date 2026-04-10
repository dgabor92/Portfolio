import { SectionHeading } from "../SectionHeading";
import { ProjectShowcase } from "../ProjectShowcase";
import { projects } from "../../lib/site-data";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div data-reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="A portfolio should prove taste, not just list names."
          description="These projects show the level of presentation and delivery I care about: cleaner hierarchy, stronger brand feel, and practical usability."
        />
      </div>

      <div className="mt-8">
        {projects.map((project, index) => (
          <div key={project.title} data-reveal style={{ transitionDelay: `${index * 120}ms` }}>
            <ProjectShowcase {...project} reversed={index % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
