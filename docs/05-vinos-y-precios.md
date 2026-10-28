# Vinos y precios de demostración
- Los seis vinos (Cabernet Sauvignon, Torrontés, Syrah, Tempranillo, Malbec y Chardonnay) y sus precios de demostración se editan en `lib/vinos-demo.js`.
- Los precios son **ficticios** y se muestran con la leyenda «Precios estimados para demostración. No son precios oficiales de Bodega Veralma.».
- Las imágenes `public/assets/vinos/botella-*.png` son **ilustraciones** generadas como propuesta visual de etiqueta (no fotografías oficiales). Las fotos reales de la bodega siguen en la galería.
- Cuando existan precios oficiales: cargarlos en `lib/vinos-demo.js` (o en la tabla `vinos`) y poner `demo: false` para quitar la leyenda.
- Contacto: se edita en `components/ContactInfo.jsx`. El teléfono es opcional en el formulario y se guarda en la columna `telefono` de `consultas` (ejecutar `npm.cmd run db:setup` una vez para crearla).
