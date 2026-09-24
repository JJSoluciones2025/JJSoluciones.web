import type { MetadataRoute } from "next";
import { PAGINAS, URL_SITIO } from "@/lib/seo";

// Se genera como /sitemap.xml al compilar (sitio estático).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date();
  return PAGINAS.map((p) => ({
    url: `${URL_SITIO}${p.ruta}`,
    lastModified: hoy,
    changeFrequency: p.frecuencia,
    priority: p.prioridad,
  }));
}
