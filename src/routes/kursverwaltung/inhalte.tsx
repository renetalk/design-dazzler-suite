import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kursverwaltung/inhalte")({
  head: () => ({
    meta: [
      { title: "Kursinhalte verwalten | Tergar Campus" },
      { name: "description", content: "Module, Lektionen und Freischaltungen des Kurses bearbeiten." },
      { property: "og:title", content: "Kursinhalte verwalten | Tergar Campus" },
      { property: "og:description", content: "Module, Lektionen und Freischaltungen des Kurses bearbeiten." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page6,
});

function Page6() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop w-full py-space-xl">

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
<button className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer" id="btnNewLesson">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="">Neues Modul anlegen</span>
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
<input className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none focus:bg-surface-base" id="moduleTitle" type="text" defaultValue="Modul 3: Klänge und Atem erforschen"/>
</div>
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleDescription">Kurzbeschreibung &amp; Lektionsnotizen für Teilnehmende</label>
<textarea className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none focus:bg-surface-base leading-relaxed" id="moduleDescription" rows={4} defaultValue="In dieser Einheit vertiefen wir das sensorische Gewahrsein anhand äußerer Klänge und des natürlichen Atems. Klänge sind weder störend noch heilig – sie dienen als lebendiger Spiegel des gegenwärtigen Geistes."/>
</div>
</div>

<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Video-Unterweisung</h3>
<p className="font-body-sm text-body-sm text-text-muted">Wähle eine aufgezeichnete Lehrunterweisung direkt aus der zentralen Tergar-Mediathek aus oder tausche sie aus.</p>
</div>

</div>
<div className="space-y-space-xs"><div className="flex items-center justify-between"><label className="block font-label-md text-label-md text-text-primary">Verknüpfte Lehrunterweisung</label><div className="flex items-center gap-space-xs"><button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer"><span className="material-symbols-outlined text-[18px]">video_library</span><span className="">Aus Mediathek wählen</span></button></div></div><div className="p-space-md rounded-lg bg-surface-base shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md"><div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0 w-full sm:w-auto"><div className="w-full sm:w-36 h-20 rounded-lg overflow-hidden relative group shrink-0"><img className="w-full h-full object-cover rounded-lg" data-alt="A serene meditation hall with warm sunlight gently illuminating a wooden meditation seat, a singing bowl on a low altar table, warm ochre cushions, soft cinematic lighting, mindful atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLrDQUJ2S_X_1RBA45-3SHFDO4pUm0jC5wkn6xUSXTxioDEpadGLalcgYOk0MSPgBE1_gOezY4h063tqDEJTXj0WWN_vrq8xfKjBsXWfzhpq5f4mbsVpJ795PM3K1tA1yEdbfdxepgoWuJtf43RZXDLj14oqRyIro2_uDS52o7yu3cyOj7eCA2CuvInv5wG8c18e5iy2L0oFkWObT4F_W8NElpcPTjMSakAF2kD3TDLgP4LwlmJ-dbWw"/><div className="absolute inset-0 bg-on-secondary-fixed/30 flex items-center justify-center"><span className="material-symbols-outlined text-surface-base text-[28px]">play_circle</span></div></div><div className="min-w-0 space-y-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="font-label-md text-label-md text-text-primary truncate">Yongey Mingyur Rinpoche: Freude am Leben Stufe 1 – Klänge und Atem erforschen</span><span className="px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold">Aus Mediathek verknüpft</span></div><div className="font-body-sm text-body-sm text-text-muted">Vorschaubild: Lektion 3 Unterweisung • Deutsche Simultanübersetzung aktiv</div><div className="font-caption text-caption text-text-muted">Master HLS • 24 Min. • 1080p • Tergar Archiv ID: #TM-JOL1-M03-DE</div></div></div><button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-body-sm text-body-sm transition-colors shrink-0 self-end sm:self-center cursor-pointer"><span className="material-symbols-outlined text-[16px]">sync</span><span className="">Video austauschen</span></button></div></div>




</div>

<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Geführte Meditationen (Audios)</h3>
<p className="font-body-sm text-body-sm text-text-muted">Audio-Dateien für die tägliche Praxis der Teilnehmenden<br/>(.mp3, .m4a)</p>
</div>
<button type="button" className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer"><span className="material-symbols-outlined text-[18px]">folder_open</span><span className="">Aus Mediathek wählen</span></button>
</div>



<div className="space-y-space-xs"><div className="p-space-md rounded-lg bg-surface-base shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md"><div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0 w-full sm:w-auto"><div className="w-12 h-12 rounded-lg bg-accent-ochre-light text-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-[24px]">headphones</span></div><div className="min-w-0 space-y-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="font-label-md text-label-md text-text-primary truncate">Geführte Praxis: Gewahrsein auf Klänge ausrichten</span><span className="px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold">Aus Mediathek verknüpft</span></div><div className="font-body-sm text-body-sm text-text-muted">Anleitung: Yongey Mingyur Rinpoche • Deutsche Übersetzung</div><div className="font-caption text-caption text-text-muted">MP3 • 320 kbps • 18 Min. • Tergar Archiv ID: #AUD-JOL1-M03-A1</div></div></div><div className="flex items-center gap-space-xs self-end sm:self-center shrink-0"><button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer" title="Anhören"><span className="material-symbols-outlined text-[20px]">play_circle</span></button><button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-body-sm text-body-sm transition-colors cursor-pointer"><span className="material-symbols-outlined text-[16px]">sync</span><span className="">Audio austauschen</span></button></div></div><div className="p-space-md rounded-lg bg-surface-base shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md"><div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0 w-full sm:w-auto"><div className="w-12 h-12 rounded-lg bg-surface-muted text-secondary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-[24px]">graphic_eq</span></div><div className="min-w-0 space-y-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="font-label-md text-label-md text-text-primary truncate">Kurzmeditation: Der Atem als Ruheanker</span><span className="px-space-xs py-0.5 rounded-full bg-surface-container text-secondary font-caption text-caption font-bold">Audio hinterlegt</span></div><div className="font-body-sm text-body-sm text-text-muted">Alltagstaugliche Kurzpraxis für zwischendurch</div><div className="font-caption text-caption text-text-muted">MP3 • 320 kbps • 9 Min. • Tergar Archiv ID: #AUD-JOL1-M03-A2</div></div></div><div className="flex items-center gap-space-xs self-end sm:self-center shrink-0"><button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer" title="Anhören"><span className="material-symbols-outlined text-[20px]">play_circle</span></button><button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-muted hover:bg-surface-container text-text-primary font-body-sm text-body-sm transition-colors cursor-pointer"><span className="material-symbols-outlined text-[16px]">sync</span><span className="">Audio austauschen</span></button></div></div></div>
</div>

<div className="bg-surface-subtle p-space-xl rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary">Begleitmaterialien (PDF-Uploads)</h3>
<p className="font-body-sm text-body-sm text-text-muted">Handouts, Kontemplationsbögen und Übungsblätter</p>
</div>
<button type="button" className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-accent-ochre-hover transition-colors shadow-sm cursor-pointer"><span className="material-symbols-outlined text-[18px]">folder_open</span><span className="">Aus Mediathek wählen</span></button>
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
<select className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none" id="moduleStatusSelect">
<option value="published">Veröffentlicht (Aktiv)</option>
<option value="scheduled">Geplant (Automatischer Termin)</option>
<option value="draft">Entwurf (Nur Trainer:innen)</option>
</select>
</div>
<div>
<label className="block font-label-md text-label-md text-text-primary mb-space-xxs" htmlFor="moduleReleaseDate">Freischalt-Datum</label>
<div className="relative">
<input className="w-full px-space-md py-2.5 rounded-lg bg-surface-base font-body-md text-body-md text-text-primary shadow-sm focus:outline-none" id="moduleReleaseDate" type="date" defaultValue="2024-11-20"/>
</div>
<p className="font-caption text-caption text-text-muted mt-1">Gültig ab 00:01 Uhr MEZ des gewählten Tages.</p>
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
