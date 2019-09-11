import React, { Component } from 'react';

class ModalAnotacoes extends Component {
    render() {
        return (
            <div>                
                {/* modal */}
                <div className="modal fade bd-example-modal-xl" id="myModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        {/* <div className="modal-content" style={{ backgroundColor : '#343a40'}}> */}
                            <div className="modal-header">
                                {/* <h4 className="modal-title"  style={{ color : '#ffffff'}}>Anotações</h4> */}
                                <h4 className="modal-title">Anotações</h4>
                                <button type="button" className="close" data-dismiss="modal"></button>
                            </div>

                            <form onSubmit={this.props.formSubmit} className="was-validated" id="formLink">

                                <div className="modal-body">

                                    <div className="form-group">
                                        <input type="text" value={this.props.titulo} onChange={this.props.modalNotaChange} className="form-control" id="titulo" placeholder="Título" name="titulo" required />
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control" value={this.props.nota} onChange={this.props.modalNotaChange} placeholder="Notas" rows="20" name="nota" required></textarea>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Salvar</button>
                                    <button type="button" onClick={this.props.modalLimparCampos} className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAnotacoes;