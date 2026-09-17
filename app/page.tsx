import Hero from "@/components/secciones/Hero";
import Servicios from "@/components/secciones/Servicios";
import MinutoFutbol from "@/components/secciones/MinutoFutbol";
import Precios from "@/components/secciones/Precios";
import Nosotros from "@/components/secciones/Nosotros";
import Contacto from "@/components/secciones/Contacto";
import Asistente from "@/components/Asistente";

export default function Home() {
  return (
    <>
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
