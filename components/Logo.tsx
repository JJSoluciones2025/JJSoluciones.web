import Image from "next/image";
import { cn } from "@/lib/utils";

// Logo "JJ" + nombre. Usa /public/marca/logo.svg (isotipo blanco sobre negro).
// Hoy es un placeholder dibujado a mano: reemplazar por el logo real cuando
// Martín lo suba (mismo nombre de archivo, o cambiar el src acá).
export default function Logo({ className, conNombre = true, tamano = 36 }: { className?: string; conNombre?: boolean; tamano?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-semibold tracking-tight", className)}>
      <Image
        src="/marca/logo.svg"
        alt=""
        width={tamano}
        height={tamano}
        className="rounded-xl"
        priority
      />
      {conNombre && <span className="text-foreground">JJSoluciones</span>}
    </span>
  );
}
