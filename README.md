# Familie, Wirtschaft und Diplomatie

Ein Blog über Deutschland in Zahlen – gebaut mit [Astro](https://astro.build) und
[Observable Plot](https://observablehq.com/plot/).

## Lokal starten

    npm install
    npm run dev

Danach im Browser: http://localhost:4321/familie-wirtschaft-diplomatie/

## Neuen Artikel schreiben

1. Daten als JSON in `src/data/` ablegen.
2. Neue Datei `src/pages/artikel/<name>.mdx` anlegen (eine bestehende als Vorlage kopieren).
3. Kopfbereich ausfüllen: `titel`, `beschreibung`, `kategorie` (Familie | Wirtschaft | Diplomatie), `datum`.
4. Diagramm einbauen:

       <Diagramm typ="linie" daten={meineDaten} x="jahr" y="wert"
                 farbe="rot" titel="…" quelle="…" />

   `typ`: `linie`, `balken` oder `balken-horizontal` · `farbe`: `schwarz`, `rot` oder `gold`

## Auf GitHub Pages veröffentlichen

1. In `astro.config.mjs` bei `site` den eigenen GitHub-Namen eintragen.
   `base` muss dem Repository-Namen entsprechen.
2. Repository auf GitHub anlegen und den Code auf den Branch `main` pushen.
3. Auf GitHub: **Settings → Pages → Source: „GitHub Actions“** wählen.
4. Jeder Push auf `main` baut und veröffentlicht die Seite automatisch
   (`.github/workflows/deploy.yml`).
