<script lang="js">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let current = $derived($page.url.hash === '' ? 1 : Number($page.url.hash.substring(1)));

  /** @type {NodeJS.Timeout} */
  let interval;

  const changeImage = () => {
    if (images.length > 0) {
      goto(`#${(current % images.length) + 1}`);
    }
  };

  const handleClick = () => {
    clearInterval(interval);
    interval = setInterval(changeImage, 5000);
    changeImage();
  };

  onMount(() => {
    interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval);
  });

  let { /** @type {Array.<string>} */ images, /** @type {string} */ title } = $props();
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
        onclick={handleClick}
        >{i + 1}
      </a>
    {/each}
  </div>
</div>
