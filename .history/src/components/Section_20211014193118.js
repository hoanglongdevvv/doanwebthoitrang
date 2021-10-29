import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from 'react-router-dom'
import Cart from './section/Cart'
im
import About from './section/About'
import Page from './Page.jsx'
import Seach from './section/Seach'
export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Page} exact /> 
               
                <Route path="/" component={Products} exact /> 
                <Route path="/seach" component={Seach} exact /> 
                <Route path="/product" component={Products} exact /> 
                <Route path="/product/:id" component={Details} exact /> 
                <Route path="/Cart" component={Cart} exact /> 
                <Route path="/About" component={About} exact /> 
                <Route path="/Support" component={Support} exact /> 
            </section>
        )
    }
}

export default Section
