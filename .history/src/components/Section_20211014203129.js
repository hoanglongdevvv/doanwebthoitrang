import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import { Route, Switch } from 'react-router-dom'
import Cart from './section/Cart'
import Support from './section/Support'
import About from './section/About'
import Page from './Page.jsx'
import Seach from './section/Seach'
import Pagenotfound from './PageNotFound'
export class Section extends Component {
    render() {
        return (
            <>
                <section>
                
                    <Switch>
                        <Route path="/" component={Page} exact />
                       
                        <Route path="/seach" component={Seach} exact />
                        <Route path="/product" component={Products} exact />
                        <Route path="/product/:id" component={Details} exact />
                        <Route path="/Cart" component={Cart} exact />
                        <Route path="/About" component={About} exact />
                        <Route path="/Support" component={Support} exact />
                        <Route component={Pagenotfound} />
                    </Switch>
                </section>
            </>
        )
    }
}

export default Section