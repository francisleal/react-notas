import React, { Component } from 'react';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { nome: '', sobrenome: '', gender: '' };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log(`Um nome foi enviado: ${this.state.nome} e ${this.state.sobrenome} gender ${this.state.gender}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Content
                    nome={this.state.nome}
                    sobrenome={this.state.sobrenome}
                    gender={this.state.gender}
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

class Content extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Nome:<input type="text" name="nome" value={this.props.nome} onChange={this.props.handleChange} />
                    </label>
                    <br />
                    <label>
                        Sobre Nome:<input type="text" name="sobrenome" value={this.props.sobrenome} onChange={this.props.handleChange} />
                    </label>
                    <br />
                    <span onChange={this.props.handleChange}>
                        <label>
                            radio1:<input type="radio" name="gender" value='radio1' />
                        </label>
                        <br />
                        <label>
                            radio2:<input type="radio" name="gender" value='radio2' />
                        </label>
                    </span>
                    <br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default Reservation;