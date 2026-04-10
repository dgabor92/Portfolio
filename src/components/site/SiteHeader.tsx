import { navigation } from "../../lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-accent shadow-soft">
            GD
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Gábor Deutsch</p>
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
  );
}
