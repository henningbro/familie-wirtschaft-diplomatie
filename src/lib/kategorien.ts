/**
 * Alle erlaubten Kategorien. Ein Artikel nennt im Frontmatter unter `kategorien`
 * eine oder mehrere davon; unbekannte Namen brechen den Build ab.
 */
export const kategorien = [
  'Wirtschaft',
  'Staatsfinanzen',
  'Rente',
  'Öffentlicher Dienst',
  'Arbeitsmarkt',
  'Bevölkerung',
  'Familie',
  'Migration',
  'Bildung',
  'Wohnen',
] as const;

export type Kategorie = (typeof kategorien)[number];

/** URL-tauglicher Name, z. B. „Öffentlicher Dienst“ → „oeffentlicher-dienst“. */
export function kategorieSlug(k: string): string {
  return k
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Prüft die Kategorien eines Artikels und gibt sie in der Reihenfolge der Liste oben zurück. */
export function pruefeKategorien(werte: unknown, artikel: string): Kategorie[] {
  if (!Array.isArray(werte) || werte.length === 0) {
    throw new Error(`${artikel}: Frontmatter „kategorien“ fehlt oder ist leer.`);
  }
  for (const w of werte) {
    if (!kategorien.includes(w)) {
      throw new Error(`${artikel}: unbekannte Kategorie „${w}“ (erlaubt: ${kategorien.join(', ')}).`);
    }
  }
  return kategorien.filter((k) => werte.includes(k));
}
