<!-- Homepage / Landing page / index -->
<script lang="ts">
  import { t } from '$lib/translations';
  import { replaceVariables } from '$lib/translations';

  const docsLink = '<a href="https://svelte.dev/docs/kit" target="_blank">svelte.dev/docs/kit</a>';
</script>

<svelte:head>
  <title>{$t('home.title')}</title>
</svelte:head>

<section class="relative flex flex-col items-center gap-4 pt-24 text-center">
  <h1>{$t('home.intro_text')}</h1>
  <!-- @html is a special Svelte syntax to render HTML, see https://svelte.dev/docs/svelte/@html -->
  <!-- <p>{@html replaceVariables($t('home.docs'), { link: docsLink })}</p> -->
</section>
