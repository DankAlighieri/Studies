import React from "react";
import { Fragment } from "react";

// function BomDia(props) {
//     return <h1>Bom dia, {props.nome}!</h1>
// }

// export default BomDia()

// exportando atraves de array
// export default props => [
//         <h1>Bom dia, {props.nome}!</h1>,
//         <h2>Ate breve!</h2>
//     ]

//exportando atraves de div
// export default props =>
//     <div>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Ate breve!</h2>
//     </div>


// exportando atraves do fragment 

let saudacao = props =>
<Fragment>
    <h1 key='h1'>Bom dia, {props.nome}!</h1>
    <h2 key='h2'>Ate breve!</h2>
</Fragment>
export default saudacao
    