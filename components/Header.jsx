"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [["#bodega","La bodega"],["#vinos","Vinos"],["#experiencias","Experiencias"],["#finca","La finca"],["#galeria","Galería"],["#contacto","Contacto"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`header${scrolled || open ? " solid" : ""}`}>
      <div className="container header-row">
        <a href="#inicio" className="brand" aria-label="Bodega Veralma, ir al inicio">
          <Image src="/assets/logo/logo-principal.png" alt="Bodega Veralma" width={56} height={56} priority />
        </a>
        <button className="burger" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="nav" aria-label="Principal" className={open ? "open" : ""}>
          {LINKS.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="#visita" className="btn btn-sm" onClick={() => setOpen(false)}>Solicitá una visita</a>
        </nav>
      </div>
    </header>
  );
}
