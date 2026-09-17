"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { LINK_WHATSAPP } from "@/lib/contenido";

// Escena 3D del robot. Es la escena pública de demostración del componente de
// 21st.dev; conviene reemplazarla por una propia hecha en spline.design
// (exportar → "Code" → URL .splinecode) para que sea de JJSoluciones.
const ESCENA_ROBOT = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black pt-16">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={420} />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div className="py-12 lg:py-0 max-w-xl">
          <p className="text-violeta text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up">
            Desarrollo · Sistemas · Soporte técnico
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Hacemos el sistema que tu negocio necesita
          </h1>
          <p className="mt-6 text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "160ms" }}>
            Control de stock, sitios web, apps y reparación de equipos. Un solo equipo para todo lo
            tecnológico de tu negocio, en General Arenales y la zona.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button asChild size="lg">
              <a href={LINK_WHATSAPP("Hola JJSoluciones, quiero pedir un presupuesto")} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Pedir presupuesto
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicios">
                Ver servicios
                <ArrowDown aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        {/* Robot 3D */}
        <div className="relative h-[360px] sm:h-[460px] lg:h-[640px]">
          <SplineScene scene={ESCENA_ROBOT} className="w-full h-full" />
          {/* Fundido con el fondo para que la escena no corte en seco */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
