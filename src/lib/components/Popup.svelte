<script lang="ts">
  import { t } from '$lib/translations';

  export let isOpen = false;
  export let onToggle;
</script>

<button
  id="toggle_popup"
  class="fixed inset-0 backdrop-blur-[4px] transition-opacity duration-500 ease-in-out md:relative lg:backdrop-blur-none"
  onclick={onToggle}
  aria-label={isOpen ? 'Close Popup' : 'Open Popup'}
  class:opacity-0={!isOpen}
  class:opacity-100={isOpen}
  class:pointer-events-none={!isOpen}
  class:pointer-events-auto={isOpen}
>
  <div class="relative p-4">
    <p
      class="prose prose-lg text-pretty rounded-md border border-accent/80 bg-background-alt p-4 leading-relaxed text-text md:bg-background-alt/80"
    >
      {$t('home.shiatsu_text')}
    </p>
  </div>
</button>
