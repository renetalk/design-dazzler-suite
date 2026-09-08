import { Link, useRouterState } from "@tanstack/react-router";

const nav = [
  { label: "Mein Kurs", to: "/" },
  { label: "Forum", to: "/forum" },
  { label: "Kursverwaltung", to: "/kursverwaltung" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-base border-b border-border-subtle shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-2xl">
          <Link className="flex items-center gap-space-xs group" to="/">
            <span className="w-9 h-9 rounded-full bg-accent-ochre-light flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">self_improvement</span>
            </span>
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface flex items-center gap-1.5">
              <span className="text-primary font-serif italic">Tergar</span>
              <span className="font-body-sm text-body-sm tracking-widest uppercase text-text-muted font-semibold">
                Campus
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-space-xs">
            {nav.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    active
                      ? "px-space-md py-2 rounded-lg bg-accent-ochre-light text-primary font-label-md text-label-md transition-colors"
                      : "px-space-md py-2 rounded-lg text-text-muted hover:text-on-surface hover:bg-surface-muted font-label-md text-label-md transition-colors"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-space-md">
          <button
            aria-label="Benachrichtigungen"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-on-surface hover:bg-surface-muted transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-base"></span>
          </button>
          <div className="flex items-center gap-space-sm group cursor-pointer pl-space-xs">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm font-label-md text-label-md font-semibold overflow-hidden ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
              <span>AM</span>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-body-sm text-body-sm font-semibold text-on-surface group-hover:text-primary transition-colors leading-tight">
                Anna Müller
              </span>
              <span className="font-caption text-caption text-text-muted leading-tight">
                Teilnehmerin
              </span>
            </div>
            <span className="material-symbols-outlined text-text-muted text-[18px] hidden lg:inline-block group-hover:text-on-surface transition-colors">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
