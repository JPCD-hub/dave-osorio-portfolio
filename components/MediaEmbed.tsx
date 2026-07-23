"use client";

import { useEffect, useRef, useState } from "react";

type MediaEmbedProps = { platform: "Spotify" | "SoundCloud"; url: string };

export function MediaEmbed({ platform, url }: MediaEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setNear(true); }, { rootMargin: "300px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="embed-card">
    <p className="embed-overline">Escucha en {platform}</p>
    <h3>Perfil oficial</h3>
    {loaded ? (
      <iframe title={`Reproductor de ${platform} de Dave Osorio`} src={platform === "Spotify" ? "https://open.spotify.com/embed/artist/1J0c9DJjljmPtrDh2ADp3f?utm_source=generator" : "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1469977&color=%23bc9a75&auto_play=false"} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
    ) : (
      <div className="embed-placeholder">
        <p>{near ? "El reproductor esta listo cuando quieras cargarlo." : "Reproductor de carga diferida."}</p>
        <button className="text-button" type="button" onClick={() => setLoaded(true)}>Cargar reproductor <span aria-hidden="true">↗</span></button>
      </div>
    )}
    <a className="inline-link" href={url} target="_blank" rel="noreferrer">Abrir {platform} <span aria-hidden="true">↗</span></a>
  </div>;
}
