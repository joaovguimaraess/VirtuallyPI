import React from 'react';
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/about1.jpg" alt="About"
                            className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">Sobre nós</h3>
                            <h1 className="display-6 mb-2">Quem nós somos?</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
                            Somos uma startup nova com uma plataforma completa de conteúdos
                             e soluções para amenizar e melhorar sua saúde mental.
                            </p>
                            <NavLink className="btn btn-primary rounded-pill
                            px-4 py-2"to="/login">Começar 
                            </NavLink>
                            <NavLink className="btn btn-outline-primary rounded-pill
                            px-4 py-2 ms-2" to="/contact">Contate-nos
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;