import React, { Component } from 'react';

class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            links: []
        }
    }

    componentDidMount() {

        fetch('https://meus-dados-8d039.firebaseio.com/links.json')
            .then(response => response.json())
            .then(
                data => {
                    let json = [];
                    Object.values(data).forEach(links => { json.push(links) });
                    this.setState({ isLoaded: true, links: json });
                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
    }

    render() {

        const { error, isLoaded, links } = this.state;

        if (error) {
            return <div>Error - API não econtrada {error.message}</div>;
        } else if (!isLoaded) {
            return <div><i className='fas fa-circle-notch fa-w-16 fa-spin fa-lg'></i></div>;
        } else {
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