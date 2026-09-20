import { TECNOLOGIAS } from "@/lib/contenido";

// Fondo animado de /app: grilla sutil, halos violetas y las tecnologías
// flotando despacio. Es decorativo (aria-hidden); todo CSS, sin video.
// Las posiciones salen de una secuencia fija para que sea igual en cada carga.
export default function FondoTecnologias() {
  const chips = TECNOLOGIAS.map((t, i) => {
    // pseudo-aleatorio determinista
    const a = (i * 137.508) % 100; // ángulo áureo → buena dispersión
    const b = (i * 61.803 + 17) % 100;
    return {
      t,
      left: `${a}%`,
      top: `${b}%`,
      dur: `${16 + (i % 7) * 2}s`,
      delay: `${-(i % 9) * 1.7}s`,
      dx: `${((i % 5) - 2) * 14}px`,
      dy: `${-18 - (i % 4) * 8}px`,
    };
  });

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grilla-fondo opacity-70" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-violeta/20 blur-[120px]" />
      <div className="absolute -bottom-40 right-0 w-[560px] h-[560px] rounded-full bg-azul/20 blur-[140px]" />
      {chips.map((c) => (
        <span
          key={c.t}
          className="chip-flotante"
          style={
            {
              left: c.left,
              top: c.top,
              "--dur": c.dur,
              "--delay": c.delay,
              "--dx": c.dx,
              "--dy": c.dy,
            } as React.CSSProperties
          }
        >
          {c.t}
        </span>
      ))}
      {/* Oscurece el centro para que el texto se lea */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.85)_70%,#000_100%)]" />
    </div>
  );
}
