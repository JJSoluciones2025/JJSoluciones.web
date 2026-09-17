import Link from "next/link";
import { MessageCircle, LogIn } from "lucide-react";
import Logo from "@/components/Logo";
import IconoInstagram from "@/components/IconoInstagram";
import { EMPRESA, LINK_WHATSAPP, MINUTO_FUTBOL } from "@/lib/contenido";

const columnas = [
  {
    titulo: "Servicios",
    links: [
      { label: "Sistemas de gestión", href: "/#servicios" },
      { label: "Desarrollo web", href: "/#servicios" },
      { label: "Reparación de PC", href: "/#servicios" },
      { label: "Notebooks", href: "/#servicios" },
    ],
  },
  {
    titulo: "Empresa",
    links: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Precios", href: "/#precios" },
      { label: "Contacto", href: "/#contacto" },
      { label: "Minuto Fútbol", href: MINUTO_FUTBOL.sitio, externo: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#050505]">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm">{EMPRESA.eslogan}. Para particulares y empresas.</p>
          <div className="flex gap-2">
            <a
              href={EMPRESA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de JJSoluciones"
              className="inline-flex w-11 h-11 items-center justify-center rounded-full border border-border hover:border-violeta hover:text-violeta transition-colors"
            >
              <IconoInstagram size={18} />
            </a>
            <a
              href={LINK_WHATSAPP()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de JJSoluciones"
              className="inline-flex w-11 h-11 items-center justify-center rounded-full border border-border hover:border-violeta hover:text-violeta transition-colors"
            >
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {columnas.map((c) => (
          <div key={c.titulo}>
            <p className="text-sm font-semibold mb-3">{c.titulo}</p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.externo ? "_blank" : undefined}
                    rel={l.externo ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} JJSoluciones. Todos los derechos reservados.</p>
          <Link href="/clientes/" className="inline-flex items-center gap-1.5 min-h-[44px] hover:text-foreground">
            <LogIn size={14} aria-hidden="true" />
            Acceso clientes
          </Link>
        </div>
      </div>
    </footer>
  );
}
