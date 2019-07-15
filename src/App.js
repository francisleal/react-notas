import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import routesConfig from "./routesConfig";
import HeaderNotas from './componentes/HeaderNotas';

class App extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Nome da companhia</a>
                    <input className="form-control form-control-dark w-100" placeholder="Search" aria-label="Search" type="text" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </nav>

                <div className="container-fluid">

                    <div className="row">

                        <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/anotacoes'>Anotacoes</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/links'>Links</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/senhas'>Senha</Link></li>
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <HeaderNotas titulo='App Anotações'></HeaderNotas>
                                {
                                    routesConfig.map((value, key) => {
                                        return <Route
                                            key={key}
                                            path={value.path}
                                            component={value.component}
                                            exact={value.exact}
                                        ></Route>
                                    })
                                }
                        </main>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App