import React from "react";

const divStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.05)",
};

export default function Footer() {
  return (
    <footer
      className="w-100 d-flex  align-items-center justify-content-center flex-wrap"
      id="footer"
    >
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 div-footer-menu">
        <h6 className="text-uppercase fw-bold mb-4 title-footer">MENU</h6>
        <p>
          <a href="#!" className="text-reset ">
            TIENDAS
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            CONFIGURAR PC
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            ¿A QUE JUEGAS?
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            PRIDE
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            NOSOTROS
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            BLOG
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            CONTACTO
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            AYUDA
          </a>
        </p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 div-footer-info">
        <h6 className="text-uppercase fw-bold mb-4  title-footer">INFORMACION</h6>
        <p>
          <a href="#!" className="text-reset">
            Terminos y condiciones
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Aviso de privacidad
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Preguntas frecuentes
          </a>
        </p>
      </div>

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 div-footer-logo">
        <h6 className="text-uppercase fw-bold mb-4">
          <img
            src="poke-logoo.png"
            className="d-block poke-logo-footer"
            alt="pk"
          />
        </h6>
        <p className="p-pokemon">No hay nada más fuerte que una amistad forjada en batalla.</p>
        <img src="facebook.png" className="facebook-footer" alt="" />
        <img src="youtube.png" className="youtube-footer" alt="" />
        <img src="twitter.png" className="twitter-footer" alt="" />
        <img src="instagram.png" className="instagram-footer" alt="" />
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 div-footer-metodos">
        <h6 className="text-uppercase fw-bold mb-4 title-footer">METODOS DE PAGO</h6>
        <img src="paypal.png" className="paypal-footer" alt="" />
        <img src="visa.png" className="visa-footer" alt="" />
        <img src="mc.png" className="mc-footer" alt="" />
      </div>

      <div className="text-center p-4" style={divStyle}>
        © 2021 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://github.com/rossvel-hub?tab=repositories"
        >
          {" "}
          [AV] Alma Velazquez{" "}
        </a>
      </div>
    </footer>
  );
}
