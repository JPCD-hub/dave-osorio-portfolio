"use client";

import { useState } from "react";
import { videos } from "@/data/artist";

export function VisualExperience() {
  const [active, setActive] = useState<string | null>(null);
  return <section id="visuales" className="section visuals-section" aria-labelledby="visuals-title">
    <div className="section-heading"><p className="eyebrow"><span />04 / VISUALES</p><h2 id="visuals-title">LA MUSICA<br /><em>TAMBIEN</em> SE MIRA.</h2></div>
    <div className="visual-feature placeholder-video"><div><p>PIEZA PRINCIPAL</p><h3>Contenido audiovisual<br />pendiente</h3><small>Video, visualizer o sesion oficial</small></div></div>
    <div className="video-grid">
      {videos.map((video, index) => <article key={video.title} className="video-card">
        <div className={`video-thumb video-tone-${index + 1}`}><span>{video.type}</span><button type="button" aria-label={`Reproducir ${video.title}`} onClick={() => setActive(video.title)}>Play</button></div>
        <h3>{video.title}</h3>
      </article>)}
    </div>
    {active && <div className="video-dialog" role="dialog" aria-modal="true" aria-label={active}>
      <div><button className="dialog-close" type="button" onClick={() => setActive(null)} aria-label="Cerrar video">Cerrar</button><p>ENLACE PENDIENTE</p><h3>{active}</h3><span>Este contenido se cargara aqui cuando se proporcione una URL oficial.</span></div>
    </div>}
  </section>;
}
