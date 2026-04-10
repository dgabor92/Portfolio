import { useEffect } from "react";
import {
  ArrowUpRight,
  FolderGit2,
  Mail,
  MapPin,
  Sparkles,
  Download,
} from "lucide-react";
import { ButtonLink } from "./components/ui/button";
import { SectionHeading } from "./components/SectionHeading";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import {
  education,
  experience,
  highlights,
  navigation,
  principles,
  projects,
  stackGroups,
} from "./lib/site-data";

const portrait = new URL("../images/me-portrait.jpg", import.meta.url).href;

function App() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-accent shadow-soft">
              GD
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Gábor Deutsch
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                Senior Full-Stack Developer
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative">
          <div className="mx-auto grid min-h-[calc(100svh-73px)] w-full max-w-7xl items-center gap-14 px-5 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
            <div className="relative z-10 lg:col-span-7" data-reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur">
                <Sparkles size={14} className="text-accent" />
                Available for select freelance and product work
              </div>

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.35em] text-accent/80">
                React • TypeScript • Next.js • Vercel
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                I build fast web products with the calm confidence of a senior
                engineer.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                I design and ship polished interfaces, scalable frontends, and
                reliable delivery pipelines. My focus is modern React
                craftsmanship, TypeScript discipline, and production-ready
                execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#work" variant="default">
                  View selected work
                  <ArrowUpRight size={16} />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  Get in touch
                </ButtonLink>
                <ButtonLink
                  href="#experience"
                  variant="ghost"
                  className="border border-white/10 bg-white/5"
                >
                  <Download size={16} />
                  Experience
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-stroke bg-card p-4 backdrop-blur-xl hero-glow"
                  >
                    <p className="text-2xl font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-5" data-reveal>
              <div className="absolute -right-2 top-10 hidden h-72 w-72 rounded-full bg-accent/15 blur-3xl lg:block" />
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -left-4 top-8 h-24 w-24 rounded-full border border-accent/30 bg-accent/10 blur-[1px] animate-float" />
                <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-[1px] animate-float [animation-delay:1.3s]" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-hero-radial opacity-70" />
                  <div className="relative grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1726]">
                      <img
                        src={portrait}
                        alt="Gábor Deutsch portrait"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
                          Profile signal
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-foreground/80">
                          Debrecen, Hungary
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                          Core stack
                        </p>
                        <p className="mt-2 text-lg font-semibold text-foreground">
                          React / TypeScript / Tailwind
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          I build interfaces that feel precise, accessible, and
                          easy to maintain in production.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85">
                          UX-focused
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85">
                          Type-safe
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85">
                          Production-ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
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
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div data-reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="A portfolio should prove taste, not just list names."
              description="These projects show the level of presentation and delivery I care about: cleaner hierarchy, stronger brand feel, and practical usability."
            />
          </div>

          <div className="mt-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <ProjectShowcase {...project} reversed={index % 2 === 1} />
              </div>
            ))}
          </div>
        </section>

        <section
          id="stack"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
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
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
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

        <section
          id="experience"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
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

        <section
          id="education"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div data-reveal>
            <SectionHeading
              eyebrow="Education"
              title="Formal study matters when it still shows up in how you think."
              description="I left education in because it gives useful context for how I approach systems, structure, and continued growth. For a senior portfolio, that adds credibility rather than clutter."
            />
          </div>

          <ExperienceTimeline items={education} />
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-7xl px-5 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12"
        >
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-2xl sm:p-10 lg:p-12"
            data-reveal
          >
            <div className="absolute inset-0 bg-hero-radial opacity-80" />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  If you want a portfolio, product site, or frontend system that
                  feels premium, let’s talk.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                  I’m open to selective freelance work, product collaboration,
                  and roles where craft, speed, and maintainability matter.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-3">
                  <ButtonLink
                    href="mailto:deutschgabor92@gmail.com"
                    variant="default"
                  >
                    <Mail size={16} />
                    Email me
                  </ButtonLink>
                  <ButtonLink
                    href="https://www.linkedin.com/in/g%C3%A1bor-deutsch-aa3952152/"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                  >
                    <ArrowUpRight size={16} />
                    LinkedIn
                  </ButtonLink>
                  <ButtonLink
                    href="https://github.com/dgabor92"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                  >
                    <FolderGit2 size={16} />
                    GitHub
                  </ButtonLink>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                  <MapPin size={16} className="text-accent" />
                  Debrecen, Hungary · Remote-friendly
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Gábor Deutsch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
