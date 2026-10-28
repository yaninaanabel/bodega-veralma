/* ============================================================================
   DATOS DE DEMOSTRACIÓN DE LOS VINOS  ·  ACÁ SE ACTUALIZAN LOS PRECIOS
   ----------------------------------------------------------------------------
   Para cambiar un precio, modificá el número de "precio" (en pesos argentinos).
   Cuando la bodega tenga los precios oficiales:
     1) cargá el precio real acá, o en la tabla "vinos" de la base de datos, y
     2) cambiá "demo" a false (o borrá la línea): desaparece la leyenda de demostración.
   Las imágenes de botella son ILUSTRACIONES (propuesta visual), no fotos oficiales.
   ========================================================================== */
export const VINOS_DEMO = {
  "Cabernet Sauvignon": { precio: 12000, foto: "/assets/vinos/botella-cabernet.png",    descripcion: "Variedad tinta clásica, de sabor intenso. Suele acompañar carnes rojas." },
  "Torrontés":          { precio: 10000, foto: "/assets/vinos/botella-torrontes.png",   descripcion: "Variedad blanca aromática y fresca. Va bien con quesos suaves y ensaladas." },
  "Syrah":              { precio: 11000, foto: "/assets/vinos/botella-syrah.png",       descripcion: "Variedad tinta de carácter especiado. Combina con carnes asadas y guisos." },
  "Tempranillo":        { precio: 10500, foto: "/assets/vinos/botella-tempranillo.png", descripcion: "Variedad tinta suave y frutada. Acompaña bien pastas y quesos curados." },
  "Malbec":             { precio: 12000, foto: "/assets/vinos/botella-malbec.png",      descripcion: "Variedad tinta muy popular en Argentina. Ideal con asado y carnes." },
  "Chardonnay":         { precio: 10000, foto: "/assets/vinos/botella-chardonnay.png",  descripcion: "Variedad blanca versátil. Marida con pescados, pollo y platos cremosos." }
};
// El orden de las tarjetas es el orden de esta lista.
const ORDEN = Object.keys(VINOS_DEMO);
export const LEYENDA_PRECIOS = "Precios estimados para demostración. No son precios oficiales de Bodega Veralma.";

/* Completa los vinos (de la base o del respaldo local) con precio, imagen y descripción de demostración. */
export function aplicarDatosDemo(wines) {
  const lista = wines.map(w => {
    const d = VINOS_DEMO[w.nombre];
    if (!d) return w;
    const usaPrecioDemo = w.precio == null && d.precio != null && d.demo !== false;
    return { ...w, precio: w.precio ?? d.precio ?? null, precioDemo: usaPrecioDemo, foto: d.foto || w.foto, descripcion: d.descripcion || w.descripcion };
  });
  const pos = w => { const i = ORDEN.indexOf(w.nombre); return i === -1 ? 999 : i; };
  return lista.sort((a, b) => pos(a) - pos(b));
}
