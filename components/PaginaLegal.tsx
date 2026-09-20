import Link from "next/link";
import { FECHA_POLITICA } from "@/lib/politica";

const DOCUMENTOS = [
  { href: "/legal/terminos/", label: "Términos y Condiciones" },
  { href: "/legal/privacidad/", label: "Política de Privacidad" },
  { href: "/legal/cookies/", label: "Política de Cookies" },
];

// Marco común de las páginas legales: título, fecha, índice lateral y el
// texto con estilos de lectura (títulos, listas, tablas).
export default function PaginaLegal({ titulo, actual, children }: { titulo: string; actual: string; children: React.ReactNode }) {
  return (
    <section className="pt-28 pb-20">
      <div className="container grid lg:grid-cols-[220px_1fr] gap-10">
        <aside className="lg:sticky lg:top-24 self-start">
          <p className="text-xs font-mono uppercase tracking-widest text-violeta mb-3">Legal</p>
          <nav aria-label="Documentos legales" className="flex lg:flex-col gap-1 flex-wrap">
            {DOCUMENTOS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                aria-current={d.href === actual ? "page" : undefined}
                className={`px-3 py-2 rounded-md text-sm ${
                  d.href === actual ? "bg-secondary text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d.label}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{titulo}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última actualización: {FECHA_POLITICA}</p>
          <div className="legal mt-8 space-y-4 text-[15px] leading-relaxed text-foreground/90">{children}</div>
        </article>
      </div>
    </section>
  );
}
