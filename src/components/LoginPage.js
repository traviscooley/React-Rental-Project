import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 login-sign-up">
                        <div className="login">
                            <h2>Login</h2>
                            <form>
                                <input placeholder='Username' required/><br />
                                <input placeholder='Password' required/><br />
                                <button className="btn">Login</button>
                            </form>
                            <p><a href="#link">Forgot Password?</a></p>
                            <p>Not registered? <Link to='/sign-up'>Creat an Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login