import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

register('en', () => import('./lang/en.json'))
register('pl', () => import('./lang/pl.json'))

let locale = 'en';

if (browser) {
  let lang = localStorage.getItem('lang');
  if (lang === null) {
    locale = window.navigator.language.split('-')[0];
  } else if (lang === 'en' || lang === 'pl') {
    locale = lang;
  }
}

init({
  fallbackLocale: 'pl',
  initialLocale: locale,
})