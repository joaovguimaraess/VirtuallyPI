import React from 'react';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4
                            text-center">Um corpo saudável compõe uma mente saudável.</h1>
                            <p className="lead text-center fs-4 mb-5
                            ">
                                Combinamos o melhor da terapia digital com o cuidado
                                humano para solucionar os problemas de saúde mental.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-primary me-4
                                rounded-pill px-4 py-2">Suporte</NavLink>
                                <NavLink to="/service" className="btn btn-outline-primary
                                rounded-pill px-4 py-2">Serviços</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;