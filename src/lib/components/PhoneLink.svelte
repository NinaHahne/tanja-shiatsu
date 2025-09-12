<script lang="ts">
  // default values:
  let { display = '+49 157 580 40147', href = '+4915758040147' } = $props();
</script>

<a href={'tel:' + href} class="">
  {display}
</a>
