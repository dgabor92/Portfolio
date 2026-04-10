export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Gábor Deutsch. All rights reserved.</p>
      </div>
    </footer>
  );
}
