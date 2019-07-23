import React, { Component } from 'react';

class HeaderNotas extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h4">{this.props.titulo}</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Novo</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderNotas;