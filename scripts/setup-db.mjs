// Crea las tablas y carga el catálogo inicial en Neon. Uso: npm run db:setup
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";
if (!process.env.DATABASE_URL) { console.error("Falta DATABASE_URL en .env.local"); process.exit(1); }
const sql = neon(process.env.DATABASE_URL);
for (const file of ["schema.sql", "seed.sql"]) {
  const text = readFileSync(new URL(file, import.meta.url), "utf8");
  for (const stmt of text.split(/;\s*\n/).map(s => s.trim()).filter(Boolean)) await sql.query(stmt);
  console.log("OK:", file);
}
