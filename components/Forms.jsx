"use client";
import { useEffect, useRef, useState } from "react";
import { validateConsulta, validateVisita, todayAR } from "../lib/validate";

/* Envía el formulario a la API. Solo muestra "ok" cuando el servidor confirma que se guardó en PostgreSQL. */
function useSubmit(url, validate) {
  const [state, setState] = useState({ status: "idle", errors: {}, message: "" });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const { errors } = validate(data);
    if (Object.keys(errors).length) return setState({ status: "error", errors, message: "Revisá los campos marcados." });
    setState({ status: "sending", errors: {}, message: "" });
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) { form.reset(); setState({ status: "ok", errors: {}, message: "" }); }
      else setState({ status: "error", errors: json.errors || {}, message: json.error || "Revisá los campos marcados." });
    } catch { setState({ status: "error", errors: {}, message: "No hay conexión. Probá de nuevo en unos minutos." }); }
  }
  return [state, onSubmit];
}

function Field({ id, label, error, full, children }) {
  return (
    <div className={`field${full ? " full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="field-error" id={`${id}-err`}>{error}</p>}
    </div>
  );
}
// "p" es un prefijo solo para el id (así dos formularios en la misma página no repiten ids); el name no cambia.
const ia = (id, error, p = "") => ({ id: p + id, name: id, "aria-invalid": error ? "true" : undefined, "aria-describedby": error ? `${p + id}-err` : undefined });
const Status = ({ state, okText }) => (
  <div className="full" role="status" aria-live="polite">
    {state.status === "sending" && <p>Enviando…</p>}
    {state.status === "ok" && <p className="alert ok">{okText}</p>}
    {state.status === "error" && state.message && <p className="alert err">{state.message}</p>}
  </div>
);

export function ContactForm() {
  const [state, onSubmit] = useSubmit("/api/consultas", validateConsulta);
  const e = state.errors, P = "c-";
  return (
    <form onSubmit={onSubmit} noValidate>
      <Field id={P + "nombre"} label="Nombre completo" error={e.nombre}><input {...ia("nombre", e.nombre, P)} autoComplete="name" required /></Field>
      <Field id={P + "email"} label="Correo electrónico" error={e.email}><input {...ia("email", e.email, P)} type="email" autoComplete="email" required /></Field>
      <Field id={P + "telefono"} label="Teléfono (opcional)" error={e.telefono}><input {...ia("telefono", e.telefono, P)} type="tel" autoComplete="tel" /></Field>
      <Field id={P + "motivo"} label="Motivo de consulta" error={e.motivo}>
        <select {...ia("motivo", e.motivo, P)} defaultValue="" required>
          <option value="" disabled>Elegí una opción</option>
          <option>Consulta general</option><option>Comercios y distribuidores</option><option>Cursos y talleres</option><option>Otro motivo</option>
        </select>
      </Field>
      <Field id={P + "mensaje"} label="Mensaje" error={e.mensaje} full><textarea {...ia("mensaje", e.mensaje, P)} rows={4} required /></Field>
      <button className="btn full" type="submit" disabled={state.status === "sending"}>Enviar consulta</button>
      <Status state={state} okText="¡Gracias! Recibimos tu consulta y te responderemos a la brevedad." />
    </form>
  );
}

export function VisitForm({ experiences }) {
  const [state, onSubmit] = useSubmit("/api/visitas", validateVisita);
  const sel = useRef(null);
  const e = state.errors;
  useEffect(() => {
    const on = ev => { if (sel.current) sel.current.value = String(ev.detail); };
    window.addEventListener("veralma:exp", on); return () => window.removeEventListener("veralma:exp", on);
  }, []);
  return (
    <form onSubmit={onSubmit} noValidate>
      <Field id="nombre" label="Nombre y apellido" error={e.nombre}><input {...ia("nombre", e.nombre)} autoComplete="name" required /></Field>
      <Field id="email" label="Correo electrónico" error={e.email}><input {...ia("email", e.email)} type="email" autoComplete="email" required /></Field>
      <Field id="telefono" label="Teléfono de contacto" error={e.telefono}><input {...ia("telefono", e.telefono)} type="tel" autoComplete="tel" required /></Field>
      <Field id="fecha" label="Fecha solicitada" error={e.fecha}><input {...ia("fecha", e.fecha)} type="date" min={todayAR()} required /></Field>
      <Field id="personas" label="Cantidad de personas" error={e.personas}><input {...ia("personas", e.personas)} type="number" min="1" max="50" required /></Field>
      <Field id="experiencia" label="Experiencia de interés" error={e.experiencia}>
        <select {...ia("experiencia", e.experiencia)} ref={sel} defaultValue="">
          <option value="">Todavía no lo sé</option>
          {experiences.map(x => <option key={x.id} value={x.id}>{x.nombre}</option>)}
        </select>
      </Field>
      <Field id="comentarios" label="Comentarios adicionales" error={e.comentarios} full><textarea {...ia("comentarios", e.comentarios)} rows={3} /></Field>
      <button className="btn full" type="submit" disabled={state.status === "sending"}>Enviar solicitud de visita</button>
      <Status state={state} okText="Recibimos tu solicitud. Todavía no es una reserva: la bodega revisará la disponibilidad y te confirmará la visita." />
    </form>
  );
}

export function ExpButton({ id }) {
  return <a className="btn push" href="#visita" onClick={() => window.dispatchEvent(new CustomEvent("veralma:exp", { detail: id }))}>Solicitar una visita</a>;
}
