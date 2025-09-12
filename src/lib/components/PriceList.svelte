<script lang="ts">
  import { t } from '$lib/translations';

  type PriceItem = { minutes: number; price: number };

  const {
    items = [
      { minutes: 60, price: 80 },
      { minutes: 75, price: 100 },
      { minutes: 90, price: 120 },
    ],
    minutesUnitKey = 'common.minutes', // z.B. "Min" / "min"
    className = 'w-40',
  } = $props<{
    items?: PriceItem[];
    minutesUnitKey?: string;
    className?: string;
  }>();

  const minutesUnit: string = $t(minutesUnitKey) as string;
</script>

<ul class={className}>
  {#each items as item}
    <li class="flex justify-between gap-1">
      <span>{item.minutes} {minutesUnit}</span>
      <span>{item.price} €</span>
    </li>
  {/each}
</ul>
