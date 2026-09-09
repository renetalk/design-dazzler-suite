import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/mediathek")({
  head: () => ({
    meta: [
      { title: "Mediathek | Tergar Campus" },
      { name: "description", content: "Zentrale Ablage für Lehrvideos, geführte Audios und Transkripte." },
      { property: "og:title", content: "Mediathek | Tergar Campus" },
      { property: "og:description", content: "Zentrale Ablage für Lehrvideos, geführte Audios und Transkripte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page7,
});

function Page7() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
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

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 text-nowrap">
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-accent-ochre-light text-primary font-semibold" type="button">
          Alle Medien (148)
        </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">
          Videos &amp; Teachings (52)
        </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">
          Geführte Audios (64)
        </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">
          PDFs &amp; Praxishefte (32)
        </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-secondary hover:bg-surface-muted hover:text-text-primary transition-colors" type="button">
          Untertitel &amp; Transkripte (.vtt)
        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm pt-space-xs">
<div className="md:col-span-6 relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-muted rounded-lg font-body-sm text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:bg-surface-base focus:ring-1 focus:ring-primary-container transition-all" placeholder="Medien nach Titel, Thema oder Sprecher:in durchsuchen..." type="text"/>
</div>
<div className="md:col-span-3">
<div className="relative">
<select className="w-full appearance-none pl-3.5 pr-9 py-2 bg-surface-muted rounded-lg font-body-sm text-body-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>Alle Lehrenden (Mingyur Rinpoche, Edwin Kelley...)</option>
<option>Yongey Mingyur Rinpoche</option>
<option>Edwin Kelley</option>
<option>Miriam Koch</option>
<option>Thomas Berger</option>
<option>Tergar Lehrteam (Allgemein)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted text-[18px] pointer-events-none">expand_more</span>
</div>
</div>
<div className="md:col-span-3">
<div className="relative">
<select className="w-full appearance-none pl-3.5 pr-9 py-2 bg-surface-muted rounded-lg font-body-sm text-body-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>Sortierung: Neueste zuerst</option>
<option>Sortierung: Meistverwendet</option>
<option>Sortierung: Titel A–Z</option>
<option>Sortierung: Dateigröße</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted text-[18px] pointer-events-none">swap_vert</span>
</div>
</div>
</div>
</div>



<div className="mb-space-3xl">
<div className="flex items-center justify-between mb-space-md">
<h2 className="font-headline-sm text-headline-sm text-text-primary font-normal">Alle Medien im Überblick</h2>
<span className="font-body-sm text-body-sm text-secondary">Zeige 5 von 148 Einträgen</span>
</div>
<div className="space-y-space-xs">

<div className="bg-surface-base p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<button className="w-11 h-11 shrink-0 rounded-full bg-accent-ochre-light text-primary hover:bg-primary-container hover:text-on-primary transition-colors flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[24px]">play_arrow</span>
</button>
<div className="min-w-0 space-y-0.5">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Körper-Gewahrsein – 15 Min. geführte Praxis</span>
<span className="px-2 py-0.5 rounded-full bg-surface-muted text-secondary font-caption text-caption">Audio MP3 • 320 kbps</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">
                Sprecherin: Miriam Koch • Dauer: 15:20 Min. • Eingebunden in: <span className="text-text-primary font-medium">Freude am Leben 1, Modul 3</span>
</p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">

<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Herunterladen" type="button">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Details ansehen" type="button">
<span className="material-symbols-outlined text-[20px]">info</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Weitere Optionen" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>

<div className="bg-surface-base p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<button className="w-11 h-11 shrink-0 rounded-full bg-accent-ochre-light text-primary hover:bg-primary-container hover:text-on-primary transition-colors flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[24px]">play_arrow</span>
</button>
<div className="min-w-0 space-y-0.5">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Atem als Anker – 10 Min. Kurzpraxis</span>
<span className="px-2 py-0.5 rounded-full bg-surface-muted text-secondary font-caption text-caption">Audio MP3 • 14.1 MB</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">
                Sprecher: Thomas Berger • Dauer: 10:05 Min. • Eingebunden in: <span className="text-text-primary font-medium">Anytime Anywhere, Tägliche Impulse</span>
</p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">

<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Herunterladen" type="button">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Details ansehen" type="button">
<span className="material-symbols-outlined text-[20px]">info</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Weitere Optionen" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>

<div className="bg-surface-base p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-11 h-11 shrink-0 rounded-full bg-surface-container-high text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
</div>
<div className="min-w-0 space-y-0.5">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Übungsjournal &amp; Reflexionsfragen Woche 1–4</span>
<span className="px-2 py-0.5 rounded-full bg-surface-muted text-secondary font-caption text-caption">PDF • 4.2 MB</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-low text-secondary font-caption text-caption">Barrierefrei nach PDF/UA</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">
                Format: DIN A4 Druckversion • Eingebunden in: <span className="text-text-primary font-medium">Freude am Leben 1, Begleitmaterial</span>
</p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">

<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Herunterladen" type="button">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Details ansehen" type="button">
<span className="material-symbols-outlined text-[20px]">info</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Weitere Optionen" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>

<div className="bg-surface-base rounded-xl shadow-md ring-2 ring-primary-container overflow-hidden transition-all"><div className="p-space-md bg-accent-ochre-light/40 flex flex-col md:flex-row md:items-center justify-between gap-space-md"><div className="flex items-center gap-space-md min-w-0"><div className="w-11 h-11 shrink-0 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-[22px]">videocam</span></div><div className="min-w-0 space-y-0.5"><div className="flex items-center gap-2 flex-wrap"><span className="font-label-md text-label-md text-primary font-bold truncate">Umgang mit schwierigen Emotionen und Gedanken</span><span className="px-2 py-0.5 rounded-full bg-surface-base text-secondary font-caption text-caption ring-1 ring-border-subtle">Video 1080p • 34:10 Min.</span></div><p className="font-body-sm text-body-sm text-secondary truncate">Lehrender: <span className="text-text-primary font-semibold">Yongey Mingyur Rinpoche</span> • <span className="text-primary font-medium">4 Kurse verknüpft</span> • Untertitel: DE, EN, ES, FR</p></div></div><div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto"><button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Herunterladen" type="button"><span className="material-symbols-outlined text-[20px]">download</span></button><button className="p-1.5 rounded-lg bg-accent-ochre-light text-primary hover:bg-surface-muted transition-colors" title="Details einklappen" type="button"><span className="material-symbols-outlined text-[20px]">expand_less</span></button><button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Weitere Optionen" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></div><div className="p-space-md border-t border-subtle bg-surface-base grid grid-cols-1 lg:grid-cols-12 gap-space-md"><div className="lg:col-span-6 relative bg-footer-surface rounded-lg flex flex-col justify-between min-h-[260px] overflow-hidden group"><img className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out" alt="Mingyur Rinpoche Teaching" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHG45-AXdKFNHLJ21_X56I53kbixQ6CgjoJ4_3U5jsqa_3nOY5wuNTC31bLf9g0-OCXOL8vNTXXSMpiVLlPH6Fp2yv4XlkA0Pc-CA8-V3LvOslBhno6hTUdhGTP2uJS303PV4HTjtUzatYRWdu8rj_9H6vvFEjpaD3127fs6QKLqEEB-vzImxKTXn6-liF9AuMMAxxmGq6WE6mNa3FekOsAxQIsCHIeB4rVTHIYZTiOu7Wz3dEuyyMYQ"/><div className="absolute inset-0 bg-gradient-to-t from-footer-surface via-footer-surface/30 to-transparent"></div><div className="relative z-10 p-space-sm flex items-center justify-between"><span className="px-2.5 py-1 rounded-md bg-surface-base/90 backdrop-blur-sm text-text-primary font-caption text-caption font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Full HD • 1080p</span><span className="px-2.5 py-1 rounded-md bg-footer-surface/80 backdrop-blur-sm text-surface font-caption text-caption">34:10 Min.</span></div><div className="relative z-10 self-center my-auto"><button className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg hover:scale-110 hover:bg-accent-ochre-hover transition-all" type="button"><span className="material-symbols-outlined text-[32px] ml-1">play_arrow</span></button></div><div className="relative z-10 p-space-sm flex items-center justify-between text-surface font-caption text-caption"><span className="truncate max-w-xs">Medium ID: MED-8842-TRG</span><span className="text-primary-fixed">Audio &amp; Video synchron</span></div></div><div className="lg:col-span-6 flex flex-col justify-between space-y-space-sm"><div className="space-y-space-xs"><div><div className="flex items-center gap-space-xs mb-1"><span className="px-2 py-0.5 rounded-full bg-accent-ochre-light text-primary font-eyebrow text-eyebrow font-bold uppercase">Teaching-Video</span><span className="text-text-muted font-caption text-caption">• Zuletzt aktualisiert: 14. Okt 2024</span></div><h3 className="font-headline-sm text-headline-sm text-text-primary font-normal">Umgang mit schwierigen Emotionen und Gedanken</h3><p className="font-body-sm text-body-sm text-secondary mt-0.5">Lehrender: <span className="text-text-primary font-semibold">Yongey Mingyur Rinpoche</span> • Hauptthema: Gewahrsein &amp; Transformation von Emotionen</p></div><div className="space-y-space-xs pt-1"><span className="font-eyebrow text-eyebrow text-text-muted uppercase tracking-wider block">Eingebunden in 4 Kursmodulen:</span><div className="flex flex-wrap gap-space-xs"><span className="px-2 py-0.5 rounded-lg bg-surface-muted text-text-primary font-body-sm text-body-sm flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">school</span>Freude am Leben 1 – Modul 2</span><span className="px-2 py-0.5 rounded-lg bg-surface-muted text-text-primary font-body-sm text-body-sm flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">school</span>Freude am Leben 2</span><span className="px-2 py-0.5 rounded-lg bg-surface-muted text-text-primary font-body-sm text-body-sm flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">school</span>Schnupperkurs</span><span className="px-2 py-0.5 rounded-lg bg-surface-muted text-text-primary font-body-sm text-body-sm flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">school</span>Anytime Anywhere</span></div></div><div className="space-y-space-xs pt-1"><span className="font-eyebrow text-eyebrow text-text-muted uppercase tracking-wider block">Sprachspuren &amp; Untertitel:</span><div className="grid grid-cols-3 gap-space-xs"><div className="p-2 rounded-lg bg-surface-muted flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span><div><div className="font-label-md text-label-md text-text-primary leading-tight">DE</div><div className="font-caption text-caption text-secondary">Simultan aktiv</div></div></div><div className="p-2 rounded-lg bg-surface-muted flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span><div><div className="font-label-md text-label-md text-text-primary leading-tight">EN</div><div className="font-caption text-caption text-secondary">Originalton</div></div></div><div className="p-2 rounded-lg bg-surface-muted flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary">subtitles</span><div><div className="font-label-md text-label-md text-text-primary leading-tight">FR</div><div className="font-caption text-caption text-secondary">.vtt hinterlegt</div></div></div></div></div></div><div className="pt-space-sm flex flex-wrap items-center gap-space-xs border-t border-subtle"><button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors flex items-center gap-1.5 shadow-sm" type="button"><span className="material-symbols-outlined text-[18px]">add_link</span><span className="">In Modul einfügen</span></button><button className="px-space-md py-2 rounded-lg bg-surface-muted text-text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1.5" type="button"><span className="material-symbols-outlined text-[18px]">play_circle</span><span className="">Vorschau abspielen</span></button><button className="px-space-md py-2 rounded-lg bg-surface-muted text-text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1.5" type="button"><span className="material-symbols-outlined text-[18px]">edit_note</span><span className="">Untertitel bearbeiten</span></button><button className="p-2 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Download-Rechte verwalten" type="button"><span className="material-symbols-outlined text-[20px]">lock_open</span></button></div></div></div></div>

<div className="bg-surface-base p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<button className="w-11 h-11 shrink-0 rounded-full bg-accent-ochre-light text-primary hover:bg-primary-container hover:text-on-primary transition-colors flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[24px]">play_arrow</span>
</button>
<div className="min-w-0 space-y-0.5">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Klangmeditation im Alltag</span>
<span className="px-2 py-0.5 rounded-full bg-surface-muted text-secondary font-caption text-caption">Audio MP3 • 12:00 Min.</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">
                Lehrende: Edwin Kelley • <span className="text-primary font-medium">8 Kurse verknüpft</span> • Beliebteste geführte Meditation
              </p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">

<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Herunterladen" type="button">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Details ansehen" type="button">
<span className="material-symbols-outlined text-[20px]">info</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" title="Weitere Optionen" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-md text-secondary">
<span className="font-caption text-caption">Seite 1 von 30</span>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-lg bg-surface-base shadow-sm hover:bg-surface-muted disabled:opacity-40 transition-colors" disabled="" type="button">
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
    </div>
  );
}
