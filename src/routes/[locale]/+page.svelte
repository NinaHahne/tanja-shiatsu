<!-- Homepage / Landing page / index -->
<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('home.title')}</title>
</svelte:head>

<section class="relative flex h-dvh flex-col items-center justify-center gap-4 px-4 py-24 text-center">
  <div class="animate-float relative text-[3rem]">🌒</div>
  <h1 class="mt-4 text-[2.5rem] font-bold text-text-base">{$t('home.headline')}</h1>
  <p class="text-text mt-2 text-[1.2rem]">{$t('home.description')}</p>
</section>
