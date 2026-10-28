# Reglas para agentes de código (OpenCode) · Bodega Veralma

- Stack obligatorio: React, Next.js (App Router), CSS con variables, PostgreSQL en Neon, Git/GitHub, Vercel. Prohibido: Bootstrap, jQuery, Tailwind, Vue, Angular.
- Identidad: no modificar ni redibujar el logotipo (`public/assets/logo/logo-principal.png`). Paleta: #FEFEFC, #610139, #8E1D56, #C79526. Títulos Playfair Display Bold; textos Lora Regular. Trato de «vos».
- No inventar datos: premios, certificaciones, precios, añadas, graduaciones ni características de los vinos. Si falta un dato, dejar el campo en `null` y mostrar «a confirmar».
- Una consulta o solicitud solo se confirma al usuario si se guardó en PostgreSQL. Nunca simular el almacenamiento ni guardar solo en el navegador.
- Las credenciales van en `.env.local` (fuera de Git). Nunca en el código ni en `NEXT_PUBLIC_*`, salvo el número de WhatsApp.
- Leyenda del pie, textual: «Beber con moderación. Prohibida su venta a menores de 18 años».
- No afirmar que una función está terminada si solo está diseñada o documentada. Actualizar `docs/` al cambiar el comportamiento.
