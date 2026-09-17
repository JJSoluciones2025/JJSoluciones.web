// Redimensiona y comprime las fotos de public/img para la web (máx. 1600 px,
// JPEG calidad 80). Se corre una vez: `node scripts/comprimir-fotos.js`.
// Las originales quedan en legacy/.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Origen: las fotos originales (legacy/). Destino: public/fotos/
const origen = path.join(__dirname, "..", "legacy");
const destino = path.join(__dirname, "..", "public", "fotos");
fs.mkdirSync(destino, { recursive: true });

(async () => {
  for (const nombre of fs.readdirSync(origen).filter((n) => /\.jpe?g$/i.test(n))) {
    const ruta = path.join(origen, nombre);
    const antes = fs.statSync(ruta).size;
    const buffer = await sharp(ruta)
      .rotate() // respeta la orientación EXIF
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(path.join(destino, nombre), buffer);
    console.log(`${nombre}: ${Math.round(antes / 1024)} KB -> ${Math.round(buffer.length / 1024)} KB`);
  }
})();
