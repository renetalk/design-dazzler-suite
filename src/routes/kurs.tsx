import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kurs")({
  head: () => ({
    meta: [
      { title: "Joy of Living – Stufe 1 | Tergar Campus" },
      { name: "description", content: "Lektionen, Videos und Materialien zu Joy of Living Stufe 1." },
      { property: "og:title", content: "Joy of Living – Stufe 1 | Tergar Campus" },
      { property: "og:description", content: "Lektionen, Videos und Materialien zu Joy of Living Stufe 1." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page2,
});

function Page2() {
  const [tab, setTab] = useState<"notes" | "transcript">("notes");
  const [expandedModule, setExpandedModule] = useState(3);
  return (
    <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">

<section className="w-full bg-surface-subtle pb-space-2xl pt-space-xl">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-space-xxs px-space-sm py-1 rounded-full bg-accent-ochre-light text-primary-container text-eyebrow font-eyebrow mb-space-sm tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            Herbst-Kohorte 2024
          </div>
<h1 className="font-display-hero text-headline-lg lg:text-display-hero text-text-primary leading-tight font-normal">
            Joy of Living – Stufe 1: Den Geist beruhigen
          </h1>
<p className="font-body-lead text-body-lead text-text-muted mt-space-xs font-light">
            Einführung in die Meditation mit Yongey Mingyur Rinpoche.
          </p>
</div>

<div className="w-full lg:w-72 bg-surface-base p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between font-label-md text-label-md text-text-primary mb-space-xs">
<span className="">Lektion 3 von 6</span>
<span className="text-primary-container font-bold">45%</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full transition-all duration-500" style={{width: "45%"}}></div>
</div>
<p className="font-caption text-caption text-text-muted mt-space-xs">
            45% des Gesamtkurses abgeschlossen
          </p>
</div>
</div>
</div>
</section>

<section className="w-full py-space-2xl bg-surface-base">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-7 flex flex-col gap-space-xl">

<div className="relative w-full rounded-2xl overflow-hidden bg-text-primary aspect-video shadow-md group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" data-alt="Calm portrait of meditation master Yongey Mingyur Rinpoche wearing deep red and golden monastic robes, sitting upright in peaceful contemplative posture against an airy, warm minimalist background with diffused daylight and gentle earthen tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJE4siL2a6O7h7P_YGfNv7uZpp9bks1EKy7nd8viQ6s5WCMNc6p18OG3MpbBAnW48oWMxM_dBXGQepHqqIO8lIUQ_ik1sQZ46rZV1VL6sGt70sudJRzD3UgeoX2QttRo0r8yU2urnrjAq-b4alROpnLoG1wc_7Wsq4Igt9mSOtdgQ7KpD1bS3hlgHw7yVxr25_ScagBhcbJIY6iM4mESZLMFTGoJ8PxG7aM_Lxmbd9VXu73tkb-uxntw"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-between p-space-md lg:p-space-lg">
<div className="flex items-center justify-between">
<span className="px-space-xs py-1 rounded-md bg-black/40 backdrop-blur-md text-surface-base font-caption text-caption uppercase tracking-wider">
                  Lektion 3
                </span>
<span className="px-space-xs py-1 rounded-md bg-black/50 backdrop-blur-md text-surface-base font-caption text-caption flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">subtitles</span>
                  CC: Deutsch
                </span>
</div>
<div className="flex items-center justify-between">
<button aria-label="Lektion abspielen" className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary-container hover:bg-accent-ochre-hover text-surface-base flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 shadow-lg" id="playButton">
<span className="material-symbols-outlined text-[32px] ml-1">play_arrow</span>
</button>
<div className="bg-black/60 backdrop-blur-sm px-space-sm py-1 rounded-full text-surface-base font-caption text-caption font-semibold">
                  24:15 Min
                </div>
</div>
</div>
</div>

<div className="bg-surface-subtle p-space-lg rounded-2xl">

<div className="flex items-center gap-space-sm pb-space-sm mb-space-md">
<button type="button" onClick={() => setTab("notes")} className={`pb-space-xs font-label-md text-label-md relative transition-colors ${tab === "notes" ? "text-primary-container font-bold" : "text-text-muted hover:text-text-primary"}`}>
                Lektionsnotizen
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${tab === "notes" ? "bg-primary-container" : "bg-transparent"}`}></span>
</button>
<button type="button" onClick={() => setTab("transcript")} className={`pb-space-xs font-label-md text-label-md relative transition-colors ${tab === "transcript" ? "text-primary-container font-bold" : "text-text-muted hover:text-text-primary"}`}>
                Deutsches Transkript
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${tab === "transcript" ? "bg-primary-container" : "bg-transparent"}`}></span>
</button>
</div>

<div className={tab === "notes" ? "space-y-space-md" : "hidden"}>
<p className="font-body-md text-body-md text-text-primary leading-relaxed">
                In dieser Lektion lernen wir, wie auditive Reize und der natürliche Atemrhythmus nicht als Ablenkung, sondern als verlässliche Stütze der Achtsamkeit dienen können.
              </p>

</div>

<div className={tab === "transcript" ? "space-y-space-md font-body-md text-body-md text-text-primary" : "hidden"}>
<div className="p-space-md rounded-xl bg-surface-base shadow-sm text-body-sm space-y-space-sm text-text-muted max-h-60 overflow-y-auto">
<p className=""><span className="font-bold text-text-primary">00:15</span> – Willkommen zur dritten Lektion von Freude am Leben. Heute untersuchen wir unser Verhältnis zu den Geräuschen unserer Umwelt.</p>
<p className=""><span className="font-bold text-text-primary">04:30</span> – Oft glauben wir, für Meditation brauche es absolute Stille. Doch wahrer Friede entsteht, indem wir Geräusche als Objekt der Wahrnehmung willkommen heißen.</p>
<p className=""><span className="font-bold text-text-primary">12:10</span> – Horchen Sie einfach: der Wind im Fenster, ein entfernter Motor, das eigene Atmen. Verweilen Sie einfach mit dem Klang.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex min-w-0 flex-col gap-space-xl">

<div className="bg-surface-subtle p-space-lg rounded-2xl">
<h3 className="font-headline-md text-headline-sm text-text-primary mb-space-md font-normal">
              Kursübersicht
            </h3>
<div className="space-y-space-xs">
{[
  { number: 1, title: "Einführung & Was ist Meditation?" },
  { number: 2, title: "Der Körper als Anker" },
].map((module) => (
  <div key={module.number} className="overflow-hidden rounded-xl border border-border-subtle/50 bg-surface-base">
    <button type="button" aria-expanded={expandedModule === module.number} onClick={() => setExpandedModule(expandedModule === module.number ? 0 : module.number)} className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-space-sm p-space-sm text-left transition-colors hover:bg-surface-muted/60">
      <span className="flex min-w-0 items-center gap-space-sm">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary-container"><span className="material-symbols-outlined text-[16px]">check</span></span>
        <span className="min-w-0"><span className="flex flex-wrap items-center gap-space-xs"><span className="font-eyebrow text-eyebrow uppercase text-text-muted">Modul {module.number}</span><span className="font-caption text-caption text-text-muted">• 3 Lektionen</span></span><span className="block font-label-md text-label-md text-text-primary">{module.title}</span></span>
      </span>
      <span className="flex shrink-0 items-center gap-space-xs text-text-muted"><span className="hidden font-caption text-caption sm:inline">3/3 erledigt</span><span className="material-symbols-outlined text-[18px]">{expandedModule === module.number ? "expand_less" : "expand_more"}</span></span>
    </button>
    {expandedModule === module.number && <div className="border-t border-border-subtle/50 px-space-md py-space-xs font-caption text-caption text-text-muted">3 Lektionen abgeschlossen</div>}
  </div>
))}
<div className="overflow-hidden rounded-xl border-2 border-primary-container/30 bg-surface-base shadow-sm">
  <button type="button" aria-expanded={expandedModule === 3} onClick={() => setExpandedModule(expandedModule === 3 ? 0 : 3)} className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-space-sm border-b border-primary-container/20 bg-accent-ochre-light p-space-sm text-left">
    <span className="flex min-w-0 items-center gap-space-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container text-surface-base shadow-sm"><span className="material-symbols-outlined ml-0.5 text-[16px]">play_arrow</span></span><span className="min-w-0"><span className="flex flex-wrap items-center gap-space-xs"><span className="font-eyebrow text-eyebrow font-bold uppercase text-primary-container">Modul 3 • Aktiv</span><span className="font-caption text-caption font-semibold text-primary-container">• 1/3 Videos</span></span><span className="block font-label-md text-label-md font-bold text-text-primary">Klänge und Atem erforschen</span></span></span>
    <span className="flex shrink-0 items-center gap-space-xs text-primary-container"><span className="hidden font-caption text-caption font-semibold sm:inline">Laufend</span><span className="material-symbols-outlined text-[18px]">{expandedModule === 3 ? "expand_less" : "expand_more"}</span></span>
  </button>
  {expandedModule === 3 && <div className="ml-space-sm space-y-1 border-l-2 border-primary-container/20 py-space-xs pl-space-md pr-space-xs">
    {[
      { icon: "check", label: "3.1 Klänge und Geräusche als Stütze", status: "Fertig", active: false },
      { icon: "play_arrow", label: "3.2 Den Atem erforschen", status: "Aktiv", active: true },
      { icon: "play_circle", label: "3.3 Kurze Momente im Alltag", status: "Offen", active: false },
    ].map((lesson) => <div key={lesson.label} className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-space-xs rounded-lg p-space-xs ${lesson.active ? "border border-primary-container/30 bg-accent-ochre-light/70 shadow-sm" : "hover:bg-surface-muted"}`}><span className="flex min-w-0 items-center gap-space-xs"><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${lesson.active ? "bg-primary-container text-surface-base" : "bg-surface-container text-primary-container"}`}><span className="material-symbols-outlined text-[14px]">{lesson.icon}</span></span><span className={`font-caption text-caption text-text-primary ${lesson.active ? "font-bold" : "font-semibold"}`}>{lesson.label}</span></span><span className={`shrink-0 rounded px-space-xs py-0.5 font-caption text-caption ${lesson.active ? "bg-surface-base/80 font-bold text-primary-container" : "bg-surface-muted text-text-muted"}`}>{lesson.status}</span></div>)}
  </div>}
</div>
<div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-space-sm rounded-xl border border-border-subtle/40 bg-surface-base/60 p-space-sm opacity-80"><span className="flex min-w-0 items-center gap-space-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-muted text-text-muted"><span className="material-symbols-outlined text-[16px]">schedule</span></span><span className="min-w-0"><span className="flex flex-wrap gap-space-xs"><span className="font-eyebrow text-eyebrow uppercase text-text-muted">Modul 4</span><span className="font-caption text-caption text-text-muted">• 3 Lektionen</span></span><span className="block font-label-md text-label-md text-text-muted">Gedanken und Gefühle als Freunde</span></span></span><span className="shrink-0 font-caption text-caption text-text-muted">In 4 Tagen</span></div>
<div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-space-sm rounded-xl border border-border-subtle/30 bg-surface-base/40 p-space-sm opacity-50"><span className="flex min-w-0 items-center gap-space-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-muted text-text-muted"><span className="material-symbols-outlined text-[16px]">lock</span></span><span className="min-w-0"><span className="flex flex-wrap gap-space-xs"><span className="font-eyebrow text-eyebrow uppercase text-text-muted">Modul 5 &amp; 6</span><span className="font-caption text-caption text-text-muted">• 6 Lektionen</span></span><span className="block font-label-md text-label-md text-text-muted">Gewahrsein im Alltag vertiefen</span></span></span><span className="shrink-0 font-caption text-caption text-text-muted">Gesperrt</span></div>
</div>
</div>

<div className="bg-surface-subtle p-space-lg rounded-2xl flex flex-col gap-space-md">
<h3 className="font-headline-sm text-headline-sm text-text-primary font-normal">
              Geführte Praxis &amp; Materialien
            </h3>

<div className="p-space-sm rounded-xl bg-surface-base shadow-sm flex items-center justify-between gap-space-sm hover:shadow transition-shadow">
<div className="flex items-center gap-space-sm">
<button aria-label="Audio abspielen" className="w-10 h-10 rounded-full bg-surface-container hover:bg-primary-container hover:text-surface-base text-primary-container flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px] ml-0.5">play_arrow</span>
</button>
<div>
<h5 className="font-label-md text-label-md text-text-primary">Atem-Gewahrsein</h5>
<p className="font-caption text-caption text-text-muted">Geführte Audio-Übung • 10 Min.</p>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px]">graphic_eq</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-base shadow-sm flex items-center justify-between gap-space-sm hover:shadow transition-shadow">
<div className="flex items-center gap-space-sm">
<button aria-label="Audio abspielen" className="w-10 h-10 rounded-full bg-surface-container hover:bg-primary-container hover:text-surface-base text-primary-container flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px] ml-0.5">play_arrow</span>
</button>
<div>
<h5 className="font-label-md text-label-md text-text-primary">Sinne &amp; Klänge</h5>
<p className="font-caption text-caption text-text-muted">Geführte Audio-Übung • 15 Min.</p>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px]">graphic_eq</span>
</div>

<a className="mt-space-xs p-space-sm rounded-xl bg-surface-base hover:bg-accent-ochre-light flex items-center justify-between gap-space-sm transition-colors text-text-primary group" href="#">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded-full bg-surface-muted text-text-muted group-hover:text-primary-container flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px]">description</span>
</span>
<div>
<h5 className="font-label-md text-label-md text-text-primary font-semibold">Übungsjournal Woche 3</h5>
<p className="font-caption text-caption text-text-muted">PDF-Begleitheft • 1.4 MB</p>
</div>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors text-[20px]">download</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-muted py-space-xl">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<Link to="/forum" className="block p-space-lg rounded-2xl bg-surface-base shadow-sm hover:shadow-md transition-all duration-300 group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-accent-ochre-light text-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">forum</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-text-primary font-normal group-hover:text-primary-container transition-colors">
                Fragen oder Austausch zu dieser Lektion?
              </h4>
<p className="font-body-sm text-body-sm text-text-muted">
                Teilen Sie Ihre Erfahrungen mit der Sangha und erhalten Sie Unterstützung von erfahrenen Praxisbegleitern.
              </p>
</div>
</div>
<div className="flex items-center gap-1 text-primary-container font-label-md text-label-md shrink-0">
<span className="">Zum Forum wechseln</span>
<span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
</div>
</div>
</Link>
</div>
</section>
</div>
</main>

      <SiteFooter />
    </div>
  );
}
