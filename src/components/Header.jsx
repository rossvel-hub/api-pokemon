import React from "react";

export default function Header () {
    return (
        <div className="container">
       
        <header className="container-fluid bg-warning d-flex justify-content-center w-100 p-3 container-header">    
                       
            <img src="poke-logoo.png" className="d-block  poke-logoo-header" alt="pk" />  

            <form className="d-flex form-header" role="search">
            <input className="form-control me-2 input-header" type="search" placeholder="Introduce el nombre del pokemon" aria-label="Search" />
            <div className="alinear-lupa">
            <button className="btn btn-outline-sucess" type="submit"><img src="lupa.png" className="lupa-header">
            </img></button>
            </div>
            </form>

            <div className="icons-header">
            <a title="..." href="#">
            <img src="carrito.png" className="icon-header" alt="" />
            </a>
            <p className="p-header">(0)</p>
            <a title="..." href="#">
            <img src="man-user.png" className="icon-header" alt="" />
            </a>
            <p className="p-header">Mi cuenta</p>
            <a title="..." href="#">
            <img src="facebook.png" className="icon-header" alt="" />
            </a>
            <a title="..." href="#">
            <img src="youtube.png" className="icon-header" alt="" />
            </a>
            <a title="..." href="#">
            <img src="twitter.png" className="icon-header" alt="" />
            </a>
            <a title="..." href="#">
            <img src="instagram.png" className="icon-header" alt="" />
            </a>
            </div>
            
        </header>
        </div>
    );

}

