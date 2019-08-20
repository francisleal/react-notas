import React, { Component } from 'react';
import { IconSpinner } from './assets/Icon';

import { fire } from './config/Fire'
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {

    constructor() {
        super();
        this.state = ({
            user: null,
            isLoaded: false,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoaded: true, user: user });
                // localStorage.setItem('user', user.uid);
            } else {
                this.setState({ isLoaded: true, user: null });
                // localStorage.removeItem('user');
            }
            console.log('user ', user);
        });
    }

    render() {

        const { isLoaded } = this.state;

        if (!isLoaded) {
            return <div><IconSpinner tamanho="16" /></div>;
        }

        return (
            <div>
                {this.state.user ? (<Home />) : (<Login />)}
            </div>
        )
    }
}

export default App