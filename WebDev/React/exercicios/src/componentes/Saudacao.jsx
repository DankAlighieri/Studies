import React, { Component } from "react";

export default class Saudacao extends Component {

    // setando o estado componente para que ele possa ser alterado
    state = {
        // pegando os atributos diretamente da chamada da funcao dentro do index
        tipo: this.props.tipo,
        nome: this.props.tipo
    };

    // criando um constructor para amarrar a chamada do this para a classe Saudacao
    constructor(props) {
        // chamando a funcao super para ler os argumentos
        super(props);
        // amarrando a chamada do this.setTipo para a classe em que se encontra
        this.setTipo = this.setTipo.bind(this);
    };

    // setando o valor do estado de tipo para aquele recebido pelo input
    setTipo(e) {
        this.setState({ tipo: e.target.value })
    };
    
    setNome(e) {
        this.setState({ nome: e.target.value })
    };

    // gerando os componentes 
    render () {
        const { tipo, nome } = this.state;

        return (
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    };
};