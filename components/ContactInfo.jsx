// Datos de contacto de Bodega Veralma. Para cambiarlos, editá las tres constantes de abajo.
export const TELEFONO = "3837406733";
export const CORREO = "Yr164928@gmail.com";
export const DIRECCION = "Ruta 60, km 1032, Tinogasta, Catamarca";

const Icon = ({ children }) => (
  <svg className="ci-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export default function ContactInfo() {
  return (
    <ul className="contact-list">
      <li>
        <Icon><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></Icon>
        <div><strong>Teléfono</strong><a href={`tel:${TELEFONO}`} aria-label={`Llamar al ${TELEFONO}`}>{TELEFONO}</a></div>
      </li>
      <li>
        <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
        <div><strong>Correo electrónico</strong><a href={`mailto:${CORREO}`}>{CORREO}</a></div>
      </li>
      <li>
        <Icon><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></Icon>
        <div><strong>Dirección</strong><span>{DIRECCION}</span></div>
      </li>
    </ul>
  );
}
