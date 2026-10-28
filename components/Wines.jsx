"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const FILTERS = [["todos","Todos"],["tinto","Tintos"],["blanco","Blancos"],["rosado","Rosados"]];
const price = p => (p == null ? "Precio a confirmar" : "$" + p.toLocaleString("es-AR"));
const NOTA = "Precios estimados para demostración. No son precios oficiales de Bodega Veralma.";

function Bottle({ wine, height }) {
  return (
    <div className="bottle" style={height ? { height } : undefined}>
      {wine.foto
        ? <Image src={wine.foto} alt={`Ilustración de una botella de ${wine.nombre} con etiqueta Bodega Veralma (propuesta visual)`} fill sizes="(max-width:720px) 100vw, 360px" style={{ objectFit: "contain" }} />
        : <span className="pending">Foto de la botella pendiente</span>}
    </div>
  );
}

export default function Wines({ wines }) {
  const [filter, setFilter] = useState("todos");
  const [selected, setSelected] = useState(null);
  const list = wines.filter(w => filter === "todos" || w.tipo === filter);
  // Solo se muestran los filtros de tipos que existen en el catálogo (rosados aparecen si hay vinos rosados confirmados).
  const filters = FILTERS.filter(([k]) => k === "todos" || wines.some(w => w.tipo === k));
  useEffect(() => {
    const onKey = e => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar vinos por tipo">
        {filters.map(([k, label]) => <button key={k} className={`chip${filter === k ? " on" : ""}`} aria-pressed={filter === k} onClick={() => setFilter(k)}>{label}</button>)}
      </div>
      <div className="grid cols-3">
        {list.map(w => (
          <article className="card" key={w.id}>
            <Bottle wine={w} />
            <div className="body">
              <h3>{w.nombre}</h3>
              <span className="meta">{w.tipo[0].toUpperCase() + w.tipo.slice(1)} · {w.variedad}</span>
              <p>{w.descripcion}</p>
              <p className="price">{price(w.precio)}{w.precio != null && <span className="per"> por botella</span>}</p>
              <button className="btn push" onClick={() => setSelected(w)}>Ver detalles de {w.nombre}</button>
            </div>
          </article>
        ))}
      </div>
      {wines.some(w => w.precioDemo) && <p className="demo-note">{NOTA}<br />Las botellas son ilustraciones creadas como propuesta visual, no fotografías oficiales.</p>}
      {selected && (
        <div className="modal" onClick={e => e.target === e.currentTarget && setSelected(null)}>
          <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="wine-title">
            <button className="close" aria-label="Cerrar" onClick={() => setSelected(null)}>×</button>
            <Bottle wine={selected} height="340px" />
            <h3 id="wine-title">{selected.nombre}</h3>
            <p className="meta">{selected.tipo} · {selected.variedad}</p>
            <p>{selected.descripcion}</p>
            <p className="price">{price(selected.precio)}{selected.precio != null && <span className="per"> por botella</span>}</p>{selected.precioDemo && <p className="draft">{NOTA}</p>}
            <p className="draft">Añada, graduación alcohólica, notas de cata y maridaje: pendientes de completar por la bodega.</p>
            <a className="btn" href="#contacto" onClick={() => setSelected(null)}>Consultar por este vino</a>
          </div>
        </div>
      )}
    </>
  );
}
