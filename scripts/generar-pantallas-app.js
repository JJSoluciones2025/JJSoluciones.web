// Genera las 3 "capturas" de Minuto Fútbol que se ven dentro del celular 3D
// de /app (public/app/pantalla-*.svg). Son dibujos en SVG con los colores del
// sitio real, así se ven nítidos en cualquier tamaño y no dependen de fotos.
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "app");
fs.mkdirSync(dir, { recursive: true });

const W = 390, H = 844;
const F = "Inter, Arial, sans-serif";
const LIMA = "#d4ff3f", NAR = "#f7941d", FONDO = "#0a0a0a", SUP = "#171717", BORDE = "#2a2a2a", TXT = "#f5f5f5", GRIS = "#9ca3af";

const header = `
  <rect width="${W}" height="64" fill="${SUP}"/>
  <rect y="64" width="${W}" height="1" fill="${BORDE}"/>
  <text x="20" y="41" font-family="${F}" font-size="17" font-weight="900" fill="${LIMA}" letter-spacing="0.5">MINUTO FÚTBOL</text>
  <circle cx="${W - 84}" cy="33" r="8" fill="none" stroke="${TXT}" stroke-width="2"/>
  <path d="M${W - 44} 24c-5 0-9 4-9 9v6l-3 4v2h24v-2l-3-4v-6c0-5-4-9-9-9z" fill="${TXT}"/>
  <rect x="${W - 24}" y="26" width="16" height="2" rx="1" fill="${LIMA}"/><rect x="${W - 24}" y="32" width="16" height="2" rx="1" fill="${LIMA}"/><rect x="${W - 24}" y="38" width="16" height="2" rx="1" fill="${LIMA}"/>
`;

const escudo = (x, y, color, letra) => `<circle cx="${x}" cy="${y}" r="13" fill="${color}"/><text x="${x}" y="${y + 5}" font-family="${F}" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">${letra}</text>`;

const sponsors = (y) => `
  <rect x="16" y="${y}" width="${(W - 32) / 2}" height="58" rx="4" fill="#764ba2"/>
  <text x="28" y="${y + 26}" font-family="${F}" font-size="12" font-weight="800" fill="#fff">HELADERÍA POLAR</text>
  <text x="28" y="${y + 44}" font-family="${F}" font-size="9" fill="#ffe5ec">Sabores artesanales</text>
  <rect x="${16 + (W - 32) / 2}" y="${y}" width="${(W - 32) / 2}" height="58" rx="4" fill="#1f4e79"/>
  <text x="${28 + (W - 32) / 2}" y="${y + 26}" font-family="${F}" font-size="12" font-weight="800" fill="#fff">FERRETERÍA</text>
  <text x="${28 + (W - 32) / 2}" y="${y + 44}" font-family="${F}" font-size="9" fill="#cfe3f7">Todo para tu obra</text>`;

const tarjetaResultado = (x, y, w, fecha, a, ga, b, gb) => `
  <rect x="${x}" y="${y}" width="${w}" height="96" rx="10" fill="${SUP}" stroke="${BORDE}"/>
  <text x="${x + 14}" y="${y + 22}" font-family="${F}" font-size="11" fill="${GRIS}">${fecha}</text>
  ${escudo(x + 24, y + 46, "#2f6b4a", a[0])}<text x="${x + 44}" y="${y + 51}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${a}</text>
  <text x="${x + w - 14}" y="${y + 51}" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}" text-anchor="end">${ga}</text>
  ${escudo(x + 24, y + 76, "#b23a48", b[0])}<text x="${x + 44}" y="${y + 81}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${b}</text>
  <text x="${x + w - 14}" y="${y + 81}" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}" text-anchor="end">${gb}</text>`;

// 1) Home con partido en vivo
const home = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${FONDO}"/>
  ${header}
  <rect x="16" y="84" width="${W - 32}" height="112" rx="12" fill="${SUP}" stroke="${NAR}" stroke-opacity="0.5"/>
  <circle cx="34" cy="106" r="4" fill="${NAR}"/>
  <text x="46" y="110" font-family="${F}" font-size="11" font-weight="700" fill="${NAR}">EN VIVO · 67'</text>
  ${escudo(46, 156, "#b23a48", "A")}<text x="68" y="161" font-family="${F}" font-size="16" font-weight="700" fill="${TXT}">Agustina</text>
  <text x="${W / 2}" y="166" font-family="${F}" font-size="30" font-weight="900" fill="${TXT}" text-anchor="middle">2 - 1</text>
  ${escudo(W - 46, 156, "#0369a1", "S")}<text x="${W - 68}" y="161" font-family="${F}" font-size="16" font-weight="700" fill="${TXT}" text-anchor="end">Singlar</text>
  ${sponsors(214)}
  <text x="16" y="312" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}">ÚLTIMOS RESULTADOS</text>
  <text x="${W - 16}" y="312" font-family="${F}" font-size="11" fill="${GRIS}" text-anchor="end">Ver fixture →</text>
  ${tarjetaResultado(16, 328, W - 32, "Fecha 1", "Social", 2, "Huracán", 0)}
  ${tarjetaResultado(16, 436, W - 32, "Fecha 1", "Arenales F.C.", 2, "Colonial", 1)}
  ${sponsors(552)}
  <text x="16" y="650" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}">PRÓXIMOS PARTIDOS</text>
  <rect x="16" y="666" width="${W - 32}" height="96" rx="10" fill="${SUP}" stroke="${BORDE}"/>
  <text x="30" y="688" font-family="${F}" font-size="11" fill="${GRIS}">Fecha 2 · 27/09 15:00</text>
  ${escudo(40, 712, "#7c3aed", "B")}<text x="60" y="717" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">Belgrano</text>
  ${escudo(40, 742, "#b23a48", "A")}<text x="60" y="747" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">Agustina</text>
  <rect x="0" y="${H - 60}" width="${W}" height="60" fill="${SUP}"/><rect y="${H - 60}" width="${W}" height="1" fill="${BORDE}"/>
  <text x="${W / 2}" y="${H - 26}" font-family="${F}" font-size="11" fill="${GRIS}" text-anchor="middle">Desarrollado por JJSoluciones</text>
</svg>`;

// 2) Partido: minuto a minuto
const evento = (y, minuto, icono, club, texto) => `
  <rect x="16" y="${y}" width="${W - 32}" height="70" rx="10" fill="${SUP}" stroke="${BORDE}"/>
  <text x="34" y="${y + 43}" font-family="${F}" font-size="18" font-weight="900" fill="${LIMA}">${minuto}'</text>
  ${icono}
  <text x="112" y="${y + 26}" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}" letter-spacing="1">${club}</text>
  <text x="112" y="${y + 48}" font-family="${F}" font-size="13" fill="${TXT}">${texto}</text>`;
const pelota = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="${TXT}"/><polygon points="${x},${y - 5} ${x + 4.5},${y - 1.5} ${x + 3},${y + 4} ${x - 3},${y + 4} ${x - 4.5},${y - 1.5}" fill="#111"/>`;
const tarjeta = (x, y, color) => `<rect x="${x - 5}" y="${y - 8}" width="10" height="15" rx="1.5" fill="${color}"/>`;
const partido = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${FONDO}"/>
  ${header}
  <text x="16" y="92" font-family="${F}" font-size="11" font-weight="700" fill="${NAR}" letter-spacing="1">FECHA 1</text>
  <rect x="16" y="104" width="${W - 32}" height="150" rx="12" fill="${SUP}" stroke="${BORDE}"/>
  <circle cx="${W / 2 - 46}" cy="128" r="4" fill="${NAR}"/>
  <text x="${W / 2 - 36}" y="132" font-family="${F}" font-size="12" font-weight="700" fill="${NAR}">EN VIVO · 67'</text>
  ${escudo(90, 176, "#b23a48", "A")}<text x="90" y="222" font-family="${F}" font-size="16" font-weight="900" fill="${TXT}" text-anchor="middle">AGUSTINA</text>
  <text x="${W / 2}" y="196" font-family="${F}" font-size="44" font-weight="900" fill="${TXT}" text-anchor="middle">2 - 1</text>
  ${escudo(W - 90, 176, "#0369a1", "S")}<text x="${W - 90}" y="222" font-family="${F}" font-size="16" font-weight="900" fill="${TXT}" text-anchor="middle">SINGLAR</text>
  <text x="16" y="292" font-family="${F}" font-size="12" font-weight="700" fill="${TXT}" letter-spacing="1">CRONOLOGÍA</text>
  <rect x="16" y="300" width="96" height="2" fill="${LIMA}"/>
  <text x="130" y="292" font-family="${F}" font-size="12" font-weight="700" fill="${GRIS}" letter-spacing="1">ALINEACIONES</text>
  <text x="256" y="292" font-family="${F}" font-size="12" font-weight="700" fill="${GRIS}" letter-spacing="1">FOTOS</text>
  ${evento(318, 67, pelota(84, 353), "AGUSTINA", "¡Golazo de cabeza de Lamardo!")}
  ${evento(400, 55, tarjeta(84, 435, "#facc15"), "SINGLAR", "Amarilla por entrada fuerte")}
  ${evento(482, 41, pelota(84, 517), "SINGLAR", "Empata Sarlo de tiro libre")}
  ${evento(564, 23, pelota(84, 599), "AGUSTINA", "Abre el marcador Benítez")}
  ${evento(646, 1, `<polygon points="78,${673} 78,${689} 92,${681}" fill="${LIMA}"/>`, "", "Arranca el partido")}
  <rect x="0" y="${H - 60}" width="${W}" height="60" fill="${SUP}"/><rect y="${H - 60}" width="${W}" height="1" fill="${BORDE}"/>
  <text x="${W / 2}" y="${H - 26}" font-family="${F}" font-size="11" fill="${GRIS}" text-anchor="middle">Desarrollado por JJSoluciones</text>
</svg>`;

// 3) Tabla de posiciones
const fila = (i, nombre, color, pj, pts, top) => {
  const y = 260 + i * 56;
  return `<rect x="16" y="${y}" width="${W - 32}" height="56" fill="${top ? "rgba(212,255,63,0.06)" : "none"}"/>
  <rect x="16" y="${y + 55}" width="${W - 32}" height="1" fill="${BORDE}"/>
  <text x="34" y="${y + 34}" font-family="${F}" font-size="13" fill="${GRIS}">${i + 1}</text>
  ${escudo(66, y + 28, color, nombre[0])}<text x="88" y="${y + 33}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${nombre}</text>
  <text x="${W - 96}" y="${y + 33}" font-family="${F}" font-size="13" fill="${GRIS}" text-anchor="middle">${pj}</text>
  <text x="${W - 40}" y="${y + 34}" font-family="${F}" font-size="16" font-weight="900" fill="${LIMA}" text-anchor="middle">${pts}</text>`;
};
const tabla = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${FONDO}"/>
  ${header}
  ${sponsors(80)}
  <text x="16" y="170" font-family="${F}" font-size="11" font-weight="700" fill="${NAR}" letter-spacing="1">TORNEO APERTURA</text>
  <text x="16" y="206" font-family="${F}" font-size="26" font-weight="900" fill="${TXT}">TABLA DE POSICIONES</text>
  <rect x="16" y="228" width="${W - 32}" height="1" fill="${BORDE}"/>
  <text x="34" y="248" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}">#</text>
  <text x="88" y="248" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}">CLUB</text>
  <text x="${W - 96}" y="248" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}" text-anchor="middle">PJ</text>
  <text x="${W - 40}" y="248" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}" text-anchor="middle">PTS</text>
  ${fila(0, "Social", "#2f6b4a", 3, 9, true)}
  ${fila(1, "Arenales F.C.", "#b23a48", 3, 7, true)}
  ${fila(2, "Agustina", "#b23a48", 3, 6, true)}
  ${fila(3, "Singlar", "#0369a1", 3, 4, true)}
  ${fila(4, "12 de Octubre", "#b45309", 3, 4)}
  ${fila(5, "Belgrano", "#7c3aed", 3, 3)}
  ${fila(6, "Colonial", "#dc2626", 3, 1)}
  ${fila(7, "Huracán", "#16a34a", 3, 0)}
  <circle cx="24" cy="726" r="4" fill="${LIMA}"/><text x="36" y="730" font-family="${F}" font-size="11" fill="${GRIS}">Zona de clasificación a semifinales</text>
  <rect x="0" y="${H - 60}" width="${W}" height="60" fill="${SUP}"/><rect y="${H - 60}" width="${W}" height="1" fill="${BORDE}"/>
  <text x="${W / 2}" y="${H - 26}" font-family="${F}" font-size="11" fill="${GRIS}" text-anchor="middle">Desarrollado por JJSoluciones</text>
</svg>`;

fs.writeFileSync(path.join(dir, "pantalla-home.svg"), home);
fs.writeFileSync(path.join(dir, "pantalla-partido.svg"), partido);
fs.writeFileSync(path.join(dir, "pantalla-tabla.svg"), tabla);
console.log("pantallas listas en", dir);
