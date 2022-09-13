import React from "react";
import UseFetch from "./UseFetch";

const CardPokemon = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <div>
      {cargando ? (
        <h6>Cargando</h6>
      ) : (
        <div className="card border-secondary mb-3" style={{ width: "18rem" }}>
          <div className="card-body text-bg-dark p-3 card-style">
            <img
              src={data.sprites.front_default}
              class="card-img-top"
              alt="imagen-pokemon"
            />
          </div>

          <div className="card-header">
            <h5 className="card-title">{data.id} </h5>
          </div>

          <div className="card-footer text-bg-danger p-3">
            <p className="card-text">{data.forms[0].name}</p>
            <a href="#" class="btn btn-dark">
              Ver mas...
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPokemon;
