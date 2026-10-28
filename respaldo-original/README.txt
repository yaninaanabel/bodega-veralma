BODEGA VERALMA - SITIO WEB
==========================

COMO ABRIRLO (IMPORTANTE)
Si al abrir el sitio lo ves sin diseño (fondo blanco, enlaces azules) y la dirección contiene una carpeta temporal
(AppData\Local\Temp...), estás abriendo index.html DESDE DENTRO del ZIP. Windows copia solo ese archivo a una carpeta
temporal y deja atrás styles.css, script.js y assets. El código está bien; falta extraer el ZIP.

Opción A (simple)
1. Clic derecho sobre bodega-veralma.zip > "Extraer todo..." > elegí una carpeta (por ej. Documentos) > Extraer.
2. Abrí la carpeta extraída bodega-veralma y hacé doble clic en index.html.
3. Mantené juntos index.html, styles.css, script.js y assets.

Opción B (recomendada para editar, con Visual Studio Code)
1. Extraé el ZIP como en la opción A.
2. En VS Code: Archivo > Abrir carpeta... y elegí bodega-veralma.
3. Instalá la extensión "Live Server" (Ritwick Dey).
4. Clic derecho sobre index.html > "Open with Live Server". Se abre en http://127.0.0.1:5500 y se actualiza al guardar.

Si faltan archivos, la página muestra un cartel amarillo que lo avisa.

PORTADA
Guardá la fotografía de Tinogasta como assets/galeria/portada-veralma.jpeg (ese nombre exacto). Se usa sola como fondo de la portada; si usás otro nombre o formato, cambiá la ruta en styles.css (regla .hero, dos veces).

COMO AGREGAR FOTOS
1. Guardá las imágenes dentro de assets/ (vinedos, vinos, experiencias, galeria).
2. Registralas en script.js, en el objeto PHOTOS. Ejemplo:
   const PHOTOS = { hero: "./assets/vinedos/hero.jpg", cata: "./assets/experiencias/cata.jpg" };
   La lista de claves disponibles está comentada arriba de PHOTOS.
Hasta entonces se muestran recuadros "Foto pendiente".

DATOS A COMPLETAR
- Vinos reales: arreglo WINES en script.js (hoy son ejemplos de demostración).
- WhatsApp: constante WHATSAPP en script.js (ej. "5492974000000").
- Dirección, teléfono, correo y redes: pie de página en index.html.
- Historia de la bodega y datos de profesionales: textos marcados como "a completar".
- Formulario: es una demostración y no envía datos. Conectar un servicio de formularios en script.js.

Nota: la carpeta "vinedos" va sin eñe para evitar problemas de compatibilidad entre sistemas.
