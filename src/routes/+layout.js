// src/routes/+layout.js
import '$lib/i18n' // Import to initialize. Important :)
import { waitLocale } from 'svelte-i18n'

export const load = async ({ url }) => {
  await waitLocale();

  const { pathname } = url;

  return {
    pathname
  };
};