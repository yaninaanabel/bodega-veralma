# Arquitectura
- `app/`: layout (fuentes, metadatos es-AR, Open Graph), página única y rutas API (`/api/consultas`, `/api/visitas`).
- `components/`: Header, Photo, Wines (filtros + detalle), Gallery (categorías + ampliación), Forms (consulta y visita), Sections.
- `lib/`: `db.js` (Neon, solo servidor), `validate.js` (validación compartida navegador/servidor), `data.js` (respaldo y galería).
- `scripts/`: `schema.sql`, `seed.sql`, `setup-db.mjs`.
- `public/assets/`: logotipo y fotografías. `respaldo-original/`: copia del sitio HTML anterior.
Decisión: el servidor siempre vuelve a validar y responde 503 si no hay base configurada; así nunca se confirma algo que no se guardó.
