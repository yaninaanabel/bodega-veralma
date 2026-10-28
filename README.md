# Bodega Veralma · Sitio web (Next.js + PostgreSQL en Neon)

## Qué se verificó y qué no
Verificado en el entorno de desarrollo (sin internet): sintaxis de todos los archivos JS/JSX, balance del CSS, sentencias SQL y las reglas de validación (probadas con Node).
**No verificado:** `npm install`, `npm run build`, la visualización en el navegador, la conexión a Neon, el guardado real de consultas y solicitudes, el rendimiento (objetivo < 2 s: medilo con Lighthouse en Chrome) y Vercel. Seguí los pasos de abajo y avisame si aparece algún error.

## Requisitos (Windows 11)
1. **Node.js LTS** (v20 o superior): https://nodejs.org → instalar con las opciones por defecto.
2. **Visual Studio Code**: https://code.visualstudio.com
3. **Git**: https://git-scm.com (para GitHub).
4. Cuenta gratuita en **Neon** (https://neon.tech), **GitHub** y **Vercel**.

## 1. Abrir el proyecto
1. Descomprimí `veralma-next.zip` (clic derecho → *Extraer todo*) en, por ejemplo, `Documentos`.
2. En VS Code: *Archivo → Abrir carpeta…* → elegí `veralma-next`.
3. Abrí la terminal: menú *Terminal → Nueva terminal*.

## 2. Instalar dependencias
```powershell
npm install
```

## 3. Crear la base de datos en Neon
1. Entrá a Neon → *Create project* (nombre: `veralma`).
2. En el panel, botón **Connect** → copiá la *Connection string* (empieza con `postgresql://`).
3. En la terminal de VS Code:
```powershell
Copy-Item .env.example .env.local
```
4. Abrí `.env.local` y pegá tu cadena en `DATABASE_URL=`. (Opcional: tu WhatsApp en `NEXT_PUBLIC_WHATSAPP`, ej. `5493837000000`.)
5. Creá las tablas y cargá el catálogo:
```powershell
npm run db:setup
```
Debe mostrar `OK: schema.sql` y `OK: seed.sql`.

## 4. Ejecutar en tu computadora
```powershell
npm run dev
```
Abrí http://localhost:3000. Probá:
- filtros de vinos y «Ver detalles»;
- galería (categorías y ampliar con clic);
- formulario de contacto y de solicitud de visita (fecha pasada debe rechazarse);
- en Neon → *SQL Editor*: `SELECT * FROM consultas;` y `SELECT * FROM solicitudes_visita;` deben mostrar lo enviado.
Sin `DATABASE_URL`, el catálogo se ve igual (datos locales) pero los formularios responden que el servicio no está configurado: no confirman nada que no se guardó.

## 5. Subir a GitHub
```powershell
git init
git add .
git commit -m "Sitio Bodega Veralma"
```
Creá un repositorio vacío en GitHub y ejecutá los dos comandos que te muestra (`git remote add origin ...` y `git push -u origin main`). `.env.local` está en `.gitignore` y no se sube.

## 6. Publicar en Vercel
1. https://vercel.com → *Add New → Project* → importá el repositorio.
2. En *Environment Variables* cargá `DATABASE_URL`, `NEXT_PUBLIC_SITE_URL` (la URL que te dé Vercel) y, si querés, `NEXT_PUBLIC_WHATSAPP`.
3. *Deploy*.

## Funciones listas y pendientes
Ver `docs/01-requerimientos.md`. Falta cargar: precios, añadas, graduación y notas de cata; duración y horarios de las experiencias; teléfono, correo y redes (pie y contacto); fotos de botellas de Cabernet Sauvignon, Syrah, Torrontés y Tempranillo (hoy Malbec usa la foto de La Gesta y Chardonnay la de Seismiles, según sus etiquetas); y confirmar la ubicación del mapa.
Las imágenes de copas genéricas de la galería tienen baja resolución (unos 260 px).

## Estructura
`app/` páginas y API · `components/` · `lib/` datos y validación · `scripts/` SQL · `public/assets/` fotos y logo · `docs/` documentación · `respaldo-original/` sitio HTML anterior.
