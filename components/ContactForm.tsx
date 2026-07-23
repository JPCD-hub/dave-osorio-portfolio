"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setMessage("Formulario preparado. Configura el servicio de envio al publicar el sitio.");
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid"><label>Nombre<input name="name" autoComplete="name" required /></label><label>Correo<input name="email" type="email" autoComplete="email" required /></label><label>Organizacion o proyecto<input name="organization" autoComplete="organization" /></label><label>Tipo de solicitud<select name="request" required defaultValue=""><option value="" disabled>Seleccionar</option><option>Presentacion</option><option>Festival o evento</option><option>Colaboracion</option><option>Prensa</option><option>Produccion musical</option></select></label><label>Ciudad<input name="city" autoComplete="address-level2" /></label><label>Fecha estimada<input name="date" type="date" /></label></div>
    <label>Mensaje<textarea name="message" rows={5} required /></label>
    <div className="form-submit"><button className="button button-primary" type="submit">Enviar solicitud <span aria-hidden="true">↗</span></button><p role="status" aria-live="polite">{message}</p></div>
  </form>;
}
