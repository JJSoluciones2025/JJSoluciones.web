"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, Smartphone, Download, ExternalLink, Radio, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderTrail } from "@/components/ui/border-trail";
import { MINUTO_FUTBOL } from "@/lib/contenido";
import { guardarConsentimiento, useConsentimiento } from "@/lib/consentimiento";

const PUNTOS = [
  { icono: Radio, texto: "Resultados y minuto a minuto en vivo" },
  { icono: Bell, texto: "Notificaciones de goles, tarjetas y resultados" },
  { icono: Trophy, texto: "Fixture, tabla, goleadores y noticias de la liga" },
];

// El proyecto destacado: el sitio + la app de la Liga Deportiva de General Arenales
export default function MinutoFutbol() {
  const consentimiento = useConsentimiento();
  return (
    <section id="minuto-futbol" className="py-24 scroll-mt-16 bg-[#070707] border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-card p-8 md:p-12 overflow-hidden"
        >
          <BorderTrail size={120} style={{ boxShadow: "0 0 60px 30px rgb(183 148 244 / 0.35)" }} />

          <div className="space-y-6">
            <Badge variant="marca">Lo nuevo</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Minuto <span className="text-[#d4ff3f]">Fútbol</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              El sitio y la app oficial de la Liga Deportiva de General Arenales, desarrollados por
              JJSoluciones. Todos los partidos, en vivo, en el celular de cada hincha.
            </p>
            <ul className="space-y-3">
              {PUNTOS.map(({ icono: Icono, texto }) => (
                <li key={texto} className="flex items-center gap-3 text-sm md:text-base">
                  <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-secondary text-[#d4ff3f] flex-shrink-0">
                    <Icono size={18} aria-hidden="true" />
                  </span>
                  {texto}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              {MINUTO_FUTBOL.apkDisponible ? (
                <Button asChild size="lg" className="bg-[#d4ff3f] text-black hover:bg-[#c4ef2f]">
                  <a href={MINUTO_FUTBOL.apk} download>
                    <Download aria-hidden="true" />
                    Descargar la app (Android)
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled className="bg-[#d4ff3f] text-black">
                  <Smartphone aria-hidden="true" />
                  App para Android: muy pronto
                </Button>
              )}
              <Button asChild size="lg" variant="outline">
                <a href={MINUTO_FUTBOL.sitio} target="_blank" rel="noopener noreferrer">
                  Ver el sitio
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mockup de celular con el sitio adentro. El marco embebido es
              contenido de otro sitio: solo se carga si se aceptaron terceros. */}
          <div className="flex justify-center">
            <div className="relative w-[260px] h-[520px] rounded-[2.5rem] border-[6px] border-neutral-800 bg-black shadow-2xl overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-neutral-800" aria-hidden="true" />
              {consentimiento?.terceros ? (
                <iframe
                  src={MINUTO_FUTBOL.sitio}
                  title="Vista previa de Minuto Fútbol"
                  className="w-full h-full pt-6 bg-black"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className="w-full h-full pt-6 flex flex-col items-center justify-center text-center px-6 gap-3">
                  <Smartphone size={40} className="text-[#d4ff3f]" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">
                    La vista previa carga contenido de minutofutbol.jsoluciones.com.ar.
                  </p>
                  {consentimiento !== undefined && (
                    <button
                      type="button"
                      onClick={() => guardarConsentimiento(true)}
                      className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-[#d4ff3f] text-black text-xs font-semibold hover:bg-[#c4ef2f]"
                    >
                      Mostrar vista previa
                    </button>
                  )}
                  <p className="text-[11px] text-muted-foreground">
                    Al mostrarla aceptás el contenido de terceros (ver{" "}
                    <Link href="/legal/cookies/" className="underline">
                      cookies
                    </Link>
                    ).
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
