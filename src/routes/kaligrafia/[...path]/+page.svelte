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

<div role="tablist" class="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" checked />
  <div
    role="tabpanel"
    class="max-w-xl w-full tab-content bg-base-100 border-base-300 rounded-box p-6"
  >
    <div class="carousel carousel-center rounded-box">
      {#each files as file, i}
        <div id="item{i + 1}" class="carousel-item w-full">
          {#if i == 0}
            <img class="w-full" src={file} alt="akwarela nr {i}" />
          {:else}
            <img class="w-full" loading="lazy" src={file} alt="akwarela nr {i}" />
          {/if}
        </div>
      {/each}
    </div>

    <div class="join flex justify-center w-full">
      {#each files as file, i}
        <a href="#item{i + 1}" class="join-item btn btn-xs">{i + 1}</a>
      {/each}
    </div>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" />
  <div
    role="tabpanel"
    class="max-w-xl w-full tab-content bg-base-100 border-base-300 rounded-box p-6"
  >
    <div class="carousel carousel-center rounded-box">
      {#each files as file, i}
        <div id="item{i + 1}" class="carousel-item w-full">
          {#if i == 0}
            <img class="w-full" src={file} alt="akwarela nr {i}" />
          {:else}
            <img class="w-full" loading="lazy" src={file} alt="akwarela nr {i}" />
          {/if}
        </div>
      {/each}
    </div>

    <div class="join flex justify-center w-full">
      {#each files as file, i}
        <a href="#item{i + 1}" class="join-item btn btn-xs">{i + 1}</a>
      {/each}
    </div>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
  <div
    role="tabpanel"
    class="max-w-xl w-full tab-content bg-base-100 border-base-300 rounded-box p-6"
  >
    <div class="carousel carousel-center rounded-box">
      {#each files as file, i}
        <div id="item{i + 1}" class="carousel-item w-full">
          {#if i == 0}
            <img class="w-full" src={file} alt="akwarela nr {i}" />
          {:else}
            <img class="w-full" loading="lazy" src={file} alt="akwarela nr {i}" />
          {/if}
        </div>
      {/each}
    </div>

    <div class="join flex justify-center w-full">
      {#each files as file, i}
        <a href="#item{i + 1}" class="join-item btn btn-xs">{i + 1}</a>
      {/each}
    </div>
  </div>
</div>
