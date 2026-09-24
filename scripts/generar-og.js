// Imágenes para compartir (Open Graph): lo que muestran Google, WhatsApp,
// Facebook e Instagram cuando alguien pega un link del sitio. Tienen que ser
// PNG o JPG de 1200x630 (el SVG no lo muestra ninguna red).
//   node scripts/generar-og.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const F = "Inter, Arial, sans-serif";
const logo = fs
  .readFileSync(path.join(__dirname, "..", "public", "marca", "logo.svg"), "utf8")
  .replace(/<\?xml[^>]*>/, "")
  .replace(/<!--[\s\S]*?-->/g, "");
const logoInterno = logo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

const fondo = `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15121f"/><stop offset="1" stop-color="#050506"/></linearGradient>
  <linearGradient id="marca" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#667eea"/><stop offset="1" stop-color="#b794f4"/></linearGradient>
  <radialGradient id="halo" cx="0.85" cy="0.1" r="0.8"><stop offset="0" stop-color="#b794f4" stop-opacity="0.35"/><stop offset="1" stop-color="#b794f4" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect width="1200" height="630" fill="url(#halo)"/>`;

const tarjeta = ({ titulo, bajada, chips }) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
${fondo}
<svg x="80" y="80" width="112" height="112" viewBox="0 0 512 512">${logoInterno}</svg>
<text x="216" y="130" font-family="${F}" font-size="40" font-weight="800" fill="#ffffff">JJSoluciones</text>
<text x="216" y="170" font-family="${F}" font-size="24" fill="#a3a3a3">jsoluciones.com.ar</text>
${titulo.map((l, i) => `<text x="80" y="${300 + i * 72}" font-family="${F}" font-size="62" font-weight="800" fill="#ffffff">${l}</text>`).join("")}
<text x="80" y="${300 + titulo.length * 72 + 10}" font-family="${F}" font-size="28" fill="#c4b5fd">${bajada}</text>
${chips
  .map((c, i, arr) => {
    const ancho = (t) => Math.round(t.length * 11.2) + 44;
    const x = 80 + arr.slice(0, i).reduce((s, t) => s + ancho(t) + 16, 0);
    return `<rect x="${x}" y="520" width="${ancho(c)}" height="48" rx="24" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.15"/>
  <text x="${x + 22}" y="552" font-family="${F}" font-size="22" fill="#e5e5e5">${c}</text>`;
  })
  .join("")}
<rect x="0" y="622" width="1200" height="8" fill="url(#marca)"/>
</svg>`;

const imagenes = {
  "og.png": tarjeta({
    titulo: ["Sistemas, sitios web", "y soporte técnico"],
    bajada: "Para tu negocio, en General Arenales y la zona",
    chips: ["Sistemas de gestión", "Desarrollo web", "Reparación de PC", "Soporte remoto"],
  }),
  "og-minuto-futbol.png": tarjeta({
    titulo: ["Minuto Fútbol", "para Android"],
    bajada: "La app de la Liga Deportiva de General Arenales",
    chips: ["En vivo", "Minuto a minuto", "Fixture y tabla", "Gratis"],
  }),
};

(async () => {
  for (const [nombre, svg] of Object.entries(imagenes)) {
    const destino = path.join(__dirname, "..", "public", nombre);
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(destino);
    console.log("listo", destino);
  }
})();
