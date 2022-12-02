import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

const Login = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //handle inputs
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({ ...user, [name]: value })
    }

    // handle login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if (res.status === 400 || !res) {
                window.alert('Credenciais inválidas')
            } else {
                window.alert('Login bem-sucedido')
                window.location.reload();
                history.push('/')
                //token gerado após login
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column
                    align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Bem vindo <br /> de volta</h1>
                        <p className="lead text-center">Insira suas Credenciais
                            para fazer Login</p>
                        <h5 className="mb-4">OU</h5>
                        <NavLink to="/register" className="btn btn-primary
                        rounded-pill pb-2 w-50">Registrar nova conta</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">ENTRAR</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Digite seu email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">Nunca compartilhe seu e-mail e senha com mais ninguém.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Digite sua senha"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Lembre de mim</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4
                            rounded-pill">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;