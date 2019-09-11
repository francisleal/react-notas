import React, { Component } from 'react';

import { IconFolderOpen } from '../../assets/Icon';

import { removerAnotacoesFirebase } from '../../config/Fire';

class CardAnotacoes extends Component {

    delete(item) {
        removerAnotacoesFirebase(item.id);

        console.log(item);
    }

    render() {
        return (
            <div className="d-flex flex-wrap mb-2">
                {this.props.anotacoes.map(anotacao => {
                    return (
                        <div style={{ width: 250 }} className="card m-2" key={anotacao.id}>
                            <div className="card-header" >
                                <span style={{ cursor: "pointer" }} data-toggle="modal" data-target="#myModal" ><IconFolderOpen tamanho="20" /> {anotacao.titulo}</span>

                                <span style={{ float: "right", cursor: "pointer" }} onClick={this.delete.bind(this, anotacao)} >x</span>
                            </div>
                            <div style={{ height: 130, overflow: 'hidden' }} className="card-body">
                                {anotacao.nota}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardAnotacoes;