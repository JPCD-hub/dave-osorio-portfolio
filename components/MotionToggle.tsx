"use client";

import { useEffect, useState } from "react";

export function MotionToggle() {
  const [paused, setPaused] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem("dave-motion-paused") === "true";
  });

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "active";
  }, [paused]);

  function toggleMotion() {
    const next = !paused;
    setPaused(next);
    window.sessionStorage.setItem("dave-motion-paused", String(next));
    document.documentElement.dataset.motion = next ? "paused" : "active";
  }

  return <button className="motion-toggle" type="button" aria-pressed={paused} onClick={toggleMotion}>{paused ? "Reanudar movimiento" : "Pausar movimiento"}</button>;
}
