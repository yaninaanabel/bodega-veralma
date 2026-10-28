import Image from "next/image";
import Photo from "./Photo";
import { ExpButton } from "./Forms";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Bodega Veralma · Tinogasta, Catamarca</p>
          <h1>El alma verdadera de cada viñedo</h1>
          <p>Somos una bodega de Tinogasta que elabora vinos con métodos tradicionales y sostenibles. Te invitamos a conocer la finca y a descubrir nuestra identidad vitivinícola.</p>
          <div className="btns">
            <a className="btn" href="#vinos">Descubrí nuestros vinos</a>
            <a className="btn btn-light" href="#visita">Solicitá una visita</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [["2006","Inicio del fideicomiso agrícola"],["2012","Creación de la bodega"],["150.000 L","Capacidad de elaboración"],["3.000 ha","Superficie de la explotación"],["400 ha","Autorizadas para producir"],["6","Lotes en la finca"]];

export function About() {
  return (
    <section id="bodega" className="section">
      <div className="container two-col">
        <div className="collage">
          <figure className="c-main"><Image src="/assets/vinedos/aereo-finca.jpg" alt="Vista aérea de los viñedos de la finca, con el galpón de la bodega y las montañas de fondo" fill sizes="(max-width:720px) 90vw, 45vw" style={{ objectFit: "cover" }} /></figure>
          <figure className="c-side"><Image src="/assets/vinedos/tinogasta.jpg" alt="Montañas de Tinogasta, Catamarca, al borde del viñedo" fill sizes="(max-width:720px) 60vw, 30vw" style={{ objectFit: "cover" }} /></figure>
        </div>
        <div className="text">
          <h2>Nuestra bodega</h2>
          <p>Veralma nació de un fideicomiso agrícola iniciado en 2006, en el que varios productores de distintas hectáreas se asociaron. En 2012 creamos la bodega, en el límite sur de la parcela, con capacidad para elaborar 150.000 litros.</p>
          <p>La explotación abarca 3.000 hectáreas, de las cuales 400 están autorizadas para producir: 55 de vid, 200 de olivos y 1 de otros frutales. La finca se organiza en seis lotes.</p>
          <p>Estamos en la Ruta 60, km 1032, Villa San Roque, Tinogasta, Catamarca.</p>
          <p className="concept"><strong>Concepto de marca:</strong> Veralma une «vera» (verdadera) y «alma». Es la propuesta de identidad de este proyecto, no un dato histórico confirmado.</p>
        </div>
      </div>
      <div className="container"><dl className="stats">{STATS.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}</dl></div>
    </section>
  );
}

export function Experiences({ items }) {
  return (
    <section id="experiencias" className="section">
      <div className="container">
        <header className="section-head"><h2>Viví la experiencia Veralma</h2>
          <p className="draft">Servicios previstos. Horarios, precios y disponibilidad se confirman con la bodega.</p></header>
        <div className="grid cols-4">
          {items.map(x => (
            <article className="card" key={x.id}>
              <Photo src={x.foto} alt={x.nombre} sizes="(max-width:720px) 100vw, 25vw" />
              <div className="body">
                <h3>{x.nombre}</h3><p>{x.descripcion}</p>
                <p className="meta">{x.duracion ? `Duración: ${x.duracion}` : "Duración a confirmar"}</p>
                <ExpButton id={x.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Terroir() {
  const img = (src, alt, cls, sizes) => <figure className={cls}><Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} /></figure>;
  return (
    <section id="finca" className="section dark">
      <div className="container terroir">
        <div className="terroir-text">
          <h2>La finca y el terruño</h2>
          <p>Hileras de vid al pie de las montañas de Tinogasta: el paisaje, el cultivo de la vid y la elaboración de los vinos forman parte de una misma historia.</p>
          <p className="draft">Datos de suelo, clima y altitud: a completar con información confirmada por la bodega.</p>
        </div>
        {img("/assets/vinedos/montana.jpg", "Montaña rocosa de Catamarca con un árbol verde en primer plano", "t1", "(max-width:720px) 100vw, 60vw")}
        {img("/assets/vinedos/uvas-blancas.jpg", "Racimos de uva blanca recién cosechados, con las sierras de fondo", "t2", "(max-width:720px) 100vw, 40vw")}
        {img("/assets/vinedos/hojas-racimo.jpg", "Racimo de uvas verdes entre hojas de vid", "t3", "(max-width:720px) 100vw, 40vw")}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div><div className="foot-logo"><Image src="/assets/logo/logo-principal.png" alt="Bodega Veralma" width={80} height={80} /></div>
          <p>El alma verdadera de cada viñedo.</p></div>
        <div><h3>Navegación</h3><a href="#bodega">La bodega</a><a href="#vinos">Vinos</a><a href="#experiencias">Experiencias</a><a href="#finca">La finca</a><a href="#galeria">Galería</a></div>
        <div><h3>Contacto</h3><p>Ruta 60, km 1032, Tinogasta, Catamarca</p><p>Teléfono: <a href="tel:3837406733">3837406733</a></p><p>Correo: <a href="mailto:Yr164928@gmail.com">Yr164928@gmail.com</a></p></div>
        <div><h3>Redes</h3><p>[Enlaces oficiales a completar]</p></div>
      </div>
      <p className="copy container">© Bodega Veralma. Todos los derechos reservados. Beber con moderación. Prohibida su venta a menores de 18 años.</p>
    </footer>
  );
}
