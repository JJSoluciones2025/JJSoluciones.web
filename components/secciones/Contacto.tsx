"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Encabezado from "./Encabezado";
import IconoInstagram from "@/components/IconoInstagram";
import { Button } from "@/components/ui/button";
import { EMPRESA, SERVICIOS, LINK_WHATSAPP } from "@/lib/contenido";

// El formulario no manda mails (el sitio es estático): arma el mensaje y lo
// abre en WhatsApp, que es por donde el cliente responde de verdad.
export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState(SERVICIOS[0].titulo);
  const [mensaje, setMensaje] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Hola JJSoluciones, soy ${nombre.trim() || "…"}.\nMe interesa: ${servicio}.\n${mensaje.trim()}`;
    window.open(LINK_WHATSAPP(texto), "_blank", "noopener");
  }

  const datos = [
    { icono: Mail, titulo: "Email", valor: EMPRESA.email, href: `mailto:${EMPRESA.email}` },
    { icono: Phone, titulo: "WhatsApp", valor: EMPRESA.telefonoVisible, href: LINK_WHATSAPP() },
    { icono: MapPin, titulo: "Ubicación", valor: EMPRESA.ubicacion },
    { icono: Clock, titulo: "Horario", valor: EMPRESA.horario.join(" · ") },
  ];

  return (
    <section id="contacto" className="py-24 scroll-mt-16">
      <div className="container space-y-12">
        <Encabezado etiqueta="Contacto" titulo="Hablemos de tu proyecto" texto="Contanos qué necesitás y te respondemos a la brevedad." />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.ul
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {datos.map(({ icono: Icono, titulo, valor, href }) => (
              <li key={titulo} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-secondary text-violeta flex-shrink-0">
                  <Icono size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{titulo}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium hover:text-violeta break-words">
                      {valor}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{valor}</p>
                  )}
                </div>
              </li>
            ))}
            <li className="flex gap-2 pt-1">
              <Button asChild variant="outline" size="sm">
                <a href={EMPRESA.instagram} target="_blank" rel="noopener noreferrer">
                  <IconoInstagram size={16} />
                  Instagram
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={`https://wa.me/${EMPRESA.whatsappAlternativo}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  WhatsApp 2
                </a>
              </Button>
            </li>
          </motion.ul>

          <motion.form
            onSubmit={enviar}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium mb-1.5">
                Nombre
              </label>
              <input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="name"
                className="w-full h-11 rounded-md border border-input bg-background px-3 text-base outline-none focus:border-violeta focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div>
              <label htmlFor="servicio" className="block text-sm font-medium mb-1.5">
                Servicio de interés
              </label>
              <select
                id="servicio"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="w-full h-11 rounded-md border border-input bg-background px-3 text-base outline-none focus:border-violeta focus:ring-2 focus:ring-ring/40"
              >
                {SERVICIOS.map((s) => (
                  <option key={s.id} value={s.titulo}>
                    {s.titulo}
                  </option>
                ))}
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium mb-1.5">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={4}
                placeholder="Contanos brevemente qué necesitás"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-base outline-none focus:border-violeta focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <MessageCircle aria-hidden="true" />
              Enviar por WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground text-center">Se abre WhatsApp con el mensaje armado. No guardamos tus datos.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
