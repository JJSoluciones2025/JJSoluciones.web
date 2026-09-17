"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Laptop, Globe, Boxes, Sparkles, Headset, ArrowUpRight } from "lucide-react";
import Encabezado from "./Encabezado";
import { SERVICIOS, LINK_WHATSAPP, type Servicio } from "@/lib/contenido";

const ICONOS = { Cpu, Laptop, Globe, Boxes, Sparkles, Headset };

function Tarjeta({ s, i }: { s: Servicio; i: number }) {
  const Icono = ICONOS[s.icono];
  return (
    <motion.a
      href={LINK_WHATSAPP(`Hola JJSoluciones, quiero consultar por ${s.titulo.toLowerCase()}`)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-violeta/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {s.imagen && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={s.imagen}
            alt=""
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" aria-hidden="true" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 -mt-8 relative">
        <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradiente-marca text-white mb-4">
          <Icono size={22} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold">{s.titulo}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1">{s.descripcion}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violeta">
          Consultar
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 scroll-mt-16">
      <div className="container space-y-12">
        <Encabezado
          etiqueta="Servicios"
          titulo="Todo lo tecnológico de tu negocio, en un solo lugar"
          texto="Desde el sistema que administra tu stock hasta la computadora que se apagó. Para particulares y empresas."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s, i) => (
            <Tarjeta key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
