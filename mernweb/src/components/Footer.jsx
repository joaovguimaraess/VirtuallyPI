import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white bf-primary">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>VIRTUALLY</h4>
                            </div>

                            <div className="col-2">
                                <h5>Navegue</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Início</a></li>
                                    <li className="nav-item mb-2"><a href="/About" className="nav-link p-0">Sobre</a></li>
                                    <li className="nav-item mb-2"><a href="/service" className="nav-link p-0">Serviços</a></li>
                                    <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0">FAQs</a></li>
                                </ul>
                            </div>

                            <div className="col-4 offset-1">
                                <form>
                                    <h5>Inscreva-se</h5>
                                    <p>
                                        Inscreva-se na nossa plataforma para receber notificações.
                                    </p>
                                    <div className="d-flex w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email
                                            address</label>
                                        <input id="newsletter1" type="text" className="form-control"
                                            placeholder="Email address" />
                                        <button className="btn btn-primary rounded-pill px-4"
                                            type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p> 2022 company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a className="link-primary" href="https://www.instagram.com/virtuallycompany/" target="_blank" rel="noreferrer"><i
                                    className="fa fa-instagram fa-2x"></i></a></li>
                                <li className="ms-3"><a className="link-primary" href="https://twitter.com/" target="_blank" rel="noreferrer"><i
                                    className="fa fa-twitter fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
}

export default Footer;