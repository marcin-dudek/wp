<script>
  import '../app.css';
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  import { _, locale, dictionary } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  export let data;

  $: isPolish = $locale === 'pl';

  const changeLanguage = (e) => {
    let old = $locale;

    if (e.target.checked) {
      locale.set('pl');
      localStorage.setItem('lang', 'pl');
    } else {
      locale.set('en');
      localStorage.setItem('lang', 'en');
    }

    if (data.pathname !== '/') {
      let urlName = getUrl(old);
      goto($dictionary[$locale]['url'][urlName]);
    }
  };

  const getUrl = (/** @type {string } */ lang) => {
    // @ts-ignore
    for (let key in $dictionary[lang]['url']) {
      // @ts-ignore
      if ($dictionary[lang]['url'][key] === data.pathname) {
        return key;
      }
    }
  };
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
          <li><a href={$_('url.watercolor')}>{$_('title.watercolor')}</a></li>
          <li>
            <summary>{$_('title.calligraphy')}</summary>
            <ul>
              <li>
                <h2 class="menu-title">A. Mickiewicz</h2>
                <ul>
                  <li><a href={$_('url.pt')}>{$_('title.pt')}</a></li>
                  <li><a href={$_('url.pt2')}>{$_('title.pt2')}</a></li>
                </ul>
              </li>
              <li>
                <h2 class="menu-title">W. Shakespeare</h2>
                <ul>
                  <li>
                    <a href={$_('url.asyoulikeit')}>{$_('title.asyoulikeit')}</a>
                  </li>
                  <li>
                    <a href={$_('url.tryptych')}>{$_('title.tryptych')}</a>
                  </li>
                  <li>
                    <a href={$_('url.sonnets')}>{$_('title.sonnets')}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href={$_('url.nt')}>{$_('title.nt')}</a>
              </li>
            </ul>
          </li>
          <li><a href={$_('url.contact')}>{$_('title.contact')}</a></li>
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
        <li><a href={$_('url.watercolor')}>{$_('title.watercolor')}</a></li>
        <li class="dropdown dropdown-hover">
          <div tabindex="0" role="button">{$_('title.calligraphy')}</div>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-[1] shadow w-80">
            <li>
              <h2 class="menu-title">A. Mickiewicz</h2>
              <ul>
                <li><a href={$_('url.pt')}>{$_('title.pt')}</a></li>
                <li><a href={$_('url.pt2')}>{$_('title.pt2')}</a></li>
              </ul>
            </li>
            <li>
              <h2 class="menu-title">W. Shakespeare</h2>
              <ul>
                <li>
                  <a href={$_('url.asyoulikeit')}>{$_('title.asyoulikeit')}</a>
                </li>
                <li>
                  <a href={$_('url.tryptych')}>{$_('title.tryptych')}</a>
                </li>
                <li>
                  <a href={$_('url.sonnets')}>{$_('title.sonnets')}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={$_('url.nt')}>{$_('title.nt')}</a>
            </li>
          </ul>
        </li>
        <li><a href={$_('url.contact')}>{$_('title.contact')}</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <label class="flex cursor-pointer gap-2">
        EN
        <input
          type="checkbox"
          bind:checked={isPolish}
          class="toggle"
          on:change={changeLanguage}
          aria-label="Language switcher"
        />
        PL
      </label> -->
      <label class="btn btn-ghost swap swap-rotate">
        <input type="checkbox" bind:checked={isPolish} on:change={changeLanguage} />
        <div class="swap-on">PL</div>
        <div class="swap-off">EN</div>
      </label>
    </div>
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
