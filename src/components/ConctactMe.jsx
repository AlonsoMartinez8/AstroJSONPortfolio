import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ConctactMe() {
  const form = useRef();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [warn, setWarn] = useState({ warn: false, msg: "" });
  const [sended, setSended] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !message || !mail || !phone) {
      setWarn({ warn: true, msg: "Faltan datos por rellenar" });
    } else {
      emailjs
        .sendForm("service_q4qafp6", "template_n866cvp", form.current, {
          publicKey: "xvtNQxliFQ9Mcftz_",
        })
        .then(
          () => {
            console.log("Mail sended!");
            setSended(true)
            setWarn({ warn: false, msg: "" })
          },
          (error) => {
            console.log("FAILED...", error.text);
            setWarn({warn: true, msg: "Algo falló. Vuelve a intentarlo"})
            setSended(false)
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="p-4 bg-slate-200 rounded-xl flex flex-col gap-4 shadow-lg col-span-2"
    >
      <h3 className="text-2xl text-slate-900 font-semibold text-center">
        Envía ya un mensaje!
      </h3>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="from_name" className="w-full">
          Nombre
        </label>
        <input
          type="text"
          name="from_name"
          className="w-full px-2 py-1"
          placeholder="Alonso Martínez"
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="from_mail" className="w-full">
          Correo
        </label>
        <input
          type="email"
          name="from_mail"
          className="w-full px-2 py-1"
          placeholder="alonsomartinez0804@gmail.com"
          onChange={(e) => setMail(e.target.value)}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="message" className="w-full">
          Mensaje
        </label>
        <textarea
          name="message"
          className="w-full px-2 py-1"
          placeholder="Hola, contacto contigo para..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="from_phone" className="w-full">
          Teléfono
        </label>
        <input
          type="tel"
          name="from_phone"
          className="w-full px-2 py-1"
          placeholder="624515126"
          onChange={(e) => setPhone(e.target.value)}
        />
      </fieldset>
      <input
        type="submit"
        value="Send"
        className="w-full bg-slate-900 text-white hover:bg-slate-700 px-2 py-1 rounded-full cursor-pointer"
      />
      <fieldset>
        {warn.warn===true&&(<p className="text-xs text-red-500">{warn.msg}</p>)}
        {sended===true&&(<p className="text-xs text-green-700">Mensaje enviado! Muchas gracias!</p>)}
      </fieldset>
    </form>
  );
}
