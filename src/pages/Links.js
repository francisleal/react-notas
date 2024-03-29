import React, { Component } from 'react';
import ModalLinks from '../componentes/links/ModalLinks';
import CardLinks from '../componentes/links/CardLinks';
import HeaderNotas from '../componentes/HeaderNotas';
import { IconSpinner } from '../assets/Icon';

import { salvarLinksFirebase, firebaseDatabase, firebaseUsuario } from '../config/Fire';

class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            links: [],

            id: '',
            titulo: '',
            link: '',
            tipo: ''
        }
    }

    componentDidMount() {
        this._fetchLinks()
    }

    _fetchLinks() {
        firebaseDatabase.ref(`${firebaseUsuario.currentUser.uid}/links`).on('value', (data) => {

            let dataJson = data.toJSON();

            if (dataJson !== null) {
                this.setState({ links: Object.values(dataJson) });
            } else {
                this.setState({ links: [] });
            }

            this.setState({ isLoaded: true });

        });
    }

    randomID(id) {
        if (this.state.titulo === '') {
            this.setState({ id });
        }
    }

    modalLinkChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.randomID(`${Math.random()}`.replace(/['.']/g, ''));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id, titulo, link, tipo } = this.state;
        salvarLinksFirebase(id, titulo, link, tipo);
    }

    limparCampos() {
        this.setState({ titulo: '', link: '' });
        document.querySelector('form').reset();
    }

    edit(item) {
        this.setState(
            {
                id: item.id,
                titulo: item.titulo,
                link: item.url,
                tipo: item.icon
            }
        );
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

                    <HeaderNotas titulo="Links" />

                    <ModalLinks
                        titulo={this.state.titulo}
                        link={this.state.link}
                        tipo={this.tipo}

                        modalLinkChange={this.modalLinkChange.bind(this)}
                        ModalLimparCampos={this.limparCampos.bind(this)}
                        formSubmit={this.handleSubmit.bind(this)} >
                    </ModalLinks>

                    <CardLinks links={this.state.links} edit={this.edit.bind(this)} />
                </div>
            );
        }
    }
}

export default Links;

/* <button type="button" className="btn btn-primary btn-sm btn-success"><IconSave tamanho="16" /></button> */

// const links = this.state.links.filter(i => i.id !== item.id)
        // this.setState({ links });

// const request = async () => {
//     let json = [];

//     try {
//         const response = await fetch('https://meus-dados-8d039.firebaseio.com/links.json');
//         const data = await response.json();
//         Object.values(data).forEach(links => { json.push(links) });

//         this.setState({
//             isLoaded: true,
//             links: json
//         });

//     } catch (error) {
//         this.setState({
//             isLoaded: true,
//             error: true
//         });
//     }
// }
// request();




    // getAPILinks() {
    //     return fetch('https://meus-dados-8d039.firebaseio.com/linksReact.json')
    // }

    // onSuccessLinkRequest(data) {
    //     let json = [];
    //     Object.values(data).forEach(links => { json.push(links) });
    //     this.setState({ isLoaded: true, links: json });

    //     console.log(data)
    //     console.log(json)
    // }

    // onErrorLinkRequest(error) {
    //     this.setState({ isLoaded: true, error });
    // }

    // updateList() {
    //     this.getAPILinks()
    //         .then(response => response.json())
    //         .then(response => this.onSuccessLinkRequest(response))
    //         .catch(error => this.onErrorLinkRequest(error))
    // }

    // componentDidMount() {
    //     this.updateList()
    // }