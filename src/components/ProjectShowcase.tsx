import { ArrowUpRight } from "lucide-react";

type ProjectShowcaseProps = {
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  href: string;
  tags: readonly string[];
  reversed?: boolean;
};

export function ProjectShowcase({
  title,
  category,
  description,
  impact,
  image,
  href,
  tags,
  reversed = false,
}: ProjectShowcaseProps) {
  return (
    <article className="grid gap-6 border-t border-stroke py-8 lg:grid-cols-12 lg:gap-10">
      <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{category}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
        <p className="mt-4 border-l border-accent/60 pl-4 text-sm leading-7 text-foreground/90">{impact}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stroke bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:translate-x-0.5"
        >
          Open project
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-[2rem] border border-stroke bg-white/5 shadow-soft"
        >
          <img
            src={image}
            alt={title}
            className="h-[320px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] sm:h-[380px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-background/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/70">Selected work</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
              Clean composition, stronger hierarchy, and a more trustworthy first impression.
            </p>
          </div>
        </a>
      </div>
    </article>
  );
}
