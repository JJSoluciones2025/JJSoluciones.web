import type { MetadataRoute } from "next";
import { URL_SITIO } from "@/lib/seo";

// Se genera como /robots.txt al compilar (sitio estático).
// /clientes/ no se bloquea acá a propósito: tiene "noindex" en la página, y
// si se bloquea el rastreo Google no llega a leerlo.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${URL_SITIO}/sitemap.xml`,
    host: URL_SITIO,
  };
}
