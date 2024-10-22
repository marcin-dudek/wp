<script>
  import Carousel from '$lib/Carousel.svelte';

  let files = [
    '/akwarela/w101.webp',
    '/akwarela/w102.webp',
    '/akwarela/w103.webp',
    '/akwarela/w105.webp',
    '/akwarela/w106.webp',
    '/akwarela/w107.webp',
    '/akwarela/w108.webp',
    '/akwarela/w109.webp',
    '/akwarela/w110.webp',
    '/akwarela/w111.webp',
    '/akwarela/w112.webp',
    '/akwarela/w113.webp',
    '/akwarela/w114.webp',
    '/akwarela/w115.webp',
    '/akwarela/w116.webp',
    '/akwarela/w117.webp',
    '/akwarela/w118.webp',
    '/akwarela/w119.webp'
  ];
</script>

<svelte:head>
  <title>Akwarela</title>
  <meta name="description" content="Obrazy malowane akwarelą przez Wojciecha Patro." />
</svelte:head>

<Carousel title="Akwarela" bind:images={files} />
