import React from 'react'

function Loading() {
    return( 
        <div className="container">
            <div className="row">
                <div className="col-lg-12 loading">
                    <h2>Loading...</h2>
                    <img src="/img/Driving-Car-Loading.gif" className="img-responsive" alt="loading..." />
                </div>
            </div>
        </div>
    )
}

export default Loading