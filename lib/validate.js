// Validaciones compartidas por el navegador y el servidor (el servidor siempre vuelve a validar).
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const text = v => (typeof v === "string" ? v.trim() : "");
export const todayAR = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Argentina/Catamarca" }); // AAAA-MM-DD

export function validateConsulta(d) {
  const v = { nombre:text(d.nombre), email:text(d.email), telefono:text(d.telefono), motivo:text(d.motivo), mensaje:text(d.mensaje) }, e = {};
  if (v.nombre.length < 3 || v.nombre.length > 120) e.nombre = "Ingresá tu nombre (mínimo 3 letras).";
  if (!EMAIL.test(v.email) || v.email.length > 160) e.email = "Ingresá un correo electrónico válido.";
  if (v.telefono && !/^[0-9+\s()\-]{7,25}$/.test(v.telefono)) e.telefono = "Si ingresás un teléfono, usá solo números, +, espacios o guiones.";
  if (!v.motivo) e.motivo = "Elegí el motivo de tu consulta.";
  if (v.mensaje.length < 10 || v.mensaje.length > 2000) e.mensaje = "Escribí un mensaje de al menos 10 caracteres.";
  return { values: v, errors: e };
}
export function validateVisita(d) {
  const v = { nombre:text(d.nombre), email:text(d.email), telefono:text(d.telefono), fecha:text(d.fecha),
    personas:Number(d.personas), experiencia:d.experiencia ? Number(d.experiencia) : null, comentarios:text(d.comentarios) }, e = {};
  if (v.nombre.length < 3 || v.nombre.length > 120) e.nombre = "Ingresá tu nombre y apellido.";
  if (!EMAIL.test(v.email)) e.email = "Ingresá un correo electrónico válido.";
  if (!/^[0-9+\s()\-]{7,25}$/.test(v.telefono)) e.telefono = "Ingresá un teléfono válido (solo números, +, espacios o guiones).";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.fecha)) e.fecha = "Elegí una fecha.";
  else if (v.fecha < todayAR()) e.fecha = "La fecha no puede ser anterior a hoy.";
  if (!Number.isInteger(v.personas) || v.personas < 1 || v.personas > 50) e.personas = "Indicá entre 1 y 50 personas.";
  if (v.comentarios.length > 1500) e.comentarios = "Los comentarios son demasiado largos.";
  return { values: v, errors: e };
}
