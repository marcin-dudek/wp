import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    csp: {
      mode: 'hash',
      directives: {
        'default-src': ["'self'"],
        'img-src': ["'self'", 'data:'],
        'style-src': ["'self'", "'unsafe-inline'"],
        'connect-src': ["'self'", 'https://cloudflareinsights.com', 'https://api.brevo.com'],
        'script-src': ["'self'", 'https://static.cloudflareinsights.com'],
        'worker-src': ["'self'", 'blob:'],
      }
    }
  },
  preprocess: vitePreprocess()
};
export default config;
