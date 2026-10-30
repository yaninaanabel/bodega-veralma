# Requerimientos y estado

| Función | Estado |
|---|---|
| Inicio, Nuestra propuesta, El terruño, Galería con categorías y ampliación | Implementado en código |
| Catálogo de 6 vinos desde PostgreSQL (con respaldo local) y filtros | Implementado en código |
| Experiencias desde PostgreSQL (con respaldo local) | Implementado en código |
| Formulario de consultas → tabla `consultas` | Implementado; requiere `DATABASE_URL` |
| Solicitud de visita → tabla `solicitudes_visita`, sin fechas pasadas, sin pagos | Implementado; requiere `DATABASE_URL` |
| WhatsApp | Se activa al completar `NEXT_PUBLIC_WHATSAPP` |
| Mapa | Incrustado por dirección; confirmar que el punto sea el correcto |

Las tarjetas de vinos no muestran precios. Teléfono y correo ya figuran en Contacto y pie.
Pendiente de información real: duración y horarios de experiencias, redes, fotos de botellas de Cabernet Sauvignon, Syrah, Torrontés y Tempranillo.
Estado de las pruebas: ver README (sección «Qué se verificó»).

Fotos de vinos: `lib/data.js` tiene prioridad sobre la columna `foto` de PostgreSQL (ver `lib/db.js`). Si una foto falta o falla, la tarjeta muestra el nombre de la variedad sobre fondo burdeos.
