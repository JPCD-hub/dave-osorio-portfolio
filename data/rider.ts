export type RiderSection = {
  id: string;
  title: string;
  content: string;
  wide?: boolean;
};

// Initial technical rider for a live band with piano or keyboard. Confirm with the artist before publication.
export const riderSections: RiderSection[] = [
  {
    id: "backline",
    title: "Backline",
    content: "Bateria acustica completa: bombo, redoblante, 2 toms, floor tom, hi-hat, crash, ride, fierros, pedal y banqueta.\nAmplificador de bajo o DI activa balanceada; preferible combo o cabina de bajo en escenario.\nAmplificador de guitarra limpio y microfoneable, con toma electrica cercana.\n3 microfonos vocales tipo SM58 o equivalente, con boom stands.\nPiano o teclado profesional de 88 teclas con pedal de sustain, base doble reforzada y banqueta. Salida estereo L/R disponible desde el instrumento o interfaz.",
  },
  {
    id: "foh",
    title: "PA / FOH",
    content: "PA profesional acorde al aforo, con cobertura uniforme y subgraves funcionales.\nConsola de minimo 18 canales, EQ parametrico, compresores, gates y 5 envios auxiliares.\nMicrofonia completa para bateria, bajo, guitarra y 3 voces.\nDos DI activas balanceadas o entradas de linea para piano/teclado estereo L/R.\nPrueba de sonido recomendada: 60 minutos. Line check minimo: 25 minutos.",
  },
  {
    id: "monitoring",
    title: "Monitoreo",
    content: "Ideal: 5 mezclas independientes, una para guitarra/voz principal, bajo, bateria, piano/teclado y voces de apoyo.\nMinimo aceptable: 4 wedges, priorizando voz principal/guitarra, bajo, bateria y piano/teclado.\nLa voz principal requiere referencia clara de voz, guitarra, bajo y bombo.\nPiano/teclado requiere referencia clara de su instrumento, voz principal, bajo y bateria.\nBateria requiere bajo, voz principal y click solo si se acuerda previamente.",
  },
  {
    id: "stage",
    title: "Escenario y energia",
    content: "Upstage: bateria al centro.\nDownstage centro: voz principal y guitarra.\nStage left: bajo y voz de apoyo.\nStage right: piano o teclado, con voz de apoyo cuando aplique.\nEscenario estable, limpio, techado si es al aire libre y con acceso seguro para carga.\nRequerimos 5 tomas electricas reguladas: guitarra, bajo, pedalboards, bateria si aplica y piano/teclado.",
  },
  {
    id: "inputs",
    title: "Input list inicial",
    wide: true,
    content: "Canal 1 - Kick - Beta 52 / D112 - Gate / comp.\nCanal 2 - Snare top - SM57 - Comp ligera.\nCanal 3 - Hi-hat - Condensador - Opcional segun venue.\nCanal 4 - Tom - Clip / e604 - Gate.\nCanal 5 - Floor tom - Clip / e604 - Gate.\nCanal 6 - Overhead L - Condensador - Phantom.\nCanal 7 - Overhead R - Condensador - Phantom.\nCanal 8 - Bajo - DI activa - Pre EQ.\nCanal 9 - Amplificador de guitarra - SM57 / e906 - Mic a cabina.\nCanal 10 - Voz principal - SM58 / Beta 58 - Comp / reverb.\nCanal 11 - Coro 1 - SM58 - Boom stand.\nCanal 12 - Coro 2 - SM58 - Boom stand.\nCanal 13 - Piano / teclado L - DI activa balanceada - Linea izquierda.\nCanal 14 - Piano / teclado R - DI activa balanceada - Linea derecha.",
  },
  {
    id: "schedule",
    title: "Produccion",
    wide: true,
    content: "Compartir plano de escenario, horario de montaje y contacto tecnico antes del evento.\nAgua para 5 musicos durante prueba y show.\nCamerino o zona segura para instrumentos, pedalboards, piano/teclado y pertenencias.\nIluminacion frontal calida y contraluces de color para atmosfera nocturna.\nEste rider es una base editable y requiere aprobacion final de DAVE OSORIO.",
  },
];

export const inputList = [
  ["01", "Kick", "Kit micro", "Mini boom", "Comp / gate", "Mix 1-2"],
  ["02", "Snare", "Kit micro", "Claw", "Comp / gate", "Mix 1-2"],
  ["03", "Hi-hat", "Kit micro", "Mini boom", "-", "Mix 1-2"],
  ["04", "Tom 1", "Kit micro", "Claw", "Gate", "Mix 1-2"],
  ["05", "Tom 2", "Kit micro", "Claw", "Gate", "Mix 1-2"],
  ["06", "Tom 3", "Kit micro", "Claw", "Gate", "Mix 1-2"],
  ["07", "OH L", "Kit micro", "Boom", "-", "Mix 1-2"],
  ["08", "OH R", "Kit micro", "Boom", "-", "Mix 1-2"],
  ["09", "Bajo", "Caja directa", "-", "Compresor", "-"],
  ["10", "Guitarra ritmica", "Shure SM57", "Mini boom", "-", "-"],
  ["11", "Piano", "Caja directa", "-", "Compresor", "-"],
  ["12", "Synth", "Caja directa", "-", "Compresor", "-"],
  ["13", "Coro bajo", "SM58 / Beta 58", "Boom", "Compresor", "Mix 3-4"],
  ["14", "Coro guitarra", "SM58 / Beta 58", "Boom", "Compresor", "Mix 3-4"],
  ["15", "Voz principal", "Shure Beta 58A", "Boom", "Compresor", "Mix 3-4"],
];

export const monitorMixes = [
  ["01", "Voz principal", "1 monitor de piso", "EQ grafico 1/3 octava"],
  ["02", "Synth", "1 monitor de piso", "EQ grafico 1/3 octava"],
  ["03", "Guitarra ritmica", "1 monitor de piso", "EQ grafico 1/3 octava"],
  ["04", "Bajo", "1 monitor de piso", "EQ grafico 1/3 octava"],
  ["05", "Bateria", "1 monitor de piso", "EQ grafico 1/3 octava"],
  ["06", "Piano", "1 monitor de piso", "EQ grafico 1/3 octava"],
];

export const stageNotes = [
  "Dimension minima sugerida: 7 m de ancho por 4 m de fondo.",
  "Tarima posterior recomendada para bateria.",
  "Dos tomas electricas reguladas, una por cada lateral de guitarra.",
  "Separacion recomendada de 5 m entre los extremos de guitarra.",
  "Bateria sobre alfombra o superficie antideslizante.",
];
