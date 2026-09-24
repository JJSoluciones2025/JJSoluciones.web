import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { DESCRIPCION_PRINCIPAL, GOOGLE_VERIFICACION, TITULO_PRINCIPAL, URL_SITIO } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

// metadataBase lleva barra final para que las rutas relativas (og.png) se
// resuelvan bien también en GitHub Pages, donde el sitio vive en una subcarpeta.
export const metadata: Metadata = {
  metadataBase: new URL(`${URL_SITIO}/`),
  title: {
    default: TITULO_PRINCIPAL,
    template: "%s · JJSoluciones",
  },
  description: DESCRIPCION_PRINCIPAL,
  applicationName: "JJSoluciones",
  authors: [{ name: "JJSoluciones", url: URL_SITIO }],
  creator: "JJSoluciones",
  icons: { icon: "/marca/logo.svg", apple: "/marca/logo.svg" },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: "JJSoluciones",
    locale: "es_AR",
    title: TITULO_PRINCIPAL,
    description: DESCRIPCION_PRINCIPAL,
    images: [{ url: "og.png", width: 1200, height: 630, alt: "JJSoluciones: sistemas, sitios web y soporte técnico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO_PRINCIPAL,
    description: DESCRIPCION_PRINCIPAL,
    images: ["og.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: GOOGLE_VERIFICACION ? { google: GOOGLE_VERIFICACION } : undefined,
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
        <CookieBanner />
      </body>
    </html>
  );
}
