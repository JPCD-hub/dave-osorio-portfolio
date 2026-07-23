import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MusicPlayer } from "@/components/MusicPlayer";
import { TechnicalRider } from "@/components/TechnicalRider";
import { artist, events } from "@/data/artist";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    sameAs: [artist.platforms.spotify, artist.platforms.soundcloud, artist.social.instagram],
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Header />
    <Hero />
    <section id="musica" className="simple-section music-simple-section" aria-labelledby="music-title">
      <div className="simple-section-heading"><div><p className="eyebrow">MUSICA</p><h2 id="music-title">LANZAMIENTOS<br /><em>SELECCIONADOS.</em></h2></div><p>Seleccion inicial de musica publicamente visible. La discografia completa esta disponible en Spotify.</p></div>
      <MusicPlayer />
      <div className="music-platform-actions"><a className="button button-primary" href={artist.platforms.spotify} target="_blank" rel="noreferrer">Escuchar en Spotify <span aria-hidden="true">↗</span></a><a className="button button-secondary" href={artist.platforms.soundcloud} target="_blank" rel="noreferrer">Explorar SoundCloud</a></div>
    </section>
    <section className="simple-section dates-section" aria-labelledby="dates-title">
      <p className="eyebrow">PRESENTACIONES</p>
      <div className="simple-two-column"><h2 id="dates-title">PROXIMAS FECHAS<br /><em>POR ANUNCIAR.</em></h2><p className="lead-copy">{events.length ? "Consulta las proximas fechas en las plataformas oficiales." : "Para fechas privadas, festivales y colaboraciones, ponte en contacto a traves de Instagram."}</p></div>
    </section>
    <section id="rider" className="simple-section rider-section" aria-labelledby="rider-title">
      <TechnicalRider />
    </section>
    <section id="redes" className="simple-section social-section" aria-labelledby="social-title">
      <p className="eyebrow">REDES</p>
      <div className="simple-two-column"><h2 id="social-title">SIGUE EL<br /><em>MOVIMIENTO.</em></h2><div className="social-links"><a href={artist.platforms.spotify} target="_blank" rel="noreferrer">Spotify <span aria-hidden="true">↗</span></a><a href={artist.platforms.soundcloud} target="_blank" rel="noreferrer">SoundCloud <span aria-hidden="true">↗</span></a><a href={artist.social.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a></div></div>
    </section>
    <section id="contacto" className="simple-section contact-simple-section" aria-labelledby="contact-title">
      <p className="eyebrow">CONTACTO</p>
      <div className="simple-two-column"><h2 id="contact-title">HABLEMOS<br /><em>DE MUSICA.</em></h2><div><p className="lead-copy">Para contrataciones, colaboraciones, prensa o produccion musical.</p><div className="contact-actions"><a className="button button-primary" href={artist.social.instagram} target="_blank" rel="noreferrer">Escribir por Instagram <span aria-hidden="true">↗</span></a><a className="button button-secondary" href={artist.contact.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp 310 826 0010 <span aria-hidden="true">↗</span></a></div></div></div>
    </section>
    <footer><a className="wordmark" href="#inicio" aria-label="DAVE OSORIO, inicio">{artist.media.logo ? <Image className="brand-logo" src={artist.media.logo} alt="DAVE OSORIO" width={240} height={96} /> : <>DAVE<span>O.</span></>}</a><div className="footer-links"><a href={artist.platforms.spotify} target="_blank" rel="noreferrer">Spotify</a><a href={artist.platforms.soundcloud} target="_blank" rel="noreferrer">SoundCloud</a><a href={artist.social.instagram} target="_blank" rel="noreferrer">Instagram</a></div><small>{artist.credits}</small></footer>
  </main>;
}
