import React, { Component } from 'react';

class Links extends Component {
    constructor(props) {
        super();
        this.state = {
            links: [
                {
                    id: 1,
                    link: 'https://www.w3schools.com/',
                    tipo: 'importante'
                },
                {
                    id: 2,
                    link: 'lorem ipsum sit amet 1',
                    tipo: 'e-mail'
                },
                {
                    id: 3,
                    link: 'lorem ipsum sit amet 2',
                    tipo: 'importante'
                }
            ]
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <i className='fas fa-edit'></i>  Lista de Links
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Link</th>
                                        <th>Tipo</th>
                                        <th style={{textAlign:'right'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.links.map((link, index) => {
                                        console.log('link ',link);
                                        return (
                                            <tr key={link.id}>
                                                <td><a href={link.link} rel='noreferrer noopener' target='_blank'>{link.link}</a></td>
                                                <td>{link.tipo}</td>
                                                <td style={{textAlign:'right'}}>
                                                    <button type="button" className="btn btn-primary btn-sm btn-success"><i className='fas fa-save'></i></button>
                                                    <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-pen'></i></button>
                                                    <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-trash'></i></button>
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

export default Links;