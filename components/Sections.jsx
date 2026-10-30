import Image from "next/image";
import Photo from "./Photo";
import { ExpButton } from "./Forms";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Raíces del Vino · Tinogasta, Catamarca</p>
          <h1>Descubrí las raíces del vino de Tinogasta</h1>
          <p>Somos una propuesta de turismo enológico en Tinogasta. Organizamos experiencias para conocer viñedos, vinos y productores de la región.</p>
          <div className="btns">
            <a className="btn" href="#vinos">Descubrí los vinos</a>
            <a className="btn btn-light" href="#visita">Solicitá una visita</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [["Visitas","Recorridos por viñedos y fincas"],["Catas","Degustaciones introductorias"],["Talleres","Cursos de cata y maridaje"]];

export function About() {
  return (
    <section id="bodega" className="section">
      <div className="container two-col">
        <div className="collage">
          <figure className="c-main"><Image src="/assets/vinedos/aereo-finca.jpg" alt="Vista aérea de viñedos de Tinogasta, con un galpón y las montañas de fondo" fill sizes="(max-width:720px) 90vw, 45vw" style={{ objectFit: "cover" }} /></figure>
          <figure className="c-side"><Image src="/assets/vinedos/tinogasta.jpg" alt="Montañas de Tinogasta, Catamarca, al borde del viñedo" fill sizes="(max-width:720px) 60vw, 30vw" style={{ objectFit: "cover" }} /></figure>
        </div>
        <div className="text">
          <h2>Nuestra propuesta</h2>
          <p>Raíces del Vino es un emprendimiento de turismo enológico en Tinogasta, Catamarca. Nuestra idea es acercarte a la cultura del vino de la región: sus viñedos, sus paisajes y la gente que los trabaja.</p>
          <p>Las experiencias se organizan en colaboración con bodegas y productores, sujetas a acuerdos y a su disponibilidad.</p>
          <p>Trabajamos en Tinogasta, Catamarca, Argentina.</p>
          <p className="concept"><strong>Importante:</strong> Raíces del Vino no es una bodega ni elabora vinos. Es una propuesta de turismo enológico.</p>
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
        <header className="section-head"><h2>Viví la experiencia Raíces del Vino</h2>
          <p className="draft">Servicios previstos. Horarios, precios y disponibilidad se confirman con Raíces del Vino y la bodega o productor anfitrión.</p></header>
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

const FACTS = [
  ["Clima", "Tinogasta tiene un clima árido: llueve poco y el sol brilla casi todo el año. De día hace calor y de noche refresca bastante. Esa diferencia de temperatura ayuda a que las uvas maduren con calma y conserven sus aromas y su frescura."],
  ["Altitud", "Los viñedos de la región se cultivan en altura, y la altitud cambia según la finca y su ubicación. Más altura significa más luz y noches más frescas, algo que influye en el color, el aroma y el carácter de cada vino."],
  ["Suelo", "Son suelos de zona árida, formados por materiales que bajan de las sierras, con piedras, arenas y minerales. Drenan bien y obligan a la vid a esforzarse, y eso se nota en vinos con identidad propia. No todas las fincas tienen el mismo suelo."]
];

export function Terroir() {
  const img = (src, alt, cls, sizes) => <figure className={cls}><Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} /></figure>;
  return (
    <section id="finca" className="section dark">
      <div className="container terroir">
        <div className="terroir-text">
          <h2>El terruño</h2>
          <p>Hileras de vid al pie de las montañas de Tinogasta: el sol, la altura y la tierra de la región se combinan para darle a sus vinos un carácter propio. Así es el lugar donde nacen.</p>
          <div className="facts">
            {FACTS.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}
          </div>
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
        <div><div className="foot-logo"><Image src="/assets/logo/logo-raices-del-vino.png" alt="Raíces del Vino · Turismo enológico · Tinogasta" width={792} height={905} /></div>
          <p><strong>Raíces del Vino – Turismo Enológico</strong></p>
          <p>Descubrí los viñedos, los vinos y los paisajes de Tinogasta.</p></div>
        <div><h3>Navegación</h3>
          <a href="#inicio">Inicio</a><a href="#bodega">Nosotros</a><a href="#vinos">Vinos</a><a href="#experiencias">Experiencias</a><a href="#finca">El terruño</a><a href="#galeria">Galería</a><a href="#visita">Solicitá una visita</a><a href="#contacto">Contacto</a></div>
        <div><h3>Contacto</h3>
          <p><strong>Ubicación:</strong><br />Tinogasta, Catamarca, Argentina.</p>
          <p><strong>Teléfono:</strong><br /><a href="tel:3837406733">3837406733</a></p>
          <p><strong>Correo electrónico:</strong><br /><a href="mailto:Yr164928@gmail.com">Yr164928@gmail.com</a></p></div>
      </div>
      <p className="copy container">© {new Date().getFullYear()} Raíces del Vino – Turismo Enológico. Todos los derechos reservados. Beber con moderación. Prohibida su venta a menores de 18 años.</p>
    </footer>
  );
}
