import React, { Component } from 'react';

import { IconPen, IconTrash, IconList } from '../assets/Icon';

import { removerLinkFirebase } from '../config/Fire';

class CardLinks extends Component {

    delete(item) {
        removerLinkFirebase(item.id);
    }

    // edit(item) {
    //     console.log(item);
    // }

    render() {

        return (
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
                                    {this.props.links.map((link) => {
                                        return (
                                            <tr key={link.id}>
                                                <td><a href={link.url} rel='noreferrer noopener' target='_blank'>{link.titulo}</a></td>
                                                <td>{link.icon}</td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <button type="button" onClick={this.props.edit.bind(this, link)} className="btn btn-primary btn-sm btn-light" data-toggle="modal" data-target="#myModal"><IconPen tamanho="16" /></button>
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
        );
    }
}

export default CardLinks;