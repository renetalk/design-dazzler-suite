import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kursverwaltung/inhalte")({
  head: () => ({
    meta: [
      { title: "Kursinhalte & Lektionen verwalten | Tergar Campus" },
      { name: "description", content: "Module, Lektionen und Materialien des Kurses bearbeiten." },
      { property: "og:title", content: "Kursinhalte & Lektionen verwalten | Tergar Campus" },
      { property: "og:description", content: "Module, Lektionen und Materialien des Kurses bearbeiten." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kursinhalte,
});

function Kursinhalte() {
  return (
    <div className="bg-surface-subtle font-body-md text-body-md text-on-surface antialiased">
      <SiteHeader />
<main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop w-full py-space-xl">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-2xl">
<div className="space-y-space-xs max-w-3xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-accent-ochre-light text-primary font-eyebrow text-eyebrow tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
Trainer:innen-Bereich • Herbst-Kohorte 2024
</div>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
Kursinhalte &amp; Lektionen verwalten
</h1>
<p className="font-body-lead text-body-lead text-text-muted">
Erstelle neue Lektionen, hinterlege Videos, lade geführte Meditationen hoch und pflege Begleitmaterialien für deine Teilnehmenden.
</p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer" id="btnNewLesson">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="">+ Neue Lektion anlegen</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-3xl">
</div>
<div className="mb-space-4xl">
<div className="flex items-center justify-between pb-space-sm mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<h2 className="font-headline-md text-headline-md text-text-primary">Aktive Bearbeitung: Modul 3</h2>
</div>
<span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-text-muted">
<span className="material-symbols-outlined text-[16px] text-primary">cloud_done</span> Automatisch gespeichert um 10:42 Uhr
</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
<div className="lg:col-span-8 space-y-space-xl">
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleTitle">Titel &amp; Modulbezeichnung</label>
<input className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none focus:bg-surface-base" id="moduleTitle" type="text" value="Modul 3: Klänge und Atem erforschen" />
</div>
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleDescription">Kurzbeschreibung &amp; Lektionsnotizen für Teilnehmende</label>
<textarea className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none focus:bg-surface-base leading-relaxed" id="moduleDescription" rows={4} defaultValue={"In dieser Einheit vertiefen wir das sensorische Gewahrsein anhand äußerer Klänge und des natürlichen Atems. Klänge sind weder störend noch heilig – sie dienen als lebendiger Spiegel des gegenwärtigen Geistes."}></textarea>
</div>
</div>
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Video-Unterweisung</h3>
<p className="font-body-sm text-body-sm text-text-muted">Hinterlege den geschützten HLS- oder Vimeo-Stream der Lehrunterweisung.</p>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container font-caption text-caption text-secondary">
<span className="material-symbols-outlined text-[14px]">videocam</span> 1080p HD bereit (24:15 Min)
</span>
</div>
<div className="space-y-space-xs">
<label className="block font-label-md text-label-md text-text-primary" htmlFor="videoStreamUrl">Video-Quelle / Stream URL</label>
<div className="flex items-center gap-space-sm">
<input className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none" id="videoStreamUrl" type="text" value="https://stream.tergar.de/cdn/jofl_m3_sounds_breath_master.m3u8" />
<button className="px-space-md py-2.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-label-md text-label-md transition-colors shrink-0">Prüfen</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md p-space-md rounded-lg bg-surface-base shadow-sm items-center">
<div className="sm:col-span-1 rounded-lg overflow-hidden relative group">
<img className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLrDQUJ2S_X_1RBA45-3SHFDO4pUm0jC5wkn6xUSXTxioDEpadGLalcgYOk0MSPgBE1_gOezY4h063tqDEJTXj0WWN_vrq8xfKjBsXWfzhpq5f4mbsVpJ795PM3K1tA1yEdbfdxepgoWuJtf43RZXDLj14oqRyIro2_uDS52o7yu3cyOj7eCA2CuvInv5wG8c18e5iy2L0oFkWObT4F_W8NElpcPTjMSakAF2kD3TDLgP4LwlmJ-dbWw" />
<div className="absolute inset-0 bg-on-secondary-fixed/30 flex items-center justify-center">
<span className="material-symbols-outlined text-surface-base text-[28px]">play_circle</span>
</div>
</div>
<div className="sm:col-span-2 space-y-1">
<div className="font-label-md text-label-md text-text-primary">Vorschaubild: Lektion 3 Unterweisung</div>
<div className="font-body-sm text-body-sm text-text-muted">Yongey Mingyur Rinpoche • Deutsche Simultanübersetzung aktiv</div>
<div className="flex items-center gap-space-xs pt-1">
<span className="material-symbols-outlined text-[16px] text-primary">closed_caption</span>
<span className="font-caption text-caption text-secondary">joy_of_living_m3_de.vtt (hochgeladen)</span>
</div>
</div>
</div>
<div className="p-space-md rounded-lg bg-surface-muted flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">subtitles</span>
<div>
<div className="font-label-md text-label-md text-text-primary">Untertitel verwalten (.vtt / .srt)</div>
<div className="font-body-sm text-body-sm text-text-muted">Datei hierhin ziehen oder durchsuchen</div>
</div>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-base hover:bg-surface-subtle text-text-primary font-body-sm text-body-sm shadow-sm cursor-pointer transition-colors">
Neue Datei wählen
</button>
</div>
</div>
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Geführte Meditationen (Audios)</h3>
<p className="font-body-sm text-body-sm text-text-muted">Audio-Dateien für die tägliche Praxis der Teilnehmenden (.mp3, .m4a)</p>
</div>
<span className="font-caption text-caption text-text-muted">2 Titel zugeordnet</span>
</div>
<div className="p-space-lg rounded-xl bg-surface-base shadow-sm flex flex-col items-center justify-center text-center space-y-space-xs">
<div className="w-12 h-12 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">mic</span>
</div>
<div className="font-label-md text-label-md text-text-primary">Audiodatei zur Lektion hinzufügen</div>
<p className="font-body-sm text-body-sm text-text-muted max-w-sm">Ziehe eine neue Meditations-Audiodatei per Drag &amp; Drop hierher oder klicke zum Auswählen.</p>
<button className="mt-space-xs px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container font-label-md text-label-md text-text-primary transition-colors cursor-pointer">
Audio auswählen
</button>
</div>
<div className="space-y-space-xs">
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<button aria-label="Audio abspielen" className="w-10 h-10 rounded-full bg-surface-muted hover:bg-accent-ochre-light hover:text-primary flex items-center justify-center shrink-0 transition-colors">
<span className="material-symbols-outlined text-[20px]">play_arrow</span>
</button>
<div className="min-w-0">
<div className="font-label-md text-label-md text-text-primary truncate">Klänge als Stütze • 12 Min. Praxis</div>
<div className="font-caption text-caption text-text-muted">klaenge_gewahrsein_12min.mp3 • 16.8 MB • Audio 320kbps</div>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors" title="Ersetzen">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-2 rounded-lg text-text-muted hover:text-error hover:bg-surface-muted transition-colors" title="Löschen">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<button aria-label="Audio abspielen" className="w-10 h-10 rounded-full bg-surface-muted hover:bg-accent-ochre-light hover:text-primary flex items-center justify-center shrink-0 transition-colors">
<span className="material-symbols-outlined text-[20px]">play_arrow</span>
</button>
<div className="min-w-0">
<div className="font-label-md text-label-md text-text-primary truncate">Atem-Gewahrsein • 10 Min.</div>
<div className="font-caption text-caption text-text-muted">atem_gewahrsein_10min.mp3 • 14.1 MB • Audio 320kbps</div>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors" title="Ersetzen">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-2 rounded-lg text-text-muted hover:text-error hover:bg-surface-muted transition-colors" title="Löschen">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
</div>
<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Begleitmaterialien (PDF-Uploads)</h3>
<p className="font-body-sm text-body-sm text-text-muted">Handouts, Kontemplationsbögen und Übungsblätter</p>
</div>
<button className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-accent-ochre-hover cursor-pointer">
<span className="material-symbols-outlined text-[18px]">upload_file</span> + PDF hochladen
</button>
</div>
<div className="p-space-md rounded-lg bg-surface-base shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[22px]">description</span>
</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-text-primary truncate">Übungsjournal Woche 3.pdf</div>
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
<div className="lg:col-span-4 space-y-space-lg">
<div className="bg-surface-subtle p-space-lg rounded-xl shadow-sm space-y-space-md sticky top-28">
<h3 className="font-headline-sm text-headline-sm text-text-primary">Veröffentlichung</h3>
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleStatusSelect">Status dieser Lektion</label>
<select defaultValue="published" className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none" id="moduleStatusSelect">
<option value="published">Veröffentlicht (Aktiv)</option>
<option value="scheduled">Geplant (Automatischer Termin)</option>
<option value="draft">Entwurf (Nur Trainer:innen)</option>
</select>
</div>
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleReleaseDate">Freischalt-Datum</label>
<div className="relative">
<input className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none" id="moduleReleaseDate" type="date" value="2024-11-20" />
</div>
<p className="font-caption text-caption text-text-muted mt-1">Gültig ab 00:01 Uhr MEZ des gewählten Tages.</p>
</div>
<div className="space-y-space-sm pt-space-xs">
<span className="block font-label-md text-label-md text-text-primary">Sichtbarkeit &amp; Benachrichtigung</span>
<label className="flex items-start gap-space-xs cursor-pointer select-none">
<input defaultChecked className="mt-1 rounded text-primary focus:ring-0 accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-text-primary">Im Forum unter „Diskussionen zu Modul 3“ automatisch verlinken</span>
</label>
<label className="flex items-start gap-space-xs cursor-pointer select-none">
<input className="mt-1 rounded text-primary focus:ring-0 accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-text-primary">E-Mail-Benachrichtigung an die Kohorte bei Änderungen senden</span>
</label>
</div>
<div className="pt-space-md space-y-space-sm">
<button className="w-full py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-space-xs" id="saveLessonBtn">
<span className="material-symbols-outlined text-[18px]">save</span>
<span className="">Lektion speichern &amp; aktualisieren</span>
</button>
<button className="w-full py-2.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-label-md text-label-md transition-colors cursor-pointer flex items-center justify-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
<span className="">Vorschau als Teilnehmer:in</span>
</button>
<div className="text-center pt-space-xxs">
<button className="font-body-sm text-body-sm text-text-muted hover:text-text-primary underline cursor-pointer">
Abbrechen / Änderungen verwerfen
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-space-lg">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
<div>
<span className="font-eyebrow text-eyebrow text-text-muted uppercase tracking-wider">Gesamter Kursablauf</span>
<h2 className="font-headline-lg text-headline-lg text-text-primary">Alle 6 Module im Überblick</h2>
</div>
<p className="font-body-sm text-body-sm text-text-muted">Reihenfolge anpassen oder Inhalte zur Bearbeitung auswählen</p>
</div>
<div className="rounded-xl overflow-hidden shadow-sm bg-surface-subtle">
<div className="divide-y divide-transparent">
<div className="p-space-lg bg-surface-base hover:bg-surface-subtle transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<span className="material-symbols-outlined text-text-muted cursor-grab hover:text-text-primary text-[20px] pt-1 md:pt-0">drag_indicator</span>
<div className="w-8 h-8 rounded-full bg-surface-muted text-secondary font-label-md text-label-md flex items-center justify-center shrink-0">
1
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-text-primary">Einführung &amp; Was ist Meditation?</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container font-caption text-caption text-secondary">Veröffentlicht</span>
</div>
<div className="flex items-center gap-space-md text-text-muted font-caption text-caption">
<span className="">1 Video (18 Min.)</span>
<span className="">•</span>
<span className="">2 Audios</span>
<span className="">•</span>
<span className="">1 PDF</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end md:self-center shrink-0">
<button className="px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container font-label-md text-label-md text-text-primary transition-colors cursor-pointer">
Bearbeiten
</button>
</div>
</div>
<div className="p-space-lg bg-surface-base hover:bg-surface-subtle transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<span className="material-symbols-outlined text-text-muted cursor-grab hover:text-text-primary text-[20px] pt-1 md:pt-0">drag_indicator</span>
<div className="w-8 h-8 rounded-full bg-surface-muted text-secondary font-label-md text-label-md flex items-center justify-center shrink-0">
2
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-text-primary">Der Körper als Anker</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container font-caption text-caption text-secondary">Veröffentlicht</span>
</div>
<div className="flex items-center gap-space-md text-text-muted font-caption text-caption">
<span className="">1 Video (21 Min.)</span>
<span className="">•</span>
<span className="">2 Audios</span>
<span className="">•</span>
<span className="">1 PDF</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end md:self-center shrink-0">
<button className="px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container font-label-md text-label-md text-text-primary transition-colors cursor-pointer">
Bearbeiten
</button>
</div>
</div>
<div className="p-space-lg bg-accent-ochre-light/40 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<span className="material-symbols-outlined text-primary cursor-grab text-[20px] pt-1 md:pt-0">drag_indicator</span>
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center shrink-0">
3
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-text-primary">Klänge und Atem erforschen</span>
<span className="px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold">Wird gerade bearbeitet</span>
</div>
<div className="flex items-center gap-space-md text-text-muted font-caption text-caption">
<span className="">1 Video (24 Min.)</span>
<span className="">•</span>
<span className="">2 Audios</span>
<span className="">•</span>
<span className="">1 PDF</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end md:self-center shrink-0">
<span className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md">
Im Editor geladen
</span>
</div>
</div>
<div className="p-space-lg bg-surface-base hover:bg-surface-subtle transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<span className="material-symbols-outlined text-text-muted cursor-grab hover:text-text-primary text-[20px] pt-1 md:pt-0">drag_indicator</span>
<div className="w-8 h-8 rounded-full bg-surface-muted text-secondary font-label-md text-label-md flex items-center justify-center shrink-0">
4
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-text-primary">Gedanken und Gefühle als Freunde</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-tint-warm text-primary font-caption text-caption">Geplant für 28. Nov</span>
</div>
<div className="flex items-center gap-space-md text-text-muted font-caption text-caption">
<span className="">1 Video (28 Min.)</span>
<span className="">•</span>
<span className="">1 Audio</span>
<span className="">•</span>
<span className="">0 PDFs</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end md:self-center shrink-0">
<button className="px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container font-label-md text-label-md text-text-primary transition-colors cursor-pointer">
Bearbeiten
</button>
</div>
</div>
<div className="p-space-lg bg-surface-base hover:bg-surface-subtle transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<span className="material-symbols-outlined text-text-muted cursor-grab hover:text-text-primary text-[20px] pt-1 md:pt-0">drag_indicator</span>
<div className="w-8 h-8 rounded-full bg-surface-muted text-secondary font-label-md text-label-md flex items-center justify-center shrink-0">
5
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-text-primary">Gewahrsein im Alltag vertiefen</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-muted text-text-muted font-caption text-caption">Entwurf • Noch kein Video</span>
</div>
<div className="flex items-center gap-space-md text-text-muted font-caption text-caption">
<span className="">0 Videos</span>
<span className="">•</span>
<span className="">1 Audio</span>
<span className="">•</span>
<span className="">1 PDF</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end md:self-center shrink-0">
<button className="px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container font-label-md text-label-md text-text-primary transition-colors cursor-pointer">
Bearbeiten
</button>
</div>
</div>
<div className="p-space-lg bg-surface-base hover:bg-surface-subtle transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<span className="material-symbols-outlined text-text-muted cursor-grab hover:text-text-primary text-[20px] pt-1 md:pt-0">drag_indicator</span>
<div className="w-8 h-8 rounded-full bg-surface-muted text-secondary font-label-md text-label-md flex items-center justify-center shrink-0">
6
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-text-primary">Abschluss &amp; kontinuierliche Praxis</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-muted text-text-muted font-caption text-caption">Entwurf</span>
</div>
<div className="flex items-center gap-space-md text-text-muted font-caption text-caption">
<span className="">Noch keine Medien hinterlegt</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end md:self-center shrink-0">
<button className="px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container font-label-md text-label-md text-text-primary transition-colors cursor-pointer">
Bearbeiten
</button>
</div>
</div>
</div>
</div>
</div>
</div>

</div></main>
      <SiteFooter />
    </div>
  );
}
