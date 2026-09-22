"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Download, LogOut, X } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { PROYECTOS, type Proyecto } from "@/lib/contenido";

// Vitrina interna: la pantalla que vemos nosotros al entrar con el email de
// JJSoluciones. Es para mostrarle al cliente, uno por uno, los trabajos que
// tenemos hechos: se toca una tarjeta y se abre la ficha grande.
export default function VitrinaProyectos({ onSalir }: { onSalir: () => void }) {
  const [abierto, setAbierto] = useState<Proyecto | null>(null);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black pt-24 pb-20 px-4">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-4">
            <Logo conNombre={false} tamano={48} />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Nuestros trabajos</h1>
              <p className="text-sm text-muted-foreground">
                Sistemas, apps y sitios que desarrollamos. Tocá uno para verlo en detalle.
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={onSalir}>
            <LogOut aria-hidden="true" />
            Salir
          </Button>
        </motion.header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS.map((p, i) => (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={() => setAbierto(p)}
                className="group w-full text-left rounded-2xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:border-violeta/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div className="relative aspect-[16/10] bg-black">
                  <Image
                    src={p.imagen}
                    alt={`Pantalla del sistema ${p.nombre}`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute inset-x-0 bottom-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: p.color }} aria-hidden="true" />
                    <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{p.tipo}</span>
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight">{p.nombre}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.resumen}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-violeta pt-1">
                    Ver detalle
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Acceso interno de JJSoluciones · {PROYECTOS.length} trabajos
        </p>
      </div>

      <AnimatePresence>
        {abierto && <FichaProyecto proyecto={abierto} onCerrar={() => setAbierto(null)} />}
      </AnimatePresence>
    </section>
  );
}

// Ficha grande de un proyecto, para mostrarla en pantalla mientras se explica.
function FichaProyecto({ proyecto, onCerrar }: { proyecto: Proyecto; onCerrar: () => void }) {
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    caja.current?.focus();
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function tecla(e: KeyboardEvent) {
      if (e.key === "Escape") onCerrar();
    }
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = previo;
    };
  }, [onCerrar]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 py-10 backdrop-blur-sm"
      onClick={onCerrar}
    >
      <motion.div
        ref={caja}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ficha-titulo"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-3xl border border-border bg-card outline-none"
      >
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-black">
          <Image
            src={proyecto.imagen}
            alt={`Pantalla del sistema ${proyecto.nombre}`}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                style={{ background: `${proyecto.color}22`, color: proyecto.color }}
              >
                {proyecto.tipo}
              </span>
              {proyecto.estado && (
                <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                  {proyecto.estado}
                </span>
              )}
            </div>
            <h2 id="ficha-titulo" className="text-2xl md:text-3xl font-bold tracking-tight">
              {proyecto.nombre}
            </h2>
            <p className="text-muted-foreground">{proyecto.descripcion}</p>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {proyecto.puntos.map((punto) => (
              <li key={punto} className="flex items-start gap-2 text-sm">
                <Check size={16} className="mt-0.5 shrink-0" style={{ color: proyecto.color }} aria-hidden="true" />
                <span>{punto}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {proyecto.tecnologias.map((t) => (
              <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          {(proyecto.url || proyecto.extraUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {proyecto.url && (
                <Button asChild size="lg">
                  <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                    {proyecto.urlTexto ?? "Abrir"}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              )}
              {proyecto.extraUrl && (
                <Button asChild size="lg" variant="outline">
                  <a href={proyecto.extraUrl} target="_blank" rel="noopener noreferrer">
                    <Download aria-hidden="true" />
                    {proyecto.extraTexto ?? "Descargar"}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
