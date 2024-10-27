<script>
  import Carousel from '$lib/Carousel.svelte';

  export let data;
</script>

<svelte:head>
  <title>Kaligrafia</title>
  <meta name="description" content="Książki pisane kaligrafią przez Wojciecha Patro." />
</svelte:head>

<Carousel title={data.title} images={data.images} />
