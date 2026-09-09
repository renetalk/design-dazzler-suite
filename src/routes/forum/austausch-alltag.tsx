import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/forum/austausch-alltag")({
  head: () => ({
    meta: [
      { title: "Meditation im Alltag – Forum | Tergar Campus" },
      { name: "description", content: "Diskussion: Wie integriert ihr kurze Praxispausen in den Alltag?" },
      { property: "og:title", content: "Meditation im Alltag – Forum | Tergar Campus" },
      { property: "og:description", content: "Diskussion: Wie integriert ihr kurze Praxispausen in den Alltag?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page5,
});

function Page5() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base font-body-md text-text-primary">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface-base min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">

<div className="relative w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-xl">
<div className="absolute -top-12 left-1/3 w-96 h-96 rounded-full bg-accent-ochre-light/40 blur-3xl pointer-events-none -z-10"></div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-xl">
<Link to="/forum" className="inline-flex items-center gap-space-xs text-secondary hover:text-primary transition-colors group">
<span className="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
<span className="font-body-md text-body-md font-medium">Zurück zur Forumsübersicht</span>
</Link>
<div className="flex items-center gap-space-xs">
<span className="px-space-sm py-0.5 rounded-full bg-accent-ochre-light text-primary font-eyebrow text-eyebrow uppercase tracking-wider">
          Praxisalltag
        </span>
<span className="text-text-muted text-caption">•</span>
<span className="font-body-sm text-body-sm text-text-muted">
          Herbst-Kohorte 2024
        </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<section className="lg:col-span-8 flex flex-col gap-space-xl">

<article className="bg-surface-base rounded-xl p-space-lg sm:p-space-xl shadow-sm hover:shadow-md transition-shadow">

<div className="flex items-start justify-between gap-space-md mb-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-semibold shrink-0 select-none">
                LS
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<h3 className="font-body-md text-body-md font-medium text-text-primary">Laura Schmidt</h3>
</div>
<span className="font-caption text-caption text-text-muted">Teilnehmerin • Joy of Living 1</span>
</div>
</div>
<div className="flex items-center gap-space-xs text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="">vor 2 Stunden <span className="hidden sm:inline">(20. Okt 2024)</span></span>
</div>
</div>

<h1 className="font-headline-md text-headline-md text-text-primary mb-space-md leading-snug font-normal">
            Austausch zur Meditation im Alltag: Wie integriert ihr kurze Pausen?
          </h1>

<div className="font-body-md text-body-md text-on-surface-variant space-y-space-md leading-relaxed mb-space-xl">
<p className="">Liebe Sangha,</p>
<p className="">
              oft vergesse ich im Trubel des Arbeitstages innezuhalten. Mingyur Rinpoche empfiehlt ja <em className="italic text-text-primary font-serif">„kurze Momente, viele Male“</em>.
            </p>
<p className="">
              Setzt ihr euch feste Erinnerungen (z.B. Wecker, Post-its am Bildschirm) oder nutzt ihr natürliche Auslöser wie das Kaffeekochen, das Öffnen einer neuen E-Mail oder rote Ampeln?
            </p>
<p className="">
              Manchmal fühlt sich ein Wecker für mich eher stressig an, als dass er mich ins Gewahrsein holt. Wie geht ihr damit um und was hilft euch besonders, um ohne Druck dranzubleiben?
            </p>
</div>

<div className="flex items-center justify-between pt-space-md bg-surface-subtle -mx-space-lg sm:-mx-space-xl -mb-space-lg sm:-mb-space-xl px-space-lg sm:px-space-xl py-space-sm rounded-b-xl">
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-accent-ochre-light transition-all" id="main-like-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
<span className="font-body-sm text-body-sm font-normal">Gefällt mir (8)</span>
</button>
<a className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-surface-container-low transition-all" href="#reply-section">
<span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span>
<span className="font-body-sm text-body-sm">Antworten</span>
</a>
</div>
<button aria-label="Thema merken" className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg text-text-muted hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">bookmark_border</span>
<span className="font-body-sm text-body-sm hidden sm:inline">Lesezeichen</span>
</button>
</div>
</article>

<div className="flex items-center justify-between pt-space-sm">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-text-primary font-normal">Antworten</h2>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container font-label-md text-label-md text-secondary">3</span>
</div>
<span className="font-caption text-caption text-text-muted">Chronologisch sortiert</span>
</div>

<div className="space-y-space-md">

<div className="bg-surface-subtle rounded-xl p-space-lg sm:p-space-xl shadow-sm relative overflow-hidden">

<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between gap-space-md mb-space-md pl-space-xs sm:pl-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-semibold shrink-0">
                  TB
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap"><span className="font-body-md text-body-md font-medium text-text-primary">Thomas Berger</span><span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-accent-ochre-light text-primary font-caption text-caption font-normal"><span className="material-symbols-outlined text-[14px]">school</span>Seminarbegleitung / Lehrende</span></div>
<span className="font-caption text-caption text-text-muted">vor 1 Stunde</span>
</div>
</div>

<span className="material-symbols-outlined text-primary-container text-[20px] hidden sm:block" title="Offizieller Begleitbeitrag">verified</span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-space-sm leading-relaxed pl-space-xs sm:pl-space-sm mb-space-md">
<p className="">Hallo Laura, das ist eine ganz wunderbare und zentrale Frage. Es ist vollkommen natürlich, dass ein Weckton zunächst als Unterbrechung oder sogar Anspannung empfunden wird.</p>
<p className="">
                Mingyur Rinpoche empfiehlt oft, natürliche Übergänge zu nutzen: Genau wie du schreibst – das Geräusch der Kaffeemaschine, der Moment bevor du den Telefonhörer abhebst, oder einfach ein tiefer bewusster Atemzug beim Aufstehen vom Schreibtisch.
              </p>
<p className="">
                Es muss keine Minute dauern – ein einzelner bewusster Moment genügt vollkommen. Probiere es mal ganz spielerisch ohne Ziel.
              </p>
</div>
<div className="flex items-center gap-space-md pl-space-xs sm:pl-space-sm pt-space-xs">
<button className="flex items-center gap-space-xs text-text-muted hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[16px]">favorite_border</span>
<span className="font-body-sm text-body-sm font-normal">Gefällt mir (12)</span>
</button>
<span className="text-text-muted text-caption">•</span>
<button className="font-body-sm text-body-sm text-text-muted hover:text-text-primary transition-colors">
                Antworten
              </button>
</div>
</div>

<div className="bg-surface-base rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-start justify-between gap-space-md mb-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-semibold shrink-0">
                  MK
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-body-md text-body-md font-medium text-text-primary">Miriam Koch</span>
<span className="font-caption text-caption text-text-muted">• Teilnehmerin</span>
</div>
<span className="font-caption text-caption text-text-muted">vor 45 Minuten</span>
</div>
</div>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-space-sm leading-relaxed mb-space-md">
<p className="">
                Ich nutze das Schließen meines Laptops vor der Mittagspause als festen Anker. Drei Atemzüge Gewahrsein für den Körper, erst dann stehe ich auf. Das hat meinen Arbeitstag wirklich verändert.
              </p>
</div>
<div className="flex items-center gap-space-md pt-space-xs">
<button className="flex items-center gap-space-xs text-text-muted hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[16px]">favorite_border</span>
<span className="font-body-sm text-body-sm font-normal">Gefällt mir (4)</span>
</button>
<span className="text-text-muted text-caption">•</span>
<button className="font-body-sm text-body-sm text-text-muted hover:text-text-primary transition-colors">
                Antworten
              </button>
</div>
</div>

<div className="bg-surface-base rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-start justify-between gap-space-md mb-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-surface-muted text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-semibold shrink-0">
                  JS
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-body-md text-body-md font-medium text-text-primary">Jonas Stein</span>
<span className="font-caption text-caption text-text-muted">• Teilnehmer</span>
</div>
<span className="font-caption text-caption text-text-muted">vor 18 Minuten</span>
</div>
</div>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-space-sm leading-relaxed mb-space-md">
<p className="">
                Danke für diesen Impuls, Laura! Mir ging es mit dem Wecker ganz ähnlich. Seit letzter Woche nutze ich rote Fußgängerampeln auf dem Heimweg. Früher war ich ungeduldig, jetzt ist es ein willkommener Moment der Achtsamkeit.
              </p>
</div>
<div className="flex items-center gap-space-md pt-space-xs">
<button className="flex items-center gap-space-xs text-text-muted hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[16px]">favorite_border</span>
<span className="font-body-sm text-body-sm font-normal">Gefällt mir (2)</span>
</button>
<span className="text-text-muted text-caption">•</span>
<button className="font-body-sm text-body-sm text-text-muted hover:text-text-primary transition-colors">
                Antworten
              </button>
</div>
</div>
</div>

<section className="bg-surface-base rounded-xl p-space-lg sm:p-space-xl shadow-sm mt-space-sm" id="reply-section">
<div className="flex items-center gap-space-sm mb-space-md">
<div className="w-9 h-9 rounded-full bg-accent-ochre-light text-primary flex items-center justify-center font-body-strong text-body-strong">
              AM
            </div>
<div>
<h3 className="font-headline-sm text-headline-sm text-text-primary font-normal">Deine Antwort verfassen</h3>
<p className="font-caption text-caption text-text-muted">Als Anna Müller teilnehmen</p>
</div>
</div>
<div className="space-y-space-md">
<div className="relative">
<textarea className="w-full bg-surface-muted focus:bg-surface-base rounded-lg p-space-md text-on-surface font-body-md text-body-md placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-primary-container transition-all resize-y" id="comment-textarea" placeholder="Teile deine Gedanken oder Praxis-Tipps mit der Sangha..." rows={4}/>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs">
<p className="font-caption text-caption text-text-muted flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">spa</span>
                Achtsam &amp; wertschätzend formulieren
              </p>
<button className="bg-primary-container hover:bg-accent-ochre-hover text-on-primary text-body-strong px-space-lg py-space-sm rounded-lg transition-colors inline-flex items-center justify-center gap-space-xs self-end sm:self-auto font-medium" id="submit-reply">
<span className="">Antwort veröffentlichen</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</section>
</section>

<aside className="lg:col-span-4 flex flex-col gap-space-lg">



<div className="bg-surface-subtle rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="flex items-center gap-space-xs mb-space-sm text-text-primary">
<span className="material-symbols-outlined text-primary-container text-[20px]">self_improvement</span>
<h4 className="font-headline-sm text-headline-sm font-normal">Achtsamer Austausch</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Wir begegnen allen Beiträgen mit Offenheit, Wohlwollen und Respekt vor den individuellen Wegen unserer Teilnehmenden.
          </p>
</div>

<div className="bg-surface-base rounded-xl p-space-lg shadow-sm">
<h4 className="font-headline-sm text-headline-sm text-text-primary mb-space-md font-normal">
            Ähnliche Themen
          </h4>
<div className="space-y-space-md">
<a className="block group" href="#">
<p className="font-body-md text-body-md text-text-primary group-hover:text-primary transition-colors leading-snug mb-1">
                Kurze Momente, viele Male – was funktioniert bei euch am besten?
              </p>
<div className="flex items-center gap-space-xs text-caption font-caption text-text-muted">
<span className="material-symbols-outlined text-[14px]">forum</span>
<span className="">15 Antworten</span>
<span className="">•</span>
<span className="">vor 3 Tagen</span>
</div>
</a>
<div className="w-full h-px bg-surface-muted"></div>
<a className="block group" href="#">
<p className="font-body-md text-body-md text-text-primary group-hover:text-primary transition-colors leading-snug mb-1">
                Frage zu Modul 3: Umgang mit Unruhe
              </p>
<div className="flex items-center gap-space-xs text-caption font-caption text-text-muted">
<span className="material-symbols-outlined text-[14px]">forum</span>
<span className="">12 Antworten</span>
<span className="">•</span>
<span className="">vor 5 Tagen</span>
</div>
</a>
</div>
</div>


</aside>
</div>
</div>
</div>
</main>

      <SiteFooter />
    </div>
  );
}
