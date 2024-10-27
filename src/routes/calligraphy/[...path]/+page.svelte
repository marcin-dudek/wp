<script>
  import Carousel from '$lib/Carousel.svelte';

  export let data;
</script>

<svelte:head>
  <title>Calligraphy</title>
  <meta name="description" content="Books written in calligraphy by Wojciech Patro." />
</svelte:head>

<Carousel title={data.title} images={data.images} />
