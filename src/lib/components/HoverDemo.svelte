<script lang="ts">
  let clicked = false;
</script>

<div class="space-y-4 p-8 text-center">
  <h1 class="text-2xl font-bold">Hover Demo</h1>

  <button
    onclick={() => (clicked = !clicked)}
    class="
      rounded bg-blue-600 px-6 py-3 font-semibold text-white
      transition
      hoverable:hover:bg-blue-800
      not-hoverable:bg-green-600
      not-hoverable:active:bg-green-800
    "
  >
    {clicked ? 'Clicked!' : 'Hover or Tap Me'}
  </button>

  <p class="text-sm text-gray-500">
    On hoverable devices, this button changes to dark blue on hover.<br />
    On touch-only devices, it is green and darkens on tap.
  </p>
</div>
