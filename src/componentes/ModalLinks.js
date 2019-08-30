import React, { Component } from 'react';

class ModalLinks extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Adicionar novo link</h4>
                            <button type="button" className="close" data-dismiss="modal"></button>
                        </div>
                        
                        <form  onSubmit={this.props.formSubmit} className="was-validated" id="formLink">

                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="email">Título</label>
                                    <input type="text" value={this.props.modalTitulo} onChange={this.props.tituloChange} className="form-control" id="titulo" placeholder="informe título" name="titulo" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Link</label>
                                    <input type="text" value={this.props.modalLink} onChange={this.props.linkChange} className="form-control" id="link" placeholder="Informe novo link " name="link" required />
                                </div>

                                {/* form-check-inline */}
                                <div onChange={this.props.radioChange}>

                                    <div className="form-check-inline">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" value="alm" className="custom-control-input" id="RadioAlm" name="radioTipo" required />
                                            <label className="custom-control-label" htmlFor="RadioAlm">ALM</label>
                                        </div>
                                    </div>

                                    <div className="form-check-inline">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" value="link" className="custom-control-input" id="RadioLink" name="radioTipo" />
                                            <label className="custom-control-label" htmlFor="RadioLink">Link</label>
                                        </div>
                                    </div>

                                    <div className="form-check-inline">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" value="email" className="custom-control-input" id="RadioEmail" name="radioTipo" />
                                            <label className="custom-control-label" htmlFor="RadioEmail">E-mail</label>
                                        </div>
                                    </div>

                                    <div className="form-check-inline">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" value="importante" className="custom-control-input" id="RadioImportante" name="radioTipo" />
                                            <label className="custom-control-label" htmlFor="RadioImportante">Importante</label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Salvar</button>
                                <button type="button" onClick={this.props.ModalLimparCampos} className="btn btn-danger" data-dismiss="modal">Fechar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalLinks;