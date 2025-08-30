<!-- Homepage / Landing page / index -->
<script lang="ts">
  import { t } from '$lib/translations';
  let heroImage = '/images/starry_night-lake-reflection.webp';
  let logoImage = '/images/waxing-crescent-moon_1f312.png';
  // toggelt die Demo-Animation:
  let isRevealed = $state(false);
  const toggleReveal = () => (isRevealed = !isRevealed);
</script>

<svelte:head>
  <title>{$t('home.title')}</title>
</svelte:head>

<!-- <section class="relative flex h-dvh flex-col items-center justify-center gap-4 px-4 py-24 text-center">
  <div class="animate-float relative text-[3rem]">🌒</div>
  <h1 class="mt-4 text-[2.5rem] font-bold text-text-base">{$t('home.headline')}</h1>
  <p class="mt-2 text-[1.2rem] text-text">{$t('home.description')}</p>
</section> -->

<!--
  3-spaltiges Grundlayout:
  - Linkes & rechtes Panel enthalten alle Infos (Text, Links etc.)
  - Mittlere Spalte ist ein Bild-Hintergrund, der theoretisch die ganze Breite "freigelegt"
    werden kann, wenn die äußeren Panels rausanimiert werden.
  - Die Klassen `panel-left` / `panel-right` sind darauf vorbereitet:
    -> später einfach die Klasse `slide-out` hinzufügen, um sie auszublenden.
-->

<section class="h-full w-full overflow-hidden md:h-dvh">
  <!-- Dev-Button zum Testen der Slide-Out-Logik (nur vorübergehend) #TODO -->
  <div class="pointer-events-none fixed left-0 top-4 z-50 flex w-full justify-center">
    <button
      class="pointer-events-auto hidden rounded-2xl border px-3 py-1 text-sm transition hover:bg-black/5"
      onclick={toggleReveal}
      aria-pressed={isRevealed}
    >
      {isRevealed ? 'Panels einblenden' : 'Panels ausblenden (Demo)'}
    </button>
  </div>

  <!-- Vollflächiges Bild -->
  <img
    src={heroImage}
    alt="Shiatsu"
    class="absolute inset-0 h-full w-full object-cover"
    decoding="async"
    loading="eager"
  />

  <section
    class="relative grid h-full grid-cols-1 md:grid-cols-[minmax(20rem,1.5fr)_minmax(24rem,2fr)_minmax(20rem,1.5fr)]"
  >
    <!-- Linkes Info-Panel -->
    <aside class="panel-left relative z-10 bg-background" class:slide-out={isRevealed} data-panel="left">
      <div class="container mx-auto flex h-full flex-col justify-between px-4 py-10 md:px-6 md:py-16 lg:px-8">
        <img src={logoImage} alt="Shiatsu Logo" class="mx-auto mt-12 max-w-full" />
        <div class="mt-12 space-y-1 text-sm/6">
          <p class="text-2xl font-semibold">
            Shiatsu ist Berührung, Energie&shy;arbeit, Wohl&shy;fühl&shy;massage, Freude, Energie, Heilung und
            Begleitung auf deinem Weg
          </p>
        </div>
      </div>
    </aside>

    <!-- Mittlere Bild-Spalte -->
    <div class="relative min-h-[50svh] md:min-h-[calc(100svh-8rem)]">
      <!-- Optionaler Overlay-Content in der Mitte -->
      <div class="relative z-0 flex h-full items-center justify-center">
        <!-- Lass hier bewusst wenig stehen, damit die Spalte später
             freigelegt 'wie Hintergrund' wirken kann. -->
      </div>
    </div>

    <!-- Rechtes Info-Panel -->
    <aside class="panel-right relative z-10 bg-background" class:slide-out={isRevealed} data-panel="right">
      <div class="container mx-auto flex h-full flex-col justify-between px-4 py-10 md:px-6 md:py-16 lg:px-8">
        <div class="mt-10 space-y-1 text-sm/6">
          <!-- <h2 class="mt-14 text-3xl font-semibold">Praxis</h2> -->
          <p class="font-semibold">Praxis Lebenswert</p>
          <p>Wildenbruchstr. 70<br />12045 Berlin Alt-Treptow</p>
          <p>60 Min  80 €<br />75 Min  100 €<br />90 Min  120 €</p>
        </div>

        <div class="mt-12 space-y-1 text-sm/6">
          <p class="font-semibold">Tanja Schochow</p>
          <p>Shiatsu Praktikerin (ESI) <br /> Gesundheitspraktikerin (DGAM) <br /> M.A. Sport und Lebensstil</p>
          <p>
            <a class="underline underline-offset-4" href="mailto:{$t('common.mail')}">{$t('common.mail')}</a>
          </p>
          <!-- #TODO: -->
          <p>+49 176 00000000</p>
        </div>
      </div>
    </aside>
  </section>
</section>

<style>
  /* Panels für spätere Animation vorbereiten */
  .panel-left,
  .panel-right {
    will-change: transform, opacity;
    transition:
      transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1),
      opacity 700ms ease;
  }
  /* Standard: sichtbar */
  .panel-left {
    transform: translateX(0);
  }
  .panel-right {
    transform: translateX(0);
  }

  /* Für Reveal-Effekt: Panels nach außen fahren */
  .panel-left.slide-out {
    transform: translateX(-100%);
    opacity: 0;
  }
  .panel-right.slide-out {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
