import Image from "next/image";
import { artist } from "@/data/artist";

export function Hero() {
  return (
    <section id="inicio" className="hero simple-hero" aria-labelledby="hero-title">
      <div className="hero-profile-layout">
        <div className="hero-mark">
          <h1 id="hero-title">
            {artist.media.logo ? <><span className="sr-only">DAVE</span><span className="hero-logo-disc"><Image className="hero-logo" src={artist.media.logo} alt="" fill priority sizes="180px" /></span></> : "DAVE"}
          </h1>
          <dl className="hero-details"><div><dt>Base</dt><dd>{artist.location}</dd></div><div><dt>Formato</dt><dd>{artist.format}</dd></div></dl>
        </div>
        <div className="hero-profile-copy"><p className="eyebrow">ARTISTA · PRODUCTOR · ELECTRO POP LATINO</p><p>{artist.longBio}</p></div>
      </div>
    </section>
  );
}
