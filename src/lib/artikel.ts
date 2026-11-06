import { pruefeKategorien, type Kategorie } from './kategorien';

export type Artikel = {
  slug: string;
  titel: string;
  beschreibung: string;
  datum: string;
  kategorien: Kategorie[];
};

// Nicht „eager“: das Artikel-Layout nutzt diese Liste selbst, ein sofortiger Import
// der MDX-Dateien (die wiederum das Layout importieren) wäre zirkulär.
const dateien = import.meta.glob<Record<string, unknown>>('../pages/artikel/*.mdx', { import: 'frontmatter' });

/** Alle Artikel, neueste zuerst. */
export async function ladeArtikel(): Promise<Artikel[]> {
  const artikel = await Promise.all(
    Object.entries(dateien).map(async ([pfad, lade]) => {
      const fm = await lade();
      const slug = pfad.split('/').pop()!.replace('.mdx', '');
      return {
        slug,
        titel: fm.titel as string,
        beschreibung: fm.beschreibung as string,
        datum: fm.datum as string,
        kategorien: pruefeKategorien(fm.kategorien, slug),
      };
    }),
  );
  return artikel.sort((a, b) => +new Date(b.datum) - +new Date(a.datum));
}

/** Andere Artikel mit mindestens einer gemeinsamen Kategorie – meiste Überschneidungen zuerst, dann neueste. */
export function verwandteArtikel(alle: Artikel[], slug: string, kategorien: string[]): Artikel[] {
  return alle
    .filter((a) => a.slug !== slug)
    .map((a) => ({ a, gemeinsam: a.kategorien.filter((k) => kategorien.includes(k)).length }))
    .filter(({ gemeinsam }) => gemeinsam > 0)
    .sort((x, y) => y.gemeinsam - x.gemeinsam || +new Date(y.a.datum) - +new Date(x.a.datum))
    .map(({ a }) => a);
}
