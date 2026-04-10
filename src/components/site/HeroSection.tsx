import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { ButtonLink } from "../ui/button";
import { highlights } from "../../lib/site-data";

const portrait = new URL("../../../images/me-portrait.jpg", import.meta.url).href;

export function HeroSection() {
  return (
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
            I build fast web products with the calm confidence of a senior engineer.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            I design and ship polished interfaces, scalable frontends, and reliable delivery pipelines. My focus is modern React craftsmanship, TypeScript discipline, and production-ready execution.
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
                <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
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
                      I build interfaces that feel precise, accessible, and easy to maintain in production.
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
  );
}
