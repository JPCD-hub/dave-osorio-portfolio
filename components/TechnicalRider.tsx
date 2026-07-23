import { inputList, monitorMixes, stageNotes } from "@/data/rider";
import Image from "next/image";

export function TechnicalRider() {
  return <>
    <div className="rider-production-heading"><p className="eyebrow">PRODUCCION</p><h2 id="rider-title">RIDER<br /><em>TECNICO.</em></h2><p>Ficha tecnica para formato de banda con piano y synth. Confirmar los requerimientos con produccion antes de cada fecha.</p></div>
    <div className="production-specs">
      <div className="production-intro"><p className="eyebrow">SISTEMA DE 15 CANALES</p><p>Distribucion tecnica de referencia para la banda. Ajustar con produccion antes de cada fecha.</p></div>
      <div className="channel-grid" aria-label="Listado de canales">
        {inputList.map(([channel, source, mic, stand, insert, mix]) => <article key={channel}><b>{channel}</b><div><span>Fuente</span><strong>{source}</strong></div><div><span>Mic / DI</span><strong>{mic}</strong></div><div><span>Stand</span><strong>{stand}</strong></div><div><span>Insert / mix</span><strong>{insert}{mix !== "-" ? ` · ${mix}` : ""}</strong></div></article>)}
      </div>
      <div className="monitor-section"><div><p className="eyebrow">ASIGNACION EN MONITORES</p><h3>SEIS MEZCLAS EN ESCENA.</h3></div><div className="monitor-grid">{monitorMixes.map(([mix, name, monitor, insert]) => <article key={mix}><b>{mix}</b><strong>{name}</strong><span>{monitor}</span><small>{insert}</small></article>)}</div></div>
      <div className="stage-layout"><div className="stage-copy"><p className="eyebrow">STAGE PLOT</p><h3>FORMATO<br /><em>BANDA.</em></h3><ul>{stageNotes.map((note) => <li key={note}>{note}</li>)}</ul></div><figure className="stage-plot-image"><Image src="/images/stageplot/stage plot DAVE.png" alt="Stage plot de Dave: guitarra y voz principal al frente, guitarra ritmica y bajo a la izquierda, synth y piano a la derecha, bateria centrada abajo y monitores distribuidos." fill sizes="(min-width: 720px) 65vw, 100vw" /></figure></div>
    </div>
  </>;
}
