<script>
  import Carousel from 'svelte-carousel';

  export let data;
</script>

<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h3 class="mb-4 text-4xl tracking-tight font-extrabold">{data.title}</h3>

  {#if data.images.length > 0}
    <Carousel autoplay autoplayDuration={5000}>
      {#each data.images as file, i}
        <div id={(i + 1).toString()} class="carousel-item w-full">
          {#if i == 0}
            <img class="mx-auto" src={file} alt="akwarela nr {i}" />
          {:else}
            <img class="mx-auto" loading="lazy" src={file} alt="akwarela nr {i}" />
          {/if}
        </div>
      {/each}
    </Carousel>
  {/if}
</div>
