"use client";

import { motion } from "framer-motion";
import { Plus, ShieldCheck, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import Encabezado from "./Encabezado";
import { PLANES, LINK_WHATSAPP, type Plan } from "@/lib/contenido";
import { cn } from "@/lib/utils";

function TarjetaPlan({ plan }: { plan: Plan }) {
  return (
    <div className={cn("relative w-full px-5 pt-6 pb-5", plan.destacado && "rounded-lg border border-border")}>
      {plan.destacado && (
        <BorderTrail size={100} style={{ boxShadow: "0 0 60px 30px rgb(183 148 244 / 0.5), 0 0 100px 60px rgb(0 0 0 / 0.5)" }} />
      )}
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="leading-none font-semibold text-lg">{plan.nombre}</h3>
          {plan.destacado && <Badge variant="marca">Más elegido</Badge>}
        </div>
        <p className="text-muted-foreground text-sm">{plan.descripcion}</p>
      </div>

      <div className="mt-8 space-y-5">
        <div className="text-muted-foreground flex items-end gap-1 text-xl">
          <span>$</span>
          <span className="text-foreground -mb-0.5 text-4xl md:text-5xl font-extrabold tracking-tighter tabular-nums">
            {plan.precio}
          </span>
          <span className="text-sm mb-1">{plan.detalle}</span>
        </div>

        <ul className="space-y-2">
          {plan.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <Check size={16} className="mt-0.5 text-violeta flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <Button asChild className="w-full" variant={plan.destacado ? "default" : "outline"}>
          <a href={LINK_WHATSAPP(`Hola JJSoluciones, me interesa el plan ${plan.nombre}`)} target="_blank" rel="noopener noreferrer">
            Quiero este plan
          </a>
        </Button>
      </div>
    </div>
  );
}

export default function Precios() {
  return (
    <section id="precios" className="relative py-24 scroll-mt-16 overflow-hidden">
      <div className="container space-y-12">
        <Encabezado
          etiqueta="Precios"
          titulo="Claros y sin sorpresas"
          texto="Dos planes de sitio web con pago único. Los sistemas de gestión se presupuestan a medida."
        />

        <div className="relative">
          <div className="grilla-fondo pointer-events-none absolute inset-0" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto w-full max-w-3xl space-y-3"
          >
            <div className="relative grid md:grid-cols-2 gap-2 bg-background border border-border p-3">
              <Plus className="absolute -top-3 -left-3 size-6 text-muted-foreground" aria-hidden="true" />
              <Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground" aria-hidden="true" />
              <Plus className="absolute -bottom-3 -left-3 size-6 text-muted-foreground" aria-hidden="true" />
              <Plus className="absolute -right-3 -bottom-3 size-6 text-muted-foreground" aria-hidden="true" />
              {PLANES.map((p) => (
                <TarjetaPlan key={p.id} plan={p} />
              ))}
            </div>

            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <ShieldCheck className="size-4" aria-hidden="true" />
              <span>Precio final, sin costos ocultos. Se puede abonar en cuotas.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
