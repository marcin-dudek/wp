<script>
  import { page } from '$app/stores';

  export let data;

  $: image = $page.url.hash;
</script>

<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h3 class="mb-4 text-4xl tracking-tight font-extrabold">{data.title}</h3>

  <div class="carousel carousel-center rounded-box">
    {#each data.images as file, i}
      <div id={(i + 1).toString()} class="carousel-item w-full">
        {#if i == 0}
          <img class="mx-auto" src={file} alt="Obraz nr {i + 1}" />
        {:else}
          <img class="mx-auto" loading="lazy" src={file} alt="Obraz nr {i + 1}" />
        {/if}
      </div>
    {/each}
  </div>

  <div class="justify-center flex flex-wrap gap-2">
    {#each data.images as file, i}
      <a
        href="#{i + 1}"
        class="btn btn-xs {image === `#${i + 1}` || (image === '' && i === 0) ? 'btn-active' : ''}" 
        >{i + 1}</a>
    {/each}
  </div>
</div>
