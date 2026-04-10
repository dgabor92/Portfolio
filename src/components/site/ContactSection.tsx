import { ArrowUpRight, FolderGit2, Mail, MapPin } from "lucide-react";
import { ButtonLink } from "../ui/button";

export function ContactSection() {
  return (
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
              If you want a portfolio, product site, or frontend system that feels premium, let’s talk.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              I’m open to selective freelance work, product collaboration, and roles where craft, speed, and maintainability matter.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="mailto:deutschgabor92@gmail.com" variant="default">
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
              <ButtonLink href="https://github.com/dgabor92" target="_blank" rel="noreferrer" variant="secondary">
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
  );
}
