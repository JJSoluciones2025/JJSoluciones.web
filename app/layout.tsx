import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EMPRESA } from "@/lib/contenido";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

// URL pública: GitHub Pages hasta que esté el dominio propio en cPanel
const URL_SITIO = process.env.NEXT_PUBLIC_SITE_URL || "https://jjsoluciones2025.github.io/JJSoluciones.web";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITIO),
  title: {
    default: "JJSoluciones — Sistemas, sitios web y soporte técnico",
    template: "%s · JJSoluciones",
  },
  description: `${EMPRESA.eslogan}. Desarrollo de sistemas de gestión, sitios web, apps y reparación de PC y notebooks.`,
  icons: { icon: "/marca/logo.svg", apple: "/marca/logo.svg" },
  openGraph: {
    type: "website",
    siteName: "JJSoluciones",
    locale: "es_AR",
    title: "JJSoluciones — Sistemas, sitios web y soporte técnico",
    description: EMPRESA.eslogan,
    images: [{ url: "/marca/logo.svg", width: 512, height: 512, alt: "JJSoluciones" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} dark`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
