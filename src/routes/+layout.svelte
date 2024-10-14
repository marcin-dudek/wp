<script>
  import '../app.css';
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  let dropdownopen = false;

  export let data;
</script>

<div class="flex flex-col min-h-screen">
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
        <ul
          tabindex="0"
          class="menu-dropdown menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a href="/akwarela">Akwarela</a></li>
          <li>
            <summary>Kaligrafia</summary>
            <ul class="p-2 dropdown-hover">
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
              <li><a href="/nowy-testament">Pismo Święte Nowego Testamentu</a></li>
            </ul>
          </li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost" href="/">
        <img
          src="./favicon-48x48.png"
          width="46"
          height="46"
          class="h-full"
          alt="Wojciech Patro logo"
        />
        <div>
          <p class="text-2xl gap-0 leading-5 text-bold">Wojciech Patro</p>
        </div></a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/akwarela">Akwarela</a></li>
        <li>
          <details>
            <summary>Kaligrafia</summary>
            <ul class="p-2 w-80">
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
          </details>
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
      <a href="/privacy-policy">Privacy Policy</a>
    </p>
  </footer>
</div>
