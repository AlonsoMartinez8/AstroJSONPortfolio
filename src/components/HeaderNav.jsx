import React, { useState } from "react";

export default function HeaderNav({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="text-2xl ri-menu-3-line"></i>
      </button>
      <section
        className={`${
          !menuOpen && "hidden lg:flex"
        } absolute lg:relative top-0 left-0 w-full lg:w-auto min-h-screen lg:min-h-0 z-50 px-4 py-2 bg-gradient-to-b from-slate-200 from-30% to-slate-900/50 lg:bg-none`}
      >
        <header className="flex items-center justify-between gap-4 mb-4">
          <aside className="lg:hidden flex items-center justify-start gap-4">
            <a href="/">
              <img
                src={logo.src}
                alt="Imagen del logo de este sitio web"
                className="rounded-full w-[40px] hover:animate-pulse"
              />
            </a>
            <h2>Menu</h2>
          </aside>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="text-2xl ri-close-large-line"></i>
          </button>
        </header>
        <ul className="lg:flex lg:items-center lg:justify-end lg:gap-4">
          <li className="w-full px-2 py-1 hover:bg-slate-400/20 hover:text-blue-700 transition-colors text-nowrap">
            <a href="/" title="Ir a inicio" onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-home-4-fill"></i> Inicio
            </a>
          </li>
          <li className="w-full px-2 py-1 hover:bg-slate-400/20 hover:text-blue-700 transition-colors text-nowrap">
            <a href="/#contacto" title="Ir a contacto" onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-phone-fill"></i> Contacto
            </a>
          </li>
          <li className="w-full px-2 py-1 hover:bg-slate-400/20 hover:text-blue-700 transition-colors text-nowrap">
            <a href="/#formacion" title="Ir a formacion" onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-book-2-fill"></i> Formación
            </a>
          </li>
          <li className="w-full px-2 py-1 hover:bg-slate-400/20 hover:text-blue-700 transition-colors text-nowrap">
            <a href="/#experiencia" title="Ir a experiencia" onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-hammer-fill"></i> Experiencia
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
