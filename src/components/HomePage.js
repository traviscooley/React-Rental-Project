import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="container hero-container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12 hero-inner">
                        <h2>Love a Vehicle, Right for Travel</h2>
                        <p>Ad maxime nam vitae consectetur molestias quam id reprehenderit pariatur, assumenda sequi culpa perferendis doloremque accusantium illo suscipit totam nulla consequatur atque!</p>
                        <Link to="/about">Learn More</Link>
                    </div>
                </div>
            </div>  
            <div className="following-form-input form-input">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <form action="">
                                <div className="row hidden-xs">
                                    <div className="col-sm-6 col-md-offset-1 col-md-5 col-lg-offset-1 col-lg-5">
                                        <label>Pick Up Time:</label>
                                        <input type="date" />
                                        <input type="time" />
                                    </div>
                                    <div className="col-sm-6 col-md-5 col-lg-5">
                                        <label>Drop Off Date:</label>
                                        <input type="date" />
                                        <input type="time" />
                                        <span><button>Continue</button></span>
                                    </div>
                                </div>
                                <div className="row hidden-sm hidden-md hidden-lg">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <label>Pick Up Time:</label><br />
                                                <input type="date" />
                                                <input type="time" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <label>Drop Off Date:</label><br />
                                                <input type="date" />
                                                <input type="time" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <span><button>Continue</button></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className="approved-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h2>Features</h2>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="wrapper-feature-button hidden-xs hidden-sm">
                                    <Link to="/about">Learn More</Link>
                                </div>
                                <div className="approved-feature">
                                    <i className="fas fa-hourglass-half"></i>
                                    <h3>Rent Online & Save Time</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque autem, sit inventore, praesentium vero nobis architecto maxime consectetur aperiam deleniti numquam minima pariatur laudantium suscipit animi doloribus necessitatibus molestiae excepturi.</p>
                                </div>
                                <div className="wrapper-feature-button hidden-md hidden-lg">
                                    <Link to="/about">Learn More</Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="wrapper-feature-button hidden-xs hidden-sm">
                                    <Link to="/about">Learn More</Link>
                                </div>
                                <div className="approved-feature">
                                    <i className="fas fa-cogs"></i>
                                    <h3>Featured Engineers</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque autem, sit inventore, praesentium vero nobis architecto maxime consectetur aperiam deleniti numquam minima pariatur laudantium suscipit animi doloribus necessitatibus molestiae excepturi.</p>
                                </div>
                                <div className="wrapper-feature-button hidden-md hidden-lg">
                                    <Link to="/about">Learn More</Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="wrapper-feature-button hidden-xs hidden-sm">
                                    <Link to="/about">Learn More</Link>
                                </div>
                                <div className="approved-feature">
                                    <i className="fas fa-handshake"></i>
                                    <h3>Rent before Purchase</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque autem, sit inventore, praesentium vero nobis architecto maxime consectetur aperiam deleniti numquam minima pariatur laudantium suscipit animi doloribus necessitatibus molestiae excepturi.</p>
                                </div>
                                <div className="wrapper-feature-button hidden-md hidden-lg">
                                    <Link to="/about">Learn More</Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="wrapper-feature-button hidden-xs hidden-sm">
                                    <Link to="/about">Learn More</Link>
                                </div>
                                <div className="approved-feature">
                                    <i className="fas fa-car"></i>
                                    <h3>Request Vehicle</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque autem, sit inventore, praesentium vero nobis architecto maxime consectetur aperiam deleniti numquam minima pariatur laudantium suscipit animi doloribus necessitatibus molestiae excepturi.</p>
                                </div>
                                <div className="wrapper-feature-button hidden-md hidden-lg">
                                    <Link to="/about">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container add">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <img src="ad/ad1.jpg" alt="" className='img-responsive' />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <img src="ad/ad2.jpg" alt="" className='img-responsive' />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <img src="ad/ad3.jpg" alt="" className='img-responsive' />
                        </div>
                        <div className="col-sm-6 col-lg-4 hidden-xs hidden-lg">
                            <img src="ad/ad3.jpg" alt="" className='img-responsive' />
                        </div>
                    </div>
                </div>
                <div className="container featured-awards">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12 award-title">
                            <h2>Awards</h2>
                        </div>
                        <div className="col-sm-6 col-lg-6 featured-award featured-award-one-two featured-award-one-three">
                            <div className="row">
                                <div className="col-sm-2 col-lg-2">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="col-sm-9 col-lg-10">
                                    <h3>Lorem</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem nesciunt illo eum beatae, perferendis recusandae nihil quia labore ad quidem tempore veniam ipsa et rerum? Error ea iure cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 featured-award featured-award-one-two">
                            <div className="row">
                                <div className="col-sm-2 col-lg-2">
                                    <i className="fas fa-hands-helping"></i>
                                </div>
                                <div className="col-sm-9 col-lg-10">
                                    <h3>Lorem</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem nesciunt illo eum beatae, perferendis recusandae nihil quia labore ad quidem tempore veniam ipsa et rerum? Error ea iure cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 featured-award featured-award-one-three">
                            <div className="row">
                                <div className="col-sm-2 col-lg-2">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                <div className="col-sm-9 col-lg-10">
                                    <h3>Lorem</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem nesciunt illo eum beatae, perferendis recusandae nihil quia labore ad quidem tempore veniam ipsa et rerum? Error ea iure cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 featured-award">
                            <div className="row">
                                <div className="col-sm-2 col-lg-2">
                                    <i className="fas fa-file-signature"></i>
                                </div>
                                <div className="col-sm-9 col-lg-10">
                                    <h3>Lorem</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem nesciunt illo eum beatae, perferendis recusandae nihil quia labore ad quidem tempore veniam ipsa et rerum? Error ea iure cupiditate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home