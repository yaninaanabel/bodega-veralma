import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700", variable: "--font-playfair", display: "swap" });
const lora = Lora({ subsets: ["latin"], weight: "400", variable: "--font-lora", display: "swap" });
const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(site),
  title: "Raíces del Vino · Turismo enológico en Tinogasta, Catamarca",
  description: "Raíces del Vino, turismo enológico en Tinogasta, Catamarca: experiencias para conocer viñedos y vinos de la región, catas y talleres.",
  openGraph: { title: "Raíces del Vino · Turismo enológico en Tinogasta", description: "Experiencias para conocer los viñedos y vinos de Tinogasta, catas y talleres.", locale: "es_AR", type: "website", images: ["/assets/vinedos/hero-vinedo.jpg"] },
  icons: { icon: "/assets/logo/logo-raices-del-vino.png" }
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#610139" };

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={`${playfair.variable} ${lora.variable}`}>
      <body><a className="skip" href="#contenido">Saltar al contenido</a>{children}</body>
    </html>
  );
}
