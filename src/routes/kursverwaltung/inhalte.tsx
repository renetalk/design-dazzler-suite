import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kursverwaltung/inhalte")({
  head: () => ({ meta: [
    { title: "Kursinhalte verwalten | Tergar Campus" },
    { name: "description", content: "Module, Unterkapitel und Medien des Kurses bearbeiten." },
    { property: "og:title", content: "Kursinhalte verwalten | Tergar Campus" },
    { property: "og:description", content: "Module, Unterkapitel und Medien des Kurses bearbeiten." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
    <SiteHeader />
    <main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop w-full py-space-xl">
 Top Meta & Title Bar 
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-2xl">
<div className="space-y-space-xs max-w-3xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-accent-ochre-light text-primary font-eyebrow text-eyebrow tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>Herbst-Kohorte 2024
        </div>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
          Joy of Living - Stufe 1: Den Geist beruhigen</h1>
<p className="font-body-lead text-body-lead text-text-muted">
          Erstelle neue Module, hinterlege Videos, lade geführte Meditationen hoch und pflege Begleitmaterialien für deine Teilnehmenden.
        </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
</div>
</div>
 Quick Metrics (3 Minimal Cards) 
 Core Area A: Edit / Create Lesson Workspace 
<div className="flex flex-col lg:flex-row items-start gap-space-xl mb-space-4xl">
 Left Sidebar: Kursbaum / Modulübersicht 
<aside className="w-full lg:w-80 xl:w-96 shrink-0 bg-surface-subtle rounded-xl p-space-md shadow-sm space-y-space-md border border-border-subtle/50 lg:sticky lg:top-24">
<div className="flex items-center justify-between pb-space-xs border-b border-border-subtle/40">
<div>
<span className="font-eyebrow text-eyebrow text-text-muted uppercase tracking-wider block">Kursstruktur</span>
<h2 className="font-headline-sm text-headline-sm text-text-primary">Alle 6 Module</h2>
</div>
<button type="button" className="inline-flex items-center gap-1 px-space-xs py-1 rounded bg-primary-container text-on-primary font-label-md text-caption hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer" id="btnNewLessonSidebar">
<span className="material-symbols-outlined text-[16px]">add</span>
<span className="">Neu</span>
</button>
</div>
 Compact Tree Navigation 
<nav className="space-y-space-xs font-body-sm text-body-sm" aria-label="Modulnavigation">
 Modul 1 
<div className="p-space-xs rounded-lg bg-surface-base hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-muted text-secondary font-label-md text-caption flex items-center justify-center shrink-0">1</span>
<div className="min-w-0">
<span className="font-body-strong text-body-sm text-text-primary block truncate">Einführung & Was ist Meditation?</span>
<span className="text-caption text-text-muted">2 Unterkapitel • Veröffentlicht</span>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px] shrink-0">chevron_right</span>
</div>
 Modul 2 
<div className="p-space-xs rounded-lg bg-surface-base hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-muted text-secondary font-label-md text-caption flex items-center justify-center shrink-0">2</span>
<div className="min-w-0">
<span className="font-body-strong text-body-sm text-text-primary block truncate">Der Körper als Anker</span>
<span className="text-caption text-text-muted">2 Unterkapitel • Veröffentlicht</span>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px] shrink-0">chevron_right</span>
</div>
 Modul 3: Active & Expanded Accordion 
<div className="rounded-lg bg-accent-ochre-light/40 border border-primary-container/30 overflow-hidden">
<div className="p-space-xs bg-accent-ochre-light flex items-center justify-between gap-space-xs cursor-pointer">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-md text-caption flex items-center justify-center shrink-0">3</span>
<div className="min-w-0">
<span className="font-body-strong text-body-sm text-text-primary block truncate font-bold">Klänge und Atem erforschen</span>
<span className="text-caption text-primary font-bold">3 Lektionen • Im Fokus</span>
</div>
</div>
<span className="material-symbols-outlined text-primary text-[18px] shrink-0">expand_less</span>
</div>
 Indented Subchapters 
<div className="p-space-xs space-y-1 bg-surface-base/80 pl-space-sm border-l-2 border-primary-container ml-space-xs my-1">
 3.1 
<div className="p-space-xs rounded bg-surface-subtle hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="min-w-0">
<div className="flex items-center gap-1">
<span className="font-body-strong text-caption text-text-primary truncate">3.1 Klänge und Atem</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-secondary text-[10px] font-bold">Erledigt</span>
</div>
<span className="text-[11px] text-text-muted block">1 Video (12 Min.)</span>
</div>
</div>
 3.2 Active Item 
<div className="p-space-xs rounded bg-accent-ochre-light border border-primary-container/40 flex items-center justify-between gap-space-xs shadow-sm">
<div className="min-w-0">
<div className="flex items-center gap-1">
<span className="font-body-strong text-caption text-text-primary font-bold truncate">3.2 Den Atem als Anker</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold">Aktiv</span>
</div>
<span className="text-[11px] text-primary font-bold block">1 Video • 2 Audios • Detail geöffnet</span>
</div>
<span className="w-2 h-2 rounded-full bg-primary-container shrink-0"></span>
</div>
 3.3 
<div className="p-space-xs rounded bg-surface-subtle hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="min-w-0">
<div className="flex items-center gap-1">
<span className="font-body-strong text-caption text-text-primary truncate">3.3 Kurze Momente im Alltag</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-muted text-text-muted text-[10px] font-bold">Entwurf</span>
</div>
<span className="text-[11px] text-text-muted block">1 Video (8 Min.)</span>
</div>
</div>
</div>
</div>
 Modul 4 
<div className="p-space-xs rounded-lg bg-surface-base hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-muted text-secondary font-label-md text-caption flex items-center justify-center shrink-0">4</span>
<div className="min-w-0">
<span className="font-body-strong text-body-sm text-text-primary block truncate">Gedanken & Gefühle als Freunde</span>
<span className="text-caption text-primary">Geplant 28. Nov</span>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px] shrink-0">chevron_right</span>
</div>
 Modul 5 
<div className="p-space-xs rounded-lg bg-surface-base hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-muted text-secondary font-label-md text-caption flex items-center justify-center shrink-0">5</span>
<div className="min-w-0">
<span className="font-body-strong text-body-sm text-text-primary block truncate">Gewahrsein vertiefen</span>
<span className="text-caption text-text-muted">Entwurf • 1 Audio</span>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px] shrink-0">chevron_right</span>
</div>
 Modul 6 
<div className="p-space-xs rounded-lg bg-surface-base hover:bg-surface-muted transition-colors cursor-pointer flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-muted text-secondary font-label-md text-caption flex items-center justify-center shrink-0">6</span>
<div className="min-w-0">
<span className="font-body-strong text-body-sm text-text-primary block truncate">Abschluss & Kontinuität</span>
<span className="text-caption text-text-muted">Entwurf • Noch keine Medien</span>
</div>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px] shrink-0">chevron_right</span>
</div>
</nav>
 Quick Add Subchapter button 
<div className="pt-space-xs border-t border-border-subtle/40">
<button type="button" className="w-full py-1.5 rounded-lg bg-surface-base hover:bg-surface-container text-text-primary font-label-md text-body-sm transition-colors border border-border-subtle/60 flex items-center justify-center gap-1 cursor-pointer">
<span className="material-symbols-outlined text-[16px]">add</span>
<span className="">Unterkapitel hinzufügen</span>
</button>
</div>
</aside>
 Right Main Area: Workspace Editor 
<div className="flex-1 min-w-0 space-y-space-lg w-full">
 Editor Header & Breadcrumb 
<div className="space-y-space-md pb-space-md border-b border-border-subtle/50"><div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm"><div className="flex flex-col gap-1"><div className="flex items-center gap-space-xs text-caption font-caption text-text-muted flex-wrap"><span className="font-bold text-primary uppercase tracking-wider">Aktiver Editor-Fokus</span><span className="">›</span><span className="font-body-strong text-body-strong text-text-primary">Modul 3</span><span className="">›</span><span className="px-space-xs py-0.5 rounded bg-accent-ochre-light text-primary font-bold">Unterkapitel 3.2: Den Atem als Anker vertiefen</span></div><div className="flex items-center gap-space-sm pt-1"><span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span><h2 className="font-headline-md text-headline-md text-text-primary">Editor: Unterkapitel 3.2 bearbeiten</h2></div></div></div><div className="p-space-md rounded-xl bg-surface-subtle border border-border-subtle/50 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md"><div className="flex flex-wrap items-center gap-space-md"><div className="h-6 w-px bg-border-subtle/60 hidden sm:block"></div><div className="flex items-center gap-space-xs"><label className="font-label-md text-label-md text-text-primary" htmlFor="moduleReleaseDate">Freischaltung:</label><input className="px-space-sm py-1 rounded-lg bg-surface-base font-body-sm text-body-sm text-text-primary shadow-sm border border-border-subtle/40 focus:outline-none" id="moduleReleaseDate" type="date" defaultValue="2024-11-20"/><span className="text-caption text-text-muted hidden md:inline">(ab 00:01 MEZ)</span></div></div></div></div>
 Editor Form Grid 
<div className="grid grid-cols-1 gap-space-xl">
 Form Fields & Media Sections (xl:col-span-8) 
<div className="space-y-space-xl w-full">
 Basic Info 
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md border border-border-subtle/40">
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleTitle">Titel & Unterkapitelbezeichnung</label>
<input className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none focus:bg-surface-base border border-border-subtle/40" id="moduleTitle" type="text" defaultValue="Unterkapitel 3.2: Den Atem als Anker vertiefen"/>
</div>
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleDescription">Kurzbeschreibung & Lektionsnotizen für Teilnehmende</label>
<textarea className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none focus:bg-surface-base leading-relaxed border border-border-subtle/40" id="moduleDescription" rows="4">In dieser Einheit vertiefen wir das sensorische Gewahrsein anhand äußerer Klänge und des natürlichen Atems. Klänge sind weder störend noch heilig – sie dienen als lebendiger Spiegel des gegenwärtigen Geistes.</textarea>
</div>
</div>
 Video Unterweisung 
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md border border-border-subtle/40">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-text-primary">Video-Unterweisung</h3>
<span className="px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold">Zugeordnet zu Kapitel 3.2</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted">Zugeordnetes Lehrvideo für Unterkapitel 3.2 (Atem erforschen) aus der Tergar-Mediathek.</p>
</div>
</div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-text-primary">Verknüpfte Lehrunterweisung</label>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer">
<span className="material-symbols-outlined text-[18px]">video_library</span>
<span className="">Aus Mediathek wählen</span>
</button>
</div>
</div>
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0 w-full sm:w-auto">
<div className="w-full sm:w-36 h-20 rounded-lg overflow-hidden relative group shrink-0">
<img className="w-full h-full object-cover rounded-lg" data-alt="A serene meditation hall with warm sunlight gently illuminating a wooden meditation seat, a singing bowl on a low altar table, warm ochre cushions, soft cinematic lighting, mindful atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLrDQUJ2S_X_1RBA45-3SHFDO4pUm0jC5wkn6xUSXTxioDEpadGLalcgYOk0MSPgBE1_gOezY4h063tqDEJTXj0WWN_vrq8xfKjBsXWfzhpq5f4mbsVpJ795PM3K1tA1yEdbfdxepgoWuJtf43RZXDLj14oqRyIro2_uDS52o7yu3cyOj7eCA2CuvInv5wG8c18e5iy2L0oFkWObT4F_W8NElpcPTjMSakAF2kD3TDLgP4LwlmJ-dbWw"/>
<div className="absolute inset-0 bg-on-secondary-fixed/30 flex items-center justify-center">
<span className="material-symbols-outlined text-surface-base text-[28px]">play_circle</span>
</div>
</div>
<div className="min-w-0 space-y-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Yongey Mingyur Rinpoche: Freude am Leben Stufe 1 – Den Atem erforschen</span>
<span className="px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold">Aus Mediathek verknüpft</span>
</div>
<div className="font-body-sm text-body-sm text-text-muted">Vorschaubild: Lektion 3 Unterweisung • Deutsche Simultanübersetzung aktiv</div>
<div className="font-caption text-caption text-text-muted">Master HLS • 24 Min. • 1080p • Tergar Archiv ID: #TM-JOL1-M03-DE</div>
</div>
</div>
<button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-body-sm text-body-sm transition-colors shrink-0 self-end sm:self-center cursor-pointer">
<span className="material-symbols-outlined text-[16px]">sync</span>
<span className="">Video austauschen</span>
</button>
</div>
</div>
</div>
 Geführte Meditationen (Audios) 
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md border border-border-subtle/40">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Geführte Meditationen (Audios)</h3>
<p className="font-body-sm text-body-sm text-text-muted">Audio-Dateien für die tägliche Praxis der Teilnehmenden (.mp3, .m4a)</p>
</div>
<button type="button" className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
<span className="">Aus Mediathek wählen</span>
</button>
</div>
<div className="space-y-space-xs">
 Audio 1 
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0 w-full sm:w-auto">
<div className="w-12 h-12 rounded-lg bg-accent-ochre-light text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">headphones</span>
</div>
<div className="min-w-0 space-y-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Geführte Praxis: Gewahrsein auf Klänge & Atem ausrichten</span>
<span className="px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold">Aus Mediathek verknüpft</span>
</div>
<div className="font-body-sm text-body-sm text-text-muted">Anleitung: Yongey Mingyur Rinpoche • Deutsche Übersetzung</div>
<div className="font-caption text-caption text-text-muted">MP3 • 320 kbps • 18 Min. • Tergar Archiv ID: #AUD-JOL1-M03-A1</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-center shrink-0">
<button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer" title="Anhören">
<span className="material-symbols-outlined text-[20px]">play_circle</span>
</button>
<button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-body-sm text-body-sm transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[16px]">sync</span>
<span className="">Audio austauschen</span>
</button>
</div>
</div>
 Audio 2 
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0 w-full sm:w-auto">
<div className="w-12 h-12 rounded-lg bg-surface-muted text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">graphic_eq</span>
</div>
<div className="min-w-0 space-y-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-text-primary truncate">Kurzmeditation: Der Atem als Ruheanker</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container text-secondary font-caption text-caption font-bold">Audio hinterlegt</span>
</div>
<div className="font-body-sm text-body-sm text-text-muted">Alltagstaugliche Kurzpraxis für zwischendurch</div>
<div className="font-caption text-caption text-text-muted">MP3 • 320 kbps • 9 Min. • Tergar Archiv ID: #AUD-JOL1-M03-A2</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-center shrink-0">
<button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer" title="Anhören">
<span className="material-symbols-outlined text-[20px]">play_circle</span>
</button>
<button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-body-sm text-body-sm transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[16px]">sync</span>
<span className="">Audio austauschen</span>
</button>
</div>
</div>
</div>
</div>
 Begleitmaterialien (PDF-Uploads) 
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md border border-border-subtle/40">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Begleitmaterialien (PDF-Uploads)</h3>
<p className="font-body-sm text-body-sm text-text-muted">Handouts, Kontemplationsbögen und Übungsblätter</p>
</div>
<button type="button" className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
<span className="">Aus Mediathek wählen</span>
</button>
</div>
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[22px]">description</span>
</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-text-primary truncate">Übungsjournal Woche 3 – Atem als Anker.pdf</div>
<div className="font-caption text-caption text-text-muted">1.4 MB • Für Teilnehmende sichtbar</div>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container font-caption text-caption text-secondary hidden sm:inline-block">Sichtbar</span>
<button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors" title="Vorschau">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-2 rounded-lg text-text-muted hover:text-error hover:bg-surface-muted transition-colors" title="Entfernen">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
</div>
 Publishing Settings Sidebar Column (xl:col-span-4) 
</div>
</div>
</div>
 Core Area B: Overview of all Modules in Course 
</div>

</div></main>
    <SiteFooter />
  </div>;
}
