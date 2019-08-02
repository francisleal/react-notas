import React, { Component } from 'react';
import '../assets/floating-labels.css'

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <form className="form-signin">
                    <div className="text-center mb-4">                       
                        <h1 className="h3 mb-3 font-weight-normal">Login Notas</h1>
                    </div>

                    <div className="form-label-group">
                        <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email" />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input value="remember-me" type="checkbox" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;