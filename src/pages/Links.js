import React, { Component } from 'react';
import ModalLinks from '../componentes/ModalLinks';
import { IconPen, IconTrash, IconList, IconSpinner } from '../assets/Icon';

import { salvarLinksFirebase, firebaseDatabase, firebaseUsuario, removerLinkFirebase } from '../config/Fire';

class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            links: [],

            titulo: '',
            link: '',
            selectedRadio: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleTituloChange = this.handleTituloChange.bind(this)

        this.handleLinkChange = this.handleLinkChange.bind(this)

        this.handleRadioChange = this.handleRadioChange.bind(this)

        this.limparCampos = this.limparCampos.bind(this)
    }

    componentDidMount() {
        this._fetchLinks()
    }

    _fetchLinks() {
        firebaseDatabase.ref(firebaseUsuario.currentUser.uid).on('value', (data) => {
            this.setState({
                links: Object.values(data.toJSON()),
                isLoaded: true
            });
        });
    }

    handleTituloChange(event) {
        this.setState({ titulo: event.target.value });
    }

    handleLinkChange(event) {
        this.setState({ link: event.target.value });
    }

    handleRadioChange(event) {
        this.setState({ selectedRadio: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { titulo, link, selectedRadio } = this.state;

        let _id = `${titulo.toLowerCase().trim()}${Math.random()}`.replace(/\s/g, '').replace(/['.']/g, '');

        salvarLinksFirebase(_id, titulo, link, selectedRadio);
    }

    delete(item) {
        removerLinkFirebase(item.id);
    }

    limparCampos() {
        this.setState({ titulo: '', link: '' });
        document.querySelector('form').reset();
    }

    render() {

        const { error, isLoaded, links } = this.state;

        if (error) {
            return <div>Error - API não econtrada --> {error.message}</div>;
        } else if (!isLoaded) {
            return <div><IconSpinner tamanho="16" /></div>;
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h4">Links</h1>

                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#myModal">Novo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ModalLinks
                        modalTitulo={this.state.titulo}
                        tituloChange={this.handleTituloChange}

                        modalLink={this.state.link}
                        linkChange={this.handleLinkChange}

                        radioChange={this.handleRadioChange}

                        ModalLimparCampos={this.limparCampos}

                        formSubmit={this.handleSubmit} >
                    </ModalLinks>

                    <div className="card">
                        <div className="card-header">
                            <IconList tamanho="16" />  Lista de Links
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Link</th>
                                                <th>Tipo</th>
                                                <th style={{ textAlign: 'right' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {links.map((link) => {
                                                return (
                                                    <tr key={link.id}>
                                                        <td><a href={link.url} rel='noreferrer noopener' target='_blank'>{link.titulo}</a></td>
                                                        <td>{link.icon}</td>
                                                        <td style={{ textAlign: 'right' }}>
                                                            {/* <button type="button" className="btn btn-primary btn-sm btn-success"><IconSave tamanho="16" /></button> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-light"><IconPen tamanho="16" /></button>
                                                            <button type="button" onClick={this.delete.bind(this, link)} className="btn btn-primary btn-sm btn-light"><IconTrash tamanho="16" /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Links;


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