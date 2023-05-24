import React, {Component} from "react";
import axios from 'axios'
import Main from "../templates/main";

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuario: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {

    state = {...initialState};

    componentWillMount() {
        // faz uma requisicao get
        axios(baseUrl).then(resp => {
            // colocando a lista do db dentro da lista atual
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user });
    };

    save() {
        const user = this.state.user;
        // if there's an id 'put' else 'post'
        const method = user.id ? 'put' : 'post';
        // se o id existir vai retornar a url base com o id, se nao, retorna apenas a url base
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        // atualizando a lista local
        axios[method](url, user)
            .then(resp => {
                // resp.data retorno do jsonserver com o usuario preenchido 
                const list = this.getUpdatedList(resp.data);
                // altera o user e atualiza a lista retornada na funcao anterior
                this.setState({ user: initialState.user, list });
            })
    }

    getUpdatedList(user, add = true) {
        // clonando a lista e retirando o usuario passado como parametro atraves do seu id
        const list = this.state.list.filter(u => u.id !== user.id);
        // adicionando o usuario na primeira posicao da lista se tiver usuario
        if(add) list.unshift(user);
        // retornando a lista
        return list
    }

    updateField(event) {
        //clonando o objeto usuario
        const user = {...this.state.user};
        // adicionando o valor que foi digitado 
        user[event.target.name] = event.target.value
        // setando o valor no estado 
        this.setState({ user })
    }

    renderFrom() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" 
                                name="email"
                                value={this.state.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email..."/>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderFrom()}
                {this.renderTable()}
            </Main>
        )
    }
}