<!-- Main entry page. This page lists all available locales and links to them. Necessary for SvelteKit to find routes and translations. -->

<!-- Runs on the server/module scope -->
<script lang="ts" module>
  // You can add route-level logic here in the future
  export const load = async () => {
    return {}; // maybe load data or redirect conditionally in the future
  };
  const locales = ['de', 'en'];
</script>

<!-- Runs in the component context (browser) -->
<script lang="ts">
  import { onMount } from 'svelte';
  // redirect to preferred locale:
  onMount(() => {
    const preferred = navigator.language.startsWith('de') ? 'de' : 'en';
    window.location.href = `/${preferred}`;
  });
</script>

<section class="relative flex min-h-[100dvh] flex-col items-center gap-4 pt-24">
  <ul class="hidden">
    {#each locales as locale}
      <li>
        <a href="/{locale}/">{locale}</a>
      </li>
    {/each}
  </ul>
  <p>Redirecting to your language preference…</p>
</section>
