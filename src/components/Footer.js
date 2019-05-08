import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="company-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12 hidden-lg">
                                <Link to='/'><img src="/img/logo-medium.png" alt="L'VRT Rentals" title="L'VRT Rentals" /></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col-lg-5">
                                <h2>About Us</h2>
                                <p>Lorem ipsum, doloretur adipisicing elit. Voluptatum odio, incidunt, quia eveniet officia laborum temporibus repudiandae distinctio ut, illum repellat pariatur repellendus natus veritatis reprehenderit facere consequatur veniam totam?</p>
                                <button>Learn More</button>
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <h2>Vehicles</h2>
                                <ul>
                                    <li><a href="#link">Economy</a></li>
                                    <li><a href="#link">Exotic</a></li>
                                    <li><a href="#link">Luxury</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-lg-4">
                                <h2>Contact Us</h2>
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>119 North State Street Jackson, MS</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>(123)-456-7890</span>
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i>
                                        <a href="mailto:">123@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bottom-bar">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <a href="#link"><i className="fab fa-facebook-square"></i></a>
                            <a href="#link"><i className="fab fa-twitter-square"></i></a>
                            <a href="#link"><i className="fab fa-youtube-square"></i></a>
                            <a href="#link"><i className="fab fa-pinterest-square"></i></a>
                            <h2>©Copyright</h2>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer