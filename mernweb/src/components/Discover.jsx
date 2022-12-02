import React from 'react';
import { NavLink } from 'react-router-dom';
import Video from './Video';

const Discover = () => {
    return (
        <div>
            <section id="discover">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4
                            text-center">Faça o teste rápido e descubra como está se sentindo
                            e receba sugestões de conteúdos de vídeos logo abaixo
                            </h1>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/teste" className="btn btn-primary me-4
                                rounded-pill px-4 py-2"><i className="fa fa-play"></i> Começar</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Video/>
        </div>        
    );
}

export default Discover;