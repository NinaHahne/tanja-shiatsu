<script lang="ts">
  let {
    src = '/images/Patagonien_0421.webp',
    alt = 'Landscape',
    classes = '', // replaces default classes if provided
  } = $props();

  // default classes, only applied if no custom classes are provided
  const defaultClasses = 'fixed inset-0 hidden h-full w-full object-cover lg:block';
  const appliedClasses = classes || defaultClasses;
</script>

<img {src} {alt} class={appliedClasses} decoding="async" loading="eager" />
