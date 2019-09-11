import React, { Component } from 'react';
import HeaderNotas from '../componentes/HeaderNotas';
import ModalAnotacoes from '../componentes/anotacoes/ModalAnotacoes';
import CardAnotacoes from '../componentes/anotacoes/CardAnotacoes';
import { IconSpinner } from '../assets/Icon';

import { salvarAnotacoesFirebase, firebaseDatabase, firebaseUsuario } from '../config/Fire';

class Anotacoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            anotacoes: [],

            id: '',
            titulo: '',
            nota: ''
        }
    }

    componentDidMount() {
        this._fetchNotas();
    }

    _fetchNotas() {
        firebaseDatabase.ref(`${firebaseUsuario.currentUser.uid}/anotacoes`).on('value', (data) => {

            let dataJson = data.toJSON();

            if (dataJson !== null) {
                this.setState({ anotacoes: Object.values(dataJson) });
            } else {
                this.setState({ anotacoes: [] });
            }

            this.setState({ isLoaded: true });

        });
    }

    randomID(id) {
        if (this.state.titulo === '') {
            this.setState({ id });
        }
    }

    modalNotaChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.randomID(`${Math.random()}`.replace(/['.']/g, ''));
    }

    handleSubmit(event) {
        event.preventDefault();

        const { id, titulo, nota } = this.state;

        salvarAnotacoesFirebase(id, titulo, nota);
    }

    modalLimparCampos() {
        this.setState({ titulo: '', nota: '' });
        document.querySelector('form').reset();
    }

    render() {

        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Error - API não econtrada --> {error.message}</div>;
        } else if (!isLoaded) {
            return <div><IconSpinner tamanho="16" /></div>;
        } else {
            return (
                <div>
                    <HeaderNotas titulo="Anotações" />

                    <ModalAnotacoes
                        titulo={this.state.titulo}
                        nota={this.state.nota}

                        modalNotaChange={this.modalNotaChange.bind(this)}
                        modalLimparCampos={this.modalLimparCampos.bind(this)}
                        formSubmit={this.handleSubmit.bind(this)} >                        
                    </ModalAnotacoes>

                    <CardAnotacoes anotacoes={this.state.anotacoes} />
                </div>
            );
        }
    }
}

export default Anotacoes;