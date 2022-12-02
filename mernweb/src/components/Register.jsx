import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();

    const [user, setUser] = useState ({
        username : "",
        email : "",
        password : ""
    });

    //handle inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    //handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username, email, password} = user;
        try {
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    username, email, password
                })
            })

            if(res.status === 400 || !res) {
                window.alert("Dados já usados")
            } else {
                window.alert("Registrado com sucesso");
                history.push('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column
                    align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Olá amigo</h1>
                        <p className="lead text-center">Digite seus dados para se registrar</p>
                        <h5 className="mb-4">OU</h5>
                        <NavLink to="/login" className="btn btn-primary
                        rounded-pill pb-2 w-50">Entrar na conta</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">REGISTRAR</h1>
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="name" class="form-label">
                                Seu nome
                                </label>
                                <input 
                                type="text" 
                                class="form-control"
                                placeholder="Nome"
                                id="name" 
                                name="username" 
                                value={user.username} 
                                onChange={handleInput} /> 
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                Seu Email
                                </label>
                                <input 
                                type="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Email"
                                aria-describedby="emailHelp" 
                                name="email" 
                                value={user.email} 
                                onChange={handleInput} />
                                <div id="emailHelp" class="form-text">Nunca compartilhe seu e-mail e senha com mais ninguém.</div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">
                                Sua nova senha
                                </label>
                                <input 
                                type="password" 
                                class="form-control" 
                                id="exampleInputPassword1"
                                plahceholder="Senha" 
                                name="password" 
                                value={user.password} 
                                onChange={handleInput} />
                            </div>
                            <div class="mb-3 form-check">
                                <input 
                                type="checkbox" 
                                class="form-check-input" 
                                id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Eu concordo com termos e condições</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">
                            Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;