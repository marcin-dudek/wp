<script>
  import '../app.css';
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  export let data;
</script>

<div class="flex flex-col min-h-screen">
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Menu button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box z-[1] w-80 shadow">
          <li><a href="/akwarela">Akwarela</a></li>
          <li>
            <summary>Kaligrafia</summary>
            <ul>
              <li>
                <h2 class="menu-title">A. Mickiewicz</h2>
                <ul>
                  <li><a href="/kaligrafia/pan-tadeusz">Pan Tadeusz</a></li>
                  <li><a href="/kaligrafia/pan-tadeusz-2">Pan Tadeusz (wersja 2)</a></li>
                </ul>
              </li>
              <li>
                <h2 class="menu-title">W. Shakespeare</h2>
                <ul>
                  <li><a href="/kaligrafia/as-you-like-it">As You Like It</a></li>
                  <li><a href="/kaligrafia/tryptyk">Tryptyk</a></li>
                  <li><a href="/kaligrafia/sonnets">Sonnets</a></li>
                </ul>
              </li>
              <li><a href="/kaligrafia/nowy-testament">Pismo Święte Nowego Testamentu</a></li>
            </ul>
          </li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost" href="/">
        <img src="/logo-80.webp" width="40" height="60" class="h-full" alt="Wojciech Patro logo" />
        <div>
          <p class="text-2xl gap-0 leading-5 text-bold">Wojciech Patro</p>
        </div>
      </a>
    </div>
    <div class="navbar-center lg:flex">
      <ul class="menu menu-horizontal max-lg:hidden">
        <li><a href="/akwarela">Akwarela</a></li>
        <li class="dropdown dropdown-hover">
          <div tabindex="0" role="button">Kaligrafia</div>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-[1] shadow w-80">
            <li>
              <h2 class="menu-title">A. Mickiewicz</h2>
              <ul>
                <li><a href="/kaligrafia/pan-tadeusz">Pan Tadeusz</a></li>
                <li><a href="/kaligrafia/pan-tadeusz-2">Pan Tadeusz (wersja 2)</a></li>
              </ul>
            </li>
            <li>
              <h2 class="menu-title">W. Shakespeare</h2>
              <ul>
                <li><a href="/kaligrafia/as-you-like-it">As You Like It</a></li>
                <li><a href="/kaligrafia/tryptyk">Tryptyk</a></li>
                <li><a href="/kaligrafia/sonnets">Sonnets</a></li>
              </ul>
            </li>
            <li><a href="/kaligrafia/nowy-testament">Pismo Święte Nowego Testamentu</a></li>
          </ul>
        </li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    </div>
    <div class="navbar-end"></div>
  </div>

  {#key data.pathname}
    <div
      class="max-md:w-full md:max-w-screen-xl mx-auto px-4 text-center flex-grow"
      in:fly={{ easing: cubicOut, y: 10, duration: 200, delay: 300 }}
      out:fly={{ easing: cubicIn, y: -10, duration: 200 }}
    >
      <slot />
    </div>
  {/key}

  <footer class="text-center p-4 mt-8">
    <p>
      Copyright &copy; 2024 <a href="https://magickwings.com">Magick Wings</a>. All rights reserved.
    </p>
  </footer>
</div>
