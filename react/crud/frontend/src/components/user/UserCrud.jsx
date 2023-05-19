import React, {Component} from "react";
import Main from "../templates/main";

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuario: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuario
            </Main>
        )
    }
}