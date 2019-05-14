import React from "react"
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <>
            <header className={`nav-bar ${props.pageClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <h1><Link to="/"><img src="/img/logo-small.png" alt="L'VRT Rentals" title="L'VRT Rentals" /></Link></h1>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <ul>
                                <li><Link to="/rent">Rent</Link></li>
                                <li><Link to="/cars/vehicles">Cars</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/faqs">FAQS</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header