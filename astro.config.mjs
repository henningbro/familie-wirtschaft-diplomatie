import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Für GitHub Pages: "site" auf https://<github-name>.github.io setzen.
// "base" ist der Name des Repositories (entfällt bei einem <name>.github.io-Repo).
const base = '/familie-wirtschaft-diplomatie';

// Dev-Server: http://localhost:<port>/ auf die Startseite unter "base" umleiten.
// (`astro preview` ignoriert eigene Vite-Plugins – dort öffnet `--open` direkt die richtige Adresse.)
const umleitungZurBasis = {
  name: 'umleitung-zur-basis',
  configureServer(server) {
    // Astro setzt seine Base-Prüfung nachträglich an den Anfang und antwortet auf "/" mit 404.
    // Die zurückgegebene Funktion läuft danach – so landet die Umleitung davor.
    return () => server.middlewares.stack.unshift({ route: '', handle: umleiten });
  },
};

function umleiten(req, res, next) {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(302, { Location: `${base}/` });
    return res.end();
  }
  next();
}

export default defineConfig({
  site: 'https://henningbro.github.io',
  base,
  integrations: [mdx()],
  vite: { plugins: [umleitungZurBasis] },
});
