"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Encabezado from "./Encabezado";
import { METRICAS, GALERIA } from "@/lib/contenido";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 scroll-mt-16 bg-[#070707] border-y border-border">
      <div className="container space-y-12">
        <Encabezado
          etiqueta="Nosotros"
          titulo="Dos personas, un solo equipo"
          texto="Somos dos profesionales de tecnología. Trabajamos con particulares y comercios de la zona, cara a cara: nos conocés, sabés a quién llamar."
        />

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {METRICAS.map((m, i) => (
            <motion.div
              key={m.etiqueta}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center rounded-2xl border border-border bg-card py-6 px-2"
            >
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradiente-marca">{m.valor}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{m.etiqueta}</p>
            </motion.div>
          ))}
        </div>

        {/* Fotos de trabajos reales */}
        <div className="columns-2 md:columns-4 gap-3 space-y-3">
          {GALERIA.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative overflow-hidden rounded-xl border border-border break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Trabajo de reparación y armado de equipos ${i + 1}`}
                width={600}
                height={i % 3 === 0 ? 800 : 500}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500 motion-reduce:transition-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
