/** @type {import('next').NextConfig} */
// Sitio 100% estático: `npm run build` deja todo en /out, listo para subir a
// cPanel (carpeta public_html) o a GitHub Pages.
// En GitHub Pages el sitio vive en /JJSoluciones.web/, por eso el basePath
// sale de una variable (ver `npm run build:pages` en package.json). Con dominio
// propio en cPanel no hace falta.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
