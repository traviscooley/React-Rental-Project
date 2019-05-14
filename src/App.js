import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/HomePage"
import Rent from "./components/Rent"
import Cars from "./components/CarsSelectionPage"
import About from "./components/AboutPage"
import Faq from "./components/FaqPage"
import ProductSinglePage from "./components/ProductSinglePage"
import Login from "./components/LoginPage"
import SignUp from "./components/SignUpPage"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop>
            <Route render={props => {
              let pageClass = props.location.pathname === "/" ? "following-nav-bar" : "nav-background"
              return <Header pageClass={pageClass} />
            }} />
            <Route exact={true} path="/" component={Home}/>
            <Route path="/rent" component={Rent}/>
            <Route path="/cars/vehicles" component={Cars}/>
            <Route path="/vehicle/:id" component={ProductSinglePage}/>
            <Route path="/about" component={About}/>
            <Route path="/faqs" component={Faq}/>
            <Route path="/login" component={Login}/>
            <Route path="/sign-up" component={SignUp}/>
            <Footer />
          </ScrollToTop>
        </Router>
      </>
    );
  }
}

export default App
