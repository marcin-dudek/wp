<script>
  import Carousel from 'svelte-carousel';

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
  <title>Watercolor</title>
  <meta name="description" content="Paintings painted with watercolors by Wojciech Patro." />
</svelte:head>

<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h3 class="mb-4 text-4xl tracking-tight font-extrabold">Watercolor</h3>

  <Carousel autoplay autoplayDuration={5000}>
    {#each files as file, i}
      <div id={(i + 1).toString()} class="carousel-item w-full">
        {#if i == 0}
          <img class="mx-auto" src={file} alt="Watercolor no {i}" />
        {:else}
          <img class="mx-auto" loading="lazy" src={file} alt="Watercolor no {i}" />
        {/if}
      </div>
    {/each}
  </Carousel>
</div>
