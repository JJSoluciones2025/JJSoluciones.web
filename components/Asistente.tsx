"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, ArrowDown, MessageCircle, X } from "lucide-react";
import { LINK_WHATSAPP } from "@/lib/contenido";
import { useConsentimiento } from "@/lib/consentimiento";

// Guía que acompaña al visitante: una burbuja con el "robot" que va cambiando
// el mensaje según la sección visible y ofrece bajar a la siguiente o hablar
// por WhatsApp. Es la parte "te ayuda a recorrer la página" del robot 3D.
const PASOS: { id: string; mensaje: string; siguiente?: string; etiqueta?: string }[] = [
  { id: "inicio", mensaje: "¡Hola! Soy el asistente de JJSoluciones. ¿Te muestro lo que hacemos?", siguiente: "#servicios", etiqueta: "Ver servicios" },
  { id: "servicios", mensaje: "Sistemas, sitios web y reparaciones. Mirá lo último que lanzamos:", siguiente: "#minuto-futbol", etiqueta: "Ver Minuto Fútbol" },
  { id: "minuto-futbol", mensaje: "Minuto Fútbol: la app de la liga local. ¿Querés saber cuánto sale un sitio así?", siguiente: "#precios", etiqueta: "Ver precios" },
  { id: "precios", mensaje: "Dos planes, pago único. Si necesitás algo a medida, lo presupuestamos.", siguiente: "#nosotros", etiqueta: "Conocernos" },
  { id: "nosotros", mensaje: "Somos dos y trabajamos cara a cara. ¿Hablamos?", siguiente: "#contacto", etiqueta: "Ir a contacto" },
  { id: "contacto", mensaje: "Escribinos por WhatsApp y te respondemos a la brevedad." },
];

export default function Asistente() {
  const [activo, setActivo] = useState("inicio");
  const [cerrado, setCerrado] = useState(false);
  const [abierto, setAbierto] = useState(true);
  const consentimiento = useConsentimiento();

  // Detecta qué sección está en pantalla
  useEffect(() => {
    const secciones = PASOS.map((p) => document.getElementById(p.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entradas) => {
        const visible = entradas.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActivo(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5] }
    );
    secciones.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Al cambiar de sección, la burbuja se vuelve a abrir (si no la cerraron del todo)
  useEffect(() => {
    if (!cerrado) setAbierto(true);
  }, [activo, cerrado]);

  // Mientras el aviso de cookies está abierto, el asistente se hace a un lado
  if (cerrado || consentimiento === null || consentimiento === undefined) return null;

  const paso = PASOS.find((p) => p.id === activo) ?? PASOS[0];

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-end gap-3 max-w-[calc(100vw-2rem)]">
      <AnimatePresence mode="wait">
        {abierto && (
          <motion.div
            key={paso.id}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 rounded-2xl border border-border bg-card/95 backdrop-blur p-4 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setCerrado(true)}
              aria-label="Cerrar asistente"
              className="absolute top-1 right-1 flex w-9 h-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <X size={16} aria-hidden="true" />
            </button>
            <p className="text-sm pr-6">{paso.mensaje}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {paso.siguiente ? (
                <a
                  href={paso.siguiente}
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                >
                  <ArrowDown size={14} aria-hidden="true" />
                  {paso.etiqueta}
                </a>
              ) : null}
              <a
                href={LINK_WHATSAPP()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[40px] px-3 rounded-full border border-border text-xs font-semibold hover:border-violeta hover:text-violeta"
              >
                <MessageCircle size={14} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-label={abierto ? "Ocultar asistente" : "Mostrar asistente"}
        className="flex-shrink-0 flex w-14 h-14 items-center justify-center rounded-full bg-gradiente-marca text-white shadow-xl hover:scale-105 transition-transform motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Bot size={26} aria-hidden="true" />
      </button>
    </div>
  );
}
