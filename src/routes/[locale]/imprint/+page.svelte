<!-- Imprint page -->

<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('imprint.title')}</title>
</svelte:head>

<section class="relative flex flex-col items-center gap-4 px-4 py-24">
  <h1 class="text-text-base">{$t('imprint.headline')}</h1>
  <p class="text-text mt-2 text-[1.2rem] italic">{$t('common.soon')}</p>
</section>
