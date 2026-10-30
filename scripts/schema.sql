CREATE TABLE IF NOT EXISTS vinos (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  variedad TEXT NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('tinto','blanco','rosado')),
  descripcion TEXT,
  precio NUMERIC(10,2) CHECK (precio IS NULL OR precio >= 0),
  foto TEXT,
  publicado BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE IF NOT EXISTS experiencias (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  duracion TEXT,
  precio NUMERIC(10,2) CHECK (precio IS NULL OR precio >= 0),
  foto TEXT,
  publicado BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE IF NOT EXISTS consultas (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  motivo TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  creada_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  estado TEXT NOT NULL DEFAULT 'nueva' CHECK (estado IN ('nueva','leida','respondida'))
);
CREATE TABLE IF NOT EXISTS solicitudes_visita (
  id SERIAL PRIMARY KEY,
  nombre_apellido TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  fecha_solicitada DATE NOT NULL,
  cantidad_personas INTEGER NOT NULL CHECK (cantidad_personas BETWEEN 1 AND 50),
  experiencia_id INTEGER REFERENCES experiencias(id) ON DELETE SET NULL,
  comentarios TEXT,
  creada_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  estado TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente','confirmada','rechazada'))
)
