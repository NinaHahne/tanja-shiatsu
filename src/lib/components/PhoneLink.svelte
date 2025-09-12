<script lang="ts">
  // default values:
  let { display = '+49 157 580 40147', href = '+4915758040147' } = $props();
</script>

<a
  href={'tel:' + href}
  class="text-link underline underline-offset-4 transition active:text-link-active hoverable:hover:text-link-hover"
>
  {display}
</a>
