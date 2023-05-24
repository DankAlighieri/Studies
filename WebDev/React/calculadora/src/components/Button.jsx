import React from "react";
import './Button.css';

// priorizar componenetes funcionais a componenetes de classe, pois os de classe possuem estado e esse estado pode ser alterado, podendo causar algum problema na aplicacao

export default props => {
    let classes = 'button ';
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
    <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
    </button>
    )
}