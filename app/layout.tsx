import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "DAVE OSORIO - Artista y productor musical",
  description: "Portafolio oficial de DAVE OSORIO. Musica, lanzamientos, experiencias audiovisuales, presentaciones y contacto profesional.",
  alternates: { canonical: "/" },
  openGraph: { title: "DAVE OSORIO - Artista y productor musical", description: "Portafolio oficial de DAVE OSORIO.", type: "website", locale: "es_CO" },
  twitter: { card: "summary", title: "DAVE OSORIO", description: "Portafolio oficial de DAVE OSORIO." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
