import React from "react";

export default function HeaderPubli() {
  return (
    <div className="container">
      <header className="container-fluid bg-white d-flex justify-content-center w-100 p-3 header-publi">
        <p className="text-dark  mb-0 p-2 fs-6 p-oferta">
          <span>6 MESES SIN INTERESES</span> En toda la tienda, consulta
          terminos y condiciones.
        </p>
        <button type="button" className="btn btn-dark header-button">
          VER MAS
        </button>
      </header>
    </div>
  );
}
