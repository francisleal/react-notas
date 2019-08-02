import React, { Component } from 'react';
import { IconSave, IconPen, IconTrash, IconList, IconSpinner } from '../assets/Icon';

class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            links: [],

            selectedRadio: '',
            titulo: '',
            link: '',
            tipo: ''
        }

        this.handleRadioChange = this.handleRadioChange.bind(this)
    }


    getAPILinks() {
        return fetch('https://meus-dados-8d039.firebaseio.com/linksReact.json')
    }

    onSuccessLinkRequest(data) {
        let json = [];
        Object.values(data).forEach(links => { json.push(links) });
        this.setState({ isLoaded: true, links: json });

        console.log(data)
        console.log(json)
    }

    onErrorLinkRequest(error) {
        this.setState({ isLoaded: true, error });
    }

    updateList() {
        this.getAPILinks()
            .then(response => response.json())
            .then(response => this.onSuccessLinkRequest(response))
            .catch(error => this.onErrorLinkRequest(error))
    }

    componentDidMount() {
        this.updateList()
    }

    handleTituloChange(event) {
        this.setState({ titulo: event.target.value });
    }

    handleLinkChange(event) {
        this.setState({ link: event.target.value });
    }

    handleTipoChange(event) {
        this.setState({ link: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { titulo, link, selectedRadio } = this.state;

        let _id = `${titulo.toLowerCase().trim()}${Math.random()}`.replace(/\s/g, '').replace(/['.']/g, '');

        let arrayData = {
            id: _id,
            titulo: titulo,
            url: link,
            icon: selectedRadio
        };
        console.log(arrayData);

        fetch('https://meus-dados-8d039.firebaseio.com/linksReact.json', { method: 'POST', body: JSON.stringify(arrayData) })
            .then(response => { return response.json() })
            .then(data => { console.log('arrayData:', data) });

        this.updateList()
    }

    handleRadioChange(event) {
        this.setState({
            selectedRadio: event.currentTarget.value
        })
    }

    delete(item) {
        const links = this.state.links.filter(i => i.id !== item.id)
        this.setState({ links });


        this.updateList();
        console.log(item);
    }

    limparCampos() {
        this.setState({ selectedRadio: '', titulo: '', link: '', tipo: '' })
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

                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Adicionar novo link</h4>
                                    <button type="button" className="close" data-dismiss="modal"></button>
                                </div>

                                <form onSubmit={this.handleSubmit.bind(this)} ref="form" className="was-validated" id="formLink">
                                    {/* body modal */}
                                    <div className="modal-body">

                                        <div className="form-group">
                                            <label htmlFor="email">Título</label>
                                            <input type="text" value={this.state.titulo} onChange={this.handleTituloChange.bind(this)} className="form-control" id="titulo" placeholder="informe título" name="titulo" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pwd">Link</label>
                                            <input type="text" value={this.state.link} onChange={this.handleLinkChange.bind(this)} className="form-control" id="link" placeholder="Informe novo link " name="link" required />
                                        </div>

                                        <div className="form-check-inline">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" onChange={this.handleRadioChange} checked={this.state.selectedRadio === 'alm'} value="alm" className="custom-control-input" id="RadioAlm" name="radioTipo" required />
                                                <label className="custom-control-label" htmlFor="RadioAlm">ALM</label>
                                            </div>
                                        </div>

                                        <div className="form-check-inline">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" onChange={this.handleRadioChange} checked={this.state.selectedRadio === 'link'} value="link" className="custom-control-input" id="RadioLink" name="radioTipo" />
                                                <label className="custom-control-label" htmlFor="RadioLink">Link</label>
                                            </div>
                                        </div>

                                        <div className="form-check-inline">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" onChange={this.handleRadioChange} checked={this.state.selectedRadio === 'email'} value="email" className="custom-control-input" id="RadioEmail" name="radioTipo" />
                                                <label className="custom-control-label" htmlFor="RadioEmail">E-mail</label>
                                            </div>
                                        </div>

                                        <div className="form-check-inline">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" onChange={this.handleRadioChange} checked={this.state.selectedRadio === 'importante'} value="importante" className="custom-control-input" id="RadioImportante" name="radioTipo" />
                                                <label className="custom-control-label" htmlFor="RadioImportante">Importante</label>
                                            </div>
                                        </div>


                                    </div>

                                    {/* footermodal */}
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Salvar</button>
                                        <button type="button" onClick={this.limparCampos.bind(this)} className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


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
                                                            <button type="button" className="btn btn-primary btn-sm btn-success"><IconSave tamanho="16" /></button>
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