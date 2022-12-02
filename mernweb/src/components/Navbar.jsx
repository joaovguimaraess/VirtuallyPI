import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Início</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Serviços</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contato</NavLink>
              </li>
            </ul>      
              <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">VIRTU
                <span className="text-primary">Λ</span>LLY
              </NavLink>

            {props.auth ?
              <>
                <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                  <i className="fa fa-sign-in me-2"></i>Entrar</NavLink>
                <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                  <i className="fa fa-user-plus me-2"></i>Criar conta</NavLink>
              </>
              :
              <>
                <NavLink to="/discover" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                  <i className="fa fa-user-plus me-2"></i>Discover</NavLink>
                <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                  <i className="fa fa-sign-out me-2"></i>Sair</NavLink>
              </>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;