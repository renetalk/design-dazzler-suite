import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/forum/")({
  head: () => ({
    meta: [
      { title: "Forum – Kursaustausch | Tergar Campus" },
      { name: "description", content: "Austausch mit der Sangha und Praxisbegleitern im Kursforum." },
      { property: "og:title", content: "Forum – Kursaustausch | Tergar Campus" },
      { property: "og:description", content: "Austausch mit der Sangha und Praxisbegleitern im Kursforum." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page3,
});

function Page3() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
<div className="w-full bg-surface-subtle py-space-xl">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-lg">
<div className="max-w-2xl space-y-space-xs">
<div className="flex items-center gap-space-xs text-text-muted font-caption text-caption uppercase tracking-wider">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
<span className="">Gemeinsamer Lernraum</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Forum – Kursaustausch</h1>
<p className="font-body-lead text-body-lead text-secondary">
            Ein ruhiger, geschützter Raum für Fragen, Praxiserfahrungen und den Austausch zur aktuellen Kurseinheit.
          </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-accent-ochre-hover transition-colors" id="openModalBtn">
<span className="material-symbols-outlined text-[20px]">edit_note</span>
<span className="">Neues Thema verfassen</span>
</button>
</div>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto pb-space-xxs" id="forum-filter-tabs">
<button className="tab-btn active px-space-md py-space-xs rounded-full font-label-md text-label-md bg-accent-ochre-light text-primary transition-colors cursor-pointer" data-filter="all">
          Alle Themen (24)
        </button>
<button className="tab-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-secondary hover:text-text-primary hover:bg-surface-container transition-colors cursor-pointer" data-filter="fragen">
          Fragen zum Kurs (8)
        </button>
<button className="tab-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-secondary hover:text-text-primary hover:bg-surface-container transition-colors cursor-pointer" data-filter="praxis">
          Praxiserfahrungen (12)
        </button>
<button className="tab-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-secondary hover:text-text-primary hover:bg-surface-container transition-colors cursor-pointer" data-filter="meine">
          Meine Beiträge
        </button>
</div>
</div>
</div>
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
<div className="lg:col-span-8 flex flex-col space-y-space-md">
<article className="discussion-item bg-surface-base rounded-xl p-space-lg hover:shadow-md transition-shadow bg-surface-container-lowest" data-category="praxis"><div className="flex items-start gap-space-md min-w-0 w-full"><div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0 font-label-md text-label-md">LS</div><div className="flex flex-col space-y-space-xs min-w-0 flex-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="px-2 py-0.5 rounded-full font-caption text-caption bg-surface-muted text-text-muted">Praxisalltag</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">Laura Schmidt</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">vor 2 Std.</span></div><h2 className="font-headline-sm text-headline-sm text-text-primary hover:text-primary-container transition-colors cursor-pointer leading-snug break-words">Austausch zur Meditation im Alltag: Wie integriert ihr kurze Pausen?</h2><p className="font-body-md text-body-md text-secondary break-words leading-relaxed">Oft vergesse ich im Trubel des Arbeitstages innezuhalten. Mingyur Rinpoche empfiehlt ja kurze Momente, viele Male. Setzt ihr euch Erinnerungen oder koppelt ihr das an Routinen wie Teetrinken?</p><div className="pt-space-xs flex items-center justify-between border-t border-subtle/40"><div className="inline-flex items-center gap-space-xxs px-space-sm py-0.5 rounded-full bg-surface-muted text-secondary font-body-sm text-body-sm"><span className="material-symbols-outlined text-[18px] text-text-muted">chat_bubble_outline</span><span className="font-body-strong text-body-strong text-text-primary">24</span><span className="text-caption">Antworten</span></div><span className="text-primary font-label-md text-label-md hover:text-accent-ochre-hover transition-colors cursor-pointer inline-flex items-center gap-1">Zum Thema <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span></div></div></div></article>
<article className="discussion-item bg-surface-base rounded-xl p-space-lg hover:shadow-md transition-shadow bg-surface-container-lowest" data-category="fragen"><div className="flex items-start gap-space-md min-w-0 w-full"><div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0 font-label-md text-label-md">TB</div><div className="flex flex-col space-y-space-xs min-w-0 flex-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="px-2 py-0.5 rounded-full font-caption text-caption bg-surface-tint-warm text-on-primary-fixed-variant flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-[14px]">verified</span>Beantwortet von Seminarleitung</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">Thomas Berger</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">vor 4 Std.</span></div><h2 className="font-headline-sm text-headline-sm text-text-primary hover:text-primary-container transition-colors cursor-pointer leading-snug break-words">Frage zu Modul 3: Umgang mit Unruhe während der Atemmeditation</h2><p className="font-body-md text-body-md text-secondary break-words leading-relaxed">Besonders morgens fällt es mir schwer, den Atem wahrzunehmen, ohne mich von körperlicher Nervosität ablenken zu lassen. Gibt es eine Empfehlung, wie weit man die Aufmerksamkeit dehnen sollte?</p><div className="pt-space-xs flex items-center justify-between border-t border-subtle/40"><div className="inline-flex items-center gap-space-xxs px-space-sm py-0.5 rounded-full bg-surface-muted text-secondary font-body-sm text-body-sm"><span className="material-symbols-outlined text-[18px] text-text-muted">chat_bubble_outline</span><span className="font-body-strong text-body-strong text-text-primary">12</span><span className="text-caption">Antworten</span></div><span className="text-primary font-label-md text-label-md hover:text-accent-ochre-hover transition-colors cursor-pointer inline-flex items-center gap-1">Zum Thema <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span></div></div></div></article>
<article className="discussion-item bg-surface-base rounded-xl p-space-lg hover:shadow-md transition-shadow bg-surface-container-lowest" data-category="praxis"><div className="flex items-start gap-space-md min-w-0 w-full"><div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0 font-label-md text-label-md">MK</div><div className="flex flex-col space-y-space-xs min-w-0 flex-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="px-2 py-0.5 rounded-full font-caption text-caption bg-surface-muted text-text-muted">Unterweisungen</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">Miriam Koch</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">vor 1 Tag</span></div><h2 className="font-headline-sm text-headline-sm text-text-primary hover:text-primary-container transition-colors cursor-pointer leading-snug break-words">Erfahrungen mit dem aktuellen Video von Mingyur Rinpoche</h2><p className="font-body-md text-body-md text-secondary break-words leading-relaxed">Die Metapher mit dem klaren Gebirgsbach hat mir sehr die Schwere genommen. Wie erlebte eure Gruppe den Aspekt des „Nicht-Einmischens“ in den Gedankenfluss?</p><div className="pt-space-xs flex items-center justify-between border-t border-subtle/40"><div className="inline-flex items-center gap-space-xxs px-space-sm py-0.5 rounded-full bg-surface-muted text-secondary font-body-sm text-body-sm"><span className="material-symbols-outlined text-[18px] text-text-muted">chat_bubble_outline</span><span className="font-body-strong text-body-strong text-text-primary">18</span><span className="text-caption">Antworten</span></div><span className="text-primary font-label-md text-label-md hover:text-accent-ochre-hover transition-colors cursor-pointer inline-flex items-center gap-1">Zum Thema <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span></div></div></div></article>
<article className="discussion-item bg-surface-base rounded-xl p-space-lg hover:shadow-md transition-shadow bg-surface-container-lowest" data-category="praxis"><div className="flex items-start gap-space-md min-w-0 w-full"><div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0 font-label-md text-label-md">JK</div><div className="flex flex-col space-y-space-xs min-w-0 flex-1"><div className="flex items-center gap-space-xs flex-wrap"><span className="px-2 py-0.5 rounded-full font-caption text-caption bg-surface-muted text-text-muted">Impulse</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">Jonas Keller</span><span className="font-caption text-caption text-text-muted">•</span><span className="font-caption text-caption text-text-muted">vor 2 Tagen</span></div><h2 className="font-headline-sm text-headline-sm text-text-primary hover:text-primary-container transition-colors cursor-pointer leading-snug break-words">Kurze Momente, viele Male – was funktioniert bei euch am besten?</h2><p className="font-body-md text-body-md text-secondary break-words leading-relaxed">Ich habe angefangen, jedes Mal vor dem Öffnen der E-Mails 3 tiefe bewusste Atemzüge zu nehmen. Welche Ankerpunkte nutzt ihr so über den Tag verteilt?</p><div className="pt-space-xs flex items-center justify-between border-t border-subtle/40"><div className="inline-flex items-center gap-space-xxs px-space-sm py-0.5 rounded-full bg-surface-muted text-secondary font-body-sm text-body-sm"><span className="material-symbols-outlined text-[18px] text-text-muted">chat_bubble_outline</span><span className="font-body-strong text-body-strong text-text-primary">15</span><span className="text-caption">Antworten</span></div><span className="text-primary font-label-md text-label-md hover:text-accent-ochre-hover transition-colors cursor-pointer inline-flex items-center gap-1">Zum Thema <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span></div></div></div></article>
<div className="pt-space-md flex items-center justify-center">
<button className="px-space-lg py-space-xs rounded-lg text-secondary font-label-md text-label-md hover:bg-surface-muted transition-colors flex items-center gap-space-xxs">
<span className="">Ältere Beiträge laden</span>
<span className="material-symbols-outlined text-[18px]">expand_more</span>
</button>
</div>
</div>
<aside className="lg:col-span-4 flex flex-col space-y-space-xl">
<div>
<Link to="/" className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-accent-ochre-hover transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span className="">Zurück zu Mein Kurs</span>
</Link>
</div>
<div className="bg-surface-subtle p-space-lg rounded-xl flex flex-col space-y-space-md">
<div className="flex items-center gap-space-xs text-text-primary font-headline-sm text-headline-sm">
<span className="">Aktive Themen</span>
</div>
<ul className="space-y-space-sm font-body-sm text-body-sm">
<li className="group">
<a className="flex flex-col space-y-space-xxs text-text-primary group-hover:text-primary-container transition-colors" href="#">
<span className="font-body-strong text-body-strong leading-snug">Meditation im Alltag: Kurze Pausen</span>
<span className="text-text-muted font-caption text-caption">24 Antworten • Letzte Antwort vor 18 Min.</span>
</a>
</li>
<li className="group">
<a className="flex flex-col space-y-space-xxs text-text-primary group-hover:text-primary-container transition-colors" href="#">
<span className="font-body-strong text-body-strong leading-snug">Modul 3: Umgang mit Unruhe</span>
<span className="text-text-muted font-caption text-caption">12 Antworten • Letzte Antwort vor 45 Min.</span>
</a>
</li>
<li className="group">
<a className="flex flex-col space-y-space-xxs text-text-primary group-hover:text-primary-container transition-colors" href="#">
<span className="font-body-strong text-body-strong leading-snug">Video von Mingyur Rinpoche reflektieren</span>
<span className="text-text-muted font-caption text-caption">18 Antworten • Letzte Antwort vor 3 Std.</span>
</a>
</li>
</ul>
</div>

<div className="p-space-lg rounded-xl bg-surface-muted text-text-muted space-y-space-xs">
<div className="flex items-center gap-space-xs font-body-strong text-body-strong text-text-primary">
<span className="material-symbols-outlined text-[18px] text-primary-container">favorite</span>
<span className="">Achtsamer Umgang</span>
</div>
<p className="font-caption text-caption leading-relaxed">
            Wir begegnen allen Beiträgen mit Offenheit, Wohlwollen und Respekt vor den individuellen Wegen unserer Teilnehmenden.
          </p>
</div>
</aside>
</div>
</div>
<div className="fixed inset-0 z-50 hidden bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter-mobile" id="topicModal">
<div className="bg-surface-base rounded-xl max-w-lg w-full p-space-xl shadow-xl flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-text-primary">Neues Thema verfassen</h3>
<button className="text-text-muted hover:text-text-primary p-1" id="closeModalBtn">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="space-y-space-sm font-body-sm text-body-sm">
<div>
<label className="block text-text-primary font-body-strong text-body-strong mb-1">Bereich</label>
<select className="w-full p-space-xs rounded-lg bg-surface-muted text-text-primary focus:outline-none focus:bg-surface-base">
<option>Praxiserfahrungen</option>
<option>Fragen zum Kurs</option>
<option>Alltägliche Impulse</option>
</select>
</div>
<div>
<label className="block text-text-primary font-body-strong text-body-strong mb-1">Titel deines Beitrags</label>
<input className="w-full p-space-xs rounded-lg bg-surface-muted text-text-primary placeholder:text-text-muted focus:outline-none focus:bg-surface-base" placeholder="Worum geht es in deinem Beitrag?" type="text"/>
</div>
<div>
<label className="block text-text-primary font-body-strong text-body-strong mb-1">Deine Nachricht</label>
<textarea className="w-full p-space-xs rounded-lg bg-surface-muted text-text-primary placeholder:text-text-muted focus:outline-none focus:bg-surface-base" placeholder="Teile deine Gedanken, Beobachtungen oder Frage..." rows={4}/>
</div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md text-secondary hover:bg-surface-muted transition-colors" id="cancelModalBtn">
          Abbrechen
        </button>
<button className="px-space-lg py-space-xs rounded-lg font-label-md text-label-md bg-primary-container text-on-primary hover:bg-accent-ochre-hover transition-colors" id="submitTopicBtn">
          Thema veröffentlichen
        </button>
</div>
</div>
</div>

</div></main>

      <SiteFooter />
    </div>
  );
}
