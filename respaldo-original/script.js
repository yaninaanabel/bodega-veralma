/* ============ FOTOGRAFÍAS REALES (rutas relativas a esta carpeta) ============
   Cada clave: [ruta, texto alternativo]. Las claves sin foto muestran "Foto pendiente". */
const IMG = "./assets/";
const PHOTOS = {
  visita:["vinedos/hero-vinedo.jpg","Viñedo de Veralma con hileras de vid verdes y montañas rojizas al fondo"],
  cata:["experiencias/seismiles-copa.jpg","Copa de vino blanco junto a una botella Seismiles Chardonnay de Veralma"],
  maridaje:["experiencias/botellas-copas.jpg","Botellas La Gesta y Entretantos junto a copas de vino sobre una mesa"],
  recorrido:["experiencias/servicio-tinto.jpg","Vino tinto servido en una copa desde un grifo de acero inoxidable"],
  vid:["vinedos/hojas-racimo.jpg","Racimo de uvas verdes entre las hojas de una vid"],
  vendimia:["vinedos/uvas-blancas.jpg","Racimos de uva blanca recién cosechados"],
  embotellado:["vinos/linea-veralma.jpg","Botellas de vino Veralma ya embotelladas y etiquetadas"],
  tinto:["galeria/copa-fuego.jpg","Copa de vino tinto frente a una luz cálida"],
  blanco:["galeria/copas-blancas.jpg","Vino blanco sirviéndose en copas con fondo verde"],
  rosado:["galeria/copas-tres.jpg","Copas de vino rosado, blanco y tinto junto a uvas"]
};
const WHATSAPP = ""; // Ej.: "5492974000000". Vacío = el botón lleva al formulario.

/* Vinos con datos visibles en las etiquetas de las fotos. Completar el resto con información confirmada. */
const WINES = [
  {id:1,name:"La Gesta",type:"tinto",grape:"Malbec 2020",img:"vinos/la-gesta.jpg",alt:"Botella de La Gesta Malbec 2020 de Bodega Veralma",desc:"Malbec de Bodega Veralma, Catamarca.",pair:"A confirmar por la bodega"},
  {id:2,name:"Entretantos",type:"tinto",grape:"Malbec",img:"vinos/entretantos.jpg",alt:"Botella de Entretantos Malbec de Bodega Veralma, Catamarca",desc:"Malbec de Bodega Veralma, Catamarca.",pair:"A confirmar por la bodega"},
  {id:3,name:"Seismiles",type:"blanco",grape:"Chardonnay",img:"vinos/seismiles.jpg",alt:"Botella de Seismiles Chardonnay de Veralma, Catamarca, Argentina",desc:"Chardonnay de Veralma, Catamarca.",pair:"A confirmar por la bodega"}
];
const EXPS = [
  {t:"Visitas guiadas por los viñedos",d:"Recorré la finca y descubrí cómo el suelo, el clima y el entorno influyen en la vid.",b:"Consultar visitas",k:"visita"},
  {t:"Catas con sommelier",d:"Degustaciones guiadas para reconocer aromas, sabores, estructura y acidez.",b:"Reservar una degustación",k:"cata"},
  {t:"Maridajes con quesos y carnes",d:"Combinaciones que buscan el equilibrio entre el vino y cada preparación.",b:"Descubrir los maridajes",k:"maridaje"},
  {t:"Recorridos sobre la elaboración",d:"Conocé las etapas de producción con explicaciones de profesionales de la enología.",b:"Conocer el proceso",k:"recorrido"}
];
const STEPS = [
  ["Cuidado de la vid","El viñedo se trabaja durante todo el año según el suelo y el clima.","La calidad de la uva empieza en el manejo del viñedo.","vid"],
  ["Vendimia","Se sigue la maduración y se elige el momento de cosecha.","El momento depende de la variedad y del estilo de vino buscado.","vendimia"],
  ["Selección de las uvas","Se escogen los racimos en mejor estado.","Puede hacerse en el viñedo y también en la bodega.","seleccion"],
  ["Fermentación","Las levaduras transforman el azúcar del mosto en alcohol.","Se controla la temperatura y se sigue su evolución.","fermentacion"],
  ["Crianza","Cuando corresponde, el vino reposa en barricas u otros recipientes.","No todos los vinos tienen crianza en madera.","crianza"],
  ["Embotellado","El vino se envasa y puede descansar antes de salir al mercado.","El tiempo de reposo depende del estilo.","embotellado"]
];
const TYPES = [
  ["Vinos tintos","Se elaboran generalmente fermentando el mosto con los hollejos, lo que aporta color y taninos. Suelen tener más cuerpo y aromas a frutas rojas y negras, y maridan con carnes rojas y quesos maduros.","Ejemplos: Malbec, Cabernet Sauvignon, Merlot, Pinot Noir.","tinto"],
  ["Vinos blancos","Suelen elaborarse separando el mosto de los hollejos antes de fermentar. Destacan por su frescura, acidez y aromas frutales y florales, y maridan con pescados, quesos y carnes blancas.","Ejemplos: Chardonnay, Sauvignon Blanc, Torrontés.","blanco"],
  ["Vinos rosados","Su color surge de un contacto breve del mosto con hollejos de uvas tintas. Son frescos y frutales, con tonos del salmón al frambuesa, y maridan con ensaladas, quesos y carnes blancas.","Elaborados con uvas tintas mediante distintos métodos.","rosado"]
];
/* Galería: [archivo, texto alternativo, tamaño] (tamaño: big, wide, tall o vacío) */
const GALLERY = [
  ["vinedos/hero-vinedo.jpg","Viñedo verde con las montañas de Catamarca al atardecer","big"],
  ["vinos/linea-veralma.jpg","Línea de botellas de vino tinto Veralma","tall"],
  ["experiencias/botellas-copas.jpg","Botellas La Gesta y Entretantos con copas de vino","tall"],
  ["vinedos/aereo-finca.jpg","Vista aérea de la finca, los viñedos y la bodega","wide"],
  ["vinedos/tinogasta.jpg","Paisaje de Tinogasta, Catamarca, con montañas y cielo azul","tall"],
  ["galeria/copa-fuego.jpg","Copa de vino tinto frente a una luz cálida",""],
  ["vinedos/montana.jpg","Montaña rocosa de Catamarca con un árbol en primer plano","wide"],
  ["experiencias/seismiles-copa.jpg","Seismiles Chardonnay junto a una copa de vino blanco",""],
  ["galeria/copas-blancas.jpg","Vino blanco sirviéndose en copas","wide"],
  ["experiencias/servicio-tinto.jpg","Vino tinto servido desde un grifo de acero inoxidable","tall"],
  ["vinedos/hojas-racimo.jpg","Racimo de uvas verdes entre hojas de vid",""],
  ["galeria/copas-uvas.jpg","Copas de vino tinto y blanco junto a racimos de uva",""],
  ["vinedos/uvas-blancas.jpg","Uvas blancas recién cosechadas",""],
  ["galeria/copas-tres.jpg","Copas de vino rosado, blanco y tinto con uvas","wide"],
  ["galeria/copa-racimo.jpg","Copa de vino blanco frente a un racimo en la vid","wide"]
];

/* ============ UTILIDADES ============ */
const $ = s => document.querySelector(s);
/* Foto con proporción fija. Si la clave no tiene foto, muestra un recuadro "Foto pendiente". */
function pic(key, label, cls = "ratio-43") {
  const p = PHOTOS[key];
  if (p) return `<div class="pic ${cls}"><img src="${IMG + p[0]}" alt="${p[1]}" loading="lazy"></div>`;
  return `<div class="pic missing ${cls}" role="img" aria-label="Foto pendiente: ${label}">Foto pendiente: ${label}</div>`;
}

/* ============ MENÚ MÓVIL Y ENCABEZADO ============ */
const nav = $("#nav"), burger = $("#burger"), header = $("#header");
const syncHeader = () => header.classList.toggle("solid", window.scrollY > 40 || nav.classList.contains("open"));
const setNav = open => { nav.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); syncHeader(); };
window.addEventListener("scroll", syncHeader, {passive:true}); syncHeader();
burger.onclick = () => setNav(!nav.classList.contains("open"));
nav.onclick = e => { if (e.target.closest("a")) setNav(false); };

/* ============ MODAL / LIGHTBOX ============ */
const modal = $("#modal");
const openModal = html => { $("#mBody").innerHTML = html; modal.hidden = false; $("#close").focus(); };
const closeModal = () => modal.hidden = true;
$("#close").onclick = closeModal;
modal.onclick = e => { if (e.target === modal) closeModal(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ============ VINOS ============ */
function renderWines(f = "todos") {
  const list = WINES.filter(w => f === "todos" || w.type === f);
  $("#wineGrid").innerHTML = list.length ? list.map(w => `
    <article class="card"><div class="bottle"><img src="${IMG + w.img}" alt="${w.alt}" loading="lazy"></div>
    <div class="body"><h3>${w.name}</h3><span class="meta">${w.type[0].toUpperCase() + w.type.slice(1)} · ${w.grape}</span>
    <p>${w.desc}</p><p><strong>Maridaje:</strong> ${w.pair}</p>
    <button class="btn push" data-wine="${w.id}">Conocer este vino</button></div></article>`).join("")
    : `<p class="empty">Todavía no hay vinos ${f}s confirmados en esta página. La bodega los incorporará cuando estén disponibles.</p>`;
}
$("#filters").onclick = e => {
  const b = e.target.closest(".chip"); if (!b) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === b));
  renderWines(b.dataset.f);
};
$("#wineGrid").onclick = e => {
  const b = e.target.closest("[data-wine]"); if (!b) return;
  const w = WINES.find(x => x.id == b.dataset.wine);
  const link = WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, quiero consultar por " + w.name)}` : "#contacto";
  openModal(`<div class="bottle" style="height:340px"><img src="${IMG + w.img}" alt="${w.alt}"></div><h3>${w.name}</h3>
    <p class="meta">${w.type} · ${w.grape}</p><p>${w.desc}</p><p><strong>Maridaje:</strong> ${w.pair}</p>
    <p class="draft">Datos tomados de la etiqueta de la fotografía. Notas de aroma y sabor, añada y graduación se completarán con información confirmada por la bodega.</p>
    <a class="btn" id="ask" href="${link}" ${WHATSAPP ? 'target="_blank" rel="noopener"' : ""}>Consultar por este vino</a>`);
  $("#ask").onclick = () => { if (!WHATSAPP) closeModal(); };
};

/* ============ EXPERIENCIAS ============ */
$("#expGrid").innerHTML = EXPS.map(x => `<article class="card">${pic(x.k, x.t)}
  <div class="body"><h3>${x.t}</h3><p>${x.d}</p><a class="btn push" href="#contacto" data-exp="${x.t}">${x.b}</a></div></article>`).join("");
const sel = document.querySelector('[name="exp"]');
EXPS.forEach(x => sel.add(new Option(x.t, x.t)));
document.addEventListener("click", e => { const a = e.target.closest("[data-exp]"); if (a) sel.value = a.dataset.exp; });

/* ============ ELABORACIÓN, TIPOS, GALERÍA ============ */
$("#stepGrid").innerHTML = STEPS.map((s, i) => `<article class="card">${pic(s[3], s[0])}
  <div class="body"><span class="num">Etapa ${i + 1}</span><h3>${s[0]}</h3><p>${s[1]}</p><details><summary>Más información</summary><p>${s[2]}</p></details></div></article>`).join("");
$("#typeGrid").innerHTML = TYPES.map(t => `<article class="card">${pic(t[3], t[0])}
  <div class="body"><h3>${t[0]}</h3><p>${t[1]}</p><p class="meta">${t[2]}</p></div></article>`).join("");
$("#gallery").innerHTML = GALLERY.map((g, i) => `<button class="${g[2]}" data-i="${i}" aria-label="Ampliar: ${g[1]}"><img src="${IMG + g[0]}" alt="${g[1]}" loading="lazy"></button>`).join("");
$("#gallery").onclick = e => {
  const b = e.target.closest("[data-i]"); if (!b) return;
  const g = GALLERY[b.dataset.i];
  openModal(`<div class="lightbox"><img src="${IMG + g[0]}" alt="${g[1]}"><p>${g[1]}</p></div>`);
};

/* ============ FORMULARIO (demostración) ============ */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, msg = $("#formMsg");
  f.querySelectorAll(".bad").forEach(x => x.classList.remove("bad"));
  const bad = [...f.elements].filter(x => x.name && !x.checkValidity());
  bad.forEach(x => x.classList.add("bad"));
  if (bad.length) { msg.className = "full err"; msg.textContent = "Revisá los campos marcados: faltan datos o no son válidos."; bad[0].focus(); return; }
  /* Envío real: conectar un servicio de formularios, p. ej. fetch("URL", {method:"POST", body:new FormData(f)}) */
  msg.className = "full"; msg.textContent = "Datos validados en modo demostración. La consulta todavía no se envió a la bodega.";
  f.reset();
});

renderWines();
window.VERALMA_JS_OK = true;
