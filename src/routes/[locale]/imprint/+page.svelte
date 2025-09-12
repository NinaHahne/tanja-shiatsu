<!-- Imprint page -->

<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('imprint.title')}</title>
</svelte:head>

<section class="relative flex min-h-dvh flex-col items-center gap-4 bg-background-alt/80 px-4 py-24">
  <h1 class="text-text">{$t('imprint.headline')}</h1>
  <p class="mt-2 text-[1.2rem] italic text-text">{$t('common.soon')}</p>
</section>
