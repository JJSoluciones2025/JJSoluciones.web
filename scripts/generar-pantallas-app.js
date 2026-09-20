// Genera las 3 "capturas" de Minuto Fútbol que se ven dentro del celular 3D
// de /app (public/app/pantalla-*.svg) con DATOS REALES del sitio: clubes con
// sus escudos (incrustados en base64 para que el SVG sea autónomo), últimos
// resultados, próximos partidos y tabla. Sin publicidad.
//
// Uso: node scripts/generar-pantallas-app.js   (necesita internet)
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const API = "https://api-minutofutbol.jsoluciones.com.ar/api";
const TORNEO = "torneo-apertura-40-anos-canal";
const dir = path.join(__dirname, "..", "public", "app");
fs.mkdirSync(dir, { recursive: true });

const W = 390, H = 844;
const F = "Inter, Arial, sans-serif";
const LIMA = "#d4ff3f", NAR = "#f7941d", FONDO = "#0a0a0a", SUP = "#171717", BORDE = "#2a2a2a", TXT = "#f5f5f5", GRIS = "#9ca3af";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

async function json(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url}: ${r.status}`);
  return r.json();
}

// Descarga un escudo y lo devuelve como data URI PNG de 64px
async function escudoBase64(url) {
  try {
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    const png = await sharp(buf).resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    return `data:image/png;base64,${png.toString("base64")}`;
  } catch {
    return null;
  }
}

(async () => {
  const [clubs, matches, standings] = await Promise.all([
    json(`${API}/clubs`),
    json(`${API}/matches?tournamentId=${TORNEO}`),
    json(`${API}/matches/standings?tournamentId=${TORNEO}`),
  ]);

  const logos = {};
  for (const c of clubs) logos[c.id] = c.logoUrl ? await escudoBase64(c.logoUrl) : null;

  const escudo = (club, x, y, r = 13) => {
    const d = logos[club.id];
    if (d) return `<image href="${d}" x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}"/>`;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#333"/><text x="${x}" y="${y + 5}" font-family="${F}" font-size="${r}" font-weight="700" fill="#fff" text-anchor="middle">${esc(club.name[0])}</text>`;
  };

  const header = `
  <rect width="${W}" height="64" fill="${SUP}"/>
  <rect y="64" width="${W}" height="1" fill="${BORDE}"/>
  <text x="20" y="41" font-family="${F}" font-size="17" font-weight="900" fill="${LIMA}" letter-spacing="0.5">MINUTO FÚTBOL</text>
  <circle cx="${W - 84}" cy="33" r="8" fill="none" stroke="${TXT}" stroke-width="2"/>
  <path d="M${W - 44} 24c-5 0-9 4-9 9v6l-3 4v2h24v-2l-3-4v-6c0-5-4-9-9-9z" fill="${TXT}"/>
  <rect x="${W - 24}" y="26" width="16" height="2" rx="1" fill="${LIMA}"/><rect x="${W - 24}" y="32" width="16" height="2" rx="1" fill="${LIMA}"/><rect x="${W - 24}" y="38" width="16" height="2" rx="1" fill="${LIMA}"/>`;

  const pie = `
  <rect x="0" y="${H - 60}" width="${W}" height="60" fill="${SUP}"/><rect y="${H - 60}" width="${W}" height="1" fill="${BORDE}"/>
  <text x="${W / 2}" y="${H - 26}" font-family="${F}" font-size="11" fill="${GRIS}" text-anchor="middle">Desarrollado por JJSoluciones</text>`;

  const porFecha = (a, b) => new Date(b.date) - new Date(a.date);
  const enVivo = matches.find((m) => m.status === "EN_VIVO" || m.status === "ENTRETIEMPO");
  const finalizados = matches.filter((m) => m.status === "FINALIZADO").sort(porFecha).slice(0, 2);
  const proximos = matches.filter((m) => m.status === "PENDIENTE").sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 2);

  const tarjetaResultado = (m, x, y, w) => `
  <rect x="${x}" y="${y}" width="${w}" height="96" rx="10" fill="${SUP}" stroke="${BORDE}"/>
  <text x="${x + 14}" y="${y + 22}" font-family="${F}" font-size="11" fill="${GRIS}">${esc(m.round ?? "")}</text>
  ${escudo(m.local, x + 24, y + 46)}<text x="${x + 44}" y="${y + 51}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${esc(m.local.name)}</text>
  <text x="${x + w - 14}" y="${y + 51}" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}" text-anchor="end">${m.localScore}</text>
  ${escudo(m.visitor, x + 24, y + 76)}<text x="${x + 44}" y="${y + 81}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${esc(m.visitor.name)}</text>
  <text x="${x + w - 14}" y="${y + 81}" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}" text-anchor="end">${m.visitorScore}</text>`;

  const tarjetaProximo = (m, x, y, w) => {
    const d = new Date(m.date);
    const fecha = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
    return `
  <rect x="${x}" y="${y}" width="${w}" height="96" rx="10" fill="${SUP}" stroke="${BORDE}"/>
  <text x="${x + 14}" y="${y + 22}" font-family="${F}" font-size="11" fill="${GRIS}">${esc(m.round ?? "")} · ${fecha}</text>
  ${escudo(m.local, x + 24, y + 46)}<text x="${x + 44}" y="${y + 51}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${esc(m.local.name)}</text>
  ${escudo(m.visitor, x + 24, y + 76)}<text x="${x + 44}" y="${y + 81}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${esc(m.visitor.name)}</text>`;
  };

  // ---- 1) Home ------------------------------------------------------------
  let y = 84;
  let bloqueVivo = "";
  if (enVivo) {
    const estado = enVivo.status === "ENTRETIEMPO" ? "ENTRETIEMPO" : `EN VIVO · ${enVivo.minute ?? 0}'`;
    bloqueVivo = `
  <rect x="16" y="${y}" width="${W - 32}" height="112" rx="12" fill="${SUP}" stroke="${NAR}" stroke-opacity="0.5"/>
  <circle cx="34" cy="${y + 22}" r="4" fill="${NAR}"/>
  <text x="46" y="${y + 26}" font-family="${F}" font-size="11" font-weight="700" fill="${NAR}">${estado}</text>
  ${escudo(enVivo.local, 46, y + 72, 15)}<text x="68" y="${y + 77}" font-family="${F}" font-size="15" font-weight="700" fill="${TXT}">${esc(enVivo.local.name)}</text>
  <text x="${W / 2}" y="${y + 82}" font-family="${F}" font-size="30" font-weight="900" fill="${TXT}" text-anchor="middle">${enVivo.localScore} - ${enVivo.visitorScore}</text>
  ${escudo(enVivo.visitor, W - 46, y + 72, 15)}<text x="${W - 68}" y="${y + 77}" font-family="${F}" font-size="15" font-weight="700" fill="${TXT}" text-anchor="end">${esc(enVivo.visitor.name)}</text>`;
    y += 132;
  }
  let bloqueResultados = `<text x="16" y="${y + 20}" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}">ÚLTIMOS RESULTADOS</text>
  <text x="${W - 16}" y="${y + 20}" font-family="${F}" font-size="11" fill="${GRIS}" text-anchor="end">Ver fixture →</text>`;
  y += 36;
  for (const m of finalizados) {
    bloqueResultados += tarjetaResultado(m, 16, y, W - 32);
    y += 108;
  }
  y += 12;
  let bloqueProximos = `<text x="16" y="${y + 20}" font-family="${F}" font-size="18" font-weight="900" fill="${TXT}">PRÓXIMOS PARTIDOS</text>`;
  y += 36;
  for (const m of proximos) {
    if (y + 96 > H - 70) break;
    bloqueProximos += tarjetaProximo(m, 16, y, W - 32);
    y += 108;
  }
  const home = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${FONDO}"/>${header}${bloqueVivo}${bloqueResultados}${bloqueProximos}${pie}</svg>`;

  // ---- 2) Partido (el que está en vivo, o el último jugado) ---------------
  const p = enVivo ?? finalizados[0];
  const detalle = await json(`${API}/matches/${p.id}`);
  const eventos = [...(detalle.events ?? [])].sort((a, b) => b.minute - a.minute).slice(0, 5);
  const estadoP = p.status === "ENTRETIEMPO" ? "ENTRETIEMPO" : p.status === "EN_VIVO" ? `EN VIVO · ${p.minute ?? 0}'` : "FINALIZADO";
  const pelota = (x, yy) => `<circle cx="${x}" cy="${yy}" r="9" fill="${TXT}"/><polygon points="${x},${yy - 5} ${x + 4.5},${yy - 1.5} ${x + 3},${yy + 4} ${x - 3},${yy + 4} ${x - 4.5},${yy - 1.5}" fill="#111"/>`;
  const tarjeta = (x, yy, color) => `<rect x="${x - 5}" y="${yy - 8}" width="10" height="15" rx="1.5" fill="${color}"/>`;
  const iconoEvento = (e, x, yy) =>
    e.type === "GOL" ? pelota(x, yy) : e.type === "AMARILLA" ? tarjeta(x, yy, "#facc15") : e.type === "ROJA" ? tarjeta(x, yy, "#ef4444") : `<polygon points="${x - 6},${yy - 8} ${x - 6},${yy + 8} ${x + 8},${yy}" fill="${LIMA}"/>`;
  let ye = 318;
  let bloqueEventos = "";
  for (const e of eventos) {
    const texto = e.text.length > 34 ? e.text.slice(0, 33) + "…" : e.text;
    bloqueEventos += `
  <rect x="16" y="${ye}" width="${W - 32}" height="70" rx="10" fill="${SUP}" stroke="${BORDE}"/>
  <text x="34" y="${ye + 43}" font-family="${F}" font-size="18" font-weight="900" fill="${LIMA}">${e.minute}'</text>
  ${iconoEvento(e, 84, ye + 35)}
  <text x="112" y="${ye + 26}" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}" letter-spacing="1">${esc((e.club?.name ?? "").toUpperCase())}</text>
  <text x="112" y="${ye + 48}" font-family="${F}" font-size="13" fill="${TXT}">${esc(texto)}</text>`;
    ye += 82;
  }
  const partido = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${FONDO}"/>${header}
  <text x="16" y="92" font-family="${F}" font-size="11" font-weight="700" fill="${NAR}" letter-spacing="1">${esc((p.round ?? "").toUpperCase())}</text>
  <rect x="16" y="104" width="${W - 32}" height="150" rx="12" fill="${SUP}" stroke="${BORDE}"/>
  ${p.status !== "FINALIZADO" ? `<circle cx="${W / 2 - 46}" cy="128" r="4" fill="${NAR}"/>` : ""}
  <text x="${W / 2}" y="132" font-family="${F}" font-size="12" font-weight="700" fill="${p.status === "FINALIZADO" ? GRIS : NAR}" text-anchor="middle">${estadoP}</text>
  ${escudo(p.local, 90, 176, 22)}<text x="90" y="226" font-family="${F}" font-size="15" font-weight="900" fill="${TXT}" text-anchor="middle">${esc(p.local.name.toUpperCase())}</text>
  <text x="${W / 2}" y="196" font-family="${F}" font-size="44" font-weight="900" fill="${TXT}" text-anchor="middle">${p.localScore} - ${p.visitorScore}</text>
  ${escudo(p.visitor, W - 90, 176, 22)}<text x="${W - 90}" y="226" font-family="${F}" font-size="15" font-weight="900" fill="${TXT}" text-anchor="middle">${esc(p.visitor.name.toUpperCase())}</text>
  <text x="16" y="292" font-family="${F}" font-size="12" font-weight="700" fill="${TXT}" letter-spacing="1">CRONOLOGÍA</text>
  <rect x="16" y="300" width="96" height="2" fill="${LIMA}"/>
  <text x="130" y="292" font-family="${F}" font-size="12" font-weight="700" fill="${GRIS}" letter-spacing="1">ALINEACIONES</text>
  <text x="256" y="292" font-family="${F}" font-size="12" font-weight="700" fill="${GRIS}" letter-spacing="1">FOTOS</text>
  ${bloqueEventos}${pie}</svg>`;

  // ---- 3) Tabla -------------------------------------------------------------
  const tabla = [...standings].sort((a, b) => b.pts - a.pts || b.gf - b.gc - (a.gf - a.gc)).slice(0, 8);
  let bloqueTabla = "";
  tabla.forEach((r, i) => {
    const yy = 200 + i * 56;
    bloqueTabla += `<rect x="16" y="${yy}" width="${W - 32}" height="56" fill="${i < 4 ? "rgba(212,255,63,0.06)" : "none"}"/>
  <rect x="16" y="${yy + 55}" width="${W - 32}" height="1" fill="${BORDE}"/>
  <text x="34" y="${yy + 34}" font-family="${F}" font-size="13" fill="${GRIS}">${i + 1}</text>
  ${escudo(r.club, 66, yy + 28)}<text x="88" y="${yy + 33}" font-family="${F}" font-size="14" font-weight="700" fill="${TXT}">${esc(r.club.name)}</text>
  <text x="${W - 96}" y="${yy + 33}" font-family="${F}" font-size="13" fill="${GRIS}" text-anchor="middle">${r.pj}</text>
  <text x="${W - 40}" y="${yy + 34}" font-family="${F}" font-size="16" font-weight="900" fill="${LIMA}" text-anchor="middle">${r.pts}</text>`;
  });
  const tablaSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${FONDO}"/>${header}
  <text x="16" y="110" font-family="${F}" font-size="11" font-weight="700" fill="${NAR}" letter-spacing="1">TORNEO APERTURA</text>
  <text x="16" y="146" font-family="${F}" font-size="26" font-weight="900" fill="${TXT}">TABLA DE POSICIONES</text>
  <rect x="16" y="168" width="${W - 32}" height="1" fill="${BORDE}"/>
  <text x="34" y="188" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}">#</text>
  <text x="88" y="188" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}">CLUB</text>
  <text x="${W - 96}" y="188" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}" text-anchor="middle">PJ</text>
  <text x="${W - 40}" y="188" font-family="${F}" font-size="10" font-weight="700" fill="${GRIS}" text-anchor="middle">PTS</text>
  ${bloqueTabla}
  <circle cx="24" cy="${200 + tabla.length * 56 + 26}" r="4" fill="${LIMA}"/><text x="36" y="${200 + tabla.length * 56 + 30}" font-family="${F}" font-size="11" fill="${GRIS}">Zona de clasificación a semifinales</text>
  ${pie}</svg>`;

  // Versión en el nombre: los SVG se cachean 7 días (.htaccess), así que si
  // se llamaran igual, Cloudflare y los navegadores seguirían mostrando los
  // viejos. Se borra la versión anterior y se actualiza lib/pantallas-app.ts.
  const version = Date.now().toString(36);
  for (const f of fs.readdirSync(dir)) if (/^pantalla-.*\.svg$/.test(f)) fs.unlinkSync(path.join(dir, f));
  fs.writeFileSync(path.join(dir, `pantalla-home-${version}.svg`), home);
  fs.writeFileSync(path.join(dir, `pantalla-partido-${version}.svg`), partido);
  fs.writeFileSync(path.join(dir, `pantalla-tabla-${version}.svg`), tablaSvg);
  fs.writeFileSync(
    path.join(__dirname, "..", "lib", "pantallas-app.ts"),
    `// Generado por scripts/generar-pantallas-app.js — no editar a mano\nexport const VERSION_PANTALLAS = "${version}";\n`
  );
  console.log(`pantallas listas (versión ${version}) en`, dir);
})();
