import React, { Component } from 'react';
import { salvar, getLinks } from '../config/Fire';

class Base64 extends Component {

    constructor() {
        super();

        this.state = ({
            titulo: '',
            url: ''
        });

        this.salvarLink = this.salvarLink.bind(this);
    }



    salvarLink() {
        salvar('03', 'titulo', 'xxxxxxasdasdxxxxxxxxxxxxxxx');
    }

    getDados() {
        getLinks();
    }

    render() {
        return (
            <div>
                <header>
                    <button onClick={this.salvarLink}>salvar</button>
                    <br />
                    <button onClick={this.getDados}>get</button>
                </header>
            </div>
        );
    }
}

export default Base64;