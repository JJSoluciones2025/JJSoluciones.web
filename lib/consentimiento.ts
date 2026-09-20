"use client";

// Consentimiento de cookies / contenido de terceros.
// Se guarda en localStorage (no en una cookie) porque el sitio es estático y
// no hay servidor que la lea. Es la única "cookie" propia del sitio.

import { useEffect, useState } from "react";
import { VERSION_POLITICA } from "./politica";

export type Consentimiento = {
  necesarias: true; // siempre
  terceros: boolean; // contenido embebido de otros sitios (vista previa de Minuto Fútbol, escena 3D)
  fecha: string;
  version: number;
};

const CLAVE = "jj:consentimiento";

export function leerConsentimiento(): Consentimiento | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consentimiento;
    return c.version === VERSION_POLITICA ? c : null;
  } catch {
    return null;
  }
}

export function guardarConsentimiento(terceros: boolean) {
  const c: Consentimiento = { necesarias: true, terceros, fecha: new Date().toISOString(), version: VERSION_POLITICA };
  try {
    localStorage.setItem(CLAVE, JSON.stringify(c));
  } catch {
    // sin localStorage: se vuelve a preguntar la próxima vez
  }
  window.dispatchEvent(new CustomEvent("jj:consentimiento", { detail: c }));
  return c;
}

export function borrarConsentimiento() {
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    // nada
  }
  window.dispatchEvent(new CustomEvent("jj:consentimiento", { detail: null }));
}

// Hook chiquito para que los componentes reaccionen cuando cambia
export function useConsentimiento() {
  const [consentimiento, setConsentimiento] = useState<Consentimiento | null | undefined>(undefined);

  useEffect(() => {
    setConsentimiento(leerConsentimiento());
    const onCambio = (e: Event) => setConsentimiento((e as CustomEvent<Consentimiento | null>).detail);
    window.addEventListener("jj:consentimiento", onCambio);
    return () => window.removeEventListener("jj:consentimiento", onCambio);
  }, []);

  return consentimiento; // undefined = todavía no se leyó (SSR), null = no decidió
}
