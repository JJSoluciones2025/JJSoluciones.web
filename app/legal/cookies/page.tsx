import type { Metadata } from "next";
import PaginaLegal from "@/components/PaginaLegal";
import BotonConfigurarCookies from "@/components/BotonConfigurarCookies";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Qué cookies y almacenamiento local usa jsoluciones.com.ar y cómo controlarlos.",
};

export default function CookiesPage() {
  return (
    <PaginaLegal titulo="Política de Cookies" actual="/legal/cookies/">
      <p>
        Esta política explica qué cookies y tecnologías similares usa <strong>jsoluciones.com.ar</strong> y cómo podés
        controlarlas. La versión corta: <strong>el Sitio no usa cookies de seguimiento ni publicidad</strong>. Solo guarda tu
        elección sobre este aviso, y el contenido de otros sitios que mostramos puede colocar las suyas si lo aceptás.
      </p>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información entre visitas. El
        &quot;almacenamiento local&quot; (localStorage) cumple una función parecida, pero no se envía al servidor con cada
        pedido. Acá usamos la palabra &quot;cookies&quot; para referirnos a ambos.
      </p>

      <h2>2. Cookies que usa este Sitio</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Quién la pone</th>
            <th>Para qué</th>
            <th>Duración</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>jj:consentimiento</code></td>
            <td>JJSoluciones (localStorage)</td>
            <td>Recordar qué elegiste en el aviso de cookies para no volver a preguntarte.</td>
            <td>Hasta que la borres o cambie la política</td>
            <td>Necesaria</td>
          </tr>
          <tr>
            <td><code>__cf_bm</code>, <code>_cfuvid</code></td>
            <td>Cloudflare</td>
            <td>Seguridad: distinguir visitantes reales de bots y proteger el Sitio de ataques.</td>
            <td>Hasta 30 minutos / sesión</td>
            <td>Necesaria</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Contenido de terceros</h2>
      <p>
        Algunas partes del Sitio se cargan desde otros servicios. Solo se muestran si elegís <strong>&quot;Aceptar todo&quot;</strong>;
        con &quot;Solo necesarias&quot; ves un aviso en su lugar. Esos servicios pueden usar sus propias cookies según sus
        políticas:
      </p>
      <table>
        <thead>
          <tr>
            <th>Contenido</th>
            <th>Proveedor</th>
            <th>Qué puede registrar</th>
            <th>Política</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vista previa de Minuto Fútbol (marco embebido)</td>
            <td>Minuto Fútbol / JJSoluciones</td>
            <td>Visita anónima al sitio de Minuto Fútbol (id aleatorio, página vista). Sin datos personales.</td>
            <td>
              <a href="https://minutofutbol.jsoluciones.com.ar" target="_blank" rel="noopener noreferrer">
                minutofutbol.jsoluciones.com.ar
              </a>
            </td>
          </tr>
          <tr>
            <td>Escena 3D del inicio</td>
            <td>Spline (spline.design)</td>
            <td>Descarga del archivo de la escena desde sus servidores; puede registrar la dirección IP en sus logs.</td>
            <td>
              <a href="https://spline.design/privacy" target="_blank" rel="noopener noreferrer">
                spline.design/privacy
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Los enlaces a WhatsApp e Instagram te llevan a esos servicios; recién ahí aplican sus cookies. Este Sitio no carga
        scripts de Meta.
      </p>

      <h2>4. Lo que NO usamos</h2>
      <ul>
        <li>Cookies de analítica (Google Analytics u otras).</li>
        <li>Cookies de publicidad o remarketing.</li>
        <li>Píxeles de redes sociales.</li>
        <li>Cookies que identifiquen tu persona.</li>
      </ul>

      <h2>5. Cómo cambiar tu elección</h2>
      <p>Podés cambiar tu decisión cuando quieras:</p>
      <p>
        <BotonConfigurarCookies />
      </p>
      <p>
        También podés borrar el almacenamiento del Sitio desde la configuración de tu navegador (Chrome: Configuración →
        Privacidad y seguridad → Datos de sitios; Safari: Preferencias → Privacidad → Administrar datos de sitios web). Si lo
        hacés, el aviso vuelve a aparecer en tu próxima visita.
      </p>

      <h2>6. Cambios</h2>
      <p>
        Si agregamos cookies nuevas o cambiamos su uso, actualizamos esta página y te volvemos a mostrar el aviso para que
        decidas de nuevo.
      </p>
    </PaginaLegal>
  );
}
