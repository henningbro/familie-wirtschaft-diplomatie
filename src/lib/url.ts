/** Hängt einen Pfad an die Base-URL an (nötig für GitHub Pages unter /repo-name/). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
