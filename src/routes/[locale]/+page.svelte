<!-- Homepage / Landing page / index -->
<script lang="ts">
  import { page } from '$app/state';
  import { t } from '$lib/translations';
  import PriceList from '$lib/components/PriceList.svelte';
  import PhoneLink from '$lib/components/PhoneLink.svelte';

  import HeroImage from '$lib/components/HeroImage.svelte';
  // import Popup from '$lib/components/Popup.svelte';

  let logoImage = '/images/Logo.webp';
  let tanjaImage = '/images/tanja.webp';
  // toggelt die Demo-Animation:
  let isRevealed = $state(false);
  const toggleReveal = () => (isRevealed = !isRevealed);

  // toggelt das Popup:
  let showPopup: boolean = $state(false);
  let noScroll: boolean = $state(false);
  const togglePopup = () => {
    showPopup = !showPopup;
    if (window.matchMedia('(max-width: 1023px)').matches) {
      noScroll = !noScroll;
    }
  };
</script>

<svelte:head>
  <title>{$t('home.title')}</title>
</svelte:head>

<!-- <section class="relative flex h-dvh flex-col items-center justify-center gap-4 px-4 py-24 text-center">
  <div class="animate-float relative text-[3rem]">🌒</div>
  <h1 class="mt-4 text-[2.5rem] font-bold text-text-contrast">{$t('home.headline')}</h1>
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

<section class="h-full w-full overflow-hidden lg:h-dvh" class:no-scroll={noScroll}>
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

  <section
    class="relative grid h-full grid-cols-1 lg:grid-cols-[minmax(22rem,1.5fr)_minmax(22rem,2fr)_minmax(22rem,1.5fr)]"
  >
    <!-- Linkes Info-Panel -->
    <aside
      class="panel-left relative z-10 border-b border-accent/80 bg-white lg:border-b-0 lg:border-r lg:bg-white/20"
      class:slide-out={isRevealed}
      data-panel="left"
    >
      <div
        class="container mx-auto flex h-full max-w-none flex-col justify-around gap-10 bg-background-alt px-4 py-10 lg:bg-background-alt/60 lg:p-6 lg:pt-16 xl:px-8"
      >
        <img
          src={logoImage}
          alt="Logo"
          class="logo-shadow mx-auto mt-12 w-[238px] lg:mt-4 lg:w-[200px]"
          loading="lazy"
          decoding="async"
        />

        <div>
          <h4 id="shiatsu" class="text-pretty">
            {$t('home.shiatsu')}
          </h4>
          <!-- <p class="text-sm">
            <button class="relative" onclick={togglePopup} aria-label={showPopup ? 'less' : 'more'}
              >{showPopup ? $t('common.less') : $t('common.more')}
            </button>
          </p> -->
          <!-- <p class="prose prose-lg text-pretty leading-relaxed text-text">{$t('home.shiatsu_text')}</p> -->
        </div>
      </div>
    </aside>

    <!-- Mittlere Bild-Spalte -->
    <div class="relative min-h-[50svh] lg:min-h-[calc(100svh-8rem)]">
      <!-- Optionaler Overlay-Content in der Mitte -->
      <div class="relative z-20 flex h-full items-center justify-center">
        <!-- Lass hier bewusst wenig stehen, damit die Spalte später
             freigelegt 'wie Hintergrund' wirken kann. -->
        <HeroImage classes="relative h-full w-full block object-cover lg:hidden" />
        <!-- <Popup isOpen={showPopup} onToggle={togglePopup} /> -->
      </div>
    </div>

    <!-- Rechtes Info-Panel -->
    <aside
      class="panel-right relative z-10 border-t border-accent/80 bg-white lg:border-l lg:border-t-0 lg:bg-white/20"
      class:slide-out={isRevealed}
      data-panel="right"
    >
      <div
        class="container mx-auto flex h-full max-w-none flex-col justify-between gap-4 bg-background-alt px-4 py-10 lg:bg-background-alt/60 lg:px-6 lg:py-16 xl:px-8"
      >
        <div class="text-lg/6 lg:mt-4">
          <h5 class="font-semibold">{page.data.site.praxis}</h5>
          <p>{page.data.site.street}<br />{page.data.site.city}</p>
          <h5 class="font-semibold">{$t('common.prices')}</h5>
          <PriceList />
        </div>

        <img
          src={tanjaImage}
          alt="Foto von Tanja"
          class="mx-auto my-8 h-52 w-52 rounded-full object-cover object-[center_25%] shadow-md lg:my-4 lg:h-44 lg:w-44"
          loading="lazy"
          decoding="async"
        />

        <div class="text-right text-lg/6">
          <h5 class="font-semibold">{page.data.site.owner}</h5>
          <ul class="mb-2">
            {#each Object.values($t('common.qualifications')) as q}
              <li>{q}</li>
            {/each}
          </ul>
          <p>
            <a href="mailto:{$t('common.mail')}">{$t('common.mail')}</a>
          </p>
          <p>
            <PhoneLink />
          </p>
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

  /* #shiatsu {
    font-size: clamp(1.2rem, 2vh, 1.5rem);
    line-height: 1.33;
  } */
</style>
