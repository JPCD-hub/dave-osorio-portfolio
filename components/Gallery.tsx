"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/artist";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const close = () => setSelected(null);
  const previous = () => setSelected((index) => index === null ? null : (index - 1 + gallery.length) % gallery.length);
  const next = () => setSelected((index) => index === null ? null : (index + 1) % gallery.length);

  useEffect(() => {
    if (selected === null) return;
    const selectedTrigger = trigger.current;
    const overflow = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", onKey); selectedTrigger?.focus(); };
  }, [selected]);

  return <section className="section gallery-section" aria-labelledby="gallery-title">
    <div className="gallery-header"><div><p className="eyebrow"><span />05 / GALERIA</p><h2 id="gallery-title">PRESENCIA<br />EN <em>ESCENA.</em></h2></div><p>Archivo visual en construccion. Las fotografias oficiales se mostraran aqui.</p></div>
    <div className="gallery-grid">
      {gallery.map((item, index) => <button key={item.title} ref={index === 0 ? trigger : undefined} className={`gallery-item ${item.format}`} type="button" aria-label={`Abrir ${item.title}`} onClick={() => setSelected(index)}>
        {item.src ? <Image src={item.src} alt={item.alt} fill sizes="(min-width: 720px) 25vw, 50vw" /> : <><span>ARCHIVO {String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><i aria-hidden="true" /></>}
      </button>)}
    </div>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galeria: ${gallery[selected].title}`}>
      <button className="lightbox-close" type="button" onClick={close}>Cerrar</button>
      <button className="lightbox-nav previous" type="button" onClick={previous} aria-label="Imagen anterior">Anterior</button>
      <figure
        className={`lightbox-image ${gallery[selected].format}`}
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 45) {
            if (distance > 0) previous();
            else next();
          }
          touchStart.current = null;
        }}
      >{gallery[selected].src ? <Image src={gallery[selected].src} alt={gallery[selected].alt} fill sizes="min(100vw - 30px, 740px)" /> : <span>FOTOGRAFIA OFICIAL<br />PENDIENTE</span>}<figcaption>{gallery[selected].title} · {selected + 1} / {gallery.length}</figcaption></figure>
      <button className="lightbox-nav next" type="button" onClick={next} aria-label="Imagen siguiente">Siguiente</button>
    </div>}
  </section>;
}
