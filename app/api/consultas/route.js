import { NextResponse } from "next/server";
import { dbConfigured, getSql } from "../../../lib/db";
import { validateConsulta } from "../../../lib/validate";

export async function POST(request) {
  let body; try { body = await request.json(); } catch { return NextResponse.json({ ok:false, error:"Solicitud inválida." }, { status:400 }); }
  const { values: v, errors } = validateConsulta(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok:false, errors }, { status:422 });
  if (!dbConfigured()) return NextResponse.json({ ok:false, error:"El servicio de consultas todavía no está configurado." }, { status:503 });
  try {
    const sql = getSql();
    const rows = await sql`INSERT INTO consultas (nombre,email,motivo,mensaje) VALUES (${v.nombre},${v.email},${v.motivo},${v.mensaje}) RETURNING id`;
    return NextResponse.json({ ok:true, id:rows[0].id }, { status:201 });
  } catch (e) { console.error("POST /api/consultas:", e); return NextResponse.json({ ok:false, error:"No pudimos guardar tu consulta. Probá de nuevo en unos minutos." }, { status:500 }); }
}
