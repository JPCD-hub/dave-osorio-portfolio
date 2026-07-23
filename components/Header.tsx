"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { artist } from "@/data/artist";

const links = [
  ["Musica", "#musica"],
  ["Rider", "#rider"],
  ["Redes", "#redes"],
  ["Contacto", "#contacto"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="wordmark" href="#inicio" aria-label="DAVE OSORIO, inicio">
        {artist.media.headerLogo ? <Image className="brand-logo" src={artist.media.headerLogo} alt="DAVE OSORIO" width={240} height={96} priority /> : <>DAVE<span>O.</span></>}
      </a>
      <nav className="desktop-nav" aria-label="Navegacion principal">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="listen-button desktop-listen" href={artist.platforms.spotify} target="_blank" rel="noreferrer">Escuchar <span aria-hidden="true">↗</span></a>
      <button
        ref={triggerRef}
        className="menu-toggle"
        type="button"
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      <div id="mobile-navigation" className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navegacion movil">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}><span>0{index + 1}</span>{label}</a>
          ))}
          <a className="mobile-listen" href={artist.platforms.spotify} target="_blank" rel="noreferrer" onClick={closeMenu}>Escuchar ahora <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
