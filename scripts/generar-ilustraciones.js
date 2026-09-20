// Ilustraciones para las tarjetas de Servicios (public/servicios/*.svg), en
// los colores de la marca. 800x500 (proporción de la tarjeta).
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "servicios");
fs.mkdirSync(dir, { recursive: true });

const F = "Inter, Arial, sans-serif";
const W = 800, H = 500;
const fondo = `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15121f"/><stop offset="1" stop-color="#070709"/></linearGradient>
  <linearGradient id="marca" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#667eea"/><stop offset="1" stop-color="#764ba2"/></linearGradient>
  <radialGradient id="halo" cx="0.8" cy="0.2" r="0.7"><stop offset="0" stop-color="#b794f4" stop-opacity="0.35"/><stop offset="1" stop-color="#b794f4" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#halo)"/>`;

// --- 1) Sistema de gestión: dashboard ERP ---------------------------------
const barras = [42, 58, 50, 74, 66, 88, 80, 96, 72, 90, 104, 118]
  .map((h0, i) => {
    const h = Math.round(h0 * 0.6);
    return `<rect x="${80 + i * 27}" y="${300 - h}" width="16" height="${h}" rx="4" fill="${i === 11 ? "#b794f4" : "#3b3466"}"/>`;
  })
  .join("");
const filas = [
  ["Remera básica", "Ropa", "128", "$ 9.500"],
  ["Jean recto", "Ropa", "34", "$ 28.900"],
  ["Zapatilla urbana", "Calzado", "12", "$ 64.000"],
  ["Campera puffer", "Abrigo", "6", "$ 89.900"],
]
  .map(
    (f, i) => `<text x="446" y="${272 + i * 30}" font-family="${F}" font-size="12" fill="#e5e5e5">${f[0]}</text>
  <text x="600" y="${272 + i * 30}" font-family="${F}" font-size="11" fill="#9ca3af">${f[1]}</text>
  <text x="680" y="${272 + i * 30}" font-family="${F}" font-size="12" font-weight="700" fill="${f[2] === "6" ? "#f87171" : "#e5e5e5"}" text-anchor="end">${f[2]}</text>
  <text x="756" y="${272 + i * 30}" font-family="${F}" font-size="12" fill="#e5e5e5" text-anchor="end">${f[3]}</text>
  <rect x="440" y="${282 + i * 30}" width="326" height="1" fill="#2a2a34"/>`
  )
  .join("");
const sistemas = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Panel de un sistema de gestión con ventas, stock y productos">
${fondo}
<!-- ventana -->
<rect x="40" y="40" width="720" height="420" rx="16" fill="#111118" stroke="#2a2a34"/>
<rect x="40" y="40" width="720" height="44" rx="16" fill="#17171f"/><rect x="40" y="68" width="720" height="16" fill="#17171f"/>
<circle cx="64" cy="62" r="5" fill="#ef4444"/><circle cx="82" cy="62" r="5" fill="#f59e0b"/><circle cx="100" cy="62" r="5" fill="#22c55e"/>
<text x="140" y="67" font-family="${F}" font-size="13" font-weight="700" fill="#e5e5e5">Trapitos · Sistema de gestión</text>
<rect x="640" y="52" width="100" height="22" rx="11" fill="url(#marca)"/><text x="690" y="67" font-family="${F}" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">+ Nueva venta</text>
<!-- KPIs -->
${[
  ["Ventas hoy", "$ 184.300", "#b794f4"],
  ["Tickets", "27", "#e5e5e5"],
  ["Stock bajo", "3 productos", "#f87171"],
  ["Clientes", "412", "#e5e5e5"],
]
  .map(
    (k, i) => `<rect x="${64 + i * 172}" y="104" width="156" height="66" rx="10" fill="#17171f" stroke="#2a2a34"/>
  <text x="${78 + i * 172}" y="126" font-family="${F}" font-size="10" fill="#9ca3af">${k[0].toUpperCase()}</text>
  <text x="${78 + i * 172}" y="154" font-family="${F}" font-size="20" font-weight="800" fill="${k[2]}">${k[1]}</text>`
  )
  .join("")}
<!-- gráfico -->
<rect x="64" y="190" width="350" height="250" rx="10" fill="#17171f" stroke="#2a2a34"/>
<text x="80" y="214" font-family="${F}" font-size="11" fill="#9ca3af">VENTAS · ÚLTIMOS 12 DÍAS</text>
${barras}
<line x1="64" y1="300" x2="414" y2="300" stroke="#2a2a34"/>
<polyline points="72,392 120,380 168,388 216,362 264,368 312,344 360,350 406,326" fill="none" stroke="#b794f4" stroke-width="3" stroke-linecap="round"/>
<circle cx="406" cy="326" r="5" fill="#b794f4"/>
<!-- tabla -->
<rect x="430" y="190" width="316" height="250" rx="10" fill="#17171f" stroke="#2a2a34"/>
<text x="446" y="214" font-family="${F}" font-size="11" fill="#9ca3af">PRODUCTOS</text>
<text x="446" y="246" font-family="${F}" font-size="10" fill="#6b7280">NOMBRE</text><text x="600" y="246" font-family="${F}" font-size="10" fill="#6b7280">RUBRO</text><text x="680" y="246" font-family="${F}" font-size="10" fill="#6b7280" text-anchor="end">STOCK</text><text x="756" y="246" font-family="${F}" font-size="10" fill="#6b7280" text-anchor="end">PRECIO</text>
${filas}
<rect x="446" y="396" width="140" height="28" rx="14" fill="#2a2a34"/><text x="516" y="414" font-family="${F}" font-size="11" fill="#e5e5e5" text-anchor="middle">Ver todo el stock</text>
</svg>`;

// --- 2) Asistencia remota ---------------------------------------------------
const remota = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Soporte técnico remoto: un técnico conectado a la computadora del cliente">
${fondo}
<!-- monitor del cliente -->
<rect x="90" y="90" width="420" height="270" rx="14" fill="#111118" stroke="#2a2a34"/>
<rect x="104" y="104" width="392" height="242" rx="8" fill="#0d0d12"/>
<rect x="270" y="360" width="60" height="26" fill="#1c1c24"/><rect x="220" y="386" width="160" height="10" rx="5" fill="#1c1c24"/>
<!-- ventana de sesión remota -->
<rect x="130" y="128" width="340" height="196" rx="8" fill="#17171f" stroke="#3b3466"/>
<rect x="130" y="128" width="340" height="30" rx="8" fill="#1e1b2e"/><rect x="130" y="150" width="340" height="8" fill="#1e1b2e"/>
<circle cx="148" cy="143" r="5" fill="#22c55e"/>
<text x="162" y="147" font-family="${F}" font-size="11" font-weight="700" fill="#e5e5e5">Sesión remota · conectado con JJSoluciones</text>
<rect x="150" y="176" width="200" height="10" rx="5" fill="#2a2a34"/><rect x="150" y="196" width="260" height="10" rx="5" fill="#2a2a34"/><rect x="150" y="216" width="160" height="10" rx="5" fill="#2a2a34"/>
<rect x="150" y="250" width="120" height="34" rx="8" fill="url(#marca)"/><text x="210" y="272" font-family="${F}" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Reparando…</text>
<rect x="286" y="250" width="160" height="34" rx="8" fill="#2a2a34"/>
<rect x="296" y="262" width="100" height="10" rx="5" fill="#b794f4"/><rect x="396" y="262" width="40" height="10" rx="5" fill="#3b3466"/>
<!-- cursor remoto -->
<polygon points="392,238 392,262 398,256 404,268 410,265 404,253 412,253" fill="#b794f4" stroke="#fff" stroke-width="1.5"/>
<!-- línea de conexión -->
<path d="M510 225 C 570 225, 570 250, 630 250" fill="none" stroke="#b794f4" stroke-width="3" stroke-dasharray="8 8" stroke-linecap="round">
  <animate attributeName="stroke-dashoffset" from="32" to="0" dur="1.2s" repeatCount="indefinite"/>
</path>
<!-- técnico (auriculares + laptop) -->
<circle cx="680" cy="210" r="34" fill="#2a2a34"/>
<path d="M646 210 a34 34 0 0 1 68 0" fill="none" stroke="#b794f4" stroke-width="8" stroke-linecap="round"/>
<rect x="640" y="200" width="12" height="22" rx="6" fill="#b794f4"/><rect x="708" y="200" width="12" height="22" rx="6" fill="#b794f4"/>
<path d="M714 222 q0 22 -22 22" fill="none" stroke="#b794f4" stroke-width="4" stroke-linecap="round"/><circle cx="690" cy="244" r="4" fill="#b794f4"/>
<circle cx="668" cy="206" r="4" fill="#e5e5e5"/><circle cx="692" cy="206" r="4" fill="#e5e5e5"/>
<path d="M668 224 q12 10 24 0" fill="none" stroke="#e5e5e5" stroke-width="3" stroke-linecap="round"/>
<rect x="612" y="262" width="136" height="80" rx="10" fill="#111118" stroke="#2a2a34"/>
<rect x="624" y="274" width="112" height="56" rx="4" fill="#17171f"/>
<rect x="600" y="342" width="160" height="10" rx="5" fill="#1c1c24"/>
<!-- texto -->
<text x="400" y="430" font-family="${F}" font-size="16" font-weight="700" fill="#e5e5e5" text-anchor="middle">Sin salir de tu casa</text>
<text x="400" y="452" font-family="${F}" font-size="12" fill="#9ca3af" text-anchor="middle">Vos ves todo lo que hacemos en tu pantalla, en tiempo real</text>
</svg>`;

// --- 3) Desarrollo web: navegador con un sitio -------------------------------
const web = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Sitio web en una ventana de navegador y en un celular">
${fondo}
<rect x="60" y="60" width="560" height="380" rx="14" fill="#111118" stroke="#2a2a34"/>
<rect x="60" y="60" width="560" height="40" rx="14" fill="#17171f"/><rect x="60" y="86" width="560" height="14" fill="#17171f"/>
<circle cx="84" cy="80" r="5" fill="#ef4444"/><circle cx="102" cy="80" r="5" fill="#f59e0b"/><circle cx="120" cy="80" r="5" fill="#22c55e"/>
<rect x="150" y="70" width="340" height="20" rx="10" fill="#0d0d12"/><text x="164" y="84" font-family="${F}" font-size="11" fill="#9ca3af">https://tunegocio.com.ar</text>
<!-- hero del sitio -->
<rect x="60" y="100" width="560" height="140" fill="url(#marca)"/>
<text x="92" y="150" font-family="${F}" font-size="22" font-weight="800" fill="#fff">Tu negocio, en internet</text>
<rect x="92" y="170" width="220" height="8" rx="4" fill="#ffffff" opacity="0.6"/><rect x="92" y="186" width="160" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
<rect x="92" y="206" width="110" height="26" rx="13" fill="#fff"/><text x="147" y="223" font-family="${F}" font-size="11" font-weight="700" fill="#764ba2" text-anchor="middle">Contactanos</text>
<rect x="440" y="120" width="150" height="100" rx="8" fill="#ffffff" opacity="0.15"/>
<!-- tarjetas -->
${[0, 1, 2].map((i) => `<rect x="${92 + i * 172}" y="264" width="152" height="120" rx="10" fill="#17171f" stroke="#2a2a34"/><rect x="${104 + i * 172}" y="276" width="128" height="52" rx="6" fill="#2a2a34"/><rect x="${104 + i * 172}" y="340" width="90" height="8" rx="4" fill="#3b3466"/><rect x="${104 + i * 172}" y="356" width="120" height="6" rx="3" fill="#2a2a34"/>`).join("")}
<!-- celular -->
<rect x="646" y="120" width="120" height="240" rx="18" fill="#0b0b0d" stroke="#2a2a34" stroke-width="3"/>
<rect x="654" y="134" width="104" height="212" rx="10" fill="#111118"/>
<rect x="654" y="134" width="104" height="60" rx="10" fill="url(#marca)"/>
<rect x="664" y="206" width="84" height="30" rx="6" fill="#2a2a34"/><rect x="664" y="244" width="84" height="30" rx="6" fill="#2a2a34"/><rect x="664" y="282" width="84" height="30" rx="6" fill="#2a2a34"/>
<rect x="690" y="124" width="32" height="5" rx="2.5" fill="#2a2a34"/>
<text x="400" y="470" font-family="${F}" font-size="12" fill="#9ca3af" text-anchor="middle">Rápido, adaptado al celular y listo para Google</text>
</svg>`;

// --- 4) Mantenimiento premium: limpieza interna de una PC -------------------
const polvo = [
  [292, 150, 5], [318, 128, 4], [346, 158, 6], [372, 132, 3], [304, 184, 4],
  [338, 196, 5], [366, 176, 3], [396, 150, 4], [408, 186, 5], [330, 226, 4],
]
  .map(
    ([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#9ca3af" opacity="0.55">
    <animate attributeName="cx" from="${x}" to="${x + 60 + (i % 3) * 20}" dur="${1.6 + (i % 4) * 0.4}s" repeatCount="indefinite"/>
    <animate attributeName="opacity" from="0.6" to="0" dur="${1.6 + (i % 4) * 0.4}s" repeatCount="indefinite"/>
  </circle>`
  )
  .join("");
const chequeos = ["Limpieza interna", "Pasta térmica nueva", "Ventiladores y filtros", "Sistema optimizado"]
  .map(
    (t, i) => `<circle cx="560" cy="${112 + i * 40}" r="11" fill="#22c55e"/>
  <path d="M554 ${112 + i * 40} l4 4 l8 -9" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="582" y="${117 + i * 40}" font-family="${F}" font-size="14" fill="#e5e5e5">${t}</text>`
  )
  .join("");
const premium = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Limpieza y mantenimiento de una computadora: aire comprimido, pincel y pasta térmica">
${fondo}
<!-- gabinete abierto -->
<rect x="70" y="70" width="380" height="360" rx="16" fill="#111118" stroke="#2a2a34"/>
<rect x="88" y="88" width="344" height="324" rx="10" fill="#0d0d12" stroke="#1c1c24"/>
<!-- motherboard -->
<rect x="112" y="120" width="230" height="262" rx="6" fill="#16162a" stroke="#3b3466"/>
${[0, 1, 2, 3].map((i) => `<rect x="${270 + i * 14}" y="140" width="8" height="120" rx="2" fill="#2a2a34"/>`).join("")}
<rect x="130" y="290" width="150" height="20" rx="3" fill="#2a2a34"/><rect x="130" y="322" width="150" height="20" rx="3" fill="#2a2a34"/>
${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${140 + i * 22}" y="352" width="10" height="14" rx="2" fill="#1c1c24"/>`).join("")}
<!-- cooler del procesador -->
<circle cx="196" cy="200" r="52" fill="#1c1c24" stroke="#2a2a34" stroke-width="3"/>
<g stroke="#3b3466" stroke-width="10" stroke-linecap="round">
  <line x1="196" y1="160" x2="196" y2="240"/><line x1="156" y1="200" x2="236" y2="200"/>
  <line x1="168" y1="172" x2="224" y2="228"/><line x1="224" y1="172" x2="168" y2="228"/>
  <animateTransform attributeName="transform" type="rotate" from="0 196 200" to="360 196 200" dur="2.4s" repeatCount="indefinite"/>
</g>
<circle cx="196" cy="200" r="14" fill="#b794f4"/>
<!-- ventilador del gabinete -->
<circle cx="392" cy="150" r="30" fill="#1c1c24" stroke="#2a2a34" stroke-width="3"/>
<g stroke="#3b3466" stroke-width="6" stroke-linecap="round">
  <line x1="392" y1="126" x2="392" y2="174"/><line x1="368" y1="150" x2="416" y2="150"/>
  <animateTransform attributeName="transform" type="rotate" from="0 392 150" to="360 392 150" dur="1.6s" repeatCount="indefinite"/>
</g>
<circle cx="392" cy="150" r="7" fill="#b794f4"/>
<!-- polvo saliendo -->
${polvo}
<!-- aire comprimido -->
<g transform="translate(582 326) rotate(-60)">
  <rect x="0" y="0" width="60" height="150" rx="12" fill="url(#marca)"/>
  <rect x="14" y="-24" width="32" height="26" rx="6" fill="#e5e5e5"/>
  <rect x="24" y="-44" width="12" height="22" rx="3" fill="#9ca3af"/>
  <rect x="8" y="30" width="44" height="80" rx="6" fill="#ffffff" opacity="0.12"/>
  <text x="30" y="96" font-family="${F}" font-size="11" font-weight="800" fill="#fff" text-anchor="middle" transform="rotate(-90 30 96)">AIRE</text>
</g>
<path d="M552 270 q-40 -40 -112 -96" fill="none" stroke="#b794f4" stroke-width="3" stroke-dasharray="4 8" stroke-linecap="round">
  <animate attributeName="stroke-dashoffset" from="24" to="0" dur="0.6s" repeatCount="indefinite"/>
</path>
<!-- pincel -->
<g transform="translate(400 230) rotate(20)">
  <rect x="0" y="0" width="14" height="90" rx="6" fill="#764ba2"/>
  <rect x="-4" y="88" width="22" height="16" rx="3" fill="#9ca3af"/>
  <path d="M-4 104 q11 40 22 0 z" fill="#e5e5e5"/>
</g>
<!-- pasta térmica -->
<g transform="translate(476 64)">
  <rect x="0" y="20" width="26" height="90" rx="6" fill="#e5e5e5"/>
  <rect x="6" y="6" width="14" height="16" rx="2" fill="#9ca3af"/>
  <rect x="9" y="0" width="8" height="8" rx="2" fill="#6b7280"/>
  <rect x="4" y="40" width="18" height="50" rx="3" fill="url(#marca)"/>
  <text x="13" y="76" font-family="${F}" font-size="9" font-weight="800" fill="#fff" text-anchor="middle" transform="rotate(-90 13 76)">PASTA</text>
</g>
<!-- brillos -->
${[[500, 260], [740, 300], [700, 420], [470, 420]].map(([x, y], i) => `<path d="M${x} ${y - 14} l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 z" fill="#b794f4">
  <animate attributeName="opacity" values="0.2;1;0.2" dur="${1.8 + i * 0.5}s" repeatCount="indefinite"/>
</path>`).join("")}
<!-- checklist -->
<rect x="530" y="70" width="230" height="200" rx="12" fill="#111118" stroke="#2a2a34"/>
<text x="546" y="94" font-family="${F}" font-size="11" fill="#9ca3af">SERVICIO COMPLETO</text>
${chequeos}
<text x="400" y="472" font-family="${F}" font-size="12" fill="#9ca3af" text-anchor="middle">Tu equipo vuelve como nuevo: más silencioso, más frío y más rápido</text>
</svg>`;

fs.writeFileSync(path.join(dir, "sistemas.svg"), sistemas);
fs.writeFileSync(path.join(dir, "premium.svg"), premium);
fs.writeFileSync(path.join(dir, "remota.svg"), remota);
fs.writeFileSync(path.join(dir, "web.svg"), web);
console.log("ilustraciones listas en", dir);
