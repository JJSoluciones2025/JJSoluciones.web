import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, Bell, Radio, Trophy, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Celular3D from "@/components/Celular3D";
import FondoTecnologias from "@/components/FondoTecnologias";
import { MINUTO_FUTBOL } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Descargá Minuto Fútbol para Android",
  description:
    "La app de la Liga Deportiva de General Arenales: resultados en vivo, minuto a minuto, fixture, tabla y notificaciones. Gratis para Android.",
  openGraph: {
    title: "Minuto Fútbol — la app de la liga",
    description: "Resultados en vivo, minuto a minuto y notificaciones. Descargala gratis para Android.",
  },
};

const PUNTOS = [
  { icono: Radio, titulo: "En vivo", texto: "Marcador y minuto a minuto de cada partido, actualizado al instante." },
  { icono: Bell, titulo: "Avisos", texto: "Goles, tarjetas, inicio y final. De todos los partidos o solo de tu club." },
  { icono: Trophy, titulo: "Todo el torneo", texto: "Fixture, tabla, goleadores, tarjetas, alineaciones y noticias." },
];

const PASOS = [
  "Tocá “Descargar la app”. Se baja un archivo llamado minuto-futbol.apk.",
  "Abrilo desde las notificaciones o la carpeta Descargas.",
  "Si el teléfono pregunta, permití instalar desde esta fuente (es normal cuando la app no viene de Play Store).",
  "Tocá Instalar. Listo: buscá el ícono de Minuto Fútbol en tu pantalla.",
];

export default function AppPage() {
  return (
    <>
      {/* Portada: fondo animado + celular 3D + botón de descarga */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black pt-24 pb-16">
        <FondoTecnologias />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <Badge variant="marca" className="mb-5">
              <Smartphone size={14} className="mr-1.5" aria-hidden="true" />
              App para Android · gratis
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Toda la liga, en vivo, en tu celular
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Minuto Fútbol es la app de la Liga Deportiva de General Arenales. Seguí cada partido minuto a minuto,
              mirá la tabla y los goleadores, y recibí un aviso cuando tu equipo hace un gol.
            </p>

            <ul className="mt-8 space-y-3">
              {PUNTOS.map(({ icono: Icono, titulo, texto }) => (
                <li key={titulo} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex w-9 h-9 items-center justify-center rounded-lg bg-secondary text-[#d4ff3f] flex-shrink-0">
                    <Icono size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold">{titulo}</p>
                    <p className="text-sm text-muted-foreground">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#d4ff3f] text-black hover:bg-[#c4ef2f] text-base h-14 px-8">
                <a href={MINUTO_FUTBOL.apk}>
                  <Download aria-hidden="true" />
                  Descargar la app
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14">
                <a href={MINUTO_FUTBOL.sitio} target="_blank" rel="noopener noreferrer">
                  Usar desde el navegador
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Versión {MINUTO_FUTBOL.version} · {MINUTO_FUTBOL.tamano} · {MINUTO_FUTBOL.androidMinimo} · Sin publicidad
              invasiva ni registro.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end py-10 lg:py-0">
            <Celular3D />
          </div>
        </div>
      </section>

      {/* Cómo instalar */}
      <section className="py-20 border-t border-border bg-[#070707]">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-violeta mb-3">Instalación</p>
            <h2 className="text-3xl font-bold tracking-tight">Cómo instalarla en Android</h2>
            <ol className="mt-6 space-y-4">
              {PASOS.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-gradiente-marca text-white text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground pt-1">{p}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={20} className="text-violeta" aria-hidden="true" />
                <p className="font-semibold">¿Es segura?</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Sí. La app está firmada digitalmente por JJSoluciones y solo muestra el sitio oficial de la liga. No
                pide permisos raros ni accede a tus contactos, fotos ni ubicación. El aviso de “fuente desconocida” lo
                muestra Android con cualquier app que no venga de Play Store; muy pronto también va a estar ahí.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2">¿Tenés iPhone?</p>
              <p className="text-sm text-muted-foreground">
                Por ahora la app es solo para Android. En iPhone podés usar el sitio: abrí{" "}
                <a href={MINUTO_FUTBOL.sitio} className="text-violeta underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                  minutofutbol.jsoluciones.com.ar
                </a>{" "}
                en Safari, tocá Compartir → “Agregar a inicio”, y te queda como una app.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2">Desarrollada por JJSoluciones</p>
              <p className="text-sm text-muted-foreground">
                ¿Querés una app o un sistema para tu club, negocio o institución?{" "}
                <Link href="/#contacto" className="text-violeta underline underline-offset-2">
                  Hablemos
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
