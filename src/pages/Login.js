import React, { Component } from 'react';
import fire from '../config/Fire';
import '../assets/floating-labels.css';

class Login extends Component {

    constructor() {
        super();
        this.authenticate = this.authenticate.bind(this);
    }

    authenticate(e) {
        e.preventDefault();
        console.log('authenticate');
        console.log('email -> ' + this.refs.email.value);
        console.log('senha -> ' + this.refs.senha.value);
        console.log('remember -> ' + this.refs.remember.value);

        fire.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.senha.value).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="login-container">
                <form className="form-signin" onSubmit={this.authenticate}>
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
                        <span className="criar-nova-conta">Criar nova conta</span>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Logar</button>                    
                </form>
            </div>
        )
    }
}

export default Login;