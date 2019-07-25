import React, { Component } from 'react';

class Anotacoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anotacoes: []
        }
    }

    componentDidMount() {
        fetch('https://meus-dados-8d039.firebaseio.com/anotacoes.json')
            .then(response => response.json())
            .then(
                data => {
                    let json = [];

                    Object.values(data).forEach(anotacoes => {
                        json.push(anotacoes);
                    })

                    this.setState({ anotacoes: json });
                }
            )
    }


    render() {

        const { anotacoes } = this.state;

        return (
            <div className="">
                <div className="d-flex flex-wrap mb-2">
                    {anotacoes.map(anotacao => {
                        return (
                            <div style={{ width: 250}} className="card m-2" key={anotacao.id}>
                                <div className="card-header">
                                    {anotacao.titulo}
                                </div>
                                <div style={{height: 130,overflow: 'hidden'}} className="card-body">
                                    {anotacao.descricao}
                                </div>
                            </div>
                        );
                    })}

                    
                    <div className="card">
                        <div className="card-header">
                            Destaque
                        </div>
                        <div className="card-body">
                            Lorem ipsum sit amet dolor
                            Lorem ipsum sit amet dolor
                            Lorem ipsum sit amet dolor
                            Lorem ipsum sit amet dolor
                            Lorem ipsum sit amet dolor
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Anotacoes;