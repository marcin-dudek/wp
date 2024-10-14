<script>
  let files = [
    './img_a/w101.webp',
    './img_a/w102.webp',
    './img_a/w103.webp',
    './img_a/w105.webp',
    './img_a/w106.webp',
    './img_a/w107.webp',
    './img_a/w108.webp',
    './img_a/w109.webp',
    './img_a/w110.webp',
    './img_a/w111.webp',
    './img_a/w112.webp',
    './img_a/w113.webp',
    './img_a/w114.webp',
    './img_a/w115.webp',
    './img_a/w116.webp',
    './img_a/w117.webp',
    './img_a/w118.webp',
    './img_a/w119.webp'
  ];
</script>

<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h3 class="mb-4 text-4xl tracking-tight font-extrabold">Akwarela</h3>

  <div class="carousel carousel-center rounded-box">
    {#each files as file, i}
      <div id="item{i + 1}" class="carousel-item w-full">
        {#if i == 0}
          <img class="mx-auto" src={file} alt="akwarela nr {i}" />
        {:else}
          <img class="mx-auto" loading="lazy" src={file} alt="akwarela nr {i}" />
        {/if}
      </div>
    {/each}
  </div>

  <div class="justify-center flex flex-wrap gap-2">
    {#each files as file, i}
      <a href="#item{i + 1}" class="btn btn-xs">{i + 1}</a>
    {/each}
  </div>
</div>
