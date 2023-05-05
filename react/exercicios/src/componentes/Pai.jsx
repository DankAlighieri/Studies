import React from "react";
import { childrenWithProps } from "../utils/utils"



export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props} />
            <Filho {...props} nome="Carla" /> */}
            {/* atributos que serao sobrescrevidos precisam ser declarados apos o spreading */}

            {childrenWithProps(props)}

        </ul>
    </div>
