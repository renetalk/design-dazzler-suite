import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/forum/neu")({
  head: () => ({ meta: [
    { title: "Neues Thema anlegen | Tergar Campus" },
    { name: "description", content: "Ein neues Thema für die Kursgruppe oder eine vertrauliche Frage an die Seminarleitung verfassen." },
    { property: "og:title", content: "Neues Thema anlegen | Tergar Campus" },
    { property: "og:description", content: "Ein neues Thema für die Kursgruppe oder eine vertrauliche Frage an die Seminarleitung verfassen." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
    <SiteHeader />
    <main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
<div className="w-full bg-gradient-to-b from-surface-subtle via-surface-base to-surface-muted py-space-xl md:py-space-3xl">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="mb-space-lg">
<a className="inline-flex items-center gap-space-xs text-secondary hover:text-text-primary transition-colors font-body-sm text-body-sm group" href="#">
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
<span className="">Zurück zur Themenübersicht</span>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-start">
<div className="lg:col-span-8 flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase tracking-wider text-primary">GEMEINSAMER AUSTAUSCH & FRAGEN</span>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Neues Thema anlegen</h1>
<p className="font-body-lead text-body-lead text-secondary max-w-2xl">
              Eröffne ein neues Gespräch für deine Kursgruppe oder stelle eine vertrauliche Frage direkt an die Seminarleitung.
            </p>
</div>
<div className="bg-surface-base rounded-xl shadow-sm p-space-md sm:p-space-xl flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs">
<label className="font-body-strong text-body-strong text-text-primary flex items-center justify-between">
<span className="">1. Sichtbarkeit & Empfänger wählen</span>
<span className="font-caption text-caption text-text-muted">Erforderlich</span>
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs" id="audience-selector">
<div className="cursor-pointer rounded-xl p-space-md bg-accent-ochre-light shadow-sm transition-all flex flex-col justify-between gap-space-sm relative" id="option-group">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-full bg-surface-tint-warm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">forum</span>
</div>
<span className="material-symbols-outlined text-primary text-[24px]" id="badge-group">check_circle</span>
</div>
<div className="flex flex-col gap-space-xxs">
<span className="font-body-strong text-body-strong text-text-primary">Öffentlicher Gruppen-Chat</span>
<p className="font-body-sm text-body-sm text-secondary">
                      Sichtbar für alle Teilnehmer:innen deiner Kurs-Kohorte. Für Praxiserfahrungen, gegenseitige Inspiration und allgemeinen Austausch.
                    </p>
</div>
<div className="inline-flex items-center gap-space-xxs pt-space-xxs text-primary font-caption text-caption">
<span className="material-symbols-outlined text-[14px]">groups</span>
<span className="">Kohorte: Herbst 2025 • Joy of Living 1</span>
</div>
</div>
<div className="cursor-pointer rounded-xl p-space-md bg-surface-subtle shadow-sm transition-all flex flex-col justify-between gap-space-sm relative opacity-85 hover:opacity-100" id="option-private">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">lock</span>
</div>
<span className="material-symbols-outlined text-text-muted text-[24px]" id="badge-private">radio_button_unchecked</span>
</div>
<div className="flex flex-col gap-space-xxs">
<span className="font-body-strong text-body-strong text-text-primary">Vertraulich an Seminarleitung</span>
<p className="font-body-sm text-body-sm text-secondary">
                      Nur für dich und die Kursleitung (z. B. Thomas Berger) sichtbar. Für persönliche Praxisfragen, Herausforderungen oder organisatorische Anliegen.
                    </p>
</div>
<div className="inline-flex items-center gap-space-xxs pt-space-xxs text-secondary font-caption text-caption">
<span className="material-symbols-outlined text-[14px]">shield_person</span>
<span className="">Geschützter bilateraler Raum</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-body-strong text-body-strong text-text-primary flex items-center justify-between" htmlFor="topic-title">
<span className="">2. Titel des Themas</span>
<span className="font-caption text-caption text-text-muted">Prägnant formulieren</span>
</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-subtle text-text-primary placeholder:text-text-muted font-body-md text-body-md focus:bg-surface-base focus:outline-none transition-all shadow-inner" id="topic-title" placeholder="z. B. Wie geht ihr mit Gedanken während der Gehmeditation um?" type="text"/>
<span className="font-caption text-caption text-text-muted">
                Wähle einen prägnanten Titel, damit andere den Inhalt schnell erfassen können.
              </span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-body-strong text-body-strong text-text-primary" htmlFor="topic-content">
                  3. Deine erste Nachricht
                </label>
<div className="flex items-center gap-space-xxs bg-surface-subtle px-space-xs py-space-xxs rounded-lg text-secondary">
<button className="p-1 hover:text-text-primary rounded hover:bg-surface-variant transition-colors" title="Fett" type="button">
<span className="material-symbols-outlined text-[18px]">format_bold</span>
</button>
<button className="p-1 hover:text-text-primary rounded hover:bg-surface-variant transition-colors" title="Kursiv" type="button">
<span className="material-symbols-outlined text-[18px]">format_italic</span>
</button>
<button className="p-1 hover:text-text-primary rounded hover:bg-surface-variant transition-colors" title="Zitat" type="button">
<span className="material-symbols-outlined text-[18px]">format_quote</span>
</button>
<button className="p-1 hover:text-primary rounded hover:bg-surface-variant transition-colors flex items-center gap-1 text-primary" title="Meditations-Tipp Notiz" type="button">
<span className="material-symbols-outlined text-[18px]">spa</span>
<span className="font-caption text-caption hidden sm:inline">Praxis-Tipp</span>
</button>
</div>
</div>
<textarea className="w-full p-space-md rounded-lg bg-surface-subtle text-text-primary placeholder:text-text-muted font-body-md text-body-md focus:bg-surface-base focus:outline-none transition-all resize-y shadow-inner" id="topic-content" placeholder="Beschreibe hier deine Beobachtung, Frage oder Praxiserfahrung..." rows="7"></textarea>
<div className="flex items-start gap-space-xs pt-space-xxs text-secondary">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">self_improvement</span>
<span className="font-caption text-caption leading-relaxed">
<strong>Achtsame Kommunikation:</strong> Teile deine Gedanken offen, respektvoll und im Sinne einer gemeinsamen Praxis.
                </span>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-body-strong text-body-strong text-text-primary">
                4. Anhänge (optional)
              </label>
<div className="w-full bg-surface-subtle hover:bg-surface-muted transition-colors rounded-xl p-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md cursor-pointer" id="dropzone">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-base flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">attach_file</span>
</div>
<div className="flex flex-col text-left">
<span className="font-body-strong text-body-strong text-text-primary">Datei oder Notiz anhängen</span>
<span className="font-caption text-caption text-text-muted">PDF, Audioaufnahme (z. B. Meditationstagebuch) oder Text bis zu 15 MB</span>
</div>
</div>
<button className="px-space-md py-space-xs bg-surface-base hover:bg-surface-container rounded-lg font-label-md text-label-md text-secondary shadow-sm transition-colors shrink-0" type="button">
                  Durchsuchen
                </button>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md">
<a className="w-full sm:w-auto px-space-lg py-space-sm text-center rounded-lg font-label-md text-label-md text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors" href="#">
                Abbrechen
              </a>
<div className="w-full sm:w-auto flex items-center gap-space-sm">
<button className="w-full sm:w-auto px-space-xl py-space-sm rounded-lg bg-primary-container hover:bg-accent-ochre-hover text-on-primary font-body-strong text-body-strong shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-xs" id="submit-btn" type="button">
<span id="submit-text" className="">Thema veröffentlichen</span>
<span className="material-symbols-outlined text-[20px]" id="submit-icon">send</span>
</button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-24">
<div className="bg-surface-base rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[22px]">lightbulb</span>
<h2 className="font-headline-sm text-headline-sm text-text-primary">Hinweise für den Austausch</h2>
</div>
<ul className="space-y-space-sm">
<li className="flex items-start gap-space-xs">
<span className="w-5 h-5 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center font-eyebrow text-eyebrow shrink-0 mt-0.5">1</span>
<div>
<span className="font-body-strong text-body-strong text-text-primary">Konstruktiv & wohlwollend:</span>
<p className="font-body-sm text-body-sm text-secondary">
                    Jede Praxis verläuft individuell. Höre neugierig zu und begegne anderen Teilnehmenden mit Wertschätzung.
                  </p>
</div>
</li>
<li className="flex items-start gap-space-xs">
<span className="w-5 h-5 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center font-eyebrow text-eyebrow shrink-0 mt-0.5">2</span>
<div>
<span className="font-body-strong text-body-strong text-text-primary">Eigene Erfahrungen im Fokus:</span>
<p className="font-body-sm text-body-sm text-secondary">
                    Teile konkrete Momente aus deiner Sitz- und Alltagspraxis statt abstrakter theoretischer Debatten.
                  </p>
</div>
</li>
<li className="flex items-start gap-space-xs">
<span className="w-5 h-5 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center font-eyebrow text-eyebrow shrink-0 mt-0.5">3</span>
<div>
<span className="font-body-strong text-body-strong text-text-primary">Antwortzeiten der Seminarleitung:</span>
<p className="font-body-sm text-body-sm text-secondary">
                    Bei vertraulichen Anliegen antworten Thomas Berger und das Team in der Regel achtsam innerhalb von 24–48 Stunden.
                  </p>
</div>
</li>
</ul>
<div className="rounded-lg bg-surface-subtle p-space-sm flex items-center gap-space-xs text-text-muted font-caption text-caption">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="">Alle Einträge verbleiben im sicheren, geschützten Tergar Campus Netzwerk.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    <SiteFooter />
  </div>;
}
