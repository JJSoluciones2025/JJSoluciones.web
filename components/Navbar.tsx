"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#minuto-futbol", label: "Minuto Fútbol" },
  { href: "#precios", label: "Precios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [conFondo, setConFondo] = useState(false);

  // El header arranca transparente sobre el hero y toma fondo al bajar
  useEffect(() => {
    const onScroll = () => setConFondo(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        conFondo || abierto ? "bg-black/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="JJSoluciones, inicio">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="outline" size="sm" className="ml-3">
            <Link href="/clientes/">
              <LogIn aria-hidden="true" />
              Clientes
            </Link>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        >
          {abierto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {abierto && (
        <nav className="md:hidden container pb-4 flex flex-col gap-1" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAbierto(false)}
              className="px-3 py-3 text-base text-foreground rounded-md hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="outline" className="mt-2">
            <Link href="/clientes/" onClick={() => setAbierto(false)}>
              <LogIn aria-hidden="true" />
              Acceso clientes
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
