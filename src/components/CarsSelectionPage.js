import React from "react"
import Products from "./ProductsPage"

function Cars() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 filter">
                            
                        </div>
                    </div>
                </div>
                <div className="container products">
                    <div className="row row-flex">
                        <Products />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cars