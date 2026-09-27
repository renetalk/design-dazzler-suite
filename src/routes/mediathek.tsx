import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/mediathek")({
  head: () => ({ meta: [
    { title: "Mediathek | Tergar Campus" },
    { name: "description", content: "Lehrvideos, Audios und Begleitmaterialien im Tergar Campus." },
    { property: "og:title", content: "Mediathek | Tergar Campus" },
    { property: "og:description", content: "Lehrvideos, Audios und Begleitmaterialien im Tergar Campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
    <SiteHeader />
    <main className="w-full flex-1 pt-20 bg-surface-subtle"><div className="flex flex-col w-full">
<div className="max-w-container-max w-full mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-xl lg:py-space-2xl">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-xl">
<div className="max-w-3xl space-y-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-eyebrow text-eyebrow tracking-widest text-primary font-bold uppercase">Trainer:innen-Bereich • Zentrale Ablage</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight font-normal">Mediathek</h1>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
          Zentrale Ablage und Verwaltung aller Lehrvideos, geführten Audio-Meditationen und PDF-Praxishefte des Tergar Campus. Medien können hier hochgeladen, mit Untertiteln versehen und direkt in Kursmodule eingebunden werden.
        </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-accent-ochre-hover transition-all flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="">Neues Medium hochladen</span>
</button>
</div>
</div>
<div className="bg-surface-base rounded-2xl shadow-sm p-space-md mb-space-xl space-y-space-md">
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 text-nowrap"><button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-accent-ochre-light text-primary font-semibold" type="button">Alle Medien</button><button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">Videos</button><button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">Audios</button><button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">PDFs</button></div>
<div className="relative pt-space-xs"><span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span><input className="w-full pl-10 pr-4 py-2 bg-surface-muted rounded-lg font-body-sm text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:bg-surface-base focus:ring-1 focus:ring-primary-container transition-all" placeholder="Medien durchsuchen..." type="text"/></div>
</div>
<div className="mb-space-3xl">
<div className="flex items-center justify-between mb-space-md"><h2 className="font-headline-sm text-headline-sm text-text-primary font-normal">Alle Medien im Überblick</h2></div>
<div className="space-y-space-xs"><div className="bg-surface-base px-space-md py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-space-md"><div className="w-9 h-9 shrink-0 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">headphones</span></div><span className="font-label-md text-label-md text-text-primary">Körper-Gewahrsein – 15 Min. geführte Praxis</span></div><div className="bg-surface-base px-space-md py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-space-md"><div className="w-9 h-9 shrink-0 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">headphones</span></div><span className="font-label-md text-label-md text-text-primary">Atem als Anker – 10 Min. Kurzpraxis</span></div><div className="bg-surface-base px-space-md py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-space-md"><div className="w-9 h-9 shrink-0 rounded-full bg-surface-container-high text-secondary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">description</span></div><span className="font-label-md text-label-md text-text-primary">Übungsjournal & Reflexionsfragen Woche 1–4</span></div><div className="bg-surface-base px-space-md py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-space-md"><div className="w-9 h-9 shrink-0 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">videocam</span></div><span className="font-label-md text-label-md text-text-primary">Umgang mit schwierigen Emotionen und Gedanken</span></div><div className="bg-surface-base px-space-md py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-space-md"><div className="w-9 h-9 shrink-0 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">headphones</span></div><span className="font-label-md text-label-md text-text-primary">Klangmeditation im Alltag</span></div></div>
<div className="flex items-center justify-between pt-space-md text-secondary">
<span className="font-caption text-caption">Seite 1 von 30</span>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-lg bg-surface-base shadow-sm hover:bg-surface-muted disabled:opacity-40 transition-colors" disabled type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center shadow-sm" type="button">1</button>
<button className="w-8 h-8 rounded-lg bg-surface-base text-text-primary hover:bg-surface-muted font-label-md text-label-md flex items-center justify-center transition-colors" type="button">2</button>
<button className="w-8 h-8 rounded-lg bg-surface-base text-text-primary hover:bg-surface-muted font-label-md text-label-md flex items-center justify-center transition-colors" type="button">3</button>
<span className="px-1 text-text-muted">…</span>
<button className="p-1.5 rounded-lg bg-surface-base shadow-sm hover:bg-surface-muted transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div></main>
    <SiteFooter />
  </div>;
}
