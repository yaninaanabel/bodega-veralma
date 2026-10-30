// Acceso a datos (solo servidor). La conexión usa DATABASE_URL, que nunca llega al navegador.
import { neon } from "@neondatabase/serverless";
import { WINES_FALLBACK, EXPERIENCES_FALLBACK } from "./data";

export const dbConfigured = () => Boolean(process.env.DATABASE_URL);
export const getSql = () => neon(process.env.DATABASE_URL);

/* Si la base no está configurada o falla, se muestra el catálogo local para que el sitio no se rompa.
   Las consultas y solicitudes NO usan este respaldo: solo se confirman si se guardan en PostgreSQL. */
export async function getWines() {
  if (!dbConfigured()) return WINES_FALLBACK;
  try {
    const sql = getSql();
    const rows = await sql`SELECT id, nombre, variedad, tipo, descripcion, precio::float AS precio, foto FROM vinos WHERE publicado ORDER BY id`;
    if (!rows.length) return WINES_FALLBACK;
    // Las fotos definidas en lib/data.js tienen prioridad: así una fila vieja de PostgreSQL (con foto NULL o ruta
    // desactualizada) no pisa la imagen correcta. Si la variedad no tiene foto local, se usa la de la base.
    const local = new Map(WINES_FALLBACK.map(w => [w.nombre, w.foto]));
    return rows.map(r => ({ ...r, foto: local.get(r.nombre) || r.foto || null }));
  } catch (e) { console.error("getWines:", e); return WINES_FALLBACK; }
}
export async function getExperiences() {
  if (!dbConfigured()) return EXPERIENCES_FALLBACK;
  try {
    const sql = getSql();
    return await sql`SELECT id, nombre, descripcion, duracion, precio::float AS precio, foto FROM experiencias WHERE publicado ORDER BY id`;
  } catch (e) { console.error("getExperiences:", e); return EXPERIENCES_FALLBACK; }
}
