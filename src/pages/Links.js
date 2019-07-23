import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <i className='fas fa-edit'></i>  Lista de Links
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ALM</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>https://marvelapp.com/</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-save'></i></button>
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-pen'></i></button>
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-pen'></i></button>
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Links</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {/* <button type="button" className="btn btn-primary btn-sm btn-success"><i className='fas fa-save'></i></button> */}
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-pen'></i></button>
                                            <button type="button" className="btn btn-primary btn-sm btn-light"><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>E-mails</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Importantes</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                    </tr>
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