<!-- Global layout for all pages -->
<script lang="ts">
  import { locale, t } from '$lib/translations';
  import { page } from '$app/state';
  import { onDestroy, onMount } from 'svelte';
  import '../styles/app.css';

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
</svelte:head>

<div
  bind:this={container}
  class="relative flex min-h-dvh w-full flex-col justify-between bg-background text-text"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
  <header class="fixed top-0 z-50 flex h-16 w-full justify-between p-4">
    <nav class="relative flex h-full items-center justify-center gap-4">
      {#each Object.entries(headerLinks ?? {}) as [key, name = ''] (key)}
        {@const url = key === 'home' ? '' : `${key}/`}
        {@const fullUrl = `/${lang}/${url}`}
        {@const isActive = fullUrl === page.url.pathname}
        <a
          href={fullUrl}
          class:active={isActive}
          class:bg-button-active={isActive}
          class:text-link={isActive}
          class:text-link-active={!isActive}
          class:hoverable:hover:bg-link-hover={!isActive}
          class="rounded-md bg-button px-3 py-1 font-medium underline-offset-4 shadow-sm transition active:bg-button-active hoverable:hover:text-link-contrast"
          >{name}</a
        >
      {/each}
    </nav>
    <button
      onclick={toggleLocale}
      class="flex h-8 w-8 items-center justify-center rounded-[50%] bg-button p-2 font-medium text-link-active shadow-sm transition active:bg-button-active hoverable:hover:bg-button-hover hoverable:hover:text-link-contrast"
      >{lang === 'en' ? 'DE' : 'EN'}</button
    >
  </header>

  <main class="relative flex flex-col">
    {@render children()}
  </main>

  <footer class="relative">
    <div class="flex items-end justify-between gap-2 bg-background-nav p-4">
      <div class="flex flex-wrap gap-2">
        <a href="/{$locale}/imprint">{$t('common.imprint')}</a>
        <a href="/{$locale}/privacy">{$t('common.privacy')}</a>
      </div>
      <p class="whitespace-nowrap text-right text-base text-text-dark">&copy; 2025 Tanja Schochow</p>
    </div>
  </footer>
</div>
