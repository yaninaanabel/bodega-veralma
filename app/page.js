import Header from "../components/Header";
import Wines from "../components/Wines";
import Gallery from "../components/Gallery";
import ContactInfo from "../components/ContactInfo";
import { ContactForm, VisitForm } from "../components/Forms";
import { Hero, About, Experiences, Terroir, Footer } from "../components/Sections";
import { getWines, getExperiences } from "../lib/db";

export const dynamic = "force-dynamic"; // el catálogo se lee de PostgreSQL en cada visita

export default async function Home() {
  const [wines, experiences] = await Promise.all([getWines(), getExperiences()]);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <section id="vinos" className="section tint"><div className="container">
          <header className="section-head"><h2>Nuestros vinos</h2>
            <p className="draft">Precios, añadas y datos técnicos: pendientes de confirmación por la bodega.</p></header>
          <Wines wines={wines} />
        </div></section>
        <Experiences items={experiences} />
        <Terroir />
        <section id="galeria" className="section tint"><div className="container">
          <header className="section-head"><h2>Galería</h2></header>
          <Gallery />
        </div></section>
        <section id="visita" className="section"><div className="container contact">
          <div className="text"><h2>Solicitá una visita</h2>
            <p>Contanos cuándo te gustaría venir y qué experiencia te interesa. La solicitud no es una reserva: la bodega revisará la disponibilidad y te confirmará la visita.</p>
            <p className="draft">No se realizan cobros ni pagos online.</p></div>
          <VisitForm experiences={experiences} />
        </div></section>
        <section id="contacto" className="section tint"><div className="container contact">
          <div className="text"><h2>Contacto</h2>
            <p>Bodega Veralma</p>
            <ContactInfo />
            {whatsapp && <p><a className="btn" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a></p>}
            <div className="map"><iframe title="Mapa de ubicación de Bodega Veralma" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ruta+60+km+1032+Villa+San+Roque+Tinogasta+Catamarca&output=embed" /></div>
          </div>
          <ContactForm />
        </div></section>
      </main>
      <Footer />
    </>
  );
}
