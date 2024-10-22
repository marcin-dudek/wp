<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  $: current = $page.url.hash === '' ? 1 : Number($page.url.hash.substring(1));

  // @ts-ignore
  onMount(() => {
    let x = setInterval(() => {
      let c = (current % images.length) + 1;
      goto('#' + c);
    }, 5000);

    return () => clearInterval(x);
  });

  export let images;
  export let title;
</script>

<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h3 class="mb-4 text-4xl tracking-tight font-extrabold">{title}</h3>

  <div class="carousel carousel-center rounded-box">
    {#each images as file, i}
      <div id={(i + 1).toString()} class="carousel-item w-full">
        {#if i == 0}
          <img class="mx-auto" src={file} alt="akwarela nr {i}" />
        {:else}
          <img class="mx-auto" loading="lazy" src={file} alt="akwarela nr {i}" />
        {/if}
      </div>
    {/each}
  </div>

  <div class="justify-center flex flex-wrap gap-2">
    {#each images as file, i}
      <a
        href="#{i + 1}"
        class="btn btn-xs {current === i + 1 ? 'btn-active' : ''}"
        on:click={() => goto('#' + (i + 1))}
        >{i + 1}
      </a>
    {/each}
  </div>
</div>
