import './nav.css'
import React from 'react'
import NavItem from './navItem'

export default props =>

    <aside className="menu-area">
        <nav className='menu'>
            <NavItem url='/' icon='home' title='Inicio'/>
            <NavItem url='/users' icon='users' title='Usuario'/>
        </nav>
    </aside>
