# Requerimientos y estado

| Función | Estado |
|---|---|
| Inicio, Nuestra bodega, La finca, Galería con categorías y ampliación | Implementado en código |
| Catálogo de 6 vinos desde PostgreSQL (con respaldo local) y filtros | Implementado en código |
| Experiencias desde PostgreSQL (con respaldo local) | Implementado en código |
| Formulario de consultas → tabla `consultas` | Implementado; requiere `DATABASE_URL` |
| Solicitud de visita → tabla `solicitudes_visita`, sin fechas pasadas, sin pagos | Implementado; requiere `DATABASE_URL` |
| WhatsApp | Se activa al completar `NEXT_PUBLIC_WHATSAPP` |
| Mapa | Incrustado por dirección; confirmar que el punto sea el correcto |

Pendiente de información real: precios, añadas, graduación, notas de cata, duración y horarios de experiencias, teléfono, correo, redes, fotos de botellas de Cabernet Sauvignon, Syrah, Torrontés y Tempranillo.
Estado de las pruebas: ver README (sección «Qué se verificó»).
