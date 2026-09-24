import type { Metadata } from "next";
import Hero from "@/components/secciones/Hero";
import Servicios from "@/components/secciones/Servicios";
import MinutoFutbol from "@/components/secciones/MinutoFutbol";
import Precios from "@/components/secciones/Precios";
import Nosotros from "@/components/secciones/Nosotros";
import Contacto from "@/components/secciones/Contacto";
import Asistente from "@/components/Asistente";
import DatosEstructurados from "@/components/DatosEstructurados";

// El título y la descripción salen del layout (lib/seo.ts); acá solo la URL canónica.
export const metadata: Metadata = {
  alternates: { canonical: "./" },
};

export default function Home() {
  return (
    <>
      <DatosEstructurados />
      <Hero />
      <Servicios />
      <MinutoFutbol />
      <Precios />
      <Nosotros />
      <Contacto />
      <Asistente />
    </>
  );
}
