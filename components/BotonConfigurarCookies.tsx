"use client";

import { Cookie } from "lucide-react";
import { useConsentimiento } from "@/lib/consentimiento";

// Vuelve a abrir el aviso de cookies (se usa en el footer y en la política)
export default function BotonConfigurarCookies({ className = "" }: { className?: string }) {
  const consentimiento = useConsentimiento();
  const estado =
    consentimiento === undefined ? "" : consentimiento === null ? "sin elegir" : consentimiento.terceros ? "aceptaste todo" : "solo necesarias";

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("jj:abrir-cookies"))}
      className={`inline-flex items-center gap-1.5 min-h-[44px] px-3 rounded-md border border-border text-sm text-foreground hover:border-violeta hover:text-violeta transition-colors ${className}`}
    >
      <Cookie size={16} aria-hidden="true" />
      Configurar cookies
      {estado && <span className="text-xs text-muted-foreground">· {estado}</span>}
    </button>
  );
}
