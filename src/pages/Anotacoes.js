import React, { Component } from 'react';
import { IconFolderOpen, IconSpinner } from '../assets/Icon';

class Anotacoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            anotacoes: []
        }
    }

    componentDidMount() {
        fetch('https://meus-dados-8d039.firebaseio.com/anotacoes.json')
            .then(response => response.json())
            .then(
                data => {
                    let json = [];

                    Object.values(data).forEach(anotacoes => {
                        json.push(anotacoes);
                    })

                    this.setState({ isLoaded: true, anotacoes: json });
                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
    }


    render() {

        const { error, isLoaded, anotacoes } = this.state;

        if (error) {
            return <div>Error - API não econtrada --> {error.message}</div>;
        } else if (!isLoaded) {
            return <div><IconSpinner tamanho="16" /></div>;
        } else {
            return (
                <div className="">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h4">Anotações</h1>

                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Novo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap mb-2">
                        {anotacoes.map(anotacao => {
                            return (
                                <div style={{ width: 250 }} className="card m-2" key={anotacao.id}>
                                    <div className="card-header">
                                        <IconFolderOpen tamanho="20" /> {anotacao.titulo}
                                    </div>
                                    <div style={{ height: 130, overflow: 'hidden' }} className="card-body">
                                        {anotacao.descricao}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default Anotacoes;