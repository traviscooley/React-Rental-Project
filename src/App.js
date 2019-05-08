import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Cars from './components/Cars'
import ProductSingle from './components/ProductSingle'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop>
            <Route render={props => {
              let pageClass = props.location.pathname === '/' ? 'following-nav-bar' : 'nav-background'
              return <Header pageClass={pageClass} />
            }} />
            <Route exact={true} path='/' component={Home}/>
            <Route path='/cars/vehicles' component={Cars}/>
            <Route path='/vehicle/:id' component={ProductSingle}/>
            <Footer />
          </ScrollToTop>
        </Router>
      </>
    );
  }
}

export default App
