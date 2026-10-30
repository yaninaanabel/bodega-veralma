
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FILTERS = [
  ["todos", "Todos"],
  ["tinto", "Tintos"],
  ["blanco", "Blancos"],
  ["rosado", "Rosados"]
];

// Imágenes de respaldo para cada variedad.
// Las rutas corresponden a archivos dentro de public/assets/vinos.
const FOTOS = {
  "Cabernet Sauvignon": "/assets/vinos/Vino Tinogasta entre viñedos y montañas.png",
  "Chardonnay": "/assets/vinos/seismiles.jpg",
  "Malbec": "/assets/vinos/la-gesta.jpg",
  "Syrah": "/assets/vinos/Raíces del Vino en Tinogasta.png",
  "Torrontés": "/assets/vinos/Raíces del Vino en el Viñedo.png",
  "Tempranillo": "/assets/vinos/Raíces del Vino al Atardecer.png"
};

function Bottle({ wine, height }) {
  const [failed, setFailed] = useState(false);
  const foto = wine.foto || FOTOS[wine.variedad] || FOTOS[wine.nombre];

  return (
    <div
      className={`bottle${!foto || failed ? " no-photo" : ""}`}
      style={height ? { height } : undefined}
    >
      {foto && !failed ? (
        <Image
          src={foto}
          alt={`Botella de vino ${wine.nombre}`}
          fill
          unoptimized
          sizes="(max-width:720px) 100vw, 360px"
          style={{ objectFit: "contain" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="bottle-name">{wine.nombre}</span>
      )}
    </div>
  );
}

export default function Wines({ wines = [] }) {
  const [filter, setFilter] = useState("todos");
  const [selected, setSelected] = useState(null);

  const list = wines.filter(
    wine => filter === "todos" || wine.tipo === filter
  );

  const filters = FILTERS.filter(
    ([key]) => key === "todos" || wines.some(wine => wine.tipo === key)
  );

  useEffect(() => {
    const onKey = event => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar vinos por tipo">
        {filters.map(([key, label]) => (
          <button
            key={key}
            className={`chip${filter === key ? " on" : ""}`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid cols-3">
        {list.map(wine => (
          <article className="card" key={wine.id}>
            <Bottle wine={wine} />
            <div className="body">
              <h3>{wine.nombre}</h3>
              <span className="meta">
                {wine.tipo[0].toUpperCase() + wine.tipo.slice(1)} · {wine.variedad}
              </span>
              <p>{wine.descripcion}</p>
              <button
                className="btn push"
                onClick={() => setSelected(wine)}
              >
                Ver detalles de {wine.nombre}
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="modal"
          onClick={event =>
            event.target === event.currentTarget && setSelected(null)
          }
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wine-title"
          >
            <button
              className="close"
              aria-label="Cerrar"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <Bottle wine={selected} height="340px" />
            <h3 id="wine-title">{selected.nombre}</h3>
            <p className="meta">
              {selected.tipo} · {selected.variedad}
            </p>
            <p>{selected.descripcion}</p>
            <a
              className="btn"
              href="#contacto"
              onClick={() => setSelected(null)}
            >
              Consultar por este vino
            </a>
          </div>
        </div>
      )}
    </>
  );
}
``