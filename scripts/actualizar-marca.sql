-- Actualiza los textos ya cargados en Neon (seed.sql no pisa filas existentes).
-- Ejecutar UNA vez en Neon > SQL Editor. No borra datos ni toca consultas ni solicitudes.
UPDATE vinos SET descripcion = REPLACE(descripcion, 'de Bodega Veralma, Tinogasta.', 'de Tinogasta, Catamarca.') WHERE descripcion LIKE '%Bodega Veralma%';
UPDATE experiencias SET nombre = 'Tours guiados por viñedos y fincas', descripcion = 'Recorrido por viñedos y fincas para conocer el origen de los vinos.' WHERE id = 1;
UPDATE experiencias SET descripcion = REPLACE(descripcion, 'los vinos de la bodega.', 'los vinos de la región.') WHERE id = 2;
