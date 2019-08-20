import React, { Component } from 'react';
import { loginFirebase, criarNovaContaFirebase } from '../config/Fire';
import '../assets/floating-labels.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            criarConta: 'Criar nova conta'
        }

        this.logar = this.logar.bind(this);
        this.criarNovaConta = this.criarNovaConta.bind(this);
        this.autenticacao = this.autenticacao.bind(this);
    }

    logar(e) {
        e.preventDefault();
        console.log('remember -> ' + this.refs.remember.value);
        loginFirebase(this.refs.email.value, this.refs.senha.value);

    }

    criarNovaConta(e) {
        e.preventDefault();        
        criarNovaContaFirebase(this.refs.email.value, this.refs.senha.value);
    }

    autenticacao() {
        this.setState({ visible: !this.state.visible });

        this.state.visible ? this.setState({ criarConta: 'Criar nova conta' }) : this.setState({ criarConta: 'Logar' });
    }

    render() {
        return (
            <div className="login-container">
                <form className="form-signin" >
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Login Notas</h1>
                    </div>

                    <div className="form-label-group">
                        <input id="inputEmail" ref="email" className="form-control" placeholder="Email address" required="" type="email" />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input id="inputPassword" ref="senha" className="form-control" placeholder="Password" required="" type="password" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input ref="remember" value="remember" type="checkbox" /> Lembrar senha
                        </label>
                        <span className="criar-nova-conta" onClick={this.autenticacao}>{this.state.criarConta}</span>
                    </div>
                    {
                        !this.state.visible &&
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.logar} type="submit">Logar</button>
                    }

                    {
                        this.state.visible &&
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.criarNovaConta} type="submit">Criar nova  conta</button>
                    }
                </form>
            </div>
        )
    }
}

export default Login;