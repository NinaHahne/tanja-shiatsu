<!-- Example About page -->

<script lang="ts">
  import { t } from '$lib/translations';
  import HoverDemo from '$lib/components/HoverDemo.svelte';
</script>

<svelte:head>
  <title>{$t('about.title')}</title>
</svelte:head>

<section class="relative flex flex-col items-center gap-4 pt-24">
  <h1>{$t('about.intro_text')}</h1>

  <h2>{$t('about.team')}</h2>
  <ul>
    {#each Object.values($t('about.members')) as any as { name, role }}
      <li><strong>{name}</strong> – {role}</li>
    {/each}
  </ul>
  <div class="m-4 min-h-dvh rounded bg-slate-400 p-4 text-center">
    this page is longer, so you can scroll and see how the footer is positioned
    <HoverDemo />
  </div>
</section>
