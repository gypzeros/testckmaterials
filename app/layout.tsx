import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CKMaterials — Materiales de construcción premium",
  description:
    "Distribuidor de referencia en cerámica, porcelánico, azulejos y revestimientos de alta calidad. Marcas italianas, españolas y portuguesas para proyectos que inspiran.",
  keywords: [
    "cerámica",
    "porcelánico",
    "azulejos",
    "revestimientos",
    "materiales de construcción",
    "CKMaterials",
  ],
  openGraph: {
    title: "CKMaterials — Materiales de construcción premium",
    description:
      "Cerámica, porcelánico y revestimientos de alta calidad para transformar espacios.",
    type: "website",
    locale: "es_ES",
    siteName: "CKMaterials",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
