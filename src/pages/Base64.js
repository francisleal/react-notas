import React, { Component } from 'react';
import { IconSave, IconPen, IconTrash, IconList, IconSpinner } from '../assets/Icon';
import { salvarLinksFirebase, firebaseDatabase, firebaseUsuario } from '../config/Fire';

// var mock = [
//     {
//         id: '1',
//         titulo: 'lorem ipsum',
//         url: 'lorem ipsum',
//         icon: 'important'
//     },
//     {
//         id: '2',
//         titulo: 'sit amet',
//         url: 'sit amet',
//         icon: 'link'
//     }
// ]

class Base64 extends Component {

    constructor() {
        super();

        this.state = ({
            links: []
        });

        this.salvarLink = this.salvarLink.bind(this);
    }

    componentDidMount() {
        this._fetchLinks();
    }

    _fetchLinks() {
        firebaseDatabase.ref(firebaseUsuario.currentUser.uid).on('value', (data) => {
            this.setState({
                links: Object.values(data.toJSON())
            });
        });
    }

    salvarLink() {
        salvarLinksFirebase('2', 'sit amet', 'url', 'icon');
    }

    render() {

        const { links } = this.state;

        return (
            <div>
                <header>
                    <button onClick={this.salvarLink}>salvar</button>
                    <br />
                    <button onClick={this.getDados}>get</button>
                </header>

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
                                        {/* <button type="button" onClick={this.delete.bind(this, link)} className="btn btn-primary btn-sm btn-light"><IconTrash tamanho="16" /></button> */}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Base64;