// Miniaturas de los sistemas que mostramos en la vitrina del acceso interno
// (/clientes con el email de JJSoluciones). Son mockups en el estilo del sitio,
// pensados para mostrarle al cliente "esto es lo que hacemos".
// Cuando tengamos capturas reales de cada sistema, se reemplaza el .svg por la
// captura y listo (mismo nombre de archivo, misma proporción 16:10).
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "proyectos");
fs.mkdirSync(dir, { recursive: true });

const F = "Inter, Arial, sans-serif";
const W = 640, H = 400;

// Fondo común, con el acento propio de cada sistema
const fondo = (c1, c2) => `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15121f"/><stop offset="1" stop-color="#070709"/></linearGradient>
  <linearGradient id="marca" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
  <radialGradient id="halo" cx="0.78" cy="0.18" r="0.72"><stop offset="0" stop-color="${c1}" stop-opacity="0.34"/><stop offset="1" stop-color="${c1}" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#halo)"/>`;

// Barra de ventana de navegador / app de escritorio
const ventana = (titulo, url) => `<rect x="36" y="40" width="568" height="320" rx="14" fill="#111118" stroke="#2a2a34"/>
<rect x="36" y="40" width="568" height="38" rx="14" fill="#17171f"/><rect x="36" y="64" width="568" height="14" fill="#17171f"/>
<circle cx="58" cy="59" r="4.5" fill="#ef4444"/><circle cx="74" cy="59" r="4.5" fill="#f59e0b"/><circle cx="90" cy="59" r="4.5" fill="#22c55e"/>
${url
  ? `<rect x="112" y="49" width="300" height="20" rx="10" fill="#0d0d12"/><text x="126" y="63" font-family="${F}" font-size="10" fill="#9ca3af">${url}</text>`
  : `<text x="112" y="63" font-family="${F}" font-size="11" font-weight="700" fill="#e5e5e5">${titulo}</text>`}`;

const svg = (etiqueta, cuerpo) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${etiqueta}">${cuerpo}</svg>`;

// --- Minuto Fútbol: celular con un partido en vivo --------------------------
const minuto = svg(
  "Minuto Fútbol: partido en vivo en el celular",
  `${fondo("#22c55e", "#15803d")}
<!-- pantalla grande de fondo -->
<rect x="36" y="46" width="360" height="308" rx="12" fill="#111118" stroke="#2a2a34"/>
<rect x="36" y="46" width="360" height="34" rx="12" fill="#17171f"/><rect x="36" y="68" width="360" height="12" fill="#17171f"/>
<text x="56" y="68" font-family="${F}" font-size="11" font-weight="800" fill="#e5e5e5">MINUTO FÚTBOL</text>
<rect x="300" y="52" width="80" height="20" rx="10" fill="#7f1d1d"/><circle cx="314" cy="62" r="4" fill="#ef4444"/><text x="326" y="66" font-family="${F}" font-size="9" font-weight="800" fill="#fecaca">EN VIVO</text>
${[0, 1, 2].map((i) => {
  const y = 96 + i * 76;
  return `<rect x="52" y="${y}" width="328" height="64" rx="10" fill="#17171f" stroke="#2a2a34"/>
  <circle cx="82" cy="${y + 32}" r="16" fill="url(#marca)" opacity="${0.35 + i * 0.2}"/>
  <circle cx="330" cy="${y + 32}" r="16" fill="#3b3466" opacity="${0.5 + i * 0.15}"/>
  <text x="106" y="${y + 28}" font-family="${F}" font-size="11" font-weight="700" fill="#e5e5e5">Club ${["Atlético", "Unión", "Deportivo"][i]}</text>
  <text x="106" y="${y + 46}" font-family="${F}" font-size="11" fill="#9ca3af">Club ${["Juventud", "Central", "Sportivo"][i]}</text>
  <text x="206" y="${y + 28}" font-family="${F}" font-size="14" font-weight="800" fill="#e5e5e5" text-anchor="middle">${[2, 1, 0][i]}</text>
  <text x="206" y="${y + 46}" font-family="${F}" font-size="14" font-weight="800" fill="#e5e5e5" text-anchor="middle">${[1, 1, 3][i]}</text>
  <text x="252" y="${y + 38}" font-family="${F}" font-size="10" font-weight="700" fill="${i === 0 ? "#22c55e" : "#6b7280"}">${i === 0 ? "67'" : "Final"}</text>`;
}).join("")}
<!-- celular encima -->
<rect x="404" y="70" width="196" height="300" rx="24" fill="#0b0b0d" stroke="#2a2a34" stroke-width="3"/>
<rect x="414" y="86" width="176" height="268" rx="14" fill="#0d0d12"/>
<circle cx="502" cy="98" r="4" fill="#000"/>
<rect x="414" y="106" width="176" height="86" fill="url(#marca)"/>
<text x="502" y="132" font-family="${F}" font-size="10" font-weight="800" fill="#fff" text-anchor="middle" opacity="0.85">ATLÉTICO vs JUVENTUD</text>
<text x="502" y="166" font-family="${F}" font-size="34" font-weight="800" fill="#fff" text-anchor="middle">2 - 1</text>
<text x="502" y="184" font-family="${F}" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" opacity="0.8">67' · Segundo tiempo</text>
${[["⚽", "Gol de Pérez", "67'"], ["", "Tarjeta amarilla", "61'"], ["⚽", "Gol de Gómez", "44'"]].map((e, i) => {
  const y = 208 + i * 44;
  return `<rect x="426" y="${y}" width="152" height="36" rx="8" fill="#17171f"/>
  <circle cx="444" cy="${y + 18}" r="7" fill="${i === 1 ? "#facc15" : "#22c55e"}"/>
  <text x="460" y="${y + 16}" font-family="${F}" font-size="9" font-weight="700" fill="#e5e5e5">${e[1]}</text>
  <text x="460" y="${y + 29}" font-family="${F}" font-size="9" fill="#6b7280">${e[2]}</text>`;
}).join("")}
<rect x="470" y="344" width="64" height="4" rx="2" fill="#ffffff" opacity="0.7"/>`
);

// --- Trapitos: ERP de ropa ---------------------------------------------------
const barras = [40, 56, 48, 70, 62, 84, 76, 92, 68, 86, 100, 112]
  .map((h0, i) => {
    const h = Math.round(h0 * 0.42);
    return `<rect x="${70 + i * 20}" y="${262 - h}" width="11" height="${h}" rx="3" fill="${i === 11 ? "#b794f4" : "#3b3466"}"/>`;
  })
  .join("");
const trapitos = svg(
  "Trapitos: sistema de gestión con ventas, stock y clientes",
  `${fondo("#b794f4", "#764ba2")}
${ventana("Trapitos · Sistema de gestión", null)}
<rect x="512" y="49" width="82" height="20" rx="10" fill="url(#marca)"/><text x="553" y="63" font-family="${F}" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">+ Nueva venta</text>
${[["VENTAS HOY", "$ 184.300", "#b794f4"], ["TICKETS", "27", "#e5e5e5"], ["STOCK BAJO", "3", "#f87171"], ["CLIENTES", "412", "#e5e5e5"]]
  .map((k, i) => `<rect x="${56 + i * 135}" y="94" width="122" height="54" rx="9" fill="#17171f" stroke="#2a2a34"/>
  <text x="${68 + i * 135}" y="114" font-family="${F}" font-size="8" fill="#9ca3af">${k[0]}</text>
  <text x="${68 + i * 135}" y="138" font-family="${F}" font-size="17" font-weight="800" fill="${k[2]}">${k[1]}</text>`).join("")}
<rect x="56" y="162" width="264" height="180" rx="9" fill="#17171f" stroke="#2a2a34"/>
<text x="70" y="182" font-family="${F}" font-size="9" fill="#9ca3af">VENTAS · ÚLTIMOS 12 DÍAS</text>
${barras}
<line x1="62" y1="262" x2="314" y2="262" stroke="#2a2a34"/>
<polyline points="70,330 106,322 142,326 178,308 214,312 250,296 286,300 312,284" fill="none" stroke="#b794f4" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="312" cy="284" r="4" fill="#b794f4"/>
<rect x="334" y="162" width="250" height="180" rx="9" fill="#17171f" stroke="#2a2a34"/>
<text x="348" y="182" font-family="${F}" font-size="9" fill="#9ca3af">PRODUCTOS</text>
${[["Remera básica", "128"], ["Jean recto", "34"], ["Zapatilla urbana", "12"], ["Campera puffer", "6"], ["Buzo canguro", "41"]]
  .map((f, i) => `<text x="348" y="${208 + i * 26}" font-family="${F}" font-size="10" fill="#e5e5e5">${f[0]}</text>
  <text x="570" y="${208 + i * 26}" font-family="${F}" font-size="10" font-weight="700" fill="${f[1] === "6" ? "#f87171" : "#e5e5e5"}" text-anchor="end">${f[1]}</text>
  <rect x="348" y="${216 + i * 26}" width="222" height="1" fill="#2a2a34"/>`).join("")}`
);

// --- LS Entrenamientos: alumnos y rutinas -----------------------------------
const lsentrenamientos = svg(
  "LS Entrenamientos: gestión de alumnos, rutinas y cuotas",
  `${fondo("#38bdf8", "#0369a1")}
${ventana("LS Entrenamientos · Panel", null)}
<rect x="500" y="49" width="94" height="20" rx="10" fill="url(#marca)"/><text x="547" y="63" font-family="${F}" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">+ Nuevo alumno</text>
${[["ALUMNOS ACTIVOS", "86", "#38bdf8"], ["CUOTAS AL DÍA", "74", "#22c55e"], ["VENCIDAS", "12", "#f87171"]]
  .map((k, i) => `<rect x="${56 + i * 182}" y="94" width="168" height="54" rx="9" fill="#17171f" stroke="#2a2a34"/>
  <text x="${70 + i * 182}" y="114" font-family="${F}" font-size="8" fill="#9ca3af">${k[0]}</text>
  <text x="${70 + i * 182}" y="138" font-family="${F}" font-size="17" font-weight="800" fill="${k[2]}">${k[1]}</text>`).join("")}
<!-- lista de alumnos -->
<rect x="56" y="162" width="300" height="180" rx="9" fill="#17171f" stroke="#2a2a34"/>
<text x="70" y="182" font-family="${F}" font-size="9" fill="#9ca3af">ALUMNOS</text>
${[["Martina R.", "Fuerza · 4 días", "#22c55e", "Al día"], ["Lucas P.", "Hipertrofia · 5 días", "#22c55e", "Al día"], ["Sofía M.", "Funcional · 3 días", "#f87171", "Vencida"], ["Diego A.", "Fuerza · 3 días", "#22c55e", "Al día"]]
  .map((a, i) => `<circle cx="78" cy="${210 + i * 32}" r="11" fill="#2a2a34"/>
  <circle cx="78" cy="${206 + i * 32}" r="4" fill="#6b7280"/><path d="M70 ${217 + i * 32} a8 8 0 0 1 16 0" fill="#6b7280"/>
  <text x="98" y="${207 + i * 32}" font-family="${F}" font-size="10" font-weight="700" fill="#e5e5e5">${a[0]}</text>
  <text x="98" y="${219 + i * 32}" font-family="${F}" font-size="9" fill="#6b7280">${a[1]}</text>
  <rect x="266" y="${199 + i * 32}" width="72" height="18" rx="9" fill="${a[2]}" opacity="0.18"/>
  <text x="302" y="${212 + i * 32}" font-family="${F}" font-size="9" font-weight="700" fill="${a[2]}" text-anchor="middle">${a[3]}</text>`).join("")}
<!-- rutina de la semana -->
<rect x="370" y="162" width="214" height="180" rx="9" fill="#17171f" stroke="#2a2a34"/>
<text x="384" y="182" font-family="${F}" font-size="9" fill="#9ca3af">RUTINA DE LA SEMANA</text>
${["L", "M", "M", "J", "V", "S", "D"].map((d, i) => `<rect x="${384 + i * 28}" y="192" width="22" height="22" rx="6" fill="${[0, 2, 4, 5].includes(i) ? "url(#marca)" : "#2a2a34"}"/>
  <text x="${395 + i * 28}" y="207" font-family="${F}" font-size="9" font-weight="700" fill="${[0, 2, 4, 5].includes(i) ? "#fff" : "#6b7280"}" text-anchor="middle">${d}</text>`).join("")}
${[["Sentadilla", "4 x 8"], ["Press banca", "4 x 10"], ["Remo con barra", "3 x 12"], ["Plancha", "3 x 45s"]]
  .map((e, i) => `<rect x="384" y="${228 + i * 27}" width="186" height="22" rx="6" fill="#111118"/>
  <rect x="392" y="${234 + i * 27}" width="3" height="10" rx="1.5" fill="#38bdf8"/>
  <text x="404" y="${243 + i * 27}" font-family="${F}" font-size="9" fill="#e5e5e5">${e[0]}</text>
  <text x="562" y="${243 + i * 27}" font-family="${F}" font-size="9" font-weight="700" fill="#9ca3af" text-anchor="end">${e[1]}</text>`).join("")}`
);

// --- CCS: gestión de trabajos / clientes -------------------------------------
const ccs = svg(
  "CCS: sistema de gestión de clientes, trabajos y cobranzas",
  `${fondo("#f59e0b", "#b45309")}
${ventana("CCS · Sistema de gestión", null)}
<rect x="504" y="49" width="90" height="20" rx="10" fill="url(#marca)"/><text x="549" y="63" font-family="${F}" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">+ Nuevo trabajo</text>
${[["TRABAJOS ABIERTOS", "18", "#f59e0b"], ["ENTREGADOS · MES", "63", "#e5e5e5"], ["A COBRAR", "$ 742.500", "#22c55e"]]
  .map((k, i) => `<rect x="${56 + i * 182}" y="94" width="168" height="54" rx="9" fill="#17171f" stroke="#2a2a34"/>
  <text x="${70 + i * 182}" y="114" font-family="${F}" font-size="8" fill="#9ca3af">${k[0]}</text>
  <text x="${70 + i * 182}" y="138" font-family="${F}" font-size="17" font-weight="800" fill="${k[2]}">${k[1]}</text>`).join("")}
<!-- tablero de estados -->
${[["PENDIENTE", ["Pedido #1042", "Pedido #1043"], "#6b7280"], ["EN PROCESO", ["Pedido #1038", "Pedido #1040"], "#f59e0b"], ["LISTO", ["Pedido #1031", "Pedido #1035"], "#22c55e"]]
  .map((col, i) => {
    const x = 56 + i * 182;
    return `<rect x="${x}" y="162" width="168" height="180" rx="9" fill="#17171f" stroke="#2a2a34"/>
  <circle cx="${x + 16}" cy="181" r="4" fill="${col[2]}"/>
  <text x="${x + 28}" y="185" font-family="${F}" font-size="9" font-weight="700" fill="#9ca3af">${col[0]}</text>
  ${col[1].map((t, j) => `<rect x="${x + 12}" y="${198 + j * 62}" width="144" height="52" rx="8" fill="#111118" stroke="#2a2a34"/>
    <rect x="${x + 12}" y="${198 + j * 62}" width="4" height="52" rx="2" fill="${col[2]}"/>
    <text x="${x + 26}" y="${216 + j * 62}" font-family="${F}" font-size="10" font-weight="700" fill="#e5e5e5">${t}</text>
    <text x="${x + 26}" y="${230 + j * 62}" font-family="${F}" font-size="9" fill="#6b7280">Cliente ${j + 1 + i * 2}</text>
    <rect x="${x + 26}" y="${236 + j * 62}" width="${60 + j * 20}" height="5" rx="2.5" fill="#2a2a34"/>`).join("")}`;
  }).join("")}`
);

// --- Prode Fútbol: pronósticos y ranking -------------------------------------
const prode = svg(
  "Prode Fútbol: pronósticos de la fecha y ranking de participantes",
  `${fondo("#f472b6", "#9d174d")}
${ventana("Prode Fútbol · Fecha 8", null)}
<rect x="508" y="49" width="86" height="20" rx="10" fill="url(#marca)"/><text x="551" y="63" font-family="${F}" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">Cierra en 2 h</text>
<!-- pronósticos -->
<rect x="56" y="94" width="318" height="248" rx="9" fill="#17171f" stroke="#2a2a34"/>
<text x="70" y="114" font-family="${F}" font-size="9" fill="#9ca3af">TUS PRONÓSTICOS · FECHA 8</text>
${[["Atlético", "Juventud", 0], ["Unión", "Central", 1], ["Deportivo", "Sportivo", 2], ["Belgrano", "Mitre", 0]]
  .map((p, i) => {
    const y = 128 + i * 52;
    return `<rect x="70" y="${y}" width="290" height="44" rx="8" fill="#111118"/>
  <circle cx="88" cy="${y + 22}" r="10" fill="#3b3466"/><circle cx="342" cy="${y + 22}" r="10" fill="#2a2a34"/>
  <text x="104" y="${y + 26}" font-family="${F}" font-size="10" font-weight="700" fill="#e5e5e5">${p[0]}</text>
  <text x="326" y="${y + 26}" font-family="${F}" font-size="10" font-weight="700" fill="#e5e5e5" text-anchor="end">${p[1]}</text>
  ${["L", "E", "V"].map((o, j) => `<rect x="${182 + j * 30}" y="${y + 12}" width="26" height="20" rx="6" fill="${j === p[2] ? "url(#marca)" : "#1c1c24"}"/>
    <text x="${195 + j * 30}" y="${y + 26}" font-family="${F}" font-size="10" font-weight="800" fill="${j === p[2] ? "#fff" : "#6b7280"}" text-anchor="middle">${o}</text>`).join("")}`;
  }).join("")}
<!-- ranking -->
<rect x="388" y="94" width="196" height="248" rx="9" fill="#17171f" stroke="#2a2a34"/>
<text x="402" y="114" font-family="${F}" font-size="9" fill="#9ca3af">RANKING GENERAL</text>
${[["Martín", "148"], ["Caro", "141"], ["Vos", "137"], ["Nico", "130"], ["Juli", "126"], ["Pablo", "119"], ["Ana", "111"]]
  .map((r, i) => `<rect x="402" y="${126 + i * 29}" width="168" height="24" rx="7" fill="${r[0] === "Vos" ? "#2a1d33" : "#111118"}"/>
  <text x="414" y="${142 + i * 29}" font-family="${F}" font-size="9" font-weight="800" fill="${i < 3 ? "#f472b6" : "#6b7280"}">${i + 1}</text>
  <text x="432" y="${142 + i * 29}" font-family="${F}" font-size="10" font-weight="${r[0] === "Vos" ? "800" : "400"}" fill="#e5e5e5">${r[0]}</text>
  <text x="558" y="${142 + i * 29}" font-family="${F}" font-size="10" font-weight="700" fill="#e5e5e5" text-anchor="end">${r[1]}</text>`).join("")}`
);

// --- AllYerbas: tienda online ------------------------------------------------
const allyerbas = svg(
  "AllYerbas: sitio web con catálogo de productos",
  `${fondo("#4ade80", "#166534")}
${ventana(null, "https://allyerbas.com.ar")}
<!-- hero -->
<rect x="36" y="78" width="568" height="104" fill="url(#marca)"/>
<text x="64" y="118" font-family="${F}" font-size="19" font-weight="800" fill="#fff">Toda la yerba, en un solo lugar</text>
<rect x="64" y="130" width="190" height="7" rx="3.5" fill="#ffffff" opacity="0.6"/>
<rect x="64" y="144" width="130" height="7" rx="3.5" fill="#ffffff" opacity="0.4"/>
<rect x="64" y="158" width="96" height="20" rx="10" fill="#fff"/><text x="112" y="172" font-family="${F}" font-size="9" font-weight="700" fill="#166534" text-anchor="middle">Ver catálogo</text>
<circle cx="520" cy="130" r="42" fill="#ffffff" opacity="0.14"/>
<!-- productos -->
${[0, 1, 2, 3].map((i) => {
  const x = 56 + i * 138;
  return `<rect x="${x}" y="200" width="126" height="142" rx="9" fill="#17171f" stroke="#2a2a34"/>
  <rect x="${x + 12}" y="212" width="102" height="66" rx="7" fill="#1c2a1f"/>
  <rect x="${x + 44}" y="222" width="38" height="46" rx="5" fill="#2f6b3c" opacity="${0.55 + i * 0.12}"/>
  <rect x="${x + 50}" y="232" width="26" height="14" rx="3" fill="#4ade80" opacity="0.5"/>
  <text x="${x + 12}" y="296" font-family="${F}" font-size="10" font-weight="700" fill="#e5e5e5">Yerba ${["Suave", "Clásica", "Compuesta", "Orgánica"][i]}</text>
  <text x="${x + 12}" y="312" font-family="${F}" font-size="9" fill="#6b7280">1 kg</text>
  <text x="${x + 12}" y="332" font-family="${F}" font-size="12" font-weight="800" fill="#4ade80">$ ${["4.900", "5.400", "6.100", "7.200"][i]}</text>
  <circle cx="${x + 104}" cy="326" r="11" fill="url(#marca)"/>
  <path d="M${x + 99} 326 h10 M${x + 104} 321 v10" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`;
}).join("")}`
);

const archivos = {
  "minuto-futbol.svg": minuto,
  "trapitos.svg": trapitos,
  "ls-entrenamientos.svg": lsentrenamientos,
  "ccs.svg": ccs,
  "prode.svg": prode,
  "allyerbas.svg": allyerbas,
};
for (const [nombre, contenido] of Object.entries(archivos)) {
  fs.writeFileSync(path.join(dir, nombre), contenido);
}
console.log("miniaturas de proyectos listas en", dir);
