import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 login-sign-up">
                        <div className="sign-up">
                            <h2>Register</h2>
                            <form>
                                <input placeholder='First Name' required/><br />
                                <input placeholder='Last Name' required/><br />
                                <input placeholder='Email' required/><br />
                                <input placeholder='Password' required/><br />
                                <input placeholder='Confirm Password' required/><br />
                                <button className="btn">Sign Up</button>
                            </form>
                            <p>Already have an account? <Link to="/login">Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp