<script>
  import Carousel from '$lib/Carousel.svelte';

  export let data;
</script>

<svelte:head>
  <title>Kaligrafia</title>
  <meta name="description" content="Książki pisane kaligrafią przez Wojciecha Patro." />
</svelte:head>

<Carousel bind:title={data.title} bind:images={data.images} />
