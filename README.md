# JJSoluciones — sitio web

Sitio de la empresa, versión 2 (Next.js 14 + Tailwind + shadcn/ui). Es 100 % estático:
`npm run build` deja todo listo en `out/`.

## Correrlo en la PC

```bash
npm install
npm run dev
```

Abre en http://localhost:3000.

## Dónde se edita cada cosa

| Qué                                   | Archivo                                |
| ------------------------------------- | -------------------------------------- |
| Textos, precios, servicios, teléfonos | `lib/contenido.ts`                     |
| Clientes del portal (email → sistema) | `lib/contenido.ts` → `CLIENTES`        |
| Link del APK de Minuto Fútbol         | `lib/contenido.ts` → `MINUTO_FUTBOL`   |
| Robot 3D del hero                     | `components/secciones/Hero.tsx`        |
| Mensajes del asistente                | `components/Asistente.tsx`             |
| Logo                                  | `public/marca/logo.svg` (reemplazar)   |
| Fotos                                 | `legacy/*.jpg` → `npm run fotos`       |

## Publicar

### GitHub Pages (mientras no haya dominio propio)

Cada `git push` a `main` publica solo (workflow `.github/workflows/deploy-pages.yml`).
Una sola vez hay que activar: repo → **Settings → Pages → Source: GitHub Actions**.

### cPanel (con dominio propio)

```bash
npm run build
```

Subir **el contenido** de la carpeta `out/` a `public_html/` (por FTP o el
administrador de archivos de cPanel). No hace falta Node en el hosting.

## El robot 3D

La escena del hero es la de demostración pública del componente de 21st.dev.
Para tener una propia: crear la escena en https://spline.design (gratis),
exportar → *Code* → copiar la URL `.splinecode` y pegarla en `Hero.tsx`.
