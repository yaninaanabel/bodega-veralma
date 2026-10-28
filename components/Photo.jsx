import Image from "next/image";

/* Foto con proporción fija. Si no hay foto, muestra un aviso "Foto pendiente". */
export default function Photo({ src, alt, label, ratio = "ratio-43", sizes = "(max-width:720px) 100vw, 33vw", priority = false }) {
  if (!src) return <div className={`pic missing ${ratio}`} role="img" aria-label={`Foto pendiente: ${label || alt}`}>Foto pendiente: {label || alt}</div>;
  return <div className={`pic ${ratio}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} /></div>;
}
