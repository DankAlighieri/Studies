import './NavC.css'
import React from 'react'

export default props =>
    <nav className="menu">
        <a href="#/">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </a>
    </nav>
