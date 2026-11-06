# Familie, Wirtschaft und Diplomatie

Blog über Deutschland in Zahlen. Gebaut mit Astro und Observable Plot,
veröffentlicht über GitHub Pages (Push auf `main` → automatischer Deploy).

## Technik (Kurzüberblick)

- Artikel: `src/pages/artikel/<name>.mdx`
- Daten: `src/data/<name>.json`
- Diagramme: `<Diagramm typ="…" daten={…} x="…" y="…" farbe="…" titel="…" quelle="…" />`
  (siehe `src/components/Diagramm.astro`)
- Rubriken: Familie (Gold), Wirtschaft (Rot), Diplomatie (Schwarz)
- Suche: Pagefind (`src/components/Suche.astro`), Index entsteht in `npm run build`;
  funktioniert nur mit `npm run build && npm run preview`, nicht im Dev-Server
- Vor jedem Commit: `npm run build` muss fehlerfrei durchlaufen.

---

# Richtlinien für Artikel

## Zielgruppe und Ton
Die Artikel sollen sind gedacht für deutsche Staatsbürger bzw. Wahlberechtigte.
Der Ton soll neutral sein. Es geht um Fakten. Es soll so objektiv wie möglich gearbeitet werden.

## Aufbau eines Artikels
Die Artikel bestehen in der Regel aus Zahlen, Graphen und Text.
Jede Quelle soll mit einem klickbaren Link verlinkt werden.
Die Texte sollen kurz und prägnant sein.
Der Text beschreibt allgemein, was ein Diagramm darstellt (Thema, Zeitraum,
Maßeinheit). Er zählt keine einzelnen Zahlen auf – weder solche aus dem Diagramm
noch zusätzliche Werte wie Vorjahresveränderungen oder Gesamtsummen.

Jeder Artikel soll mit einem Erstellungsdatum versehen werden.
Alle Anpassungen eines Tages müssen zusammengefasst dokumentiert sein.
Anpassungen am Tag der Erstellung werden nicht aufgeführt – an diesem Tag gilt
der Artikel als erstellt. Erst ab dem Folgetag bekommt jeder Tag mit Änderungen
genau einen zusammengefassten Eintrag (Frontmatter `aenderungen`: `datum`, `beschreibung`).


## Daten und Quellen
Grundsätzlich sind alle Quellen erlaubt. 
Abrufdatum der Quelle muss hinterlegt werden.
Wenn mehrere zur Auswahl stehen soll die seriösere bevorzugt werden.

## Sprache und Formales
Die Sprache, verwendeten Einheiten und Darstellungen sollen sich an dem orientieren, was im Deutschland üblich ist.

## Was nie passieren soll
Graphen und Bilder von anderen Quellen importieren. 
Jeder Graph soll selber generiert werden. 
Nur die Zahlen sollen übernommen werden
