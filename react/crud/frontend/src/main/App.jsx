import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Home from '../components/home/home'
import Footer from '../components/templates/footer'
import NavC from '../components/templates/NavC'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav icon='home' title='Inicio'>
                {/* Refatorar utilizando props.children */}
            </Nav>
            <Home />
            <Footer />
        </div>
    </BrowserRouter>