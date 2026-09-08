import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kursverwaltung/")({
  head: () => ({
    meta: [
      { title: "Kursübersicht & Verwaltung | Tergar Campus" },
      { name: "description", content: "Kohorten, Teilnehmende und Kursfortschritt im Überblick verwalten." },
      { property: "og:title", content: "Kursübersicht & Verwaltung | Tergar Campus" },
      { property: "og:description", content: "Kohorten, Teilnehmende und Kursfortschritt im Überblick verwalten." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kursverwaltung,
});

function Kursverwaltung() {
  return (
    <div className="bg-surface-subtle font-body-md text-body-md text-on-surface antialiased">
      <SiteHeader />
<main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#eee8e2]">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="size-2 rounded-full bg-[#d9822b]"></span>
<span className="text-xs uppercase tracking-wider font-bold text-[#a0632a]">TRAINER:INNEN-BEREICH • KURSÜBERSICHT</span>
</div>
<h1 className="font-serif text-3xl sm:text-4xl text-[#1f2937] font-semibold tracking-tight">Kursübersicht &amp; Verwaltung</h1>
<p className="text-gray-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
Hier findest du alle angelegten Kurse auf dem Tergar Campus. Verwalte Inhalte, Kohorten, Freischaltzeiten und Teilnehmerzugänge.
</p>
</div>
<button className="inline-flex items-center justify-center gap-2 bg-[#d9822b] hover:bg-[#c27220] text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all shrink-0">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="">+ Neuen Kurs anlegen</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
<div className="border border-[#e5e7eb] rounded-xl bg-white p-5 shadow-sm hover:border-[#dac2b1] transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-500">Angelegte Kurse</p>
<span className="material-symbols-outlined text-[#d9822b] text-[20px]">school</span>
</div>
<p className="text-2xl font-bold text-[#1f2937] mt-2 font-serif">6 Kurse</p>
<p className="text-xs font-semibold text-emerald-700 mt-2 bg-emerald-50 px-2 py-0.5 rounded inline-block">
+1 Neu / 4 Aktiv • 1 Vorb. • 1 Archiv
</p>
</div>
<div className="border border-[#e5e7eb] rounded-xl bg-white p-5 shadow-sm hover:border-[#dac2b1] transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-500">Aktive Teilnehmer:innen</p>
<span className="material-symbols-outlined text-[#d9822b] text-[20px]">group</span>
</div>
<p className="text-2xl font-bold text-[#1f2937] mt-2 font-serif">412</p>
<p className="text-xs text-gray-600 mt-2">
in laufenden Kohorten (<span className="text-emerald-600 font-semibold">+18% MTD</span>)
</p>
</div>
<div className="border border-[#e5e7eb] rounded-xl bg-white p-5 shadow-sm hover:border-[#dac2b1] transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-500">Nächste Freischaltung</p>
<span className="material-symbols-outlined text-[#d9822b] text-[20px]">schedule</span>
</div>
<p className="text-2xl font-bold text-[#1f2937] mt-2 font-serif">In 4 Tagen</p>
<p className="text-xs text-gray-600 mt-2">
Modul 4 (Freude am Leben 1)
</p>
</div>
<div className="border border-[#e5e7eb] rounded-xl bg-white p-5 shadow-sm hover:border-[#dac2b1] transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-500">Offene Trainer-Fragen</p>
<span className="material-symbols-outlined text-[#d9822b] text-[20px]">forum</span>
</div>
<p className="text-2xl font-bold text-[#1f2937] mt-2 font-serif">3 Fragen</p>
<a className="text-xs font-semibold text-[#b25e16] hover:text-[#8f4e00] mt-2 inline-flex items-center gap-1 transition-colors" href="/kursverwaltung/inhalte">
Im Forum beantworten →
</a>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
<button className="bg-[#fef9ee] text-[#b25e16] border border-[#faecd2] font-semibold text-sm px-3.5 py-1.5 rounded-lg shadow-sm">
Alle Kurse (6)
</button>
<button className="bg-white hover:bg-gray-50 text-gray-600 border border-[#e5e7eb] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors">
Aktiv / Laufend (4)
</button>
<button className="bg-white hover:bg-gray-50 text-gray-600 border border-[#e5e7eb] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors">
In Vorbereitung (1)
</button>
<button className="bg-white hover:bg-gray-50 text-gray-600 border border-[#e5e7eb] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors">
Archiviert (1)
</button>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative flex-grow md:w-64">
<span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<span className="material-symbols-outlined text-[18px]">search</span>
</span>
<input className="w-full bg-white border border-[#e5e7eb] rounded-lg py-1.5 pl-9 pr-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d9822b] focus:ring-1 focus:ring-[#d9822b]" placeholder="Kurs oder Kohorte suchen..." type="text" />
</div>
<div className="relative shrink-0">
<select className="bg-white border border-[#e5e7eb] rounded-lg text-sm text-gray-700 py-1.5 pl-3 pr-8 focus:outline-none focus:border-[#d9822b] focus:ring-1 focus:ring-[#d9822b] cursor-pointer appearance-none">
<option>Neueste zuerst</option>
<option>Alphabetisch</option>
<option>Teilnehmerzahl</option>
</select>
<span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<span className="material-symbols-outlined text-sm">expand_more</span>
</span>
</div>
</div>
</div>
<div className="mt-4 bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm divide-y divide-[#f0ece7]">
<article className="p-5 sm:p-6 hover:bg-[#fffdf9] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5">
<div className="flex items-start gap-4">
<div className="size-12 rounded-xl bg-[#fff8eb] border border-[#faecd2] flex items-center justify-center text-[#d9822b] shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[26px]">self_improvement</span>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-2.5">
<h3 className="font-serif font-semibold text-lg sm:text-xl text-[#1f2937]">Freude am Leben – Stufe 1: Den Geist beruhigen</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
<span className="size-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
Aktiv • Kohorte läuft
</span>
</div>
<p className="text-xs sm:text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">event</span>
Herbst-Kohorte 2024 (15. Okt – 15. Dez 2024)
</span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">person</span>
Yongey Mingyur Rinpoche &amp; Thomas Berger
</span>
</p>
<div className="flex items-center gap-3 pt-1 text-xs text-gray-600 font-medium">
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">layers</span>
6 Module (3 veröffentlicht, 1 geplant)
</span>
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">group</span>
148 Teilnehmende
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center shrink-0">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d9822b] text-white text-sm font-semibold hover:bg-[#c27220] transition-colors shadow-sm" href="/kursverwaltung/inhalte">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span className="">Inhalte verwalten</span>
</a>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Teilnehmende">
<span className="material-symbols-outlined text-[20px]">people</span>
</button>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Einstellungen">
<span className="material-symbols-outlined text-[20px]">settings</span>
</button>
</div>
</article>
<article className="p-5 sm:p-6 hover:bg-[#fffdf9] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5">
<div className="flex items-start gap-4">
<div className="size-12 rounded-xl bg-[#faeae1] border border-[#f0c5b0] flex items-center justify-center text-[#a44226] shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[26px]">favorite</span>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-2.5">
<h3 className="font-serif font-semibold text-lg sm:text-xl text-[#1f2937]">Freude am Leben – Stufe 2: Das Herz öffnen</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
<span className="size-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
Aktiv • Kohorte läuft
</span>
</div>
<p className="text-xs sm:text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">event</span>
Winter-Kohorte 2024/25 (01. Nov 2024 – 15. Jan 2025)
</span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">person</span>
Yongey Mingyur Rinpoche &amp; Miriam Koch
</span>
</p>
<div className="flex items-center gap-3 pt-1 text-xs text-gray-600 font-medium">
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">layers</span>
6 Module (2 veröffentlicht)
</span>
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">group</span>
96 Teilnehmende
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center shrink-0">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d9822b] text-white text-sm font-semibold hover:bg-[#c27220] transition-colors shadow-sm" href="/kursverwaltung/inhalte">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span className="">Inhalte verwalten</span>
</a>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Optionen">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</article>
<article className="p-5 sm:p-6 hover:bg-[#fffdf9] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5">
<div className="flex items-start gap-4">
<div className="size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[26px]">all_inclusive</span>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-2.5">
<h3 className="font-serif font-semibold text-lg sm:text-xl text-[#1f2937]">Anytime Anywhere Meditation (AAM) – 5-Wochen-Kurs</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
<span className="size-1.5 rounded-full bg-sky-600"></span>
Dauerhaft aktiv
</span>
</div>
<p className="text-xs sm:text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">schedule</span>
Fortlaufend / Selbstlern-Kohorte
</span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">school</span>
Tergar Lehrteam
</span>
</p>
<div className="flex items-center gap-3 pt-1 text-xs text-gray-600 font-medium">
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">layers</span>
5 Module (5 freigeschaltet)
</span>
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">group</span>
114 Teilnehmende
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center shrink-0">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d9822b] text-white text-sm font-semibold hover:bg-[#c27220] transition-colors shadow-sm" href="/kursverwaltung/inhalte">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span className="">Inhalte verwalten</span>
</a>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Optionen">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</article>
<article className="p-5 sm:p-6 hover:bg-[#fffdf9] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5 bg-[#faf8f5]/40">
<div className="flex items-start gap-4">
<div className="size-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[26px]">psychology</span>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-2.5">
<h3 className="font-serif font-semibold text-lg sm:text-xl text-[#1f2937]">Freude am Leben – Stufe 3: Weisheit erwecken</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
<span className="size-1.5 rounded-full bg-amber-600"></span>
In Vorbereitung
</span>
</div>
<p className="text-xs sm:text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">event</span>
Frühjahrs-Kohorte 2025 (Start: 15. Feb 2025)
</span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">person</span>
Yongey Mingyur Rinpoche &amp; Dr. Tenzin Wangyal
</span>
</p>
<div className="flex items-center gap-3 pt-1 text-xs text-gray-600 font-medium">
<span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-md border border-amber-200">
<span className="material-symbols-outlined text-[15px] text-amber-700">drafts</span>
6 Module (Entwurf, 0 freigeschaltet)
</span>
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-gray-500">how_to_reg</span>
38 Voranmeldungen
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center shrink-0">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-semibold border border-[#e5e7eb] transition-all" href="/kursverwaltung/inhalte">
<span className="material-symbols-outlined text-[18px]">draw</span>
<span className="">Inhalte bearbeiten</span>
</a>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Optionen">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</article>
<article className="p-5 sm:p-6 hover:bg-[#fffdf9] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5">
<div className="flex items-start gap-4">
<div className="size-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[26px]">spa</span>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-2.5">
<h3 className="font-serif font-semibold text-lg sm:text-xl text-[#1f2937]">Schnupperkurs: Einführung in die Praxis</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
<span className="size-1.5 rounded-full bg-sky-600"></span>
Dauerhaft aktiv
</span>
</div>
<p className="text-xs sm:text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">mail</span>
Kostenlos / Automatisch
</span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">apartment</span>
Tergar Deutschland
</span>
</p>
<div className="flex items-center gap-3 pt-1 text-xs text-gray-600 font-medium">
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">play_lesson</span>
3 Lektionen
</span>
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-[#b25e16]">group</span>
820 registriert
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center shrink-0">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d9822b] text-white text-sm font-semibold hover:bg-[#c27220] transition-colors shadow-sm" href="/kursverwaltung/inhalte">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span className="">Inhalte verwalten</span>
</a>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Optionen">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</article>
<article className="p-5 sm:p-6 hover:bg-[#fffdf9] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5 opacity-80">
<div className="flex items-start gap-4">
<div className="size-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[26px]">inventory_2</span>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-2.5">
<h3 className="font-serif font-semibold text-lg sm:text-xl text-[#1f2937]">Freude am Leben – Stufe 1 (Sommer-Kohorte 2024)</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-300">
<span className="size-1.5 rounded-full bg-gray-500"></span>
Archiviert
</span>
</div>
<p className="text-xs sm:text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">event_busy</span>
Sommer 2024 (Beendet am 30. Sep 2024)
</span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-gray-400">person</span>
Thomas Berger
</span>
</p>
<div className="flex items-center gap-3 pt-1 text-xs text-gray-600 font-medium">
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-gray-500">check_circle</span>
6 Module (Vollständig)
</span>
<span className="inline-flex items-center gap-1 bg-[#f8f6f3] px-2.5 py-1 rounded-md border border-[#eee8e2]">
<span className="material-symbols-outlined text-[15px] text-gray-500">school</span>
132 Absolvent:innen
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center shrink-0">
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium border border-[#e5e7eb] hover:bg-gray-200 transition-colors">
<span className="material-symbols-outlined text-[18px]">visibility</span>
<span className="">Details ansehen</span>
</button>
<button className="p-2 rounded-lg border border-[#e5e7eb] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Archiv-Optionen">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</article>
</div>
<div className="mt-8 rounded-xl border border-[#faecd2] bg-[#fef9ee] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3.5">
<span className="material-symbols-outlined text-[#d9822b] text-[24px] mt-0.5">info</span>
<div>
<h4 className="text-sm font-bold text-gray-900">Kohorten synchronisieren &amp; Benachrichtigungen</h4>
<p className="text-xs sm:text-sm text-gray-700 mt-0.5 leading-relaxed">
Teilnehmer:innen erhalten 24 Stunden vor der Veröffentlichung von neuem Modulmaterial automatisch eine E-Mail-Erinnerung.
</p>
</div>
</div>
<a className="shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#b25e16] hover:text-[#8f4e00] transition-colors" href="/kursverwaltung/inhalte">
<span className="">Zur Mediathek (Videos &amp; Audios)</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</main>
      <SiteFooter />
    </div>
  );
}
