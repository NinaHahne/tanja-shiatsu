<!-- Imprint page -->

<script lang="ts">
  import { t } from '$lib/translations';
  import HeroImage from '$lib/components/HeroImage.svelte';
</script>

<svelte:head>
  <title>{$t('imprint.title')}</title>
</svelte:head>

<HeroImage classes="fixed inset-0 h-full w-full object-cover lg:hidden" />

<section id="imprint" class="relative flex min-h-dvh flex-col items-center gap-4 bg-background-alt/80 px-4 py-24">
  <div
    class="max-w-3xl text-text
         [&>a:visited]:text-current [&>a]:text-current [&>a]:underline [&>h2]:mb-4
         [&>h2]:mt-10 [&>h3]:mb-2
         [&>h3]:mt-6
         [&>h3]:font-semibold [&>p]:mt-3 [&>p]:text-lg [&>p]:leading-relaxed"
  >
    <h1 class="mb-8 text-text">{$t('imprint.headline')}</h1>
    {@html $t('imprint.content')}
  </div>
</section>
