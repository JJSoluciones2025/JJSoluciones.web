// Todo lo que usa Google para entender el sitio: la URL pública, las páginas
// que tiene que indexar y los datos del negocio.

// URL pública sin barra final. En cPanel: https://jsoluciones.com.ar
// (la pone `npm run build:cpanel`).
export const URL_SITIO = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://jjsoluciones2025.github.io/JJSoluciones.web"
).replace(/\/$/, "");

// Código de verificación de Google Search Console, SOLO si se verifica con
// el método "Etiqueta HTML" (el content="..." del meta que da Google).
// Si se verifica por DNS (recomendado), queda vacío.
export const GOOGLE_VERIFICACION = "";

// Páginas que van al sitemap.xml. /clientes/ no va: es el acceso de
// clientes y tiene "noindex" para no aparecer en Google.
export const PAGINAS: { ruta: string; prioridad: number; frecuencia: "weekly" | "monthly" | "yearly" }[] = [
  { ruta: "/", prioridad: 1, frecuencia: "weekly" },
  { ruta: "/app/", prioridad: 0.8, frecuencia: "monthly" },
  { ruta: "/legal/terminos/", prioridad: 0.2, frecuencia: "yearly" },
  { ruta: "/legal/privacidad/", prioridad: 0.2, frecuencia: "yearly" },
  { ruta: "/legal/cookies/", prioridad: 0.2, frecuencia: "yearly" },
];

export const TITULO_PRINCIPAL = "Sistemas de gestión, páginas web y reparación de PC · JJSoluciones";
export const DESCRIPCION_PRINCIPAL =
  "Desarrollamos sistemas de gestión y stock, páginas web y apps, y reparamos PC y notebooks en General Arenales y la zona. Soporte remoto. Pedí tu presupuesto por WhatsApp.";
