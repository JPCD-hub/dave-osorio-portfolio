"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { artist, releases } from "@/data/artist";

function getEmbed(release: (typeof releases)[number]) {
  if (release.spotifyUrl) return `https://open.spotify.com/embed/${release.spotifyUrl.replace(/^.*open\.spotify\.com\//, "")}`;
  if (release.soundcloudUrl) return `https://w.soundcloud.com/player/?url=${encodeURIComponent(release.soundcloudUrl)}&color=%23ff35c8&auto_play=false`;
  return "";
}

export function MusicPlayer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);
  const selected = releases[selectedIndex];
  const embedUrl = getEmbed(selected);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
  };

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function selectRelease(index: number) {
    audioRef.current?.pause();
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setSelectedIndex(index);
  }

  function updateVolume(next: number) {
    setVolume(next);
    if (audioRef.current) audioRef.current.volume = next;
  }

  return <section className="simple-player" aria-labelledby="player-title">
    <div className="player-intro"><p className="eyebrow">REPRODUCTOR</p><h3 id="player-title">ESCUCHA A DAVE</h3></div>
    <div className="itunes-layout">
      <div className="track-library"><p>LANZAMIENTOS</p><div className="track-selector" role="group" aria-label="Seleccionar lanzamiento">
        {releases.map((release, index) => <button key={release.title} type="button" aria-pressed={selectedIndex === index} onClick={() => selectRelease(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{release.title}</strong>{release.audioUrl && <i aria-label="Audio disponible">Audio</i>}</button>)}
      </div></div>
      <div className="now-playing">
        <div className={`vinyl ${isPlaying ? "is-spinning" : ""}`} aria-hidden="true"><Image className="vinyl-logo" src={artist.media.headerLogo} alt="" fill sizes="260px" /><span /><i /></div>
        <div className="now-playing-copy"><p>{selected.audioUrl ? "AUDIO LOCAL" : "AUDIO PENDIENTE"}</p><h4>{selected.title}</h4></div>
        {selected.audioUrl ? <>
          <div className="player-timeline"><output>{formatTime(currentTime)}</output><input type="range" min="0" max={duration || 0} value={Math.min(currentTime, duration || 0)} step="0.1" aria-label="Posicion de reproduccion" onChange={(event) => { const next = Number(event.target.value); if (audioRef.current) audioRef.current.currentTime = next; setCurrentTime(next); }} /><output>{formatTime(duration)}</output></div>
          <div className="player-actions"><button className="play-button" type="button" onClick={togglePlayback} aria-label={isPlaying ? `Pausar ${selected.title}` : `Reproducir ${selected.title}`}>{isPlaying ? "Pausa" : "Play"}</button><label className="volume-control">Volumen<input type="range" min="0" max="1" value={volume} step="0.05" aria-label="Volumen" onChange={(event) => updateVolume(Number(event.target.value))} /></label></div>
          <audio ref={audioRef} className="local-audio" key={selected.audioUrl} preload="metadata" onLoadedMetadata={(event) => { event.currentTarget.volume = volume; setDuration(event.currentTarget.duration); }} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onEnded={() => { setIsPlaying(false); setCurrentTime(0); }}><source src={selected.audioUrl} type="audio/mpeg" />Tu navegador no admite la reproduccion de audio.</audio>
        </> : embedUrl ? <iframe title={`Reproductor de ${selected.title} de Dave Osorio`} src={embedUrl} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" /> : <p className="player-unavailable">Agrega el audio local o enlace oficial para habilitar este tema.</p>}
      </div>
    </div>
  </section>;
}
