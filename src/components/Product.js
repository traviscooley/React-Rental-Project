import React from 'react'

function Product(props) {
    return(
        <React.Fragment key={props.id}>
            <div className="col-sm-6 col-md-4 col-flex">
                <div className="wrapper-product">
                    <img src={`/img/${props.image}`} className="img-responsive" alt={props.model + '-' + props.color} />
                    <h3>{props.model}</h3>
                    <p><strong>${props.price}</strong></p>
                    <a href={`/vehicle/${props.id}`} title="Continue" className="btn">Select</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product