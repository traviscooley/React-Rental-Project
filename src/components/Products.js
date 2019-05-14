import React from "react"

function Product(props) {
    return(
        <React.Fragment key={props.id}>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-flex">
                <div className="wrapper-product">
                    <img src={`/img/${props.image}`} className="img-responsive" alt={props.model + "-" + props.color} />
                    <h2>{props.model}</h2>
                    <h3>${props.price} | Per Day</h3>
                    <a href={`/vehicle/${props.id}`} title="Continue" className="btn">Select</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product