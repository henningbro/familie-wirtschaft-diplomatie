import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Für GitHub Pages: "site" auf https://<github-name>.github.io setzen.
// "base" ist der Name des Repositories (entfällt bei einem <name>.github.io-Repo).
export default defineConfig({
  site: 'https://DEIN-GITHUB-NAME.github.io',
  base: '/familie-wirtschaft-diplomatie',
  integrations: [mdx()],
});
