export type Release = {
  title: string;
  type: string;
  year?: string;
  artwork?: string;
  description: string;
  spotifyUrl?: string;
  soundcloudUrl?: string;
  audioUrl?: string;
  youtubeUrl?: string;
  credits?: string;
};

const assetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const artist = {
  name: "DAVE OSORIO",
  location: "Pereira, Colombia",
  format: "Banda",
  roles: "ARTISTA · PRODUCTOR · LIVE PERFORMANCE",
  tagline: "Musica creada entre atmosferas, ritmo y movimiento.",
  shortBio:
    "Dave Osorio es un artista y productor de electro pop latino de Pereira, con una propuesta que combina ritmos electronicos, melodias pegajosas y la esencia de la musica latina.",
  longBio:
    "Dave Osorio es un artista y productor de electro pop latino de Pereira, con una propuesta que combina ritmos electronicos, melodias pegajosas y la esencia de la musica latina. Inicio su carrera profesional en el ano 2000 con la agrupacion La Deuda y posteriormente grabo parte de su primer EP en los estudios Arbol Naranja, vinculados a Superlitio. Ha participado en importantes eventos culturales y regionales, destacandose por su experiencia, profesionalismo y energia en vivo.",
  social: {
    instagram: "https://www.instagram.com/daveosoriomusic/",
  },
  platforms: {
    spotify: "https://open.spotify.com/artist/1J0c9DJjljmPtrDh2ADp3f",
    soundcloud: "https://soundcloud.com/daveosorio",
  },
  contact: {
    email: "",
    whatsapp: "3108260010",
    whatsappUrl: "https://wa.me/573108260010",
  },
  media: {
    logo: "/images/brand/DAVE 3.jpeg",
    headerLogo: "/images/brand/DAVE 1.jpeg",
    hero: "",
    profile: "",
  },
  credits: "Diseno y desarrollo por Creator Forge.",
};

export const releases: Release[] = [
  {
    title: "PENSANDO EN TU PIEL",
    type: "Informacion pendiente de confirmar",
    description: "Audio local proporcionado por el artista.",
    audioUrl: `${assetPath}/audio/PENSANDO EN TU PIEL.mp3`,
  },
  {
    title: "MUY BIEN",
    type: "Informacion pendiente de confirmar",
    description: "Audio local proporcionado por el artista.",
    audioUrl: `${assetPath}/audio/Muy Bien.mp3`,
  },
  { title: "AMOR", type: "Single", description: "Informacion pendiente de confirmacion.", audioUrl: `${assetPath}/audio/Amor.mp3` },
  { title: "Solo & Contigo", type: "Single", description: "Informacion pendiente de confirmacion.", audioUrl: `${assetPath}/audio/Solo y Contigo.mp3` },
];

export const videos = [
  { title: "Live session", type: "Contenido pendiente", url: "" },
  { title: "Visualizer", type: "Contenido pendiente", url: "" },
  { title: "Behind the scenes", type: "Contenido pendiente", url: "" },
  { title: "Performance", type: "Contenido pendiente", url: "" },
];

export const gallery = [
  { title: "Retrato vertical 01", src: "", alt: "Placeholder para fotografia vertical oficial de Dave Osorio.", format: "portrait" },
  { title: "Escena horizontal 01", src: "", alt: "Placeholder para fotografia horizontal oficial de Dave Osorio.", format: "landscape" },
  { title: "Retrato vertical 02", src: "", alt: "Placeholder para fotografia vertical oficial de Dave Osorio.", format: "portrait" },
  { title: "Detalle editorial", src: "", alt: "Placeholder para fotografia de detalle oficial de Dave Osorio.", format: "square" },
  { title: "Escena horizontal 02", src: "", alt: "Placeholder para fotografia horizontal oficial de Dave Osorio.", format: "landscape" },
];

export const events: Array<{
  date: string;
  city: string;
  venue: string;
  type: string;
  time?: string;
  ticketUrl?: string;
  status: "available" | "sold-out" | "finished";
}> = [];
