import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mein Kurs – Tergar Campus" },
      { name: "description", content: "Freude am Leben Stufe 1: Setze deinen Meditationskurs mit Yongey Mingyur Rinpoche fort." },
      { property: "og:title", content: "Mein Kurs – Tergar Campus" },
      { property: "og:description", content: "Freude am Leben Stufe 1: Setze deinen Meditationskurs mit Yongey Mingyur Rinpoche fort." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MeinKurs,
});

function MeinKurs() {
  return (
    <div className="bg-surface-subtle font-body-md text-body-md text-on-surface antialiased">
      <SiteHeader />
<main className="w-full pt-20 bg-surface-subtle min-h-screen"><div className="flex flex-col w-full">
<div className="w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between py-space-2xl md:py-space-4xl px-gutter-mobile lg:px-gutter-desktop">
<div className="w-full max-w-container-narrow mx-auto flex flex-col items-center">
<div className="w-full">
<a className="group block w-full bg-surface-base rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1" href="/kurs">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
<div className="md:col-span-5 relative min-h-[220px] md:min-h-full overflow-hidden bg-surface-muted">
<img className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_YDTaNaZpcEG6ZIlONXZWZmS-kdytTDy2P9BDKItXHPzA64j6yoY7ZGv0GQYnSrBiwsUIcBYkcl8AqbukWISyI5p-T7ekA27MredETW4IBfbsSlaHM3pNtApy6Twt32UxNtBsQxKsDnqwxNalwnoMviHiO_jTr8rK2E0vjx706vH2X-fagUZ1DE9BcVZkN8klsGxgCz7rVZcayoPRw4gMgVkMhX4eesnj4jXP6ps0YK-iHG9hmGitIA" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden"></div>
<div className="absolute top-4 left-4 md:hidden">
<span className="px-2.5 py-1 rounded-full bg-surface-base/90 backdrop-blur text-primary font-caption text-caption font-bold tracking-wide uppercase">
Joy of Living • Stufe 1
</span>
</div>
</div>
<div className="md:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-base">
<div>
<div className="hidden md:flex items-center gap-2 mb-space-sm">
<span className="px-3 py-1 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-bold tracking-wider uppercase">
Joy of Living • Stufe 1
</span>
<span className="text-text-muted text-caption font-caption">• Online-Kurs</span>
</div>
<h2 className="font-headline-md text-headline-sm md:text-headline-md text-text-primary mb-space-xs font-normal group-hover:text-primary transition-colors">
Freude am Leben – Stufe 1: Den Geist beruhigen
</h2>
<p className="font-body-md text-body-md text-text-muted font-normal leading-relaxed mb-space-lg">
Einführung in das Gewahrsein mit Yongey Mingyur Rinpoche. Lerne, Geräusche, deinen Atem und alle Sinneswahrnehmungen als Stütze des Geistes zu nutzen.
</p>
</div>
<div className="space-y-space-md pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-muted flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5" style={{"fontVariationSettings": "'FILL' 1"}}>
play_circle
</span>
<div className="min-w-0">
<p className="font-caption text-caption uppercase tracking-wider text-text-muted font-semibold">Nächster Schritt</p>
<p className="font-body-sm text-body-sm font-semibold text-text-primary truncate">
Modul 3: Klänge und Atem erforschen
</p>
</div>
</div>
<div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-text-muted mb-1.5">
<span className="">Lektion 3 von 6</span>
<span className="font-semibold text-text-primary">45% abgeschlossen</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full transition-all duration-500 ease-out" style={{"width": "45%"}}></div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between">
<span className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md group-hover:bg-accent-ochre-hover transition-colors shadow-sm">
<span className="">Kurs fortsetzen</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</span>
<span className="font-caption text-caption text-text-muted hidden sm:inline-block">
Zuletzt aktiv vor 2 Tagen
</span>
</div>
</div>
</div>
</div>
</a>
</div>
<div className="w-full mt-space-2xl pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left text-text-muted">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-surface-base flex items-center justify-center shadow-sm text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">forum</span>
</div>
<p className="font-body-sm text-body-sm max-w-md">
Fragen zur Praxis oder den Videos? Tausche dich in der Sangha und mit den Kursleiter:innen aus.
</p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-text-primary hover:text-primary transition-colors flex-shrink-0 group" href="/forum">
<span className="">Zum Kursforum</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</a>
</div>
</div>
<div className="w-full max-w-container-narrow mx-auto text-center mt-space-3xl mb-space-md">
<blockquote className="font-display-hero text-headline-sm md:text-headline-md italic text-text-muted/60 font-normal leading-relaxed">
„Gewahrsein ist wie der weite Himmel – Gedanken und Emotionen sind lediglich die Wolken darin.“
</blockquote>
<cite className="block font-caption text-caption tracking-wider uppercase text-text-muted/70 mt-space-xs not-italic font-semibold">
– Yongey Mingyur Rinpoche
</cite>
</div>
</div>
</div></main>
      <SiteFooter />
    </div>
  );
}
