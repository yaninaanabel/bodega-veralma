# Base de datos (PostgreSQL en Neon)
Tablas: `vinos`, `experiencias`, `consultas`, `solicitudes_visita` (ver `scripts/schema.sql`).
- `solicitudes_visita.experiencia_id` referencia a `experiencias(id)`.
- Estados: consultas `nueva|leida|respondida`; solicitudes `pendiente|confirmada|rechazada`.
- Precio opcional (`NULL` = a confirmar). Para publicar un vino: `UPDATE vinos SET publicado = TRUE WHERE id = ...`.
- Ver datos recibidos (SQL Editor de Neon): `SELECT * FROM solicitudes_visita ORDER BY creada_en DESC;`
