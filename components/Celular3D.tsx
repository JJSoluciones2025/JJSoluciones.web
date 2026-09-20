"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PANTALLAS = [
  { src: "/app/pantalla-home.svg", alt: "Pantalla de inicio de Minuto Fútbol con un partido en vivo" },
  { src: "/app/pantalla-partido.svg", alt: "Minuto a minuto de un partido en Minuto Fútbol" },
  { src: "/app/pantalla-tabla.svg", alt: "Tabla de posiciones en Minuto Fútbol" },
];

// Celular Android (cámara frontal "agujero", barra de gestos, módulo de
// cámaras vertical atrás) que gira en 3D con CSS puro mostrando pantallas de
// la app que van cambiando. Con "reducir movimiento" queda quieto de frente.
export default function Celular3D({ className }: { className?: string }) {
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiva((a) => (a + 1) % PANTALLAS.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={cn("celular-escena", className)} aria-hidden="false">
      <div className="celular-giro">
        {/* Cuerpo del teléfono */}
        <div className="celular-cuerpo">
          <div className="celular-borde" />
          <div className="celular-pantalla">
            {PANTALLAS.map((p, i) => (
              <Image
                key={p.src}
                src={p.src}
                alt={p.alt}
                fill
                sizes="300px"
                priority={i === 0}
                className={cn("object-cover transition-opacity duration-700", i === activa ? "opacity-100" : "opacity-0")}
              />
            ))}
            {/* brillo del vidrio */}
            <div className="celular-brillo" aria-hidden="true" />
          </div>
          <div className="celular-notch" aria-hidden="true" />
          <div className="celular-boton celular-boton-1" aria-hidden="true" />
          <div className="celular-boton celular-boton-2" aria-hidden="true" />
          <div className="celular-boton celular-boton-3" aria-hidden="true" />
        </div>
        {/* Dorso (se ve cuando gira) */}
        <div className="celular-dorso" aria-hidden="true">
          <div className="celular-camara" />
          <span className="celular-marca">JJ</span>
        </div>
      </div>
      <div className="celular-sombra" aria-hidden="true" />
    </div>
  );
}
