// Datos locales: respaldo del catálogo y contenido de la galería. Los datos desconocidos quedan en null.
export const WINES_FALLBACK = [
  { id:1, nombre:"Cabernet Sauvignon", variedad:"Cabernet Sauvignon", tipo:"tinto", descripcion:"Vino tinto de Bodega Veralma, Tinogasta.", precio:null, foto:null },
  { id:2, nombre:"Chardonnay", variedad:"Chardonnay", tipo:"blanco", descripcion:"Vino blanco de Bodega Veralma, Tinogasta.", precio:null, foto:"/assets/vinos/seismiles.jpg" },
  { id:3, nombre:"Malbec", variedad:"Malbec", tipo:"tinto", descripcion:"Vino tinto de Bodega Veralma, Tinogasta.", precio:null, foto:"/assets/vinos/la-gesta.jpg" },
  { id:4, nombre:"Syrah", variedad:"Syrah", tipo:"tinto", descripcion:"Vino tinto de Bodega Veralma, Tinogasta.", precio:null, foto:null },
  { id:5, nombre:"Torrontés", variedad:"Torrontés", tipo:"blanco", descripcion:"Vino blanco de Bodega Veralma, Tinogasta.", precio:null, foto:null },
  { id:6, nombre:"Tempranillo", variedad:"Tempranillo", tipo:"tinto", descripcion:"Vino tinto de Bodega Veralma, Tinogasta.", precio:null, foto:null }
];
export const EXPERIENCES_FALLBACK = [
  { id:1, nombre:"Tours guiados por la finca", descripcion:"Recorrido por la finca para conocer los viñedos y el origen de los vinos.", duracion:null, precio:null, foto:"/assets/vinedos/hero-vinedo.jpg" },
  { id:2, nombre:"Catas básicas", descripcion:"Degustación introductoria para reconocer aromas y sabores de los vinos de la bodega.", duracion:null, precio:null, foto:"/assets/experiencias/seismiles-copa.jpg" },
  { id:3, nombre:"Cursos y talleres de cata", descripcion:"Espacios de aprendizaje para estudiantes de enología y aficionados a la cata.", duracion:null, precio:null, foto:"/assets/experiencias/servicio-tinto.jpg" },
  { id:4, nombre:"Talleres de maridaje", descripcion:"Encuentros para descubrir cómo combinar vinos y comidas.", duracion:null, precio:null, foto:"/assets/experiencias/botellas-copas.jpg" }
];
const A = "/assets/";
export const GALLERY_CATEGORIES = ["Todas","Viñedos y finca","Paisajes de Tinogasta","Botellas y etiquetas","Copas y degustaciones","Uvas y elaboración"];
export const GALLERY = [
  { src:A+"vinedos/hero-vinedo.jpg", cat:"Viñedos y finca", alt:"Viñedo verde con las montañas de Tinogasta al atardecer" },
  { src:A+"vinedos/aereo-finca.jpg", cat:"Viñedos y finca", alt:"Vista aérea de la finca, los viñedos y la bodega" },
  { src:A+"vinedos/montana.jpg", cat:"Paisajes de Tinogasta", alt:"Montaña rocosa de Catamarca con un árbol en primer plano" },
  { src:A+"vinedos/tinogasta.jpg", cat:"Paisajes de Tinogasta", alt:"Montañas de Tinogasta, Catamarca, bajo un cielo azul" },
  { src:A+"vinos/linea-veralma.jpg", cat:"Botellas y etiquetas", alt:"Línea de botellas de vino tinto Veralma" },
  { src:A+"experiencias/botellas-copas.jpg", cat:"Botellas y etiquetas", alt:"Botellas La Gesta y Entretantos junto a copas de vino" },
  { src:A+"experiencias/seismiles-copa.jpg", cat:"Botellas y etiquetas", alt:"Botella Seismiles Chardonnay junto a una copa de vino blanco" },
  { src:A+"experiencias/servicio-tinto.jpg", cat:"Copas y degustaciones", alt:"Vino tinto servido en una copa desde un grifo de acero inoxidable" },
  { src:A+"galeria/copa-fuego.jpg", cat:"Copas y degustaciones", alt:"Copa de vino tinto frente a una luz cálida" },
  { src:A+"galeria/copas-blancas.jpg", cat:"Copas y degustaciones", alt:"Vino blanco sirviéndose en copas" },
  { src:A+"galeria/copas-tres.jpg", cat:"Copas y degustaciones", alt:"Copas de vino rosado, blanco y tinto junto a uvas" },
  { src:A+"galeria/copas-uvas.jpg", cat:"Copas y degustaciones", alt:"Copas de vino tinto y blanco junto a racimos de uva" },
  { src:A+"vinedos/hojas-racimo.jpg", cat:"Uvas y elaboración", alt:"Racimo de uvas verdes entre hojas de vid" },
  { src:A+"vinedos/uvas-blancas.jpg", cat:"Uvas y elaboración", alt:"Uvas blancas recién cosechadas" },
  { src:A+"galeria/copa-racimo.jpg", cat:"Uvas y elaboración", alt:"Copa de vino blanco frente a un racimo en la vid" }
];
