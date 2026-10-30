INSERT INTO vinos (id,nombre,variedad,tipo,descripcion,foto,publicado) VALUES
 (1,'Cabernet Sauvignon','Cabernet Sauvignon','tinto','Vino tinto de Tinogasta, Catamarca.',NULL,TRUE),
 (2,'Chardonnay','Chardonnay','blanco','Vino blanco de Tinogasta, Catamarca.','/assets/vinos/seismiles.jpg',TRUE),
 (3,'Malbec','Malbec','tinto','Vino tinto de Tinogasta, Catamarca.','/assets/vinos/la-gesta.jpg',TRUE),
 (4,'Syrah','Syrah','tinto','Vino tinto de Tinogasta, Catamarca.',NULL,TRUE),
 (5,'Torrontés','Torrontés','blanco','Vino blanco de Tinogasta, Catamarca.',NULL,TRUE),
 (6,'Tempranillo','Tempranillo','tinto','Vino tinto de Tinogasta, Catamarca.',NULL,TRUE)
ON CONFLICT (id) DO NOTHING;
INSERT INTO experiencias (id,nombre,descripcion,foto,publicado) VALUES
 (1,'Tours guiados por viñedos y fincas','Recorrido por viñedos y fincas para conocer el origen de los vinos.','/assets/vinedos/hero-vinedo.jpg',TRUE),
 (2,'Catas básicas','Degustación introductoria para reconocer aromas y sabores de los vinos de la región.','/assets/experiencias/seismiles-copa.jpg',TRUE),
 (3,'Cursos y talleres de cata','Espacios de aprendizaje para estudiantes de enología y aficionados a la cata.','/assets/experiencias/servicio-tinto.jpg',TRUE),
 (4,'Talleres de maridaje','Encuentros para descubrir cómo combinar vinos y comidas.','/assets/experiencias/botellas-copas.jpg',TRUE)
ON CONFLICT (id) DO NOTHING;
SELECT setval('vinos_id_seq',(SELECT MAX(id) FROM vinos));
SELECT setval('experiencias_id_seq',(SELECT MAX(id) FROM experiencias))
