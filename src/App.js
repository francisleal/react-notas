import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import routesConfig from "./routesConfig";
import HeaderNotas from './componentes/HeaderNotas';

class App extends Component {

    render() {
        return (
            <div>
                <div>
                <HeaderNotas titulo='App Anotações'></HeaderNotas>
                <Link to='/'>Home</Link>
                <Link to='/anotacoes'>Anotacoes</Link>
                <Link to='/links'>Links</Link>
                <Link to='/senhas'>Senha</Link>
                </div>
                {
                    routesConfig.map((value, key)=>{
                        return <Route
                            key={key}
                            path={value.path}
                            component={value.component}
                            exact={value.exact}
                        ></Route>
                    })
                }
            </div>            
        )
    }
}

export default App