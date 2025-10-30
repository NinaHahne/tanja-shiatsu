<!-- Global layout for all pages -->
<script lang="ts">
  import { locale, t } from '$lib/translations';
  import { page } from '$app/state';
  import { onDestroy, onMount } from 'svelte';
  import '../styles/app.css';

  import HeroImage from '$lib/components/HeroImage.svelte';

  let lang = $state($locale);

  // Function to toggle the language
  const toggleLocale = () => {
    const newLocale = lang === 'en' ? 'de' : 'en';
    const currentPath = page.url.pathname.replace(`/${lang}`, `/${newLocale}`);
    window.location.href = currentPath; // Forces a full reload to apply the new locale
  };

  const headerLinks = $t('common.header_links');
  // when using CMS:
  // let headerLinks: { key: string; name: string }[] = $state($t('common.header_links'));

  let { children } = $props();

  const getScrollbarWidth = () => {
    // Scrollbar-Breite ermitteln
    const e = document.createElement('div');
    (e.style.visibility = 'hidden'), (e.style.width = '100px'), document.body.append(e);
    const t = e.offsetWidth;
    e.style.overflow = 'scroll';
    const o = document.createElement('div');
    (o.style.width = '100%'), e.append(o);
    const d = o.offsetWidth;
    e.remove();
    document.body.style.setProperty('--scrollbar-width', t - d + 'px');
  };

  let container: HTMLElement;
  let resizeObserver: ResizeObserver;
  let isBodyOverflowing = $state(false);

  const checkBodyOverflow = () => {
    isBodyOverflowing = document.body.scrollHeight > window.innerHeight;
  };

  let showMenu: boolean = $state(false);
  let showNavigation = $state(false);

  const toggleMenu = () => {
    // Check screen size before toggling
    if (window.matchMedia('(max-width: 1023px)').matches) {
      showMenu = !showMenu;
    }
  };

  const toggleMenuIfOpen = () => {
    !showMenu || toggleMenu();
  };

  onMount(() => {
    getScrollbarWidth();

    resizeObserver = new ResizeObserver(() => {
      // console.log("Layout changed!");

      // Handle layout changes here
      checkBodyOverflow();
    });
    if (container) {
      resizeObserver.observe(container);
    }

    // when using CMS, assign headerLinks here

    showNavigation = true;
  });

  onDestroy(() => {
    // console.log("layout onDestroy");
    resizeObserver?.disconnect();
  });
</script>

<svelte:head>
  <title>{$t('common.title')}</title>

  <meta name="description" content="{$t('common.description')} – {$t('home.shiatsu')}" />
  <meta property="og:image" content="/images/social-preview.jpg" />
  <meta property="og:url" content="https://tanja-shiatsu.de" />
  <meta property="og:type" content="website" />
  <!-- Optional (für X, Discord, Threads etc.) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="/images/social-preview.jpg" />

  <link rel="canonical" href="https://tanja-shiatsu.de" />
  <link rel="alternate" href="https://tanja-shiatsu.de/de" hreflang="de" />
  <link rel="alternate" href="https://tanja-shiatsu.de/en" hreflang="en" />
</svelte:head>

<div
  bind:this={container}
  class="relative flex min-h-dvh w-full flex-col justify-between bg-background-alt/60 text-text"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
  <HeroImage />

  <header class="fixed top-0 z-50 flex h-16 w-full justify-between p-4">
    <nav class="relative flex h-full items-center justify-center gap-4">
      <!-- {#each Object.entries(headerLinks ?? {}) as [key, name = ''] (key)}
        {@const url = key === 'home' ? '' : `${key}/`}
        {@const fullUrl = `/${lang}/${url}`}
        {@const isActive = fullUrl === page.url.pathname}
        <a
          href={fullUrl}
          class:active={isActive}
          class:bg-button-active={isActive}
          class:hoverable:hover:bg-button-hover={!isActive}
          class="rounded-md border border-button-hover bg-button px-3 py-1 font-medium text-link underline-offset-4 shadow-[0_3px_6px] shadow-dark-blue/25 transition hoverable:hover:text-link hoverable:hover:shadow-dark-blue/40"
          class:hidden={isActive}
        > -->
      <!-- 
            if colors should invert:          
            class:text-button-hover={!isActive}
            class:text-button={isActive} 
            class:hoverable:hover:text-button={!isActive}
          -->
      <!-- {name}
        </a>
      {/each} -->
      <a href={`/${lang}/`} class="btn-shadow hoverable:hover:btn-shadow-hover">
        <img
          draggable="false"
          src="/images/yarrow-leaf.png"
          alt="Home Icon"
          class="pointer-events-none w-[38px] translate-y-[4px]"
        />
      </a>
    </nav>
    <button
      onclick={toggleLocale}
      class="btn-shadow hoverable:hover:btn-shadow-hover flex h-8 w-8 items-center justify-center rounded-[50%] bg-button p-2 font-medium text-link duration-200 hoverable:hover:bg-button-hover hoverable:hover:text-button"
      >{lang === 'en' ? 'DE' : 'EN'}
    </button>
  </header>

  <main class="relative flex flex-col">
    {@render children()}
  </main>

  <footer class="relative bottom-0 z-50 w-full">
    <div
      class="flex min-h-16 items-end justify-between gap-2 border-t border-accent/80 bg-background-nav/80 p-4 md:items-center"
    >
      <div class="flex flex-wrap gap-2">
        <a class="text-base text-link-contrast" href="/{$locale}/imprint">{$t('common.imprint_privacy')}</a>
      </div>
      <p class="whitespace-nowrap text-right text-base text-link-contrast">&copy; 2025 {page.data.site.owner}</p>
    </div>
  </footer>
</div>
