"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, Mail, ArrowRight, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import VitrinaProyectos from "@/components/VitrinaProyectos";
import { ACCESO_INTERNO, CLIENTES, LINK_WHATSAPP } from "@/lib/contenido";

// Portal: el cliente pone el email con el que lo dimos de alta y lo mandamos
// a la URL de SU sistema, donde se loguea con su usuario y contraseña. Acá no
// se pide contraseña ni se guarda nada.
//
// Excepción: con nuestro email interno (ACCESO_INTERNO) no se sale del sitio,
// se abre la vitrina con todos los trabajos, para mostrárselos a un cliente.
export default function PortalClientes() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [yendo, setYendo] = useState<string | null>(null);
  const [vitrina, setVitrina] = useState(false);

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    const ingresado = email.trim().toLowerCase();

    if (ingresado === ACCESO_INTERNO.toLowerCase()) {
      setError("");
      setVitrina(true);
      return;
    }

    const cliente = CLIENTES.find((c) => c.email.toLowerCase() === ingresado);
    if (!cliente) {
      setError("No encontramos ese email. Revisá que sea el que te dimos al entregarte el sistema, o escribinos.");
      return;
    }
    setError("");
    setYendo(cliente.nombre);
    window.location.href = cliente.url;
  }

  if (vitrina) {
    return (
      <VitrinaProyectos
        onSalir={() => {
          setVitrina(false);
          setEmail("");
        }}
      />
    );
  }

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black pt-16 px-4">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-card p-8 space-y-6"
      >
        <div className="flex flex-col items-center text-center gap-3">
          <Logo conNombre={false} tamano={56} />
          <h1 className="text-2xl font-bold tracking-tight">Acceso clientes</h1>
          <p className="text-sm text-muted-foreground">
            Ingresá el email con el que te registramos y te llevamos al sistema de gestión de tu negocio.
          </p>
        </div>

        <form onSubmit={entrar} className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "email-error" : undefined}
                placeholder="tunegocio@gmail.com"
                className="w-full h-12 rounded-md border border-input bg-background pl-10 pr-3 text-base outline-none focus:border-violeta focus:ring-2 focus:ring-ring/40"
              />
            </div>
            {error && (
              <p id="email-error" role="alert" className="mt-2 text-sm text-red-400">
                {error}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={Boolean(yendo)}>
            {yendo ? (
              <>Entrando a {yendo}…</>
            ) : (
              <>
                <LogIn aria-hidden="true" />
                Ingresar a mi sistema
                <ArrowRight aria-hidden="true" />
              </>
            )}
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          ¿Todavía no tenés tu sistema?{" "}
          <a href={LINK_WHATSAPP("Hola JJSoluciones, quiero un sistema de gestión para mi negocio")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violeta hover:underline">
            <MessageCircle size={12} aria-hidden="true" />
            Pedilo por WhatsApp
          </a>
        </p>
      </motion.div>
    </section>
  );
}
