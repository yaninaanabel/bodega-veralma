import { NextResponse } from "next/server";
import { dbConfigured, getSql } from "../../../lib/db";
import { validateVisita } from "../../../lib/validate";

export async function POST(request) {
  let body; try { body = await request.json(); } catch { return NextResponse.json({ ok:false, error:"Solicitud inválida." }, { status:400 }); }
  const { values: v, errors } = validateVisita(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok:false, errors }, { status:422 });
  if (!dbConfigured()) return NextResponse.json({ ok:false, error:"El servicio de solicitudes todavía no está configurado." }, { status:503 });
  try {
    const sql = getSql();
    const rows = await sql`INSERT INTO solicitudes_visita (nombre_apellido,email,telefono,fecha_solicitada,cantidad_personas,experiencia_id,comentarios)
      VALUES (${v.nombre},${v.email},${v.telefono},${v.fecha},${v.personas},${v.experiencia},${v.comentarios || null}) RETURNING id`;
    return NextResponse.json({ ok:true, id:rows[0].id }, { status:201 });
  } catch (e) { console.error("POST /api/visitas:", e); return NextResponse.json({ ok:false, error:"No pudimos guardar tu solicitud. Probá de nuevo en unos minutos." }, { status:500 }); }
}
