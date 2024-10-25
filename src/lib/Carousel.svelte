<script>
  import Carousel from 'svelte-light-carousel';

  $: slides = Array.from(images, (v) => {
    return { title: v };
  });

  /** @type {Array.<string>} */
  export let images;
  /** @type {string} */
  export let title;
</script>

<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h3 class="mb-4 text-4xl tracking-tight font-extrabold">{title}</h3>

  <Carousel {slides} oneAtTime={true} autoPlay={5}>
    <div slot="slide" let:slide>
      <div class="carousel-item">
        <img src={slide.title} alt="Image for {title}" class="mx-auto" />
      </div>
    </div>

    <div
      slot="dots"
      let:dots
      let:a11y
      let:scrollTo
      data-progress
      class="justify-center flex flex-wrap py-4 gap-1"
      {...a11y}
    >
      {#each dots as { a11y }, i}
        <button
          {...a11y}
          on:click={() => scrollTo(i)}
          class={'btn btn-sm btn-circle aria-[selected="true"]:bg-primary'}>{i + 1}</button
        >
      {/each}
    </div>
  </Carousel>
</div>
