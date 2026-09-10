import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const pill =
  "px-space-md py-1.5 rounded-full font-label-md text-label-md transition-colors";
const idle = "text-secondary hover:text-text-primary hover:bg-surface-muted";
const active = "text-primary bg-accent-ochre-light";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const adminActive =
    pathname.startsWith("/kursverwaltung") || pathname.startsWith("/mediathek");

  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-base/95 backdrop-blur-md shadow-[0_1px_8px_rgba(43,51,63,0.03)]">
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <Link className="flex items-center gap-space-sm group" to="/">
            <span className="w-9 h-9 rounded-full bg-accent-ochre-light flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">self_improvement</span>
            </span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-text-primary tracking-tight leading-none group-hover:text-primary transition-colors">
                Tergar
              </span>
              <span className="font-eyebrow text-eyebrow tracking-widest text-primary font-bold uppercase mt-0.5">
                Campus
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-space-xs ml-space-md">
            <Link to="/" className={`${pill} ${pathname === "/" ? active : idle}`}>
              Mein Kurs
            </Link>
            <Link
              to="/forum"
              className={`${pill} ${pathname.startsWith("/forum") ? active : idle}`}
            >
              Forum
            </Link>
            <div className="relative" ref={ref}>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={`${pill} ${adminActive ? active : idle} flex items-center gap-1`}
              >
                <span>Kursverwaltung</span>
                <span className="material-symbols-outlined text-[18px]">
                  {open ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                </span>
              </button>
              {open && (
                <div className="absolute top-full left-0 mt-2.5 w-80 bg-surface-base rounded-2xl shadow-xl ring-1 ring-border-subtle p-space-md z-50 flex flex-col gap-1 text-left">
                  <Link
                    to="/kursverwaltung"
                    className="p-space-sm rounded-xl hover:bg-surface-muted transition-colors group block"
                  >
                    <div className="font-label-md text-label-md text-text-primary group-hover:text-primary transition-colors font-bold">
                      Kursübersicht &amp; Kohorten
                    </div>
                    <div className="font-body-sm text-body-sm text-text-muted mt-0.5 leading-snug">
                      Verwalte alle Kurse, Termine und Teilnehmendenzugänge.
                    </div>
                  </Link>
                  <Link
                    to="/mediathek"
                    className="p-space-sm rounded-xl hover:bg-surface-muted transition-colors group block"
                  >
                    <div className="font-label-md text-label-md text-text-primary group-hover:text-primary transition-colors font-bold">
                      Mediathek
                    </div>
                    <div className="font-body-sm text-body-sm text-text-muted mt-0.5 leading-snug">
                      Zentrale Ablage für Lehrvideos, geführte Audios und Transkripte.
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-space-md">
          <button
            aria-label="Benachrichtigungen"
            type="button"
            className="relative p-space-xs text-secondary hover:text-text-primary hover:bg-surface-muted rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-base"></span>
          </button>
          <button
            aria-label="Menü öffnen"
            aria-expanded={mobileOpen}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-space-xs text-secondary hover:text-text-primary hover:bg-surface-muted rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
          <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-semibold">
              AM
            </div>
            <span className="hidden sm:inline-block font-label-md text-label-md text-text-primary group-hover:text-primary transition-colors">
              Anna Müller
            </span>
            <span className="material-symbols-outlined text-secondary text-[18px] hidden sm:inline-block">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
