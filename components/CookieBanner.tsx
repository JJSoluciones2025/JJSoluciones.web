"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guardarConsentimiento, useConsentimiento } from "@/lib/consentimiento";

// Banner de consentimiento. Aparece hasta que la persona elige; "Aceptar todo"
// habilita el contenido de terceros, "Solo necesarias" lo bloquea (se puede
// cambiar después desde "Configurar cookies" en el pie de página).
// Se vuelve a mostrar si se abre con el evento "jj:abrir-cookies".
export default function CookieBanner() {
  const consentimiento = useConsentimiento();
  const [forzado, setForzado] = useState(false);

  useEffect(() => {
    const abrir = () => setForzado(true);
    window.addEventListener("jj:abrir-cookies", abrir);
    return () => window.removeEventListener("jj:abrir-cookies", abrir);
  }, []);

  const visible = consentimiento === null || forzado;

  function elegir(terceros: boolean) {
    guardarConsentimiento(terceros);
    setForzado(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookies-titulo"
          aria-describedby="cookies-texto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-border bg-card/95 backdrop-blur p-5 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex w-9 h-9 items-center justify-center rounded-xl bg-secondary text-violeta flex-shrink-0">
              <Cookie size={18} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p id="cookies-titulo" className="font-semibold">
                Este sitio usa cookies y contenido de terceros
              </p>
              <p id="cookies-texto" className="mt-1 text-sm text-muted-foreground">
                Las <strong className="text-foreground">necesarias</strong> hacen funcionar el sitio y recordar tu elección. Las de{" "}
                <strong className="text-foreground">terceros</strong> muestran contenido de otros sitios (como la vista previa de
                Minuto Fútbol y la escena 3D), que pueden registrar tu visita. Al aceptar, aceptás también nuestros{" "}
                <Link href="/legal/terminos/" className="text-violeta underline underline-offset-2">
                  Términos y Condiciones
                </Link>{" "}
                y la{" "}
                <Link href="/legal/privacidad/" className="text-violeta underline underline-offset-2">
                  Política de Privacidad
                </Link>
                . Más detalle en la{" "}
                <Link href="/legal/cookies/" className="text-violeta underline underline-offset-2">
                  Política de Cookies
                </Link>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button onClick={() => elegir(true)} size="default">
                  <ShieldCheck aria-hidden="true" />
                  Aceptar todo
                </Button>
                <Button onClick={() => elegir(false)} variant="outline" size="default">
                  Solo necesarias
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
