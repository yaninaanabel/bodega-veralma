"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GALLERY, GALLERY_CATEGORIES } from "../lib/data";

export default function Gallery() {
  const [cat, setCat] = useState("Todas");
  const [open, setOpen] = useState(null);
  const items = GALLERY.filter(g => cat === "Todas" || g.cat === cat);
  useEffect(() => {
    const onKey = e => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar fotografías">
        {GALLERY_CATEGORIES.map(c => <button key={c} className={`chip${cat === c ? " on" : ""}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <ul className="photos">
        {items.map(g => (
          <li key={g.src}>
            <button onClick={() => setOpen(g)} aria-label={`Ampliar: ${g.alt}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width:720px) 50vw, 25vw" style={{ objectFit: "cover" }} />
            </button>
          </li>
        ))}
      </ul>
      {open && (
        <div className="modal" onClick={e => e.target === e.currentTarget && setOpen(null)}>
          <div className="modal-box lightbox" role="dialog" aria-modal="true" aria-label={open.alt}>
            <button className="close" aria-label="Cerrar" onClick={() => setOpen(null)}>×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open.src} alt={open.alt} />
            <p>{open.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
